"use strict";
// 글 생성
// 버튼을 누르면 모달창 display --> block
// 취소버튼이나 바깥부분을 누르면 display --> none
// 글 내용을 입력하고 게시 버튼을 누르면 
// li item을 생성하고 
// title, content를 내용에 맞게 생성 후 display --> none;
// item 생성하는 class를 만든 후
// 타입에 맞게 method 추가
console.log('js loaded');
var addedItems = {
    essay: [],
    youtube: [],
    siteLink: [],
    music: [],
};
var essayHandler = /** @class */ (function () {
    function essayHandler() {
    }
    essayHandler.prototype.addItem = function (item) {
        // addedItems[item.type].push(item);
    };
    essayHandler.prototype.updateItem = function () {
    };
    essayHandler.prototype.deleteItem = function () {
    };
    return essayHandler;
}());
var selectBox = document.querySelector('#selectBox');
var post = document.querySelector('.post');
var modals = document.querySelector('.modals');
console.log(selectBox, post);
post === null || post === void 0 ? void 0 : post.addEventListener('click', function (e) {
    console.log(selectBox.selectedOptions[0].label);
});
