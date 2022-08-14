import type { JSX, ParentComponent } from 'solid-js';

const Button: ParentComponent<JSX.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <button
    class="p-2 rounded-md border-2 border-blue-500 bg-transparent hover:bg-blue-100 cursor-pointer disabled:cursor-not-allowed"
    {...props}
  >
    {props.children}
  </button>
);

export default Button;
