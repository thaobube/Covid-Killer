import './styles.scss';
import { vaccins } from './src/data/data';
import { header } from './src/views/header';
import { innerHTMLMain, renderMain } from './src/views/main';
import { innerHTMLFooter, renderFooter } from './src/views/footer';

const app = document.getElementById('app');

app.innerHTML = header + renderMain(vaccins) + renderFooter();
