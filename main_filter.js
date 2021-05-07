function containsObject(obj, list) {
    var keys1 = Object.keys(obj);

    for (let i = 0; i < list.length; i++) {
        var found = true;
        for (let key of keys1) {
            if (obj[key] != list[i][key]) {
                found = false;
                break;
            };
        };
        if (found) {
            return true;
        };
    };
    return false;
};

var vagter = document.querySelectorAll("tr[id^=vagtrow_booket_]");
var entries = [];
var hideExtra = false;
Array.from(
    vagter.forEach(function (y) {
        if (y.id.indexOf("extra") > -1) {
            if (hideExtra) {
                y.style.display = "none";
                hideExtra = false;
            };
            return;
        };
        var info = {
            "dato": y.children[0].textContent,
            "tid": y.children[1].textContent,
            "timer": y.children[2].textContent,
            "uddanelse": y.children[3].textContent,
            "kunde": y.children[4].textContent
        };
        // add" || info["kunde"].includes("location") != true " for
        // whatever place you want to remove from the list
        if (containsObject(info, entries) || info["kunde"].includes("Odense") != true) {
            y.style.display = "none";
            hideExtra = true;
        } else {
            entries.push(info);
        };
    })
);
