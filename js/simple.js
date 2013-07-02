var SIMPLE = (function(module){
	
	module.DoIt = function(resultObject){
		resultObject.prepend(Date() + "<br/>");
	}
	//comment for git
	return module;
}(SIMPLE || {}));