const $ = document.querySelector.bind(document);
const galleryEl = $('.js-gallery');
const btnContainerEl = $('.js-btnContainer');


const onBtnClick = (event)=>{
  event.preventDefault();
  
  const firstEl = galleryEl.firstElementChild;
  const lastEl = galleryEl.lastElementChild;
  let firstElStyle = firstEl.classList.toString();
  let lastElStyle = lastEl.classList.toString();
  [firstElStyle, lastElStyle] = [lastElStyle, firstElStyle];

  if (!event.target.classList.contains('slider__control_left')){
    firstEl.classList = firstElStyle;
    lastEl.classList = lastElStyle;
    galleryEl.prepend(lastEl);
    return;
  }
  
  lastEl.classList = lastElStyle;
  firstEl.classList = firstElStyle;
  galleryEl.append(firstEl);
}

btnContainerEl.addEventListener('click', onBtnClick);
