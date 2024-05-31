$("document").ready(function () {
  let elements = $(".slides");
  let setIndex = 0;

  console.log(elements);
  function slides() {
    elements.each(function () {
      $(this).removeClass("active");
    });
    setIndex++;
    if (setIndex > elements.length) {
      setIndex = 1;
    }
    elements.eq(setIndex - 1).addClass("active");
    setTimeout(slides, 3000);
  }
  slides();
  function scroll(n) {
    clearTimeout(timeout);

    setIndex += n;
    if (setIndex > elements.length) {
      setIndex = 1;
    }
    if (setIndex < 1) {
      setIndex = setIndex.length;
    }
    elements.each(function () {
      $(this).removeClass("active");
    });
    elements.eq(setIndex - 1).addClass("active");
    console.log("yes");
    timeout = setTimeout(slides, 3000);
  }
});
