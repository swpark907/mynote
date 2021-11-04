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
  date: Date;
}

interface ItemHandler  {
  addItem(item: Item): void,
  updateItem(item: Item): void,
  deleteItem(): void,  
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
  }

  updateItem(): void {

  }

  deleteItem(): void{

  }  
}

const selectBox = document.querySelector('#selectBox') as HTMLSelectElement;
const post = document.querySelector('.post') as HTMLButtonElement;
const modals = document.querySelector('.modals');

console.log(selectBox, post)

post?.addEventListener('click', (e) => {  
  console.log(selectBox.selectedOptions[0].label); 
})