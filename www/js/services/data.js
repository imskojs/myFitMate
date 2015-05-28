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
    findFit: {
      map: {
        locations: [
          {
            id: 101,
            title: '다음 커뮤니케이션', 
            images: ['img/05_detail_page/board_img.png','img/05_detail_page/board_img.png','img/05_detail_page/board_img.png'],
            tel: 0705078989,
            email: 'wang@health.com',
            major: '헬스 / 트레이닝',
            address: '강남구 봉봉동 붕붕빵',
            latlng: [33.450705, 126.570677],
            about: '강남구 강남대로 354 혜천빌딩 지하 1층에 위치하며, 최근 리모델링을 해서 시설이 '  +
              '깨끗하고 좋다. 트레이너들은 기종의 트레이너들이 계속 운영하고 있으며, 샤워실, 운동복, 수건등을 ' +
              '무료로 제공한다. 프로그램으로는 퍼스널 트레이널 트레이닝, 헬스, 에어로빅을 운영하고있다.'
          },
          {
            id: 102,
            title: '봉봉', 
            images: ['img/05_detail_page/board_img.png','img/05_detail_page/board_img.png','img/05_detail_page/board_img.png'],
            tel: 0705078989,
            email: 'asdf@asdf.com',
            major: '헬스 / 트레이닝',
            address: '강남구 봉봉동 붕붕빵',
            latlng: [34.462705, 126.572677],
            about: '강남구 강남대로 354 혜천빌딩 지하 1층에 위치하며, 최근 리모델링을 해서 시설이 '  +
              '깨끗하고 좋다. 트레이너들은 기종의 트레이너들이 계속 운영하고 있으며, 샤워실, 운동복, 수건등을 ' +
              '무료로 제공한다. 프로그램으로는 퍼스널 트레이널 트레이닝, 헬스, 에어로빅을 운영하고있다.'
          },
          {
            id: 103,
            title: '돌돌', 
            images: ['img/05_detail_page/board_img.png','img/05_detail_page/board_img.png','img/05_detail_page/board_img.png'],
            tel: 0705078989,
            email: '123kakak@kakak.com',
            major: '헬스 / 트레이닝',
            address: '강남구 봉봉동 붕붕빵',
            latlng: [33.444705, 126.574677],
            about: '강남구 강남대로 354 혜천빌딩 지하 1층에 위치하며, 최근 리모델링을 해서 시설이 '  +
              '깨끗하고 좋다. 트레이너들은 기종의 트레이너들이 계속 운영하고 있으며, 샤워실, 운동복, 수건등을 ' +
              '무료로 제공한다. 프로그램으로는 퍼스널 트레이널 트레이닝, 헬스, 에어로빅을 운영하고있다.'
          },
          {
            id: 104,
            title: '왕왕', 
            images: ['img/05_detail_page/board_img.png','img/05_detail_page/board_img.png','img/05_detail_page/board_img.png'],
            tel: 0705078989,
            email: 'vvvkkkooo@kokoko.com',
            major: '헬스 / 트레이닝',
            address: '강남구 봉봉동 붕붕빵',
            latlng: [33.446705, 126.576677],
            about: '강남구 강남대로 354 혜천빌딩 지하 1층에 위치하며, 최근 리모델링을 해서 시설이 '  +
              '깨끗하고 좋다. 트레이너들은 기종의 트레이너들이 계속 운영하고 있으며, 샤워실, 운동복, 수건등을 ' +
              '무료로 제공한다. 프로그램으로는 퍼스널 트레이널 트레이닝, 헬스, 에어로빅을 운영하고있다.'
          }
        ]
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
    },

    event: {
      firstVisit: true,
      categories: [
        { id: 31, type: '이벤트', data: 'EVENT' }
      ],
      selectedCategory: { id: 31, type: '이벤트', data: 'EVENT' },
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