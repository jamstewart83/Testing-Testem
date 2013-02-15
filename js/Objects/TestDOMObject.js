/**
 * This object exists for the purposes of a test.
 */
function TestDOMObject($ele) {
	var that = this,
		fade = function(){ throw new Error("The fade function is undefined."); };

	this.$ele = $ele;

	/**
	 * Provides the ability to fade a panel depending on type
	 * @param  {[type]} type string based type fadeIn or fadeOut
	 * @return {[type]}      [description]
	 */
	fade = function(type){
		var returnObj = {};

		if(type === "fadeIn"){
			returnObj = that.$ele.fadeIn();
		} else if (type === "fadeOut"){
			returnObj = that.$ele.fadeOut();
		} else {
			throw new Error ("type " + type + " is un-supported");
		}
		return returnObj;
	};

	/**
	 * Public access to allow a fade in
	 * @return {[type]} [description]
	 */
	this.fadeIn = function(){
		return fade("fadeIn");
	};

	/**
	 * Public access to all a fade out
	 * @return {[type]} [description]
	 */
	this.fadeOut = function(){
		return fade("fadeOut");
	};


}