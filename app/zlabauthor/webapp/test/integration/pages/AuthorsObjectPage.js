sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zlab.zlabauthor',
            componentId: 'AuthorsObjectPage',
            entitySet: 'Authors'
        },
        CustomPageDefinitions
    );
});