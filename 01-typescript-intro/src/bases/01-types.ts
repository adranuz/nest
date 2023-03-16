export let name: string = 'Adrian'
export const age: number = 30
export const isSingle: boolean = true

// this works cuz is a variable with let
// and is build the hole file after exporting it
name = 'Melissa'

// this doesn't work cuz is a constant
// but it could be a string or undefined
export const lastname: string| undefined = 'Garcia'