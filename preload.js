/**
 * The preload script runs before `index.html` is loaded
 * in the renderer. It has access to web APIs as well as
 * Electron's renderer process modules and some polyfilled
 * Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }

  const bouffeAsiatMap = new Map([
    ['Sushi', 'https://fr.wikipedia.org/wiki/Sushi'],
    ['Maki', 'https://fr.wikipedia.org/wiki/Makizushi'],
    ['Ramen', 'https://fr.wikipedia.org/wiki/R%C4%81men'],
    ['Udon', 'https://fr.wikipedia.org/wiki/Udon'],
    ['Sashimi', 'https://fr.wikipedia.org/wiki/Sashimi'],
  ]);

  const dataList = document.getElementById('data-list');
  bouffeAsiatMap.forEach((url, name) => {
    const listItem = document.createElement('li');
    const linkItem = document.createElement('a');
    linkItem.textContent = name;
    linkItem.setAttribute('href', url);
    listItem.appendChild(linkItem);
    dataList.appendChild(listItem);
  });

  
})
