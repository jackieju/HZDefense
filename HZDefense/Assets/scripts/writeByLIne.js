var prefab : GameObject;
private var pen_head_using : GameObject;
private var all_inst : ArrayList;
private var last_pos : Vector3;
//private var vertextCount : int = 30;
// line render
	var c1 : Color = Color.yellow;
	var c2 : Color = Color.red;
private	var count: int = 0;


 var font:Font;
 var big_font: Font;

function removeAllLines(){
var i:int;
	for ( i = 0; i< all_inst.Count; i++){
		var obj : GameObject = all_inst[i] as GameObject;
		Destroy(obj);
		
	}
	all_inst.Clear();
}

function Start(){
//	var lineRenderer : LineRenderer = prefab.GetComponent(LineRenderer);
//	lineRenderer.SetWidth(0, 0);
//	lineRenderer.SetVertexCount(0);
//	lineRenderer.SetPosition(0, Vector3(10,10,0));

	all_inst = ArrayList(30);
//	var lineRenderer : LineRenderer = pen_head_using.GetComponent(LineRenderer);
//	   var lineRenderer : LineRenderer = gameObject.AddComponent(LineRenderer);
//	   lineRenderer.material = new Material (Shader.Find("Particles/Additive"));
//		     lineRenderer.SetColors(c1, c2);
//		     lineRenderer.SetWidth(1, 1);
//		     lineRenderer.SetVertexCount(2000);
//		     lineRenderer.useWorldSpace = true;
//		     lineRenderer.SetPosition(0, gameObject.transform.position);

/* test
	 var lineRenderer : LineRenderer = gameObject.AddComponent(LineRenderer);
		 lineRenderer.material = new Material (Shader.Find("Particles/Additive"));
		 lineRenderer.SetColors(c1, c2);
		 lineRenderer.SetWidth(0.2,0.2);
		 lineRenderer.SetVertexCount(100);
		 lineRenderer.SetPosition(0, Vector3(1,10,0));
		 */
	
}
function create_line_render(){
	pen_head_using = Instantiate(prefab, Camera.main.ScreenToWorldPoint(Vector3(Input.mousePosition.x, Input.mousePosition.y, 10)), Quaternion.identity);
	var lineRenderer : LineRenderer = pen_head_using.GetComponent(LineRenderer);
	lineRenderer.SetVertexCount(0);
	lineRenderer.SetWidth(1, 1);
	lineRenderer.useWorldSpace = true;
//	lineRenderer.SetPosition(0, Vector3(10,10,0));
//	lineRenderer.SetPosition(1, Vector3(0,10,0));
	count = 0;
	all_inst.Add(pen_head_using);
	last_pos = Input.mousePosition;
		
}
function lr(){
	var lineRenderer : LineRenderer = pen_head_using.GetComponent(LineRenderer);
	return lineRenderer;
}
function pen_down(){
	var current_pos : Vector3 = Input.mousePosition;
	if (last_pos != null ){
//		Debug.Log("distance = "+ (current_pos - last_pos).magnitude);
	}
	if (last_pos != null && (current_pos - last_pos).magnitude > 1){
		Debug.Log("pen down" + (current_pos - last_pos).magnitude);
//	if ( count < vertextCount ){
		var lineRenderer : LineRenderer = pen_head_using.GetComponent(LineRenderer);

		
		var curScreenSpace = Vector3(Input.mousePosition.x, Input.mousePosition.y, 10); 
		var curPosition = Camera.main.ScreenToWorldPoint(curScreenSpace);
		lineRenderer.SetVertexCount(count+1);
		lineRenderer.SetPosition(count, curPosition);
//		lineRenderer.SetPosition(count, gameObject.transform.position);
		count++;
		Debug.Log("count="+count);
	
//	}
	}
	last_pos = Input.mousePosition;
}
function Update () {
	/*var lineRenderer : LineRenderer = GetComponent(LineRenderer);
	 for(var i : int = 1; i < 100; i++) {
			var pos : Vector3 = Vector3(i * 0.5, Mathf.Sin(i + Time.time), 0);
			lineRenderer.SetPosition(i, pos);
		}*/
		
//	Debug.Log("all_inst size"+ all_inst.Count);
//	if (Input.touchCount >= 1){
//		if (Input.GetTouch(0).phase == TouchPhase.Moved) {
//	if (Input.GetMouseButton(0))
			if (pen_head_using){
				pen_down();
			}
//		}
//	}
	if (Input.GetButtonDown("Fire1")) {
		Debug.Log("create line render" + all_inst.Count);
		create_line_render();

//		pen_down();
	
//		pen_down();
//		pen_down();
//		pen_down();
//		pen_down();
//		pen_down();
//		pen_down();
//		pen_down();

	}
	if (Input.GetButtonUp("Fire1")) {
		pen_head_using = null;
		count = 0;
	}
}
function OnGUI(){
//	var blankStyle : GUIStyle=new GUIStyle();; // the blank style make button transparent
		var style : GUIStyle = new GUIStyle();
		style.font = font;
		style.normal.textColor = Color.red;
		//style.fontSize = 20;
		//GUI.Box(Rect(0, 0, Screen.width, Screen.height), "");
		
		var f = GUI.skin.label.font ;
		GUI.skin.label.font = font;
		
	if (GUI.Button(new Rect(0, 0, 112, 66), "--s清除s--", style)){
		removeAllLines();	
	}
	
	var big_font_style : GUIStyle = new GUIStyle();
	big_font_style.font = big_font;
	big_font_style.normal.textColor = Color.yellow;
	GUI.Button(new Rect(50, 50, 300, 500), "尊", big_font_style);
		
//		 if (GUI.Button(CentralController.HDRect(100, 210, 112, 66), "", blankStyle)){
//	 	Application.LoadLevel("main");
//	 	
//	 }
}