import {Character} from "../../shared/models/character";
import {PaginatedResponse} from "../../shared/models/paginatedResponse";
import {environment} from "../../../environments/environment";

export const mapCharactersToPaginatedResponse = (characters: Character[], page: number): PaginatedResponse<Character> => {
  page--;
  const pageSize = environment.pageSize;
  const pages = Math.ceil(characters.length / pageSize);


  return {
    results: characters.slice(page * pageSize, page * pageSize + pageSize),
    info: {
      prev: (page === 0) ? null : "has prev page",
      next: (page === pages - 1) ? null : "has prev page",
      pages: pages,
      count: characters.length,
    }
  }
}
