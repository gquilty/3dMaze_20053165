#pragma strict


public var guiTextureMap: Texture;
public var counter: boolean;
public var soundCounter: int;
public var timeCount : float;
public var seconds : int;
 
function Start () {

 counter = false;

 timeCount = 0;

 AudioListener.pause = false;

 soundCounter = 0;
}

function Update () {

Debug.Log(soundCounter);

 timeCount = timeCount + (Time.deltaTime);
    seconds = timeCount;
    
    

 if(Input.GetKey(KeyCode.P) )
  {
    
    
    counter = true;
    timeCount = 0;
       
  }

 if (seconds >= 10)
   {
   timeCount = 0;
   counter = false;
   }

  if( counter == false)
    {
    gameObject.guiTexture.texture = null;
    
    }
    
    if(counter == true)
    {
    gameObject.guiTexture.texture = guiTextureMap;
    
    }
    
    
    if(Input.GetKey(KeyCode.M) )
    {
    AudioListener.pause = true;
    }
    
    if(Input.GetKey(KeyCode.N) )
    {
    AudioListener.pause = false;
    }
   
    
}

