angular.module('myFitMate')
.filter('toKorean', function(){
  return function (input){
    if(input === 'HEALTH'){
      return '헬스/트레이닝';
    } else if(input === 'AEROBIC'){
      return '에어로빅';
    } else if(input === 'PILATES'){
      return '필라테스';
    } else if(input === 'YOGA'){
      return '요가';
    } else if(input === 'BOXING'){
      return '복싱';
    } else if(input === 'CLIMBING'){
      return '클라이밍';
    }
  }
})