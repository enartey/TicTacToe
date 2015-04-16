/*
	This file corordinates between the model and user interface to
	ensure that changes occuring on the page are reflected in the
	model and changes occuring on the model are reflected in the UI
*/
define([ "jquery" ],

	function($){
		// var Controller;

		function Controller(domElement, model){
			this.el = $(domElement);
			this.model = model;

			
			this.render();
			
			// listener for changes in the model
			this.model.on("change", this.render, this);
			this.model.on("error", this.render, this);

			// listener for changes in the UI
			this.el.on("change", "td", this.respondToChange.bind(this));
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
