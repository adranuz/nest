// decorador que deprecate metodos d la clase
const Deprecated = (deprecationReason: string) => {
  return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
    // console.log({target})
    return {
      get() {
        const wrapperFn = (...args: any[]) => {
          console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
          //! Llamar la función propiamente con sus argumentos
          propertyDescriptor.value.apply(this, args); 
        }
        return wrapperFn;
      }
    }
  }   
}
/** El decorador es una funncion que tiene acceso a la definicion de la clase
 * y puede modificarla, pero no puede modificar la instancia de la clase
*/

class NewPokemon {
	constructor(public readonly id: number, public name: string) {}

	scream() {
		console.log(`no quiero!!`);
	}

	speak() {
		console.log(`no quiero!`);
	}
}

// Declaracion del decorador
const MyDecorator = () => {
	return (_target: Function) => {
		// vemos la declaracion de la clase
		// console.log(_target)

		// la clase Pokemon es sustituida por la clase NewPokemon
		return NewPokemon;
	};
};

// Ejecucion del decorador en la clase pokemon
@MyDecorator()
export class Pokemon {
	constructor(public readonly id: number, public name: string) {}

	scream() {
		console.log(`${this.name} ${this.name}!!`);
	}

  // declaracion de que este metodo esta deprecado
  @Deprecated('Use scream instead')
	speak() {
		console.log(`I'm ${this.name}!`);
	}
}

export const bulbasaur = new Pokemon(1, "Bulbasaur");
bulbasaur.scream();
bulbasaur.speak();
