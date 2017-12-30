// $('.erwei').mouseover(function(){
//     $(".upper-xian").css('display','block'); 
// });
// $('.erwei').mouseout(function(){
//     $(".upper-xian").css('display','none'); 
// });

// var mark = $.cookie('flag')?$.cookie('flag'):'123';
// console.log(mark);
// if(mark) {
//     $('.attes-a').eq(0).find('img').eq(0).attr('src','../../img/has2.png');
//     $('.attes-a').eq(1).find('img').eq(0).attr('src','../../img/has3.png');
//     $('.attes-a').eq(2).find('img').eq(0).attr('src','../../img/has1.png');
// } else {
//     $('.attes-a').eq(0).find('img').eq(0).attr('src','../../img/none2.png');
//     $('.attes-a').eq(1).find('img').eq(0).attr('src','../../img/none3.png');
//     $('.attes-a').eq(2).find('img').eq(0).attr('src','../../img/none1.png');
// }
$('.upper-top li a').mouseover(function(){
    $(this).css({color:'#cb1b1d'});
    $(this).find('i').eq(0).removeClass("glyphicon-down").addClass('glyphicon-up');
});
$('.upper-top li a').mouseout(function(){
    $(this).css({color:"#333333"});
    $(this).find('i').eq(0).removeClass("glyphicon-up").addClass('glyphicon-down');
});