#pragma strict

var mc : GameObject; // The main camera
var g: boolean = false; // Gravity
var canShoot: boolean = false;
var justShot: boolean = false;
var cc : CharacterController; // The player

function Start () {}

function Update()
{
    var distance: float;
    distance = Vector3.Distance(mc.transform.position, GetComponent.<Rigidbody>().transform.position);

    if(/*Input.GetKeyUp("mouse 0") && canShoot ||*/ Input.GetButtonUp("Fire1") && canShoot)
    {
        g = true;
        GetComponent.<Rigidbody>().AddForce(mc.transform.forward * 100); // shoot
        canShoot = false;
        justShot = true;
    }
     
    if(justShot && distance > 2)
    {
        justShot=false; // reset the justShot boolean, if the sphere is far enough
    }

    if(/*distance < 2 && !canShoot && !justShot ||*/ Input.GetButtonDown("Fire1") && !canShoot && !justShot && distance < 4)
    {
        g = false; // turns the gravity on
        canShoot = true;
        // If the player is close enough by the sphere and he didn't just shot, the sphere will be picked up.
        // If the justShot boolean wouldn't be there, you would pick up the sphere immediataly after shooting and you
        // could not throw it.
    }
     
    if(g)
    {
        GetComponent.<Rigidbody>().AddForce(Physics.gravity * GetComponent.<Rigidbody>().mass); // gravity
    }
   
    if(canShoot)
    {     
        transform.position = mc.transform.position + mc.transform.forward*5; // teleports the sphere in front of the player
        /*transform.eulerAngles = new Vector3(mc.transform.rotation.x, mc.transform.rotation.y, mc.transform.rotation.z);*/
        GetComponent.<Rigidbody>().velocity = Vector3.zero;    // Sets the velocity
        GetComponent.<Rigidbody>().angularVelocity = Vector3.zero; // and the rotation of the sphere to zero (rotation is not necessary if you work with a shere).
    }
     

}
function OnGUI () {
    GUI.Label (Rect (Screen.width/2,Screen.height/2.1,Screen.width/2,Screen.height/2), "");

    if (canShoot){
        GUI.Label (Rect (Screen.width/2 - 40, Screen.height - 100, Screen.width/2, 30), "Press 'E' to throw");
    } 
    else if (!canShoot)
    {
       // GUI.Label (Rect (Screen.width/2 - 40, Screen.height - 100, Screen.width/2, 30), "Press 'E' to pick up");
    }
}