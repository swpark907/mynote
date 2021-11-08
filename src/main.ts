import essayHandler from "./handler.js";

const selectBox = document.querySelector('#selectBox') as HTMLSelectElement;
const openPost = document.querySelector('.open-post') as HTMLButtonElement;
const modals = document.querySelector('.modals') as HTMLElement;
const modal = document.querySelectorAll<HTMLElement>('.modal');
const deleteBtn = document.querySelectorAll('.item-delete');
const items = document.querySelector('.items') as HTMLElement;

const testHandler = new essayHandler();

items?.addEventListener('click', (e: Event) => {
  if(e.target.className === 'item-delete'){
    testHandler.deleteItem(e.target);
  } 
})

openPost?.addEventListener('click', (e) => {  
  console.log(selectBox.selectedOptions[0].label, 'asdf');
  const contentType: string = selectBox.selectedOptions[0].label;
  modal.forEach(modal => {
    if(contentType === modal.id){
      modal.classList.add('active');      
    } else{
      modal.classList.remove('active')
    }
  })
  modals.style.display = 'block'
})

modals.addEventListener('click', (e) => {
  if(e.target.className === 'modals' || e.target.className === 'cancel'){
    e.preventDefault();
    modals.style.display = 'none';
  } else if(e.target.className === 'post'){
    e.preventDefault();
    modals.style.display = 'none';

    // 게시 버튼을 누르면 input의 내용이 html에 적히는 기능
    
  }
})




testHandler.addItem({
  type: 'essay',
  id: 1,
  title: '동적으로 받아온 제목',
  content: '동적으로 받아온 내용',
})

