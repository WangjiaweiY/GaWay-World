import './index.css'
window.addEventListener('DOMContentLoaded', (event) => {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const strengthIndicator = document.getElementById('password-strength');

    // 监听密码输入事件
    passwordInput.addEventListener('input', () => {
      const password = passwordInput.value;

      // 使用正则表达式检查密码强度
      const passwordStrength = calculatePasswordStrength(password);

      // 更新密码强度指示器
      updateStrengthIndicator(passwordStrength);
    });

    // 监听确认密码输入事件
    confirmPasswordInput.addEventListener('input', () => {
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;

      // 检查密码匹配
      const match = checkPasswordMatch(password, confirmPassword);

      // 根据密码匹配结果更新样式
      updateMatchIndicator(match);
    });

    function calculatePasswordStrength(password) {
      // 在这里实现密码强度检查逻辑
      // 返回一个介于0-100之间的密码强度值
      // 根据具体需求定义密码强度
      // 这里只是一个示例实现
      const passwordLength = password.length;
      return passwordLength * 10;
    }

    function updateStrengthIndicator(passwordStrength) {
      // 在这里更新密码强度指示器的样式
      strengthIndicator.style.width = `${passwordStrength}%`;
      strengthIndicator.style.backgroundColor = getPasswordStrengthColor(passwordStrength);
    }

    function getPasswordStrengthColor(passwordStrength) {
      // 在这里根据密码强度返回相应的颜色
      // 根据具体需求定义颜色
      // 这里只是一个示例实现
      if (passwordStrength < 30) {
        return 'red';
      } else if (passwordStrength < 70) {
        return 'orange';
      } else {
        return 'green';
      }
    }

    function checkPasswordMatch(password, confirmPassword) {
      // 在这里检查密码和确认密码是否匹配
      return password === confirmPassword;
    }

    function updateMatchIndicator(match) {
      // 在这里更新密码匹配指示器的样式
      confirmPasswordInput.style.borderColor = match ? 'green' : 'red';
    }
  });