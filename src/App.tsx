import { Component, onMount } from 'solid-js';
import Book from './components/Book';
import Form from './components/Form';
import state from './state';

const App: Component = () => {
  const { setBookRef } = state;
  let bookRef: HTMLDivElement | undefined;
  onMount(() => {
    setBookRef(bookRef);
  });
  return (
    <div class="flex font-sans gap-2">
      <Book ref={bookRef} />
      <Form />
    </div>
  );
};

export default App;
