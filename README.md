# Previsão do Tempo

Este é um projeto de aplicativo da web para obter informações atualizadas sobre a previsão do tempo de uma determinada localidade.

## Funcionalidades

- **Pesquisa por cidade:** Os usuários podem digitar o nome de uma cidade na caixa de pesquisa e clicar no botão de pesquisa para obter informações sobre o clima daquela cidade.
  
- **Exibição de informações:** O aplicativo exibe as seguintes informações sobre o clima da cidade pesquisada:
  - Temperatura atual em graus Celsius.
  - Temperatura máxima do dia.
  - Umidade relativa do ar em percentagem.
  - Velocidade do vento em metros por segundo.
  - Condições climáticas (chuva, nublado, limpo, etc.).
  - Ícone representando a condição climática.
  - Hora local.
  - Horário do nascer do sol.
  - Horário do pôr do sol.

- **Atualização automática:** As informações são atualizadas automaticamente sempre que uma nova cidade é pesquisada.

- **Funcionalidade offline:** O aplicativo é capaz de armazenar localmente os dados da última consulta de previsão do tempo, permitindo que os usuários acessem as informações mesmo quando estiverem offline.

## Tecnologias Utilizadas

- HTML, CSS e JavaScript para o desenvolvimento da interface do usuário e lógica de aplicativo.
- API do OpenWeatherMap para obter os dados de previsão do tempo.
- Armazenamento local do navegador (localStorage) para suportar a funcionalidade offline.

## Como Usar

1. Clone este repositório para o seu computador:

```
git clone https://github.com/seu-usuario/previsao-do-tempo.git
```

2. Abra o arquivo `index.html` em um navegador da web.

3. Digite o nome de uma cidade na caixa de pesquisa e pressione Enter ou clique no botão de pesquisa.

4. Visualize as informações de previsão do tempo para a cidade pesquisada.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue para relatar problemas, sugerir melhorias ou enviar pull requests.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
