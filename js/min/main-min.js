$(document).on("touchend click","#edulastic .link1",function(){$("#edulastic").attr("class","stage1"),$("#edulastic .link1").addClass("active"),$("#edulastic .link2").removeClass("active"),$("#edulastic .link3").removeClass("active")}),$(document).on("touchend click","#edulastic .link2",function(){$("#edulastic").attr("class","stage2"),$("#edulastic .link1").removeClass("active"),$("#edulastic .link2").addClass("active"),$("#edulastic .link3").removeClass("active")}),$(document).on("touchend click","#edulastic .link3",function(){$("#edulastic").attr("class","stage3"),$("#edulastic .link1").removeClass("active"),$("#edulastic .link2").removeClass("active"),$("#edulastic .link3").addClass("active")}),$(document).on("touchend click","#edulastic .link3",function(){$("#edulastic").attr("class","stage3"),$("#edulastic .link1").removeClass("active"),$("#edulastic .link2").removeClass("active"),$("#edulastic .link3").addClass("active")});var range=200;$(window).on("scroll",function(){var e=$(this).scrollTop(),a=$("#edulastic").offset().top,t=$("#edulastic").outerHeight();a+=t/2;var i=1-(e-a+range)/range;$(".bg-green").css({opacity:i}),i>"1"?$(".bg-green").css({opacity:1}):"0">i&&$(".bg-green").css({opacity:0})}),$(window).on("scroll",function(){var e=$(this).scrollTop(),a=$("#glider").offset().top,t=$("#glider").outerHeight();a+=t/2;var i=1-(e-a+range)/range;$(".bg-purple").css({opacity:i}),i>"1"?$(".bg-purple").css({opacity:1}):"0">i&&$(".bg-purple").css({opacity:0})}),$(window).scroll(function(){var e=$(window).scrollTop();$(".particles").css("transform","translate3d(0px,-"+.2*e+"px, 0px)")}),particlesJS("particles-js",{particles:{number:{value:700,density:{enable:!0,value_area:3206}},color:{value:"#fff"},shape:{type:"edge",stroke:{width:0,color:"#000000"},polygon:{nb_sides:9},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.6,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:1,random:!0,anim:{enable:!1,speed:5,size_min:.3,sync:!1}},line_linked:{enable:!0,distance:70,color:"#ffffff",opacity:.2,width:1},move:{enable:!0,speed:.5,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:640,rotateY:2970}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:2,speed:2},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});