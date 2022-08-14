/**  convert a Unicode string to a string in which\
 * each 16-bit unit occupies only one byte
 */
const toBinary = (string: string) => {
  const codeUnits = new Uint16Array(string.length);
  for (let i = 0; i < codeUnits.length; i += 1) {
    codeUnits[i] = string.charCodeAt(i);
  }
  const charCodes = new Uint8Array(codeUnits.buffer);
  let result = '';
  for (let i = 0; i < charCodes.byteLength; i += 1) {
    result += String.fromCharCode(charCodes[i]);
  }
  return result;
};

const fromBinary = (binary: string) => {
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < bytes.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  const charCodes = new Uint16Array(bytes.buffer);
  let result = '';
  for (let i = 0; i < charCodes.length; i += 1) {
    result += String.fromCharCode(charCodes[i]);
  }
  return result;
};

export interface IParams {
  author: string;
  english0: string;
  english1: string;
  english2: string;
  english3: string;
  title0: string;
  title1: string;
  subtitle: string;
}

export const encode = (str: string) => window.btoa(toBinary(str));
export const decode = (str: string) => fromBinary(window.atob(str));
