const kakaoShare = () => {
  window.Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "Catch Up! MDTI 테스트",
      description: "MDTI 테스트 받고 경품까지!",
      imageUrl:
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c9311dd0-05cb-4a47-978d-ef2f032dc52b/Group_109_%282%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211119T030234Z&X-Amz-Expires=86400&X-Amz-Signature=98ae7bf4709e9ff560e6fc82765f662f94aec705bba130f797d7b0a092be10b3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Group%2520109%2520%282%29.png%22&x-id=GetObject",
      link: {
        mobileWebUrl: "https://bit.ly/캐취업",
      },
    },
    itemContent: {
      titleImageUrl:
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f3b2fc31-245a-4a76-83ec-bd44a528958f/Group_111_%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211119T030745Z&X-Amz-Expires=86400&X-Amz-Signature=26e21e9116fce3a0f20d4b06c6db0747674d21f88a5ecf27c340a4918bfa09fc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Group%2520111%2520%281%29.png%22&x-id=GetObject",
      titleImageText: "캐취업",
      titleImageCategory: "청년이룸",
    },
    buttons: [
      {
        title: "테스트 하러 가기",
        link: {
          mobileWebUrl: "https://bit.ly/캐취업",
        },
      },
    ],
  });
};

const twitterShare = () => {
  var sendText = "캐치업! 지금 바로 MDTI 테스트 하러가기";
  var sendUrl =
    "https://bit.ly/캐취업                                          ";
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
  var sendUrl = "https://bit.ly/캐취업";
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
};

export { kakaoShare, twitterShare, facebookShare };
