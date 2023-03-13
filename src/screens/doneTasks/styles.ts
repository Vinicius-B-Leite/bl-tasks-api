import styled from 'styled-components/native';

export const Container = styled.View`
   background-color: ${({ theme }) => theme.colors.bg};
   flex: 1;
   justify-content: center;
   align-items: center;
`;

export const EmptyListAlert = styled.Text`
   font-weight: 700;
   color: ${({ theme }) => theme.colors.contrast};
   font-size: ${({ theme }) => theme.fontSize.xsm}px;
`