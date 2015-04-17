/*
	Main file that loads things. 
	Called from require.js
*/

require.config({
   // baseUrl is automatically set to the directory where this main.js file is.
   // Or we can set it in this config:
   baseUrl: "app",
   // This way one can call on jquery and libs directly
   paths: {
      "lib": "../lib",
      "jquery": "../lib/jquery"
   },
});

require(["jquery","model","controller"],
   function($, Model, Controller){
      var model, controller;
      $(function(){
         console.log("page loaded");

         model = new Model();
         console.log("model: ", model);

         controller = new Controller("main", model);
      });
   });

