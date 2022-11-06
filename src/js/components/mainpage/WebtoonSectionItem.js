import { isAdult } from '../../app.js';

const WebtoonSectionItem = ({ title, cover, up, holdOn, freeEpisode, author, rating, views, adult }) => `
  <li class="webtoon__carousel__item carouselItem" data-adult="${adult}">
    <a href="/webtoon" class="webtoon__carousel__link" data-title="${title}">
      <div class="webtoon__carousel__thumbnail">
        <img src="${isAdult(cover, adult)}" alt="" class="webtoon__carousel__img" />
        <div class="carousel__info">
          ${up ? `<i class="bx bxl-upwork"></i>` : ''} 
          ${holdOn ? `<i class="bx bx-time-five"></i>` : ''}
          <span class="carousel__free-count">${freeEpisode}화무</span>
        </div>
      </div>
    </a>
    <a href="/webtoon" class="webtoon__carousel__title" data-title="${title}">${title}</a>
    <p class="webtoon__carousel__author">${author}</p>
    <p>
      <span class="carousel__star">
        <i class="bx bxs-star"></i>
        ${rating}
      </span>
      <span class="carousel__rate">(${views})</span>
    </p>
  </li>
`;

export default WebtoonSectionItem;
