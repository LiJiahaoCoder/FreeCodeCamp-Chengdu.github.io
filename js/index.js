window.onload = function () {
    var iconArr = document.querySelectorAll('#cf-intro .landing-skill-icon,#cf-intro .img-awesome-padding');
    iconArr.forEach(function (el) {
        el.className += ' animated';
        el.addEventListener("mouseover", function () {
            if (this.className.indexOf('flip') === -1) {
                this.className += ' flip';
            }
        }, false);
        el.addEventListener("webkitAnimationEnd", function () { //动画结束时事件
            this.className = this.className.replace('flip', ' ');
        })
    });
    for (var i = 0; i < members.length; i++) {
        addHtml(members[i]);
    }
}
var members = [
    {
        "name": "余烜",
        "imgurl": "./img/members/yuxuan.jpg",
        "url": ""
    },
    {"name": "王嘉琨", "imgurl": "./img/members/wangjiakun.jpg"},
    {"name": "肖鹏", "imgurl": "./img/members/xiaopeng.jpg"},
    {"name": "姜玉珍", "imgurl": "./img/members/jiangyuzhen.jpg"},
    {"name": "李春霖", "imgurl": "./img/members/lichunlin.jpg"},
    {"name": "刘小东", "imgurl": "./img/members/liuxiaodong.jpg"},
    {"name": "魏杨", "imgurl": "./img/members/weiyang.jpg"},
    {"name": "赵小强", "imgurl": "./img/members/zhaoxiaoqiang.jpg"},
    {"name": "肖彰瑾", "imgurl": "./img/members/xiaozhangjin.jpg"},
    {"name": "YaYa", "imgurl": "./img/members/yaya.jpg"},
    {"name": "凡小东", "imgurl": "./img/members/fanxiaodong.jpg"},
    {"name": "吉祥", "imgurl": "./img/members/jixiang.jpg"},
    {"name": "阿KinG", "imgurl": "./img/members/aking.jpg"},
    {"name": "Quiz42小考", "imgurl": "./img/members/quiz42xiaokao.jpg"},
    {"name": "王丹文", "imgurl": "./img/members/wangdanwen.jpg"},
    {"name": "levimin", "imgurl": "./img/members/levimin.jpg"},
    {"name": "陈科", "imgurl": "./img/members/chenke.jpg"},
    {"name": "莉莉安", "imgurl": "./img/members/lilian.jpg"},
    {"name": "吴其凡", "imgurl": "./img/members/wuqifan.jpg"},
    {"name": "周真", "imgurl": "./img/members/zhouzhen.jpg"},
    {"name": "李欣", "imgurl": "./img/members/lixin.jpg"},
    {"name": "袁伟", "imgurl": "./img/members/yuanwei.jpg"},
    {"name": "陈曦", "imgurl": "./img/members/chenxi.jpg"},
    {
        "name": "Aperture leaf",
        "imgurl": "./img/members/apertureleaf.jpg"
    },
    {"name": "恩娇", "imgurl": "./img/members/enjiao.jpg"},
    {"name": "莱昂", "imgurl": "./img/members/laiang.jpg"},
    {"name": "徐顺安", "imgurl": "./img/members/xushunan.jpg"},
    {"name": "unofficial", "imgurl": "./img/members/unofficial.jpg"},
    {"name": "书香剑墨", "imgurl": "./img/members/shuxiangmojian.jpg"},
    {"name": "我是小禾", "imgurl": "./img/members/woshixiaohe.jpg"},
    {"name": "king", "imgurl": "./img/members/king.jpg"},
    {"name": "晋剑", "imgurl": "./img/members/jinjian.jpg"},
    {"name": "Miya", "imgurl": "./img/members/miya.jpg"},
    {"name": "王峰", "imgurl": "./img/members/wangfeng.jpg"}
];

function addHtml(o) {
    var html = '<div class="col-sm-3">' +
        '<div class="thumbnail member">' +
        '<img src=' + o.imgurl + ' alt="">' +
        '<div class="caption text-center">' +
        ' <h3>' + o.name + '</h3>' +
        '</div>' +
        '</div>' +
        '</div>';
    $(html).appendTo($(".members"));
}
