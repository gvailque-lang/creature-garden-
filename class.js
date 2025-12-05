$("#add-creature").click(function () {

    let crName = $("#crName").val();
    let crColor = $("#crColor").val();
    let crEyesNum = $("#crEyesNum").val();

    // stop empty names
    if (crName === "" || crName.length > 12) {
        return;
    }

    // generate eyes
    let eyesHTML = "";
    for (let i = 0; i < crEyesNum; i++) {
        eyesHTML += `<div class="eye"></div>`;
    }

    // add the creature to list
    $("#creature-list").append(`
        <div class="creature">
            <div class="creature-body" style="background:${crColor}">
                ${eyesHTML}
            </div>
            <div class="creature-info">${crName}</div>
        </div>
    `);

    // reset name field
    $("#crName").val("");
});
