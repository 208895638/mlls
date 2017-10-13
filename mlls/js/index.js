$(function(){
	var index={
		init:function(){
			this.bindEvent();
			this.swiper();
		},
		bindEvent:function(){
			
			//广告位
			$(".adv").hover(function(){
				$(".advBig").stop(true, true).slideDown();
			},function(){
				$(".advBig").stop(true, true).slideUp();
			});
			//全部的游戏
			$(".xPGames").hover(function(){
				$(".xPGames .games").stop(true, true).slideDown();
			},function(){
				$(".xPGames .games").stop(true, true).slideUp();
			});
			//划过游戏名称显示对应的图片
			$(".xPGames .games .list1 li a").hover(function(){
				$(".xPGames .games .list1 li").find(".gameText").show().siblings().hide();
				$(this).find(".gamePhoto").show().siblings().hide();
			});
			$(".xPGames .games .list2 li a").hover(function(){
				$(".xPGames .games .list2 li").find(".gameText").show().siblings().hide();
				$(this).find(".gamePhoto").show().siblings().hide();
			});
			//顶部导航栏划过微信图标显示二维码
			$(".mLNav .wx").hover(function(){
				$(this).find(".code").stop().fadeIn();
			},function(){
				$(this).find(".code").stop().fadeOut();
			});
			//新闻攻略中的导航栏切换
			$(".newsNav ul li a").on("click",function(){
				var i = $(this).parent().index();
				$(this).addClass("on").parent().siblings().find("a").removeClass("on");
				$(".newsR .info .per").eq(i).show().siblings().hide();
			});
			
			//职业介绍中的职业切换
			//初始状态
			$(".green").css({"background":"url(psd/weiguanwangimages/images/sec_huizhanglv1_41.png) no-repeat center"});
			$(".career li").on("click",function(){
				//重置每个按钮的初始状态
				$(".green").css({"background":"url(psd/weiguanwangimages/images/sec_huizhanglv_41.png) no-repeat center"});
				$(".red").css({"background":"url(psd/images/sec_huizhanghong_41.png) no-repeat center"});
				$(".purple").css({"background":"url(psd/images/sec_huizhangzi_41.png) no-repeat center"});
				$(".orange").css({"background":"url(psd/images/sec_huizhangcheng_41.png) no-repeat center"});
				var i = $(this).index();
				//每个按钮对应点击之后的状态
				switch (i){
					case 0:$(this).css({"background":"url(psd/weiguanwangimages/images/sec_huizhanglv1_41.png) no-repeat center"});
						break;
					case 1:$(this).css({"background":"url(psd/images/sec_huizhanghong1_41.png) no-repeat center"});
					break;
					case 2:$(this).css({"background":"url(psd/images/sec_huizhangzi1_41.png) no-repeat center"});
					break;
					case 3:$(this).css({"background":"url(psd/images/sec_huizhangcheng1_41.png) no-repeat center"});
					break;
					default:$(this).css({"background":"url(psd/weiguanwangimages/images/sec_huizhanglv1_41.png) no-repeat center"});
						break;
				}
				$(".xq .per").eq(i).show().siblings().hide();
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
		        pagination: '.pagination',
		        paginationClickable: true,
		        spaceBetween: 30,
		        loop:true,
		        autoplay: 3000,
		        autoplayDisableOnInteraction : true		        
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