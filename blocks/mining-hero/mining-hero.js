import { decorateBlock, decorateIcons } from '../../scripts/lib-franklin.js';

export default async function decorate(block) {
  const [imageCol, textCol] = block.children;

  // Image column
  const img = imageCol.querySelector('img');
  if (img) {
    const picture = img.closest('picture');
    imageCol.innerHTML = '';
    imageCol.append(picture);
    imageCol.classList.add('mining-promo-image');
  }

  // Text content
  const title = textCol.querySelector('h1, h2, h3, h4, h5, h6');
  const desc = textCol.querySelector('p');
  const cta = textCol.querySelector('a');

  const textWrapper = document.createElement('div');
  textWrapper.classList.add('mining-promo-text');

  if (title) textWrapper.append(title);
  if (desc) textWrapper.append(desc);
  if (cta) {
    cta.classList.add('button', 'primary');
    textWrapper.append(cta);
  }

  textCol.innerHTML = '';
  textCol.append(textWrapper);
  textCol.classList.add('mining-promo-content');

  block.classList.add('mining-promo-block');

  decorateBlock(block);
  decorateIcons(block);
}
