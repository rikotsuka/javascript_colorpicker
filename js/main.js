var outer = document.getElementById('outer');

var colorBack = document.getElementById('colorBack');
colorBack.value = "#000000";
colorBack.addEventListener('change', function () {
    outer.style.background = this.value;
});

var colorFore = document.getElementById('colorFore');
colorFore.value = "#000000";
colorFore.addEventListener('change', function () {
    outer.style.color = this.value;
});