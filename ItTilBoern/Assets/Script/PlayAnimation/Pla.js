var ani : Animator;
var sound : AudioClip;
var enter1 : boolean;
 
function Start () {
    ani.enabled = false;
}

function Update(){
    if(Input.GetButtonDown("Fire1") && enter1){
        PlayAni();
    }
}
function PlayAni () {
    Destroy(gameObject);
    AudioSource.PlayClipAtPoint(sound, transform.position);
    ani.enabled = true;
    {
        yield WaitForSeconds (5);
        ani.enabled = false;
        enter1 = false;
        

    }   
}

//Activate the Main function when player is near the door
function OnTriggerEnter (other : Collider){
    if (other.gameObject.tag == "Axe") {
        enter1 = true;
        
    }
}
