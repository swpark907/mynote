// 글 생성
// 버튼을 누르면 모달창 display --> block
// 취소버튼이나 바깥부분을 누르면 display --> none
// 글 내용을 입력하고 게시 버튼을 누르면 
// li item을 생성하고 
// title, content를 내용에 맞게 생성 후 display --> none;

// item 생성하는 class를 만든 후
// 타입에 맞게 method 추가

console.log('js loaded')

type Item = {
  type: 'essay' | 'youtube' | 'siteLink' | 'music';
  id: number;
  title: string;
  content: string;
  date?: Date;
}

interface ItemHandler  {
  addItem(item: Item): void,
  updateItem(item: Item): void,
  deleteItem(item: HTMLElement): void,  
}

const addedItems = {
  essay:[],
  youtube:[],
  siteLink: [],
  music: [],
};

class essayHandler implements ItemHandler {
  constructor(){
    
  }

  addItem(item: Item): void {
    // addedItems[item.type].push(item);
    let newItem = document.createElement('li');
    newItem.setAttribute('class', 'item');
    newItem.setAttribute('id', `${item.id}`);

    let title = document.createElement('span');
    title.setAttribute('class', 'item-title');    
    title.innerText = item.title;

    let content = document.createElement('span');
    content.setAttribute('class', 'item-content');
    content.setAttribute('data-type', item.type);
    content.innerText = item.content;

    let date = document.createElement('span');
    date.setAttribute('class', 'item-date');
    // date.innerText = item.date;

    newItem.appendChild(title);
    newItem.appendChild(content);


  
    let itemBottom = document.createElement('div');
    itemBottom.setAttribute('class', 'item-bottom');
    let delBtn = document.createElement('button')
    delBtn.setAttribute('class', 'item-delete');
    delBtn.setAttribute('value', '삭제');
    let updateBtn = document.createElement('button')
    updateBtn.setAttribute('class', 'item-update');
    updateBtn.setAttribute('value', '수정');

    itemBottom.append(delBtn, updateBtn);
    newItem.appendChild(itemBottom);    

    let itemsList = document.querySelector('.items');
    itemsList?.appendChild(newItem);

  }

  updateItem(item: Item): void {
    // 버튼을 누르면 item이 전달됨
    // 전달된 아이템의 요소를 모달창에 띄움
    // 모달창에서 수정을 완료한후 게시버튼을 누르면
    // 동일한 id의 element가 바뀌어야함


  }

  deleteItem(item: HTMLElement): void{
    
    item.parentElement?.parentElement?.remove();
    // 모달창을 통해 확인하는 작업 만들어야 함

  }  
}

const selectBox = document.querySelector('#selectBox') as HTMLSelectElement;
const post = document.querySelector('.post') as HTMLButtonElement;
const modals = document.querySelector('.modals');
const deleteBtn = document.querySelectorAll('.item-delete');
const items = document.querySelector('.items') as HTMLElement;

const handler = new essayHandler();

items?.addEventListener('click', (e: Event) => {
  if(e.target.className === 'item-delete'){
    handler.deleteItem(e.target);
  } 
})




console.log(selectBox, post)

post?.addEventListener('click', (e) => {  
  console.log(selectBox.selectedOptions[0].label); 
})


handler.addItem({
  type: 'essay',
  id: 1,
  title: '동적으로 받아온 제목',
  content: '동적으로 받아온 내용',
})