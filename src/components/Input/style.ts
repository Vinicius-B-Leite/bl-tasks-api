import styled from 'styled-components/native';

export const InputArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 9%;
    margin: 3% ;
    padding: 0% 5%;
    border-radius: ${({theme}) => theme.borderRadius.sm}px;
    background-color: ${({theme}) => theme.colors.darkBg};
`;
export const Input = styled.TextInput`
    margin-left: 2%;
    flex: 1;
    color: ${({theme}) => theme.colors.text};
    font-size: ${({theme}) => theme.fontSize.sm}px;
`;
