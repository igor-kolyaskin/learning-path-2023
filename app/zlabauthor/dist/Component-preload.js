//@ui5-bundle zlab/zlabauthor/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"zlab/zlabauthor/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("zlab.zlabauthor.Component",{metadata:{manifest:"json"}})});
},
	"zlab/zlabauthor/i18n/i18n.properties":'# This is the resource bundle for zlab.zlabauthor\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Authors\n\n#YDES: Application description\nappDescription=A Fiori application.',
	"zlab/zlabauthor/manifest.json":'{"_version":"1.49.0","sap.app":{"id":"zlab.zlabauthor","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.9.5","toolsId":"54af47a8-0b76-43fa-9499-3ac8f312821b"},"dataSources":{"mainService":{"uri":"library/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"zlab-zlabauthor-inbound":{"signature":{"parameters":{},"additionalParameters":"allowed"},"semanticObject":"Authors","action":"manage","title":"flpTitle","subTitle":"flpSubtitle","icon":"sap-icon://customer","indicatorDataSource":{"dataSource":"mainService","path":"/dynamic_dest/zlablibrary-app-srv/library/Authors/$count","refresh":10}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.113.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"zlab.zlabauthor.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"AuthorsList","target":"AuthorsList"},{"pattern":"Authors({key}):?query:","name":"AuthorsObjectPage","target":"AuthorsObjectPage"},{"pattern":"Authors({key})/book({key2}):?query:","name":"BooksObjectPage","target":"BooksObjectPage"}],"targets":{"AuthorsList":{"type":"Component","id":"AuthorsList","name":"sap.fe.templates.ListReport","options":{"settings":{"entitySet":"Authors","variantManagement":"Page","navigation":{"Authors":{"detail":{"route":"AuthorsObjectPage"}}}}}},"AuthorsObjectPage":{"type":"Component","id":"AuthorsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"entitySet":"Authors","navigation":{"book":{"detail":{"route":"BooksObjectPage"}}}}}},"BooksObjectPage":{"type":"Component","id":"BooksObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"entitySet":"Books"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"caplibrary"}}'
}});
