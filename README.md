<h1 align="center" style="font-weight: bold;">CRUD Cardápio 📕</h1>

<p align="center">
 <a href="#Tecnologias">• Tecnologias</a> 
 <a href="#Começando">• Começando</a> 
 <a href="#Rotas">• API Endpoints</a>
</p>

<p align="center">
    <b>Listagem de itens de um cardápio onde os itens estão localizados um banco de dados Mysql</b>
</p>

<h2 id="Tecnologias">💻 Tecnologias</h2>

- JavaScript
- NodeJS
- Ejs
- Mysql
- Sequelize

<h2 id="Começando">🚀 Começando</h2>

<h3>Pré-requisitos</h3>

- [NodeJS](https://nodejs.org/pt)
- [Mysql](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)

<h2>👨🏻‍💻 Executando</h2>

```bash
cd crud-cardapio
npm install
npm start
```

<h2 id="Rotas">📍 Rotas da API</h2>
​
| <kbd>GET /cardapios</kbd>| retorna todos os itens do cardápio definindo limites através dos atributos:

<p>

```javascript
const limit = parseInt(req.query.limit) || 10;
const offset = parseInt(req.query.offset) || 0;
```
</p>

<br/>
| <kbd>GET /cardapio/9</kbd>     | retorna os itens do cardápio por meio do id do item.

<br/>


<h3> Método GET</h3>


**Resposta:**
```json
{
  "id": 9,
  "produto": "Pizza",
  "detalhes": "De mussarela",
  "preco": 19.99
}

```
