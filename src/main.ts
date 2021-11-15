import essayHandler from "./handler.js";

const selectBox = document.querySelector("#selectBox") as HTMLSelectElement;
const openPost = document.querySelector(".open-post") as HTMLButtonElement;
const modals = document.querySelector(".modals") as HTMLDivElement;
const modal = document.querySelectorAll<HTMLDivElement>(".modal");
const modalTitle = document.querySelector(".modal_title") as HTMLElement;
const modalErrorMsg = document.querySelector(".modal_errorMsg") as HTMLSpanElement;
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

const addedItems = {
  
};

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
  
  // 타입별 form 양식이 달라져야함
  currentType = contentType;
});




modals.addEventListener("click", (e: Event) => {
  const target = e.target as HTMLDivElement;  
  if (target.className === "modals" || target.className === "cancel") {
    e.preventDefault();
    modals.style.display = "none";
    modal.forEach(m => {
      m.classList.remove('active')
    })
    inputTitle.value = "";
    inputDesc.value = "";
    modalErrorMsg.style.display = "none";
  } else if (target.className === "post") {
    e.preventDefault();
    if (inputTitle.value == "" || inputDesc.value == "") {  
      modalErrorMsg.style.display = "block";  
      
    } else {      
      modals.style.display = "none";
      const addedItem = {
        type: currentType,
        id: new Date().getTime(),
        title: inputTitle.value,
        content: inputDesc.value,
        date: dateTransform(new Date(), "-"),
      }
      testHandler.addItem(addedItem);
      addedItems[currentType][addedItem.id] = addedItem;  
      modalErrorMsg.style.display = "none";
      inputTitle.value = "";
      inputDesc.value = "";
    }
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
