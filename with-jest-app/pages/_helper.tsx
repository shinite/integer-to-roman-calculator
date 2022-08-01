import { INT_TO_ROMAN } from "./_constants";

/**
 * convertIntegerToRoman function converts the input value
 * to roman numeral
 */
export const convertIntegerToRoman = (num: number)  => {
    let roman = ''
    for (let i = 0; i < INT_TO_ROMAN.length; i++) {
        while (INT_TO_ROMAN[i][0] <= num) {
            num -= INT_TO_ROMAN[i][0] as number;
            roman += INT_TO_ROMAN[i][1];
        }
    }
    return roman;
}