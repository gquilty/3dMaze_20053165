#pragma strict

public var timeCount : float;
public var seconds : int;
public var minutes : int;

function Start () {

 timeCount = 0;
 
}

function Update () {

if(minutes==5)
{
  Application.LoadLevel("LoseScreen");
}

 timeCount = timeCount + (Time.deltaTime);
 
 seconds = timeCount;
 if(seconds > 59) {seconds =0; minutes+=1; timeCount = 0;}
 var ss1:int;
 var ss2:int;
 var mm1:int;
 var mm2:int;
 
 if(seconds < 10) ss1 = 0; else ss1=seconds/10;
 ss2 = seconds%10;
 
 if(minutes < 10) mm1 = 0; else mm1=minutes/10;
 mm2 = minutes%10;
 
 
 guiText.text = mm1 +"" + mm2 +":" + ss1 +""+ ss2;
 
 
 
}