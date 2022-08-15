import type { Component } from 'solid-js';
import state from '../state';

const Book: Component<{ ref?: HTMLDivElement }> = (props) => {
  const { store, image } = state;
  /*
  return (
    <svg width="598" height="850" viewBox="0 0 598 850" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#f50f11" id="canvas_background" height="850" width="598" />
      <text class="font-author fill-authorFont text-[5mm]" id="svg_9" y="34" x="308">
        {store.author}
      </text>
      <image href={image()} id="svg_1" height="298.85" width="283.9" y="16" x="0" />
      <g class="font-cardo font-bold fill-englishFont text-[12mm]">
        <text id="svg_2" y="88" x="324">
          {store.english0}
        </text>
        <text id="svg_3" y="149" x="324">
          {store.english1}
        </text>
        <text id="svg_4" y="210" x="324">
          {store.english2}
        </text>
        <text id="svg_5" y="271" x="324">
          {store.english3}
        </text>
      </g>
      <g class="font-simsun fill-titleFont text-[35mm]">
        <text id="svg_6" y="440" x="40">
          {store.title0}
        </text>
        <text id="svg_7" y="590" x="240">
          {store.title1}
        </text>
      </g>
      <text
        class="font-simsun fill-subtitleFont text-[17mm]"
        text-anchor="start"
        id="svg_8"
        y="675"
        x="300"
      >
        {store.subtitle}
      </text>
    </svg>
  );
  */

  return (
    <div
      class="bg-coverColor border-coverColor border-r-1 border-solid h-[225mm] w-[158mm] flex-shrink-0"
      ref={props.ref}
    >
      <div class="flex mr-4 pt-4">
        <img src={image()} class="w-[75mm] h-[79mm]" />
        <div class="flex flex-col items-start">
          <p class="font-author text-authorFont text-[5.5mm]">{store.author}</p>
          <div class="flex flex-col font-cardo mt-4 ml-4 text-englishFont text-[13mm] gap-4">
            <p>{store.english0}</p>
            <p>{store.english1}</p>
            <p>{store.english2}</p>
            <p>{store.english3}</p>
          </div>
        </div>
      </div>
      <div class="font-simsun font-extrabold mr-4">
        <div class="flex flex-col text-titleFont text-[35mm] items-end">
          <p>{store.title0}</p>
          <p class="mt-4 mr-[17mm]">{store.title1}</p>
        </div>
        <p class="mt-6 mr-4 text-subtitleFont text-right text-[18mm]">{store.subtitle}</p>
      </div>
    </div>
  );
};

export default Book;
