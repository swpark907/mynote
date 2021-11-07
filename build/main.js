"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var handler_1 = __importDefault(require("./handler"));
var selectBox = document.querySelector('#selectBox');
var post = document.querySelector('.post');
var modals = document.querySelector('.modals');
var deleteBtn = document.querySelectorAll('.item-delete');
var items = document.querySelector('.items');
var testHandler = new handler_1.default();
items === null || items === void 0 ? void 0 : items.addEventListener('click', function (e) {
    if (e.target.className === 'item-delete') {
        testHandler.deleteItem(e.target);
    }
});
post === null || post === void 0 ? void 0 : post.addEventListener('click', function (e) {
    console.log(selectBox.selectedOptions[0].label);
});
testHandler.addItem({
    type: 'essay',
    id: 1,
    title: '동적으로 받아온 제목',
    content: '동적으로 받아온 내용',
});
