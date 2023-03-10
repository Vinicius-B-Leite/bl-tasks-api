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
        lg: width * 0.15,
        md: width * 0.06,
        xsm: width * 0.05,
        sm: width * 0.04,
    },
    icon: {
        lg: width * 0.1,
        md: width * 0.06
    },
    borderRadius: {
        sm: width * 0.02
    }
}