'use strict';

describe('Controller: contactListResponsive.contactListResponsive', function () {

    // load the controller's module
    beforeEach(module('testProjectApp'));

    var ctrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('contactListResponsiveCtrl', {
            $scope: scope
        });
    }));

    it('should be defined', function () {
        expect(ctrl).toBeDefined();
    });
});
