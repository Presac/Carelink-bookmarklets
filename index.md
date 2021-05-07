## Velkommen til siden

På denne side vil der være et par forskellige bookmarlets til at gøre livet lidt nemmere når man skal finde vagter.

### Hvordan det virker

Træk det bookmarklet du vil have op på din bogmærkelinje. Når du så er inde på https://carelink.temponizer.dk/index.php?page=vikar_vagter kan du klikke på bogmærket for at filtrere listen.

### Bookmarklets

[Carelink duplet fjerner](javascript: (function () {function containsObject(obj, list) {var keys1 = Object.keys(obj);for (let i = 0; i < list.length; i++) {var found = true;for (let key of keys1) {if (obj[key] != list[i][key]) {found = false;break;};};if (found) {return true;};};return false;};var vagter = document.querySelectorAll("tr[id^=vagtrow_booket_]");var entries = [];var hideExtra = false;Array.from(vagter.forEach(function (y) {if (y.id.indexOf("extra") > -1) {if (hideExtra) {y.style.display = "none";hideExtra = false;};return;};var info = {"dato":  y.children[0].textContent,"tid":  y.children[1].textContent,"timer":  y.children[2].textContent,"uddanelse":  y.children[3].textContent,"kunde":  y.children[4].textContent};if (containsObject(info, entries)) {y.style.display = "none";hideExtra = true;} else {entries.push(info);};}));})();)


[Carelink Odense duplet fjerner](javascript: (function () {function containsObject(obj, list) {var keys1 = Object.keys(obj);for (let i = 0; i < list.length; i++) {var found = true;for (let key of keys1) {if (obj[key] != list[i][key]) {found = false;break;};};if (found) {return true;};};return false;};var vagter = document.querySelectorAll("tr[id^=vagtrow_booket_]");var entries = [];var hideExtra = false;Array.from(vagter.forEach(function (y) {if (y.id.indexOf("extra") > -1) {if (hideExtra) {y.style.display = "none";hideExtra = false;};return;};var info = {"dato":  y.children[0].textContent,"tid":  y.children[1].textContent,"timer":  y.children[2].textContent,"uddanelse":  y.children[3].textContent,"kunde":  y.children[4].textContent};if (containsObject(info, entries) || info["kunde"].includes("Odense") != true) {y.style.display = "none";hideExtra = true;} else {entries.push(info);};}));})();)
