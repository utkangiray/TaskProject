sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        addQuestions: async function (oEvent) {
            this.oDialog ??= await this.loadFragment({
                name: "test.com.testquestion.ext.fragment.QuestionsCountDialog"
            });

            this.oDialog.open();
            MessageToast.show("Custom handler invoked.");
        },
        onCancelQuestionCount: function () {
            this.oDialog.close();
        },
        onConfirmQuestionCount: function (oEvent) {
                const oBindingContext = oEvent.getSource().getBindingContext();
                const oModel = oBindingContext.getModel();
                const testID = oBindingContext.getProperty("ID")
                const oInputField = oEvent.getSource().getParent().getContent()[0]
                const questionCount = oInputField.getValue();
                const oOperation = oModel.bindContext(`/Tests(ID=${testID},IsActiveEntity=true)/CatalogService.assignQuestionsToTest(...)`)

                
                oOperation.setParameter("questionsCounts", questionCount);
                oOperation.execute().then( async () => {
                    MessageToast.show("Questions added successfully.");
                    this.oDialog.close();
                    oModel.refresh();
                }).catch((oError) => {
                    MessageToast.show("Error adding questions: " + oError.message);
                });

             
        }
    };
});
