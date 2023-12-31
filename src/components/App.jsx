import { lazy } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Tweets = lazy(() => import('../pages/Tweets'));

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home/>} />
          <Route path="tweets" element={<Tweets/>} />
          <Route path="*" element={<Navigate to="/" replace={true}/>} />
        </Route>
      </Routes>
    </>
  );
}