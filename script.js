
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const widthRatio = Math.floor(window.innerWidth / 300);
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", function () {
    clickCounter++;
    if (itemNumber - (2 + clickCounter) + (2 - widthRatio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = `translateX(0)`;
      clickCounter = 0;
    }
  });

  /*   console.log(movieLists[i].computedStyleMap().get("transform")[0].x.value); */
});
/* dark mode */
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-wrapper,.sidebar,.sidebar i,.left-menu-icon,.toggle,.movie-list-filter select,.movie-list-title"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});