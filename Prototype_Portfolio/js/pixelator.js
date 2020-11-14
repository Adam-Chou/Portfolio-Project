// Code tutorial is used from : https://www.superhi.com/video/pixelated-image-lazy-loading-effect-as-seen-on-teenage-engineering

const pixelator = document.querySelector('#frontpageimg');
const filename = pixelator.dataset.original;

const image = new Image();
image.src = filename;


image.onload = () => {
  setTimeout(() => {
    pixelator.style.margin = "0 auto";
    pixelator.src = filename;
  }, 1500)
}