const getRandomRgbValue = () => Math.floor(Math.random() * 256);

export const generateRgbaString = (alpha) => {
    return `rgba(${getRandomRgbValue()}, ${getRandomRgbValue()}, ${getRandomRgbValue()}, ${alpha})`
};

export const rgbaToRgb = (rgbaString) => {
    const rgbaRegex = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d*\.?\d+)\)$/;
    const rgbString = rgbaString.replace(rgbaRegex, 'rgb($1, $2, $3)');
    return rgbString;
}

export function extractRGBValues(rgbString) {
    // Regular expression to match the rgb values
    const regex = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;

    // Using match() to find the rgb values in the string
    const matches = rgbString.match(regex);

    // Check if the string is in the correct format
    if (!matches) {
        throw new Error("Invalid RGB string format");
    }

    // Extracting r, g, b values and converting them to numbers
    const r = parseInt(matches[1], 10);
    const g = parseInt(matches[2], 10);
    const b = parseInt(matches[3], 10);

    // Returning the RGB array
    return [r, g, b];
}