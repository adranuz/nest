// the type of the object is inferred by the compiler, you can see it by hovering over the object
export const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// not allowed by ts, but allowed by js in compilation time
// pokemonIds.push('asdfas')
// pokemonIds.push('2')
// console.log(pokemonIds) // can see the wrong array in console browser

// ok by ts
pokemonIds.push(+'11')

interface Pokemon {
  id: number;
  name: string;
  age?: number;
}
export const bulbasaur: Pokemon = {
  id: 1,
  name: 'Bulbasaur',
  age: 23,
  // owner: 'Adrian' //not in the interface
}

// interfaces are not classes
// const charmander = new Pokemon()
export const charmander: Pokemon = {
  id: 4,
  name: 'Charmander',
  age: 2,
  // owner: 'Adrian' //not in the interface
}

// never is a type that never returns, but if you put on it will return an that types
// this var is a Pokemon[] array
export const pokemons: Pokemon[] = [bulbasaur, charmander]
// console.log(pokemons)

// [object Object] is the representation of an object as string in js
// objects can not be expresed in strings
// console.log({}.toString());
