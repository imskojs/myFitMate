angular.module('myFitMate')
.factory('Utility', function(
  Data, $http, $ionicLoading, $ionicScrollDelegate, $q, $state, $stateParams, 
  $timeout 
){

var serverUrl = "http://192.168.0.65:1337";

  //Sub header menu scroller
var subHeaderMenuScroller = function(arrayData, handle ,$index, $event, centerAtIndex){
  var menuLength = arrayData.length;
  var menuPixelLength = angular.element('.category-ul').prop('offsetWidth');
  var pixelPerItem = menuPixelLength / menuLength;
  var currentTarget = angular.element($event.currentTarget);
  var currentId = currentTarget.attr('id');

  currentTarget.siblings().removeClass('active');
  currentTarget.addClass('active');

  var pixelLocation = pixelPerItem * ($index - centerAtIndex);
  $ionicScrollDelegate.$getByHandle(handle).scrollTo(pixelLocation, 0, true);
};
///////////////////////////////////////////////////////////////////
//////////////////////////// General //////////////////////////////
///////////////////////////////////////////////////////////////////
var goTo = function (state, paramsObj){
  arguments.length === 1 ? $state.go(state) : $state.go(state, paramsObj);
};

var loadingOff = function (){
  $ionicLoading.hide();
};

var loadingOn = function (){
  $ionicLoading.show({
    templateUrl: 'states/misc/loading.html'
  });
};

var errorMessage = function (message){
  $ionicLoading.show({
    template: '<h2 class="error-message" style="color:red;">'+ message +'<h2>',
    duration: 1500 
  });
};

var warningMessage = function (message){
  $ionicLoading.show({
    template: '<h2 class="error-message" style="color:#f14182;">'+ message +'<h2>',
    duration: 1500,
  });
}

var getStateParam = function (paramName){
  return $stateParams[paramName]
}

//////////////////////////////////////////////////////////////////
//////////////////// Communication to server /////////////////////
//////////////////////////////////////////////////////////////////
// Pre
var findOne = function ($requestUrl, queryObj){
  // Chrome preserves order in object if non-numeric key
  var queryString = queryStringify(queryObj);

  var deferred = $q.defer();
  $http({
    url: serverUrl + $requestUrl + '/' + queryString,
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  })
  .success(function(data){
    deferred.resolve(data);
  })
  .error(function(data){
    deferred.reject(data);
  })
  return deferred.promise;
};

var find = function ($requestUrl, queryObj){
  var deferred = $q.defer();
  $http({
    url: serverUrl + $requestUrl,
    method: 'GET',
    params: queryObj,
    headers: {'Content-Type': 'application/json'}
  })
  .success(function(data){
    deferred.resolve(data);
  })
  .error(function(data){
    deferred.reject(data);
  })
  return deferred.promise;
}

var create = function ($requestUrl, data) {
  var deferred = $q.defer();
  $http({
    url: serverUrl + $requestUrl,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data 
  })
  .success(function(data) {
    deferred.resolve(data);
  })
  .error(function(data) {
    deferred.reject(data);
  });
  return deferred.promise;
}

var update = function ($requestUrl, findObj, updateObj){
  var queryString = queryStringify(findObj);

  var deferred = $q.defer();
  $http({
    url: serverUrl + $requestUrl + '/' + queryString,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    data: updateObj 
  })
  .success(function(data) {
    deferred.resolve(data);
  })
  .error(function(data) {
    deferred.reject(data);
  });
  return deferred.promise;
}

var destroy = function ($requestUrl, findObj){
  var queryString = queryStringify(findObj);

  var deferred = $q.defer();
  $http({
    url: serverUrl + $requestUrl + '/' + queryString,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .success(function(data) {
    deferred.resolve(data);
  })
  .error(function(data) {
    deferred.reject(data);
  });
  return deferred.promise;
}


////////////////////////////////////////////////////////////
///////////////////  Blog Post specific ////////////////////
////////////////////////////////////////////////////////////
var resetPost = function (post) {
  post.title = null;
  post.content = null;
  post.category = null;
  post.createdBy = null;
  post.viewCount = 0;
};

///////////////////////   OBJECT   //////////////////////
var Post = {
  find: find.bind(null, '/blog/list'),
  findNew: find.bind(null, '/blog/list/new'),
  findOld: find.bind(null, '/blog/list/old'),
  findOne: findOne.bind(null, '/blog/post'),
  create: create.bind(null, '/blog/post/create'),
  update: update.bind(null, '/post'),
  destroy: destroy.bind(null, '/post'),
  resetPost: resetPost
};

var Comment = {
  create: create.bind(null, '/comment'),
  destroy: destroy.bind(null, '/comment')
}

return {
  Post: Post,
  Comment: Comment,
  // General //
  goTo: goTo,
  loadingOff: loadingOff,
  loadingOn: loadingOn,
  errorMessage: errorMessage,
  warningMessage: warningMessage,
  getStateParam: getStateParam,


  subHeaderMenuScroller: subHeaderMenuScroller
};

//////// Helper functions ////////
function queryStringify(queryObj){
  var paramsArray = [];
  for (var key in queryObj){
    paramsArray.push(queryObj[key]);
  }
  var queryString = paramsArray.join('/');
  return queryString;
}











// End of Utility Service
});


