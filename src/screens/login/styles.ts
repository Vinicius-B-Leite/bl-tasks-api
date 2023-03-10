import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.bg};
    flex: 1;
    padding: 5% 10%;
    justify-content: center;
    align-items: center;
`;


export const Title = styled.Text`
    font-weight: 700;
    color: ${({theme}) => theme.colors.text};
    font-size: ${({theme}) => theme.fontSize.lg}px;
`
export const ContrastTitle = styled(Title)`
    color: ${({theme}) => theme.colors.contrast};
`
export const SubTitle = styled.Text`
    font-weight: 400;
    color: ${({theme}) => theme.colors.text};
    font-size: ${({theme}) => theme.fontSize.md}px;
    margin-bottom: 10%;
`

