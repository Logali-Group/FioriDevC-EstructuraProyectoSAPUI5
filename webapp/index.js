/*sap.ui.define([
	"sap/ui/core/mvc/XMLView"
	],
	function (XMLView) {
	  
	  XMLView.create({
	     viewName: "logaligroup.SAPUI5.view.App"	
	  }).then(function (oView){
	  	oView.placeAt("content");
	  });
	});*/
sap.ui.define([
	"sap/ui/core/ComponentContainer"
	],
	function (ComponentContainer) {
	  new ComponentContainer({
	  	 name: "logaligroup.SAPUI5",
	  	 settings : {
	  	 	id : "logaligroup"
	  	 },
	  	 async: true
	  }).placeAt("content");
	});
