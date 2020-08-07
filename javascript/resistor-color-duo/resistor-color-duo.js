//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (resistorColors) => {
    return COLORS.indexOf(resistorColors[0].toLowerCase()) * 10 + COLORS.indexOf(resistorColors[1].toLowerCase());
};

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];