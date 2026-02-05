const chipAll = document.querySelector('.chip-all')
const avatar = document.querySelector('.avatar')
const createBtn = document.querySelector('.create-btn')
const menuToggle = document.querySelector('#menuToggle')
const sideMenuToggle = document.querySelector('#sideMenuToggle')
const hiddenSideBar = document.querySelector('#hiddenSideBar')
const chipGaming = document.querySelector('.chip-gaming')
const chipMusic = document.querySelector('.chip-music')
const chipPodcast = document.querySelector('.chip-podcast')
const musicVideo = document.querySelector('.music-video')
const chipJs = document.querySelector('.chip-js')
const chipMixes = document.querySelector('.chip-mixes')
const chipPlaylists = document.querySelector('.chip-playlists')
const allVideo = document.querySelector('.all-video')
const gamingVideo = document.querySelector('.gaming-video')
const create = document.querySelector('#create')
const AccountPanel = document.querySelector('#zx9-account-panel-root'
)
const podcastVideo = document.querySelector('.podcast-video')
chipAll.addEventListener('click', ()=>{
  gamingVideo.classList.add('hidden')
  allVideo.classList.remove('hidden')
   musicVideo.classList.add('hidden')
  podcastVideo.classList.add('hidden')
})
chipGaming.addEventListener('click', ()=>{
  gamingVideo.classList.remove('hidden')
  allVideo.classList.add('hidden')
  musicVideo.classList.add('hidden')
  podcastVideo.classList.add('hidden')
})
menuToggle.addEventListener('click',()=>{
  hiddenSideBar.classList.remove('hidden')
  
})
sideMenuToggle.addEventListener('click', ()=>{
  hiddenSideBar.classList.add('hidden')
})
createBtn.addEventListener('click', ()=>{
  create.classList.toggle('hidden')
})


avatar.addEventListener('click', ()=>{
  AccountPanel.classList.toggle('hidden')
  if(!AccountPanel.classList.contains('hidden')){
    create.classList.add('hidden')

  }
})

chipMusic.addEventListener('click', ()=>{
  gamingVideo.classList.add('hidden')
  allVideo.classList.add('hidden')
  musicVideo.classList.remove('hidden')
  podcastVideo.classList.add('hidden')
})


chipPodcast.addEventListener('click', ()=>{
  podcastVideo.classList.remove('hidden')
  gamingVideo.classList.add('hidden')
  allVideo.classList.add('hidden')
  musicVideo.classList.add('hidden')
})
