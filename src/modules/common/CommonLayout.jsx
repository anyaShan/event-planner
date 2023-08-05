import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Loader } from 'components/Loader/Loader';
import { Header } from './components/Header';
// import { LayoutWrap } from './Layout.stuled';

export const CommonLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback="null">
        <Outlet />
      </Suspense>
    </div>
  );
};

// ---------------------------old
// export const Layout = () => {
//   return (
//     <LayoutWrap>
//       <AppBar />
//       <Suspense fallback={<Loader />}>
//         <Outlet />
//       </Suspense>
//     </LayoutWrap>
//   );
// };
