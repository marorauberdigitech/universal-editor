export default function decorate(block) {
  const [textWrapperOuter, imageWrapperOuter] = block.children;

  const textWrapper = textWrapperOuter?.querySelector('[data-aue-prop="text"]');
  const imageEl = imageWrapperOuter?.querySelector('img');

  const blockquote = document.createElement('blockquote');
  if (textWrapper) {
    blockquote.innerHTML = textWrapper.innerHTML;
  }

  const finalWrapper = document.createElement('div');
  finalWrapper.classList.add('image-text-inner');

  const quoteContentWrapper = document.createElement('div');
  quoteContentWrapper.classList.add('image-text-content');
  quoteContentWrapper.appendChild(blockquote);

  if (imageEl) {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('image-text-image');
    imgContainer.appendChild(imageEl.cloneNode(true));
    finalWrapper.appendChild(imgContainer);
  }

  finalWrapper.appendChild(quoteContentWrapper);
  block.innerHTML = '';
  block.appendChild(finalWrapper);
}
