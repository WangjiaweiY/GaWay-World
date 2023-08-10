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
    const TX = document.querySelector('.tixing-container')
    const TX_TEXT = document.querySelector('.tixing')
    if (username === correctUsername && password === correctPassword) {
        console.log("登录成功");
        TX.style.visibility = "visible"
        TX_TEXT.innerHTML = "登录成功"
        TX.style.backgroundColor = 'lightgreen';
        setTimeout( ()=>{
            window.location.href = "../content/index.html";
        },1000)
    } else {
        TX.style.visibility = "visible"
        TX_TEXT.innerHTML = "用户名或密码错误"
        TX.style.backgroundColor = 'red';
        setTimeout( ()=> {
            TX.style.visibility = "hidden"
        },1000)
        console.log("用户名或密码错误");
    }
}