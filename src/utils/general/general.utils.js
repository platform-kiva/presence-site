const getRandomRgbValue = () => Math.floor(Math.random() * 256);

export const generateRgbString = () => {
    return [getRandomRgbValue(), getRandomRgbValue(), getRandomRgbValue()];
};

export const generateRgbaString = (alpha) => {
    return `rgba(${getRandomRgbValue()}, ${getRandomRgbValue()}, ${getRandomRgbValue()}, ${alpha})`
};

export const rgbaToRgb = (rgbaString) => {
    const rgbaRegex = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d*\.?\d+)\)$/;
    const rgbString = rgbaString.replace(rgbaRegex, 'rgb($1, $2, $3)');
    return rgbString;
}

export function extractRGBValues(rgbString) {
    // Regular expression to match rgb values
    const regex = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;

    // Use match() to find rgb values in string
    const matches = rgbString.match(regex);

    // Check if string is in correct format
    if (!matches) {
        throw new Error("Invalid RGB string format");
    }

    // Extract r/g/b values and convert to numbers
    const r = parseInt(matches[1], 10);
    const g = parseInt(matches[2], 10);
    const b = parseInt(matches[3], 10);

    // Return RGB array
    return [r, g, b];
}