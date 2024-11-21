(function($) {
	var imgList = [];
	$.extend({
		preload: function(imgArr, option) {
			var setting = $.extend({
				init: function(loaded, total) {},
				loaded: function(img, loaded, total) {},
				loaded_all: function(loaded, total) {}
			}, option);
			var total = imgArr.length;
			var loaded = 0;

			setting.init(0, total);
			for(var i in imgArr) {
				imgList.push($("<img />")
					.attr("src", imgArr[i])
					.load(function() {
						loaded++;
						setting.loaded(this, loaded, total);
						if(loaded == total) {
							setting.loaded_all(loaded, total);
						}
					})
				);
			}

		}
	});
})(jQuery);










$(function() {
    $.preload([
        "http://diegoepunan.com/themes/diego4/diego.png",
        "http://diegoepunan.com/themes/diego4/fondo.jpg"
    ], {
        init: function(loaded, total) {
            $("#what").html("Cargando: "+loaded+"/"+total);
			$('body div').hide();
        },
        loaded: function(img, loaded, total) {
            $("#what").html("Cargando: "+loaded+"/"+total);
        },
        loaded_all: function(loaded, total) {
            $("#what").html("&#9786;");
			$('body div').show();
			$('body').addClass('preloaded');
        }
    });
});

$('body').mousemove(function(event) {
    cx = Math.ceil($('body').width() / 2.0);
    cy = Math.ceil($('body').height() / 2.0);
    dx = event.pageX - cx;
    dy = event.pageY - cy;
    tiltx = (dy / cy);
    tilty = - (dx / cx);
    radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
    degree = (radius * 20);

    $('#fondo').css({
		'-webkit-transform':'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)',
		'-moz-transform':'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)',
		'transform':'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)'
	});
});