courseRoster.directive("alertTest", function() {
    return {
        scope: {
            alertThing:"&"
        },
        template: '<a class="btn btn-info" ng-click="alertThing({message:value})">DO IT!!</a>' +
        '<input type="text" ng-model="value">'
    }

})
