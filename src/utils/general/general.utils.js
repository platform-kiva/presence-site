const getRandomRgbValue = () => Math.floor(Math.random() * 256);

export const generateRgbaString = (alpha) => {
    return `rgba(${getRandomRgbValue()}, ${getRandomRgbValue()}, ${getRandomRgbValue()}, ${alpha})`
};

export const rgbaToRgb = (rgbaString) => {
    const rgbaRegex = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d*\.?\d+)\)$/;
    const rgbString = rgbaString.replace(rgbaRegex, 'rgb($1, $2, $3)');
    return rgbString;
}