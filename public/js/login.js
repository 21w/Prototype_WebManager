//FirebaseAuthの初期化
function initFirebaseAuth(){
    //オブザーバーの設定
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            //ログイン後
            console.log("ログインしました．");
            console.log(user.uid);
        }else{
            //ログアウト後
            console.log("それ以外")
        }
    })
}

//FirebaseAuthの初期化を実行
initFirebaseAuth();

/*
*   値の取得
*/
//メールアドレスの取得
function getEmailAddress(){
    return document.getElementById("email").value;
}

//パスワードの取得
function getPassword(){
    return document.getElementById(password).value;
}

/*
*   ボタン処理
*/
//ログイン処理
loginAction = function(){
    //値の取得
    const emailAddress = getEmailAddress();
    const password = getPassword();
    //ログイン処理
    firebase.auth().signInWithEmailAndPassword(emailAddress, password).catch(function(error) {
        console.log("ログイン出来ませんでした．")
    });
}