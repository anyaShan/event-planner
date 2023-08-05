import { styled } from '@mui/system';

export const StyledContainer = styled('div')`
  min-height: 100vh;
  height: 100%;
  background-color: ${props => props.theme.colors.backgroundBody};
`;

// export const LayoutContainer = styled('main')`
//   color: ${({ theme }) => theme.palette.text.primary};

//   min-width: ${({ theme }) => theme.breakpoints.values.small};
//   margin: 0;
//   width: 100vw;
// `;
