$(document).on("touchend click","#edulastic .link1",function(){$("#edulastic").attr("class","stage1"),$("#edulastic .link1").addClass("active"),$("#edulastic .link2").removeClass("active"),$("#edulastic .link3").removeClass("active")}),$(document).on("touchend click","#edulastic .link2",function(){$("#edulastic").attr("class","stage2"),$("#edulastic .link1").removeClass("active"),$("#edulastic .link2").addClass("active"),$("#edulastic .link3").removeClass("active")}),$(document).on("touchend click","#edulastic .link3",function(){$("#edulastic").attr("class","stage3"),$("#edulastic .link1").removeClass("active"),$("#edulastic .link2").removeClass("active"),$("#edulastic .link3").addClass("active")}),$(document).on("touchend click","#glider .link1",function(){$("#glider").attr("class","stage1"),$("#glider .link1").addClass("active"),$("#glider .link2").removeClass("active"),$("#glider .link3").removeClass("active")}),$(document).on("touchend click","#glider .link2",function(){$("#glider").attr("class","stage2"),$("#glider .link1").removeClass("active"),$("#glider .link2").addClass("active"),$("#glider .link3").removeClass("active")}),$(document).on("touchend click","#glider .link3",function(){$("#glider").attr("class","stage3"),$("#glider .link1").removeClass("active"),$("#glider .link2").removeClass("active"),$("#glider .link3").addClass("active")}),$(document).on("touchend click","#spaces .link1",function(){$("#spaces").attr("class","stage1"),$("#spaces .link1").addClass("active"),$("#spaces .link2").removeClass("active"),$("#spaces .link3").removeClass("active")}),$(document).on("touchend click","#spaces .link2",function(){$("#spaces").attr("class","stage2"),$("#spaces .link1").removeClass("active"),$("#spaces .link2").addClass("active"),$("#spaces .link3").removeClass("active")}),$(document).on("touchend click","#spaces .link3",function(){$("#spaces").attr("class","stage3"),$("#spaces .link1").removeClass("active"),$("#spaces .link2").removeClass("active"),$("#spaces .link3").addClass("active")});var range=300;$(window).on("scroll",function(){var e=$(this).scrollTop(),a=$("#edulastic").offset().top,s=$("#edulastic").outerHeight();a+=s/2;var t=1-(e-a+range)/range;$(".bg-green").css({opacity:t}),t>"1"?$(".bg-green").css({opacity:1}):"0">t&&$(".bg-green").css({opacity:0})}),$(window).on("scroll",function(){var e=$(this).scrollTop(),a=$("#glider").offset().top,s=$("#glider").outerHeight();a+=s/2;var t=1-(e-a+range)/range;$(".bg-purple").css({opacity:t}),t>"1"?$(".bg-purple").css({opacity:1}):"0">t&&$(".bg-purple").css({opacity:0})}),$(window).scroll(function(){var e=$(window).scrollTop();$(".particles").css("transform","translate3d(0px,-"+.8*e+"px, 0px)"),$("canvas").css("transform","translate3d(0px,"+.1*e+"px, 0px)")}),function e(){var a=$(".fadeIn"),s=(1400*Math.random()).toFixed(),t=(1e3*Math.random()).toFixed(),i=1,c=.5,l=Math.round(10*(Math.random()*i+c))/10,n=a.eq(Math.floor(Math.random()*a.length));n.is(":visible")?n.fadeOut(Math.floor(500*Math.random()),e):(n.fadeIn(Math.floor(250*Math.random()),e),n.css({transform:"translate3d("+s+"px, "+t+"px, 0px) scale("+l+")",position:"absolute"}))}(),particlesJS("particles-js",{particles:{number:{value:70,density:{enable:!0,value_area:3206}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:9},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.6,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:1,random:!0,anim:{enable:!1,speed:5,size_min:.3,sync:!1}},line_linked:{enable:!0,distance:200,color:"#ffffff",opacity:1,width:1},move:{enable:!0,speed:3,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:640,rotateY:2970}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:2,speed:2},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}),$(document).on("click",".js-show-desc",function(e){var a=$(e.target),s=a.parents(".member-hover");s.toggleClass("show-description")}),console.log("App ready");