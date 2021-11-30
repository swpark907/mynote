import { BaseComponent } from './base.js';

const urlMetadata = require('url-metadata')

export class UrlComponent extends BaseComponent<HTMLElement>{
  constructor(title: string, url: string){
    super(`<li class='item' data-type='site-link'>
  <div class="item-title">asdf</div>
  <div class="item__site-link">
    <div class="item__site-link__left">
      <div class="item__site-link__title"></div>
      <div class="item__site-link__desc"></div>
      <div class="item__site-link__url"></div>
    </div>                
    <img src='#' class="item__site-link__thumbnail"></img>
  </div>
</li>`)

    const itemTitle = this.element.querySelector('.item-title')! as HTMLDivElement;
    const siteTitle = this.element.querySelector('.item__site-link__title')! as HTMLDivElement;
    const siteDesc = this.element.querySelector('.item__site-link__desc')! as HTMLDivElement;
    const siteUrl = this.element.querySelector('.item__site-link__url')! as HTMLDivElement
    itemTitle.textContent = title;
    siteUrl.textContent = url;
    
    this.getMetadata(url);
  }

  getMetadata(url: string){
    
    
    urlMetadata('http://bit.ly/2ePIrDy').then(
    function (metadata) { // success handler
      console.log(metadata)
    },
    function (error) { // failure handler
      console.log(error)
    })
    }  
}