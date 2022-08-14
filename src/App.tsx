import { Component } from 'solid-js';
import Book from './components/Book';
import Form from './components/Form';

const App: Component = () => (
  <div class="flex">
    <Book />
    <Form />
  </div>
);

export default App;
