export function innerHTMLMain(array) {
  let contentHtml = '<div class = "my-container">';
  for (let i = 0; i < array.length; i++) {
    contentHtml += `
        <div class="my-card" id = "${i}">
            <img class="my-card__img--top" src="${array[i].img}" alt="...">
            <div class="my-card__body">
                <div class="my-card__title">${array[i].nom}</div>
                <div class="my-card__text">Inventeurs: ${array[i].inventeurs}</div>
                <div class="my-card__text">Lieux de production: ${array[i].lieux_de_production}</div>
                <div class="my-card__text">Technologie: ${array[i].technologie}</div>
                <div class="my-card__text">Quantité disponible: ${array[i].quantite}</div>
                <div class="my-card__text">Prix unitaire: ${array[i].prix} $</div>
                <div class="my-card__text">Approuvé: ${array[i].approuve}</div>
                <div class="my-card__text">Quantité réservée: 
                    <input type="number" class = "reservedQuantity" min="0" max="${array[i].quantite}">
                    <button class ="btn btn--reserver">Réserver</button>
                </div>                                  
            </div>
        </div>
        `;
  }
  contentHtml += '</div>';
  return contentHtml;
}

export function renderMain(array) {
  const mainElement = `
    <main>
    ${innerHTMLMain(array)}
    </main>
    `;
  return mainElement;
}
