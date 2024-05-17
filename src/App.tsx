import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routers } from './routes';
import Layout from './routes/Layout';
import React, { Suspense } from 'react';
import ProtectedRoute from './routes/protectedRoute';
function App() {
  return (
    <Suspense fallback={<>loading</>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          {routers.map((route) => (
            route.isProtected ? (
              <Route key={route.path} path={route.path} element={<ProtectedRoute element={React.createElement(route.component)} />} />
            ) : (
              <Route key={route.path} path={route.path} element={React.createElement(route.component)} />
            )
          ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
