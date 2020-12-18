export function innerHTMLFooter() {
  let contentHtml = '';
  contentHtml += `
    <p>Résume la commande en cours:</p>
    <button>Passer la commande</button>
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
