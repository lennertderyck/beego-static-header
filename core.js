const scrollEffect = (event) => {
  console.log(event);
};

const bumper = 400;
const $main = document.querySelector("header");
const setScrollProgress = (percent) => {
  if (percent <= bumper) $main.classList.remove("header--scrolled");
  else $main.classList.add("header--scrolled");
};

const setScrollHeight = (scrollHeight) => {
  if (scrollHeight <= bumper) {
    scrollHeight = (100 - Math.round(scrollHeight / 4) * 1) / 100;
    document.body.style.setProperty("--scroll-process", scrollHeight);
    document.body.style.setProperty(
      "--scroll-process-px",
      `${scrollHeight * 100}px`
    );
  }
};

function getScrollPercent() {
  const h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";

  return {
    scrollheight: h[st] || b[st],
    percent: Math.round(
      ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
    ),
  };
}

setScrollProgress();
document.addEventListener("scroll", () => {
  const { percent, scrollheight } = getScrollPercent();
  setScrollProgress(scrollheight);
  setScrollHeight(scrollheight);
});
