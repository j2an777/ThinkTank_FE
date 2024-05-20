import { Route, Routes, useNavigate } from 'react-router-dom';
import { routers } from './routes';
import Layout from './routes/Layout';
import ProtectedRoute from './routes/protectedRoute';
import { ErrorBoundary } from './components/shared';

function App() {
  const navigate = useNavigate();
  return (
    <ErrorBoundary navigate={navigate}>
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
    </ErrorBoundary>
  );
}

export default App;
