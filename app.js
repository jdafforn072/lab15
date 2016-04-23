var app=angular.module('lab15',[]);

app.directive('nameOutput', functions(){
    restrict: 'AE',
    templateUrl: 'partial.html'
});

app.directive('catOutput', function(){
    restrict: 'A',
    template:'<p ng-repeats="image in images">{{image.data.images}}'

});
app.directive('dogOutput', function(){
    restrict: 'A',
    template:'<p ng-repeats="image in images">{{image.data.images}}'

});
