var ref = new Firebase("https://reto-3-backend.firebaseio.com");
ref.onAuth(function(authData) {
    if (authData) {
        // user authenticated with Firebase
        document.querySelector('.overlay').classList.add('dontDisplay');
        document.querySelector('.wrapper').classList.remove("blur");
        document.querySelector('header').classList.remove("blur");


        howToGetProfilePic = findProfilePic(authData);
        howToGetFullName = findFullName(authData);

        document.querySelector('.logout').addEventListener('click', function(event){
            ref.unauth();  
        });

        // save the user 
        ref.child('users').child(authData.uid).set(authData);
    } else {
        // user is logged out
        document.querySelector('.overlay').classList.remove('dontDisplay');
        document.querySelector('.wrapper').classList.add("blur");
        document.querySelector('header').classList.add("blur");
    }
});

document.querySelector('.fa-facebook-square').addEventListener('click', function(){
    userLogin("facebook");
});
// document.querySelector('.fa-twitter-square').addEventListener('click', function(){
//     userLogin("twitter");
// });

function userLogin(Provider){
    ref.authWithOAuthRedirect(Provider, function(err, authData){
        console.log(authData);
    });
}
function findProfilePic(authData){
    var provider = authData.provider;
    if (provider == "facebook"){
        return "http://graph.facebook.com/" +
            authData.uid.split(":")[1] +
            "/picture?width=40&height=40";
    }
    else if (provider == "twitter"){
        return "http://avatars.io/twitter/"+authData.twitter.username +"?size=large";
    };
    
    return "Not found";
};
function findFullName(authData){
    var provider = authData.provider;
    if (provider == "facebook"){
        return authData.facebook.displayName;
    }
    else if (provider == "twitter"){
        return authData.twitter.displayName; 
    }
    return "Anonymous Frog";
}
