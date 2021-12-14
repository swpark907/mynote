import { BaseComponent, Component } from './base.js';

export interface Composable {
  addChild(child: Component): void;
}

class PageItemComponent extends BaseComponent<HTMLElement> implements Composable{
  constructor(){
    super(`<li class="item" data-type="" id=''>
            <div class="item-body"></div>
            <div class='item-bottom'>
            <button class="item-bottom__delete">삭제</button>
            <button class="item-bottom__update">수정</button>
            </div>
          </li>`)
  }
  addChild(child: Component){
    const container = this.element.querySelector('.item-body')! as HTMLElement;
    child.attachTo(container);
  }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable{  
  constructor(){
    super('<ul></ul>');
  }

  addChild(section: Component){
    const item = new PageItemComponent();
    item.addChild(section);
    item.attachTo(this.element, 'beforeend');
  }
  
}

