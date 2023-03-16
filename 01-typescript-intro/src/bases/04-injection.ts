import { HttpAdapter, PokeAPIAdapter, PokeApiFetchAdapter } from '../api/pokeApi.adapter';
import { PokemonDetails } from "../interfaces/pokeapi-response.interface";

// una clase es la representación de un objeto en el mundo real
// permite crear instancias de la clase
export class Pokemon {

  constructor(
    public readonly id: number,
    public name: string,
    // http es de tipo HttpAdapter, que es una interfaz en comun para adapters
    private readonly http: HttpAdapter,
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

    // usamos el adaptador sin importar si es axios o fetch, porque comparten el metodo get
    // solo se manda el tipo y la url
    async getMoves() {
        const data = await this.http.get<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        return data.moves
    }
}

const pokeApi = new PokeAPIAdapter()
const pokeApi2 = new PokeApiFetchAdapter()

// este usa el adaptador de axios
export const bulbasaur = new Pokemon(1, 'Bulbasaur', pokeApi)
// este usa el adaptador de fetch
export const charmander = new Pokemon(4, 'Charmander', pokeApi2)

// this method is async, so we need to use then
// bulbasaur.getMoves().then(moves => console.log(moves.length));
// charmander.getMoves().then(moves => console.log(moves.length));