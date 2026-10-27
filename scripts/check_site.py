"""Dependency-free checks; optional maintenance helper, never part of deployment."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import subprocess

ROOT = Path(__file__).resolve().parents[1]

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.ids, self.links, self.headings, self.languages = [], [], [], []
        self.stack, self.errors = [], []
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a: self.ids.append(a['id'])
        if tag in ('a', 'img', 'script', 'link'):
            value = a.get('href', a.get('src'))
            if value: self.links.append(value)
        if tag == 'h1': self.headings.append(tag)
        if tag == 'section': self.languages.append(a.get('lang'))

def check():
    errors = []
    files = list(ROOT.glob('**/*.html'))
    parsed = {p: Page(p.read_text(encoding='utf-8')) for p in files}
    references = 0
    for p, doc in parsed.items():
        rel = p.relative_to(ROOT)
        text = p.read_text(encoding='utf-8')
        if len(doc.headings) != 1: errors.append(f'{rel}: expected exactly one h1')
        if len(doc.ids) != len(set(doc.ids)): errors.append(f'{rel}: duplicate id')
        if not {'ko', 'en'} <= set(doc.languages): errors.append(f'{rel}: missing bilingual sections')
        if 'google-site-verification' not in text: errors.append(f'{rel}: verification comment missing')
        if 'site-header' not in text or 'site-footer' not in text: errors.append(f'{rel}: missing shared layout')
        for link in doc.links:
            u = urlsplit(link)
            if u.scheme in ('https', 'http', 'mailto', 'tel'): continue
            references += 1
            if not link.startswith('/') or link.startswith('//'):
                errors.append(f'{rel}: non-root URL {link}'); continue
            target = ROOT / unquote(u.path).lstrip('/')
            if target.is_dir(): target /= 'index.html'
            if not target.is_file(): errors.append(f'{rel}: missing {link}')
            elif u.fragment and target in parsed and unquote(u.fragment) not in parsed[target].ids:
                errors.append(f'{rel}: missing fragment {link}')
    expected = subprocess.check_output(['git', 'show', 'HEAD:CNAME'], cwd=ROOT)
    if (ROOT / 'CNAME').read_bytes() != expected: errors.append('CNAME changed')
    if not (ROOT / '.nojekyll').exists(): errors.append('.nojekyll missing')
    if errors:
        print('\n'.join(errors)); raise SystemExit(1)
    print(f'PASS: {len(files)} bilingual HTML pages, {references} local references, shared layouts, metadata, CNAME and .nojekyll.')

if __name__ == '__main__': check()
