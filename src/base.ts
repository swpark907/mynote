export interface Component {
  attachTo(parent: HTMLElement, position: InsertPosition): void;
}

export class BaseComponent<T extends HTMLElement> implements Component{
  protected readonly element: T;
  constructor(htmlString: string){
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin'){
    parent.insertAdjacentElement(position, this.element);
  }

  deleteItem(item: HTMLElement){
    item.parentElement?.parentElement?.remove();
  }

  protected dateTransform= (date: Date, symbol: string): string => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
  
    return `${year}${symbol}${month}${symbol}${day}`;
  }
}