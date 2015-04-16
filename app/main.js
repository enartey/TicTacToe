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
      // or the following to load remotely:
      // "jquery": "https://code.jquery.com/jquery-2.1.3.min"
   }
});

require([ "jquery", "model", "controller" ],
   function($, Model, Controller){
      $(function(){
         var controller;
         console.log("page loaded");

         controller = new Controller("main", new Model());
      });
   });
