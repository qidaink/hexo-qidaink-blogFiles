!function(){
    fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
        const hitokoto = document.getElementById('hitokoto_text')
        const information = document.getElementById('hitokoto_information')
        hitokoto.innerText = data.hitokoto
        if (data.from_who != null)
            information.innerText = data.from_who + '《' + data.from + '》'
        else
            information.innerText = '《' + data.from + '》'
        })
    .catch(console.error)
    console.log("一言加载成功(ฅ>ω<*ฅ)")
}();