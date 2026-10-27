# Paidia Studio 공식 웹사이트

다음 수정·추가 요청은 [다음 작업 문서](docs/NEXT_STEPS.md)를 기준으로 진행합니다. 우선순위별 작업 목록, 수정 파일, 필요한 정보 양식, 검증 절차가 정리되어 있습니다. 자동 작업의 유지 조건은 [AGENTS.md](AGENTS.md)에 있습니다.

프레임워크·npm·빌드 도구 없이 GitHub Pages에 배포하는 정적 HTML + CSS 사이트입니다. 본문·정책·내비게이션은 정적 HTML입니다. 최소한의 바닐라 JS로 회사 공통 정보와 미정 앱 이름을 표시합니다.

- 도메인: https://paidiastudio.com
- Pages 설정: Deploy from a branch → `main` / `/ (root)`
- 배포 확인 (2026-10-27): `ca254f1`의 Pages deploy 단계 성공 및 실제 도메인의 최신 앱 상태 반영 확인. 주요 경로 HTTPS 200, 없는 경로 404 확인.
- 루트 `CNAME`은 기존 바이트 그대로 유지합니다. 삭제하거나 수정하지 마세요.
- `.nojekyll`로 Jekyll 처리를 비활성화합니다.
- 모든 페이지는 한국어가 먼저 나오고, 같은 페이지의 `#en`에 영어가 있습니다.
- 내부 링크와 자산은 루트 기준 경로입니다. mailto, canonical, sitemap 주소는 각 프로토콜에 맞는 주소입니다.

## 앱별 현재 상태 (2026-10-27 사용자 확인)

| 앱 | 상태 | 확정된 내용 | 남은 작업 |
| --- | --- | --- | --- |
| 타미오 가계부 / Tameio | TestFlight 테스트 단계 | 기존 도움말·가이드 유지 | 정식 출시 여부와 공개 배포 링크는 추후 확인 |
| DueDish | 개발 단계 | 냉장고·생필품 재고 관리, TestFlight 미진행, 도움말 미작성 | 상세 기능 확인 후 도움말·FAQ 작성. 정책은 실제 데이터 처리 확인 후 완성 |
| 게임 | 기획 단계 · 출시 예정 | 아직 기획 단계 | 이름·장르·기능·플랫폼 확정 후 소개와 정책 구체화 |

DueDish는 사용자가 연결한 프로젝트명으로 표시합니다. 공식 출시명·한국어명은 출시 준비 시 확인합니다. 비공개 프로젝트의 코드나 내부 자료는 이 공개 웹사이트에 복사하지 않았습니다. 타미오의 정식 명칭은 기존 요청과 지원 문서의 ‘타미오 / Tameio’를 유지합니다.

## 수정 위치

- 회사 실정보·개인정보 보호책임자·미정 앱 이름: `assets/site.js`의 `company` 객체 한 곳.
- 공통 스타일과 모바일 대응: `assets/site.css`.
- 본문과 정책: 각 `index.html`의 한국어·영어 양쪽을 수정.
- 헤더·푸터 구조는 각 HTML에 정적으로 포함됩니다. 구조 변경은 전체 HTML에 동일하게 적용하세요. 회사 상세 값은 JS 파일 한 곳에만 있습니다.
- 회사 상세 정보 표시에 JavaScript가 필요합니다. 비활성화 시 회사명·이메일·안내가 표시됩니다. 이메일을 바꾸는 경우 본문의 정적 mailto 링크도 함께 수정하세요.
- Google Search Console 인증 meta 태그 자리는 모든 HTML의 head 주석에 있습니다. 실제 인증값으로 교체하세요.
- 노란색 미정 항목은 심사 제출 전에 실제 운영 내용으로 완성해야 합니다.

## 로컬 검증

Python은 선택적인 검증·미리보기 용도이며 배포에 필요하지 않습니다.

```powershell
python scripts/check_site.py
python -m http.server 8000
```

http://localhost:8000 에서 확인합니다. 루트 경로를 사용하므로 file:// 더블클릭 방식은 지원하지 않습니다. Python 서버는 없는 주소에 사용자 정의 404를 자동 적용하지 않으므로 `/404.html`로 확인하세요. GitHub Pages에서는 루트 `404.html`이 사용됩니다.

검증: 31개 이중 언어 HTML과 720개 로컬 참조, 공통 레이아웃, 인증 주석, CNAME 보존 검사 통과. 연결 가능한 브라우저가 없어 실제 데스크톱/모바일 렌더링 검사는 수행하지 못했습니다.

## 타미오 이전 기록

원본: https://github.com/KiWon-A-Kim/tameio-support

원본 커밋: `869799306e4f9ee357f632eb2247c59739a823de`.

- 기존 support.html의 소개·FAQ·지원 문구를 `/tameio/`로 이전.
- 기존 privacy.html의 한국어·영어 본문과 수정일을 보존하고 별도의 보완 항목을 추가.
- 한국어/영어 사용 가이드의 목차 및 15개 장을 같은 페이지에 통합.
- 스크린샷 64개를 수정 없이 복사.
- 2026-10-27 사용자 요청에 따라 타미오 기존 개인 지원 이메일을 제거하고 `contact@paidiastudio.com`으로 통일. 한국어에만 있던 FAQ 4개를 영어로 보완.
- 원본 저장소와 기존 지원 사이트 리디렉션은 변경하지 않았습니다. 앱에 등록된 지원 URL은 별도로 갱신해야 합니다.
- 가이드에서 “계정”은 장부 자산 계정입니다. 타미오 기존 정책에는 회원가입·로그인 계정이 없다고 명시되어 있습니다.

## Apple / Google 입력 URL

웹사이트: https://paidiastudio.com/
회사 정보: https://paidiastudio.com/about/
연락처: https://paidiastudio.com/contact/

| 앱 | Support | Privacy Policy | 계정·데이터 삭제 |
| --- | --- | --- | --- |
| tameio | https://paidiastudio.com/tameio/ | https://paidiastudio.com/tameio/privacy/ | https://paidiastudio.com/tameio/delete-account/ |
| fridge | https://paidiastudio.com/fridge/ | https://paidiastudio.com/fridge/privacy/ | https://paidiastudio.com/fridge/delete-account/ |
| game | https://paidiastudio.com/game/ | https://paidiastudio.com/game/privacy/ | https://paidiastudio.com/game/delete-account/ |

영어로 직접 이동하려면 URL에 `#en`을 붙입니다. 타미오는 실제 앱에 맞게 계정 생성 여부를 답변해야 합니다. 냉장고 앱·게임의 계정 여부와 삭제 처리 범위/기한은 미확정입니다. 계정 생성 기능이 있는 앱은 웹 안내 외에 앱 내 삭제 흐름도 확인하세요.

## 전체 페이지 파일 및 URL

| HTML 파일 | URL |
| --- | --- |
| `index.html` | https://paidiastudio.com/ |
| `about/index.html` | https://paidiastudio.com/about/ |
| `contact/index.html` | https://paidiastudio.com/contact/ |
| `privacy/index.html` | https://paidiastudio.com/privacy/ |
| `terms/index.html` | https://paidiastudio.com/terms/ |
| `tameio/index.html` | https://paidiastudio.com/tameio/ |
| `tameio/privacy/index.html` | https://paidiastudio.com/tameio/privacy/ |
| `tameio/guide/01-quick-start.html` | https://paidiastudio.com/tameio/guide/01-quick-start.html |
| `tameio/guide/02-three-axes.html` | https://paidiastudio.com/tameio/guide/02-three-axes.html |
| `tameio/guide/03-accounts.html` | https://paidiastudio.com/tameio/guide/03-accounts.html |
| `tameio/guide/04-transactions.html` | https://paidiastudio.com/tameio/guide/04-transactions.html |
| `tameio/guide/05-categories-tags.html` | https://paidiastudio.com/tameio/guide/05-categories-tags.html |
| `tameio/guide/06-budget-walkthrough.html` | https://paidiastudio.com/tameio/guide/06-budget-walkthrough.html |
| `tameio/guide/07-recurring-walkthrough.html` | https://paidiastudio.com/tameio/guide/07-recurring-walkthrough.html |
| `tameio/guide/08-parsing-rule-walkthrough.html` | https://paidiastudio.com/tameio/guide/08-parsing-rule-walkthrough.html |
| `tameio/guide/09-receipts-ocr.html` | https://paidiastudio.com/tameio/guide/09-receipts-ocr.html |
| `tameio/guide/10-stats-reports.html` | https://paidiastudio.com/tameio/guide/10-stats-reports.html |
| `tameio/guide/11-currency-fx.html` | https://paidiastudio.com/tameio/guide/11-currency-fx.html |
| `tameio/guide/12-backup-restore.html` | https://paidiastudio.com/tameio/guide/12-backup-restore.html |
| `tameio/guide/13-app-lock-privacy.html` | https://paidiastudio.com/tameio/guide/13-app-lock-privacy.html |
| `tameio/guide/14-dangerous-operations.html` | https://paidiastudio.com/tameio/guide/14-dangerous-operations.html |
| `tameio/guide/15-troubleshooting-support.html` | https://paidiastudio.com/tameio/guide/15-troubleshooting-support.html |
| `tameio/guide/index.html` | https://paidiastudio.com/tameio/guide/ |
| `tameio/delete-account/index.html` | https://paidiastudio.com/tameio/delete-account/ |
| `fridge/index.html` | https://paidiastudio.com/fridge/ |
| `fridge/privacy/index.html` | https://paidiastudio.com/fridge/privacy/ |
| `fridge/delete-account/index.html` | https://paidiastudio.com/fridge/delete-account/ |
| `game/index.html` | https://paidiastudio.com/game/ |
| `game/privacy/index.html` | https://paidiastudio.com/game/privacy/ |
| `game/delete-account/index.html` | https://paidiastudio.com/game/delete-account/ |
| `404.html` | https://paidiastudio.com/404.html |

## 기타 파일

- `assets/site.css`: 공통 디자인.
- `assets/site.js`: 공통 회사 정보·앱 이름.
- `.nojekyll`: 정적 배포 설정.
- `sitemap.xml`, `robots.txt`: 검색 크롤링 안내.
- `scripts/check_site.py`: 선택적인 정적 검증 도구.
- `README.md`: 운영 및 인수 문서.
- `CNAME`: 기존 파일, 변경하지 않음.

스크린샷 파일 전체 목록:

- `tameio/guide/assets/04-accounts-new-five-types.png`
- `tameio/guide/assets/06-accounts-actual-balance-edit.png`
- `tameio/guide/assets/07-transactions-kind-segment.png`
- `tameio/guide/assets/08-transactions-card-payment-banner.png`
- `tameio/guide/assets/09-transactions-refund-related-actions.png`
- `tameio/guide/assets/10-transactions-refund-entry.png`
- `tameio/guide/assets/12-categories-reorder-mode.png`
- `tameio/guide/assets/13-categories-icon-picker.png`
- `tameio/guide/assets/14-categories-budget-tag-management.png`
- `tameio/guide/assets/15-budget-after-spending.png`
- `tameio/guide/assets/16-budget-rollover-toggles.png`
- `tameio/guide/assets/17-budget-allocation-carryover.png`
- `tameio/guide/assets/18-budget-move-between-groups.png`
- `tameio/guide/assets/19-recurring-rule-add.png`
- `tameio/guide/assets/20-recurring-scheduled-list.png`
- `tameio/guide/assets/22-recurring-edit-date.png`
- `tameio/guide/assets/26-parsing-rule-editor-sample.png`
- `tameio/guide/assets/27-parsing-rule-preview.png`
- `tameio/guide/assets/28-parsing-rule-list.png`
- `tameio/guide/assets/30-receipts-add-button.png`
- `tameio/guide/assets/32-receipts-item-detail.png`
- `tameio/guide/assets/33-stats-segment.png`
- `tameio/guide/assets/34-reports-list.png`
- `tameio/guide/assets/35-reports-export-menu.png`
- `tameio/guide/assets/37-currency-manual-rate-edit.png`
- `tameio/guide/assets/38-backup-create.png`
- `tameio/guide/assets/39-backup-restore-confirm.png`
- `tameio/guide/assets/40-backup-device-transfer.png`
- `tameio/guide/assets/41-backup-recovery-required.png`
- `tameio/guide/assets/42-app-lock-settings.png`
- `tameio/guide/assets/44-dangerous-delete-account.png`
- `tameio/guide/assets/45-dangerous-data-reset.png`
- `tameio/guide/assets/en-04-accounts-new-five-types.png`
- `tameio/guide/assets/en-06-accounts-actual-balance-edit.png`
- `tameio/guide/assets/en-07-transactions-kind-segment.png`
- `tameio/guide/assets/en-08-transactions-card-payment-banner.png`
- `tameio/guide/assets/en-09-transactions-refund-related-actions.png`
- `tameio/guide/assets/en-10-transactions-refund-entry.png`
- `tameio/guide/assets/en-12-categories-reorder-mode.png`
- `tameio/guide/assets/en-13-categories-icon-picker.png`
- `tameio/guide/assets/en-14-categories-budget-tag-management.png`
- `tameio/guide/assets/en-15-budget-after-spending.png`
- `tameio/guide/assets/en-16-budget-rollover-toggles.png`
- `tameio/guide/assets/en-17-budget-allocation-carryover.png`
- `tameio/guide/assets/en-18-budget-move-between-groups.png`
- `tameio/guide/assets/en-19-recurring-rule-add.png`
- `tameio/guide/assets/en-20-recurring-scheduled-list.png`
- `tameio/guide/assets/en-22-recurring-edit-date.png`
- `tameio/guide/assets/en-26-parsing-rule-editor-sample.png`
- `tameio/guide/assets/en-27-parsing-rule-preview.png`
- `tameio/guide/assets/en-28-parsing-rule-list.png`
- `tameio/guide/assets/en-30-receipts-add-button.png`
- `tameio/guide/assets/en-32-receipts-item-detail.png`
- `tameio/guide/assets/en-33-stats-segment.png`
- `tameio/guide/assets/en-34-reports-list.png`
- `tameio/guide/assets/en-35-reports-export-menu.png`
- `tameio/guide/assets/en-37-currency-manual-rate-edit.png`
- `tameio/guide/assets/en-38-backup-create.png`
- `tameio/guide/assets/en-39-backup-restore-confirm.png`
- `tameio/guide/assets/en-40-backup-device-transfer.png`
- `tameio/guide/assets/en-41-backup-recovery-required.png`
- `tameio/guide/assets/en-42-app-lock-settings.png`
- `tameio/guide/assets/en-44-dangerous-delete-account.png`
- `tameio/guide/assets/en-45-dangerous-data-reset.png`

## 미정 값 및 확인 필요 항목 — 전체 60개

동일 문구는 한 번만 표시했습니다. 정책은 한국어·영어 양쪽에 반영하세요.

- **`{{게임 이름}}`** — `assets/site.js`
- **`{{대표자명}}`** — `assets/site.js`
- **`{{사업자등록번호}}`** — `assets/site.js`
- **`{{사업장 주소}}`** — `assets/site.js`
- **`{{전화번호}}`** — `assets/site.js`
- **`{{통신판매업신고번호}}`** — `assets/site.js`
- **`{{확인 필요: fridge: 삭제 요청 본인 확인 방법·처리 기한·문의 기록 보존 예외/근거/기간}}`** — `fridge/delete-account/index.html`
- **`{{확인 필요: game: 삭제 요청 본인 확인 방법·처리 기한·문의 기록 보존 예외/근거/기간}}`** — `game/delete-account/index.html`
- **`{{확인 필요: tameio: 삭제 요청 본인 확인 방법·처리 기한·문의 기록 보존 예외/근거/기간}}`** — `tameio/delete-account/index.html`
- **`{{확인 필요: 개인정보 보호책임자 성명·직책}}`** — `assets/site.js`
- **`{{확인 필요: 게임: 개인정보처리방침 시행일·변경 고지 절차}}`** — `game/privacy/index.html`
- **`{{확인 필요: 게임: 광고/분석 SDK·쿠키·자동 수집 항목·거부 방법}}`** — `game/privacy/index.html`
- **`{{확인 필요: 게임: 기기/서버 저장 위치·보유 기간·법정 보존 근거}}`** — `game/privacy/index.html`
- **`{{확인 필요: 게임: 만 14세 미만 이용 여부·법정대리인 동의 절차}}`** — `game/privacy/index.html`
- **`{{확인 필요: 게임: 보존 예외 데이터·법적 근거·추가 보유 기간}}`** — `game/delete-account/index.html`
- **`{{확인 필요: 게임: 삭제 완료 시점·복구 가능 여부·구독 해지와의 관계}}`** — `game/delete-account/index.html`
- **`{{확인 필요: 게임: 삭제되는 데이터 항목·서버/기기/백업 삭제 범위}}`** — `game/delete-account/index.html`
- **`{{확인 필요: 게임: 수집 항목·필수/선택 여부·수집 방법}}`** — `game/privacy/index.html`
- **`{{확인 필요: 게임: 수탁자·위탁 업무·국외 이전 여부·국가·근거·보호조치}}`** — `game/privacy/index.html`
- **`{{확인 필요: 게임: 열람·정정·삭제·처리정지·동의철회 절차·본인 확인 방법}}`** — `game/privacy/index.html`
- **`{{확인 필요: 게임: 접근통제·암호화 등 실제 안전성 확보 조치}}`** — `game/privacy/index.html`
- **`{{확인 필요: 게임: 제3자 제공 여부·제공받는 자·목적·항목·보유 기간}}`** — `game/privacy/index.html`
- **`{{확인 필요: 게임: 지원 플랫폼·주요 기능·사용 방법·FAQ}}`** — `game/index.html`
- **`{{확인 필요: 게임: 처리 목적·항목별 법적 근거}}`** — `game/privacy/index.html`
- **`{{확인 필요: 게임: 파기 시점·절차·방법·백업 삭제 시점}}`** — `game/privacy/index.html`
- **`{{확인 필요: 게임: 회원계정 존재 여부·앱 내 삭제 경로·앱 없이 삭제하는 절차}}`** — `game/delete-account/index.html`
- **`{{확인 필요: 냉장고 앱: 개인정보처리방침 시행일·변경 고지 절차}}`** — `fridge/privacy/index.html`
- **`{{확인 필요: 냉장고 앱: 광고/분석 SDK·쿠키·자동 수집 항목·거부 방법}}`** — `fridge/privacy/index.html`
- **`{{확인 필요: 냉장고 앱: 기기/서버 저장 위치·보유 기간·법정 보존 근거}}`** — `fridge/privacy/index.html`
- **`{{확인 필요: 냉장고 앱: 만 14세 미만 이용 여부·법정대리인 동의 절차}}`** — `fridge/privacy/index.html`
- **`{{확인 필요: 냉장고 앱: 보존 예외 데이터·법적 근거·추가 보유 기간}}`** — `fridge/delete-account/index.html`
- **`{{확인 필요: 냉장고 앱: 삭제 완료 시점·복구 가능 여부·구독 해지와의 관계}}`** — `fridge/delete-account/index.html`
- **`{{확인 필요: 냉장고 앱: 삭제되는 데이터 항목·서버/기기/백업 삭제 범위}}`** — `fridge/delete-account/index.html`
- **`{{확인 필요: 냉장고 앱: 수집 항목·필수/선택 여부·수집 방법}}`** — `fridge/privacy/index.html`
- **`{{확인 필요: 냉장고 앱: 수탁자·위탁 업무·국외 이전 여부·국가·근거·보호조치}}`** — `fridge/privacy/index.html`
- **`{{확인 필요: 냉장고 앱: 열람·정정·삭제·처리정지·동의철회 절차·본인 확인 방법}}`** — `fridge/privacy/index.html`
- **`{{확인 필요: 냉장고 앱: 접근통제·암호화 등 실제 안전성 확보 조치}}`** — `fridge/privacy/index.html`
- **`{{확인 필요: 냉장고 앱: 제3자 제공 여부·제공받는 자·목적·항목·보유 기간}}`** — `fridge/privacy/index.html`
- **`{{확인 필요: 냉장고 앱: 지원 플랫폼·상세 기능·사용 방법·FAQ}}`** — `fridge/index.html`
- **`{{확인 필요: 냉장고 앱: 처리 목적·항목별 법적 근거}}`** — `fridge/privacy/index.html`
- **`{{확인 필요: 냉장고 앱: 파기 시점·절차·방법·백업 삭제 시점}}`** — `fridge/privacy/index.html`
- **`{{확인 필요: 냉장고 앱: 회원계정 존재 여부·앱 내 삭제 경로·앱 없이 삭제하는 절차}}`** — `fridge/delete-account/index.html`
- **`{{확인 필요: 약관 변경 고지 기간·방법}}`** — `terms/index.html`
- **`{{확인 필요: 웹사이트: GitHub Pages 접속 로그·IP 처리 및 보유 기간·이메일 제공업체·문의 이메일/본문/첨부파일 처리 목적·보유 기간}}`** — `privacy/index.html`
- **`{{확인 필요: 웹사이트: 개인정보처리방침 시행일·변경 고지 절차}}`** — `privacy/index.html`
- **`{{확인 필요: 웹사이트: 광고/분석 SDK·쿠키·자동 수집 항목·거부 방법}}`** — `privacy/index.html`
- **`{{확인 필요: 웹사이트: 기기/서버 저장 위치·보유 기간·법정 보존 근거}}`** — `privacy/index.html`
- **`{{확인 필요: 웹사이트: 만 14세 미만 이용 여부·법정대리인 동의 절차}}`** — `privacy/index.html`
- **`{{확인 필요: 웹사이트: 수집 항목·필수/선택 여부·수집 방법}}`** — `privacy/index.html`
- **`{{확인 필요: 웹사이트: 수탁자·위탁 업무·국외 이전 여부·국가·근거·보호조치}}`** — `privacy/index.html`
- **`{{확인 필요: 웹사이트: 열람·정정·삭제·처리정지·동의철회 절차·본인 확인 방법}}`** — `privacy/index.html`
- **`{{확인 필요: 웹사이트: 접근통제·암호화 등 실제 안전성 확보 조치}}`** — `privacy/index.html`
- **`{{확인 필요: 웹사이트: 제3자 제공 여부·제공받는 자·목적·항목·보유 기간}}`** — `privacy/index.html`
- **`{{확인 필요: 웹사이트: 처리 목적·항목별 법적 근거}}`** — `privacy/index.html`
- **`{{확인 필요: 웹사이트: 파기 시점·절차·방법·백업 삭제 시점}}`** — `privacy/index.html`
- **`{{확인 필요: 유료 서비스 여부·결제/구독/해지/환불 조건·스토어 정책과의 관계}}`** — `terms/index.html`
- **`{{확인 필요: 이용약관 시행일}}`** — `terms/index.html`
- **`{{확인 필요: 준거법·분쟁 해결 절차·관할}}`** — `terms/index.html`
- **`{{확인 필요: 타미오: 정책 시행일·보완 내용 적용일}}`** — `tameio/privacy/index.html`
- **`{{확인 필요: 타미오: 처리 항목별 법적 근거·파기 기술 방식·환율 API 접속 로그/IP 및 국외 처리·지원 이메일 보유 기간·위탁 업체·권리 행사 절차}}`** — `tameio/privacy/index.html`

## 실제 운영 확인

- 회사 실정보와 영문 이름/주소를 확인하고 미정 값을 해소합니다.
- contact@paidiastudio.com 실제 송수신을 확인합니다. 공개 사이트에는 사업자 이메일만 사용합니다. 정적 사이트는 메일함을 생성하지 않습니다.
- 앱별 수집/보관/제3자 제공/SDK/삭제 기능을 확정하고 스토어 Data safety, App Privacy 응답과 정책을 일치시킵니다.
- GitHub Pages 설정, 도메인 DNS 및 HTTPS를 확인합니다.
- 실제 Search Console 인증값을 head 주석 자리에 입력합니다.

공식 참고 기준:

- 개인정보 보호법 제30조: https://www.law.go.kr/LSW/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1025127653
- Google Play 계정 삭제: https://support.google.com/googleplay/android-developer/answer/13327111?hl=en
- Apple 계정 삭제: https://developer.apple.com/support/offering-account-deletion-in-your-app/
