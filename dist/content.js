/*
 * @Author: mingwei
 * @Date: 2022-05-05 14:33:54
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-05 18:07:42
 * @FilePath: /chromePlugin/src/content.ts
 * @Description: 执行逻辑
 */
var img = [
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww1.sinaimg.cn%2Fmw690%2F0033ImPzly1h1wbwdzj8gj60rs0kuace02.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654335631&t=50011e005463883d8040f928ab0cf8eb",
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170508%2F4d471a777c7f4b3ca80dd958d03d5a21_th.jpeg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654335671&t=b057d2d307320436acd2456679088455",
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170508%2Fe9dbfc06cbaf48179f94d7a5e78fcdd5_th.jpeg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654336886&t=f325cbee9fcb24d3fd576d35b6f9d3b6",
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fss2.meipian.me%2Fusers%2F16469084%2Fcb7bf27fba108958b4cac59b08372ef8.jpg%3Fmeipian-raw%2Fbucket%2Fivwen%2Fkey%2FdXNlcnMvMTY0NjkwODQvY2I3YmYyN2ZiYTEwODk1OGI0Y2FjNTliMDgzNzJlZjguanBn%2Fsign%2F109577a975e05ae98488534998811077.jpg&refer=http%3A%2F%2Fss2.meipian.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654336909&t=042f1288c948a3382559f6ab6da6e14c",
];
// 查找百度一下，按钮元素
var inputDom = document.getElementById("su");
var inputKw = document.getElementById("kw");
// 查找百度logo，img
var logoImg = document.getElementById("s_lg_img_new");
// 进入先修改页面
// inputDom.setAttribute("value", "点我一下，你会有惊喜呦!");
// inputDom.style.width = "208px";
inputDom.type = "button";
inputDom.onclick = function () {
    if (inputKw.value) {
        inputDom.type = "submit";
        // inputDom.style.width = "108px";
        // inputDom.setAttribute("value", "百度一下");
    }
    else {
        logoImg.src = img[Math.floor(Math.random() * img.length)];
    }
};
