
apiready = function(){
  fnInit();
};

var telephone,password;

function fnInit() {
  telephone = $api.byId('tel');
  password = $api.byId('password');
};

function fnLogin(){
  fnPost('login/login',{"account":telephone.value,"password":password.value});
}

function fnPost(path, body) {
   api.showProgress({
       title: '登陆中',
       modal: true
   });
   api.ajax({
       url: 'http://120.27.27.144:8080/SXZ/' + path,
       method: 'post',
       data:{values:body}
   }, function(ret, err) {
     api.openWin({
        name: 'win_home',
        url: 'win_home.html'
    });
      //  api.hideProgress();
      //  if (ret && ret.statusCode == 1) {
      //     $api.setStorage('loginInfo', ret.model);
      //     api.openWin({
      //        name: 'win_home',
      //        url: 'win_home.html'
      //    });
      //  } else {
      //    alert('用户名或密码错误');
      //  }
   });
 };
