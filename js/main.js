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
$(function() {
    // textボックスの変更時
    $('input[name=name1]').change(function() {
      // valueを取得
      let val1 = $(this).val();
      // p要素に出力（id:name1）
      $('#name1').text(val1);
    });
  
    // keyup時
    $('input[name=name2]').change(function() {
      // valueを取得
      let val2 = $(this).val();
      // p要素に出力（id:name2）
      $('#name2').text(val2);
    });
  });
  