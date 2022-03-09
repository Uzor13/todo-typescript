import backgroundLight from './assets/images/bg-desktop-light.jpg'
import backgroundDark from './assets/images/bg-desktop-dark.jpg'

export const lightTheme = {
    background: 'hsl(0, 0%, 98%)',
    color: 'hsl(236, 33%, 92%)',
    backgroundImage: backgroundLight,
    todoBackground: 'hsl(0, 0%, 98%)',
    buttonColor: 'hsl(233, 11%, 84%)',
    todoPlaceholderColor: 'hsl(236, 9%, 61%)',
    todoColor: 'hsl(235, 19%, 35%)',
    borderColor: 'hsl(233, 11%, 84%)',
    hover: 'hsl(235, 19%, 35%)'
}

export const darkTheme = {
    background: 'hsl(235, 21%, 11%)',
    backgroundImage: backgroundDark,
    todoBackground: 'hsl(235, 24%, 19%)',
    todoColor: 'hsl(234, 39%, 85%)',
    todoPlaceholderColor: 'hsl(234, 11%, 52%)',
    buttonColor: 'hsl(234, 39%, 85%)',
    borderColor: 'hsl(234, 11%, 52%)',
    completed: 'hsl(235, 24%, 19%)',
    hover: 'hsl(236, 33%, 92%)'
}