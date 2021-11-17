export class EssayComponent {
  private element: HTMLElement;
  constructor(title: string, essay: string) {
    const template = document.createElement("template");
    template.innerHTML = `<li class="item" data-type="essay" id=''>
    <span class="item-title"></span>
    <span class="item-content"></span>
    <span class="item-date"></span>
  </li>`;

    this.element = template.content.firstElementChild! as HTMLElement;    
    const essayTitle = this.element.querySelector('.item-title')! as HTMLSpanElement;
    const essayContent = this.element.querySelector('.item-content')! as HTMLSpanElement;
    const essayDate = this.element.querySelector('.item-date')! as HTMLSpanElement;
    const date = new Date();
    this.element.id = date.getTime().toString();   
    essayTitle.textContent = title;
    essayContent.textContent = essay;
    essayDate.textContent = this.dateTransform(date, '-');
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
