var num = 0;
var mark = 1;
var mphoto = new M1( $('.m-modal') , 0 );
$('.insertright-img-ce').click(function() {
    mark = 1;
    num = $(this).index()+1;    
    getPhoto (num); 
    $('.m-modal-img>img').attr('src','../../img/loading.gif');
    $('.m-modal-num').find('span').eq(0).html('');
    $('.m-modal-num').find('span').eq(1).html('');
    mphoto.show();
    mphoto.addClickListen();    
});
function getPhoto (photoId) {
    $.ajax({
        url:'http://shop.mhw.com/getShopPhotoList?shop_id=3', 
        data:{
            'album_id':photoId
        },
        success:function(data){
            console.log(data);
            if( data.code == 1) {
                $('.m-modal-img>img').attr('src',data.data[0].url);
                $('.m-modal-num').find('span').eq(0).html(mark);
                $('.m-modal-num').find('span').eq(1).html(data.data.length);
                // //点击左侧m-modal
                $('.modal-main-left').unbind('click').click(function(){
                    if ( mark > 1) {
                        mark--;    
                        $('.m-modal-img>img').attr('src',data.data[mark-1].url);
                        $('.m-modal-num').find('span').eq(0).html(mark);
                     } else {
                         return 0;
                     }    
                });
                
                // //点击右侧
                $('.modal-main-right').unbind('click').click(function(){
                    if ( mark > 0 && (mark < data.data.length) ) {
                        mark++;    
                        $('.m-modal-img>img').attr('src',data.data[mark-1].url);
                        $('.m-modal-num').find('span').eq(0).html(mark);
                     } else {
                         return 0;
                     } 
                });

            }
        }
    })    
}


