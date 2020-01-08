window.addEventListener("load", function () {

    assignCheckListItemId();
    showCheckListItemDelBtn();
    addCheckListItem();
    /* üũ����Ʈ �����̵� ȿ�� �߰� */
    checkListSlideHandler();
    /* üũ����Ʈ �߰� */
    addCheckList();


});



/* üũ����Ʈ �������� ��ũ�ڽ��� ���ο� id �ο��ϰ� label�� �ش� üũ�ڽ��� �����ϴ� �۾�*/
function assignCheckListItemId() {
    var checkListItemList = document.querySelectorAll(".memo-checklist-item-list");

    for (var i = 0; i < checkListItemList.length; i++) {

        for (var j = 0; j < checkListItemList[i].children.length; j++) {

            if (checkListItemList[i].children[j].children[0].id === "checklist-item-checkbox") {
                checkListItemList[i].children[j].children[0].id = "checklist-item-checkbox" + i + "-" + j;
                checkListItemList[i].children[j].children[1].setAttribute("for", checkListItemList[i].children[j].children[0].id);
            }
        }
    }
}



/* �޸� üũ����Ʈ ������ Ŭ���� ���� ������ ���̱� */
function showCheckListItemDelBtn() {
    var checkListItem = document.querySelectorAll(".memo-checklist-item-list > li input[type=\"text\"]");

    for (let i = 0; i < checkListItem.length; i++) {

        $(checkListItem[i]).hover(function (e) {

            if (e.type === "mouseenter") {
                //console.log("mouseenter");
                $(e.target.nextElementSibling).fadeIn();
            }

            if (e.type === "mouseleave") {
                //console.log("mouseleave");
                $(e.target.nextElementSibling).fadeOut();
            }

            return;
        });
    }
}

/* üũ����Ʈ ������ �߰� */
function addCheckListItem() {
    let checkListItemTemplate = document.querySelector("#checklist-item-template");
    let checkListAddItemBtn = document.querySelectorAll(".checklist-item-add-wrapper");

    for (let i = 0; i < checkListAddItemBtn.length; i++) {
        checkListAddItemBtn[i].onclick = function (e) {
            let clonedCheckListItem = document.importNode(checkListItemTemplate.content, true);
            checkListAddItemBtn[i].parentNode.insertBefore(clonedCheckListItem, checkListAddItemBtn[i]);

            assignCheckListItemId();
            showCheckListItemDelBtn();
        };
    }
}

function addCheckList() {
    let checkListButton = document.querySelector(".memo-detail-checklist-button");

    checkListButton.onclick = function (e) {
        let checkListWrapperTemplate = document.querySelector("#checklist-wrapper-template");
        let clonedCheckListWrapper = document.importNode(checkListWrapperTemplate.content, true);
        let checkListWrapper = document.querySelector(".memo-checklist-wrapper");
        checkListWrapper.append(clonedCheckListWrapper);

        assignCheckListItemId();
        showCheckListItemDelBtn();
        addCheckListItem();
        checkListSlideHandler();
    }
};



/* memo checklist slide effect */
function checkListSlideHandler() {
    $(".memo-checklist-title > div > i.fas:last-child").off("click");

    $(".memo-checklist-title > div > i.fas:last-child")
        .click((e) => {
            //console.log("clicked");
            $(e.target).parent().parent().parent().children().eq(1)
                .slideToggle();

            if (e.target.classList[1] === "fa-chevron-up") {
                $(e.target).parent().parent().parent().children().eq(1)
                    .slideUp();
                e.target.className = "fas fa-chevron-down";
                $(e.target).parent().parent().parent().css("border-bottom", "none");

                return;
            }

            if (e.target.classList[1] === "fa-chevron-down") {
                $(e.target).parent().parent().parent().children().eq(1)
                    .slideDown();
                e.target.className = "fas fa-chevron-up";
                $(e.target).parent().parent().parent().css("border-bottom", "1px solid rgb(139, 139, 139)");

                return;
            }
        });
};