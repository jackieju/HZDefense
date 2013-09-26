var prefab : GameObject;
private var pen_head_using : GameObject;
private var all_inst : ArrayList;

	
function Start(){
	all_inst = ArrayList(30);
//	prefab = Instantiate(pen, Camera.main.ScreenToWorldPoint(Vector3(Input.mousePosition.x, Input.mousePosition.y, 10)), Quaternion.identity);

}

//var Switch : boolean;
function Update () {
	
	Debug.Log("all_inst size"+ all_inst.Count);

//	if (Switch) {
//	if(Input.GetMouseButton(0))
	if (pen_head_using){
		var curScreenSpace = Vector3(Input.mousePosition.x, Input.mousePosition.y, 10); 
		var curPosition = Camera.main.ScreenToWorldPoint(curScreenSpace);
		pen_head_using.transform.position= curPosition;
	}
//	}
	if (Input.GetButtonDown("Fire1")) {
//		Switch = true;
		pen_head_using = Instantiate(prefab, Camera.main.ScreenToWorldPoint(Vector3(Input.mousePosition.x, Input.mousePosition.y, 10)), Quaternion.identity);
		all_inst.Add(pen_head_using);

	}
	if (Input.GetButtonUp("Fire1")) {
		pen_head_using = null;
//		Switch = false;
//		Destroy(prefab);
	}
	Debug.Log("tail render:");
}