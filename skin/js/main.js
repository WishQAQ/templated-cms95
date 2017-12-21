// JavaScript Document

$(function(){
	$(".select_sim a").click(function(e){
		e.preventDefault();
		$(this).parent().find("ul").toggle();
	//	window.setTimeout("method('nvul')",5000);
	});
	
	$(".select_sim li").click(function(){
		var _text= $(this).text();
		$(this).parent().hide().siblings("span").text(_text);
	});
	
	$(".news_tit").Slide({
    effect : "scroolTxt",
    speed : "slow",
	//autoPlay:false,
    timer : 3000,
    steps:1
	});
	
	$(".navi").parent().mouseover(function(){
		$(this).find(".hide").show();
		var _index=$(this).index()+1;
		$(this).find(".navi").addClass("navi_0"+_index+"_on");
	}).mouseout(function(){
		$(this).find(".hide").hide();
		var _index=$(this).index()+1;
		$(this).find(".navi").removeClass("navi_0"+_index+"_on");
	});
	
	$(".roll_list").Slide({
		effect : "scroolLoop",
		autoPlay:false,
    	speed : "normal",
		timer : 5000,
		steps:1
	});
	
//	$(".tab_list_pic li a").click(function(event){
//		var postid = $(this).attr("id");
//		var url = "ajax_load.html?"+"id="+postid +"&type=pic";
//		$(this).parent().addClass("on").siblings().removeClass("on");
//		$(".tab_list_cont").load(url+" .ajax_load");
//		event.preventDefault();	
//	});
//	
//	$(".tab_list_video li a").click(function(event){
//		var postid = $(this).attr("id");
//		var url = "ajax_load.html?"+"id="+postid +"&type=video";
//		$(this).parent().addClass("on").siblings().removeClass("on");
//		$(".tab_list_cont").load(url+" .ajax_load");
//		event.preventDefault();	
//	});
	
});

 
 
function method(obj){
	//alert('2绉掑悗鑷姩鍏抽棴');
	//$(obj).hide();
  	document.getElementById('nvul').style.display = 'none';
}

function load_pic_list(cid){
	$(".cate_pics").removeClass("on");
	$("#cate_pic_"+cid).addClass("on");
	$("#pic_ajax").html("<div align='center' style='padding-top:60px'><img src='"+PUBLIC+"/images/ajax-loader17.gif' /></div>");
	$("#pic_ajax").load(APP+"/news/ajax_pic_list/cid/"+cid);
}

function see_pic(pid){
	var $img = $("#big_pic_see");
	//console.log(big_pic_arr);
	var pic_src = ROOT+"/"+big_pic_arr[pid]["pic"];
	var pic_title = big_pic_arr[pid]["title"];
	//console.log(pic_src);
	$("#big_pic_title").html(pic_title);
	$img.loadthumb({
		"src": pic_src ,
		"imgId":"myImgs",
		"parentId":"CRviewer"
	});
}


function load_video_list(cid){
	$(".cate_pics").removeClass("on");
	$("#cate_pic_"+cid).addClass("on");
	$("#video_ajax").html("<div align='center' style='padding-top:60px'><img src='"+PUBLIC+"/images/ajax-loader17.gif' /></div>");
	$("#video_ajax").load(APP+"/news/ajax_video_list/cid/"+cid);
}

function see_video(pid){

	var v_src = ROOT+"/"+video_arr[pid]["video"];
	var v_title = video_arr[pid]["title"];
	var v_con = $("#v_con_"+pid).html();
	
	$("#video_title").html(v_title);
	$("#video_con").html(v_con);



	 thisMovie("Flash1").video_url(v_src);  

}





 function thisMovie(movieName) {   
	
       if (navigator.appName.indexOf("Microsoft") != -1) {   
             return window[movieName];   
          } else {   
              return document[movieName];   
            }   
       }   

