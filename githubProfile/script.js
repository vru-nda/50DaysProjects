const APIURL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const user = search.value;

  if (user) {
    getUser(user);
    setTimeout(() => {
      getRepos(user);
    }, 200);
  }
});

// Get user details
const getUser = async (username) => {
  try {
    const {data} = await axios.get(`${APIURL}${username}`);
    createUserCard(data);
  } catch (error) {
    createErrorCard('No Profile with this username found!');
  } finally {
    search.value = '';
  }
};

// get Repos list for the user
const getRepos = async (username) => {
  try {
    const {data} = await axios.get(`${APIURL}${username}/repos?sort=created`);
    appendReposList(data);
  } catch (error) {
    console.log('ERROR', error);
    createErrorCard('Error fetching repositories');
  } finally {
    search.value = '';
  }
};

//Create a user card to display
const createUserCard = (user) => {
  const {avatar_url, bio, public_repos, followers, following, name} = user;

  const cardHTML = `
    <div class="card">
        <div>
          <img
            src=${avatar_url}
            alt=${name}
            class="avatar"
          />
        </div>
        <div class="user-info">
          <h2>${name}</h2>
          <p>
            ${bio}
          </p>
          <ul>
            <li>${followers}<strong>Followers</strong></li>
            <li>${following}<strong>Following</strong></li>
            <li>${public_repos}<strong>Respositories</strong></li>
          </ul>
          <div id="repos"></div>
        </div>
    </div>
  `;

  main.innerHTML = cardHTML;
};

// Add the repos list to the user card
const appendReposList = (repos) => {
  //this will not be available before this
  const resposEle = document.getElementById('repos');

  console.log('repos', repos);
  if (repos.length > 0) {
    repos.slice(0, 5).map(({name, html_url}) => {
      const repoEle = document.createElement('a');
      repoEle.classList.add('repo');
      repoEle.href = html_url;
      repoEle.target = '_blank';
      repoEle.innerText = name;

      resposEle.appendChild(repoEle);
    });
  } else {
    resposEle.innerHTML = `<h5>No Respositories to show.</h5>`;
  }
};

const createErrorCard = (message) => {
  const cardHTML = `
    <div class="card" style="">
      <h1>${message}</h1>
    </div>
    `;
  main.innerHTML = cardHTML;
};
