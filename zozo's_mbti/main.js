var http = require('http');
var count =0;
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var mysql =require('mysql');//mysql이란 이름으로 모듈을 가져오는데 그 (node)모듈의 이름은 mysql이다
var db=mysql.createConnection({//connection을 변수(db)에 담은 이유->계속해서 connection이용해서 뭔갈 해야하기 때문.
  host     : 'localhost',//서버가 어디에 있는가
  user     : 'root',//사용자
  password : 'xhsltmxkzm93',
  database : 'opentutorials'
})//모듈을 가져왔으니 접속을 해야함, 그때 사용하는 명령
//->mysql 모듈에게 createConnection이라는 매소드를 호출하도록함.
//그때 전달 약속되어있는 인자는 객체고, 객체에는 위와같은 정보가 들어 있어야함.
db.connect();//실제 접속이 일어남.

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){//pathname이 /이다=주소뒤에 아무것도 붙지않은 최상위 경로를 뜻함.
      if(queryData.id === undefined){//쿼리 아이디 값이 없다면
        db.query(`SELECT * FROM person`,function(error,topics){//2번째 인자=첫번째 sql문이 실행 된 후에 서버가 응답된 결과를 우리가 처리할 수 있도록 callback function을 주게 되있다.
                                                             //그  callback function의 시그니쳐는 첫번째 파라미터 error에는 error정보가 담겨있는 인자(원인이 되는 요소)가 담긴다.
                                                            //결과가 성공적일때는 두번째 파라미터(topics)에 SQL결과값이 담김.
          var title = 'MBTI';
          var description = 'Zozo`s, MBTI';
          var list = template.list(topics);//template.js에 있는 'list' property의 함수->클릭 시에 id태그가 달린곳으로 링크 걸음.
          var html = template.HTML( list,//template.js의 가장 큰들의 HTML을 만들어줌.
            `<h2>${title}</h2>${description}`
          );
          response.writeHead(200);
          response.end(html);
        });
        //'['로 시작한다->배열 '{'로 시작한다->객체
      } else if(count===0) {//최상위 경로가 아니라면(쿼리아이디 값이 있다면)(클릭하면)

  db.query(`SELECT * FROM person WHERE mbtitype='${queryData.id}'`, function(error2,topic){//queryData.id는 현재 mbtitype이다.
      if(error2){
    throw error2;//topic값 못가져왔을 시 error가 null이 아니게 되고 그러면 throw error를 하고 nodejs가 다음 명령 안시키고 콘솔표현하며 즉시 app중지 시킴.
  }
    var body = template.body(topic);
    var list = template.list(topic);
    var html = template.HTML(list,body);
    response.writeHead(200);
    response.end(html);
  }
  )
      count=1;
}else if(count===1){
  db.query(`SELECT * FROM person WHERE id='${queryData.id}'`, function(error2,topic){//queryData.id는 현재 mbtitype이다.
    if(error2){
  throw error2;//topic값 못가져왔을 시 error가 null이 아니게 되고 그러면 throw error를 하고 nodejs가 다음 명령 안시키고 콘솔표현하며 즉시 app중지 시킴.
}
  var spec =template.spec(topic);
  var body = template.body(topic);
  var list = template.list(topic);
  var html = template.HTML(list,body,spec);
  response.writeHead(200);
  response.end(html);
})
        count=0;
      }
    }
});
app.listen(3000);
