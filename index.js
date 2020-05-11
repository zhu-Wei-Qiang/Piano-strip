const oUl = document.querySelector("#wrap ul");
const oLi = document.querySelectorAll("#wrap li");
const oButtom = document.querySelectorAll(".close");
// 记录当前被展开元素
let last = null;

setTimeout(function () {
  // 去掉class样式 慢慢向上运动
  oUl.className = "";
}, 200);

// 利用冒泡进行事件委托 不需要一个一个去绑定
oLi.forEach((item, index) => {
  // 点击展开
  item.onclick = function () {
    oUl.id = "actWrap";
    last && (last.className = "");
    item.className = "active";
    last = this;
  };
  //点击关闭
  oButtom[index].onclick = function (e) {
    e.stopPropagation();
    oUl.id = "";
    last.className = "";
  };
});
