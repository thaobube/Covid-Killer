import './styles.scss';
import { vaccins } from './src/data/data';
import { header } from './src/views/header';
import { innerHTMLMain, renderMain } from './src/views/main';
import { innerHTMLFooter, renderFooter } from './src/views/footer';

const app = document.getElementById('app');

app.innerHTML = header + renderMain(vaccins) + renderFooter();

const main = document.querySelector('main');
// console.log(main);

// Filter the approved vaccines:
const approvedVaccins = vaccins.filter((vaccin) => vaccin.approuve === 'oui');
// console.log(approvedVaccins);

let cache = false;
document.body.addEventListener('click', (e) => {
  // Event when clicking to the button "cacher les vaccins non approuvés"
  if (e.target.matches('.btn--cache')) {
    console.log(cache);
    if (!cache) {
      main.innerHTML = innerHTMLMain(approvedVaccins);
      cache = !cache;
    } else {
      main.innerHTML = innerHTMLMain(vaccins);
      cache = !cache;
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
        <div class="col"><div class="my-cart__text">${vaccins[id].nom}</div></div>
        <div class="col"><div class="my-cart__text">${vaccins[id].prix_unitaire_indollars}</div></div>
        <div class="col"><div class="my-cart__text">${input.value}</div></div>
        <div class="col"><div class="my-cart__text">${vaccins[id].prix_unitaire_indollars * parseInt(input.value)}</div></div>
    </div>
    `;
  }
  // Event when clicking to the button "Reserver"
  if (e.target.matches('.btn--commande')) {
    app.innerHTML = 'La commande a bien été enregistrée!';
  }
});
