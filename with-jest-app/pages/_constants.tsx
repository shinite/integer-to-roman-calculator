export const CONSTANTS = {
  HEADING: "Integer To Roman Calculator",
  INPUT_PLACEHOLDER: "Please enter a number",
  CONVERT: "Convert To Roman",
  ROMAN_NUMERAL: "Roman Numeral",
  ERROR_TEXT: "Please enter a valid number from 1 to 1000",
};

export const INT_TO_ROMAN = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
] as Array<Array<number | string>>;

export const TEST_CONSTANTS = {
  CONVERT_BUTTON: "convert-button",
  INPUT_VALUE: "integer-input",
  RESULT_CONTAINER: "result-container",
};
