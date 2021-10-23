// Agrupando as variáveis em um objeto

const linksSocialMedia = {
        github: 'brunochagas30',
        youtube: 'channel/UCNgJJiHQiIdc6rlRkl52grQ',
        facebook: 'bruno.oliveirachagas',
        instagram: 'brunochagas30',
        twitter: 'brunochagas301'
    }
    // const github = 'brunochagas30'
    // const youtube = 'channel/UCNgJJiHQiIdc6rlRkl52grQ'
    // const facebook = 'bruno.oliveirachagas'
    // const instagram = 'brunochagas30'
    // const twitter = 'brunochagas301'

// quando cria uma variável dentro da função, não precisa de let const

//DOM fornece acesso dos elementos do HTML para o Javascript, portanto, fornecendo a alteração dos links através do javascript

function changeSocialMediaLinks() {
    // Utilizando o DOM e criando um passo a passo da função
    // document.getElementById('userName').textContent = 'Brunauro'
    // usarName.textContent = 'Bauno' //Mesma função da acima, só que mais fácil por ser ID

    //Trocando as tags "a" das LI utilizando um laço de repetição for
    //Pega os filhos do UL e roda até todos serem realizados
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    //Utilizando o JSON através do FETCH (Não sabe que o retorno é um JSON)
    //Utiliza uma promise para utilizar a informação do fetch

    //Arrow function => forma contraída da função, através de uma função anonima, não necessitando dar um nome para a mesma. Não da para executar da maneira tradicional "nomedafuncao()". Exemplos: (argumento1, argumento2) =>; argumento1 => ; () =>.

    //transformando com a arrow function em json
    //pode se criar varios then

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userLink.href = data.html_url
            userImage.src = data.avatar_url
            userLogin.textContent = data.login
        })
}

getGitHubProfileInfos()