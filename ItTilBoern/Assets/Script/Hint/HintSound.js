
var sound : AudioClip;
var Hint : boolean;
 
function Start () {
    Hint = false;
    var audio: AudioSource = GetComponent.<AudioSource>();
    
}

function Update(){
    if(Input.GetButtonDown("Fire1") && Hint){
        GetComponent.<AudioSource>().Play();
        Hint = false;
    }
}
  

//Activate the Main function when player is near the door
function OnTriggerEnter (other : Collider){
    if (other.gameObject.tag == "Player") {
        Hint = true;
    }
    }