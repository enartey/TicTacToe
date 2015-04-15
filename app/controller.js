define(["jquery"],

	function($){
		var Controller;
	});

	function Controller(domElement, model){
		this.el = $(domElement);
		this.model = model;

		this.render();
		this.model.on("change", this.render, this);
		this.model.on("error", this.render, this);
		this.el.on("change", )
	}
	
	Controller.prototype = {
		render: function(){
			// TODO
		}
	}
	return Controller;
});
