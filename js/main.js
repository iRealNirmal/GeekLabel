var sizeSmall=false;
var psize;
var w = $(document).width();
if(w<768){
    sizeSmall=true;
}
$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['firstPage', 'secondPage','thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eigthPage'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: true,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: false,
        resize : true,
        sectionsColor : ['#d83454', '#f1f2f2', '#f1f2f2', '#f1f2f2', '#fff', '#f1f2f2', '#f1f2f2'],
        paddingTop: '10px',
        paddingBottom: '0',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){
        },
        afterLoad: function(anchorLink, index){
             //using index
            if(index == 1){
                setHeight("#home","#home-content");
                setMargin("#home","#home-content");
            }else if(index == 2){
                setHeight("#second","#second-content");
                setMargin("#second","#second-content");
            }else if(index == 3){
                setHeight("#third","#third-content");
                setMargin("#third","#third-content");
            }else if(index == 4){
                setHeight("#fourth","#fourth-content");
                setMargin("#fourth","#fourth-content");
            }else if(index == 5){
                setHeight("#fifth","#fifth-content");
                setMargin("#fifth","#fifth-content");
            }else if(index == 6){
               setMargin("#sixth","#sixth-content");
               setMargin("#sixth","#sixth-content");
            }else if(index == 7){
                setHeight("#seventh","#seventh-content");
                setMargin("#seventh","#seventh-content");

            }
            function setMargin(a,b){
                setTimeout(function(){
                    var mar = parseInt($(b + " .a-link").css('marginTop'));
                    if(mar==0){
                        var h = $(a).height()-parseInt($(b).css('marginTop'))-$(b).height()+parseInt($(b + " .a-link").css('marginTop'))-120;
                        if(h>0){
                            $(b + " .a-link").animate({"marginTop":h});
                        }else{
                            $(b + " .a-link").animate({"marginTop":0});
                        }
                    }
                },200)
            }
            function setHeight(e1,e2,e3){
                var a = $(e1).height();
                var b = $(e2).height();
                if(a-10>b){
                    if (e3 !== undefined) {
                        $(e2).css("marginTop",((a-10-b)/2)+"px");
                    } else {
                        $(e2).css("marginTop",a-92-b+"px");
                    }
                }
            }
        },
        afterRender: function(){},
        afterResize: function(){
            $.fn.fullpage.reBuild();
            $(".a-link").css("marginTop",0);
            var a = $(document).width();
            if(a>767 && sizeSmall==false){
                console.log(sizeSmall)
                sizeSmall=true;
                $('#carousel').carouFredSel({
                    items                : 3,
                    direction            : "left",
                    width                : "80%",
                    responsive: true,  
                    prev: '.car-left',
                    next: '.car-right',
                    scroll : {
                        items            : 1,
                        easing            : "elastic",
                        duration        : 1000,
                        pauseOnHover    : true
                    },
                    swipe: {
                        onMouse: true,
                        onTouch: true
                    }
                });
            }else if(a<768 && sizeSmall==true){
                console.log(sizeSmall)
                $('#carousel').carouFredSel({
                    items                : 3,
                    direction            : "up",
                    prev: '.car-left',
                    next: '.car-right',
                    scroll : {
                        items            : 1,
                        easing            : "elastic",
                        duration        : 1000,
                        pauseOnHover    : true
                    }
                });
                sizeSmall=false;
            }
            
            
        },
        afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
           
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
        }
    });
    var a = $(document).width();
            if(a>767 && sizeSmall==false){
                console.log(sizeSmall)
                sizeSmall=false;
                $('#carousel').carouFredSel({
                    items                : 3,
                    direction            : "left",
                    width                : "80%",
                    responsive: true,  
                    prev: '.car-left',
                    next: '.car-right',
                    scroll : {
                        items            : 1,
                        easing            : "elastic",
                        duration        : 1000,
                        pauseOnHover    : true
                    },
                    swipe: {
                        onMouse: true,
                        onTouch: true
                    }
                });
            }else if(a<768 && sizeSmall==true){
                console.log(sizeSmall)
                $('#carousel').carouFredSel({
                    items                : 3,
                    direction            : "up",
                    prev: '.car-left',
                    next: '.car-right',
                    width:'100%',
                    scroll : {
                        items            : 1,
                        easing            : "elastic",
                        duration        : 1000,
                        pauseOnHover    : true
                    }
                });
                sizeSmall=false;
            }
            $("#contact").submit(function(e){
                if($(this).hasClass('has-success')){
                    toastr.success('Thanks we have received your request. Will contact you soon.')
                }else{
                    toastr.error('Please fill proper data before sending contact request.')
                }
                return false;
            })
});