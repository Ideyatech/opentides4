"use strict";

angular.module('app.student', [ 'ui.router', 'datatables', 'datatables.bootstrap']);

angular.module('app.student').config(function ($stateProvider) {

    $stateProvider
	    .state('app.student', {
	        abstract: true,
	        data: {
	            title: 'Students'
	        }
	    })
        
        .state('app.student.list', {
            url: '/student/list',
            data: {
                title: 'Students'
            },
            views: {
                "content@app": {
                    controller: 'StudentListCtrl',
                    templateUrl: "app/student/views/student-list.html"
                }
            }
        })
        
        .state('app.student.profile', {
            url: '/student/profile',
            data: {
                title: 'Profile'
            },
            views: {
                "content@app": {
                    controller: 'StudentProfiletCtrl',
                    templateUrl: "app/student/views/student-profile.html"
                }
            }
        });
    
});
