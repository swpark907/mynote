export class ImageComponent {
  private element: HTMLElement;
  constructor(title: string, url: string){
    const template = document.createElement('template');
    template.innerHTML = `<li class='item' data-type='image'>
    <div class="image__holder"><img class='image__thumbnail'></div>
    <span class="item-title"></span>
    <span class="item-date"></span>
  </li>`;

    this.element = template.content.firstElementChild! as HTMLElement;
    const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
    const imageTitle = this.element.querySelector('.item-title')! as HTMLSpanElement;
    const imageDate = this.element.querySelector('.item-date')! as HTMLSpanElement;
    const date = new Date();
    this.element.id = date.getTime().toString();
    imageElement.src = url;
    imageElement.alt = title;
    imageTitle.textContent = title;
    imageDate.textContent = this.dateTransform(date, '-');
  }

  private dateTransform= (date: Date, symbol: string): string => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
  
    return `${year}${symbol}${month}${symbol}${day}`;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin'){
    parent.insertAdjacentElement(position, this.element);
  }
}