
    function save() {
      // テキストエリアより文字列を取得
      const txt = document.getElementById('colorBack').value;
      const txt2 = document.getElementById('colorFore').value;
      if (!txt) { return; }

      // 文字列をBlob化
      const blob = new Blob([txt, txt2], { type: 'text/plain' });

      // ダウンロード用のaタグ生成
      const a = document.createElement('a');
      a.href =  URL.createObjectURL(blob);
      a.download = 'sample.txt';
      a.click();
    };