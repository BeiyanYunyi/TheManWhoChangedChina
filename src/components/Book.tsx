import type { Component } from 'solid-js';
import state from '../state';

const Book: Component<{ ref?: HTMLDivElement }> = (props) => {
  const { store, image } = state;
  return (
    <div
      class="bg-coverColor border-coverColor border-r-1 border-solid h-[225mm] w-[158mm]"
      ref={props.ref}
    >
      <div class="flex mr-4 pt-4 justify-between">
        <img src={image()} class="w-[79mm] h-[79mm]" />
        <div class="flex flex-col items-start">
          <p class="font-author text-authorFont text-[5mm]">{store.author}</p>
          <div class="flex flex-col font-cardo font-bold mt-4 ml-4 text-englishFont text-[12mm] gap-4">
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
        <p class="mt-4 mr-4 text-subtitleFont text-right text-[17mm]">{store.subtitle}</p>
      </div>
    </div>
  );
};

export default Book;
