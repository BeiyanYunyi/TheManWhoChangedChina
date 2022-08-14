import { createRoot, createSignal } from 'solid-js';
import oriImage from './assets/image.png';

const state = () => {
  const [image, setImage] = createSignal(oriImage);
  const [author, setAuthor] = createSignal('［美］罗伯特·劳伦斯·库恩 著');
  const [english0, setEnglish0] = createSignal('THE MAN');
  const [english1, setEnglish1] = createSignal('WHO');
  const [english2, setEnglish2] = createSignal('CHANGED');
  const [english3, setEnglish3] = createSignal('CHINA');
  const [title0, setTitle0] = createSignal('他改变了');
  const [title1, setTitle1] = createSignal('中国');
  const [subtitle, setSubtitle] = createSignal('江泽民传');
  const [bookRef, setBookRef] = createSignal<HTMLDivElement>();
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
  };
};

export default createRoot(state);
