import essayHandler from "./handler.js";
var selectBox = document.querySelector('#selectBox');
var openPost = document.querySelector('.open-post');
var modals = document.querySelector('.modals');
var modal = document.querySelectorAll('.modal');
var deleteBtn = document.querySelectorAll('.item-delete');
var items = document.querySelector('.items');
var testHandler = new essayHandler();
var currentType;
items === null || items === void 0 ? void 0 : items.addEventListener('click', function (e) {
    if (e.target.className === 'item-delete') {
        testHandler.deleteItem(e.target);
    }
});
openPost === null || openPost === void 0 ? void 0 : openPost.addEventListener('click', function (e) {
    console.log(selectBox.selectedOptions[0].label, 'asdf');
    var contentType = selectBox.selectedOptions[0].value;
    modal.forEach(function (modal) {
        if (contentType === '종류선택') {
            return;
        }
        else if (contentType === modal.id) {
            modal.classList.add('active');
            modals.style.display = 'block';
            currentType = contentType;
        }
        else {
            modal.classList.remove('active');
            modals.style.display = 'block';
            currentType = contentType;
        }
    });
});
modals.addEventListener('click', function (e) {
    if (e.target.className === 'modals' || e.target.className === 'cancel') {
        e.preventDefault();
        modals.style.display = 'none';
    }
    else if (e.target.className === 'post') {
        e.preventDefault();
        modals.style.display = 'none';
        testHandler.addItem({
            type: currentType,
            id: new Date().getTime(),
            title: '모달을 통해 받아온 제목',
            content: '모달을 통해 받아온 내용',
            date: new Date(),
        });
    }
});
// console.log(new Date().getTime());
testHandler.addItem({
    type: 'essay',
    id: 1,
    title: '동적으로 받아온 제목',
    content: '동적으로 받아온 내용',
});
