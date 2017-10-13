$(function(){
	var news={
		init:function(){
			this.bindEvent();
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
				$(".games").stop(true, true).slideDown();
			},function(){
				$(".games").stop(true, true).slideUp();
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
			//导航栏切换
			$(".navBar li").on("click",function(){
				var i = $(this).index();
				$(this).find("a").addClass("on").parent().siblings().find("a").removeClass("on");
				$(".container .news").eq(i).removeClass("hide").siblings().addClass("hide");
			})
			
		},
		render:function(){
			var that=this;
			
		}
	};
	news.init();
})