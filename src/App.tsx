import { Component } from 'solid-js';
import image from './assets/image.png';

const App: Component = () => (
  <div class="bg-coverColor h-[225mm] w-[158mm]">
    <div class="flex mr-4 pt-4 justify-between">
      <img src={image} class="w-[79mm]" />
      <div class="flex flex-col items-end">
        <p class="font-author text-authorFont text-[5mm]">［美］罗伯特·劳伦斯·库恩 著</p>
        <div class="flex flex-col font-cardo font-bold mt-4 text-englishFont text-[12mm] gap-4">
          <p>THE MAN</p>
          <p>WHO</p>
          <p>CHANGED</p>
          <p>CHINA</p>
        </div>
      </div>
    </div>
    <div class="font-simsun font-extrabold mr-4">
      <div class="flex flex-col text-titleFont text-[35mm] items-end">
        <p>他改变了</p>
        <p class="mt-4 mr-[17mm]">中国</p>
      </div>
      <p class="mt-4 mr-4 text-subtitleFont text-right text-[17mm]">江泽民传</p>
    </div>
  </div>
);

export default App;
