import { BaseComponent } from "./base.js";

export class ImageComponent extends BaseComponent<HTMLLIElement>{
  
  constructor(title: string, url: string){
    super(`<li class='item' data-type='image'>
    <div class="image__holder"><img class='image__thumbnail'></div>
    <h2 class="item-title"></h2>
    <span class="item-date"></span>
    <button class="item-bottom__delete">삭제</button>
    <button class="item-bottom__update">수정</button>
  </li>`)
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
}