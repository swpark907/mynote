import essayHandler from "./handler.js";
var selectBox = document.querySelector('#selectBox');
var openPost = document.querySelector('.open-post');
var modals = document.querySelector('.modals');
var modal = document.querySelectorAll('.modal');
var deleteBtn = document.querySelectorAll('.item-delete');
var items = document.querySelector('.items');
var testHandler = new essayHandler();
items === null || items === void 0 ? void 0 : items.addEventListener('click', function (e) {
    if (e.target.className === 'item-delete') {
        testHandler.deleteItem(e.target);
    }
});
openPost === null || openPost === void 0 ? void 0 : openPost.addEventListener('click', function (e) {
    console.log(selectBox.selectedOptions[0].label, 'asdf');
    var contentType = selectBox.selectedOptions[0].label;
    modal.forEach(function (modal) {
        if (contentType === modal.id) {
            modal.classList.add('active');
        }
        else {
            modal.classList.remove('active');
        }
    });
    modals.style.display = 'block';
});
modals.addEventListener('click', function (e) {
    if (e.target.className === 'modals' || e.target.className === 'cancel') {
        e.preventDefault();
        modals.style.display = 'none';
    }
    else if (e.target.className === 'post') {
        e.preventDefault();
        modals.style.display = 'none';
        // 게시 버튼을 누르면 input의 내용이 html에 적히는 기능
    }
});
testHandler.addItem({
    type: 'essay',
    id: 1,
    title: '동적으로 받아온 제목',
    content: '동적으로 받아온 내용',
});
