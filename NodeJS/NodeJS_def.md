# Node.js 서버 만들기

: Node.js는 웹 서버가 안에 내장되어 있기 때문에 서버를 만들고 실행할 수 있음

(Node.js는 모듈 시스템을 구축하고 있음 - 모듈이란, 필요한 것만 불어오는 것)

### 1. 서버 생성

- http 서버가 필요하므로 http 모듈을 require 메소드를 통해서 불러와 http 변수에 저장
- createServer 함수(서버를 생성하는 메소드) 안에 response.writeHead 메소드와 response.end 메소드 사용
- listen 메소드로 서버를 실행

### 2. 응용

##### Request, Response

​	(createServer 메소드의 파라미터로 입력되는 콜백함수의 파라미터 => 이벤트 발생시 콜백)

- 어떠한 요청이 들어오면 function 내부의 로직이 실행되면서 function 내부에 선언한 request와 response라는 이름으로 사용할 수 있는 값을 넘겨줌

- request: 요청을 담당

- response 

  - (클라이언트(브라우저)로) 정보를 보낼 때 활용

  - request에 대한 처리를 한 후 결과를 response 객체로 반환

  - response.writeHead(): 세 개의 인자를 받을 수 있는데 첫 번째는 200, 404와 같은 상태코드를, 마지막엔 컨텐츠 타입, Authorization, Cookie 등의 response headers(ex) {'Content-Type': 'text/html'} => 컨텐츠 타입은 텍스트이고 html 형태라는 것을 의미)를 입력할 수 있고 두 번째 인자는 optional로 사람에게 보여지는 statusMessage를 입력할 수 있음

    => response.statusCode와 response.setHeader로 설정 가능

- header와 body
  - header: request, response에 대한 정보(크기, 종류, 캐시 여부 등)가 들어있음
  - body: 주고 받고자 하는 실제 내용
    - write: 본문 작성
    - end(data, [encoding]): 본문을 작성함과 동시에 response를 종료

- request/response.on (event, 콜백) : 지정한 event에 대해 콜백으로 처리

##### server.listen()

: Starts the HTTP server listening for connections. This method is identical to server.listen() from net.Server.

### 3. 서버 접속

- 터미널을 켜고 해당 파일이 저장된 디렉토리로 이동
- `$ node 파일이름`으로 실행
- 브라우저 안에서 지정한 포트로 접속 (ex) http://localhost:3000)