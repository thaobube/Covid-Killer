import './styles.scss';
import { vaccins } from './src/data/data';
import { header } from './src/views/header';
import { innerHTMLMain, renderMain } from './src/views/main';
import { innerHTMLFooter, renderFooter } from './src/views/footer';
import { approvedVaccins, descendingVaccins, ascendingVaccins } from './src/helpers/filterVaccins';

const app = document.getElementById('app');

app.innerHTML = header + renderMain(vaccins) + renderFooter();

const main = document.querySelector('main');
const footer = document.querySelector('footer');

let currentArray = vaccins;
let cache = false;
let sum = 0;
document.body.addEventListener('click', (e) => {
  // Event when clicking to the button "cacher les vaccins non approuvés"
  if (e.target.matches('.btn--cache')) {
    console.log(cache);
    if (!cache) {
      currentArray = approvedVaccins;
      main.innerHTML = innerHTMLMain(currentArray);
      cache = !cache;
      e.target.innerHTML = 'Afficher tous les vaccins';
    } else {
      currentArray = vaccins;
      main.innerHTML = innerHTMLMain(currentArray);
      cache = !cache;
      e.target.innerHTML = 'Cacher les vaccins "non approuvés"';
    }
  }
  // Event when sorting by 'Prix"
  if (e.target.matches('#sortField')) {
    if (parseInt(e.target.value) === 1) {
      main.innerHTML = innerHTMLMain(descendingVaccins);
      console.log(e.target.value);
    }
    if (parseInt(e.target.value) === 2) {
      main.innerHTML = innerHTMLMain(ascendingVaccins);
      console.log(e.target.value);
    }
  }

  // Event when clicking to the button "Reserver"
  if (e.target.matches('.btn--reserver')) {
    const input = e.target.parentNode.querySelector('.reservedQuantity');
    input.style.display = 'none';
    e.target.disabled = true;
    // get the id
    const { id } = e.target.closest('.my-card');
    const myCart = document.querySelector('.my-cart');
    myCart.innerHTML += `
    <div class="row">
        <div class="col-1"><div class="my-cart__text">${currentArray[id].nom}</div></div>
        <div class="col"><div class="my-cart__text">${currentArray[id].prix}</div></div>
        <div class="col"><div class="my-cart__text">${input.value}</div></div>
        <div class="col col-total"><div class="my-cart__text">${currentArray[id].prix * parseInt(input.value)}</div></div>
    </div>
    `;
    sum += currentArray[id].prix * parseInt(input.value);
    const total = document.querySelector('.total');
    total.innerHTML = `Totale: ${sum} $`;
  }
  // Event when clicking to the button "Passer la commande"
  if (e.target.matches('.btn--commande')) {
    const content = document.querySelector('.btnFooter');
    content.innerHTML = `
    <p>La commande a bien été enregistrée!</p>
    <button class="btn btn--continue">Continuer à commander</button>`;
  }
  // Event when clicking to the button "Continuer à réserver"
  if (e.target.matches('.btn--continue')) {
    main.innerHTML = innerHTMLMain(vaccins);
    footer.innerHTML = innerHTMLFooter();
  }
  // Event when clicking to the button "Annuler la commande"
  if (e.target.matches('.btn--annuler')) {
    main.innerHTML = innerHTMLMain(vaccins);
    footer.innerHTML = innerHTMLFooter();
  }
});
