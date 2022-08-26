# FORMULÁRIO - Dados de cartão de credito com preenchimento em tempo real

## Índice

- [Visão Geral](#visão-geral)
  - [O desafio](#the-challenge)
  - [Captura de tela](#captura-de-tela)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construído com](#construído-com)
  - [O que aprendi](#o-que-aprendi)
  - [Desenvolvimento contínuo](#desenvolvimento-contínuo)
- [Autor](#autor)
- [Agradecimentos](#agradecimentos)

## Visão geral

Esse é o projeto final criado ao longo das aulas do curso "JavaScript: manipulando o DOM"

### O desafio

Os usuários devem ser capazes de:

- Preencher os dados do cartão e em tempo real ver o exemplo ser completado automaticamente.
- Receber mensagem de erro ao não informar dados validos
- Visualizar tela de envio efetivado

### Captura de tela

![Resultado final](/assets/images/resultado.png)

### Links

- URL do site ao vivo: (<https://interactive-card-details-form-main.vercel.app/>)

## Meu processo

Demorei cerca de 30h de trabalho para concluir o desafio

### Construído com

- Marcação HTML5 semântica
- Propriedades personalizadas de CSS
- Flexbox
- Grade CSS
- Automação com JavaScript
- Manipulação de DOM

### O que eu aprendi

Aprendi bastante sobre manipulação de DOM. Aprendi sobre criação de script reutilizavel. Sobre funções anonimas e expressões em JavaCript

Para ver como você pode adicionar snippets de código, veja abaixo:

``` js
    function setSuccessFor(input) {
    const formControl = input.parentElement;
    const h3 = formControl.querySelector('h3');
    const confirm = document.getElementById('formulario');
    const form_restart = document.getElementById('confirmacao_continue');
    formControl.className = 'formulario__cartaoDados success';
    input.classList.remove("formulario__erro");
    h3.classList.remove("mostrar_erro");
    confirm.classList.add("formulario_invisivel");
    form_restart.classList.add("confirmacao_visivel");
}
```

### Desenvolvimento contínuo

Para o futuro vou aprofundar os estudos sobre manipulação do DOM e o uso de funções anonimas.

## Autor

- URL no front mentor: (<https://www.frontendmentor.io/profile/KatyaPalheta>)
- Linkedin: (www.linkedin.com/in/katyapalheta)

## Agradecimentos

Agradeço a Alura, escola de programação, por ter sido minha fonte de conhecimento e minha amiga na trajetória de crescimento pessoal. Aos membros da comunidade Code, mentoria que está moldando minha mente para o mercado de trabalho. Especial agradecimento ao Professor Pedro MArins, mentor, que me inspira e motiva a não desistir. Obrigada pela força, professor.