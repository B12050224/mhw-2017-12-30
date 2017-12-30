function M1 ( $dom , flag ) {   //构造函数创建对象
    if ( !$dom ) { //$dom是必传参数，如果没有就不行下执行
        console.log('在modal.js中您没有传来dom元素，无法执行下面的程序');
        return false;
    }
    this.show=function(){
        $dom.css('display','block');
        if ( flag === 0) {
            $dom.children('div:first-child').css('display','block').css('marginTop',"15%");
        } else {
            $dom.children('div:first-child').css('display','block').css('marginTop',"1%");
        }        
    };
    this.hide=function() {
        $dom.css('display','none');
        $dom.children('div:first-child').css('display','none').css('marginTop',"-100%");
    };
    this.addClickListen=function() {
        var that = this;
        $dom.find('*').on("click", function(event) {
            event.stopPropagation(); //阻止事件冒泡
        });
        // $dom.children('div:first-child').on("click", function(event) {
        //     that.hide();
        // });
        $dom.find('.m-close').on('click', function(e) {
            that.hide();
        })
    }
}