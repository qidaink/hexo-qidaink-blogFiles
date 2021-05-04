!function(){
    var clipboard = new ClipboardJS('.fa-copy');
    $(".fa-copy").click(function(){
        clipboard.on('success', function(){
            swal({   
                title: "文章链接复制",   
                text: '复制成功，转载记得要加上出处哦(ฅ>ω<*ฅ)',
                icon: "success",
                button: true
            });
        });
    }); 
}();