export function convertToHex(number) {
  return ("0" + parseInt(number, 10).toString(16).toUpperCase()).slice(-2);
}
