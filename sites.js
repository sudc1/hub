/* =========================================================
   웹 목록 데이터 — 새 웹은 이 배열에 한 블록만 추가하면 됩니다.
   허브 화면의 [＋ 새 웹 등록 코드 만들기]에서 URL을 넣으면
   아래 형식의 코드를 자동으로 만들어 줍니다.

   필수: url
   선택: title, category, status(운영/테스트/보관),
         audience(공개/내부/개인), platform, desc, tags, added(YYYY-MM-DD)
   ========================================================= */
window.SITES = [
  {
    url: "https://sudc1.github.io/work/",
    title: "업무챙김판",
    category: "업무관리",
    status: "운영",
    audience: "내부",
    platform: "GitHub Pages",
    desc: "업무 일정·할 일 확인",
    tags: ["업무", "일정"],
    added: "2026-11-12"
  },
  {
    url: "https://sudc1.github.io/suwonudc-map/",
    title: "도시공사 사업 안내 지도",
    category: "시민안내",
    status: "운영",
    audience: "공개",
    platform: "GitHub Pages",
    desc: "수원도시공사 사업장 위치·사업 안내",
    tags: ["지도", "사업장"],
    added: "2026-11-12"
  },
  {
    url: "https://sudc1.github.io/jangan/",
    title: "유효회원관리",
    category: "회원관리",
    status: "운영",
    audience: "내부",
    platform: "GitHub Pages",
    desc: "장안구민회관 유효회원 관리",
    tags: ["회원", "장안구민회관"],
    added: "2026-11-12"
  },
  {
    url: "https://sudc1.github.io/pdca/",
    title: "PDCA 초안 도우미",
    category: "경영평가",
    status: "운영",
    audience: "내부",
    platform: "GitHub Pages",
    desc: "업로드 문서를 PDCA 형식 초안으로 변환",
    tags: ["경영평가", "PDCA"],
    added: "2026-11-12"
  },
  {
    url: "https://heyzine.com/flip-book/3fe3fac8c8.html",
    title: "안전관리매뉴얼 (플립북)",
    category: "안전",
    status: "운영",
    audience: "내부",
    platform: "Heyzine",
    desc: "안전관리매뉴얼 전자책 열람",
    tags: ["안전", "매뉴얼"],
    added: "2026-11-12"
  },
  {
    url: "https://sudc1.github.io/phone/",
    title: "도시공사 직원 연락망",
    category: "업무관리",
    status: "운영",
    audience: "내부",
    platform: "GitHub Pages",
    desc: "직원 연락처 조회",
    tags: ["연락망"],
    added: "2026-11-12",
    warn: "내부용이지만 공개 호스팅 — 주소 유출 시 누구나 열람 가능"
  },
  {
    url: "https://sudc1.github.io/suwonci/",
    title: "수원시의회 연결",
    category: "대외연계",
    status: "운영",
    audience: "내부",
    platform: "GitHub Pages",
    desc: "수원시의회 관련 사이트 연결",
    tags: ["수원시의회"],
    added: "2026-11-12"
  },
  {
    url: "https://frabjous-genie-5840cd.netlify.app/",
    title: "아파트 매매가 확인",
    category: "개인",
    status: "운영",
    audience: "개인",
    platform: "Netlify",
    desc: "아파트 매매가 조회용",
    tags: ["부동산"],
    added: "2026-11-12"
  },
 {
    url: "https://sudc1.github.io/photo/",
    title: "사진 선명화·보정",
    category: "홍보",
    status: "운영",
    audience: "내부",
    platform: "GitHub Pages",
    desc: "흐린 행사 사진 선명화 및 밝기 보정",
    tags: ["사진", "보정"],
    added: "2026-11-13"
  },  
];
