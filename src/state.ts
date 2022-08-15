import { createRoot, createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';
import oriImage from './assets/image.png';
import { decode, encode, IParams } from './endecoder';

const defaultValue = {
  author: '［美］罗伯特·劳伦斯·库恩 著',
  english0: 'THE MAN',
  english1: 'WHO',
  english2: 'CHANGED',
  english3: 'CHINA',
  title0: '他改变了',
  title1: '中国',
  subtitle: '江泽民传',
};

const state = () => {
  const paramsb64 = window.location.hash;
  const params = paramsb64 ? (JSON.parse(decode(paramsb64.substring(1))) as IParams) : undefined;
  const [store, setStore] = createStore(params || defaultValue);
  const [image, setImage] = createSignal(oriImage);
  const [bookRef, setBookRef] = createSignal<HTMLDivElement>();

  const encodeToParam = () => {
    const paramStr = JSON.stringify(store);
    return encode(paramStr);
  };

  const backToDefault = () => {
    setStore(defaultValue);
  };

  return {
    image,
    setImage,
    store,
    setStore,
    bookRef,
    setBookRef,
    encodeToParam,
    backToDefault,
  };
};

export default createRoot(state);
