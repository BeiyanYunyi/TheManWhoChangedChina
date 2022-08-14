import type { JSX } from 'solid-js';
import state from '../state';
import Input from './Input';

const Form = () => {
  const {
    author,
    english0,
    english1,
    english2,
    english3,
    title0,
    title1,
    subtitle,
    setImage,
    setAuthor,
    setEnglish0,
    setEnglish1,
    setEnglish2,
    setEnglish3,
    setTitle0,
    setTitle1,
    setSubtitle,
  } = state;
  const handleImage: JSX.EventHandlerUnion<HTMLInputElement, Event> = (e) => {
    const file = window.URL.createObjectURL(e.currentTarget.files![0]);
    setImage(file);
  };
  return (
    <form class="flex flex-col gap-2">
      <input type="file" accept="image/*" onChange={handleImage} />
      <Input
        value={author()}
        onInput={(e) => {
          setAuthor(e.currentTarget.value);
        }}
      />
      <Input
        value={english0()}
        onInput={(e) => {
          setEnglish0(e.currentTarget.value);
        }}
      />
      <Input
        value={english1()}
        onInput={(e) => {
          setEnglish1(e.currentTarget.value);
        }}
      />
      <Input
        value={english2()}
        onInput={(e) => {
          setEnglish2(e.currentTarget.value);
        }}
      />
      <Input
        value={english3()}
        onInput={(e) => {
          setEnglish3(e.currentTarget.value);
        }}
      />
      <Input
        value={title0()}
        onInput={(e) => {
          setTitle0(e.currentTarget.value);
        }}
      />
      <Input
        value={title1()}
        onInput={(e) => {
          setTitle1(e.currentTarget.value);
        }}
      />
      <Input
        value={subtitle()}
        onInput={(e) => {
          setSubtitle(e.currentTarget.value);
        }}
      />
    </form>
  );
};

export default Form;
