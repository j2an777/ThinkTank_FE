import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routers } from './routes';
import Layout from './routes/Layout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routers.map(({ path, component }) => (
            <Route key={path} path={path} Component={component} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
