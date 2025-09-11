sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        addQuestions: async function (oEvent) {
            MessageToast.show("Custom handler invoked.");
         		this.oDialog ??= await this.loadFragment({
				name: "test.com.testquestion.ext.fragment.QuestionsCountDialog"
			});

			this.oDialog.open();
        },
        onCloseDialog: function () {
            if (this.oDialog) {
                this.oDialog.then(function (oDialog) {
                    oDialog.close();
                });
            }
        },
        onSubmitDialog: function (oEvent) {
            oEvent.preventDefault();
            const oBindingContext = oEvent.getSource().getBindingContext()
            const dialogInputFields = oEvent.getSource().getParent().getContent()
            const questionsCount = dialogInputFields[1]._getInputValue()
            const tests = oBindingContext.getValue()

            const oModel = oBindingContext.getModel()
            const oOperation = oModel.bindContext(`/Tests(ID=${tests.ID},IsActiveEntity=true)/CatalogService.assignQuestionsToTest(...)`)
            oOperation.setParameter("questionsCounts", Number(questionsCount));
            oOperation.execute().then(async function () {
                const oResults = oOperation.getBoundContext().getObject()
                if (oResults && oResults.value[0] && oResults.value) {
                    MessageBox.information(oResults.value)
                }
                await oBindingContext.refresh()

            }.bind(this), function (oError) {
                MessageBox.error(oError.message)
            })
            oEvent.getSource().getParent().close()
        }
    };
});
