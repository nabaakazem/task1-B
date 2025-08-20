const nameInput = document.getElementById("nameInput");
const resultText = document.getElementById("resultText");
const btn = document.getElementById("btn");

function predictAge() {
    const name = nameInput.value.trim();

    if (name === "") {
        resultText.textContent = "Please enter a name!";
        return;
    }

    const url = `https://api.agify.io/?name=${name}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
          if (data.age) {
              resultText.textContent = `Predicted age for "${data.name}" is ${data.age} years.`;
          } else {
              resultText.textContent = `Sorry, no prediction available for "${data.name}".`;
          }
      })
      .catch(err => {
          resultText.textContent = "Oops! Something went wrong.";
          console.error(err);
      });
}

// Event listener
btn.addEventListener("click", predictAge);
