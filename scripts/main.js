document.addEventListener('DOMContentLoaded', function() {
	svg4everybody();
	
	var feed = new Instafeed({
		get: 'user',
		userId: '245809',
		accessToken: '245809.f6bcbd5.3d33933ce4fa4aa6938f633a3292fad3',
		template: '<a href="{{link}}"><img src="{{image}}" /></a>',
		error: function(error) {
			console.log(error);
		}
	});
	//feed.run();
}, false);
