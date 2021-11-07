import essayHandler from "./handler";

const selectBox = document.querySelector('#selectBox') as HTMLSelectElement;
const post = document.querySelector('.post') as HTMLButtonElement;
const modals = document.querySelector('.modals');
const deleteBtn = document.querySelectorAll('.item-delete');
const items = document.querySelector('.items') as HTMLElement;

const testHandler = new essayHandler();

items?.addEventListener('click', (e: Event) => {
  if(e.target.className === 'item-delete'){
    testHandler.deleteItem(e.target);
  } 
})

post?.addEventListener('click', (e) => {  
  console.log(selectBox.selectedOptions[0].label); 
})




testHandler.addItem({
  type: 'essay',
  id: 1,
  title: '동적으로 받아온 제목',
  content: '동적으로 받아온 내용',
})