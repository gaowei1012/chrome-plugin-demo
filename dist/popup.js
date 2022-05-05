/*
 * @Author: mingwei
 * @Date: 2022-05-05 11:14:42
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-05 17:19:20
 * @FilePath: /chromePlugin/src/popup.ts
 * @Description:
 */
document.getElementById("content").innerText = "hello chrome plugin";
document.getElementById("btn").onclick = function () {
    console.log("hello");
};
// 打开新页面
// chrome.tabs.create({ url: "https://www.baidu.com" });
chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    console.log("tabs", tabs);
    // chrome.tabs.sendMessage(tabs[0].id, "hello", (res) => {
    //   console.log("bg", res);
    //   alert("res");
    // });
});
chrome.action.setBadgeBackgroundColor({ color: [0, 255, 0, 0] }, function () {
    console.log("sss");
});
