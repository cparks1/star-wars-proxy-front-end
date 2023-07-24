// ProxyAPIResult.ts
import ProxyAPISpeciesInfo from './ProxyAPISpeciesInfo';

interface ProxyAPIResult {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  birth_year: string;
  species_info: ProxyAPISpeciesInfo[];
  starships_flown_in: string[];
  films_appeared_in: string[];
}

export default ProxyAPIResult;
