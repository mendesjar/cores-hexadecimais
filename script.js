window.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("inputColor");
  const body = document.getElementsByTagName("body");

  const changeColor = (e) => {
    const regex = /^[0-9a-fA-F]{6}$/;
    const color = e.target.value;
    if (!regex.test(color)) {
      return (body[0].style.background = color);
    }
    body[0].style.background = `#${color}`;
  };

  input.addEventListener("keyup", changeColor);
});
