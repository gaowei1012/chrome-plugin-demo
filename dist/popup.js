/*
 * @Author: mingwei
 * @Date: 2022-05-05 11:14:42
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-05 18:10:46
 * @FilePath: /chromePlugin/src/popup.ts
 * @Description:
 */
document.getElementById("content").innerText = "hello chrome plugin";
document.getElementById("btn").onclick = function () {
    console.log("hello");
};
// 打开新页面
// chrome.tabs.create({ url: "https://www.baidu.com" });
