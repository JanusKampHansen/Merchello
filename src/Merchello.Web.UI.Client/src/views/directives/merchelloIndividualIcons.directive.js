angular.module('merchello.directives').directive('merchelloAddIcon', function(localizationService) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            doAdd: '&',
        },
        template: '<span class="merchello-icons">' +
        '<a class="merchello-icon merchello-icon-add" ng-click="doAdd()" title="{{title}}" prevent-default>' +
        '<i class="icon icon-add"></i>' +
        '</a></span>',
        link: function(scope, elm, attr) {
            scope.title = '';
            localizationService.localize('general_add').then(function(value) {
                scope.title = value;
            });
        }
    }
});

angular.module('merchello.directives').directive('merchelloEditIcon', function(localizationService) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            doEdit: '&',
        },
        template: '<span class="merchello-icons">' +
           '<a class="merchello-icon merchello-icon-edit" ng-click="doEdit()" title="{{title}}" prevent-default>' +
            '<i class="icon icon-edit"></i>' +
            '</a></span>',
        link: function(scope, elm, attr) {
            scope.title = '';
            localizationService.localize('general_edit').then(function(value) {
                scope.title = value;
            });
        }
    }
});

angular.module('merchello.directives').directive('merchelloDeleteIcon', function(localizationService) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            doDelete: '&',
        },
        template: '<span class="merchello-icons">' +
        '<a class="merchello-icon merchello-icon-delete" ng-click="doDelete()" title="{{title}}" prevent-default>' +
        '<i class="icon icon-trash"></i>' +
        '</a></span>',
        link: function(scope, elm, attr) {
            scope.title = '';
            localizationService.localize('general_edit').then(function(value) {
                scope.title = value;
            });
        }
    }
});

angular.module('merchello.directives').directive('merchelloProvincesIcon', function(localizationService) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            showProvinces: '=',
            doProvinces: '&',
        },
        template: '<span class="merchello-icons">' +
        '<a class="merchello-icon merchello-icon-provinces" data-ng-show="showProvinces" ng-click="doProvinces()" title="{{title}}" prevent-default>' +
        '<i class="icon icon-globe-alt"></i>' +
        '</a></span>',
        link: function(scope, elm, attr) {
            scope.title = '';
            localizationService.localize('merchelloShippingMethod_adjustIndividualRegions').then(function(value) {
                scope.title = value;
            });
        }
    }
});

