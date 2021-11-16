import { EssayComponent } from "./essay.js";
import essayHandler from "./handler.js";

const selectBox = document.querySelector("#selectBox") as HTMLSelectElement;
const openPost = document.querySelector(".open-post") as HTMLButtonElement;
const modals = document.querySelector(".modals") as HTMLDivElement;
const modal = document.querySelectorAll<HTMLDivElement>(".modal");
const modalTitle = document.querySelector(".modal_title") as HTMLElement;
const modalErrorMsg = document.querySelectorAll<HTMLSpanElement>(".modal_errorMsg");
const deleteBtn = document.querySelectorAll(".item-delete");
const items = document.querySelector(".items") as HTMLDivElement;
const item = document.querySelectorAll<HTMLLIElement>('.item') ;
const inputTitle = document.querySelector(".input-title") as HTMLInputElement;
const inputDesc = document.querySelector(".input-desc") as HTMLInputElement;
const navTypes = document.querySelector('.nav-types') as HTMLUListElement;
const navType = document.querySelectorAll<HTMLLIElement>('.nav-type');
const modalEssay = document.querySelector('#modal__essay') as HTMLDivElement;
const modalUrl = document.querySelector('#modal__url') as HTMLDivElement;

const testHandler = new essayHandler();

type Type = "essay" | "youtube" | "siteLink" | "image" | "default";
let currentType: Type;
let displayType: Type | 'all';

const dateTransform = (date: Date, symbol: string): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}${symbol}${month}${symbol}${day}`;
};

items?.addEventListener("click", (e: Event) => {
  const target = e.target as HTMLDivElement;
  if (target.className === "item-delete") {
    testHandler.deleteItem(target);
  } else if(target.className === 'item-update'){
    // const type = target.dataset.type;
    // testHandler.updateItem(addedItems[target.id]);
  }
});

openPost?.addEventListener("click", (e) => {
  const option = selectBox.selectedOptions[0] as HTMLOptionElement;  
  const contentType: Type = option.value as Type;
  

  if (contentType === "default") {
    return;
  } else if(contentType === 'essay'){
    const essayFormTitle = modalEssay.querySelector('.modal_title') as HTMLParagraphElement;
    essayFormTitle.innerText = option.text;
    modalEssay.classList.add("active");
    modals.style.display = "block";
  } else {
    const urlFormTitle = modalUrl.querySelector('.modal_title') as HTMLParagraphElement;
    urlFormTitle.innerText = option.text;
    modalUrl.classList.add('active');
    modals.style.display = 'block';
  }
  currentType = contentType;  
});

function modalInit(){ // post, cancel 후 modal state 초기화
  modal.forEach(m => {
    m.classList.remove('active')
  })

  const essayInputTitle = modalEssay.querySelector('.input-title') as HTMLInputElement;
  const essayInputDesc = modalEssay.querySelector('.input-desc') as HTMLInputElement;
  const urlInputTitle = modalUrl.querySelector('.input-title') as HTMLInputElement;
  const urlInputDesc = modalUrl.querySelector('.input-desc') as HTMLInputElement;
  essayInputTitle.value = '';
  essayInputDesc.value = '';
  urlInputDesc.value = '';
  urlInputTitle.value = '';
  modalErrorMsg.forEach(msg => {
    msg.style.display = 'none';
  })

}

modals.addEventListener("click", (e: Event) => {
  const target = e.target as HTMLDivElement;  

  // 모달창 추가로 인한 inputTitle, inputDesc가 두개인 이슈 처리
  // 타입에 따른 케이스 구분 요망

  if (target.className === "modals" || target.className === "cancel") {
    e.preventDefault();
    modals.style.display = "none";
    modalInit()    
  } else if (target.className === "post") {
    e.preventDefault();
    if (inputTitle.value == "" || inputDesc.value == "") {  
      modalErrorMsg.forEach(m => {
        m.style.display = 'block'
      })
      return;  
    } else {
      modals.style.display = "none";
      const essayComponent = new EssayComponent(inputTitle.value, inputDesc.value)
      essayComponent.attachTo(items, 'afterbegin');
    }
    modalInit()
  }

});

navTypes.addEventListener('click', (e:Event) => { // filtering items
  const target = e.target as HTMLElement
  displayType = target.dataset.type as Type | 'all';
  item.forEach(i => {
    if(displayType === 'all'){
      i.style.display = 'flex'
    } else if(i.dataset.type === displayType){
      i.style.display = 'flex';
    } else {
      i.style.display = 'none';
    }
  })
})
