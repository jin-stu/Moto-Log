# CHANGELOG - 모토로그(Motolog)
모든 변경 사항은 프로젝트 형상관리 지침에 따라 기록됩니다.

## [v1.7.0] - 2026-05-24
기준선(Baseline): **design_complete**
* [DOCS-07]: 소프트웨어 설계서 v1.0.0 작성 및 등록
  - 구조 설계 (Static): 도메인 중심의 3대 패키지(UserMgmt, MaintenanceMgmt, RidingLog) 분할 및 시스템(Controller)과 바이크 객체 중심의 클래스 다이어그램 설계
  - 행위 설계 (Dynamic): 소셜 로그인 요청 흐름, 이력 기반 PDF 인증서 엔진 빌드 프로세스, 3~5초 주기 GPS 위치 수집 및 지도 시각화(Polyline) 로직에 대한 시퀀스 다이어그램 명세 완료
  - 화면 설계 (UI/UX): 로그인, 메인 대시보드(소모품 게이지), 바이크 등록, 라이딩 화면, 커스텀 북, 가계부(통계 차트), 상태 인증서 등 7개 핵심 인터페이스 모바일 앱 UI 와이어프레임 확정

## [v1.6.0] - 2026-05-17
기준선(Baseline): **requirements_freeze** (또는 **design_ready**)
* [DOCS-06]: 요구사항 분석서 v1.0.0 등록
  - 유스케이스 다이어그램 및 7종의 상세 명세서(U_01~U_07) 수립
  - 사용자, 관리자, 시스템 등 핵심 클래스 7종에 대한 CRC 카드 정적 분석 완료
  - 시퀀스 흐름을 통한 동적 분석 및 요구사항 추적표(Requirement Traceability Matrix) 작성

## [v1.5.0] - 2026-05-10
기준선(Baseline): **requirements_freeze**
* [DOCS-05]: 요구사항 정의서 v1.0.0 작성 및 등록
  - 5대 핵심 기능(소모품 관리, 튜닝 기록, GPS, 가계부, 인증서) 기능적 요구사항 상세화
  - 개발 및 운영 환경(React Native, AWS), 성능, 보안 등 비기능적 요구사항 정의
  - 각 요구사항별 구현 우선순위(High, Medium, Low) 및 인터페이스 제약사항 수립

## [v1.4.0] - 2026-05-03
기준선(Baseline): **design_complete**
* [FEAT-02]: 대시보드 프로토타입 UI 및 SPA 로직 구현
- React Native 전환을 고려한 확장형 폴더 구조(views, css, js) 세팅
- 스포티 다크 테마 기반의 메인 대시보드 그리드 레이아웃(HTML/CSS) 작성
- 바닐라 JS를 활용한 SPA(Single Page Application) 방식의 상세 화면 전환 로직 구현
- 아이콘 영역 고정 및 PC/모바일 반응형 스크롤 뷰 적용

## [v1.3.0] - 2026-04-16
기준선(Baseline): **requirements_freeze**
* [DOCS-04]: 프로젝트 관리 계획서 일정 변경
  - SPRINT1 지연에 의한 일정 변경

## [v1.2.0] - 2026-04-13
기준선(Baseline): **requirements_freeze**
* [DOCS-03]: 프로젝트 관리 계획서 규칙 적용
  - 프로젝트 정의서 v1.0.1로 이름 변경
  
* [DOCS-02]: 프로젝트 관리 계획서 v1.0.0 최종 확정 및 반영
  - 애자일(Scrum) 방법론 기반의 개발 일정 및 WBS 상세화
  - React Native 및 AWS 기술 스택 기반의 개발 환경 정의
  - 팀원별 R&R(PM, BE, FE) 및 품질 관리 계획 확정
* [DOCS-03] 프로젝트 관리 계획서 형식 적용
  - 프로젝트 정의서 파일 제목 변경

## [v1.1.0] - 2026-03-29
기준선(Baseline): **design_complete**
* [FEAT-01]: 메인 로고 UI 구현
  - HTML/CSS 레이아웃 추가
  - 스포티 테크 스타일(다크) 및 미니멀 스타일(라이트) 시안 반영
  - HTML과 CSS 파일 분리 및 참조 구조 적용

## [v1.0.0] - 2026-03-22
기준선(Baseline): **requirements_freeze**
* [DOCS-01]: 과제1. 프로젝트 정의서 초안 등록
  - 프로젝트 목표 및 범위 설정
  - 형상관리 및 브랜치 전략 수립

* Initial commit: 저장소 초기화 및 기본 폴더 구조 생성
