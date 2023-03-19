import {Character} from "../../models/character";
import {CharactersQuery} from "../../models/characterQuery";

export const filterCharacters = (characters: Character[], query: CharactersQuery): Character[] => {
  const res = [...characters];

  return res.filter(character => {
    const nameMatch = !query.name || character.name.toLowerCase().includes(query.name.toLowerCase());
    const typeMatch = !query.type || character.type.toLowerCase().includes(query.type.toLowerCase());
    const speciesMatch = !query.species || character.species.toLowerCase().includes(query.species.toLowerCase());
    const statusMatch = !query.status || character.status.toLowerCase().includes(query.status.toLowerCase());
    const genderMatch = !query.gender || character.gender.toLowerCase().includes(query.gender.toLowerCase());

    return nameMatch && typeMatch && speciesMatch && statusMatch && genderMatch;
  });
}
