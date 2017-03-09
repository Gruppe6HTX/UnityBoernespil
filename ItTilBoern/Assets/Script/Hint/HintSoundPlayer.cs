using UnityEngine;
using System.Collections;

public class AudioPlay : MonoBehaviour
{

    public AudioClip myclip;

    // Use this for initialization
    void Start()
    {
        this.gameObject.AddComponent<AudioSource>();
        this.GetComponent<AudioSource>().clip = myclip;
        this.GetComponent<AudioSource>().Play();
    }

    void Update()
    {
        if (Input.GetButtonDown("Fire2"))
        {
            this.GetComponent<AudioSource>().Play();
        }
    }
}