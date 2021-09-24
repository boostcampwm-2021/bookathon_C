# 🛬 I'm Everywhere

### 💾 배포 링크 : http://everywhere.o-r.kr/
### 데모 영상 : https://www.youtube.com/watch?v=3cYTVnsrYuM
### 😄 팀원

| **ID** | **이름** | **역할** |
| :----: | :------: | :------: |
|  J024  |  김미정  | Frontend |
|  J094  |  박춘화  | Backend  |
|  J133  |   유진   | Frontend |
|  J165  |  이창엽  | Backend  |

### ✔️ 목표

- J024\_김미정 : 네이버페이 10만원 받기
- J094\_박춘화 : 프로젝트 무사히 완수하기
- J133\_유진 : 무언가 하나라도 배워가기
- J165\_이창엽 : 팀원들과 친해지기

### 🤔 기획의도

- 코로나로 집 밖에 외출하기도 힘든 요즘, 방 안에서 모니터로 즐기는 힐링타임!
- 직접 그 장소에 가지 않고도 전 세계의 다양한 풍경을 경험하세요!
- 해외의 일상 풍경도 우리 동네와 비슷한 느낌일까? 당장 I'm Everywhere 로 접속하세요!
- 불멍 NO! 식물멍 NO! 이제는 풍경멍이 대세~! 다른 지역의 풍경을 보면서 힐링하세요~!

### 💻 서비스

- 사용자가 5분 내의 동네 풍경을 담은 동영상을 올릴 수 있다.
- 사용자는 다른 사용자가 올린 동영상을 볼 수 있으며, 버튼를 통해 다른 동영상으로 전환할 수 있다.

### ✏ 한줄소개

- 방구석에서 어디든지 갈 수 있는 코로나시대 맞춤 랜선 여행

### 🖼 와이어프레임

- 메인 화면

  <img src="https://user-images.githubusercontent.com/57428261/134452976-04299a4e-52c1-45c6-b438-f673537e2934.png" alt="image" style="zoom:50%;" />

  - 화면 상단에는 페이지 로고와 함께 우측에 해당 장소에 대한 주소 정보가 간략하게 표시된다.

  - 배경을 전환할 수 있는 이전/다음 버튼이 가운데에 위치한다.

  - 화면 하단 좌측에는 웹 사이트 URL을 공유할 수 있는 버튼이 위치한다.

    - 클릭 시 아래처럼 버튼이 펼쳐지고, 다시 클릭하면 닫힌다.

      <img src="https://user-images.githubusercontent.com/57428261/134452996-29be8708-166f-4bef-af74-29ac667b20f7.png" alt="image" style="zoom:50%;" />

  - 화면 하단 우측에는 배경에 대한 볼륨 조절 컨트롤러가 위치한다.(미완)

### 💽 사용 기술/라이브러리

- Frontend
  - Vanilla Javascript
  - Webpack + Babel
  - Nginx
- Backend
  - Node.js + Express.js
  - Mongo DB(mongoose)
  - aws-sdk, multer, cors
  
 ![image](https://user-images.githubusercontent.com/67806982/134619745-51ab5fff-269f-4b8c-b837-5b19f05d40cb.png)


### 📝 API 문서

1. /api/video/ : 파일 업로드 요청 api

   - POST

   - 요청객체 :

     ```
      {
        location : "String",
        videoURL : "String",
        storageURL : "String"
      }
     ```

   - 응답객체 : 업로드 성공 메시지 객체

2. /api/video/random/ : DB 내부의 랜덤한 동영상 요청 api

   - GET

   - 요청객체 : x

   - 응답객체 :

     ```
      {
        message : "success",
        video : {
            location : "String"
            videoURL : "String",
            storageURL : "String"
        }
      }
     ```
