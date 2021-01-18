const languageSetting = "de";
export const mult = (b) => (a) => a * b;
export const plus = (b) => (a) => a + b;
export const minus = (b) => (a) => a - b;
export const div = (b) => (a) => a / b;
export const rest = (b) => (a) => a % b;
export const localNumberString = (numb) => numb.toLocaleString(languageSetting);
