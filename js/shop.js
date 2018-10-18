var shopCar = (function(){

    return {
        init: function(ele) {
            this.$ele = document.querySelector(ele);
            this.event();
            this.getShopList();
        },
        event: function() {
            var _this = this;
            this.$ele.oninput = function(e) {
                if(e.target.className == 'shop-count') {
                    // 获取商品总价
                    var _parent =  e.target.parentNode
                    // console.log(e.target.value,_parent.querySelector('.shop-price'));
                    _parent.querySelector('.shop-total').innerHTML = e.target.value * _parent.querySelector('.shop-price').innerHTML;

                }
            }
        },
        // 获取商品数据
        getShopList: function() {
            var _this = this;
            var params = {
                url: '../json/shop.json',
                success: function (data){
                    // 把商品数据放到实例的属性上
                    _this.shopList = data.data;
                    console.log(_this.shopList)
                    _this.getData();
                }
            }
            sendAjax(params);
        },
        // 获取购物车数据
        getData: function() {
            this.carShopList = JSON.parse(localStorage.shopList || '[]');
            this.insertData(this.carShopList);
        },
        // 把购物车数据添加到页面中
        insertData: function(data) {
            // console.log(this.shopList);
            // console.log(data);
            var arr = [];
            // [{id: 1, count: 2}]
            for(var i = 0; i < data.length; i++) {
                // 通过id获取商品信息
                var shop;
                for(var j = 0; j < this.shopList.length; j++) {
                    if(this.shopList[j].id == data[i].id) {
                        // 获取商品信息
                        shop = this.shopList[j];
                        break;
                    }
                }
                arr.push( `<div class="shopping_insert">
        <input type="checkbox" class="check_box">
        <span class="shop-name">${shop.name}</span>
        <span class="shop-price">${shop.price}</span>
        <input class="shop-count" type="number"  value="${data[i].count}"/>
        <span class="shop-total">${shop.price * data[i].count}</span>
        <input type="button" class="btn shop-btn-del" attr-id="${data[i].id}" value="删除">
        
       </div> `)
            }
            this.$ele.innerHTML = arr.join('');
        }
    }


}());
    var btn = document.getElementsByClassName('.btn');
    btn.onclick = function () {
        console.log("111")
    }