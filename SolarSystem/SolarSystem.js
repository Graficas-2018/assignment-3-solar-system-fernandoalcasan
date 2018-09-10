var renderer = null,
scene = null,
camera = null;

var solarsystem = null,
sun = null, origin = null;
r1 = null, mercury = null,
r2 = null, venus = null,
r3 = null, earthGr = null, earth = null, moone = null,
r4 = null, marsGr = null, moonm1 = null, moonm2 = null,
asteroidField = null, asteroids = null,
r5 = null, jupiter = null,
r6 = null, saturnGr = null, saturn = null, satring = null,
r7 = null, uranusGr = null, uranus = null, uraring = null,
r8 = null, neptune = null,
r9 = null, pluto = null,
ring1 = null, ring2 = null, ring3 = null,
ring4 = null, ring5 = null, ring6 = null,
ring7 = null, ring8 = null, ring9 = null;

var planet_1_orbit;

var duration = 8000; // ms
var currentTime = Date.now();

function animate()
{
    var now = Date.now();
    var deltat = now - currentTime;
    currentTime = now;
    var fract = deltat / duration;
    var angle = Math.PI * 2 * fract;
    var movement = now * 0.001;
    var day = 3;

    // Rotate the planets about its Y axis
    sun.rotation.y += angle;
    mercury.rotation.y += angle;
    venus.rotation.y += angle;
    earthGr.rotation.y += angle;
    earth.rotation.y += angle;
    moone.rotation.y -= angle / 3;
    marsGr.rotation.y += angle / 2;
    mars.rotation.y += angle;
    moonm1.rotation.y -= angle / 3;
    moonm2.rotation.y -= angle / 3;
    jupiter.rotation.y += angle;
    saturn.rotation.y += angle;
    uranus.rotation.y += angle;
    neptune.rotation.y += angle;
    pluto.rotation.y += angle;
    pluto.rotation.y += angle;

    //rotate rings around the sun
    r9.rotation.y += angle / (100 * day);
    r8.rotation.y += angle / (40 * day);
    r7.rotation.y += angle / (25 * day);
    moone.rotation.y += angle / (0.068 * day);
    r6.rotation.y += angle / (12.77 * day);
    moonm1.rotation.y += angle / (0.1 * day);
    moonm2.rotation.y += angle / (-0.1 * day);
    r5.rotation.y += angle / (2 * day);
    r4.rotation.y += angle / (0.81 * day);
    r3.rotation.y += angle / (0.285 * day);
    r2.rotation.y += angle / (0.145 * day);
    r1.rotation.y += angle / (0.096 * day);

}

function run() {
    requestAnimationFrame(function() { run(); });

        // Render the scene
        renderer.render( scene, camera );

        // Spin the planets for next frame
        animate();
}

function createScene(canvas)
{
    // Create the Three.js renderer and attach it to our canvas
    renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true } );

    // Set the viewport size
    renderer.setSize(canvas.width, canvas.height);

    // Create a new Three.js scene
    scene = new THREE.Scene();

    // Set the background color
    scene.background = new THREE.Color( "rgb(0, 0, 0)" );

    // Add  a camera so we can view the scene
    camera = new THREE.PerspectiveCamera( 45, canvas.width / canvas.height, 1, 4000 );
    camera.position.z = 40;
    scene.add(camera);

    // Create a group to hold all the objects
    solarsystem = new THREE.Object3D;
    systemleft = new THREE.Object3D;
    systemright = new THREE.Object3D;
    earthGr = new THREE.Object3D;
    marsGr = new THREE.Object3D;
    saturnGr = new THREE.Object3D;
    uranusGr = new THREE.Object3D;
    origin = new THREE.Object3D;
    r1 = new THREE.Object3D;
    r2 = new THREE.Object3D;
    r3 = new THREE.Object3D;
    r4 = new THREE.Object3D;
    r5 = new THREE.Object3D;
    r6 = new THREE.Object3D;
    r7 = new THREE.Object3D;
    r8 =  new THREE.Object3D;
    r9 = new THREE.Object3D;
    asteroidField = new THREE.Object3D;


    // Add a directional light to show off the objects
    var light = new THREE.DirectionalLight( 0xffffff, 1.5);
    var light2 = new THREE.DirectionalLight( 0xffffff, 1);


    // Position the light out from the scene, pointing at the origin
    light.position.set(0,5,10);
    light.target.position.set(0,0,0);
    light2.position.set(0,-5,0);
    light2.target.position.set(0,0,0);
    origin.position.set(0,0,0);

    var textureUrl = "../images/sunmap.jpg";
    var texture = new THREE.TextureLoader().load(textureUrl);
    var material = new THREE.MeshPhongMaterial({ map: texture });

    textureUrl = "../images/mercurymap.jpg";
    var textureUrl2 = "../images/mercurybump.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    var texturebump = new THREE.TextureLoader().load(textureUrl2);
    var material1 = new THREE.MeshPhongMaterial({ map: texture, bumpMap: texturebump, bumpScale: 0.1 });

    textureUrl = "../images/venusmap.jpg";
    textureUrl2 = "../images/venusbump.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    texturebump = new THREE.TextureLoader().load(textureUrl2);
    var material2 = new THREE.MeshPhongMaterial({ map: texture, bumpMap: texturebump, bumpScale: 0.1 });

    textureUrl = "../images/earth_atmos_2048.jpg";
    textureUrl2 = "../images/earthbump1k.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    texturebump = new THREE.TextureLoader().load(textureUrl2);
    var material3 = new THREE.MeshPhongMaterial({ map: texture, bumpMap: texturebump, bumpScale: 0.1 });

    textureUrl = "../images/marsmap1k.jpg";
    textureUrl2 = "../images/marsbump1k.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    texturebump = new THREE.TextureLoader().load(textureUrl2);
    var material4 = new THREE.MeshPhongMaterial({ map: texture, bumpMap: texturebump, bumpScale: 0.1 });

    textureUrl = "../images/jupiter2_4k.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    var material5 = new THREE.MeshPhongMaterial({ map: texture });

    textureUrl = "../images/saturnmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    var material6 = new THREE.MeshPhongMaterial({ map: texture });

    textureUrl = "../images/uranusmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    var material7 = new THREE.MeshPhongMaterial({ map: texture });

    textureUrl = "../images/neptunemap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    var material8 = new THREE.MeshPhongMaterial({ map: texture });

    textureUrl = "../images/plutomap2k.jpg";
    textureUrl2 = "../images/plutobump2k.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    texturebump = new THREE.TextureLoader().load(textureUrl2);
    var material9 = new THREE.MeshPhongMaterial({ map: texture, bumpMap: texturebump, bumpScale: 0.1 });

    textureUrl = "../images/moonmap4k.jpg";
    textureUrl2 = "../images/moonbump4k.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    texturebump = new THREE.TextureLoader().load(textureUrl2);
    var moonearth = new THREE.MeshPhongMaterial({ map: texture, bumpMap: texturebump, bumpScale: 0.1 });

    textureUrl = "../images/deimosbump.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    var moonmars1 = new THREE.MeshPhongMaterial({ bumpMap: texture, bumpScale: 0.1 });

    textureUrl = "../images/phobosbump.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    var moonmars2 = new THREE.MeshPhongMaterial({ bumpMap: texture, bumpScale: 0.1 });

    textureUrl = "../images/saturnringcolor.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    var satringM = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });

    textureUrl = "../images/uranusringcolour.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    var uraringM = new THREE.MeshBasicMaterial({ map: texture,side: THREE.DoubleSide });

    textureUrl = "../images/rings.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    var ringsM = new THREE.MeshBasicMaterial( { map: texture, side: THREE.DoubleSide } );

    textureUrl = "../images/asteroidbelt.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    var asterM = new THREE.MeshBasicMaterial( { map: texture, side: THREE.DoubleSide } );

    // Create the planet's geometry
    var sunG = new THREE.SphereGeometry(2.5, 20, 20);
    var mercuryG = new THREE.SphereGeometry(0.3, 20, 20);
    var venusG = new THREE.SphereGeometry(0.75, 20, 20);
    var earthG = new THREE.SphereGeometry(1, 20, 20);
    var marsG = new THREE.SphereGeometry(0.4, 20, 20);
    var jupiterG = new THREE.SphereGeometry(2, 20, 20);
    var saturnG = new THREE.SphereGeometry(1.7, 20, 20);
    var uranusG = new THREE.SphereGeometry(1.4, 20, 20);
    var neptuneG = new THREE.SphereGeometry(1.3, 20, 20);
    var plutoG = new THREE.SphereGeometry(0.1, 20, 20);
    var mooneG = new THREE.SphereGeometry(0.1, 20, 20);
    var moonm1G = new THREE.SphereGeometry(0.1, 20, 20);
    var moonm2G = new THREE.SphereGeometry(0.1, 20, 20);
    var satringG = new THREE.RingGeometry(1.7, 2.5, 30);
    var uraringG = new THREE.RingGeometry(1.4, 2.2, 30);
    var ring1G = new THREE.RingGeometry(3.55, 3.65, 20);
    var ring2G = new THREE.RingGeometry(6.27, 6.37, 20);
    var ring3G = new THREE.RingGeometry(9.8, 9.9, 20);
    var ring4G = new THREE.RingGeometry(12.59, 12.69, 20);
    var ring5G = new THREE.RingGeometry(16.1, 16.2, 20);
    var ring6G = new THREE.RingGeometry(20.83, 20.93, 20);
    var ring7G = new THREE.RingGeometry(25.24, 25.34, 20);
    var ring8G = new THREE.RingGeometry(29.37, 29.47, 20);
    var ring9G = new THREE.RingGeometry(31.67, 31.77, 20);
    var asterFG = new THREE.RingGeometry(13.745, 14.045, 40);

    // And put the geometry and material together into a mesh
    sun = new THREE.Mesh(sunG, material);
    mercury = new THREE.Mesh(mercuryG, material1);
    venus = new THREE.Mesh(venusG, material2);
    earth = new THREE.Mesh(earthG, material3);
    mars = new THREE.Mesh(marsG, material4);
    jupiter = new THREE.Mesh(jupiterG, material5);
    saturn = new THREE.Mesh(saturnG, material6);
    uranus = new THREE.Mesh(uranusG, material7);
    neptune = new THREE.Mesh(neptuneG, material8);
    pluto = new THREE.Mesh(plutoG, material9);
    moone = new THREE.Mesh(mooneG, moonearth);
    moonm1 = new THREE.Mesh(moonm1G, moonmars1);
    moonm2 = new THREE.Mesh(moonm2G, moonmars2);
    satring = new THREE.Mesh(satringG, satringM);
    uraring = new THREE.Mesh(uraringG, uraringM);
    ring1 = new THREE.Mesh(ring1G, ringsM);
    ring2 = new THREE.Mesh(ring2G, ringsM);
    ring3 = new THREE.Mesh(ring3G, ringsM);
    ring4 = new THREE.Mesh(ring4G, ringsM);
    ring5 = new THREE.Mesh(ring5G, ringsM);
    ring6 = new THREE.Mesh(ring6G, ringsM);
    ring7 = new THREE.Mesh(ring7G, ringsM);
    ring8 = new THREE.Mesh(ring8G, ringsM);
    ring9 = new THREE.Mesh(ring9G, ringsM);
    asteroids = new THREE.Mesh(asterFG, asterM);


    // Tilt the mesh toward the viewer
    saturn.rotation.x = Math.PI / 5;
    saturn.rotation.y = Math.PI / 5;
    satring.rotation.x = 2.1;
    satring.rotation.y = -0.1;
    uranus.rotation.x = Math.PI / 5;
    uranus.rotation.y = Math.PI / 5;
    uraring.rotation.x = 3;
    uraring.rotation.y = -0.1;

    ring1.rotation.x = 1.571;
    ring2.rotation.x = 1.571;
    ring3.rotation.x = 1.571;
    ring4.rotation.x = 1.571;
    ring5.rotation.x = 1.571;
    ring6.rotation.x = 1.571;
    ring7.rotation.x = 1.571;
    ring8.rotation.x = 1.571;
    ring9.rotation.x = 1.571;
    asteroidField.rotation.x = 1.571;

    // Add the planets mesh to our group
    solarsystem.add(sun);

    r1.add(origin);
    r1.add(mercury);

    r2.add(origin);
    r2.add(venus);

    r3.add(origin);
    earthGr.add(earth);
    earthGr.add(moone);
    r3.add(earthGr);

    r4.add(origin);
    marsGr.add(mars);
    marsGr.add(moonm1);
    marsGr.add(moonm2);
    r4.add(marsGr);

    r5.add(origin);
    r5.add(jupiter);

    r6.add(origin);
    saturnGr.add(saturn);
    saturnGr.add(satring);
    r6.add(saturnGr);

    r7.add(origin);
    uranusGr.add(uranus);
    uranusGr.add(uraring);
    r7.add(uranusGr);

    r8.add(origin);
    r8.add(neptune);

    r9.add(origin);
    r9.add(pluto);

    solarsystem.add(r1,r2,r3,r4,r5,r6,r7,r8,r9);

    solarsystem.add(ring1);
    solarsystem.add(ring2);
    solarsystem.add(ring3);
    solarsystem.add(ring4);
    solarsystem.add(ring5);
    solarsystem.add(ring6);
    solarsystem.add(ring7);
    solarsystem.add(ring8);
    solarsystem.add(ring9);

    asteroidField.add(origin);
    asteroidField.add(asteroids);
    solarsystem.add(asteroidField);


    // Move the planets
    sun.position.set(0, 0, 0);
    mercury.position.set(-3, 0, -2);
    venus.position.set(6, 0, -2);
    moone.position.set(1, 1, -0.5);
    earthGr.position.set(-9, 0, -4);
    moonm1.position.set(0.3, 0.5, -0.5);
    moonm2.position.set(-0.3, -0.5, 0.5);
    marsGr.position.set(12, 0, -4);
    jupiter.position.set(-15, 0, -6);
    saturnGr.position.set(20, 0.0, -6);
    uranusGr.position.set(-24, 0.0, -8);
    neptune.position.set(28, 0.0, -8);
    pluto.position.set(-30, 0, -10);

    // Now add the group to our scene
    scene.add(solarsystem);
    scene.add(light);
    scene.add(light2);

}
