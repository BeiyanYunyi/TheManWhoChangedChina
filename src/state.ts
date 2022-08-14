import { createRoot, createSignal } from 'solid-js';
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
  const [image, setImage] = createSignal(oriImage);
  const [author, setAuthor] = createSignal(params?.author || defaultValue.author);
  const [english0, setEnglish0] = createSignal(params?.english0 || defaultValue.english0);
  const [english1, setEnglish1] = createSignal(params?.english1 || defaultValue.english1);
  const [english2, setEnglish2] = createSignal(params?.english2 || defaultValue.english2);
  const [english3, setEnglish3] = createSignal(params?.english3 || defaultValue.english3);
  const [title0, setTitle0] = createSignal(params?.title0 || defaultValue.title0);
  const [title1, setTitle1] = createSignal(params?.title1 || defaultValue.title1);
  const [subtitle, setSubtitle] = createSignal(params?.subtitle || defaultValue.subtitle);
  const [bookRef, setBookRef] = createSignal<HTMLDivElement>();

  const encodeToParam = () => {
    const paramObj = {
      author: author(),
      english0: english0(),
      english1: english1(),
      english2: english2(),
      english3: english3(),
      title0: title0(),
      title1: title1(),
      subtitle: subtitle(),
    };
    const paramStr = JSON.stringify(paramObj);
    return encode(paramStr);
  };

  const backToDefault = () => {
    setAuthor(defaultValue.author);
    setEnglish0(defaultValue.english0);
    setEnglish1(defaultValue.english1);
    setEnglish2(defaultValue.english2);
    setEnglish3(defaultValue.english3);
    setTitle0(defaultValue.title0);
    setTitle1(defaultValue.title1);
    setSubtitle(defaultValue.subtitle);
  };

  return {
    image,
    setImage,
    author,
    setAuthor,
    english0,
    setEnglish0,
    english1,
    setEnglish1,
    english2,
    setEnglish2,
    english3,
    setEnglish3,
    title0,
    setTitle0,
    title1,
    setTitle1,
    subtitle,
    setSubtitle,
    bookRef,
    setBookRef,
    encodeToParam,
    backToDefault,
  };
};

export default createRoot(state);
