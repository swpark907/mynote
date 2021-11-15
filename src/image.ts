export class ImageComponent {
  private element: HTMLElement;
  constructor(title: string, url: string){
    const template = document.createElement('template');
    template.innerHTML = ``;

    this.element = template.content.firstElementChild! as HTMLElement;
    this.element.querySelector('items');
  }
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin'){
    parent.insertAdjacentElement(position, this.element);
  }
}