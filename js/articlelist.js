var app = angular.module('SinglePage', []);

app.controller('articleController', function($scope) {
    var arr=[];
    for (var i = 0; i <10; i++) {
        arr.push(i+1);
    }
    $scope.listArticle=arr;
});

app.controller('rankController', function($scope) {
    $scope.rankList= [
        {
            "titleGroup":"LƯỢT XEM NHIỀU NHẤT",
            "articles":[
                {
                    "title":"Châu Nhuận Phát mặc quần short thăm mỹ nhân 'Bến Thượng Hải'",
                    "image":"img/mypic.jpg",
                    "count":"15 lượt xem"
                },
                {
                    "title":"Châu Nhuận Phát mặc quần short thăm mỹ nhân 'Bến Thượng Hải'",
                    "image":"img/mypic.jpg",
                    "count":"15 lượt xem"
                },
                {
                    "title":"Châu Nhuận Phát mặc quần short thăm mỹ nhân 'Bến Thượng Hải'",
                    "image":"img/mypic.jpg",
                    "count":"15 lượt xem"
                },
                {
                    "title":"Châu Nhuận Phát mặc quần short thăm mỹ nhân 'Bến Thượng Hải'",
                    "image":"img/mypic.jpg",
                    "count":"15 lượt xem"
                },
                {
                    "title":"Châu Nhuận Phát mặc quần short thăm mỹ nhân 'Bến Thượng Hải'",
                    "image":"img/mypic.jpg",
                    "count":"15 lượt xem"
                }
            ]
        },
        {
            "titleGroup":"LƯỢT THÍCH NHIỀU NHẤT",
            "articles":[
                {
                    "title":"Châu Nhuận Phát mặc quần short thăm mỹ nhân 'Bến Thượng Hải'",
                    "image":"img/mypic.jpg",
                    "count":"632 lượt thích"
                },
                {
                    "title":"Châu Nhuận Phát mặc quần short thăm mỹ nhân 'Bến Thượng Hải'",
                    "image":"img/mypic.jpg",
                    "count":"632 lượt thích"
                },
                {
                    "title":"Châu Nhuận Phát mặc quần short thăm mỹ nhân 'Bến Thượng Hải'",
                    "image":"img/mypic.jpg",
                    "count":"632 lượt thích"
                },
                {
                    "title":"Châu Nhuận Phát mặc quần short thăm mỹ nhân 'Bến Thượng Hải'",
                    "image":"img/mypic.jpg",
                    "count":"632 lượt thích"
                },
                {
                    "title":"Châu Nhuận Phát mặc quần short thăm mỹ nhân 'Bến Thượng Hải'",
                    "image":"img/mypic.jpg",
                    "count":"632 lượt thích"
                }
            ]
        },
        {
            "titleGroup":"BÌNH LUẬN NHIỀU NHẤT",
            "articles":[
                {
                    "title":"Châu Nhuận Phát mặc quần short thăm mỹ nhân 'Bến Thượng Hải'",
                    "image":"img/mypic.jpg",
                    "count":"67 bình luận"
                },
                {
                    "title":"Châu Nhuận Phát mặc quần short thăm mỹ nhân 'Bến Thượng Hải'",
                    "image":"img/mypic.jpg",
                    "count":"67 bình luận"
                },
                {
                    "title":"Châu Nhuận Phát mặc quần short thăm mỹ nhân 'Bến Thượng Hải'",
                    "image":"img/mypic.jpg",
                    "count":"67 bình luận"
                },
                {
                    "title":"Châu Nhuận Phát mặc quần short thăm mỹ nhân 'Bến Thượng Hải'",
                    "image":"img/mypic.jpg",
                    "count":"67 bình luận"
                },
                {
                    "title":"Châu Nhuận Phát mặc quần short thăm mỹ nhân 'Bến Thượng Hải'",
                    "image":"img/mypic.jpg",
                    "count":"67 bình luận"
                }
            ]
        },
        {
            "titleGroup":"CHIA SẺ NHIỀU NHẤT",
            "articles":[
                {
                    "title":"Châu Nhuận Phát mặc quần short thăm mỹ nhân 'Bến Thượng Hải'",
                    "image":"img/mypic.jpg",
                    "count":"32 chia sẻ"
                },
                {
                    "title":"Châu Nhuận Phát mặc quần short thăm mỹ nhân 'Bến Thượng Hải'",
                    "image":"img/mypic.jpg",
                    "count":"32 chia sẻ"
                },
                {
                    "title":"Châu Nhuận Phát mặc quần short thăm mỹ nhân 'Bến Thượng Hải'",
                    "image":"img/mypic.jpg",
                    "count":"32 chia sẻ"
                },
                {
                    "title":"Châu Nhuận Phát mặc quần short thăm mỹ nhân 'Bến Thượng Hải'",
                    "image":"img/mypic.jpg",
                    "count":"32 chia sẻ"
                },
                {
                    "title":"Châu Nhuận Phát mặc quần short thăm mỹ nhân 'Bến Thượng Hải'",
                    "image":"img/mypic.jpg",
                    "count":"32 chia sẻ"
                }
            ]
        }
    ];
});