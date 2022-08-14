import { Component } from 'solid-js';
import Book from './components/Book';
import Input from './components/Input';
import state from './state';

const App: Component = () => {
  const {
    author,
    english0,
    english1,
    english2,
    english3,
    title0,
    title1,
    subtitle,
    setAuthor,
    setEnglish0,
    setEnglish1,
    setEnglish2,
    setEnglish3,
    setTitle0,
    setTitle1,
    setSubtitle,
  } = state;
  return (
    <div class="flex">
      <Book />
      <form class="flex flex-col gap-2">
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
    </div>
  );
};

export default App;
