/**
 * This object exists for the purposes of a test.
 */
function TestObject() {
	var that = this;

	this.forename = "";
	this.surname = "";

	this.name = "";

	this.sayMessage = function(message){
		return message;
	};

	this.sayName = function (){
		return this.sayFullName();		
	};

	this.sayFullName = function(){
		var name = that.name || that.forename + " " + that.surname ;

		return that.sayMessage(name);
	};
}