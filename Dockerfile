# node 18 이미지를 기반으로 함
FROM krmp-d2hub-idock.9rum.cc/goorm/node:18

# 작업 디렉토리 설정
WORKDIR /usr/src/app


# 필요한 React App 소스 코드를 이미지에 복사
COPY ./ ./

# 필요한 npm 패키지 설치
RUN npm install
RUN npm run build
RUN npm install -g serve
RUN npm install -g pnpm

# pnpm을 사용하여 종속성 설치
RUN pnpm install

# 프로젝트 npm build
RUN pnpm run build

# 서버 실행 시 사용하는 포트 지정
EXPOSE 3000

# 컨테이너를 시작할 때 빌드된 React App을 서빙
CMD ["serve", "-s", "dist"]