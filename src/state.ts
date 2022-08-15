import { createRoot, createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';
import oriImage from './assets/image.png';
import { decode, encode } from './endecoder';

interface IParams {
  author: string;
  english: [string, string, string, string];
  title: [string, string];
  subtitle: string;
}

const defaultValue: IParams = {
  author: '［美］罗伯特·劳伦斯·库恩 著',
  english: ['THE MAN', 'WHO', 'CHANGED', 'CHINA'],
  title: ['他改变了', '中国'],
  subtitle: '江泽民传',
};

const state = () => {
  const paramsb64 = window.location.hash;
  const calculatedValue = (() => {
    if (!paramsb64) return defaultValue;
    try {
      const params = JSON.parse(decode(paramsb64.substring(1))) as IParams;
      return params;
    } catch (e) {
      console.error(e);
      return defaultValue;
    }
  })();
  const [store, setStore] = createStore(calculatedValue);
  const [image, setImage] = createSignal(oriImage);
  const [bookRef, setBookRef] = createSignal<HTMLDivElement>();

  const encodeToParam = () => {
    const paramStr = JSON.stringify(store);
    return encode(paramStr);
  };

  const backToDefault = () => {
    setStore(defaultValue);
  };

  const setEnglish = (index: number, value: string) =>
    setStore(
      'english',
      (ori) =>
        [...ori.slice(0, index), value, ...ori.slice(index + 1)] as [
          string,
          string,
          string,
          string,
        ],
    );

  const setTitle = (index: number, value: string) =>
    setStore(
      'title',
      (ori) => [...ori.slice(0, index), value, ...ori.slice(index + 1)] as [string, string],
    );

  return {
    image,
    setImage,
    store,
    setStore,
    setEnglish,
    setTitle,
    bookRef,
    setBookRef,
    encodeToParam,
    backToDefault,
  };
};

export default createRoot(state);
