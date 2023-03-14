import {CharacterLocation} from "./characterLocation";

export interface Character {
  id: number
  name: string
  url: string
  created: string
  status: string
  species: string
  type: string
  gender: string
  origin: CharacterLocation
  location: CharacterLocation
  image: string
  episode: string[]
}
