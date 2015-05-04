#pragma strict


function Start () {

GameObject.Find("WinText").guiText.text = ("Ye have found all your booty matey\n Congratulations!");
 
}

function Update () {


}
function OnGUI () {

	if (GUI.Button (Rect (250,450,300,150), "Main Menu")) {
		Application.LoadLevel("StartScene");;
	}
}