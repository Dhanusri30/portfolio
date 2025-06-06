const texts = ["Web Developer |", "Web Designer |", "UI/UX Designer |"];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  function type() {
    if (count === texts.length) {
      count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("type-text").textContent = letter;
    if (letter.length === currentText.length) {
      setTimeout(() => {
        index = 0;
        count++;
        setTimeout(type, 1000);
      }, 1500);
    } else {
      setTimeout(type, 150);
    }
  }

  type();