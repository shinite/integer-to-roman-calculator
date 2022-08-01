import { INT_TO_ROMAN } from "./_constants";

/**
 * convertIntegerToRoman function converts the input
 * integer value to roman numeral
 */
export const convertIntegerToRoman = (num: number) => {
  let roman = "";
  for (let i = 0; i < INT_TO_ROMAN.length; i++) {
    while (INT_TO_ROMAN[i][0] <= num) {
      num -= INT_TO_ROMAN[i][0] as number;
      roman += INT_TO_ROMAN[i][1];
    }
  }
  return roman;
};

/**
 * validateInput function checks the input value
 * to contain only digits and values between 0 to 1000
 */
export const validateInput = (value: string) => {
  // regex to check if value contains only digits
  if (!/^[0-9]+$/.test(value)) return false;
  let intValue = parseInt(value);
  if (intValue <= 0 || intValue > 1000) return false;
  return true;
};
