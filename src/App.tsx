import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routers } from './routes';
import Layout from './routes/Layout';
import { Suspense } from 'react';
function App() {
  return (
    <Suspense fallback={<>loading</>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {routers.map(({ path, component }) => (
              <Route key={path} path={path} Component={component} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
