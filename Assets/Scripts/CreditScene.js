#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {

	if (GUI.Button (Rect (270,475,300,100), "Main Menu")) {
		Application.LoadLevel("StartScene");;
	}
	}