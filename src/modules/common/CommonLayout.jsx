import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Loader } from 'components/Loader/Loader';
import { Header } from './components/Header';
import { StyledContainer } from './CommonLayout.styled';
// import { LayoutWrap } from './Layout.stuled';

export const CommonLayout = () => {
  return (
    <StyledContainer>
      <Header />
      <Suspense fallback="null">
        <Outlet />
      </Suspense>
    </StyledContainer>
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
