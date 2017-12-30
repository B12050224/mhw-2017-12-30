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


var str = document.getElementsByClassName('survey-introduct')[0].children[1];
wordlimit( str ,348);
var num = 0;
var mrecommend = new M1( $('.m-modal') , 0 );
$('.diploma-img-li').on("click", function() {
    num = $(this).index();
    $(".m-modal-dialog>img").attr('src',$(this).find('img').eq(0).attr("src"));    
    mrecommend.show();
    mrecommend.addClickListen();
});