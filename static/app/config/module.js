"use strict";


angular.module('app.systemSettings', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.systemSettings', {
            url: '/system-settings',
            data: {
                title: 'Developer Console  / Config / System Settings'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/config/views/system-settings.html',
                    controller: 'SystemSettingsController'
                }
            }
        })
});


angular.module('app.emailTemplates', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.emailTemplates', {
            url: '/email-templates',
            data: {
                title: 'Developer Console / Config / Email Templates'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/config/views/email-templates.html',
                    controller: 'EmailTemplatesController'
                }
            }
        })
});

angular.module('app.signInMethods', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.signInMethods', {
            url: '/sign-in-methods',
            data: {
                title: 'Developer Console  / Config / Sign-In Methods'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/config/views/sign-in-methods.html',
                    controller: 'SignInMethodsController'
                }
            }
        })
});
