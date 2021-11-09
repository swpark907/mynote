import essayHandler from "./handler.js";

const selectBox = document.querySelector('#selectBox') as HTMLSelectElement;
const openPost = document.querySelector('.open-post') as HTMLButtonElement;
const modals = document.querySelector('.modals') as HTMLElement;
const modal = document.querySelectorAll<HTMLElement>('.modal');
const deleteBtn = document.querySelectorAll('.item-delete');
const items = document.querySelector('.items') as HTMLElement;

const testHandler = new essayHandler();

type Type = 'essay' | 'youtube' | 'siteLink' | 'music';
let currentType: Type;

items?.addEventListener('click', (e: Event) => {
  if(e.target.className === 'item-delete'){
    testHandler.deleteItem(e.target);
  } 
})

openPost?.addEventListener('click', (e) => {  
  console.log(selectBox.selectedOptions[0].label, 'asdf');
  const contentType: Type = selectBox.selectedOptions[0].value as Type;
  modal.forEach(modal => {
    if(contentType === '종류선택'){
      return;
    } else if(contentType === modal.id){
      modal.classList.add('active');   
      modals.style.display = 'block'
      currentType = contentType;   
    } else{
      modal.classList.remove('active')
      modals.style.display = 'block'
      currentType = contentType;
    }
  })
})

modals.addEventListener('click', (e) => {
  if(e.target.className === 'modals' || e.target.className === 'cancel'){
    e.preventDefault();
    modals.style.display = 'none';
  } else if(e.target.className === 'post'){
    e.preventDefault();
    modals.style.display = 'none';

    testHandler.addItem({
      type: currentType,
      id: new Date().getTime(),
      title: '모달을 통해 받아온 제목',
      content: '모달을 통해 받아온 내용',
      date: new Date(),
    })
    
  }
})

// console.log(new Date().getTime());




testHandler.addItem({
  type: 'essay',
  id: 1,
  title: '동적으로 받아온 제목',
  content: '동적으로 받아온 내용',
})

