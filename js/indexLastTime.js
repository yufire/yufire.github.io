document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        let lastTime = localStorage.getItem("lastTime");
        if (lastTime == null || lastTime.length < 1) {
            document.getElementById("lastTime").innerText = "还没有来过吧~";
        } else {
            document.getElementById("lastTime").innerText = lastTime;
        }
        localStorage.setItem("lastTime", curentTime());
    }
    function curentTime() {
        var now = new Date();

        var year = now.getFullYear();       //年
        var month = now.getMonth() + 1;     //月
        var day = now.getDate();            //日

        var hh = now.getHours();            //时
        var mm = now.getMinutes();          //分
        var ss = now.getSeconds();          //分

        var clock = year + "-";

        if (month < 10)
            clock += "0";

        clock += month + "-";

        if (day < 10)
            clock += "0";

        clock += day + " ";

        if (hh < 10)
            clock += "0";

        clock += hh + ":";
        if (mm < 10)
            clock += '0';
        clock += mm + ":";

        if (ss < 10)
            clock += '0';
        clock += ss;
        return clock;
    }
}
