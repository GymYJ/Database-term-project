var mysql      = require('mysql');
// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다. 
var connection = mysql.createConnection({//connection을 변수에 담은 이유->계속해서 connection이용해서 뭔갈 해야하기 때문.
  host     : 'localhost',
  user     : 'root',
  password : 'xhsltmxkzm93',
  database : 'opentutorials'
});
  
connection.connect();
  
connection.query('SELECT * FROM topic', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});
//sql을 첫번째 인자로 주고 두번째 인자로 call back을 주면 
//첫째 번 인자의 sql이 database 서버에 전송 되서 실행이 끝난 다음에 응답.
//두번째 인자인 callback이 호출 될 것이고 그에 따라 callback 함수의 본문을 구현하라는 말.
connection.end();