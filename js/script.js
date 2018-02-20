
//JavaScript for contacts appliction.

//contoller for register module.
var app = angular.module("init", []);
app.controller("cont1", function ($scope, validation, postlogin) {
    (function () {
       
        var em = getcookie("inmarmail");
        var x = getcookie("test");

        //alert(em + " got" + pw);
        if (x=='x') {
            window.location.assign("dashboard.html");
            
        }
    })();
    function getcookie(cname) {
        //alert("enter");
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    $scope.submitpost = function () {
       // alert("hai");
    }
    $scope.login = function () {
        postlogin.postdata($scope);
    }
    /* $scope.submitpost= function () {
         alert($scope.fname);
         alert($scope.aadhar);
         alert(document.getElementById("aadhar").value);
         alert($scope.gender);
         alert($scope.psw);
     //   postregistration.postdata($scope)
     };*/
    $scope.checkcnfpsw = function () {

        validation.cnfpsw($scope);
    };
    $scope.checkstrength = function () {
        validation.strength($scope);
    };


});


//validation service that checks confirm password
app.service("validation", function () {


    this.cnfpsw = function ($scope) {
        // alert("hai"+$scope.str);
        if ($scope.psw == $scope.cnfpsw) {
            $scope.str = "";
        }
        else {
            $scope.str = "Passwords doesn't match";
        }
    };

    this.strength = function ($scope) {

        var l = document.getElementById('psw').value.length;

        if (l < 8) {
            $scope.strength = "weak";
        }
        if (l >= 8 && l < 12) {
            $scope.strength = "strong";
        }
        if (l >= 12) {
            $scope.strength = "very strong";
        }
    };
});

//Post service that makes the ajax request for registration 
/*app.service("postregistration",function($http){
    this.postdata=function($scope){
        alert($scope.fname);
        alert($scope.lname);
        var request = $http({ 
             method: "post", 
             url: "register.php", 
             headers:{'content-type':'application/x-www-form-urlencoded'}, 
             transformRequest: function(obj) {
                                          var str = [];
                                          for(var p in obj)
                                          {
                                                
                                                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                                          }                                                      
                                          
                                            return str.join("&");
                                    },
             data: { 
                 
                 fname: $scope.fname,
                 lname:$scope.lname,
                 email:$scope.email,
                 aadhar:$scope.aadhar,
                 psw:$scope.psw,
                 gender:$scope.gender
             } 
         }); 

         
         request.success( 
             function( data ) { 
                if (data=="success")
                {

                }
                else
                {

                }

             } 
         ); 


             
    }
});

*/
//Post service that makes the ajax request for login
app.service("postlogin", function ($http) {


    this.postdata = function (v) {
           // alert("fghj");
        var request = $http({
            method: "post",
            url: "login.php",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            transformRequest: function (obj) {
                var str = [];
                for (var p in obj) {

                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }

                return str.join("&");
            },
            data: {


                email: v.lemail,
                psw: v.lpsw

            }
        });


        request.success(
            function (data) {
                if (data == "success") {
                    alert(data);
                }
                else {
                    alert("error" + data);
                }

            }
        );


    }
});
