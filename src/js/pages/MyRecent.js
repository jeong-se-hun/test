import { createElement, getPayload } from '../app.js';
import { Footer, Header, MyLeftMenu, MyRecentSection } from '../components/index.js';

const $root = document.getElementById('root');

const deleteHistory = e => {
  if (!e.target.classList.contains('recent__fill__button')) return;
  const { payload } = getPayload();
  localStorage.removeItem(payload.userId);
};

const MyRecent = () => {
  const { payload } = getPayload();

  $root.addEventListener('click', deleteHistory);

  return createElement(`
${Header()}
<div class="my__container">
  <div class="my__container__contents">
    <div class="my__left__menu__container">
      ${MyLeftMenu('/recent')}
    </div>
      ${MyRecentSection(payload)}
  </div>
</div>
${Footer()}
`);
};
export default MyRecent;
