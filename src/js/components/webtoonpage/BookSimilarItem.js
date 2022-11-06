import { isAdult } from '../../app';

const BookSimilarItem = ({ title, cover, adult }) => `
  <li class="books__similar__list__item" data-adult="${adult}">
    <a href="/webtoon" data-title="${title}">
      <img src="${isAdult(cover, adult)}" alt="${title}" />
    </a>
  </li>
`;

export default BookSimilarItem;
