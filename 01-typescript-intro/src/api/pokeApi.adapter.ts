import axios from "axios";

// esta es la clase en comun que usan los adaptes de las peticiones a otra api
// mediante el funciona la inyeccion de dependencias
export interface HttpAdapter {
	get<T>(url: string): Promise<T>;
}

// para usar cualquiera de estos adaptadores tendras que crearl una instancia
// el metodo get funciona mandando la url y el tipo de dato que va a retornar en T
export class PokeApiFetchAdapter implements HttpAdapter {
	async get<T>(url: string) {
		const resp = await fetch(url);
		const data = await resp.json();
		console.log('con fetch')
		return data as T;
	}
}

export class PokeAPIAdapter implements HttpAdapter {
	private readonly axios = axios;

	// T es un generico, se designa al momento de llamar a la funcion
	// ahi va el tipo de dato que va a retornar, en este caso PokemonDetails
	async get<T>(url: string) {
		const { data } = await this.axios.get<T>(url);
		console.log('con axios')
		return data;
	}
}
