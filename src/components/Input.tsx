import type { Component, JSX } from 'solid-js';

const Input: Component<JSX.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input class="p-2 border-2 outline-none rounded-md" {...props} />
);

export default Input;
