# md-links
A md-links te ajuda a buscar facilmente e validar links existentes em arquivos Markdown. 

## Guia de instalação
* Para instalar globalmente:
 `sudo npm install --global camila-monreal/md-links`

* Para instalar e contribuir: 
1. Fork o projeto;
2. Clone (URL):  `git clone <URL do seu fork>`

***
 
## API exemplo de teste
Deixei uma pasta chamada tests-md-file, dentro da pasta test. Essa pasta contém 02 arquivos md("Teste.md" e "Teste-2.md), com links e um exemplo de teste usando a API ("teste-api.js"). 
No projeto nós temos a API, onde você pode importar a md-links para usar em um projeto node, o exemplo está no arquivo "teste-api.js".

***

## CLI Executáveis
* Para descobrir os links que contém em algum arquivo md:
`md-links <Caminho da pasta com vários arquivos md, ou o arquivo md específico>`

* Você pode testar usando a pasta tests-md-file, que contém 02 arquivos md, por exemplo:
`md-links <Caminho da pasta com vários arquivos md, ou o arquivo md específico>`

Esse comando restorna:  Caminho do arquivo | Link | Título do link (Até 50 characters)

* Para ver o número de links usamos o Stats:
`md-links <Caminho da pasta com vários arquivos md, ou o arquivo md específico> --stats`

Retorna número de links (all).

* Para validar o link: 
`md-links <Caminho da pasta com vários arquivos md, ou o arquivo md específico> --validate`

Esse comando retorna: Caminho do arquivo | Link | StatusCode | Título do link (Até 50 characters). 

Através do StatusCode que virá por números é possivel identificar a situação do site, você pode consultar no link :smiley_cat: [HTTP Cats](https://http.cat/ ) o que significam cada StatusCode.

* Para validar o link e retornar stats com o link validado:
`md-links <Caminho da pasta com vários arquivos md, ou o arquivo md específico> --validate --stats`

Esse comando retorna: Todos os links(all) | Links quebrados(Broken) | StatusCode class 400 | StatusCode class 500.

***

## Especificações técnicas 
* Node JS 
* [JSDOM](https://github.com/jsdom/jsdom)
* [REQUEST](https://github.com/request/request)
* [FS node](https://nodejs.org/docs/v0.3.1/api/fs.html)
* Link do planejamento para criar o projeto [Board no Trello](https://trello.com/b/VFInzOLQ/md-links)

***

### Débito técnico 
TDD utilizando JEST 