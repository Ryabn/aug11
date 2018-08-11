function load(){
    AOS.init({offset: 100});
    
}
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  
document.addEventListener('aos:in', ({ detail }) => {
    console.log(detail.id);
    setTimeout(function(){
    switch(detail.id){
        case "event-1":
            document.getElementById('event-1').pseudoStyle("after","box-shadow","18px -15px 0px orange");
            break;
        case "event-2":
            document.getElementById('event-2').pseudoStyle("after","box-shadow","18px -15px 0px #273e6b");
            break;
        case "event-3":
            document.getElementById('event-3').pseudoStyle("after","box-shadow","18px -15px 0px #1DA1F2");
            break;
        case "event-4":
            document.getElementById('event-4').pseudoStyle("after","box-shadow","18px -15px 0px #ff5864");
            break;
    }
    }, 1000);
});
document.addEventListener('aos:out', ({ detail }) => {
    switch(detail.id){
        case "event-1":
            document.getElementById('event-1').pseudoStyle("after","box-shadow","18px -15px 0px transparent");
            break;
        case "event-2":
            document.getElementById('event-2').pseudoStyle("after","box-shadow","18px -15px 0px transparent");
            break;
        case "event-3":
            document.getElementById('event-3').pseudoStyle("after","box-shadow","18px -15px 0px transparent");
            break;
        case "event-4":
            document.getElementById('event-4').pseudoStyle("after","box-shadow","18px -15px 0px transparent");
            break;
    }
});
var UID = {
	_current: 0,
	getNew: function(){
		this._current++;
		return this._current;
	}
};

HTMLElement.prototype.pseudoStyle = function(element,prop,value){
	var _this = this;
	var _sheetId = "pseudoStyles";
	var _head = document.head || document.getElementsByTagName('head')[0];
	var _sheet = document.getElementById(_sheetId) || document.createElement('style');
	_sheet.id = _sheetId;
	var className = "pseudoStyle" + UID.getNew();
	
	_this.className +=  " "+className; 
	
	_sheet.innerHTML += " ."+className+":"+element+"{"+prop+":"+value+"}";
	_head.appendChild(_sheet);
	return this;
};