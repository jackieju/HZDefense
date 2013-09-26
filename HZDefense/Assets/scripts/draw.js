#pragma strict


var ballPrefab : GameObject;
// The number of balls that will be created but deactivated up front.
var numberOfBallsToPreInstantiate = 7;
private var ballPool : GameObjectPool;


function Start () {
	Debug.Log("OnPreRender");

}
	var c1 : Color = Color.white;
	var c2 : Color = Color.white;
	 
	var line : GameObject;
	 
	var lengthOfLineRenderer : int = 5;

function Update () {

	if (Input.touchCount >= 1){
		Debug.Log("touchCount="+Input.touchCount);
 		var lineRenderer : LineRenderer = line.AddComponent(LineRenderer);
		     lineRenderer.SetColors(c1, c2);
		     lineRenderer.SetWidth(0.2,0.2);
		     lineRenderer.SetVertexCount(lengthOfLineRenderer);
		     lineRenderer.SetPosition(0, gameObject.transform.position);
	}
	 
//	var touchCount : int = 0;
	 
//	if (Input.GetMouseButtonDown (0)) {
//	 
//	   touchCount++;
//	 
//	}
	 
//	if (Input.touchCount == 1) {
//	 
//		if (Input.GetTouch(0).phase == TouchPhase.Moved) {
//		 
//		     var lineRenderer : LineRenderer = line.AddComponent(LineRenderer);
//		     lineRenderer.SetColors(c1, c2);
//		     lineRenderer.SetWidth(0.2,0.2);
//		     lineRenderer.SetVertexCount(lengthOfLineRenderer);
//		     lineRenderer.SetPosition(0, gameObject.transform.position);
//		 
//		}
//	 
//	}   
	 
	
}