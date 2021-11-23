import { BaseComponent } from "./base.js";

export class YoutubeComponent extends BaseComponent<HTMLLIElement>{

  constructor(title: string, url: string){
    super(`<li class="item" id='' data-type="youtube">
    <h2 class="item-title"></h2>
    <iframe class="item-media" width='280px' height='210px'></iframe>
    <span class="item-date"></span>
    <button class="item-bottom__delete">삭제</button>
    <button class="item-bottom__update">수정</button>
  </li>`)

    const youtubeTitle = this.element.querySelector('.item-title')! as HTMLSpanElement;
    const youtubeContent = this.element.querySelector('.item-media')! as HTMLIFrameElement;
    const youtubeDate = this.element.querySelector('.item-date')! as HTMLSpanElement;
    const date = new Date();
    this.element.id = date.getTime().toString();
    youtubeTitle.textContent = title;    
    youtubeContent.src = url;
    youtubeDate.textContent = this.dateTransform(date, '-');
  }
}