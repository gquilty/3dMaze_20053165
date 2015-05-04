#pragma strict

//var color:Color;

function Start () {
//GameObject.Find("WinText").guiText.material.color = color;
GameObject.Find("WinText").guiText.text = ("Ye didn't make it off the boat you landlubber\n Better luck next time!");
 
}

function Update () {


}
function OnGUI () {

	if (GUI.Button (Rect (250,450,300,150), "Main Menu")) {
		Application.LoadLevel("StartScene");;
	}
}