#pragma strict
var onhand : Transform;
var enter : boolean;

function Start () {
	
}

function Update () {
    OnMouseDown();
    /*OnMouseUp();*/
}
function OnMouseDown(){
    if(Input.GetButtonDown("Fire1") && enter){
    GetComponent.<Rigidbody>().useGravity=false;
    this.transform.position = onhand.position;
    this.transform.rotation = onhand.rotation;
    this.transform.parent = GameObject.Find("FPSController").transform;
    this.transform.parent = GameObject.Find("FirstPersonCharacter").transform;
    enter = false;
}
    
}

/*function OnMouseUp(){
    if(Input.GetButtonUp("Fire1") && enter){
        this.transform.parent = null;
        GetComponent.<Rigidbody>().useGravity = true;
    }
}*/

function OnTriggerEnter (other : Collider){
    if (other.gameObject.tag == "Player") {
        enter = true;
    }
}