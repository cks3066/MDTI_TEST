const kakaoShare = () => {
  window.Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "오늘의 디저트",
      description: "아메리카노, 빵, 케익",
      imageUrl:
        "http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
      link: {
        mobileWebUrl: "https://developers.kakao.com",
        androidExecutionParams: "test",
      },
    },
    itemContent: {
      profileText: "Kakao",
      profileImageUrl:
        "http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
      titleImageUrl:
        "http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
      titleImageText: "Cheese cake",
      titleImageCategory: "Cake",
      items: [
        {
          item: "Cake1",
          itemOp: "1000원",
        },
        {
          item: "Cake2",
          itemOp: "2000원",
        },
        {
          item: "Cake3",
          itemOp: "3000원",
        },
        {
          item: "Cake4",
          itemOp: "4000원",
        },
        {
          item: "Cake5",
          itemOp: "5000원",
        },
      ],
      sum: "총 결제금액",
      sumOp: "15000원",
    },
    social: {
      likeCount: 10,
      commentCount: 20,
      sharedCount: 30,
    },
    buttons: [
      {
        title: "웹으로 이동",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
        },
      },
      {
        title: "앱으로 이동",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
        },
      },
    ],
  });
};

const twitterShare = () => {
  var sendText = "캐치업! 지금 바로 MDTI 테스트 하러가기";
  var sendUrl =
    "https://cks3066.github.io/YoutheRoom/                                             ";
  var sendHashTag = "청년이룸,캐치업,MyDream,MDTI";
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      sendText +
      "&url=" +
      sendUrl +
      "&hashtags=" +
      sendHashTag
  );
};

const facebookShare = () => {
  var sendUrl = "https://cks3066.github.io/YoutheRoom/";
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
};

export { kakaoShare, twitterShare, facebookShare };
