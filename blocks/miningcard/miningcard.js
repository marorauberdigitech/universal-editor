export default function decorate(block) {
  const title = block.querySelector('h2');
  const image = block.querySelector('img');
  const description = block.querySelector('p');
  const cta = block.querySelector('a');

  block.classList.add('miningcard');
  if (title) title.classList.add('miningcard-title');
  if (image) image.classList.add('miningcard-image');
  if (description) description.classList.add('miningcard-desc');
  if (cta) cta.classList.add('miningcard-cta');
}
