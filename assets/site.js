/* 회사 정보와 미정 앱 이름은 이 파일 한 곳에서 수정합니다. HTML은 빌드 없이 배포됩니다. */
const company = {
  name: '파이디아 스튜디오 / Paidia Studio',
  representative: '{{대표자명}}',
  registration: '{{사업자등록번호}}',
  commerce: '{{통신판매업신고번호}}',
  address: '{{사업장 주소}}',
  email: 'contact@paidiastudio.com',
  phone: '{{전화번호}}',
  privacyOfficer: '{{확인 필요: 개인정보 보호책임자 성명·직책}}',
  fridge: '{{냉장고 앱 이름}}',
  game: '{{게임 이름}}'
};
const fields = [
  ['상호 / Business name', 'name'], ['대표자 / Representative', 'representative'],
  ['사업자등록번호 / Business registration', 'registration'],
  ['통신판매업 신고번호 / E-commerce registration', 'commerce'],
  ['주소 / Address', 'address'], ['이메일 / Email', 'email'], ['전화 / Phone', 'phone']
];
document.querySelectorAll('[data-company-details]').forEach(container => {
  const list = document.createElement('dl');
  list.className = 'company-details';
  for (const [label, key] of fields) {
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
