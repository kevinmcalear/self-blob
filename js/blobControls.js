const changeToEmotion = (emotion, duration=1, delay=0) => {
	const feelings = {
		normal: {
			color: 0xff0000,
			groundColor: 0x0C056D,
			accentLight1: 0x590D82,
			accentLight2: 0x590D82,
		},
		sad: {
			color: 0x000088,
			groundColor: 0x0000ff,
			accentLight1: 0x000088,
			accentLight2: 0x000088,
		},
		angry: {
			color: 0x880000,
			groundColor: 0xff0000,
			accentLight1: 0x880000,
			accentLight2: 0x880000,
		},
		sick: {
			color: 0x008800,
			groundColor: 0x00cc00,
			accentLight1: 0x008800,
			accentLight2: 0x008800,
		},
		scared: {
			color: 0xa9a9a9,
			groundColor: 0xa9a9a9,
			accentLight1: 0xa9a9a9,
			accentLight2: 0xa9a9a9,
		},
		happy: {
			color: 0x888800,
			groundColor: 0xffff00,
			accentLight1: 0x888800,
			accentLight2: 0x888800,
		},
		excited: {
			color: 0x888c00,
			groundColor: 0x888c00,
			accentLight1: 0x888c00,
			accentLight2: 0x888c00,
		}
	}
	const feeling = feelings[emotion] === undefined ? { color: 0xffffff, groundColor: 0xffffff } : feelings[emotion];
	const color = new THREE.Color( feeling.color );
	const groundColor = new THREE.Color( feeling.groundColor );
	const accentLight1 = new THREE.Color( feeling.accentLight1 );
	const accentLight2 = new THREE.Color( feeling.accentLight2 );
	
	TweenMax.to(hemiLight.color, duration, {
	  r: color.r,
	  g: color.g,
	  b: color.b,
	  delay: delay,
	  onComplete: () => {},
	});
	TweenMax.to(hemiLight.groundColor, duration, {
	  r: groundColor.r,
	  g: groundColor.g,
	  b: groundColor.b,
	  delay: delay,
	  onComplete: () => {},
	});
	TweenMax.to(light.color, duration, {
	  r: accentLight1.r,
	  g: accentLight1.g,
	  b: accentLight1.b,
	  delay: delay,
	  onComplete: () => {},
	});
	TweenMax.to(light2.color, duration, {
	  r: accentLight2.r,
	  g: accentLight2.g,
	  b: accentLight2.b,
	  delay: delay,
	  onComplete: () => {},
	});
}

const moveBlob = (strength=0, duration=0.8) => {
	TweenMax.to(mouse, duration, {
        y: strength,
        x: strength,
        ease: Power1.easeOut
    });
}

const jitterBlob = (x=0.006, y=0.006, z=0.006, duration=0.8) => {
	TweenMax.to(multipler, duration, {
        x: x,
        y: y,
        z: z,
        ease: Power1.easeOut
    });
}
const cameraZoom = (zoomLevel=250, duration=0.8) => {
	TweenMax.to(camera.position, duration, {
	    z: zoomLevel,
	    ease: Power1.easeOut
	});
}
// changeToEmotion('sad', 2, 10000);
