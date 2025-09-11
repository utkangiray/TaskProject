sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'test/com/testquestion/test/integration/FirstJourney',
		'test/com/testquestion/test/integration/pages/TestsList',
		'test/com/testquestion/test/integration/pages/TestsObjectPage',
		'test/com/testquestion/test/integration/pages/QuestionsObjectPage'
    ],
    function(JourneyRunner, opaJourney, TestsList, TestsObjectPage, QuestionsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('test/com/testquestion') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTestsList: TestsList,
					onTheTestsObjectPage: TestsObjectPage,
					onTheQuestionsObjectPage: QuestionsObjectPage
                }
            },
            opaJourney.run
        );
    }
);