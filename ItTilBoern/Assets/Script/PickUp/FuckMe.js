var hitObject : GameObject;

function Update()
{
    if(Input.GetMouseButtonDown(0))  
    {
     
        var hit : RaycastHit;
     
        // Cast a ray
     
        if (Physics.Raycast(Camera.main.ScreenPointToRay(Input.mousePosition), hit))
        {
     
            if(hitObject.GetComponent(Collider).tag == "Dick")
            {
     
                hitObject = hit.GetComponent(Collider).gameObject;
                hitObject.transform.parent = gameObject.transform;
            }
        }
    }
}
     
if(Input.GetMouseButtonUp(0)&& hitObject != null) // This will release the object 
{
    hitObject.transform.parent = null;
    hitObject = null;
}
