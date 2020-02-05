# Consumindo APIs Django Rest Framework com Angular e Materialize / Consuming Django Rest Framework APIs with Angular and Materialize 
Demonstração de front-end em Angular com Materialize consumindo API back-end em Django Rest Framework para buscar Autores: /  
Front-end demonstration in Angular with Materialize consuming back-end API in Django Rest Framework to search for Authors: 

[API back-end Django Rest Framework](https://github.com/antoniojr78/demo-apis-com-drf)  

1. Clone o repositório / Clone the repository: 
```bash
$ git clone -b develop https://github.com/antoniojr78/demo-apis-com-drf-angular-ui.git 
$ cd demo-apis-com-drf-angular-ui
```  

2. Instalar Pré-requisitos Node, Npm e Angular (uma única vez) / Install Prerequisites Node, Npm and Angular (one time): 
```bash
(venv) demo-apis-com-drf-angular-ui$ sudo apt install -y nodejs && sudo apt install -y npm && sudo npm install -g @angular/cli
```  

3. Instalar requerimentos do Projeto / Install Project requirements: 
```bash
(venv) demo-apis-com-drf-angular-ui$ cd my-project-ui && npm install
```  

4. Executar o Servidor / Run the Server
```bash
(venv)~/demo-apis-com-drf-angular-ui/my-project-ui$ ng serve
```  

5. Será servido no navegador a Lista de Authores da API através da URL: /  
   The API List of Authors will be served in the browser through the URL: 

http://localhost:4200/
