// Colors
import colors from './colors'

colors.primary = colors.pink.is500
colors.secondary = colors.purple.is500

// Font
export const font = {
    size: 16,
    weights: {
        normal: 400,
        bold: 700
    }
}

// Button
export const button = {
    sizes: {
        paddingY: 10,
        paddingX: 30
    },

    colors: {
        active: {
            background: colors.black
        }
    }
}

// General Theme Export
export const theme = {
    font,
    button,
    colors
}

export default theme