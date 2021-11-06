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
        var newItem = document.createElement('li');
        newItem.setAttribute('class', 'item');
        newItem.setAttribute('id', "" + item.id);
        var title = document.createElement('span');
        title.setAttribute('class', 'item-title');
        title.innerText = item.title;
        var content = document.createElement('span');
        content.setAttribute('class', 'item-content');
        content.setAttribute('data-type', item.type);
        content.innerText = item.content;
        var date = document.createElement('span');
        date.setAttribute('class', 'item-date');
        // date.innerText = item.date;
        newItem.appendChild(title);
        newItem.appendChild(content);
        var itemBottom = document.createElement('div');
        itemBottom.setAttribute('class', 'item-bottom');
        var delBtn = document.createElement('button');
        delBtn.setAttribute('class', 'item-delete');
        delBtn.setAttribute('value', '삭제');
        var updateBtn = document.createElement('button');
        updateBtn.setAttribute('class', 'item-update');
        updateBtn.setAttribute('value', '수정');
        itemBottom.append(delBtn, updateBtn);
        newItem.appendChild(itemBottom);
        var itemsList = document.querySelector('.items');
        itemsList === null || itemsList === void 0 ? void 0 : itemsList.appendChild(newItem);
    };
    essayHandler.prototype.updateItem = function (item) {
        // 버튼을 누르면 item이 전달됨
        // 전달된 아이템의 요소를 모달창에 띄움
        // 모달창에서 수정을 완료한후 게시버튼을 누르면
        // 동일한 id의 element가 바뀌어야함
    };
    essayHandler.prototype.deleteItem = function (item) {
        var _a, _b;
        (_b = (_a = item.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
        // 모달창을 통해 확인하는 작업 만들어야 함
    };
    return essayHandler;
}());
var selectBox = document.querySelector('#selectBox');
var post = document.querySelector('.post');
var modals = document.querySelector('.modals');
var deleteBtn = document.querySelectorAll('.item-delete');
var items = document.querySelector('.items');
var handler = new essayHandler();
items === null || items === void 0 ? void 0 : items.addEventListener('click', function (e) {
    if (e.target.className === 'item-delete') {
        handler.deleteItem(e.target);
    }
});
console.log(selectBox, post);
post === null || post === void 0 ? void 0 : post.addEventListener('click', function (e) {
    console.log(selectBox.selectedOptions[0].label);
});
handler.addItem({
    type: 'essay',
    id: 1,
    title: '동적으로 받아온 제목',
    content: '동적으로 받아온 내용',
});
