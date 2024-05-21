## 강의명 : React + MobX
   출처 : 유튜브 나무소리


### MPA (multi - page - Application)
 - 
### SPA (single - page - Application)
 - 서버로부터 단일 페이지를 응답받고 클라이언트에서 화면을 구성하는 방식
 - 해당 데이터만 보내줌
 
### 리액트
 - html,css,js를 컴퍼넌트 형태로 사용 -> react.js
 - 재사용성에 용이
 - state에 대한 store 관리 라이브러리 -> mobX
 
1. 개발환경 구축
	1-1. 도구
		code Editor:VScode, 
		실행환경:node.js & npm, 
		web Browser:chrome
	1-2. 설치 및 버전확인
		npm: js패키지와 모듈을 관리하는 도구  
		yarn: npm의 업그레이드 버전
			yarn 설치 명령어 : yarn install -g yarn 
			node -v
			npm -v
			yarn -v
	1-3. 프로젝트 생성
		프로젝트 생성 : yarn create react-app 프로젝트명
					npm init react-app 프로젝트명 
		프로젝트 실행 : yarn start
					npm start
2. 	리액트 동작 방식
	2-1. 방식
		- 클라이언트에서 UI 생성 (기존 웹은 서버에서 생성) : CSR(Client Side Rendering)
		- 서버로부터 필요한 데이터를 요청하고 응답받은 데이터로 UI를 구성
		- 서버를 통해 필요한 데이터만 받고 클라이언트는 사용자 UI를 관리
	2-2. Element
		- DOM 엘리먼트에 대한 정보를 담고있는 객체
		- virtual DOM은 실제 DOM을 담고있는 데이터 모음, ReactElement로 구성
		- 실제 DOM, 가상 DOM 를 비교(diff)하고 수정(patch)
	2-3. JSX 
		- JS + XML 형식
		- JSX -> TransCompiler -> JS -> Browser
		- JSX는 트랜스컴파일러를 통해 JS로 변환
		- 리액트 : Button , HTML : button 대소문자로 구분
		
3. 리액트 component
	3-1. component 개요
		- 화면을 구성하는 다양한 요소를 그룹화
		- 재사용 및 재구성 가능 
		- 클래스기반 상태가 있는 stateful , 컴포넌트, 함수기반 상태가 없는 stateless
	3-2. props 
		- 클래스를 확장해 정의하는 클래스 기반의 컴포넌트는 props 객체를 갖는다
		- 상위 컴포넌트로부터 할당받는 임의의 데이터 : this.props.속성명
		- props를 통해 전달되는 데이터는 해당 컴포넌트에서 값을 변경할 수 없음
	3-3. props 적용
		- app
			- book list
				- book list item
	3-4. 실습
		(1) 프로젝트 생성
		- css, static-data(정적 데이터) 
		- 참조 깃허브 url : https://github.com/namoosori/reactwithmobx/blob/master/source-template/1.props-template
		- material UI 설치 : yarn add @mui/material @emotion/react @emotion/styled
							yarn add @material-ui/core
							(설치시 해당 프로젝트 경로 하위에 설치 ex) 1.props-exam)
		- app.js : 함수형 기반 -> 컴포넌트 기반으로 변경
		
		<에러> 
			- 원인: yarn add @material-ui/core 설치시 에러
			- 에러명 : 'react-scripts'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.
			- 해결 : 1. node-module 삭제후 재설치
					2. package.lock-json 삭제
					3. 재기동
					
		(2) 구조분해 할당
			- 구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수로 담을 수 있가 하는 js
			 ex) 
					var a, b, rest;
					[a, b] = [10, 20];
					console.log(a); // 10
					console.log(b); // 20

					[a, b, ...rest] = [10, 20, 30, 40, 50];
					console.log(a); // 10
					console.log(b); // 20
					console.log(rest); // [30, 40, 50]

					({ a, b } = { a: 10, b: 20 });
					console.log(a); // 10
					console.log(b); // 20

					// Stage 4(finished) proposal
					({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
					console.log(a); // 10
					console.log(b); // 20
					console.log(rest); // {c: 30, d: 40}
		 
		 (3) props 
			-   APP -> BOOKLIST -> BOOKLISTITEM
			- APP 컴퍼넌트는 Books.js를 통해 리스트에 표현할 값 참조
			- BookListItem 컴포넌트는 BookList로부터 props를 통해 표현할 데이터를 전달
			- 컴포넌트의 표현을 Material-UI React 사용
			
			반복문
			- bookListItem
			- const bookListItem = books.map(book =>{
				return (
					<ListItem key={book.ISBN}>
						<BookListItem book={book}></BookListItem>
					</ListItem>
				)
			})
