var app = angular.module("dash", []);
app.controller("dashcont", function ($scope, Get, Sendgrp,Sendcon,del,Edit) {
    (function () {
        if(getcookie("set")=='x')
        {

        }
        else{
            window.location.assign(index.html);
        }
        alert("hai");
        Get.getgrps($scope);
    })();
    $scope.load = function () {
        Get.getgrps($scope);
    };
    $scope.loadcon= function(gid=0) {
        Get.getcon($scope,gid);
    };
    $scope.crtgrp= function(){
        alert("in create");
        Sendgrp.sendgrp($scope);
    };
    $scope.crtcon= function(gid=0){
       // $('#creategrp').foundation('reveal', 'open');
        alert(gid);
        $scope.gid=gid;
        //Sendcon.sendcon($scope,gid);
    };
    $scope.createcon= function()
    {   
        alert($scope.gid);
        Sendcon.sendcon($scope,$scope.gid);
    };
    $scope.delgrp= function()
    { 
        del.remgrp($scope,$scope.gid);
    };
    $scope.loadall= function()
    {
        Get.getall($scope);
    };
    $scope.editgrp= function()
    {
        Edit.editgrp($scope,$scope.gid);
    };

});
app.service("del",function($http){
    this.remgrp= function(s,gid){
        alert("remgrp");
        var request = $http({
            method: "post",
            url: "delgrp.php",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            transformRequest: function (obj) {
                var str = [];
                for (var p in obj) {
                    //console.log(p);
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
                //alert(str.join("&"));
                return str.join("&");
            },
            data: {


                gid: gid,
                owner: getcookie("inmarmail")
            }
        });

        // Store the data-dump of the FORM scope. 
        request.success(
            function (data) {
                alert(data)
                s.load();
            }
        );

    };
});
app.service("Edit",function($http){
    this.editgrp=function(s,gid)
    {
        alert("in send grp")
        var request = $http({
            method: "post",
            url: "editgrp.php",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            transformRequest: function (obj) {
                var str = [];
                for (var p in obj) {
                    //console.log(p);
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
                //alert(str.join("&"));
                return str.join("&");
            },
            data: {


                gname: s.grpname,
                gid: gid,
                owner: getcookie("inmarmail")
            }
        });

        // Store the data-dump of the FORM scope. 
        request.success(
            function (data) {
                alert(data)
                //v.message = data; 
                //alert(JSON.stringify(data));
                //v.collect=data;
                //alert("Group created successfully");
                s.load();
            }
        );

    };
});
app.service("Get", function ($http) {
    this.getgrps = function (s) {
        alert("in get grp");
          $http.get("getgrp.php")
            .then(function(response) {
                s.groups = response.data;
                alert(JSON.stringify(s.groups));
            });
    }
    this.getall = function (s) {
        alert("in get all");
          $http.get("getall.php")
            .then(function(response) {
                s.all = response.data;
                alert(JSON.stringify(s.groups));
            });
    }
    this.getcon = function (s,gid) {
        alert("cbye");
        var request = $http({
            method: "post",
            url: "getcon.php",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            transformRequest: function (obj) {
                var str = [];
                for (var p in obj) {
                    //console.log(p);
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
                //alert(str.join("&"));
                return str.join("&");
            },
            data: {


                gid: gid,
                owner: getcookie("inmarmail")
            }
        });

        // Store the data-dump of the FORM scope. 
        request.success(
            function (data) {
                alert(data)
                
                s.contacts=data;
               // alert(JSON.stringify(data));
                alert(JSON.stringify(s.contacts));
            }
        );

    }
});
app.service("Sendgrp", function ($http) {
    this.sendgrp = function (s) {
        alert("in send grp")
        var request = $http({
            method: "post",
            url: "creategrp.php",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            transformRequest: function (obj) {
                var str = [];
                for (var p in obj) {
                    //console.log(p);
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
                //alert(str.join("&"));
                return str.join("&");
            },
            data: {


                gname: s.grpname,
                owner: getcookie("inmarmail")
            }
        });

        // Store the data-dump of the FORM scope. 
        request.success(
            function (data) {
                alert(data)
                //v.message = data; 
                //alert(JSON.stringify(data));
                //v.collect=data;
                //alert("Group created successfully");
                s.load();
            }
        );


    }
});
app.service("Sendcon", function ($http) {
    this.sendcon = function (s,gid) {
        alert("in send con")
        var request = $http({
            method: "post",
            url: "creatcon.php",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            transformRequest: function (obj) {
                var str = [];
                for (var p in obj) {
                    //console.log(p);
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
                //alert(str.join("&"));
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

        // Store the data-dump of the FORM scope. 
        request.success(
            function (data) {
                alert(data)
                //v.message = data; 
                //alert(JSON.stringify(data));
                //v.collect=data;
                //alert("Group created successfully");
                s.loadcon();
            }
        );


    }
});

function getcookie(cname) {
    alert("enter");
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