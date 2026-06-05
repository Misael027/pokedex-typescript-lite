import { PokemonApiResponse, PokemonResumo } from "../models/Pokemon";

export class PokeApiService {
 
  async buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
    
    const busca = nomeOuId.toLowerCase().trim();
    const url = `https://pokeapi.co/api/v2/pokemon/${busca}`;

    try {
      
      const resposta = await fetch(url);

    
      if (!resposta.ok) {
        console.log(`[ERRO] Pokémon não encontrado: ${nomeOuId}`);
        return null;
      }

      
      const dados = (await resposta.json()) as PokemonApiResponse;

     
      const pokemonFormatado: PokemonResumo = {
        id: dados.id,
        nome: dados.name,
        altura: dados.height,
        peso: dados.weight,
        
        tipos: dados.types.map((item) => item.type.name),
      };

      console.log(`[OK] Pokémon encontrado: ${pokemonFormatado.nome}`);
      return pokemonFormatado;

    } catch (erro) {
      
      console.log("[ERRO] Não foi possível buscar o Pokémon no momento.");
      return null;
    }
  }
}