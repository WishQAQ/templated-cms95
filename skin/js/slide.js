/**
 * @author 鎰氫汉鐮佸ご
 */
(function($){
	$.fn.Slide=function(options){
		var opts = $.extend({},$.fn.Slide.deflunt,options);
		var index=1;
		var targetLi = $("." + opts.claNav + " li", $(this));//鐩爣瀵硅薄
		var clickNext = $("." + opts.claNav + " .next", $(this));//鐐瑰嚮涓嬩竴涓寜閽�
		var clickPrev = $("." + opts.claNav + " .prev", $(this));//鐐瑰嚮涓婁竴涓寜閽�
		var clickNext2 = $("." + opts.claNav + " .next2", $(this));//鐐瑰嚮涓嬩竴涓寜閽�
		var clickPrev2 = $("." + opts.claNav + " .prev2", $(this));//鐐瑰嚮涓婁竴涓寜閽�
		var ContentBox = $("." + opts.claCon , $(this));//婊氬姩鐨勫璞�
		var ContentBoxNum=ContentBox.children().size();//婊氬姩瀵硅薄鐨勫瓙鍏冪礌涓暟
		var slideH=ContentBox.children().first().height();//婊氬姩瀵硅薄鐨勫瓙鍏冪礌涓暟楂樺害锛岀浉褰撲簬婊氬姩鐨勯珮搴�
		var slideW=ContentBox.children().first().width();//婊氬姩瀵硅薄鐨勫瓙鍏冪礌瀹藉害锛岀浉褰撲簬婊氬姩鐨勫搴�
		var autoPlay;
		var slideWH;
		if(opts.effect=="scroolY"||opts.effect=="scroolTxt"){
			slideWH=slideH;
		}else if(opts.effect=="scroolX"||opts.effect=="scroolLoop"){
			ContentBox.css("width",ContentBoxNum*slideW);
			slideWH=slideW;
		}else if(opts.effect=="fade"){
			ContentBox.children().first().css("z-index","1");
		}
		
		return this.each(function() {
			var $this=$(this);
			//婊氬姩鍑芥暟
			var doPlay=function(){
				$.fn.Slide.effect[opts.effect](ContentBox, targetLi, index, slideWH, opts);
				index++;
				if (index*opts.steps >= ContentBoxNum) {
					index = 0;
				}
			};
			//婊氬姩鍑芥暟
			var loopPlayLeft=function(){
				
			};
			var loopPlayRight=function(){
				
				
			};
			clickNext.click(function(event){
				$.fn.Slide.effect.scroolTxtnext(ContentBox, targetLi, index, slideWH, opts,function(){
					for(var i=0;i<opts.steps;i++){
	                    ContentBox.find("li:first",$this).appendTo(ContentBox);
	                }
	                ContentBox.css({"left":"0"});
				});
				event.preventDefault();
			});
			clickPrev.click(function(event){
				/*for(var i=0;i<opts.steps;i++){
	                ContentBox.find("li:last").prependTo(ContentBox);
	            }*/
	          	//ContentBox.css({"left":-index*opts.steps*slideW});
				$.fn.Slide.effect.scroolTxtprev(ContentBox, targetLi, index, slideWH, opts);
				event.preventDefault();
			});
			
			clickNext2.click(function(event){
				$.fn.Slide.effectLoop.scroolLeft(ContentBox, targetLi, index, slideWH, opts,function(){
					for(var i=0;i<opts.steps;i++){
	                    ContentBox.find("li:first",$this).appendTo(ContentBox);
	                }
	                ContentBox.css({"left":"0"});
				});
				event.preventDefault();
			});
			clickPrev2.click(function(event){
				for(var i=0;i<opts.steps;i++){
	                ContentBox.find("li:last").prependTo(ContentBox);
	            }
	          	ContentBox.css({"left":-index*opts.steps*slideW});
				$.fn.Slide.effectLoop.scroolRight(ContentBox, targetLi, index, slideWH, opts);
				event.preventDefault();
			});
			
			//鑷姩鎾斁
			if (opts.autoPlay) {
				autoPlay = setInterval(doPlay, opts.timer);
				ContentBox.hover(function(){
					if(autoPlay){
						clearInterval(autoPlay);
					}
				},function(){
					if(autoPlay){
						clearInterval(autoPlay);
					}
					autoPlay=setInterval(doPlay, opts.timer);
				});
				$(".JQ-slide-nav a").hover(function(){
					if(autoPlay){
						clearInterval(autoPlay);
					}
				},function(){
					if(autoPlay){
						clearInterval(autoPlay);
					}
					autoPlay=setInterval(doPlay, opts.timer);
				});
			}
			
			//鐩爣浜嬩欢
			targetLi.hover(function(){
				if(autoPlay){
					clearInterval(autoPlay);
				}
				index=targetLi.index(this);
				$.fn.Slide.effect[opts.effect](ContentBox, targetLi, index, slideWH, opts);
			},function(){
				if(autoPlay){
					clearInterval(autoPlay);
				}
				autoPlay = setInterval(doPlay, opts.timer);
			});
    	});
	};
	$.fn.Slide.deflunt={
		effect : "scroolY",
		autoPlay:true,
		speed : "normal",
		timer : 1000,
		defIndex : 0,
		claNav:"JQ-slide-nav",
		claCon:"JQ-slide-content",
		steps:1
	};
	$.fn.Slide.effectLoop={
		scroolLeft:function(contentObj,navObj,i,slideW,opts,callback){
			alert(0);
			contentObj.animate({"left":-i*opts.steps*slideW},opts.speed,callback);
			alert(1);
			if (navObj) {
				alert(2);
				navObj.eq(i).addClass("on").siblings().removeClass("on");
			}
		},
		scroolLeft:function(contentObj,navObj,i,slideW,opts,callback){
			contentObj.animate({"left":-i*opts.steps*slideW},opts.speed,callback);
			
		},
		scroolRight:function(contentObj,navObj,i,slideW,opts,callback){
			contentObj.animate({"left":0},opts.speed,callback);
			
		}
	}
	$.fn.Slide.effect={
		fade:function(contentObj,navObj,i,slideW,opts){
			contentObj.children().eq(i).animate({opacity:1},opts.speed).css({"z-index": "1"}).siblings().animate({opacity: 0},opts.speed).css({"z-index":"0"});
			navObj.eq(i).addClass("on").siblings().removeClass("on");
		},
		scroolTxt:function(contentObj,undefined,i,slideH,opts){
			//alert(i*opts.steps*slideH);
			contentObj.animate({"margin-top":-opts.steps*slideH},opts.speed,function(){
                for( var j=0;j<opts.steps;j++){
                	contentObj.find("li:first").appendTo(contentObj);
                }
                contentObj.css({"margin-top":"0"});
            });
		},
		/////
		scroolTxtprev:function(contentObj,undefined,i,slideH,opts){
			//alert(i*opts.steps*slideH);
			contentObj.animate({"margin-top":opts.steps*slideH},opts.speed,function(){
                for( var j=0;j<opts.steps;j++){
                	contentObj.find("li:last").prependTo(contentObj);
                }
                contentObj.css({"margin-top":"0"});
            });
		},
		scroolTxtnext:function(contentObj,undefined,i,slideH,opts){
			//alert(i*opts.steps*slideH);
			contentObj.animate({"margin-top":-opts.steps*slideH},opts.speed,function(){
                for( var j=0;j<opts.steps;j++){
                	contentObj.find("li:first").appendTo(contentObj);
                }
                contentObj.css({"margin-top":"0"});
            });
		},
		/////
		scroolX:function(contentObj,navObj,i,slideW,opts,callback){
			contentObj.animate({"left":-i*opts.steps*slideW},opts.speed,callback);
			if (navObj) {
				navObj.eq(i).addClass("on").siblings().removeClass("on");
			}
		},
		scroolY:function(contentObj,navObj,i,slideH,opts){
			contentObj.animate({"top":-i*opts.steps*slideH},opts.speed);
			if (navObj) {
				navObj.eq(i).addClass("on").siblings().removeClass("on");
			}
		}
	};
})(jQuery);

