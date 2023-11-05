var jsonAdatok;
var xhr = new XMLHttpRequest();
xhr.open("GET", "listhonnan.json", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText)[0];
        jsonAdatok = xhr.responseText;
        document.getElementById("honnan").innerHTML = `<li onclick="hozzaad(this, 'honnanvalaszt')">${data.honnan}</li>`;
        document.getElementById("hova").innerHTML = `<li onclick="hozzaad(this, 'hovavalaszt')">${data.hova}</li>`;

    }
};
xhr.send();

function hozzaad(item, value) {
    document.getElementById(value).innerHTML = item.textContent;

}
function keres() {
    var honnan = document.getElementById("honnanvalaszt").textContent;
    var hova = document.getElementById("hovavalaszt").textContent;
    var adatok = JSON.parse(jsonAdatok);
    if (adatok.length == 0) {
        return alert("Nem található adat!")
    }
    adatok.forEach(i => {
        if (i.honnan == honnan && i.hova == hova) {
            document.body.innerHTML += i.indulas + "------------" + i.erkezes;
        }
    });



}