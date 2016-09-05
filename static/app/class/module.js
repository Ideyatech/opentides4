"use strict";

angular.module('app.class', [ 'ui.router', 'datatables', 'datatables.bootstrap']);

angular.module('app.class').config(function ($stateProvider) {

    $stateProvider
	    .state('app.class', {
	        abstract: true,
	        data: {
	            title: 'Classes'
	        }
	    })
        
        .state('app.class.list', {
            url: '/class/list',
            data: {
                title: 'Classes'
            },
            views: {
                "content@app": {
                    controller: 'ClassListCtrl',
                    templateUrl: "app/class/views/class-list.html"
                }
            }
        })
        
        .state('app.class.info', {
            url: '/class/info',
            data: {
                title: 'Class Information'
            },
            views: {
                "content@app": {
                    controller: 'ClassInfoCtrl',
                    templateUrl: "app/class/views/class-info.html"
                }
            }
        });
    
});
