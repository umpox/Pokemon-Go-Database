import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';


@Component({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  pokemons: Object[];

  constructor(private nav: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('pokemon');

    this.pokemons = [
      {name: 'Bulbasaur', types: ['Grass', 'Poison'], evolCandy: '25 Bulbasaur', eggKm: 2,  fastAttacks: ['Tackle', 'Vine Whip'], specialAttacks: ['Sludge Bomb', 'Seed Bomb', 'Power Whip']},
      {name: 'Ivysaur', types: ['Grass', 'Poison'], evolCandy: '100 Bulbasaur', eggKm: null, fastAttacks: ['Razor Leaf', 'Vine Whip'], specialAttacks: ['Sludge Bomb', 'Solar Beam', 'Power Whip']},
      {name: 'Venusaur', types: ['Grass', 'Poison'], evolCandy: null, eggKm: null, fastAttacks: ['Razor Leaf', 'Vine Whip'], specialAttacks: ['Sludge Bomb', 'Solar Beam', 'Petal Blizzard']},
      {name: 'Charmander', types: ['Fire'], evolCandy: '25 Charmander', eggKm: 2, fastAttacks: ['Scratch', 'Ember'], specialAttacks: ['Flame Burst', 'Flamethrower', 'Flame Charge']},
      {name: 'Charmeleon', types: ['Fire'], evolCandy: '100 Charmander', eggKm: null, fastAttacks: ['Scratch', 'Ember'], specialAttacks: ['Flame Burst', 'Flamethrower', 'Fire Punch']},
      {name: 'Charizard', types: ['Fire', 'Flying'], evolCandy: null, eggKm: null, fastAttacks: ['Wing Attack', 'Ember'], specialAttacks: ['Dragon Claw', 'Flamethrower', 'Fire Blast']},
      {name: 'Squirtle', types: ['Water'], evolCandy: '25 Squirtle', eggKm: 2, fastAttacks: ['Tackle', 'Bubble'], specialAttacks: ['Aqua Jet', 'Aqua Tail', 'Water Pulse']},
      {name: 'Wartortle', types: ['Water'], evolCandy: '100 Squirtle', eggKm: null, fastAttacks: ['Bite', 'Water Gun'], specialAttacks: ['Aqua Jet', 'Hydro Pump', 'Ice Beam']},
      {name: 'Blastoise', types: ['Water'], evolCandy: null, eggKm: null, fastAttacks: ['Bite', 'Water Gun'], specialAttacks: ['Hydro Pump', 'Ice Beam', 'Flash Cannon']},
      {name: 'Caterpie', types: ['Bug'], evolCandy: '12 Caterpie', eggKm: 2, fastAttacks: ['Tackle', 'Bug Bite'], specialAttacks: ['Struggle']},
      {name: 'Metapod', types: ['Bug'], evolCandy: '50 Caterpie', eggKm: null, fastAttacks: ['Tackle', 'Bug Bite'], specialAttacks: ['Struggle']},
      {name: 'Butterfree', types: ['Bug', 'Flying'], evolCandy: null, eggKm: null, fastAttacks: ['Confusion', 'Bug Bite'], specialAttacks: ['Psychic', 'Bug Buzz', 'Signal Beam']},
      {name: 'Weedle', types: ['Bug', 'Poison'], evolCandy: '12 Weedle', eggKm: 2, fastAttacks: ['Bug Bite', 'Poison Sting'], specialAttacks: ['Struggle']},
      {name: 'Kakuna', types: ['Bug', 'Poison'], evolCandy: '50 Weedle', eggKm: null, fastAttacks: ['Bug Bite', 'Poison Jab'], specialAttacks: ['Struggle']},
      {name: 'Beedrill', types: ['Bug', 'Poison'], evolCandy: null, eggKm: null, fastAttacks: ['Bug Bite', 'Poison Jab'], specialAttacks: ['Aerial Ace', 'Sludge Bomb', 'X-Scissor']},
      {name: 'Pidgey', types: ['Normal', 'Flying'], evolCandy: '12 Pidgey', eggKm: 2, fastAttacks: ['Tackle', 'Quick Attack'], specialAttacks: ['Twister', 'Aerial Ace', 'Air Cutter']},
      {name: 'Pidgeotto', types: ['Normal', 'Flying'], evolCandy: '50 Pidgey', eggKm: null, fastAttacks: ['Wing Attack', 'Steel Wing'], specialAttacks: ['Twister', 'Aerial Ace', 'Air Cutter']},
      {name: 'Pidgeot', types: ['Normal', 'Flying'], evolCandy: null, eggKm: null, fastAttacks: ['Wing Attack', 'Steel Wing'], specialAttacks: ['Hurricane', 'Aerial Ace', 'Air Cutter']},
      {name: 'Rattata', types: ['Normal'], evolCandy: '25 Rattata', eggKm: 2, fastAttacks: ['Tackle', 'Quick Attack'], specialAttacks: ['Dig', 'Hyper Fang', 'Body Slam']},
      {name: 'Raticate', types: ['Normal'], evolCandy: null, eggKm: null, fastAttacks: ['Bite', 'Quick Attack'], specialAttacks: ['Dig', 'Hyper Fang', 'Hyper Beam']},
      {name: 'Spearow', types: ['Normal', 'Flying'], evolCandy: '50 Spearow', eggKm: 2, fastAttacks: ['Quick Attack', 'Peck'], specialAttacks: ['Aerial Ace', 'Twister', 'Drill Peck']},
      {name: 'Fearow', types: ['Normal', 'Flying'], evolCandy: null, eggKm: null, fastAttacks: ['Steel Wing', 'Peck'], specialAttacks: ['Aerial Ace', 'Twister', 'Drill Run']},
      {name: 'Ekans', types: ['Poison'], evolCandy: '50 Ekans', eggKm: 5, fastAttacks: ['Acid', 'Poison Sting'], specialAttacks: ['Gunk Shot', 'Sludge Bomb', 'Wrap']},
      {name: 'Arbok', types: ['Poison'], evolCandy: null, eggKm: null, fastAttacks: ['Acid', 'Bite'], specialAttacks: ['Gunk Shot', 'Sludge Wave', 'Dark Pulse']},
      {name: 'Pikachu', types: ['Electric'], evolCandy: '50 Pikachu', eggKm: 2, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Raichu', types: ['Electric'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Sandshrew', types: ['Ground'], evolCandy: '50 Sandshrew', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Sandslash', types: ['Ground'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Nidoran♀', types: ['Poison'], evolCandy: '25 Nidoran♀', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Nidorina', types: ['Poison'], evolCandy: '100 Nidoran♀', eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Nidoqueen', types: ['Poison', 'Ground'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Nidoran♂', types: ['Poison'], evolCandy: '25 Nidoran♂', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Nidorino', types: ['Poison'], evolCandy: '100 Nidoran♂', eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Nidoking', types: ['Poison', 'Ground'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Clefairy', types: ['Fairy'], evolCandy: '50 Clefairy', eggKm: 2, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Clefable', types: ['Fairy'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Vulpix', types: ['Fire'], evolCandy: '50 Vulpix', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Ninetales', types: ['Fire'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Jigglypuff', types: ['Normal', 'Fairy'], evolCandy: '50 Jigglypuff', eggKm: 2, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Wigglytuff', types: ['Normal', 'Fairy'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Zubat', types: ['Poison', 'Flying'], evolCandy: '50 Zubat', eggKm: 2, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Golbat', types: ['Poison', 'Flying'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Oddish', types: ['Grass', 'Poison'], evolCandy: '25 Oddish', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Gloom', types: ['Grass', 'Poison'], evolCandy: '100 Oddish', eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Vileplume', types: ['Grass', 'Poison'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Paras', types: ['Bug', 'Grass'], evolCandy: '50 Paras', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Parasect', types: ['Bug', 'Grass'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Venonat', types: ['Bug', 'Poison'], evolCandy: '50 Venonat', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Venomoth', types: ['Bug', 'Poison'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Diglett', types: ['Ground'], evolCandy: '50 Diglett', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Dugtrio', types: ['Ground'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Meowth', types: ['Normal'], evolCandy: '50 Meowth', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Persian', types: ['Normal'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Psyduck', types: ['Water'], evolCandy: '50 Psyduck', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Golduck', types: ['Water'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Mankey', types: ['Fight'], evolCandy: '50 Mankey', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Primeape', types: ['Fight'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Growlithe', types: ['Fire'], evolCandy: '50 Growlithe', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Arcanine', types: ['Fire'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Poliwag', types: ['Water'], evolCandy: '25 Poliwag', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Poliwhirl', types: ['Water'], evolCandy: '100 Poliwag', eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Poliwrath', types: ['Water', 'Fight'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Abra', types: ['Psychic'], evolCandy: '25 Abra', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Kadabra', types: ['Psychic'], evolCandy: '100 Abra', eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Alakazam', types: ['Psychic'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Machop', types: ['Fight'], evolCandy: '25 Machop', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Machoke', types: ['Fight'], evolCandy: '100 Machop', eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Machamp', types: ['Fight'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Bellsprout', types: ['Grass', 'Poison'], evolCandy: '25 Bellsprout', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Weepinbell', types: ['Grass', 'Poison'], evolCandy: '100 Bellsprout', eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Victreebel', types: ['Grass', 'Poison'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Tentacool', types: ['Water', 'Poison'], evolCandy: '50 Tentacool', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Tentacruel', types: ['Water', 'Poison'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Geodude', types: ['Rock', 'Ground'], evolCandy: '25 Geodude', eggKm: 2, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Graveler', types: ['Rock', 'Ground'], evolCandy: '100 Geodude', eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Golem', types: ['Rock', 'Ground'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Ponyta', types: ['Fire'], evolCandy: '50 Ponyta', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Rapidash', types: ['Fire'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Slowpoke', types: ['Water', 'Psychic'], evolCandy: '50 Slowpoke', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Slowbro', types: ['Water', 'Psychic'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Magnemite', types: ['Electric', 'Steel'], evolCandy: '50 Magnemite', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Magneton', types: ['Electric', 'Steel'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Farfetch\'d', types: ['Normal', 'Flying'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Doduo', types: ['Normal', 'Flying'], evolCandy: '50 Doduo', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Dodrio', types: ['Normal', 'Flying'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Seel', types: ['Water'], evolCandy: '50 Seel', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Dewgong', types: ['Water', 'Ice'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Grimer', types: ['Poison'], evolCandy: '50 Grimer', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Muk', types: ['Poison'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Shellder', types: ['Water'], evolCandy: '50 Shellder', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Cloyster', types: ['Water', 'Ice'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Gastly', types: ['Ghost', 'Poison'], evolCandy: '25 Gastly', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Haunter', types: ['Ghost', 'Poison'], evolCandy: '100 Gastly', eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Gengar', types: ['Ghost', 'Poison'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Onix', types: ['Rock', 'Ground'], evolCandy: null, eggKm: 10, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Drowzee', types: ['Psychic'], evolCandy: '50 Drowzee', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Hypno', types: ['Psychic'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Krabby', types: ['Water'], evolCandy: '50 Krabby', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Kingler', types: ['Water'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Voltorb', types: ['Electric'], evolCandy: '50 Voltorb', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Electrode', types: ['Electric'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Exeggcute', types: ['Grass', 'Psychic'], evolCandy: '50 Exeggcute', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Exeggutor', types: ['Grass', 'Psychic'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Cubone', types: ['Ground'], evolCandy: '50 Cubone', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Marowak', types: ['Ground'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Hitmonlee', types: ['Fight'], evolCandy: null, eggKm: 10, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Hitmonchan', types: ['Fight'], evolCandy: null, eggKm: 10, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Lickitung', types: ['Normal'], evolCandy: null, eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Koffing', types: ['Poison'], evolCandy: '50 Koffing', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Weezing', types: ['Poison'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Rhyhorn', types: ['Ground', 'Rock'], evolCandy: '50 Rhyhorn', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Rhydon', types: ['Ground', 'Rock'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Chansey', types: ['Normal'], evolCandy: null, eggKm: 10, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Tangela', types: ['Grass'], evolCandy: null, eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Kangaskhan', types: ['Normal'], evolCandy: null, eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Horsea', types: ['Water'], evolCandy: '50 Horsea', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Seadra', types: ['Water'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Goldeen', types: ['Water'], evolCandy: '50 Goldeen', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Seaking', types: ['Water'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Staryu', types: ['Water'], evolCandy: '50 Staryu', eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Starmie', types: ['Water', 'Psychic'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Mr. Mime', types: ['Psychic', 'Fairy'], evolCandy: null, eggKm: 10, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Scyther', types: ['Bug', 'Flying'], evolCandy: null, eggKm: 10, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Jynx', types: ['Ice', 'Psychic'], evolCandy: null, eggKm: 10, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Electabuzz', types: ['Electric'], evolCandy: null, eggKm: 10, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Magmar', types: ['Fire'], evolCandy: null, eggKm: 10, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Pinsir', types: ['Bug'], evolCandy: null, eggKm: 10, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Tauros', types: ['Normal'], evolCandy: null, eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Magikarp', types: ['Water'], evolCandy: '400 Magikarp', eggKm: 2, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Gyarados', types: ['Water', 'Flying'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Lapras', types: ['Water', 'Ice'], evolCandy: null, eggKm: 10, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Ditto', types: ['Normal'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Eevee', types: ['Normal'], evolCandy: '25 Eevee', eggKm: 10, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Vaporeon', types: ['Water'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Jolteon', types: ['Electric'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Flareon', types: ['Fire'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Porygon', types: ['Normal'], evolCandy: null, eggKm: 5, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Omanyte', types: ['Rock', 'Water'], evolCandy: '50 Omanyte', eggKm: 10, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Omastar', types: ['Rock', 'Water'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Kabuto', types: ['Rock', 'Water'], evolCandy: '50 Kabuto', eggKm: 10, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Kabutops', types: ['Rock', 'Water'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Aerodactyl', types: ['Rock', 'Flying'], evolCandy: null, eggKm: 10, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Snorlax', types: ['Normal'], evolCandy: null, eggKm: 10, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Articuno', types: ['Ice', 'Flying'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Zapdos', types: ['Electric', 'Flying'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Moltres', types: ['Fire', 'Flying'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Dratini', types: ['Dragon'], evolCandy: '25 Dratini', eggKm: 10, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Dragonair', types: ['Dragon'], evolCandy: '100 Dratini', eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Dragonite', types: ['Dragon', 'Flying'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Mewtwo', types: ['Psychic'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']},
      {name: 'Mew', types: ['Psychic'], evolCandy: null, eggKm: null, fastAttacks: [''], specialAttacks: ['']}
    ];

  }

  itemTapped(event, pokemon) {
    this.nav.push(ItemDetailsPage, {
      pokemon: pokemon
    });
  }
}
