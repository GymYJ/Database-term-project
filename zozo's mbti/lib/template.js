module.exports = {
  //첫번째 인자로 제목이 들어오면 제목이 title tag에 나타남:7
  //두번째 인자로는 list, 글 목록을 표현
  //세번째 인자 body, 글본문 표현
  //네번째 인자 ui표현
  HTML:function( list, body,spec,goodjob){
    return `
    <!doctype html>
    <html>
    <head>
      <title>Zozo's - MBTI</title>
      <style type="text/css">
      .mbtilist li a:link { color: black; text-decoration: none;}
      .mbtilist li a:visited { color: black; text-decoration: none;}
      .mbtilist li a:hover { color: blue; text-decoration: none;}
     </style>
      <style>
      body {
        background-image: url("https://st2.depositphotos.com/1793489/7392/v/950/depositphotos_73927911-stock-illustration-cartoon-professions-characters.jpg");
        background-size: cover;
      }
      .main{
        background-color: rgba(255,214, 79, 0.9);
        margin-left: 25%;
        margin-right: 25%;
      }
      .home{
        display: block;
        color: rgb(255, 115, 1);
        height: 300;
        font-size: 4rem;
        font-family: 'Sunflower';
        text-shadow: -1px 0 rgb(138, 63, 1), 0 1px rgb(138, 63, 1), 1px 0 rgb(138, 63, 1), 0 -1px rgb(138, 63, 1);
        background-color: rgba(138, 63, 1, 0.9);
        text-align: center;
        text-decoration:none;
        margin-left: 25%;
        margin-right: 25%;
      }
      .mbtilist{
        list-style: none;
        display: block;
        font-size: 2rem;
        font-weight: 800;
        text-transform: none;
        text-align: justify;
        text-decoration-line: none;
      }
      </style>
      
      <meta charset="utf-8">
    </head>
    <body>
    <h1><a class="home" href="http://localhost:3000">Home</a></h1>
    <section class="main">
      ${list}
      ${goodjob}
      ${body}
      ${spec}
      <h1 class="main"><a href="https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC">take MBTI test</a></h1>
    </section>
      </body>
    </html>
    `;
  },list:function(topics){
    var list = '<ul class="mbtilist">';
    var i = 0;
    var INTP=1;
    var INTJ=1;
    var INFP=1;
    var ISTP=1;
    var ENTP=1;
    var ENTJ=1;
    var ENFP=1;
    var ESTP=1;
    var ESTJ=1;
    var ESFP=1;
    var ISFJ=1;
    var ISTJ=1;
    var ISFP=1;
    var INFJ=1;
    var ESFJ=1;
    var ENFJ=1;
    
    while(i < topics.length){
      var j=0;

        if(INTP && topics[i].mbtitype==='INTP'){
        list = list + `<li><a href="/?id=${topics[i].mbtitype}">${topics[i].mbtitype}</a></li>`;//.title해줘야 title property 가리킴.
        INTP=0;
        } 
        else if(INTJ && topics[i].mbtitype==='INTJ')
        {
          list = list + `<li><a href="/?id=${topics[i].mbtitype}">${topics[i].mbtitype}</a></li>`;//.title해줘야 title property 가리킴.
          INTJ=0;
        }
        else if(INFP && topics[i].mbtitype==='INFP')
        {
          list = list + `<li><a href="/?id=${topics[i].mbtitype}">${topics[i].mbtitype}</a></li>`;//.title해줘야 title property 가리킴.
          INFP=0;
        }
        else if(ISTP && topics[i].mbtitype==='ISTP')
        {
          list = list + `<li><a href="/?id=${topics[i].mbtitype}">${topics[i].mbtitype}</a></li>`;//.title해줘야 title property 가리킴.
          ISTP=0;
        }
        else if(ENTP && topics[i].mbtitype==='ENTP')
        {
          list = list + `<li><a href="/?id=${topics[i].mbtitype}">${topics[i].mbtitype}</a></li>`;//.title해줘야 title property 가리킴.
          ENTP=0;
        }
        else if(ENTJ && topics[i].mbtitype==='ENTJ')
        {
          list = list + `<li><a href="/?id=${topics[i].mbtitype}">${topics[i].mbtitype}</a></li>`;//.title해줘야 title property 가리킴.
          ENTJ=0;
        }
        else if(ENFP && topics[i].mbtitype==='ENFP')
        {
          list = list + `<li><a href="/?id=${topics[i].mbtitype}">${topics[i].mbtitype}</a></li>`;//.title해줘야 title property 가리킴.
          ENFP=0;
        }
        else if(ESTP && topics[i].mbtitype==='ESTP')
        {
          list = list + `<li><a href="/?id=${topics[i].mbtitype}">${topics[i].mbtitype}</a></li>`;//.title해줘야 title property 가리킴.
          ESTP=0;
        }
        else if(ESTJ && topics[i].mbtitype==='ESTJ')
        {
          list = list + `<li><a href="/?id=${topics[i].mbtitype}">${topics[i].mbtitype}</a></li>`;//.title해줘야 title property 가리킴.
          ESTJ=0;
        }
        else if(ESFP && topics[i].mbtitype==='ESFP')
        {
          list = list + `<li><a href="/?id=${topics[i].mbtitype}">${topics[i].mbtitype}</a></li>`;//.title해줘야 title property 가리킴.
          ESFP=0;
        }
        else if(ISFJ && topics[i].mbtitype==='ISFJ')
        {
          list = list + `<li><a href="/?id=${topics[i].mbtitype}">${topics[i].mbtitype}</a></li>`;//.title해줘야 title property 가리킴.
          ISFJ=0;
        }
        else if(ISTJ && topics[i].mbtitype==='ISTJ')
        {
          list = list + `<li><a href="/?id=${topics[i].mbtitype}">${topics[i].mbtitype}</a></li>`;//.title해줘야 title property 가리킴.
          ISTJ=0;
        }
        else if(ISFP && topics[i].mbtitype==='ISFP')
        {
          list = list + `<li><a href="/?id=${topics[i].mbtitype}">${topics[i].mbtitype}</a></li>`;//.title해줘야 title property 가리킴.
          ISFP=0;
        }
        else if(INFJ && topics[i].mbtitype==='INFJ')
        {
          list = list + `<li><a href="/?id=${topics[i].mbtitype}">${topics[i].mbtitype}</a></li>`;//.title해줘야 title property 가리킴.
          INFJ=0;
        }
        else if(ESFJ && topics[i].mbtitype==='ESFJ')
        {
          list = list + `<li><a href="/?id=${topics[i].mbtitype}">${topics[i].mbtitype}</a></li>`;//.title해줘야 title property 가리킴.
          ESFJ=0;
        }
        else if(ENFJ && topics[i].mbtitype==='ENFJ')
        {
          list = list + `<li><a href="/?id=${topics[i].mbtitype}">${topics[i].mbtitype}</a></li>`;//.title해줘야 title property 가리킴.
          ENFJ=0;
        }
        i = i + 1;  
                                                                           //안해주면 그냥 객체가르킴(object 뜸)
    }
    list = list+'</ul>';
    return list;
  },body:function(topic){
    var list = '<ul class="mbtilist"> ';
    var i = 0;

    while(i < topic.length){
        list = list + `<li><a href="?id=${topic[i].id}">${topic[i].name}</a></li>`;//.title해줘야 title property 가리킴.
        i = i + 1;                                                                       
    }
    list = list+'</ul>';

    return list;
  },spec:function(topic){
    var list = '<img src="https://www.idrlabs.com/static/16p-avatars/';
    var i = 0;
    while(i < topic.length){
      var namesplit = `${topic[i].name}`.split(' ');
      var final='';
      if(namesplit.length === 1) {
        final = namesplit[0];
      }
      else {
        for(var j=0; j<namesplit.length; j++) {
          final = final + namesplit[j] + '-';
          
        }
        final = final.slice(0,-1);
      }
      list = list + final.toLocaleLowerCase();
      i = i + 1;
    }
    list = list+'.jpg"><ul class="mbtilisd"></ul>';
    i = 0;

    while(i < topic.length){
        list = list + `<li><a>Quotes : <a/>${topic[i].quotes}</li>`;//.title해줘야 title property 가리킴.
        
        i = i + 1;                                                                       
    }
    list = list+'</ul>';
    return list;  
  },goodjob:function(topic){
  var list = `<ul class="mbtilist"><strong>DB analysis 1 :</strong> 본인의 직업 <strong>${topic[0].jobtype}</strong>에 종사하는<br>`;
  var i = 0;
  while(i < topic.length){
      list = list + `<a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<b>${topic[i].mbtitype}</b>가  <b>${topic[i].percent.toFixed(2)}%</b>이고 본인 유형과의 관계적합도는<b>${topic[i].matchpoint}</b>점 입니다. <br></a>`;//.title해줘야 title property 가리킴.
      i = i + 1;                                                                       
  }
  list = list+'</ul>';
  return list;  
  }
}
