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
  database : 'mbti'
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
          var description = '성격에 따른 직업 적성도를 체크하세요';
          var list = template.list(topics);//template.js에 있는 'list' property의 함수->클릭 시에 id태그가 달린곳으로 링크 걸음.
          var html = template.HTML( list,//template.js의 가장 큰들의 HTML을 만들어줌.
            `<h2>${title}</h2>${description}`,
            `<a href="/create">MBTI,JOBS INPUT</a>`,
            `<a href="/create"> </a>`
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
    var html = template.HTML(list,body,`<a href="/create"> </a>`,`<a href="/create"> </a>`);
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
  var html = template.HTML(list,body,spec,`<a href="/create"> </a>`);
  response.writeHead(200);
  response.end(html);
})
        count=0;
  }
}else if(pathname === '/create'){

  db.query(`SELECT * FROM dummy`,function(error3,topics){
    if(error3){
      throw error3;
    }
    var title = '자신의 mbti유형과 현재 직업을 입력해 주세요';
    var list = template.list(topics);
    var html = template.HTML(title, list,
      ` <form action="/create_process" method="post">
        <p><input type="text" name="title" placeholder="mbti"></p>
        <p>
          <textarea name="description" placeholder="Job"></textarea>
        </p>
        <p>
          <input type="submit">
        </p>
      </form>`,
      `<a href="/create"> </a>`
    );
    response.writeHead(200);
    response.end(html);
  });
} else if(pathname === '/create_process'){//정보입력시 여기로 보내짐.
  var body = '';
  request.on('data', function(data){
      body = body + data;
  });
  request.on('end', function(){
      var post = qs.parse(body);
      db.query(`select count(*) as jobcount from person where mbtitype = ? and jobtype =?`,
       [post.title, post.description],//위값,아래 값 들어감
       function(error, result){
          if(error){
            throw error;
          }
          db.query(`select count(*) as peoplecount from person where mbtitype = ? `,
          [post.title],//위값,아래 값 들어감
          function(error, people){
             if(error){
               throw error;
             }          
             var cal= ((result[0].jobcount)/(people[0].peoplecount))*100;
             
//////////////
            db.query(`select j.jobtype, j.mbtitype, j.numofworkers/t.total*100 as "percent", m.matchpoint
            from (mbti_match m inner join job j on j.mbtitype = m.othermbtitype) inner join 
               (select jobtype, sum(numofworkers) as total 
               from job 
               where jobtype= ?
               group by jobtype) as t
            where m.mymbtitype = ?
            and j.jobtype = ?`,
          [ post.description, post.title, post.description],//위값,아래 값 들어감
          function(error, goodjob){
             if(error){
               throw error;
               }
               var title = `DB analysis2 : 본인의 성격 '${post.title}'을 가진 사람들 중 본인의 직업 '${post.description}'에 종사하는 비율은 '${cal.toFixed(2)}'% 입니다.<br> `;
               var description = '성격에 따른 직업 적성도를 체크하세요';
               var list = template.list(result);//template.js에 있는 'list' property의 함수->클릭 시에 id태그가 달린곳으로 링크 걸음.
               var goodjob = template.goodjob(goodjob);//template.js에 있는 'list' property의 함수->클릭 시에 id태그가 달린곳으로 링크 걸음.
               var html = template.HTML( list,//template.js의 가장 큰들의 HTML을 만들어줌.
                 `<h2>${title}</h2>${description}`,
                 `<a href="/create">MBTI,JOBS INPUT</a>`,goodjob
               );
               // response.writeHead(302, {Location: `/?id=${result[0].jobcount}`});
               response.end(html);
             }
          )
////////////////////

          }
         )  

       }
      ) 
  });
}
});
app.listen(3000);
