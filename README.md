<h1>모바일게임 v4 순위 검색 서비스</h1>
<h2>http://v4.yrworld.com/</h2>

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### 1.디렉토리
	1. public : build된 파일을 export.
	2. src : 소스파일 
	3. assets : 이미지 등 파일
	4. component : view에 사용되는 컴포넌트 파일
	      - charts : 사용되는 chart를 미리 정의해놓음
	      - layout : 화면 레이아웃에 사용되는 파일들(side-bar, footer 등...)
	      - xxx-template : 화면 별 반복사용되는 컴포넌트 들
	5. router : 페이지별 route 정의
	6. views : 실제 보여지는 페이지 파일
	
### 2.페이지 설명
	1. /home : 기본 화면 
	(여러 모바일게임 배너들을 추가해 넣으려는 계획이었으나 도메인(v4.yrworld.site)의 home과 맞지않아 빈화면으로 남겨짐)
	2. /guild-info : 길드 검색화면
	(길드 전투력 및 길드원 전투력 비교)
	3. /hero-info : 캐릭터 검색화면
	(캐릭터 전투력 변화 추이 확인)
	4. /server-info : 서버 검색화면
	(전투력 구간별 인원수 비교)
### 3.개선해야할것들
	1. 라우터 처리.
	2. 데이터 바인딩 방식이 난잡?함. 한가지로 통일할 필요성이 있을듯...
	3. 폴더구조, 컴포넌트와 변수이름등 정리가 되지않은느낌
	
	
