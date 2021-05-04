!function(){
    jinrishici.load(function(result) {
      poem.innerHTML = result.data.content
      info.innerHTML = '【' + result.data.origin.dynasty + '】' + result.data.origin.author + '《' + result.data.origin.title + '》'
      document.getElementById("poem");
      document.getElementById("info");
      console.log("今日诗词加载成功(ฅ>ω<*ฅ)");
    });
  }();