import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
  ],
  resolve: {
    alias: {
      '@': '/src', // src 디렉토리를 "@"로 매핑
    },
  },
});

/**
 * {
      jsxImportSource: '@emotion/react',
    } 
    이부분은 css props로 전달하기 위해서 필요합니다
    tsconfig에서도 동일함
 */
