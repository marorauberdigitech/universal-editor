export default function decorate(block) {
  const [textWrapperOuter, imageWrapperOuter] = block.children;

  const textWrapper = textWrapperOuter?.querySelector('[data-aue-prop="text"]');
  const imageEl = imageWrapperOuter?.querySelector('img');

  const blockquote = document.createElement('blockquote');
  if (textWrapper) {
    blockquote.innerHTML = textWrapper.innerHTML;
  }

  const innerWrapper = document.createElement('div');
  innerWrapper.classList.add('image-text-inner');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-text-image');

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('image-text-content');
  contentContainer.appendChild(blockquote);

  if (imageEl) {
    imageContainer.appendChild(imageEl.cloneNode(true));
    innerWrapper.appendChild(imageContainer);
  }

  innerWrapper.appendChild(contentContainer);
  block.innerHTML = '';
  block.appendChild(innerWrapper);
}

