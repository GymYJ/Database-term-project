## zozo's mbti
기존의 MBTI 검사에서는 자신의 성격과 추천 직업을 보여주는 것에서 끝났습니다.<br>
저희는 좀 더 유용한 정보를 보여주고자 하였습니다.<br>
이 프로그램은 직업군의 실제 MBTI타입별 종사 정보, 유명인의 MBTI타입 등을 보여줍니다.<br>
프로젝트는 4인이 진행한 프로젝트 입니다.

## function
mbtitype별 유명인 리스트 및 명언제공, 

본인의 mbti유형과 직업 입력시 
1. 본인 직업군에 종사하는 타 MBTI 유형들의 비율과 각각의 MBTI유형들에 대한 본인 MBTI유형의 관계적합점수 출력

2. 본인 성격유형에 해당하는 사람들 중 해당 직업을 선택한 사람들의 비율 출력

3. 본인의 직업군의 평균 연봉과 해당 거주국의 gdp를 비교 출력, 해당국에서의 해당 직업의 처우 수준을 출력

## how to run
프로젝트 폴더: zozo's mbti

작업환경: nodejs, npm mysql, mysql 

1. mysql를 이용해 'person', 'job', 'mbti_match','dummy','country' table('team3/mbti table/screen shot' 참조)을 가진 'mbti' schema를 생성합니다.


2. 'team3/mbti table'에 있는 csv파일들을 각각의 테이블에 import합니다. (MySQL Workbench 추천)


## my part
제가 맡은 일은 MySQL Workbench를 사용하여 SQL Query문 작성, 테이블 생성 및 관리입니다.

## $ npm i


## $ node main.js




