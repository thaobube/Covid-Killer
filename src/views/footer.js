export function innerHTMLFooter() {
  let contentHtml = `
  <div class="my-cart">
    <p>La commande en cours</p>
    <div class="row">
  `;
  const headingText = ['Vaccins', 'Prix', 'Qty', 'Total'];
  for (let i = 0; i < headingText.length; i++) {
    contentHtml += `
      <div class="col">
      <div class="my-cart__title">${headingText[i]}</div>
      </div>
      `;
  }
  contentHtml += `
  </div>
  </div>
  <button class="btn btn--commande">Passer la commande</button>
  `;
  return contentHtml;
}
export function renderFooter() {
  const footerElement = `
    <footer>
    ${innerHTMLFooter()}
    </footer>
    `;
  return footerElement;
}

// <div class="my-cart__text">A</div>
// <div class="my-cart__text">B</div>
// <div class="my-cart__total">${footerText[i]}</div>
