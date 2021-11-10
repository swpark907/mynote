import essayHandler from "./handler.js";
var selectBox = document.querySelector("#selectBox");
var openPost = document.querySelector(".open-post");
var modals = document.querySelector(".modals");
var modal = document.querySelector(".modal");
var modalTitle = document.querySelector(".modal_title");
var modalErrorMsg = document.querySelector(".modal_errorMsg");
var deleteBtn = document.querySelectorAll(".item-delete");
var items = document.querySelector(".items");
var inputTitle = document.querySelector(".input-title");
var inputDesc = document.querySelector(".input-desc");
var testHandler = new essayHandler();
var currentType;
var dateTransform = function (date, symbol) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return "" + year + symbol + month + symbol + day;
};
items === null || items === void 0 ? void 0 : items.addEventListener("click", function (e) {
    var target = e.target;
    if (target.className === "item-delete") {
        testHandler.deleteItem(target);
    }
});
openPost === null || openPost === void 0 ? void 0 : openPost.addEventListener("click", function (e) {
    console.log(selectBox.selectedOptions[0].label, "asdf");
    var contentType = selectBox.selectedOptions[0].value;
    console.log();
    if (contentType === "default") {
        return;
    }
    modalTitle.innerText = selectBox.selectedOptions[0].text;
    modal.classList.add("active");
    modals.style.display = "block";
    // 타입별 form 양식이 달라져야함
    currentType = contentType;
});
modals.addEventListener("click", function (e) {
    var target = e.target;
    if (target.className === "modals" || target.className === "cancel") {
        e.preventDefault();
        modals.style.display = "none";
        inputTitle.value = "";
        inputDesc.value = "";
        modalErrorMsg.style.display = "none";
    }
    else if (target.className === "post") {
        e.preventDefault();
        if (inputTitle.value == "" || inputDesc.value == "") {
            modalErrorMsg.style.display = "block";
        }
        else {
            modals.style.display = "none";
            testHandler.addItem({
                type: currentType,
                id: new Date().getTime(),
                title: inputTitle.value,
                content: inputDesc.value,
                date: dateTransform(new Date(), "-"),
            });
            modalErrorMsg.style.display = "none";
        }
        inputTitle.value = "";
        inputDesc.value = "";
    }
});
// testHandler.addItem({
//   type: 'essay',
//   id: 1,
//   title: '동적으로 받아온 제목',
//   content: '동적으로 받아온 내용',
//   date: dateTransform(new Date(), '-')
// })
