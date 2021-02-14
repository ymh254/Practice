# Node.js 서버 만들기

: Node.js는 웹 서버가 안에 내장되어 있기 때문에 서버를 만들고 실행할 수 있음

(Node.js는 모듈 시스템을 구축하고 있음 - 모듈이란, 필요한 것만 불어오는 것)

### 1. 서버 생성

- http 서버가 필요하므로 http 모듈을 require 메소드를 통해서 불러와 http 변수에 저장
- createServer 함수(서버를 생성하는 메소드) 안에 response.writeHead 메소드와 response.end 메소드 사용
- listen 메소드로 서버를 실행

### 2. Request, Response

​	(createServer 메소드 콜백의 매개변수)

- request: 요청을 담당
- response 
  - (클라이언트(브라우저)로) 정보를 보낼 때 활용
  - request에 대한 처리를 한 후 결과를 response 객체로 반환

- header와 body
  - header: request, response에 대한 정보(크기, 종류, 캐시 여부 등)가 들어있음
  - body: 주고 받고자 하는 실제 내용