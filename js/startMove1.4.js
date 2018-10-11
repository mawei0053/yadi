
/*
    多属性运动
*/
function startMove(ele, targetObj, callback) {
    var speed = 10;
    if(typeof ele == 'string') {
        ele = document.querySelector(ele);
    }  
    clearInterval(ele.timer);
    ele.timer = setInterval(function() {
        var flag = true;
        for(var attr in targetObj) {
            target = targetObj[attr];
            var _attr = parseFloat(getStyle(ele, attr));
            if(attr == 'opacity') {
                _attr *= 100;
            }
            speed = (target - _attr) / 30;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            _attr += speed;

            // 所有属性都达到目标值，才停止时间函数
            if((speed > 0 && _attr >= target)||(speed < 0 && _attr <= target)) {
                _attr = target;
            } else {
                flag = false;
            }

            if(attr == 'opacity') {
                _attr /= 100
            } else {
                _attr += 'px';
            }
            ele.style[attr] = _attr;
        }
        if(flag) {
            clearInterval(ele.timer);
            if(callback) {
                callback(ele);
            }
        }
    }, 10)
}


function getStyle(ele, attr) {
    if(window.getComputedStyle){
        return window.getComputedStyle(ele, false)[attr];
    }
    return ele.currentStyle[attr];
}