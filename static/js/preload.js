
	(function() {
		var boxContainer = document.getElementById('boxContainer');
		var boxLoader = document.getElementById('boxLoader');
		var box = document.getElementById('box');
		var base = document.getElementById('base');

		TweenMax.set([boxLoader, base], {
			position: 'absolute',
			top: '50%',
			left: '50%',
			xPercent: -50,
			yPercent: -50
		})

		TweenMax.set([boxContainer], {
			position: 'absolute',
			top:'50%',
			left: '50%',
			xPercent: -50,
			yPercent: -50
		})

		var tl = new TimelineMax({
			repeat: -1
		});
		
		tl.timeScale(1.2)
		
		tl.set(boxLoader, {
			transformOrigin: '0% 100%',
			left: '+=70',
			top: '-=' + 70 / 2
		})
		.to(boxLoader, 1, {
			rotation: '-=90',
			ease: Power4.easeInOut
		})
		.set(boxLoader, {
			transformOrigin: '0% 100%',
			left: '-=70',
			rotation: 0
		})
		.to(boxLoader, 1, {
			rotation: '-=90',
			ease: Power4.easeInOut
		})
		.set(boxLoader, {
			transformOrigin: '0% 100%',
			left: '-=70',
			rotation: 0
		})
		.to(boxLoader, 1, {
			rotation: '-=270',
			ease: Power4.easeInOut
		})
		.to(boxContainer, 1, {
			rotation: '+=180',
			ease: Back.easeInOut
		}, '-=1')
		.set(boxLoader, {
			transformOrigin: '100% 0%',
			top: '+=70',
			rotation: 0
		})
		.to(boxLoader, 1, {
			rotation: '-=90',
			ease: Power4.easeInOut
		})
		.set(boxLoader, {
			transformOrigin: '100% 0%',
			left: '+=70',
			rotation: 0
		})
		.to(boxLoader, 1, {
			rotation: '-=90',
			ease: Power4.easeInOut
		})
		.set(boxLoader, {
			transformOrigin: '100% 0%',
			left: '+=70',
			rotation: 0
		})
		.to(boxLoader, 1, {
			rotation: '-=270',
			ease: Power4.easeInOut
		})
		.to(boxContainer, 1, {
			rotation: '+=180',
			ease: Back.easeInOut
		}, '-=1')
	})();
