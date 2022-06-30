var ultimoScroll = 0;
var cero = 0;
$(document).ready(function(){
    $(window).on(`scroll`, function(){
        st = $(window).scrollTop();
        if(st > ultimoScroll){
            $(`nav.navBar`).addClass(`hide`);
        } else {
            $(`nav.navBar`).removeClass(`hide`);
        }
        ultimoScroll = st;
        cero = $(window).scrollTop()
    });
});