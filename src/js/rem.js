var html = document.documentElement;
window.rem = html.getBoundingClientRect().width / 75 ; // 获取全局的宽度 并计算 25rem 为一屏 宽
html.style.fontSize = window.rem + 'px'; // 定义根元素的大小

function wordlimit(cname,wordlength)  {
    if ( !cname ) {
        return 0;
    }
    var newstr = cname.innerHTML;
    if(newstr.length > wordlength) {
        newstr = newstr.substr(0,wordlength)+'...';
        cname.innerHTML = newstr;
    } else {
        newstr = newstr;
    }
}