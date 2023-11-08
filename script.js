let campoBusca = document.querySelector('#busca')
let container = document.querySelector('.container')
let btnPesquisar = document.querySelector('#pesquisar')

// pegar foto do perfil, bio, nome, seguidores, sehuindo

btnPesquisar.addEventListener('click',async ()=>{
    let endpoint = `https://api.github.com/users/${campoBusca.value}`

    let resposta = await fetch(endpoint)

    let usuario = await resposta.json()

    console.log(usuario)

   
    if(usuario.hasOwnProperty('message')){
        alert("Usuario nao encontrado")
    } else{
        let div = document.createElement('div')
        let img = document.createElement('img')
        let pBio = document.createElement('p')
        let h1 = document.createElement('h1')
        let pSeguidores = document.createElement('p')
        let pSeguindo = document.createElement('p')
    
        div.classList.add('card')
        img.setAttribute('src', usuario.avatar_url)
        h1.textContent = usuario.name
        pBio.textContent = usuario.bio
        pSeguidores.textContent = `Seguidores: ${usuario.followers}`
        pSeguindo.textContent = `Seguindo: ${usuario.following}`
    
        div.appendChild(img)
        div.appendChild(h1)
        div.appendChild(pBio)
        div.appendChild(pSeguidores)
        div.appendChild(pSeguindo)
    
        container.appendChild(div)
    }


})