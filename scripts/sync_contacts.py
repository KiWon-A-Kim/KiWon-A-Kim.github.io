"""Optional maintenance command: sync static contact fallbacks; no deployment build."""
from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[1]

def configuration():
    source = (ROOT / 'assets/site.js').read_text(encoding='utf-8')
    return json.loads(re.search(r'const publicEmails = (\{.*?\});', source, re.S)[1])

def sync():
    emails = configuration()
    changed = 0
    for path in ROOT.rglob('*.html'):
        old = path.read_text(encoding='utf-8')
        def anchor(match):
            tag = match[0]
            role = re.search(r'data-email="([^"]+)"', tag)
            if not role: return tag
            return re.sub(r'href="mailto:[^?"\s]+', 'href="mailto:' + emails[role[1]], tag)
        text = re.sub(r'<a\b[^>]*>', anchor, old)
        text = re.sub(r'<span data-email-text="([^"]+)">[^<]*</span>',
                      lambda m: f'<span data-email-text="{m[1]}">{emails[m[1]]}</span>', text)
        if text != old:
            path.write_text(text, encoding='utf-8')
            changed += 1
    print(f'Synchronized static email fallbacks in {changed} HTML files.')

if __name__ == '__main__': sync()
