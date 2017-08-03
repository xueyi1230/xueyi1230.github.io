require.config({
	//baseUrl : 'script/',
	paths : {
		'jquery' : 'base/jquery',
	}
});

require(['jquery'],function($){
	//若ie则不显示问候消息
	if(!window.ActiveXObject){
		console.log('早上好，中午好，晚上好，正在等待颠覆改版');
	}
    
    /* init */
    var offsetX = 0;
    var handle_offsetX = 0;

    var $scrubberWrap = $(".scrubber-wrap");
    var $scrubberHandle = $(".scrubber-handle");
    var $scrubberLeft = $(".scrubber-left");
    var $scrubberRight = $(".scrubber-right");

    var wrap_offsetX = $scrubberWrap.offset().left;

    var wrap_styles = window.getComputedStyle($scrubberWrap[0], null);
    var wrap_width = parseInt(wrap_styles.width, 10);

    var handle_styles = window.getComputedStyle($scrubberHandle[0], null);
    var handle_width = parseInt(handle_styles.width, 10);


    $scrubberRight.css({ width: wrap_width / 2 })
    $scrubberLeft.css({ width: wrap_width / 2 })

	$scrubberWrap.mousemove(function(e){
        offsetX = e.clientX - wrap_offsetX;

        handle_offsetX = offsetX - handle_width;
        handle_offsetX = handle_offsetX > 0 ? handle_offsetX : 0;

        $scrubberHandle.css({ left: handle_offsetX })
        $scrubberRight.css({ width: wrap_width - offsetX })
        $scrubberLeft.css({ width: offsetX })
	});
});
