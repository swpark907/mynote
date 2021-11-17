export class YoutubeComponent {
  private element: HTMLElement;
  constructor(title: string, url: string){
    const template = document.createElement('template');
    template.innerHTML = `<li class="item" id='' data-type="youtube">
    <span class="item-title"></span>
    <span class="item-content"></span>
    <span class="item-date"></span>
  </li>`;

    this.element = template.content.firstElementChild! as HTMLLIElement;
    const youtubeTitle = this.element.querySelector('.item-title')! as HTMLSpanElement;
    const youtubeContent = this.element.querySelector('.item-content')! as HTMLSpanElement;
    const youtubeDate = this.element.querySelector('.item-date')! as HTMLSpanElement;
    const date = new Date();
    this.element.id = date.getTime().toString();
    youtubeTitle.textContent = title;    
    // url iframe 
    youtubeDate.textContent = this.dateTransform(date, '-');
  }

  private dateTransform= (date: Date, symbol: string): string => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
  
    return `${year}${symbol}${month}${symbol}${day}`;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}