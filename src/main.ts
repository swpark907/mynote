import essayHandler from "./handler.js";

const selectBox = document.querySelector("#selectBox") as HTMLSelectElement;
const openPost = document.querySelector(".open-post") as HTMLButtonElement;
const modals = document.querySelector(".modals") as HTMLDivElement;
const modal = document.querySelector(".modal") as HTMLDivElement;
const modalTitle = document.querySelector(".modal_title") as HTMLElement;
const modalErrorMsg = document.querySelector(".modal_errorMsg") as HTMLSpanElement;
const deleteBtn = document.querySelectorAll(".item-delete");
const items = document.querySelector(".items") as HTMLDivElement;
const inputTitle = document.querySelector(".input-title") as HTMLInputElement;
const inputDesc = document.querySelector(".input-desc") as HTMLInputElement;

const testHandler = new essayHandler();

type Type = "essay" | "youtube" | "siteLink" | "music" | "default";
let currentType: Type;

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
  }
});

openPost?.addEventListener("click", (e) => {
  console.log(selectBox.selectedOptions[0].label, "asdf");
  const contentType: Type = selectBox.selectedOptions[0].value as Type;
  console.log();

  if (contentType === "default") {
    return;
  }
  modalTitle.innerText = selectBox.selectedOptions[0].text;
  modal.classList.add("active");
  modals.style.display = "block";

  // 타입별 form 양식이 달라져야함
  currentType = contentType;
});

modals.addEventListener("click", (e: Event) => {
  const target = e.target as HTMLDivElement;
  if (target.className === "modals" || target.className === "cancel") {
    e.preventDefault();
    modals.style.display = "none";
    inputTitle.value = "";
    inputDesc.value = "";
    modalErrorMsg.style.display = "none";
  } else if (target.className === "post") {
    e.preventDefault();
    if (inputTitle.value == "" || inputDesc.value == "") {
      modalErrorMsg.style.display = "block";
    } else {      
      modals.style.display = "none";
      testHandler.addItem({
        type: currentType,
        id: new Date().getTime(),
        title: inputTitle.value,
        content: inputDesc.value,
        date: dateTransform(new Date(), "-"),
      });
      modalErrorMsg.style.display = "none";
    }
    
    inputTitle.value = "";
    inputDesc.value = "";
  }
});

// testHandler.addItem({
//   type: 'essay',
//   id: 1,
//   title: '동적으로 받아온 제목',
//   content: '동적으로 받아온 내용',
//   date: dateTransform(new Date(), '-')
// })
