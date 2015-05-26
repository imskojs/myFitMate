angular.module('myFitMate')
.factory('Data', function (){
  return {
    
    init: {
      login: {
        userId: 0,
        userName: 'Seunghoon Ko'
      },
      favorite: {
        options: [
          { id: 25, type: '헬스/트레이닝', data: 'HEALTH' },
          { id: 26, type: '에어로빅', data: 'AEROBIC'  },
          { id: 27, type: '필라테스', data: 'PILATES'  },
          { id: 28, type: '요가', data: 'YOGA'  },
          { id: 29, type: '복싱', data: 'BOXING'  },
          { id: 30, type: '클라이밍', data: 'CLIMBING'  }
        ],
        selectedOption: { id: 25, type: '헬스/트레이닝', data: 'HEALTH'  }
      } 
    },
    fitMate: {
      firstVisit: true,
      categories: [
        { id: 0, location: '강남구', data: 'KANGNAM' },
        { id: 1, location: '강동구', data: 'KANGDONG' },
        { id: 2, location: '강서구', data: 'KANGSEO' },
        { id: 3, location: '강북구', data: 'KANGBOOK' },
        { id: 4, location: '관악구', data: 'KWANARK' },
        { id: 5, location: '광진구', data: 'KWANGJIN' },
        { id: 6, location: '구로구', data: 'KOOROH' },
        { id: 7, location: '금천구', data: 'KEUMCHUN' },
        { id: 8, location: '노원구', data: 'NOWON' },
        { id: 9, location: '도봉구', data: 'DOBONG' },
        { id: 10, location: '동대문구', data: 'DONGDEAMOON' },
        { id: 11, location: '동작구', data: 'DONGJAK' },
        { id: 12, location: '마포구', data: 'MAPOH' },
        { id: 13, location: '서대문구', data: 'SEODEAMOON' },
        { id: 14, location: '서초구', data: 'SEOCHO' },
        { id: 15, location: '성동구', data: 'SUNGDONG' },
        { id: 16, location: '성북구', data: 'SUNGBOOK' },
        { id: 17, location: '송파구', data: 'SONGPAH' },
        { id: 18, location: '양천구', data: 'YANGCHUN' },
        { id: 19, location: '영등포구', data: 'YOUNGDEUNGPOH' },
        { id: 20, location: '용산구', data: 'YONGSAN' },
        { id: 21, location: '은평구', data: 'EUNPYUNG' },
        { id: 22, location: '종로구', data: 'JONGROH' },
        { id: 23, location: '중구', data: 'JOONG' },
        { id: 24, location: '중량구', data: 'JOONGRYANG' },
      ],
      selectedCategory: {},
      moreData: null,
      lastPost: {},
        
      write: {
        form: {
          title: '',
          content: '',
          category: '',
          createdBy: '',
          viewCount: 0
        },
        cachedPost: {}
      },
      details: {
        requestCorrection: false,
        correctionPostId: null
      }
    },
    fitInfo: {
      firstVisit: true,
      categories: [
        { id: 25, type: '헬스/트레이닝', data: 'HEALTH' },
        { id: 26, type: '에어로빅', data: 'AEROBIC'  },
        { id: 27, type: '필라테스', data: 'PILATES'  },
        { id: 28, type: '요가', data: 'YOGA'  },
        { id: 29, type: '복싱', data: 'BOXING'  },
        { id: 30, type: '클라이밍', data: 'CLIMBING'  }
      ],
      selectedCategory: {},
      moreData: null,
      lastPost: {},

      write: {
        form: {
          title: '',
          content: '',
          category: '',
          createdBy: '',
          viewCount: 0
        },
        cachedPost: {}
      },
      details: {
        requestCorrection: false,
        correctionPostId: null
      }
    },
    consult: {
      firstVisit: true,
      categories: [
        { id: 31, type: '컨설트', data: 'CONSULT' }
      ],
      selectedCategory: { id: 31, type: '컨설트', data: 'CONSULT' },
      moreData: null,
      lastPost: {},

      write: {
        form: {
          title: '',
          content: '',
          category: '',
          createdBy: '',
          viewCount: 0
        },
        cachedPost: {}
      },
      details: {
        requestCorrection: false,
        correctionPostId: null
      }
    }
    
  };
});