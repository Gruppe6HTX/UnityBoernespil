using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AxePick : MonoBehaviour {

    void Start()
    {

    }
    void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.tag == "Part")
        {

            collision.transform.parent = transform;

        }
    }
}

