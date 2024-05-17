import { Route, Routes, useNavigate } from 'react-router-dom';
import { routers } from './routes';
import Layout from './routes/Layout';
import { Suspense } from 'react';
import { ErrorBoundary } from './components/shared';
import ProtectedRoute from './routes/protectedRoute';

function App() {
  const navigate = useNavigate();
  return (
    <ErrorBoundary navigate={navigate}>
      <Suspense fallback={<>loading</>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {routers.map(({ path, element: Component, isProtected }) =>
              isProtected ? (
                <Route
                  key={path}
                  path={path}
                  element={<ProtectedRoute element={<Component />} />}
                />
              ) : (
                <Route key={path} path={path} element={<Component />} />
              ),
            )}
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
