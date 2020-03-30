sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"logaligroup/SAPUI5/model/models",
	"sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, models, ResourceModel) {
	"use strict";

	return Controller.extend("logaligroup.SAPUI5.controller.App", {

	/*	onInit: function () {
			//set model on view
			this.getView().setModel(models.createRecipient());
			
			// set i18n model on view
			var i18nModel = new ResourceModel({
				bundleName: "logaligroup.SAPUI5.i18n.i18n"
			});
			this.getView().setModel(i18nModel, "i18n");
		},*/

		onShowHello: function () {
			
			// read text from i18n / model
			var sHello = this.getView().getModel("i18n").getResourceBundle().getText("sayHello");
			var sName = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = sHello.concat(" ").concat(sName);
			MessageToast.show(sMsg);
		}

	});
});