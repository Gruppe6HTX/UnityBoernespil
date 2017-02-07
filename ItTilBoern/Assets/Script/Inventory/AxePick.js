#pragma strict
var onhand : Transform;

function Start () {
	
}

function Update () {
	
}
function OnMouseDown(){
    GetComponent.<Rigidbody>().useGravity=false;
    this.transform.position = onhand.position;
    
}