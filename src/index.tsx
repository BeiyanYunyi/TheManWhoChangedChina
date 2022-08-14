import { render } from 'solid-js/web';
import 'uno.css';
import '@unocss/reset/eric-meyer.css';
import App from './App';

render(() => <App />, document.querySelector('div#root')!);
