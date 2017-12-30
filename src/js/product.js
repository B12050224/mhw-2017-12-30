var flag0 = true;
var mark0 = true;
$('.integrate-btn').eq(0).click(function(){
$('.integrate-btn').eq(1).removeClass("select1");
$('.integrate-btn').eq(1).find('span').eq(1).removeClass("active2");
$('.integrate-btn').eq(1).find('span').eq(1).html('↓');
$('.integrate-btn').eq(1).find('span').eq(1).css("color","red");
    if( flag0 ) {
    $(this).addClass("select1");
    $(this).find('span').eq(1).addClass("active2");
    $(this).find('span').eq(1).html('↑'); 
    $(this).find('span').eq(1).css('color',"#ffffff");
    } else {
    $(this).find('span').eq(1).removeClass("active2");
    $(this).find('span').eq(1).html('↓'); 
    $(this).find('span').eq(1).css('color',"#ffffff");
    // $(".integrate-btn").eq(1).attr("disabled", false); 
    }
    flag0 = !flag0;
    mark0 = true;
});

$('.integrate-btn').eq(1).click(function(){
$('.integrate-btn').eq(0).removeClass("select1");
$('.integrate-btn').eq(0).find('span').eq(1).removeClass("active2");
$('.integrate-btn').eq(0).find('span').eq(1).html('↓'); 
$('.integrate-btn').eq(0).find('span').eq(1).css("color","red"); 
    if( mark0 ) {
    $(this).addClass("select1"); 
    $(this).find('span').eq(1).addClass("active2");
    $(this).find('span').eq(1).html('↑'); 
    $(this).find('span').eq(1).css('color',"#ffffff");
    } else {
    $(this).find('span').eq(1).removeClass("active2");
    $(this).find('span').eq(1).html('↓'); 
    $(this).find('span').eq(1).css('color',"#ffffff");
    }
    mark0 = !mark0;
    flag0 = true;
});
var num = 0;
$('.products-bottom>li').on('click',function(){
    num = $(this).index(); 
    var str = $(this).find('p').eq(0).html().trim(); //去除空格，拿到字符串
    // console.log(str.indexOf('('));
    var end = str.indexOf('('); //拿到（第一次出现的位置
    str = str.substr(0,end);    //截取从字符串开始到（第一次出现的位置的字符串
    // console.log(str);
    var number = $(this).find('span').eq(0).html();
    $('.products-top-fl').find('span').eq(1).html(('>'+str));
    $('.products-top-fr').css('display','block');
    $('.products-bottom-li').css('display','none');
    $('.products-bottom-ul').eq(num).css('display','block');
    // $('.products-top-fl').eq(1).find('span').eq(0).html(number);
});

$('.fenye-main-li').click(function () {
$(this).addClass("active3").siblings("li").removeClass("active3");
});
