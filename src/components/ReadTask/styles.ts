import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.darkBgOpacity};
    justify-content: flex-end;
`;


export const Main = styled.View`
    height: 50%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.bg};
    justify-content: space-evenly;
    padding: 5%;
`

export const Title = styled.Text`
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.md}px;
    text-align: center;
`
export const Description = styled.Text`
    font-weight: 300;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.xsm}px;
    text-align: center;
`

export const CloseModal = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
`