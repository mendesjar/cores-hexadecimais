window.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("inputColor");
  const body = document.getElementsByTagName("body");
  const placeholder = "Digite o Código";
  input.placeholder = placeholder + " hexadecimal ou cor em inglês";

  const getLuminance = (color) => {
    const colorParts = color.match(/^#([a-f0-9]{6})$/i);
    if (!colorParts) return;

    const r = parseInt(colorParts[1].substring(0, 2), 16) / 255;
    const g = parseInt(colorParts[1].substring(2, 4), 16) / 255;
    const b = parseInt(colorParts[1].substring(4, 6), 16) / 255;

    const maxRGB = Math.max(r, g, b);
    const minRGB = Math.min(r, g, b);
    const L = (maxRGB + minRGB) / 2;
    return L;
  };

  let placeholderLuminance = getLuminance("#fff");

  function mudarPlaceHolder(color) {
    const backgroundLuminance = getLuminance(color);

    if (backgroundLuminance > placeholderLuminance) {
      input.style.color = "#000";
    } else {
      input.style.color = "#FFF";
    }
    placeholderLuminance = getLuminance(color);
  }

  const changeBackground = (e) => {
    if (e.target.value && e.target.value?.length === 6) {
      const regex = /^[0-9a-fA-F]{6}$/;
      const color = e.target.value;
      if (!regex.test(color)) {
        return (body[0].style.background = color);
      }
      body[0].style.background = `#${color}`;
      mudarPlaceHolder(`#${color}`);
    }
  };

  const enablePlaceHolder = () => {
    if (document.body.clientWidth <= 600) {
      input.placeholder = placeholder;
    } else {
      input.placeholder = placeholder + " hexadecimal ou cor em inglês";
    }
  };

  input.addEventListener("keyup", changeBackground);
  window.addEventListener("resize", enablePlaceHolder);
});
