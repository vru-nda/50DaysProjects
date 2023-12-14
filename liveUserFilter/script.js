const resultEle = document.getElementById("result");
const filterInput = document.getElementById("filter");

const listItems = [];

async function fetchData() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const {results} = await res.json();

  // clear result
  resultEle.innerHTML = "";

  results.forEach((user) => {
    const liEle = document.createElement("li");
    listItems.push(liEle);

    const cardContent = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
          <h4>${user.name.title} ${user.name.first} ${user.name.last}</h4>
          <p>${user.location.country}</p>
        </div>
    `;
    liEle.innerHTML = cardContent;
    resultEle.appendChild(liEle);
  });
}

fetchData();

// Filter data on search
filterInput.addEventListener("input", (e) => filterData(e.target.value));

function filterData(search) {
  listItems.filter((item) => {
    if (item.innerText.toLowerCase().includes(search.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
