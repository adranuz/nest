import axios from 'axios'
import {PokemonDetails} from '../interfaces/pokeapi-response.interface'
// una clase es la representación de un objeto en el mundo real
// permite crear instancias de la clase
export class Pokemon {
  // long way
  // public id: number
  // public name: string
  // constructor(id: number, name: string) {
  //   this.id = id
  //   this.name = name
  // }

  // short way
  // constructor(public id: number, public name: string) {}

  // readonly not allow change the value
  constructor(
    public readonly id: number,
    public name: string,

    // image is in pokeapi.com/pokemon/id
    // then we dont need the hole url
    // here's we use getters and setters
    // public imageUrl?: string
    ) {}

    get imageUrl() {
      return `https://pokemon.com/${this.id}.jpg`
    }

    // publics methods can be runned everywhere
    public scream() {
      console.log(`${this.name} ${this.name}!!`)
      this.speak()
    }

    // private methods can be runned only inside the class
    private speak() {
      console.log(`I'm ${this.name}!`)
    }

    // async methods return a promise
    async getMoves() {
        const {data} = await axios.get<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        return data.moves
    }
}

// pls don't let implicity any in any file
export const bulbasaur = new Pokemon(1, 'Bulbasaur')
export const charmander = new Pokemon(4, 'Charmander')
export const squirtle = new Pokemon(7, 'Squirtle')

// squirtle.id = 100 // not allowed by readonly

// console.log([bulbasaur, charmander, squirtle]);

// getters are not really ejecutables
// console.log(bulbasaur.imageUrl)

// public methods can be runned everywhere
// console.log(bulbasaur.scream());

// private methods can be runned only inside the class
// console.log(bulbasaur.speak());

// this method is async, so we need to use then
// bulbasaur.getMoves().then(moves => console.log(moves.length));