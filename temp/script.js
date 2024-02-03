const tweetForm = document.getElementById("tweetForm");
const tweetInput = document.getElementById("tweetInput");
const tweetList = document.getElementById("tweetList");

tweetForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const tweet = document.createElement("div");
  tweet.textContent = tweetInput.value;
  tweetList.appendChild(tweet);
  tweetInput.value = "";
});

document.addEventListener("DOMContentLoaded", function () {
  const tweetForm = document.getElementById("tweetForm");
  const commentsButton = document.querySelector(".comments");

  commentsButton.addEventListener("click", function () {
    if (tweetForm.style.display === "none") {
      tweetForm.style.display = "block";
    } else {
      tweetForm.style.display = "none";
    }
  });
});
