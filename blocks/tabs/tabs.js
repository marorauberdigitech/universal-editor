export default function decorate(block) {
  const titles = Array.from(block.querySelectorAll('[data-aue-prop="tabTitles"] p'));
  const contents = Array.from(block.querySelectorAll('[data-aue-prop="tabContents"] div, [data-aue-prop="tabContents"] p'));

  const nav = document.createElement('div');
  nav.classList.add('tabs-nav');

  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('tabs-content');

  titles.forEach((titleEl, index) => {
    const btn = document.createElement('button');
    btn.textContent = titleEl.textContent.trim();
    if (index === 0) btn.classList.add('active');
    nav.appendChild(btn);

    const panel = document.createElement('div');
    panel.classList.add('tab-panel');
    if (index === 0) panel.classList.add('active');
    if (contents[index]) {
      panel.innerHTML = contents[index].innerHTML;
    }
    contentWrapper.appendChild(panel);

    btn.addEventListener('click', () => {
      nav.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      contentWrapper.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      panel.classList.add('active');
    });
  });

  block.innerHTML = '';
  block.classList.add('tabs');
  block.appendChild(nav);
  block.appendChild(contentWrapper);
}