document.addEventListener('DOMContentLoaded', () => {
    const dashboardView = document.getElementById('dashboard-view');
    const detailView = document.getElementById('detail-view');
    const backBtn = document.getElementById('back-btn');
    const detailTitle = document.getElementById('detail-title');
    const detailDesc = document.getElementById('detail-desc');

    // 하드코딩된 가상의 데이터 (차후 AWS DB 등에서 받아올 데이터의 형태)
    const featureData = {
        'maintenance': {
            title: '스마트 소모품 관리',
            desc: '엔진오일, 브레이크 패드, 체인 등 등록된 바이크의 적정 소모품 교환 주기를 DB 기반으로 산출하고 알림을 제공합니다.'
        },
        'custom': {
            title: '디지털 튜닝 기록',
            desc: '장착한 튜닝 파츠의 모델명, 구매 가격, 장착 일자 및 사진을 디지털 장부 형태로 보관합니다.'
        },
        'gps': {
            title: 'GPS 라이딩 로그',
            desc: '이동 경로, 평균 속도, 방문 장소 등을 실시간으로 기록하고 경로상에서 촬영한 사진을 지도에 매칭합니다.'
        },
        'cost': {
            title: '연비 및 가계부',
            desc: '주유량과 유류비를 입력하여 실시간 연비를 계산하고 보험료, 세금 등 유지 지출을 통계로 관리합니다.'
        },
        'cert': {
            title: '중고 거래 상태 인증',
            desc: '앱 내 기록된 정비 및 사고 이력을 바탕으로 정보 비대칭을 해소할 PDF 형식의 상태 인증서를 발급합니다.'
        }
    };

    // 1. 대시보드의 카드 클릭 시 이벤트
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const feature = card.getAttribute('data-feature');
            const data = featureData[feature];

            if (data) {
                // 상세 화면 데이터 업데이트
                detailTitle.textContent = data.title;
                detailDesc.textContent = data.desc;

                // 화면 전환 (대시보드 숨기고 상세 화면 보이기)
                dashboardView.classList.remove('active');
                dashboardView.classList.add('hidden');
                detailView.classList.remove('hidden');
                detailView.classList.add('active');
            }
        });
    });

    // 2. 뒤로 가기 버튼 클릭 시 이벤트
    backBtn.addEventListener('click', () => {
        detailView.classList.remove('active');
        detailView.classList.add('hidden');
        dashboardView.classList.remove('hidden');
        dashboardView.classList.add('active');
    });
});