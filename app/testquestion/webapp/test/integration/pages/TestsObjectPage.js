sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'test.com.testquestion',
            componentId: 'TestsObjectPage',
            contextPath: '/Tests'
        },
        CustomPageDefinitions
    );
});