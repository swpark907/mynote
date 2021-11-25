import { YoutubeComponent } from './youtube.js';
import { ImageComponent } from './image.js';
import { EssayComponent } from "./essay.js";
import essayHandler from "./handler.js";

const selectBox = document.querySelector("#selectBox") as HTMLSelectElement;
const openPost = document.querySelector(".open-post") as HTMLButtonElement;
const modals = document.querySelector(".modals") as HTMLDivElement;
const modal = document.querySelectorAll<HTMLDivElement>(".modal");
const modalErrorMsg =
  document.querySelectorAll<HTMLSpanElement>(".modal_errorMsg");
const items = document.querySelector(".items") as HTMLDivElement;
const navTypes = document.querySelector(".nav-types") as HTMLUListElement;
const modalEssay = document.querySelector("#modal__essay") as HTMLDivElement;
const modalUrl = document.querySelector("#modal__url") as HTMLDivElement;
const essayTitle = modalEssay.querySelector(".input-title") as HTMLInputElement;
const essayDesc = modalEssay.querySelector(".input-desc") as HTMLInputElement;
const urlTitle = modalUrl.querySelector('.input-title') as HTMLInputElement;
const urlSrc = modalUrl.querySelector('.input-url') as HTMLInputElement;

const testHandler = new essayHandler();

type Type = "essay" | "youtube" | "siteLink" | "image" | "default";
let currentType: Type;
let displayType: Type | "all";

items?.addEventListener("click", (e: Event) => {
  const target = e.target as HTMLDivElement;
  if (target.className === "item-bottom__delete") {
    testHandler.deleteItem(target);
  } else if (target.className === "item-update") {
    // const type = target.dataset.type;
    // testHandler.updateItem(addedItems[target.id]);
  }
});

openPost?.addEventListener("click", () => {
  const option = selectBox.selectedOptions[0] as HTMLOptionElement;
  const contentType: Type = option.value as Type;

  if (contentType === "default") {
    return;
  } else if (contentType === "essay") {
    const essayFormTitle = modalEssay.querySelector(".modal_title") as HTMLParagraphElement;
    essayFormTitle.innerText = option.text;
    modalEssay.classList.add("active");
    modals.style.display = "block";
  } else {
    const urlFormTitle = modalUrl.querySelector(".modal_title") as HTMLParagraphElement;
    urlFormTitle.innerText = option.text;
    modalUrl.classList.add("active");
    modals.style.display = "block";
  }
  currentType = contentType;
});

function modalInit() {
  // post, cancel 후 modal state 초기화
  modal.forEach((m) => {
    m.classList.remove("active");
  });

  const essayInputTitle = modalEssay.querySelector(
    ".input-title"
  ) as HTMLInputElement;
  const essayInputDesc = modalEssay.querySelector(
    ".input-desc"
  ) as HTMLInputElement;
  const urlInputTitle = modalUrl.querySelector(
    ".input-title"
  ) as HTMLInputElement;
  const urlInputDesc = modalUrl.querySelector(
    ".input-url"
  ) as HTMLInputElement;
  essayInputTitle.value = "";
  essayInputDesc.value = "";
  urlInputDesc.value = "";
  urlInputTitle.value = "";
  modalErrorMsg.forEach((msg) => {
    msg.style.display = "none";
  });
}

modals.addEventListener("click", (e: Event) => {
  const target = e.target as HTMLDivElement;

  if (target.className === "modals" || target.className === "cancel") {
    e.preventDefault();
    modals.style.display = "none";
    modalInit();
  } else if (target.className === "post") {
    e.preventDefault();
    switch (currentType) {
      case "essay":
        if(essayTitle.value == '' || essayDesc.value == ''){
          modalErrorMsg.forEach(m => {
            m.style.display = 'block'
          })
          return;
        } else {
          const essayComponent = new EssayComponent(essayTitle.value,essayDesc.value);
          essayComponent.attachTo(items, "afterbegin");
        }        
        break;
      case "image":
        if(urlTitle.value == '' || urlSrc.value == ''){
          modalErrorMsg.forEach(m => {
            m.style.display = 'block'
          })
          return;
        }
        const imageComponent = new ImageComponent(urlTitle.value, urlSrc.value);
        imageComponent.attachTo(items, 'afterbegin');
        break;
      case "youtube":
        // urlSrc 변환 장치 요망
        if(urlTitle.value == '' || urlSrc.value == ''){
          modalErrorMsg.forEach(m => {
            m.style.display = 'block'
          })
          return;
        }
        const youtubeComponent = new YoutubeComponent(urlTitle.value, urlSrc.value);
        youtubeComponent.attachTo(items, 'afterbegin');
        break;
      case "siteLink":
      }
      modals.style.display = "none";
      modalInit();
    }
    
});

navTypes.addEventListener("click", (e: Event) => {
  const item = items.querySelectorAll<HTMLElement>('.item');
  // filtering items
  const target = e.target as HTMLElement;  
  displayType = target.dataset['type'] as Type | "all";
  item.forEach((i) => {
    if (displayType === "all") {
      i.style.display = "flex";
    } else if (i.dataset['type'] === displayType) {
      i.style.display = "flex";
    } else {
      i.style.display = "none";
    }
  });
});
