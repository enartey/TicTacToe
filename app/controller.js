define([ "jquery" ],

	function($){
		// var Controller;

		function Controller(domElement, model){
			this.el = $(domElement);
			this.model = model;

			this.render();
			this.model.on("change", this.render, this);
			this.model.on("error", this.render, this);

			// If we end up using select and input in our work this will catch changes from the webpage
			// this.el.on("change", "input", this.respondToChange.bind(this));
			// this.el.on("change", "select", this.respondToChange.bind(this));
		}

		Controller.prototype = {
			render: function(){
				// set the HTML of element to equal result of applying model
				this.el.html(this.model);
			},
			respondToChange: function(ev){
				var el, i, j;
				el = $(ev.currentTarget);
				i = parseInt(el.id[ 0 ]);
				j = parseInt(el.id[ 1 ]);
				this.model.set(i, j);
			}
		};

		return Controller;
	});
