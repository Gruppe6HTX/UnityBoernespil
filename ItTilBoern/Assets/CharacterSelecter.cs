using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class CharacterSelecter : MonoBehaviour
{

    private GameObject[] characterList;
    private int index;

    private void Start()
    {
        index = PlayerPrefs.GetInt("CharacterSelected");

        characterList = new GameObject[transform.childCount];
        //fyld array med 3d modellerne
        for (int i = 0; i < transform.childCount; i++)
            characterList[i] = transform.GetChild(i).gameObject;
            
            //kan ikke ses inde i verden
            foreach (GameObject go in characterList)
                go.SetActive(false);
                

            //den første index i array
            if (characterList[index])
                characterList[index].SetActive(true);

        
    }

    public void ToggleVenstre()
    {
        //slå den model der er på nu fra
        characterList[index].SetActive(false);

        index = index - 1;
        if (index < 0)
            index = characterList.Length - 1;
        //slå den nye model til
        characterList[index].SetActive(true);
    }

    public void ToggleNext()
    {
        //slå den model der er på nu fra
        characterList[index].SetActive(false);

        index++;
        if (index == characterList.Length)
            index = 0;
        //slå den nye model til
        characterList[index].SetActive(true);
    }

    public void LoadScene()
    {
        PlayerPrefs.SetInt("CharacterSelected", index);
        SceneManager.LoadScene("testScene");
        
    }
}