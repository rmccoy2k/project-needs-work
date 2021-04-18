// Projects.JS
// const API_URL
const SEARCH_URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv5n8SLJbp2-FOd619OMpTSFDk_5qi1C3JWg&usqp=CAU'

// const IMG_PATH
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

// const SEARCH_API
const SEARCH_API = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv5n8SLJbp2-FOd619OMpTSFDk_5qi1C3JWg&usqp=CAU"'

// const form
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial movies
getProjects(SEARCH_URL)

// async function
async function getProjects(url) {
  const res = await fetch(url)
  const data = await res.json()

  console.log(data.results)
}

// function showProjects()
function showProjects(projects) {
  main.innerHTML =''

  projects.forEach((project) => {
    const {title, poster_path, vote_average, overview
  } = movie

  const movieEl = document.createElement('div')
  projectEl.classList.add('movie')

  projectEl.innerHTML = `<img src="${IMG_PATH + poster_path}" alt="${title}">
  <div class="movie-info">
    <h3>${title}</h3>
    <span class="${getClassByRate(vote_average)}">${vote_average}</span>
  </div>
  <div class="overview">
    <h3>overview</h3>
    ${overview}
  </div>`

  main.appendChild(projectEl)
})
}

// function getClassByRate()
function getClassByRate(vote) {
  if(vote >= 8) {
    return 'green'
  } else if(vote >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}

// form.addEventListener()
form.addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = search.value

  if(searchTerm && searchTerm !== '') {
    getProjects(SEARCH_API + searchTerm)

    search.value = ''  
  } else {
    window.location.reload()
  }
})
// /rcUcYzGGicDvhDs58uM44tJKB9F.jpg

window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

// Scroll Button
document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});
//************************************* */

// Hamburger Menu
document.querySelector('.hamburger-menu').addEventListener('click', () => {
  document.querySelector('.nav-wrapper').classList.toggle('change');
})
