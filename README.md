# WebIDE 프로젝트 feat.ThinkTank
![mockup](https://github.com/j2an777/ThinkTank_FE/assets/110087099/ad97ca46-f23f-4678-9de5-19645999a358)
<br/>

**프로젝트 기간** : 2024.04.06 ~ 2023.05.20

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
