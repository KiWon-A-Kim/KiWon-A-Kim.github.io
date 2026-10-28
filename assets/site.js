/* 공개 이메일 설정. 변경 후 python scripts/sync_contacts.py로 정적 HTML도 동기화합니다. */
const publicEmails = {
  "contact": "contact@paidiastudio.com",
  "support": "support@paidiastudio.com",
  "privacy": "privacy@paidiastudio.com"
};
/* 회사 정보와 미정 앱 이름은 이 파일 한 곳에서 수정합니다. HTML은 빌드 없이 배포됩니다. */
const company = {
  name: '파이디아 스튜디오',
  nameEn: 'Paidia Studio',
  representative: '김기원',
  representativeEn: 'KIWON KIM',
  registration: '170-31-01826',
  address: '경기도 파주시 쇠재로 30, 708동 1605호',
  addressEn: '708-1605, 30 Soejae-ro, Paju-si, Gyeonggi-do, Republic of Korea',
  email: publicEmails.contact,
  privacyOfficer: '김기원 (KIWON KIM)',
  controller: '파이디아 스튜디오 (Paidia Studio)',
  fridge: 'DueDish',
  game: '{{게임 이름}}'
};
const fields = {
  ko: [['상호', 'name'], ['대표자', 'representative'], ['사업자등록번호', 'registration'], ['사업장 주소', 'address'], ['대표 이메일', 'email']],
  en: [['Business name', 'nameEn'], ['Representative', 'representativeEn'], ['Business Registration No.', 'registration'], ['Business address', 'addressEn'], ['Email', 'email']]
};
document.querySelectorAll('[data-email]').forEach(link => {
  const address = publicEmails[link.dataset.email];
  if (!address) return;
  const query = link.getAttribute('href').split('?')[1];
  link.href = 'mailto:' + address + (query ? '?' + query : '');
});
document.querySelectorAll('[data-email-text]').forEach(node => {
  const address = publicEmails[node.dataset.emailText];
  if (address) node.textContent = address;
});
document.querySelectorAll('[data-company-details]').forEach(container => {
  if (container.closest('.site-footer')) {
    const lines = ['ko', 'en'].map(lang => {
      const line = document.createElement('p');
      line.lang = lang;
      line.textContent = lang === 'ko'
        ? `${company.name} | 대표 ${company.representative} | 사업자등록번호 ${company.registration} | `
        : `${company.nameEn} | Representative: ${company.representativeEn} | Business Registration No. ${company.registration} | `;
      const email = document.createElement('a');
      email.href = 'mailto:' + company.email;
      email.textContent = company.email;
      line.append(email);
      return line;
    });
    container.replaceChildren(...lines);
    return;
  }
  const lang = container.closest('[lang]').lang === 'en' ? 'en' : 'ko';
  const list = document.createElement('dl');
  list.className = 'company-details';
  for (const [label, key] of fields[lang]) {
    const row = document.createElement('div');
    const term = document.createElement('dt');
    const value = document.createElement('dd');
    term.textContent = label;
    value.textContent = company[key];
    if (company[key].includes('{{')) value.className = 'pending';
    row.append(term, value); list.append(row);
  }
  container.replaceChildren(list);
});
document.querySelectorAll('[data-company]').forEach(node => {
  const value = company[node.dataset.company];
  if (!value) return;
  node.textContent = value;
  if (value.includes('{{')) node.classList.add('pending');
});
document.querySelectorAll('.site-nav a').forEach(link => {
  if (link.pathname === location.pathname && !link.hash) link.setAttribute('aria-current', 'page');
});
