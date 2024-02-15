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
