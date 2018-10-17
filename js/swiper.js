var swiper = (function () {
    var box = document.getElementById('box');
    var liBox = box.querySelectorAll('li');
    var uuBox = document.getElementById('uu');
    var uuLiBox = uuBox.querySelectorAll('li');
    var timer = null;
    return {
        init: function (index) {
            index = index || 0;
            this.event();
            this.showImage(index);
            this.autoPlay(index);
        },
        event: function () {
            var _this = this;
            uuBox.onclick = function (ev) {
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if (target.nodeName === 'LI') {
                    _this.showImage(target.innerHTML - 1);
                    _this.autoPlay(target.innerHTML - 1);
                }
            }
        },
        showImage: function (index) {
            for (var i = 0; i < liBox.length; i++) {
                uuLiBox[i].removeAttribute('class');
                // 先把图片透明度改为0， 再让图片隐藏
                // debugger
                startMove(liBox[i], {opacity: 0}, function(obj) {
                    // 函数内部属于异步函数，for循先执行完，所以此时里面你的i 等于最大值 
                    // console.log(i) // 6
                   // console.log(obj);
                    obj.style.display = 'none';
                })
            }
            // 让图片先显示，在从透明度0到1；
            liBox[index].style.display = 'block';
            startMove(liBox[index], {opacity: 100});
            uuLiBox[index].className = 'current';
        },
        autoPlay: function (index) {
            var _this = this;
            // 取消上一个定时器
            clearInterval(timer);
            // 重置一个新的定时器
            timer = setInterval(function () {
                index++;
                // 循环播放
                if (index > 2) {
                    index = 0;
                }
                _this.showImage(index);
            }, 3000)
        }
    }
}())

