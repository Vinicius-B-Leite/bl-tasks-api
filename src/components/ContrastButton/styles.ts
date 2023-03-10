import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 9%;
    margin: 3% ;
    padding: 0% 5%;
    border-radius: ${({theme}) => theme.borderRadius.sm}px;
    background-color: ${({theme}) => theme.colors.contrast};
`;
export const Label = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-size: ${({theme}) => theme.fontSize.xsm}px;
    font-weight: 700;
`;
