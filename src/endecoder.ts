import { encode as enc, decode as dec } from 'base64-arraybuffer';

export const encode = (str: string) => {
  const ary = new TextEncoder().encode(str);
  return enc(ary);
};

export const decode = (str: string) => {
  const ary = dec(str);
  return new TextDecoder().decode(ary);
};
