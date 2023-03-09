import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    background-color: ${({theme}) => theme.colors.darkBg};
    align-items: center;
    justify-content: space-between;
    padding: 3% 5%;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-size: ${({theme}) => theme.fontSize.md}px;
    font-weight: 700;
`
export const TitleContrast = styled(Title)`
    color: ${({theme}) => theme.colors.contrast};
`
