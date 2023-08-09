document.querySelector(".btn").addEventListener("click", ()=> {
    login()
    console.log("登录点击成功")
    window.location.href = "https://www.baidu.com";
})

function login() {
    // 获取用户名和密码输入框的值
    var username = document.querySelector("input[name='username']").value;
    var password = document.querySelector("input[name='password']").value;
    // 假设正确的用户名和密码为 "admin" 和 "password"
    var correctUsername = "admin";
    var correctPassword = "password";
    // 验证用户名和密码是否正确
    if (username === correctUsername && password === correctPassword) {
        console.log("登录成功");
    } else {
        console.log("用户名或密码错误");
    }
}