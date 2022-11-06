import { createElement } from '../app.js';
import { Header, Footer, MyLeftMenu, MyRidiCash } from '../components/index.js';

const $root = document.getElementById('root');

const rideAlert = e => {
  if (e.target.matches('.my__ridicash__form')) {
    e.preventDefault();
    alert('서비스 준비중입니다.');
  }
};

const ridiCashEventBinding = () => {
  $root.addEventListener('submit', rideAlert);
};

const MyRidiCashChargePage = () => {
  ridiCashEventBinding();

  return createElement(`
${Header()}
<div class="my__container">
  <div class="my__container__contents">
    <div class="my__left__menu__container">
      ${MyLeftMenu('/myridicharge')}
    </div>
    ${MyRidiCash('/myridicharge')}
  </div>
</div>
${Footer()}
`);
};

export default MyRidiCashChargePage;
