$(document).ready(function(){
    $window = $(window);
        $('section[data-type="background"]').each(function(){
            var $scroll = $(this);                 
            $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $scroll.data('speed')); 
            var coords = '50% '+ yPos + 'px';
            $scroll.css({ backgroundPosition: coords });    
        });
    });  
});




$(document).ready(function(){

var myNavBar = {

    flagAdd: true,

    elements: [],

    init: function (elements) {
        this.elements = elements;
    },

    add : function() {
        if(this.flagAdd) {
            for(var i=0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className += " fixed-theme";
            }
            this.flagAdd = false;
        }
    },

    remove: function() {
        for(var i=0; i < this.elements.length; i++) {
            document.getElementById(this.elements[i]).className =
                    document.getElementById(this.elements[i]).className.replace( /(?:^|\s)fixed-theme(?!\S)/g , '' );
        }
        this.flagAdd = true;
    }

};

myNavBar.init(  [
    "header",
    "header-container",
    "brand"
]);

function offSetManager(){

    var yOffset = 0;
    var currYOffSet = window.pageYOffset;

    if(yOffset < currYOffSet) {
        myNavBar.add();
    }
    else if(currYOffSet == yOffset){
        myNavBar.remove();
    }

}

window.onscroll = function(e) {
    offSetManager();
}

offSetManager();
});