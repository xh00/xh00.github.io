function fadeOutPageGithub() {
    $("body").fadeOut(500);
    setTimeout(function() {
        location.assign("https://github.com/xh00/");
    }, 500);
}
function fadeOutPageUpdateTxt() {
    $("body").fadeOut(500);
    setTimeout(function() {
        location.assign("update.txt");
    }, 500);
}
var txtLoad = 'https://xh00.tk/update.txt';
$(document).ready(function() {
    $.get(txtLoad, function (data) {
        document.getElementById("txtFile").innerHTML = data;
    });
});
