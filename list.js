(function() {
    var secretApps = [
{img: './png/jlgj.jpg', name: '君临国际', xurl: 'aHR0cHM6Ly90ZmFqbi5oY2p3ai5jb20vYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTIwODEmdG9wSWQ9MjM4MTA1NyZzZWxmUGxhbklkPTIxMTM0NDg='},
{img: './png/xsd.jpg', name: '新时代', xurl: 'aHR0cHM6Ly9kZXJlYXIuZm5icHN3LmNvbS9hcHAvcmVnaXN0ZXIucGhwP3NpdGVfaWQ9MTA1OSZ0b3BJZD0xODgzNTAyJnNlbGZQbGFuSWQ9MTQ4NzYyNA=='},
{img: './png/stgj.jpg', name: '胜天国际', xurl: 'aHR0cHM6Ly90ZmFqbi5oY2p3ai5jb20vYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTEwNTgmdG9wSWQ9ODAzNDImc2VsZlBsYW5JZD02OTUxMw=='},
{img: './png/dfgj.png', name: '巅峰国际', xurl: 'aHR0cHM6Ly9nZnZneC5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMwJnRvcElkPTQyOTQy'},
{img: './png/ztgj.png', name: '征途国际', xurl: 'aHR0cHM6Ly9wa2FqaW0uaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMxJnRvcElkPTEzOTE3Ng=='},
{img: './png/yh.png', name: '壹号娱乐', xurl: 'aHR0cHM6Ly9nZnZneC5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD04MDAmcHQ9RjVFRTBBQzAtOUE5MC05NzM3LTgxOTMtMUVBQzg5QjM3MTE0'},
{img: './svg/wd.svg', name: '问鼎娱乐', xurl: 'aHR0cHM6Ly9vbmtyY3kuaGVmYXNoaXAuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDIwJnRvcElkPTI5MjYxMTM='},
{img: './png/cfgj.png', name: '超凡国际', xurl: 'aHR0cHM6Ly9wa2FqaW0uaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMyJnRvcElkPTM5NTAy'},
{img: './png/yw28.jpg', name: '亿万28', xurl: 'aHR0cHM6Ly93Y3d4LnBhcmFkaXNlbWFsbC5uZXQvYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTEwMTcmdG9wSWQ9NDIzNDc3MA=='},
{img: './png/ffyl.png', name: '非凡国际', xurl: 'aHR0cHM6Ly9iYWttcnkuZ3ppYXN0aS5jb20vYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTEwNTAmdG9wSWQ9Mzk2OTc4JnNlbGZQbGFuSWQ9Mjc4ODE4'},
{img: './png/c7.png', name: 'C7', xurl: 'aHR0cHM6Ly8zOC4xODEuMjMuMjU6NjAwMDUvIy9saW5rP2FsbHdpbj03UWpVRVhYa3NXd2E2ZGE2SlFFJTJCc2clM0QlM0Q='}, 
{img: './png/top1.png', name: 'Top1体育', xurl: 'aHR0cHM6Ly9sbmNxYy5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDUxJnRvcElkPTU1NTcxNA=='},
{img: './png/ng.png', name: '南宫国际', xurl: 'aHR0cHM6Ly8xNTYuMjM0LjEuMTMxOjg4NjYvIy9saW5rP2FsbHdpbj0xMTA0MjcwMA=='}
    ];

    var container = document.getElementById('xapes');
    if (!container) return;

    secretApps.forEach(function(app) {
        // 1. 创建元素
        var li = document.createElement('li');
        li.className = 'app-item'; // 只保留类名用于样式

        li.innerHTML = `
            <div class="app-icon"><img src="${app.img}"></div>
            <div class="app-name">${app.name}</div>
        `;

        li.onclick = function() {
            try {
                // 解码并跳转
                var targetUrl = atob(app.xurl.trim());
                window.open(targetUrl, '_blank');
            } catch (e) {
                console.error("解码失败:", e);
            }
        };

        // 4. 塞进容器
        container.appendChild(li);
    });
})();

window["document"]['getElementById']("3")['innerHTML'] = ("2026世界杯<br>点击查看赛程");
window["document"]['getElementById']("2")['innerHTML'] = ("🔥十年信誉平台<br>⚽世界杯官方投注平台");
window["document"]['getElementById']("1")['innerHTML'] = "PG777.LOL";


function showPopupOnce(popupId = 'sw_loaded') {
  const key = `popup_${popupId}_shown`;
  
  if (localStorage.getItem(key)) {
    return; 
  }
  alert('欢迎访问PG777.LOL！');
  localStorage.setItem(key, Date.now().toString());
}
window.addEventListener('load', function() {
  showPopupOnce();
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
      console.log('SW registered');
    });
}