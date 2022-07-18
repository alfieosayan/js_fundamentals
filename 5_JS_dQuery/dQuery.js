function $query(selector) {
	return {
		click: function (callback) {
			document
				.querySelector(selector)
				.addEventListener("click", callback);
		},
		show: function () {
			let x = document.querySelectorAll(selector);
			for (let i = 0; i < x.length; i++) {
				x[i].style.display = "block";
			}
		},
		hide: function () {
			let x = document.querySelectorAll(selector);
			for (let i = 0; i < x.length; i++) {
				x[i].style.display = "none";
			}
		},
	};
}
