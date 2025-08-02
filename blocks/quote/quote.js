export default function decorate(block) {
  const [quoteWrapper, authorWrapper, imageWrapper] = block.children;

  const quoteText = quoteWrapper?.textContent.trim();
  const authorText = authorWrapper?.textContent.trim();
  const imageEl = imageWrapper?.querySelector('img');

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteText;
  blockquote.setAttribute('data-sly-prop', 'quote'); // EDS property binding

  const authorDiv = document.createElement('div');
  authorDiv.classList.add('quote-author');
  authorDiv.textContent = authorText;
  authorDiv.setAttribute('data-sly-prop', 'author');

  const quoteContentWrapper = document.createElement('div');
  quoteContentWrapper.classList.add('quote-content');
  quoteContentWrapper.appendChild(blockquote);
  quoteContentWrapper.appendChild(authorDiv);

  const finalWrapper = document.createElement('div');
  finalWrapper.classList.add('quote-inner');

  if (imageEl) {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('quote-image');

    // Add EDS compatibility for image asset
    imageEl.setAttribute('data-sly-prop', 'image');
    imgContainer.appendChild(imageEl);
    finalWrapper.appendChild(imgContainer);
  }

  finalWrapper.appendChild(quoteContentWrapper);
  block.replaceChildren(finalWrapper);
}
