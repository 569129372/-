jQuery.cookie = function(name, value, options) {
	if(typeof value != 'undefined') {
		options = options || {};
		if(value === null) {
			value = '';
			options.expires = -1;
		}
		var expires = '';
		if(options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
			var date;
			if(typeof options.expires == 'number') {
				date = new Date();
				var totalTime = 24 * 3600;//24 * 3600
				var hour = date.getHours();
				var minutes = date.getMinutes();
				var seconds = date.getSeconds();
				var pastTime = 3600 * hour + 60 * minutes + seconds;
				var leftTime = totalTime - pastTime;
				 // alert('弹出框内部被点击了');
				 
				date.setTime(date.getTime() + (options.expires * leftTime * 1000));
			} else {
				date = options.expires;
				alert(options.expires);
			}
			expires = '; expires=' + date.toUTCString();
		}
		var path = options.path ? '; path=' + (options.path) : '';
		var domain = options.domain ? '; domain=' + (options.domain) : '';
		var secure = options.secure ? '; secure' : '';
		document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
	} else {
		var cookieValue = null;
		if(document.cookie && document.cookie != '') {
			var cookies = document.cookie.split(';');
			for(var i = 0; i < cookies.length; i++) {
				var cookie = jQuery.trim(cookies[i]);
				if(cookie.substring(0, name.length + 1) == (name + '=')) {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	}
};
$(function() {
	var COOKIE_NAME = "erdangjiade";
	if($.cookie(COOKIE_NAME)) {
		$(".layer").hide();
		$("#globalAd").hide();
	} else {
		var erdangjiadeH = $(window).height();
		var erdangjiadeW = $(window).width();
	//	$(".layer").show();
//		$("#globalAd").css({
//			'top': erdangjiadeH / 2 - $("#globalAd").height() / 2,
//			'left': erdangjiadeW / 2 - $("#globalAd").width() / 2
//		});
//		$("#globalAd").slideDown(300, function() {
//			setTimeout("closeGloableAd()", '300000');
//		});
		//设置cookie 时间1天
		$.cookie(COOKIE_NAME, "erdangjiade", {
			path: '/',
			expires: 1
		});
	}
});

function closeGlobalAd() {
	$('#globalAd').hide();
	$('.layer').hide();

}
function showGlobalAd() {
		var erdangjiadeH = $(window).height();
		var erdangjiadeW = $(window).width();
		$(".layer").show();
		$("#globalAd").css({
			'top': erdangjiadeH / 2 - $("#globalAd").height() / 2,
			'left': erdangjiadeW / 2 - $("#globalAd").width() / 2
		});
		//slideDown 下滑动画显示 3000为显示速度
		$("#globalAd").slideDown(300, function() {
		    //倒计时30秒关闭
			setTimeout("closeGlobalAd()", '30000');
		});

}
function redirectUrlToActive() {
	$('#globalAd').hide();
	$('.layer').hide();
}