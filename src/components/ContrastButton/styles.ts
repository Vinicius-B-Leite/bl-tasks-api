import styled from 'styled-components/native';



type Props = { enable: boolean }
export const Button = styled.TouchableOpacity<Props>`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 9%;
    margin: 3% ;
    padding: 0% 5%;
    border-radius: ${({ theme }) => theme.borderRadius.sm}px;
    background-color: ${({ theme, enable }) => enable ? theme.colors.contrast : theme.colors.contrasntOpacity};
`;
export const Label = styled.Text<Props>`
    color: ${({ theme, enable }) => enable ? theme.colors.text : theme.colors.darkText};
    font-size: ${({ theme }) => theme.fontSize.xsm}px;
    font-weight: 700;
`;
