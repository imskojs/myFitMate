angular.module('myFitMate')
.factory('LocationData', function (){
  
  var locations = [
    '강남구', '강동구', '강서구', '강북구', '관악구', '광진구',
    '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구',
    '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구',
    '양천구', '영등포구', '용산구', '은평구', '종로구', '중구',
    '중량구'
  ]

  var fitnessType = [
    '헬스/트레이닝', '에어로빅', '필라테스', '요가', '복싱', '클라이'
  ];

  return {
    locations: locations,
    fitnessType: fitnessType
  }
})