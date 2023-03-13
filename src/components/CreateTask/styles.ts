import styled from 'styled-components/native';

export const ModalContainer = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.darkBgOpacity};
    justify-content: flex-end;
`;

export const ModalContent = styled.View`

    width: 100%;
    height: 65%;
    background-color:${({ theme }) => theme.colors.bg};
    padding: 5%;
    border-radius: ${({ theme }) => theme.borderRadius.sm}px;
    align-items: center;
`;

export const CloseBtn = styled.TouchableOpacity`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
`