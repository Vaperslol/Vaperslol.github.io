let lightmode = localStorage.getItem('lightmode')
const kapcsolo = document.getElementById('kapcsolo')

const bekapcsLightmode = () => {
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'bekapcsolt')
}

const kikapcsLightmode = () => {
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode', null)
}

if (lightmode === 'bekapcsolt') bekapcsLightmode()

kapcsolo.addEventListener(
    "click", () => {
            lightmode = localStorage.getItem('lightmode')
            lightmode !== "bekapcsolt" ? bekapcsLightmode() : kikapcsLightmode()
});

