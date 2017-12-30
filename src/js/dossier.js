$('.promise-case img').mouseover(function(){
    $(".promise-tishi1").css('display','block'); 
});
$('.promise-case img').mouseout(function(){
    $(".promise-tishi1").css('display','none'); 
});
$('.promise-chakan-fu').mouseover(function(){
    $(".promise-tishi2").css('display','block'); 
});
$('.promise-chakan-fu').mouseout(function(){
    $(".promise-tishi2").css('display','none'); 
});
var infor = document.getElementsByClassName('infor-shao-p')[0];
wordlimit( infor,296);
//点击显示查看认证详情模态框
var m1 = new M1( $('.m-modal') , 0 );
$('.accred-last').on("click", function() {
    m1.show();
    m1.addClickListen();
});
//点击显示
//判断是否认证查看诚信档案模态框
var mren = new M1( $('.m-modal2') , 0 );
$('.promise-chakan-top').on('click', function(){
    mren.show();
    mren.addClickListen();
});
var flag = true;
var mark = $('.accred').find('li').eq(0).find('span').eq(2).html();
if( mark === '[已认证]') {
    flag = true;
    // $.cookie('flag', true, {expires: 1, path: '/', secure: false});
    $('.promise-level').css("background-color",'#ffffff');
    $('.btn1').hide(1);
} else {
    flag = false;
    // $.cookie('flag', false, {expires: 1, path: '/', secure: false});
    $('.promise-level').css("background-color",'#eeeeee'); 
    $('.m-middle-left').find('li').find('p').html('暂无');
    $('.m-middle-right').find('li').find('p').html('暂无');
    $('.promise-ji-img').find('img').eq(0).attr('src','../../img/biao.png');
    $('.m-modal-dialog').find('img').eq(0).attr('src','')
}


