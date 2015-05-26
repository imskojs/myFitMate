angular.module('myFitMate')
.factory('PostData', function (){
  var posts = [
    { postId: 0,
      category: "강남구",
      title: "강남구 역삼동 같이 요가 하실 여성 분 찾아요~",
      content: "강남구 역삼동에 사는 이연희 라고 합니다. \
        역삼동 파워 휘트니스에서 직장인 반 요가 클래스가 있는데, 수업이 \
        끝나면 시간이 늦어 혼자 다니기가 고민되서요 ㅠ \
        같은 지역 사시는 여성 분들 중 같이 요가 배워보실분 찾습니다~",
      createdUser: {
        userId: "pretty99",
        firstName: "Yeon Hee",
        lastName: "Lee",
        email: "example@example.com"
      },
      createdAt: Date('2015/01/01 15:22:12'),
      comments: [
        { createdBy: "Lim Kyung Hwa",
          createdAt: Date('2015/01/01 15:22:12'),
          content: "강남가 역삼동 역삼 공원쪽에 사는 임경화에요! 저도 그 클래스 보고 고민 고민 \
          한던 중이었는데!! 같이 하실레요~?",
          createdDevice: "Android"
        },
        { createdBy: "Lee Yeon Hee",
          createdAt: Date('2015/01/01 15:22:12'),
          content: "아 경화님, 코멘트 감사드려요~ 네! 좋아요, 그럼 언제 신청하러 가실건가요! 번호 남겨주세요!!",
          createdDevice: "iOS"
        }
      ],
      createdDevice: "Android"
    },
    { postId: 1,
      category: "강남구",
      title: "강남구 역삼동 같이 요가 하실 여성 분 찾아요~",
      content: "강남구 역삼동에 사는 이연희 라고 합니다. \
        역삼동 파워 휘트니스에서 직장인 반 요가 클래스가 있는데, 수업이 \
        끝나면 시간이 늦어 혼자 다니기가 고민되서요 ㅠ \
        같은 지역 사시는 여성 분들 중 같이 요가 배워보실분 찾습니다~",
      createdUser: {
        userId: "pretty99",
        firstName: "Yeon Hee",
        lastName: "Lee",
        email: "example@example.com"
      },
      createdAt: Date('2015/01/01'),
      comments: [
        { createdBy: "Lim Kyung Hwa",
          createdAt: Date('2015/01/01'),
          content: "강남가 역삼동 역삼 공원쪽에 사는 임경화에요! 저도 그 클래스 보고 고민 고민 \
          한던 중이었는데!! 같이 하실레요~?",
          createdDevice: "Android"
        },
        { createdBy: "Lee Yeon Hee",
          createdAt: Date('2015/01/01'),
          content: "아 경화님, 코멘트 감사드려요~ 네! 좋아요, 그럼 언제 신청하러 가실건가요! 번호 남겨주세요!!",
          createdDevice: "iOS"
        }
      ],
      createdDevice: "Android"
    },
    { postId: 2,
      category: "강남구",
      title: "강남구 역삼동 같이 요가 하실 여성 분 찾아요~",
      content: "강남구 역삼동에 사는 이연희 라고 합니다. \
        역삼동 파워 휘트니스에서 직장인 반 요가 클래스가 있는데, 수업이 \
        끝나면 시간이 늦어 혼자 다니기가 고민되서요 ㅠ \
        같은 지역 사시는 여성 분들 중 같이 요가 배워보실분 찾습니다~",
      createdUser: {
        userId: "pretty99",
        firstName: "Yeon Hee",
        lastName: "Lee",
        email: "example@example.com"
      },
      createdAt: Date('2015/01/05'),
      comments: [
        { createdBy: "Lim Kyung Hwa",
          createdAt: Date('2015/01/01'),
          content: "강남가 역삼동 역삼 공원쪽에 사는 임경화에요! 저도 그 클래스 보고 고민 고민 \
          한던 중이었는데!! 같이 하실레요~?",
          createdDevice: "Android"
        },
        { createdBy: "Lee Yeon Hee",
          createdAt: Date('2015/01/01'),
          content: "아 경화님, 코멘트 감사드려요~ 네! 좋아요, 그럼 언제 신청하러 가실건가요! 번호 남겨주세요!!",
          createdDevice: "iOS"
        }
      ],
      createdDevice: "Android"
    },
    { postId: 3,
      category: "강남구",
      title: "강남구 역삼동 같이 요가 하실 여성 분 찾아요~",
      content: "강남구 역삼동에 사는 이연희 라고 합니다. \
        역삼동 파워 휘트니스에서 직장인 반 요가 클래스가 있는데, 수업이 \
        끝나면 시간이 늦어 혼자 다니기가 고민되서요 ㅠ \
        같은 지역 사시는 여성 분들 중 같이 요가 배워보실분 찾습니다~",
      createdUser: {
        userId: "pretty99",
        firstName: "Yeon Hee",
        lastName: "Lee",
        email: "example@example.com"
      },
      createdAt: Date('2015/01/05'),
      comments: [
        { createdBy: "Lim Kyung Hwa",
          createdAt: Date('2015/01/01'),
          content: "강남가 역삼동 역삼 공원쪽에 사는 임경화에요! 저도 그 클래스 보고 고민 고민 \
          한던 중이었는데!! 같이 하실레요~?",
          createdDevice: "Android"
        },
        { createdBy: "Lee Yeon Hee",
          createdAt: Date('2015/01/01'),
          content: "아 경화님, 코멘트 감사드려요~ 네! 좋아요, 그럼 언제 신청하러 가실건가요! 번호 남겨주세요!!",
          createdDevice: "iOS"
        }
      ],
      createdDevice: "Android"
    },
    { postId: 4,
      category: "강남구",
      title: "강남구 역삼동 같이 요가 하실 여성 분 찾아요~",
      content: "강남구 역삼동에 사는 이연희 라고 합니다. \
        역삼동 파워 휘트니스에서 직장인 반 요가 클래스가 있는데, 수업이 \
        끝나면 시간이 늦어 혼자 다니기가 고민되서요 ㅠ \
        같은 지역 사시는 여성 분들 중 같이 요가 배워보실분 찾습니다~",
      createdUser: {
        userId: "pretty99",
        firstName: "Yeon Hee",
        lastName: "Lee",
        email: "example@example.com"
      },
      createdAt: Date('2015/01/05'),
      comments: [
        { createdBy: "Lim Kyung Hwa",
          createdAt: Date('2015/01/01'),
          content: "강남가 역삼동 역삼 공원쪽에 사는 임경화에요! 저도 그 클래스 보고 고민 고민 \
          한던 중이었는데!! 같이 하실레요~?",
          createdDevice: "Android"
        },
        { createdBy: "Lee Yeon Hee",
          createdAt: Date('2015/01/01'),
          content: "아 경화님, 코멘트 감사드려요~ 네! 좋아요, 그럼 언제 신청하러 가실건가요! 번호 남겨주세요!!",
          createdDevice: "iOS"
        }
      ],
      createdDevice: "Android"
    },
    { postId: 5,
      category: "강남구",
      title: "강남구 역삼동 같이 요가 하실 여성 분 찾아요~",
      content: "강남구 역삼동에 사는 이연희 라고 합니다. \
        역삼동 파워 휘트니스에서 직장인 반 요가 클래스가 있는데, 수업이 \
        끝나면 시간이 늦어 혼자 다니기가 고민되서요 ㅠ \
        같은 지역 사시는 여성 분들 중 같이 요가 배워보실분 찾습니다~",
      createdUser: {
        userId: "pretty99",
        firstName: "Yeon Hee",
        lastName: "Lee",
        email: "example@example.com"
      },
      createdAt: Date('2015/01/05'),
      comments: [
        { createdBy: "Lim Kyung Hwa",
          createdAt: Date('2015/01/01'),
          content: "강남가 역삼동 역삼 공원쪽에 사는 임경화에요! 저도 그 클래스 보고 고민 고민 \
          한던 중이었는데!! 같이 하실레요~?",
          createdDevice: "Android"
        },
        { createdBy: "Lee Yeon Hee",
          createdAt: Date('2015/01/01'),
          content: "아 경화님, 코멘트 감사드려요~ 네! 좋아요, 그럼 언제 신청하러 가실건가요! 번호 남겨주세요!!",
          createdDevice: "iOS"
        }
      ],
      createdDevice: "Android"
    },
  ];

  return {
    posts: posts 
  };
});