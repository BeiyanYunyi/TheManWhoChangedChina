import html2canvas from 'html2canvas';
import type { JSX } from 'solid-js';
import state from '../state';
import Button from './Button';
import Input from './Input';

const Form = () => {
  const { store, setStore, setImage, bookRef, encodeToParam, backToDefault } = state;
  const handleImage: JSX.EventHandlerUnion<HTMLInputElement, Event> = (e) => {
    const file = window.URL.createObjectURL(e.currentTarget.files![0]);
    setImage(file);
  };
  const handleScreenshot = async (download?: boolean) => {
    const canvas = await html2canvas(bookRef()!, {
      height: 851,
      width: 598,
      scale: 1,
      backgroundColor: '#f50f11',
    });
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
        value={store.author}
        onInput={(e) => {
          setStore('author', e.currentTarget.value);
        }}
      />
      <Input
        value={store.english0}
        onInput={(e) => {
          setStore('english0', e.currentTarget.value);
        }}
      />
      <Input
        value={store.english1}
        onInput={(e) => {
          setStore('english1', e.currentTarget.value);
        }}
      />
      <Input
        value={store.english2}
        onInput={(e) => {
          setStore('english2', e.currentTarget.value);
        }}
      />
      <Input
        value={store.english3}
        onInput={(e) => {
          setStore('english3', e.currentTarget.value);
        }}
      />
      <Input
        value={store.title0}
        onInput={(e) => {
          setStore('title0', e.currentTarget.value);
        }}
      />
      <Input
        value={store.title1}
        onInput={(e) => {
          setStore('title1', e.currentTarget.value);
        }}
      />
      <Input
        value={store.subtitle}
        onInput={(e) => {
          setStore('subtitle', e.currentTarget.value);
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
              `${window.location.origin}/#${encodeToParam()}`,
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
