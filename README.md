# Jogo "Mata Mosquito"

Este é um jogo simples de ação e reação, onde o objetivo é matar o maior número possível de mosquitos dentro de um tempo determinado. O jogador deve selecionar o nível de dificuldade, e os mosquitos aparecerão de forma aleatória na tela. O jogo termina quando o tempo acaba ou quando o jogador perde todas as vidas. É possível reiniciar o jogo após a vitória ou derrota.

## Funcionalidades

- **Seleção de Nível**: O jogador pode escolher entre quatro níveis de dificuldade: Normal, Médio, Difícil e Hardcore. Cada nível altera o tempo disponível para o jogo e a velocidade dos mosquitos.
- **Tempo de Jogo**: A cada nível, o tempo de jogo é ajustado para oferecer um desafio adequado ao nível selecionado.
- **Mosquitos Aleatórios**: Os mosquitos aparecem aleatoriamente na tela e podem ser clicados para serem "matados". A cada acerto, o mosquito desaparece, e o jogador ganha pontos.
- **Contagem de Vidas**: O jogador tem um número limitado de vidas, que diminui conforme os mosquitos escapam. Ao perder todas as vidas, o jogo termina.
- **Tela de Vitória/Derrota**: Ao final do jogo, o jogador é redirecionado para uma tela de vitória ou derrota, com a opção de reiniciar o jogo.

## Tecnologias Usadas

- **HTML5**: Estruturação das páginas do jogo.
- **CSS3**: Estilização das páginas e do layout do jogo.
- **JavaScript**: Lógica de funcionamento do jogo, como a criação de mosquitos, controle de tempo, controle de vidas e navegação entre as páginas.
- **Font Awesome**: Ícones para melhorar a interface gráfica.
- **Google Fonts**: Fonte Poppins para estilização do texto.

## Estrutura do Projeto

- **index.html**: Página inicial com a seleção de nível e botão para iniciar o jogo.
- **game.html**: Página principal do jogo onde os mosquitos aparecem e o tempo é controlado.
- **lose.html**: Página exibida quando o jogador perde todas as vidas.
- **win.html**: Página exibida quando o jogador vence o jogo.
- **src/js/start.js**: Lógica para iniciar o jogo e verificar a seleção do nível.
- **src/js/game.js**: Lógica do jogo, incluindo a criação de mosquitos e contagem do tempo.
- **src/js/end.js**: Lógica para reiniciar o jogo após a vitória ou derrota.

## Como Jogar

1. **Escolha o Nível**: Selecione o nível de dificuldade na página inicial.
2. **Inicie o Jogo**: Clique no botão "Iniciar Jogo".
3. **Matar Mosquitos**: Clique nos mosquitos que aparecem na tela. Cada mosquito matado lhe dará pontos e pode ajudar a ganhar tempo.
4. **Evite Perder Vidas**: Não deixe que os mosquitos escapem, pois isso fará você perder uma vida.
5. **Agarre a Vitória**: Vença o jogo antes que o tempo se acabe ou antes de perder todas as vidas!

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
