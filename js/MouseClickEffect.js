var a_idx = 0;
var title;
function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
jQuery(document).ready(function ($) {

    document.addEventListener('visibilitychange', function () {
        // 页面变为不可见时触发 
        if (document.visibilityState == 'hidden') {
            title = $("title").text();
            document.title = '不要走，快回来！';
        }
        // 页面变为可见时触发 
        if (document.visibilityState == 'visible') {
            document.title = title;
        }
    });


    $("body").click(function (e) {
        // var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
        var a = new Array("好好学习", "天天向上","习无范围","学无止境");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": `rgb(${getRandom(255, 0)},${getRandom(255, 0)},${getRandom(255, 0)})`,
            "user-select": 'none',
            "cursor": 'default'
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
            1500,
            function () {
                $i.remove();
            });
    });
});