using UnityEngine;
using System.Collections;

public class ToolBar : MonoBehaviour
{
    public int toolbarInt = 0;
    public string[] toolbarStrings = new string[] { "Toolbar1", "Toolbar2", "Toolbar3" };
    void OnGUI()
    {

            GUI.Label(new Rect(Screen.width / 2 - 75, Screen.height - 100, 150, 30));
            toolbarInt = GUI.Toolbar(new Rect(25, 25, 250, 30), toolbarInt, toolbarStrings);
        
        
        
    }
}