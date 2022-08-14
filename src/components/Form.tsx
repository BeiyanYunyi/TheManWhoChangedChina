import html2canvas from 'html2canvas';
import type { JSX } from 'solid-js';
import state from '../state';
import Input from './Input';

const Form = () => {
  const {
    author,
    english0,
    english1,
    english2,
    english3,
    title0,
    title1,
    subtitle,
    setImage,
    setAuthor,
    setEnglish0,
    setEnglish1,
    setEnglish2,
    setEnglish3,
    setTitle0,
    setTitle1,
    setSubtitle,
    bookRef,
  } = state;
  const handleImage: JSX.EventHandlerUnion<HTMLInputElement, Event> = (e) => {
    const file = window.URL.createObjectURL(e.currentTarget.files![0]);
    setImage(file);
  };
  const handleScreenshot = async (download?: boolean) => {
    const canvas = await html2canvas(bookRef()!);
    const image = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    if (download) {
      a.setAttribute('download', 'TheManWhoChangedChina.png');
    }
    a.setAttribute('target', '_blank');
    a.setAttribute('href', image);
    a.click();
  };
  return (
    <form class="flex flex-col gap-2">
      <label class="flex gap-2 items-center">
        封面图片：
        <input type="file" accept="image/*" onChange={handleImage} placeholder="图片" />
      </label>
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
      <div class="flex gap-2">
        <button
          class="p-2 rounded-md border-2 border-blue-500 bg-transparent hover:bg-blue-100"
          type="button"
          onClick={async (e) => {
            e.preventDefault();
            handleScreenshot(false);
          }}
        >
          截图
        </button>
        <button
          class="p-2 rounded-md border-2 border-blue-500 bg-transparent hover:bg-blue-100"
          type="button"
          onClick={async (e) => {
            e.preventDefault();
            handleScreenshot(true);
          }}
        >
          下载
        </button>
      </div>
    </form>
  );
};

export default Form;
