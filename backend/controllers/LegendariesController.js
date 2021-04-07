const LegendariesService = require('../services/LegendariesService');

const controller = {
    index: (req,res)=>{

      var {name} = req.query;

      name ?? 'MewTwoo';

      // if (name === undefined){
      //   name = "MewTwoo"
      // }
      
      const legendary = LegendariesService.listPokemonData(name);

      return res.json(legendary);
    }
}

module.exports = controller;