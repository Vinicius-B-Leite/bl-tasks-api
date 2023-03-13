import styled from 'styled-components/native';


type Props = {
    isFocused: boolean,
    error: boolean
}

export const InputArea = styled.View<Props>`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 9%;
    margin: 3% ;
    padding: 0% 5%;
    border-radius: ${({ theme }) => theme.borderRadius.sm}px;
    background-color: ${({ theme, isFocused, error }) => isFocused ? theme.colors.contrasntOpacity : error ? theme.colors.alertOpacity : theme.colors.darkBg};
    border-width: ${({ isFocused, error }) => isFocused || error ? '1px' : '0px'};
    border-color: ${({ theme, isFocused, error }) => isFocused ? theme.colors.contrast : error && theme.colors.alert };
`;


export const Input = styled.TextInput`
    margin-left: 2%;
    flex: 1;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.sm}px;
`;
