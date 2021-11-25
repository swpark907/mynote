
console.log('js loaded')

type Item = {
  type: 'essay' | 'youtube' | 'siteLink' | 'image' | 'default';
  id: number;
  title: string;
  content: string;
  date?: Date | string;
}

interface ItemHandler  {
  addItem(item: Item): void,
  updateItem(item: Item): void,
  deleteItem(item: HTMLElement): void,  
}

// const addedItems = {
//   essay:[],
//   youtube:[],
//   siteLink: [],
//   music: [],
// };

export default class essayHandler implements ItemHandler {
  constructor(){
    
  }

  addItem(item: Item): void {
    // addedItems[item.type].push(item);
    let newItem = document.createElement('li');
    newItem.setAttribute('class', 'item');
    newItem.setAttribute('id', `${item.id}`);
    newItem.setAttribute('data-type', item.type);

    let title = document.createElement('span');
    title.setAttribute('class', 'item-title');    
    title.innerText = item.title;

    let content = document.createElement('span');
    content.setAttribute('class', 'item-content');    
    content.innerText = item.content;

    let date = document.createElement('span');
    date.setAttribute('class', 'item-date');
    date.innerHTML = `${item.date}`;

    newItem.appendChild(title);
    newItem.appendChild(content);
    newItem.appendChild(date)


  
    let itemBottom = document.createElement('div');
    itemBottom.setAttribute('class', 'item-bottom');
    let delBtn = document.createElement('button')
    delBtn.setAttribute('class', 'item-delete');
    delBtn.textContent = '삭제'
    let updateBtn = document.createElement('button')
    updateBtn.setAttribute('class', 'item-update');
    updateBtn.textContent = '수정'

    itemBottom.append(delBtn, updateBtn);
    newItem.appendChild(itemBottom);    

    let itemsList = document.querySelector('.items');
    itemsList?.appendChild(newItem);

  }

  updateItem(): void {
    
    

  }

  deleteItem(item: HTMLElement): void{
    
    item.parentElement?.parentElement?.remove();
    // 모달창을 통해 확인하는 작업 만들어야 함

  }  
}



