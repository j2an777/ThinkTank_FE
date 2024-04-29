## convention

### 📦 convention

→ **Issue convention**

<img width="1262" alt="스크린샷 2024-04-23 오후 2 19 47" src="https://github.com/test-organization-kang/test_FE/assets/83047601/71c22348-fc82-48f4-8896-c754a6bbbe42">

- Title: [브랜치 이름] 구현할 내용
- Content: 작업내용에 대해서 구현할 이미지와 구현 내용에 대해 기술
- Assignees: 본인 지정
- Label: 깃허브 기본 탬플릿
- Project: 칸반보드 관리를 위해 설정

→ **Commit convention**

- Feat: 새로운 기능을 추가하는 경우
- Fix: 디테일 수정
- Style: 디자인 관련된 모든 것 (CSS UI 디자인 변경 등)
- Asset: favicon, defalutImage 등 파일의 추가
- Bug: 버그가 발생하여 고친 경우
- Hotfix: 최우선 순위의 긴급한 수정
- Refactor: 코드 리팩토링
- Chore: 나머지 잡다한 일 (문서 수정, 파일 이름 변경 등등)

**예시)**

```
  git commit -m "Feat: carousel 수정" -m " 세부내용 or 질문사항"
```

→ **Merge convention**

<img width="1253" alt="스크린샷 2024-04-23 오후 2 54 17" src="https://github.com/test-organization-kang/test_FE/assets/83047601/2f2283be-debe-4511-a88f-53df7d5448b7">

- Title: [PR] 해당 이슈와 동일한 제목
- Content: 구현 이미지, 구현 내용, 질문 사항 순으로 정리

→ **Code convention**

- 폴더 구조 기본 단위

```
// 예시
authBackground
ᄂ index.tsx
ᄂ styles.ts
```

- styles import시에 아래와 같이 사용

```
import * as S from './styles'
```

- Style Block naming 단위

  - Container > Box > Block

- interface vs type

```
컴포넌트 내 props에 대한 type은 컴포넌트 내에서 정의,
types폴더 내에서는 비동기 데이터 관련 정의

// interface 키워드 사용시
object형태의 type (대부분 정의는 interface 일부분만 type)
```

### 📦 Skills

![스크린샷 2024-04-29 오전 9 30 50(2)](https://github.com/Goorm-Lucky7/ThinkTank_FE/assets/83047601/ba2b9c2e-0b30-4d03-9e4f-c86980f2a171)

### 📦 파일구조 (아키텍쳐)

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

- **폴더명은** 시작이 소문자
- **파일명** 중 JSX를 반환하는 경우 대문자로 시작, JSX를 반환하지 않는 경우 소문자 시작

prettier 및 eslint

## 역할분배

강신범: 상세 페이지 / 댓글

김수현: 로그인 / 회원가입 / 마이페이지

하승진: 메인페이지 / 좋아요

코드 컨벤션 어떻게 정하누!
