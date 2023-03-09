import { Dimensions } from "react-native"


const { height, width } = Dimensions.get('screen')


export const theme = {
    colors: {
        text: '#fff',
        contrast: '#44d2ff',
        contrasntOpacity: 'rgba(68, 210, 255, 0.20)',
        bg: '#232323',
        darkBg: '#151515',
        darkBgOpacity: 'rgba(21, 21, 21, 0.90)'
    },
    fontSize: {
        md: width * 0.06
    },
    icon: {
        md: width * 0.06
    },
}