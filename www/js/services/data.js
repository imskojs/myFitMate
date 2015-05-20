angular.module('myFitMate')
.factory('Data', function (){
  return {
    
    init: {
      favorite: {
        options: [
          { id: 0, type: '헬스 / 트레이닝' },
          { id: 1, type: '에어로빅' },
          { id: 2, type: '필라테스' },
          { id: 3, type: '요가' },
          { id: 4, type: '복싱' },
          { id: 5, type: '클라이밍' }
        ],
        selectedOption: null
      } 
    },

    
  };
});