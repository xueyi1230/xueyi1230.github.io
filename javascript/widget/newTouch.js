$.fn.newTouch = function (setOption, monitor) {
	var self = this;
	var _self = this;
	var option = {
		startCallback: setOption.startCallback || function () {
		},
		endCallback: setOption.endCallback || function () {
		},
		overCallback: setOption.overCallback || function () {
		},
		outTime: setOption.outTime || 400
	};

	this
		.on("touchstart", monitor, function (e) {
		option.startCallback($(this), e);
		_self = $(this);
	}).on('click', monitor, function (e) {
		var self = $(this);
		option.overCallback(self, e)
	});

	$(window).on("touchend", function (e) {
		option.endCallback(_self, e);
	});

	return this;
};