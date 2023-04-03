const http = require('http');

class Server {
  constructor(port) {
    this.port = port;
  }

  set port(value) { // setter로 인해 port의 데이터타입은 number가 아니면 에러를 발생시킨다.
    if (typeof value !== 'number') {
      throw new Error('port must be a number');
    } else {
      this._port = value;
    }
  }

  start() {
    this.server = http.createServer((req, res) => {
      res.writeHead(200, {'Content-Type': 'text/html' });
      res.end('객체지향 프로그래밍의 시작 생성자 함수');
    });
    this.server.listen(this._port); // setter로 인해 this._port를 사용한 예시이다.
  }

}
const server = new Server(3000);
server.start();