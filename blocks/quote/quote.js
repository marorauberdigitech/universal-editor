export default function decorate(block) {
  const [quoteWrapper, authorWrapper, imageWrapper] = block.children;

  const quoteText = quoteWrapper?.textContent.trim();
  const authorText = authorWrapper?.textContent.trim();
  const imageEl = imageWrapper?.querySelector('img');

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteText;

  const authorDiv = document.createElement('div');
  authorDiv.textContent = authorText;

  const quoteContentWrapper = document.createElement('div');
  quoteContentWrapper.appendChild(blockquote);
  quoteContentWrapper.appendChild(authorDiv);

  const finalWrapper = document.createElement('div');
  finalWrapper.classList.add('quote-inner');

  if (imageEl) {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('quote-image');
    imgContainer.appendChild(imageEl);
    finalWrapper.appendChild(imgContainer);
  }

  finalWrapper.appendChild(quoteContentWrapper);
  block.replaceChildren(finalWrapper);
}
