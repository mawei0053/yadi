var  shopList = (function(){

    return {
        init: function(ele) {
            this.$ele = document.querySelector(ele);
            this.event();
            this.getData();
        },
        event: function() {
            var _this = this;
            this.$ele.addEventListener('click', function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                // 给添加购物车按钮添加事件
                if(target.nodeName === 'BUTTON' && target.className === 'item-button') {
                    // 获取商品id
                    var id = target.getAttribute('attr-id');
                    // 获取商品数量
                    var count = target.parentNode.querySelector('.shop-count').value;
                    _this.addCar(id, count);
                }
            }, false);
        },
        // 获取数据
        getData: function() {
            var _this = this;
            var params = {
                url: '../json/shop.json',
                success: function (data){
                    _this.insertData(data);

                }

            }
            sendAjax(params);
        },
        // 渲染数据
        insertData: function(data) {
            data = data.data;
            var arr = [];
            for(var i = 0; i < data.length; i++) {
                arr.push(` <h2>${data[i].little}</h2>
        <ul>
            <li>
                <div  class="car-item">
                    <div class="item-img">
                        ${data[i].img}
                    </div>
                    <div class="item-des">
                        <h1>${data[i].name}</h1>

                        <div class="des-detail">
                            ${data[i].ps}                       </div>

                        <p class="item-price" style="height: 70px;">${data[i].price}</b>
                            <span style="font-size: 16px; color: #f00; margin: 0px;">${data[i].title}</span>
                        </p>

                        <p class="item-color">颜色
                            <span style="background-color:#ffffff"></span>
                            <span style="background-color:#000000"></span>
                        </p>

                        <button class="item-button" attr-id=${data[i].id}><b>加入购物车</b></button>

                    </div>
                </div>
            </li>
        </ul>`)
            }
            this.$ele.innerHTML = arr.join('');
        },
        // 商品加入到购物车
        addCar: function(id, count) {
            // 把商品数据添加到本地, 提供给购物车页面使用
            // 尽量占用少的属性名称,所以我们把商品数据都保存在一个字段里
            // 我们要把数据都放在shopList里面, 数据类型应该是一个数组, 把多个商品信息存放进去

            // 添加第一个商品时,可能localStorage 不存在这个属性
            // 本地存储都是字符串的形式
            var shopList = localStorage.shopList || '[]';
            // 转化为对象进行操作
            shopList = JSON.parse(shopList);

            // shopList = [{id: 1, count: 1}, {id: 2, count: 2}];

            //  判断原有数据中,是否已经添加过该商品, 如果添加过,直接进行累加, 如果没有添加一条新的数据
            for(var j = 0; j < shopList.length; j++) {
                if(shopList[j].id === id) {
                    // 证明商品已经存在
                    shopList[j].count = Number(shopList[j].count) + Number(count);
                    break;
                }
            }
            if(j === shopList.length) {
                // 商品不存在, 添加一条新数据
                shopList.push({id: id, count: count});

            }
            localStorage.shopList = JSON.stringify(shopList);



        }
    }
}())
