var flag = true;
$(".goods-record div").click(function () {
    $(this).addClass("selected").siblings("div").removeClass("selected");
    $(".toptenz1").eq($(this).index()).addClass("active").siblings("div").removeClass("active");
});

$('.collect1-store').eq(0).click(function(e){
    if( flag ) {
        $('.collect1-store').eq(0).find('i').eq(0).removeClass("glyphicon-collect-in").addClass("glyphicon-collect");
        $('.collect1-store').eq(0).find('p').eq(0).html('已收藏');
    } else {
        $('.collect1-store').eq(0).find('i').eq(0).removeClass("glyphicon-collect").addClass("glyphicon-collect-in");
        $('.collect1-store').eq(0).find('p').eq(0).html('收藏公司');
    }
    flag = !flag;
    e.stopPropagation();    //  阻止事件冒泡
});
//点击显示模态框
var m1 = new M1( $('.m-modal1') , 1 );
$('.collect1-store').eq(1).click(function(){;
    m1.show(); 
    m1.addClickListen(); 
});
//对留言弹出框判断
var mark = false;
var mark1 = true;
var mark2 = true;
var mark3 = true;

$("textarea").blur(function(){
    var text = $('textarea').val().length;
    $('.modal-main-content').children('p').eq(0).find('span').eq(0).html(text);  
}); 

$('.modal-main-content-go').click(function(){   
    var len = document.getElementsByName('liuyan').length;
    for (i = 0; i < len ; i++) {
    if (document.getElementsByName('liuyan')[i].checked == true) {
        mark = true;
    } 
} 
    if($('.modal-main-content-top').eq(0).find('input').eq(0).val() != ''){
        mark1 = true;    
    } else {
        mark1 = false;    
    }
    var phone = document.getElementById('phone').value;
    if(!(/^1[34578]\d{9}$/.test(phone))){
        mark2 = false;
    } else {
        mark2 = true;
    }
    var text = $('textarea').val();  
    if(text.length>200 || text.length ==0 ){
        mark3 = false;  
    } else {
        mark3 = true;
    }
    if (!mark){
        alert('请您选择一个留言主题');
        return 0;
    } 
    if(!mark1) {
        alert('请您输入具体称呼！');
        return 0;
    }    
    if(!mark2) {
        alert('请您输入正确的手机号！');
        return 0;
    }
    if(!mark3) {
        alert('您未输入投诉内容或者文字超过200');
        return 0;
    }
    m1.hide(); 
});
$("input[name='items']:checked").val();
//左侧四级下拉菜单点击事件
$('.company-caidan').on('click', '.glyphicon-add', function () { 
    if($(this).next().next().length!=0) {
        $(this).addClass('glyphicon-reduce').removeClass('glyphicon-add');
        $(this).next().next().show();
    }   
})

$('.company-caidan').on('click', '.glyphicon-reduce', function () { 
    if($(this).next().next().length!=0) {
        $(this).addClass('glyphicon-add').removeClass('glyphicon-reduce');
        $(this).next().next().hide();
    }
});


