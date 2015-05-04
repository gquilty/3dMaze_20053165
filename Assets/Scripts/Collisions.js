#pragma strict

public var score: int;
public var noOfCoins: float;
public var buttonOverClip : AudioClip;
public var timeCount1 : float;
public var seconds1 : int;
 

function OnControllerColliderHit(hit : ControllerColliderHit)
{
     
     if (hit.collider.gameObject.tag == "Coin0"){
     Destroy(hit.collider.gameObject);
     Debug.Log(" Hit coin"); 
     score+=10;
     GameObject.Find("Score").guiText.text = " Score: " + score ;
     noOfCoins+=1;
     GameObject.Find("Notification").guiText.text = "   You have collected " + noOfCoins + " of 5 coins" ;  
     audio.PlayOneShot(buttonOverClip); 
     timeCount1 = 0;
     }
     
   
      if (hit.collider.gameObject.tag == "Finish")
      {
       Application.LoadLevel("WinScreen");
       Debug.Log("Hit Island");
      }
      
   
}


function Start () {

score = 0; 
GameObject.Find("Score").guiText.text = " Score: " + score ;
noOfCoins = 0;
GameObject.Find("Notification").guiText.text = "Collect five coins and escape the maze with your\n loot before the ship sinks in five minutes!!\n 'P' Brings up your Map \n 'M' Will mute sound, N will Unmute" ;
timeCount1 = 0;





}

function Update () {

        if(noOfCoins >= 5)
        {
          Destroy(GameObject.Find("exitDoor"));
         
        }
    
    timeCount1 = timeCount1 + (Time.deltaTime);
    seconds1 = timeCount1;
    
    
    if (seconds1 == 10)
     {
      GameObject.Find("Notification").guiText.text = "" ;
      timeCount1 = 0;
     }
     
     
}