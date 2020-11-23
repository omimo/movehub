function set_the_scene4443() {
			
    // Add the light            
    light = new THREE.PointLight(0xffffff, 0.9, 0);
    light.position.set(0, 160, 40);
    scene.add(light);

    // Create a grid for the floor
    var size = 200,
        step = 20;

    // Draw the plane
    var planeGeometry = new THREE.PlaneGeometry(size * 2, size * 2);
    var planeMaterial = new THREE.MeshPhongMaterial({
        color: 0x444444,
        emissive: 0x000000,
        specular: 0x111111,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6
    });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.position.set(0, 0, 0);
    plane.rotation.set(math.pi / 2, 0, 0);
    scene.add(plane);

    //Draw the lines
    var lineGeometry = new THREE.Geometry();
    var lineMaterial = new THREE.LineBasicMaterial({
        color: 0x555555,
        linewidth: 1.2
    });
    for (var i = -size; i <= size; i += step) {
        lineGeometry.vertices.push(new THREE.Vector3(-size, -0.04, i));
        lineGeometry.vertices.push(new THREE.Vector3(size, -0.04, i));
        lineGeometry.vertices.push(new THREE.Vector3(i, -0.04, -size));
        lineGeometry.vertices.push(new THREE.Vector3(i, -0.04, size));
    }

    var line = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(line);
}

function add_basic_lights() {
    // Add the light            
    var light = new THREE.HemisphereLight(0xffffff, 0x000000, 0.8);            
    scene.add(light);
}

function add_floor_theo() {
    var textureLoader = new THREE.TextureLoader();

    var texture = textureLoader.load('floor2.jpg', function(tt) {    
    });

    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat = new THREE.Vector2(1,1.66);


    var material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        specular: 0xffffff,
        shininess: 100,
        map: texture,

    });
    var geometry = new THREE.CubeGeometry(950, 950, 5);

    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = -2;
    mesh.rotation.x = -Math.PI / 2;
    scene.add(mesh);
}

$(window).on("resize", function(e) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
});

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');            
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
