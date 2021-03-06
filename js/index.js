$(function(){
	var index={
		init:function(){
			this.bindEvent();
			this.swiper();
		},
		bindEvent:function(){
			var k = 0;//记录职业介绍是第几个职业
			//公共导航栏广告位
			$(".adv").hover(function(){
				$(".advSmall").hide();
				$(".advBig").stop(true, true).slideDown();
			},function(){
				$(".advSmall").show();
				$(".advBig").stop(true, true).slideUp();
			});
			//划过喜扑游戏全目录切换效果
			$(".xPGames").hover(function(){
				$(".xPGames .games").stop(true, true).slideDown();
			},function(){
				$(".xPGames .games").stop(true, true).slideUp();
			});
			//公共导航栏划过游戏名称显示对应的图片
			$(".xPGames .games .list1 li a").hover(function(){
				$(".xPGames .games .list1 li").not(".show").find(".gameText").show().siblings().hide();
				$(this).not(".show").find(".gamePhoto").show().siblings().hide();
			});
			$(".xPGames .games .list2 li a").hover(function(){
				$(".xPGames .games .list2 li").not(".show").find(".gameText").show().siblings().hide();
				$(this).not(".show").find(".gamePhoto").show().siblings().hide();
			});
			//魔龙猎手导航栏的游戏资料和有些特色划过切换到对应的位置
			$(".nav li").on("click",function(){
				var i = $(this).index();
				if(i == 3){
					var h = $(".game").offset().top;
					$('body,html').animate({scrollTop:h},500);
				}
			});
			//顶部导航栏划过微信图标显示二维码
			$(".mLNav .wx").hover(function(){
				$(this).find(".code").stop().fadeIn();
			},function(){
				$(this).find(".code").stop().fadeOut();
			});
			//新闻攻略中的导航栏切换
			$(".newsNav ul li a").hover(function(){
				var i = $(this).parent().index();
				$(this).addClass("on").parent().siblings().find("a").removeClass("on");
				$(".newsR .info .per").eq(i).show().siblings().hide();
			});
			
			//职业介绍中的职业切换
			//初始状态
			$(".purple").css({"background":"url(images/sec_hzzi1_15.png) no-repeat center"});
			$(".career li").on("click",function(){
				k = $(this).index();
				//重置每个按钮的初始状态
				$(".green").css({"background":"url(images/sec_hzlv_15.png) no-repeat center"});
				$(".red").css({"background":"url(images/sec_hzhong_15.png) no-repeat center"});
				$(".purple").css({"background":"url(images/sec_hzzi_15.png) no-repeat center"});
				$(".orange").css({"background":"url(images/sec_hzcheng_15.png) no-repeat center"});
				var i = $(this).index();
				//每个按钮对应点击之后的状态
				switch (i){
					case 2:$(this).css({"background":"url(images/sec_hzlv1_15.png) no-repeat center"});
						break;
					case 1:$(this).css({"background":"url(images/sec_hzhong1_15.png) no-repeat center"});
					break;
					case 0:$(this).css({"background":"url(images/sec_hzzi1_15.png) no-repeat center"});
					break;
					case 3:$(this).css({"background":"url(images/sec_hzcheng1_15.png) no-repeat center"});
					break;
					default:$(this).css({"background":"url(images/sec_hzlv1_15.png) no-repeat center"});
						break;
				}
				$(".xq .per").eq(i).show().siblings().hide();
			})
			//点击左右按钮切换职业
			$(".btnNext").on("click",function(){
				k++;
				//重置每个按钮初始状态
				$(".green").css({"background":"url(images/sec_hzlv_15.png) no-repeat center"});
				$(".red").css({"background":"url(images/sec_hzhong_15.png) no-repeat center"});
				$(".purple").css({"background":"url(images/sec_hzzi_15.png) no-repeat center"});
				$(".orange").css({"background":"url(images/sec_hzcheng_15.png) no-repeat center"});
				
				if(k == 1){
					//四个小按钮的切换
					$(".red").css({"background":"url(images/sec_hzhong1_15.png) center center no-repeat"});
					//职业的切换
					$(".xq .per").eq(k).show().siblings().hide();
				}else if(k == 2){
					$(".green").css({"background":"url(images/sec_hzlv1_15.png) no-repeat center"});
					//职业的切换
					$(".xq .per").eq(k).show().siblings().hide();
				}else if(k == 3){
					$(".orange").css({"background":"url(images/sec_hzcheng1_15.png) no-repeat center"});
					//职业的切换
					$(".xq .per").eq(k).show().siblings().hide();
				}else{
					k = 0;
					$(".purple").css({"background":"url(images/sec_hzzi1_15.png) no-repeat center"});
					//职业的切换
					$(".xq .per").eq(k).show().siblings().hide();
				}
			});
			$(".btnPrev").on("click",function(){
				k--;
				//重置每个按钮初始状态
				$(".green").css({"background":"url(images/sec_hzlv_15.png) no-repeat center"});
				$(".red").css({"background":"url(images/sec_hzhong_15.png) no-repeat center"});
				$(".purple").css({"background":"url(images/sec_hzzi_15.png) no-repeat center"});
				$(".orange").css({"background":"url(images/sec_hzcheng_15.png) no-repeat center"});
				if(k == 1){
					//四个小按钮的切换
					$(".red").css({"background":"url(images/sec_hzhong1_15.png) center center no-repeat"});
					//职业的切换
					$(".xq .per").eq(k).show().siblings().hide();
				}else if(k == 2){
					$(".green").css({"background":"url(images/sec_hzlv1_15.png) no-repeat center"});
					//职业的切换
					$(".xq .per").eq(k).show().siblings().hide();
				}else if(k == 0){
					$(".purple").css({"background":"url(images/sec_hzzi1_15.png) no-repeat center"});
					
					//职业的切换
					$(".xq .per").eq(k).show().siblings().hide();
				}else{
					k = 3;
					$(".orange").css({"background":"url(images/sec_hzcheng1_15.png) no-repeat center"});
					//职业的切换
					$(".xq .per").eq(k).show().siblings().hide();
				}
			})
			//职业角色的技能切换
			$(".skillTop li").on("click",function(){
				var i = $(this).index();
				$(this).addClass("on").siblings().removeClass("on");
				$(this).parent().siblings().find("li").eq(i).show().siblings().hide();
			});
			//游戏特色滑动切换
			$(".game .games li").hover(function(){
				var i = $(this).index();
				$(this).siblings().find("h3").show().siblings().hide();
				$(this).find("h4").show().siblings().hide();
			});
		},
		render:function(){
			var that=this;
			
		},
		swiper:function(){
			var swiper = new Swiper('.bans', {
		        pagination: '.banner',
		        paginationClickable: true,
		        spaceBetween: 30,
		        loop:true,
		        autoplay: 3000,
		        autoplayDisableOnInteraction : true		        
		    });
		    var swipers = new Swiper('.charac', {
		    	pagination: '.characPage',
		        paginationClickable: true,
		        spaceBetween: 30,
		        loop:true,
		        grabCursor : true,
		        autoplay: 300000,
		        autoplayDisableOnInteraction : true,	 
		        prevButton:'.swiper-button-prev',
				nextButton:'.swiper-button-next',	
		       	effect : 'coverflow',
		       	tdFlow: {
			        rotate : 30,
			        stretch :700,
			        depth: 50,
			        modifier : 1,
			        shadows : false
		      	}    
		    });
		    $(".bans").mouseenter(function(){
		    	swiper.stopAutoplay();
		    }).mouseout(function(){
		    	swiper.startAutoplay();
		    });
		}
	};
	index.init();
})