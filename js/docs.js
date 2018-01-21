(function() {
	init();

	function init() {
		var mdRender = new MdRender();
		var docsRounter = new DocsRouter(mdRender);
		docsRounter.registerRouter();

		$(document).ready(
				function() {
					setTimeout(function() {
						if ($('#content').html() == '') {
							var url = '/md/index.md';
							mdRender.render(url);
						}
					}, 200);
				}
		);
	}

	function MdRender() {
		this.render = render;

		function render(url) {
			url = url + '?_=' + getTimestamp();
			$('#hiddenText').load(url, function(){
				var content = marked($('#hiddenText').html());
				$('#content').html(content);
				$('#hiddenText').html('');
			});
		}

		function getTimestamp() {
			return (new Date()).getTime();
		}
	}

	function DocsRouter(mdRender) {
		var rountersMap = {
			'/md/?([^\/]*)\/([^\/]*)/?': routerHandler,
			'/md/?([^\/]*)\/([^\/]*)/([^\/]*)/?': routerHandler3
		};

		this.registerRouter = registerRouter;

		function registerRouter() {
			var router = Router(rountersMap);
			router.init();
		}

		function routerHandler(dir, md) {
			var url = '/md/' + dir + '/' + md;
			mdRender.render(url);
		}
		function routerHandler3(dir1, dir2, md) {
			var url = '/md/' + dir1 + '/' + dir2 + '/' + md;
			mdRender.render(url);
		}
	}
})();
