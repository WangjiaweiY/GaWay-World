document.querySelector(".btn").addEventListener("click", ()=> {
    login()
})

function login() {
    // 获取用户名和密码输入框的值
    var username = document.querySelector("input[name='username']").value;
    var password = document.querySelector("input[name='password']").value;
    // 假设正确的用户名和密码为 "admin" 和 "password"
    var correctUsername = "yinyutong";
    var correctPassword = "yytwjw1314";
    // 验证用户名和密码是否正确
    if (username === correctUsername && password === correctPassword) {
        console.log("登录成功");
        window.location.href = "../snow-flowers/index.html";
    } else {
        console.log("用户名或密码错误");
    }
}