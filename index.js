const express = require('express');
const app = express()
const cardapio = require('./cardapio');
app.listen(8081)
app.set('view engine', 'ejs');



(async () => {

    const database = require('./db');
    const Cardapio = require('./cardapio')
    await database.sync();

//CREATE

    // const novosRegistros = await Cardapio.bulkCreate([
    //     {
    //       produto: 'Sopa de Legumes',
    //       detalhes: 'Sopa leve com mix de legumes',
    //       preco: 12.00
    //     },
    //     {
    //       produto: 'Panqueca de Frango',
    //       detalhes: 'Panqueca recheada com frango desfiado',
    //       preco: 18.00
    //     },
    //     {
    //       produto: 'Omelete de Queijo',
    //       detalhes: 'Omelete recheado com queijo',
    //       preco: 8.00
    //     },
    //     {
    //       produto: 'Salada Caesar',
    //       detalhes: 'Salada com alface, croutons e molho Caesar',
    //       preco: 15.00
    //     },
    //     {
    //       produto: 'Filé de Tilápia',
    //       detalhes: 'Filé de tilápia grelhado com purê de batata',
    //       preco: 27.00
    //     },
    //     {
    //       produto: 'Pizza Margherita',
    //       detalhes: 'Massa com molho de tomate, queijo e manjericão',
    //       preco: 25.00
    //     },
    //     {
    //       produto: 'Bife com Fritas',
    //       detalhes: 'Bife grelhado com batatas fritas',
    //       preco: 22.00
    //     },
    //     {
    //       produto: 'Feijoada',
    //       detalhes: 'Tradicional feijoada com arroz e farofa',
    //       preco: 35.00
    //     },
    //     {
    //       produto: 'Frango à Passarinho',
    //       detalhes: 'Porção de frango temperado e frito',
    //       preco: 20.00
    //     },
    //     {
    //       produto: 'Sorvete de Chocolate',
    //       detalhes: 'Bola de sorvete de chocolate',
    //       preco: 5.00
    //     }
    //   ]);



//READ PARA MOSTRAR TODOS OS ITENS DEFININDO LIMITE

    // const lerRegistros = await Cardapio.findAll({

    //     limit: 1

    // })

    // console.log(lerRegistros)



//READ PARA BUSCAR PELO ID

    // const lerRegistrosPeloId = await Cardapio.findByPk(1);

    // console.log(lerRegistrosPeloId);


//UPDATE

    // await Cardapio.update(
    //     { produto: 'Sorvete de Chocolate' },
    //     { where: { id: 20 } }       
    //   );



//DELETE

    // await Cardapio.destroy({
    //     where: { id: [12, 13, 14] }
    //   });

    //   console.log('Deletado com sucesso');



})();

//ROTA PARA MOSTRAR TODOS OS ITENS

app.get('/cardapios', async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10;

        const offset = parseInt(req.query.offset) || 0;

        const Cardapios = await cardapio.findAll({
            limit: limit,
            offset: offset
        });
        res.render('cardapios', { Cardapios });
    } catch (error) {
        console.error('Erro ao buscar cardapios:', error);
        res.status(500).send('Erro ao buscar cardapios');
    }
});


//ROTA PARA BUSCAR ITENS PELO ID

app.get('/cardapio/:id', async (req, res) => {
    try {
        const cardapioEncontrado = await cardapio.findByPk(req.params.id);
        if (cardapioEncontrado) {
            res.render('cardapio', { cardapio: cardapioEncontrado });
        } else {
            res.status(404).send('Cardápio não encontrado');
        }
    } catch (error) {
        console.error('Erro ao buscar cardápio:', error);
        res.status(500).send('Erro ao buscar cardápio');
    }
});