"use strict";


angular.module('app.dbSettings', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.dbSettings', {
            url: '/database-settings',
            data: {
                title: 'Database Settings'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/config/views/db-settings.html',
                    controller: 'DatabaseSettingsController'
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
                title: 'Email Templates'
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
                title: 'Sign-In Methods'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/config/views/sign-in-methods.html',
                    controller: 'SignInMethodsController'
                }
            }
        })
});
