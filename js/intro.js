let conversation = "";
conversation += "Hello.";
conversation += "~1500~";
conversation += "*.*";
conversation += ", I'm Kevin.";
conversation += "~1500~";
conversation += "*Hello, I'm Kevin.*";
conversation += "Well, I'm not actually Kevin.";
conversation += "~800~";
conversation += "*Well, I'm not actually Kevin.*";
conversation += "I'm something else.";
conversation += "~1500~";
conversation += "*I'm something else.*";
conversation += "I'm Kevin's hopes.";
conversation += "~1500~";
conversation += "*Kevin's hopes.*";
conversation += "his dreams.";
conversation += "~1500~";
conversation += "*dreams.*";
conversation += "past.";
conversation += "~1500~";
conversation += "*.*";
conversation += " and present.";
conversation += "~1500~";
conversation += "*his past and present.*";
conversation += "the jobs he's held.";
conversation += "~1500~";
conversation += "*the jobs he's held.*";
conversation += "his fears.";
conversation += "~1500~";
conversation += "*.*";
conversation += " and insic~500~*ic*ecuriet~500~*iet*ities.~300~";
conversation += "*his fears and insecurities.*";
conversation += "the parts of him he doesn't understand."
conversation += "~1500~";
conversation += "*the parts of him he doesn't understand.*"


let changeToEmotion = (emotion, duration=1, delay=0) => {
	const feelings = {
		sad: {
			color: 0x0000ff,
			groundColor: 0x02020b,
			accentLight1: 0x0000ff,
			accentLight2: 0x0000ff,
		},
		angry: {
			color: 0xff0000,
			groundColor: 0xff0000,
			accentLight1: 0xff0000,
			accentLight2: 0xff0000,
		},
		sick: {
			color: 0x00ff00,
			groundColor: 0x00ff00,
			accentLight1: 0x00ff00,
			accentLight2: 0x00ff00,
		},
		scared: {
			color: 0xa9a9a9,
			groundColor: 0xa9a9a9,
			accentLight1: 0xa9a9a9,
			accentLight2: 0xa9a9a9,
		},
		happy: {
			color: 0xffcc00,
			groundColor: 0xffff00,
			accentLight1: 0xffcc00,
			accentLight2: 0xffcc00,
		},
		excited: {
			color: 0xff8c00,
			groundColor: 0xff8c00,
			accentLight1: 0xff8c00,
			accentLight2: 0xff8c00,
		}
	}
	const feeling = feelings[emotion] === undefined ? { color: 0xffffff, groundColor: 0xffffff } : feelings[emotion];
	const color = new THREE.Color( feeling.color );
	const groundColor = new THREE.Color( feeling.groundColor );
	const accentLight1 = new THREE.Color( feeling.accentLight1 );
	const accentLight2 = new THREE.Color( feeling.accentLight2 );
	setTimeout(()=> {
		TweenMax.to(hemiLight.color, duration, {
		  r: color.r,
		  g: color.g,
		  b: color.b,
		  onComplete: () => {},
		});
		TweenMax.to(hemiLight.groundColor, duration, {
		  r: groundColor.r,
		  g: groundColor.g,
		  b: groundColor.b,
		  onComplete: () => {},
		});
		TweenMax.to(light.color, duration, {
		  r: accentLight1.r,
		  g: accentLight1.g,
		  b: accentLight1.b,
		  onComplete: () => {},
		});
		TweenMax.to(light2.color, duration, {
		  r: accentLight2.r,
		  g: accentLight2.g,
		  b: accentLight2.b,
		  onComplete: () => {},
		});
	}, delay);
}

changeToEmotion('sad', 2, 10000);


var typing=Typing(conversation, 90, 300, 50,'conversation-text');
typing();