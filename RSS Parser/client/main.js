var app = angular.module('app1.module',[]);
app.controller('myapp',function($scope,$http){ 
	$scope.data1;
	$scope.get=function(){
		 $http.get("http://www.bayt.com/live-bookmarks/all-rss.xml")
    .then(function(res,err) {
    	if(err){
    		throw err 
    	}else{
    		$scope.data1 =res;
            console.log($scope.data1);
    	} 
    });
	}

	$scope.get();

})