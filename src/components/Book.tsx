import type { Component } from 'solid-js';
import state from '../state';

const Book: Component = () => {
  const { image, author, english0, english1, english2, english3, title0, title1, subtitle } = state;
  return (
    <div class="bg-coverColor h-[225mm] w-[158mm]">
      <div class="flex mr-4 pt-4 justify-between">
        <img src={image()} class="w-[79mm]" />
        <div class="flex flex-col items-end">
          <p class="font-author text-authorFont text-[5mm]">{author()}</p>
          <div class="flex flex-col font-cardo font-bold mt-4 text-englishFont text-[12mm] gap-4">
            <p>{english0()}</p>
            <p>{english1()}</p>
            <p>{english2()}</p>
            <p>{english3()}</p>
          </div>
        </div>
      </div>
      <div class="font-simsun font-extrabold mr-4">
        <div class="flex flex-col text-titleFont text-[35mm] items-end">
          <p>{title0()}</p>
          <p class="mt-4 mr-[17mm]">{title1()}</p>
        </div>
        <p class="mt-4 mr-4 text-subtitleFont text-right text-[17mm]">{subtitle()}</p>
      </div>
    </div>
  );
};

export default Book;
