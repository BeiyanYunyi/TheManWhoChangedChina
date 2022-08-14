import html2canvas from 'html2canvas';
import type { JSX } from 'solid-js';
import state from '../state';
import Button from './Button';
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
    encodeToParam,
    backToDefault,
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
      <div class="flex gap-2 flex-wrap">
        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleScreenshot(false);
          }}
        >
          截图
        </Button>
        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleScreenshot(true);
          }}
        >
          下载
        </Button>
        <Button
          type="button"
          onClick={async (e) => {
            e.preventDefault();
            await window.navigator.clipboard.writeText(
              `${window.location.origin}/${encodeToParam()}`,
            );
            alert('已复制到剪贴板');
          }}
        >
          复制分享链接到剪贴板
        </Button>
        <Button
          type="button"
          onClick={async (e) => {
            e.preventDefault();
            backToDefault();
          }}
        >
          回到默认
        </Button>
      </div>
    </form>
  );
};

export default Form;
