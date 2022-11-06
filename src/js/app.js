import adultThumbnail from '../urlImg/adultThumbnail.webp';
import adultcoverimage from '../urlImg/adultcoverimage2.webp';

const renderHTML = ($originDOM, $virtualDOM) => {
  if ($originDOM.tagName !== $virtualDOM.tagName) {
    const $newNode = $virtualDOM.cloneNode(true);
    $originDOM.replaceWith($newNode);
  } else {
    $originDOM.innerHTML = $virtualDOM.innerHTML;
  }
};

const renderNode = ($originDOM, $virtualDOM) => {
  if ($originDOM.textContent.replace(/ /g, '') !== $virtualDOM.textContent.replace(/ /g, '')) {
    $originDOM.textContent = $virtualDOM.textContent;
  }

  const $maxAttrDOM =
    $virtualDOM.getAttributeNames().length >= $originDOM.getAttributeNames().length ? $virtualDOM : $originDOM;

  $maxAttrDOM.getAttributeNames().forEach(attr => {
    if ($virtualDOM.getAttribute(attr) === null) $originDOM.removeAttribute(attr);
    else if ($originDOM.getAttribute(attr) !== $virtualDOM.getAttribute(attr))
      $originDOM.setAttribute(attr, $virtualDOM.getAttribute(attr));
  });
};

const compareDom = ($originDOM, $virtualDOM) => {
  if ($virtualDOM.children.length === 0) return;

  if ($originDOM.children.length !== $virtualDOM.children.length) {
    renderHTML($originDOM, $virtualDOM);
    return;
  }

  for (let i = 0; i < $originDOM.children.length; i++) {
    compareDom($originDOM.children[i], $virtualDOM.children[i]);
    if ($originDOM.innerHTML !== $virtualDOM.innerHTML) renderNode($originDOM.children[i], $virtualDOM.children[i]);
  }
};

const createElement = string => {
  const $virtualDOM = document.createElement('div');
  $virtualDOM.innerHTML = string;
  return $virtualDOM;
};

const fetchData = async url => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

const getPayload = () => {
  const decodeToken = localStorage.getItem('token');
  if (decodeToken) {
    const payload = JSON.parse(window.atob(decodeToken));
    const isAdult = new Date().getFullYear() - payload.birth >= 19;
    return { payload, isAdult };
  }
};

const isAdult = (cover, adult) => {
  if (localStorage.getItem('token')) {
    const { isAdult } = getPayload();

    if (isAdult) {
      if (/adultcoverimage2/.test(cover)) return adultcoverimage;
      return cover;
    }
    if (!isAdult && adult) return adultThumbnail;
    return cover;
  }

  if (adult) return adultThumbnail;

  return cover;
};

export { createElement, fetchData, getPayload, compareDom, isAdult };
