define(["jquery"],

	function($){
		var Controller;
	}

	function Controller(domElement, model){
		this.el = $(domElement);
		this.model = model;

		this.render();
		this.model.on("change", this.render, this);

	}
	
	Controller.prototype = {
		render: function(){
			// TODO
		}

	return Controller;
});