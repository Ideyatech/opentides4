"use strict";

angular.module('app.teacher', [ 'ui.router' ] );

angular.module('app.teacher').config(function ($stateProvider) {

    $stateProvider
	    .state('app.teacher', {
	        abstract: true,
	        data: {
	            title: 'Teachers'
	        }
	    })
        
        .state('app.teacher.list', {
            url: '/teacher/list',
            data: {
                title: 'Teachers'
            },
            views: {
                "content@app": {
                    controller: 'TeacherListCtrl',
                    templateUrl: "app/teacher/views/teacher-list.html"
                }
            }
        })
        
        .state('app.teacher.profile', {
            url: '/teacher/profile',
            data: {
                title: 'Profile'
            },
            views: {
                "content@app": {
                    controller: 'TeacherProfiletCtrl',
                    templateUrl: "app/teacher/views/teacher-profile.html"
                }
            }
        });
    
});
