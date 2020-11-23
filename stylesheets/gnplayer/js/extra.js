function updateP2PCylinder(_mesh, _p1, _p2) {
    // Based on:
    // https://stackoverflow.com/questions/15316127/three-js-line-vector-to-cylinder

    var direction = new THREE.Vector3().subVectors( _p2, _p1 );
    var orientation = new THREE.Matrix4();
    /* THREE.Object3D().up (=Y) default orientation for all objects */
    orientation.lookAt(_p1, _p2, new THREE.Object3D().up);
    /* rotation around axis X by -90 degrees 
    * matches the default orientation Y 
    * with the orientation of looking Z */
    orientation.multiply(new THREE.Matrix4().set(1, 0, 0, 0,
        0, 0, 1, 0,
        0, -1, 0, 0,
        0, 0, 0, 1));
    // Recreate the geometry to make sure the length is correct
    // Can be commented if the length is fixed
    
    _mesh.geometry.dispose();
    // _mesh.geometry =  new THREE.CylinderBufferGeometry(0.6, 1.2, direction.length(), 40);
    _mesh.geometry = gnMakeBoneGeometry1(_mesh.name, direction.length(), 0.8);
  
    // _mesh.scale.set(1, 1, direction.length());

    _mesh.setRotationFromMatrix(orientation);

    var pos = new THREE.Vector3().addVectors( _p1, direction.multiplyScalar(0.5) );
    _mesh.position.set(pos.x, pos.y, pos.z);
}


var gnMakeBoneGeometry1 = function(boneName, length, scale) {
    // if (joint1Name.includes("LeftHip"))
    //     length = 400;
    return new THREE.CylinderGeometry(0.6 * scale, 1.2 * scale, length, 40);   
};