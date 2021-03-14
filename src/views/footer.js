export function innerHTMLFooter() {
  let contentHtml = `
  <div class="my-cart">
    <p>La commande en cours</p>
    <div class="row">
  `;
  const headingText = ['Vaccins', 'Prix', 'Qty', 'Total ($)'];
  contentHtml += `
      <div class="col col-1">
        <div class="my-cart__title">Vaccins</div>
      </div>
      `;
  for (let i = 1; i < headingText.length; i++) {
    contentHtml += `
      <div class="col">
        <div class="my-cart__title">${headingText[i]}</div>
      </div>
      `;
  }
  contentHtml += `
    </div>
  </div>
  <div class="total">Totale: 0 $</div>
  <div class="btnFooter">
    <button class="btn btn--commande">Passer la commande</button>
    <button class="btn btn--annuler">Annuler la commande</button>
  </div>
  <div class="bg-img-footer"></div>
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
