function handleClick() {

  fetch("/quote", { method: 'GET' }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    console.log("Request failed");
  }).then((res) => {
    document.getElementById("quote").innerText = res.quote;
    document.getElementById("author").innerText = res.author;
  });
}

function handleTweet() {
  alert("No me han implementado");
}