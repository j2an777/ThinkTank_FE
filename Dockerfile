# Node.js 18을 기반으로 한 이미지 사용
FROM node:18-alpine as builder

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# 필요한 파일 복사
COPY package*.json pnpm-lock.yaml ./

# pnpm 설치 및 종속성 설치
RUN npm install -g pnpm && pnpm install

# 나머지 소스 코드 복사
COPY . .

# 프로젝트 빌드
RUN pnpm run build

# 런타임 이미지 준비
FROM node:18-alpine
WORKDIR /usr/src/app

RUN npm install -g serve

# 서버 실행 시 사용하는 포트 지정
EXPOSE 3000

# 컨테이너를 시작할 때 빌드된 React App을 서빙
CMD ["serve", "-s", "dist"]