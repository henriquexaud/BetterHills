// image gallery

function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes ativas
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".hill-description > img")

    //atualizar o conteiner de imagem
    imageContainer.src = image.src

    //adicionar a classe .active para o botão clicado
    button.classList.add('active')
}
