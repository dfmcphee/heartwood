document.addEventListener('DOMContentLoaded', function() {
	svg4everybody();
	
	var feed = new Instafeed({
		get: 'user',
		userId: '7903795599',
		accessToken: '7903795599.4cacb17.21ebfa8b752c471db8f1218822cff268',
		template: '<a class="instafeed__post" href="{{link}}"><img class="instafeed__image" src="{{image}}" /></a>',
		resolution: 'low_resolution',
		limit: 8,
	});
	feed.run();
}, false);
