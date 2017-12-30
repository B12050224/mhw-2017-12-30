 $('.news-tabs-strom').click(function(){
     $(this).addClass("select").siblings("div").removeClass("select");
     $(".news-solve-company").eq($(this).index()).addClass("active1").siblings("div").removeClass("active1");
 });
 //自定义一个多行文本超出字数显示省略号的函数
function wordlimit(cname,wordlength)  {
    var newstr = cname.innerHTML;
    if(newstr.length > wordlength) {
        newstr = newstr.substr(0,wordlength)+'...';
        cname.innerHTML = newstr;
    } 
}
var span1 = document.getElementsByClassName('news-solve-li'); 
for( var i = 0;i<span1.length;i++){
    wordlimit(span1[i].children[0],25);
}
$('.fenye-main-li').click(function () {
    $(this).addClass("active3").siblings("li").removeClass("active3");
});
