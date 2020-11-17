// Firebaseを利用してFirebaseUIを初期化
var ui = new firebaseui.auth.AuthUI(firebase.auth());

/*
*   FirebaseUIの設定
*/
//
var uiConfig={
    callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // ログイン成功時に実行
      console.log("ログイン成功");

      return true;
    },
    uiShown: function() {
      // ウィジットの表示．ローダーの非表示
      document.getElementById('loader').style.display = 'none';
    }
  },
  //ログイン成功時にリダイレクトするためのURL
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  //提供するログイン方法
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};

/*
*   FirebaseUIの開始
*/
ui.start('#firebaseui-auth-container', uiConfig);

/*
*
*/
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log("確認")
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
  }
});