export default function decorate(block) {
  const [textWrapper, imageWrapper] = block.children;

  const text = textWrapper?.textContent.trim();
  const imageEl = imageWrapper?.querySelector('img');

  const blockquote = document.createElement('blockquote');
  blockquote.innerHTML = text;

  const finalWrapper = document.createElement('div');
  finalWrapper.classList.add('image-text-inner');

  const quoteContentWrapper = document.createElement('div');
  quoteContentWrapper.classList.add('image-text-content');
  quoteContentWrapper.appendChild(blockquote);

  if (imageEl) {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('image-text-image');
    imgContainer.appendChild(imageEl);
    finalWrapper.appendChild(imgContainer);
  }

  finalWrapper.appendChild(quoteContentWrapper);
  block.replaceChildren(finalWrapper);
}
