var app = angular.module("dash", []);
app.controller("dashcont", function ($scope, Get, Sendgrp,Sendcon,del,Edit) {
    (function () {
        if(getcookie("test")=='x')
        {

        }
        else{
            window.location.assign("index.html");
        }
       // alert("hai");
        Get.getgrps($scope);
        $("#createcontacts").hide();
    })();
    $scope.gid=0;

    //$scope.convisible=false;
    //$scope.grpvisible=true;
    $scope.load = function () {
        Get.getgrps($scope);
    };
    $scope.loadcon= function(gid=0) {
        Get.getcon($scope,gid);
    };
    $scope.crtgrp= function(){
       // alert("in create");
        Sendgrp.sendgrp($scope);
    };
    $scope.selectgrp= function(gid){
        // alert("in create");
        alert("dfgh");
         Sendgrp.sendtogrp($scope,gid);
     };
    $scope.refgrp= function(){

        document.getElementById("grpname").value="" ;
        
    };
    $scope.refcon= function(which=0){
        
        document.getElementById("name").value="" ;
        document.getElementById("phone").value="";
        document.getElementById("email").value="";
        if(which=1)
        $scope.gid=0;
    };
    $scope.crtcon= function(gid=0,gname=0){
       // $('#creategrp').foundation('reveal', 'open');
        //alert(gid);
        $scope.gid=gid;
        document.getElementById("egrpname").value=gname;
        //Sendcon.sendcon($scope,gid);
    };
    $scope.crtcon2= function(cname,cphone=0,cemail=0){
        // $('#creategrp').foundation('reveal', 'open');
        // alert(cname+""+cphone);

         $scope.key=cname;
         document.getElementById("ename").value=cname;
         document.getElementById("ephone").value=cphone;
         document.getElementById("eemail").value=cemail;
         
         //Sendcon.sendcon($scope,gid);
     };
    $scope.createcon= function()
    {   
        //alert($scope.gid);
        Sendcon.sendcon($scope,$scope.gid);
    };
    $scope.delgrp= function()
    { 
        del.remgrp($scope,$scope.gid);
    };
    $scope.delgrp= function()
    { 
        del.remcon($scope,$scope.key);
    };
    $
    $scope.loadgroup= function()
    {
        //alert("grpshow");
        $("#creategrp").show();
        $("#showallgrp").show();
        $("#showall").hide();
        $("#createcontacts").hide();
        Get.load();
    };
    $scope.loadall= function()
    {
        $("#creategrp").hide();
        $("#createcontacts").show();
        $("#showall").show();
        $("#showallgrp").hide();
        //$scope.convisible=true;
        //$scope.grpvisible=false;
        Get.getall($scope);
    };
    $scope.editcon=function()
    {
       // alert("hai");
        Edit.editcon($scope);
    };
    $scope.editgrp= function()
    {
        Edit.editgrp($scope,$scope.gid);
    };

});
app.service("del",function($http){
    this.remgrp= function(s,gid){
        //alert("remgrp");
        var request = $http({
            method: "post",
            url: "delgrp.php",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            transformRequest: function (obj) {
                var str = [];
                for (var p in obj) {
                      
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
                  
                return str.join("&");
            },
            data: {


                gid: gid,
                owner: getcookie("inmarmail")
            }
        });

         
        request.success(
            function (data) {
               // alert(data)
                s.load();
            }
        );

    };


    this.remgrp= function(s,gid){
       // alert("remgrp");
        var request = $http({
            method: "post",
            url: "delcon.php",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            transformRequest: function (obj) {
                var str = [];
                for (var p in obj) {
                    
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
               
                return str.join("&");
            },
            data: {


                cname: key,
                owner: getcookie("inmarmail")
            }
        });

        
        request.success(
            function (data) {
               // alert(data)
                s.loadall();
            }
        );

    };
});
app.service("Edit",function($http){
    this.editgrp=function(s,gid)
    {
        
        var request = $http({
            method: "post",
            url: "editgrp.php",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            transformRequest: function (obj) {
                var str = [];
                for (var p in obj) {
                   
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
              
                return str.join("&");
            },
            data: {


                gname: s.egrpname,
                gid: gid,
                owner: getcookie("inmarmail")
            }
        });

       
        request.success(
            function (data) {
                alert(data)
                
                s.load();
            }
        );

    };

    this.editcon=function(s,key)
    {
       
        var request = $http({
            method: "post",
            url: "editcon.php",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            transformRequest: function (obj) {
                var str = [];
                for (var p in obj) {
                      
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
                  
                return str.join("&");
            },
            data: {


                
                key: key,
                owner: getcookie("inmarmail")
            }
        });

         
        request.success(
            function (data) {
                alert(data)
                
                
                s.loadall();
            }
        );

    };


});
app.service("Get", function ($http) {
    this.getgrps = function (s) {
       //alert("in get grp");
          $http.get("getgrp.php")
            .then(function(response) {
                s.groups = response.data;
               // alert(JSON.stringify(s.groups));
            });
    }
    this.getall = function (s) {
        //alert("in get all");
          $http.get("getall.php")
            .then(function(response) {
                s.all = response.data;
               // alert(JSON.stringify(s.groups));
            });
    }
    this.getcon = function (s,gid) {
      //  alert("cbye");
        var request = $http({
            method: "post",
            url: "getcon.php",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            transformRequest: function (obj) {
                var str = [];
                for (var p in obj) {
                    
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
                  
                return str.join("&");
            },
            data: {


                gid: gid,
                owner: getcookie("inmarmail")
            }
        });

         
        request.success(
            function (data) {
              //  alert(data)
                
                s.contacts=data;
               
              
            }
        );

    }
});
app.service("Sendgrp", function ($http) {
    this.sendgrp = function (s) {
       // alert("in send grp")
        var request = $http({
            method: "post",
            url: "creategrp.php",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            transformRequest: function (obj) {
                var str = [];
                for (var p in obj) {
                      
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
                
                return str.join("&");
            },
            data: {


                gname: s.grpname,
                owner: getcookie("inmarmail")
            }
        });

         
        request.success(
            function (data) {
               
                s.load();
            }
        );


    }
    this.sendtogrp = function (s,gid) {
        
        alert(gid);
         var request = $http({
             method: "post",
             url: "addtogrp.php",
             headers: { 'content-type': 'application/x-www-form-urlencoded' },
             transformRequest: function (obj) {
                 var str = [];
                 for (var p in obj) {
                       
                     str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                 }
                   
                 return str.join("&");
             },
             data: {
 
 
                 cname: s.key,
                 gid:gid,
                 owner: getcookie("inmarmail")
             }
         });
 
          
         request.success(
             function (data) {
                alert(data)
                
                 s.load();
             }
         );
 
 
     }
});
app.service("Sendcon", function ($http) {
    this.sendcon = function (s,lid) {
    // alert("in send con")
        var request = $http({
            method: "post",
            url: "creatcon.php",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            transformRequest: function (obj) {
                var str = [];
                for (var p in obj) {
                      
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
                  
                return str.join("&");
            },
            data: {

                name:  s.name,
                phone: s.phone,
                email: s.email,
                gid: gid,
                owner: getcookie("inmarmail")
            }
        });

         
        request.success(
            function (data) {
                
                s.loadcon();
                s.loadall();
                //alert("end");
            }
        );


    }
});

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