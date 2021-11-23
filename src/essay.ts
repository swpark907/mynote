import { BaseComponent } from "./base.js";

export class EssayComponent extends BaseComponent<HTMLLIElement> {
  constructor(title: string, essay: string) {
    super(`<li class="item" data-type="essay" id=''>
    <h2 class="item-title"></h2>
    <span class="item-content"></span>
    <span class="item-date"></span>
    <div class="item-bottom">
    <button class="item-bottom__delete">삭제</button>
    <button class="item-bottom__update">수정</button>
  </li>`)
    const essayTitle = this.element.querySelector('.item-title')! as HTMLSpanElement;
    const essayContent = this.element.querySelector('.item-content')! as HTMLSpanElement;
    const essayDate = this.element.querySelector('.item-date')! as HTMLSpanElement;
    const date = new Date();
    this.element.id = date.getTime().toString();   
    essayTitle.textContent = title;
    essayContent.textContent = essay;
    essayDate.textContent = this.dateTransform(date, '-');
  }
}
