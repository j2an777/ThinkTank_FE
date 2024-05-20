# WebIDE 프로젝트 feat.ThinkTank
![mockup](https://github.com/j2an777/ThinkTank_FE/assets/110087099/ad97ca46-f23f-4678-9de5-19645999a358)
<br/>

**프로젝트 기간** : 2024.04.25 ~ 2023.05.20

🔗 [ThinkTank 서비스 둘러보기](https://d26i62iijbw0u2.cloudfront.net/) (데스크탑/태블릿 환경에서 이용 가능)

🎬 [시연 영상 보러가기 ]()
<br/>
<br/>
## ✨ 프로젝트 소개

### Think, Share, Develop, ThinkTank

- ThinkTank은 개발자를 위한 **알고리즘 문제풀이 기반 소셜 플랫폼**입니다.
- 각 유저들은 서로 문제 생성 및 풀이를 통해 상호작용이 이루어집니다.
- 소셜 플랫폼을 기반한 서비스 구조로 친숙하게 서로간 문제를 공유 및 피드백 가능합니다.
<br/>

**프로젝트 문서**
 
| 📒 [팀 Notion](https://www.notion.so/96ffa6e6a507434cb352b7ae3a8b9022) | 🎉 [기획안](https://www.notion.so/bab75913e0784267b6d8a326e6c82ec2) | 💌 [요구사항](https://www.notion.so/a961f17b52c54e2198791f393a7169e5) | 🚀 [활동 간 규칙](https://www.notion.so/Ground-rule-626b9da838e842eb90d9104b55006c88) | 💬 [회의, 회고록](https://www.notion.so/349320d273444afabaa9738bd6f48424?v=3b952627e1bd4e37a5f561cfca5faa78&pvs=4)
| ---- | ---- | ---- | ---- | ---- |
<br/>

## 📅 프로젝트 일정

| Sprint   | 기간                  | 내용                            | 작업 현황 |
| -------- | --------------------- | ------------------------------- | ------------- | 
| 1 | 2024/4/24 - 2024/4/27  | 각 페이지 UI 구현      | [▶️ Sprint1-1](https://www.notion.so/UI-9687407149da4f53a478c34ad8ff3fa8?pvs=4) , [▶️ Sprint1-2](https://www.notion.so/UI-8b5fd15c1c4a4e76b5e4640340a37abe?pvs=4), [▶️ Sprint1-3](https://www.notion.so/Main-UI-ab27e98888f440daa2fdb52be2fa3fef?pvs=4)
| 2 | 2024/4/29 - 2024/5/5 |  각 기능 Api 구현              | [▶️ Sprint2-1](https://www.notion.so/1998752a4e82455d8f828b9d5476fd18?pvs=4), [▶️ Sprint2-2](https://www.notion.so/jwt-394962c61c244eb1a5e31eb045219693?pvs=4), [▶️ Sprint2-3](https://www.notion.so/API-4b1b41992e1a4f48943f18e8c030ff3a?pvs=4)
| 3 | 2023/2/27 - 2023/3/3  | 각 기능 API 구현 | [▶️ Sprint3-1](https://www.notion.so/api-b3f407adf02c46f9bd234a2e14926a9e?pvs=4), [▶️ Sprint3-2](https://www.notion.so/api-1ffdf9c3920e4993be3232b912e2dd04?pvs=4), [▶️ Sprint3-3](https://www.notion.so/33c39851e97c4bb1ad7ccdacc05d5abe?pvs=4)
| 4 | 2023/3/4 - 2023/3/13  | UI 테스트 및 코드 리팩토링   | [▶️ Sprint4-1](https://www.notion.so/7afb34dc0abf43fa84210831649c294c?pvs=4), [▶️ Sprint4-2](https://www.notion.so/5c3a539358524daa88ed3a8c0ad83248?pvs=4), [▶️ Sprint4-3](https://www.notion.so/3d99e33d3c104b20a24a749ed1370a56?pvs=4)
<br/>

## 🧑‍🧑‍🧒‍🧒 Front TEAMMATE 소개
| ![강신범](https://github.com/kangsinbeom.png) | ![김수현](https://github.com/gamjatan9.png) | ![하승진](https://github.com/j2an777.png) |
|----------------------------------------------|----------------------------------------------|-------------------------------------------|
| [강신범](https://github.com/kangsinbeom)      | [김수현](https://github.com/gamjatan9)   | [하승진](https://github.com/j2an777)   |
| **FrontEnd**                                  | **FrontEnd**                                   | **FrontEnd**                                |                              |
| FE 팀장, 문제 생성 및 풀이, 배포                           | 로그인, 회원가입, 마이페이지                    | 메인페이지, 라우팅, 메뉴, 좋아요                             |

<br/>

## 아키텍처
<img width="833" alt="architecture" src="https://github.com/j2an777/ThinkTank_FE/assets/110087099/6623c7cb-e595-45b6-a970-df7e1d5cb0f9">

<br/>

## Fe. 기술스택 및 선정이유
![스크린샷 2024-04-29 오전 9 30 50(2)](https://github.com/Goorm-Lucky7/ThinkTank_FE/assets/83047601/ba2b9c2e-0b30-4d03-9e4f-c86980f2a171)
<br/>

## 📦 파일구조

```
src
  ᄂ apis
  ᄂ components
    ᄂ shared (여러 컴포넌트에 쓰일 시)
    ᄂ mainPage
    ᄂ profilePage
    ...
  ᄂ hooks
    ᄂ shared (여러 컴포넌트에 쓰일 시)
    ᄂ mainPage
    ᄂ profilePage
    ...
  ᄂ pages (layout)
    ᄂ mainPage
    ᄂ profilePage
    ...
  ᄂ routes
    ᄂ Protect.tsx
    ...
  ᄂ styles
    ᄂ globalStyles.ts
    ᄂ typography.ts
    ...
  ᄂ sotres (zustand)
    ᄂ index.ts (리듀서 관리)
    ᄂ searchStore
    ᄂ fileStore
  ᄂ types
    ᄂ user.ts
    ᄂ post.ts
    ...
  ᄂ App.tsx
```
