const express = require('express');
const app = express();

const pokemon = [
    {
    name: "Bulbasaur",
    img: "http://img.pokemondb.net/artwork/bulbasaur.jpg"
    },
    {
    name: "Ivysaur",
    img: "http://img.pokemondb.net/artwork/ivysaur.jpg"
    },
    {
    name: "Venusaur",
    img: "http://img.pokemondb.net/artwork/venusaur.jpg"
    },
    {
    name: "Charmander",
    img: "http://img.pokemondb.net/artwork/charmander.jpg"
    },
    {
    name: "Charizard",
    img: "http://img.pokemondb.net/artwork/charizard.jpg"
    },
    {
    name: "Squirtle",
    img: "http://img.pokemondb.net/artwork/squirtle.jpg"
    },
    {
    name: "Wartortle",
    img: "http://img.pokemondb.net/artwork/wartortle.jpg"
    }
    ];

app.get('/somedata', (req, res) => {
    res.send("Hello");
    });

//"Commit 3 - added GET APIs" 
// create a get route /pokemon that will res.send(pokemon), which will display your pokemon data as json in the browser.
app.get('/pokemon', (req, res) => {
    res.send(pokemon);
    });
// create another get route /pokemon/:index that will return only one pokemon on that index. For example, /pokemon/0 should display the 0 indexed pokemon.
app.get('/pokemon/:index', (req, res) => {
res.send(pokemon[req.params.index]);
});
    
// commit 3 ends
    
// "Commit 2 - Connected my database, can see json in the browser" 
// this commit should be without id   
app.get('/pokemon/:id', (req, res) => {
    res.send(pokemon[req.params.id]);
    });
        
//"Commit 1 - My server is set up and running" 
app.listen(3000, ()=>{
    console.log("I am listening")
});