import styled from 'styled-components/native';
import { Dimensions } from 'react-native'


const { width, height } = Dimensions.get('screen')



export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.darkBg};
    flex-direction: row;
    margin: ${height * 0.01}px 0px;
    padding: ${height * 0.02}px;
    justify-content: space-between;
    align-items: center;
    border-radius: ${({ theme }) => theme.borderRadius.sm}px;
`;


export const Left = styled.View`
    max-width: 85%;
`
export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.xsm}px;
    font-weight: 700;
`
export const Description = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.sm}px;
    font-weight: 400;
`

