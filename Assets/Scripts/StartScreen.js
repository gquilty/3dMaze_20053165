#pragma strict


function Start () {

}

function OnGUI () {
	if (GUI.Button (Rect (150,100,300,150), "START GAME MATEY")) {
		Application.LoadLevel("3DMaze");;
	}
	
	if (GUI.Button (Rect (150,400,300,150), "The Capn's Log")) {
		Application.LoadLevel("Credits");;
		
	}
	}
	
function Update () {

   }
 
