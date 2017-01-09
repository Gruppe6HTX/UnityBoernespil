var ani : Animator;
var sound : AudioClip;
private var enter : boolean;
 
function Start () {
    ani.enabled = false;
}

function Update(){
    if(Input.GetMouseButton(0) && enter){
        OnMouseDown();
    }
}
function OnMouseDown () {
    AudioSource.PlayClipAtPoint(sound, transform.position);
    ani.enabled = true;
    {
        yield WaitForSeconds (5);
        ani.enabled = false;

    }   
}

//Activate the Main function when player is near the door
function OnTriggerEnter (other : Collider){
    if (other.gameObject.tag == "Player") {
        enter = true;
    }
}

    //Deactivate the Main function when player is go away from door
    function OnTriggerExit (other : Collider){
        if (other.gameObject.tag == "Player") {
            enter = false;
        }
    }