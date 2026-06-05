import { PokeApiService } from "./services/PokeApiService";
import { CatalogoPokemon } from "./services/BoxService";

async function main() {
  console.log("=== INICIANDO A POKÉDEX TYPESCRIPT LITE ===\n");

  const cozinheiroApi = new PokeApiService();
  const minhaMochila = new CatalogoPokemon();

  // Teste 1: Buscar e adicionar o Pikachu
  const pikachu = await cozinheiroApi.buscarPokemon("pikachu");
  if (pikachu !== null) {
    minhaMochila.adicionar(pikachu);
  }

  console.log("-----------------------------------------");

  // Teste 2: Buscar e adicionar o Charmander
  const charmander = await cozinheiroApi.buscarPokemon("charmander");
  if (charmander !== null) {
    minhaMochila.adicionar(charmander);
  }

  console.log("-----------------------------------------");

  // Teste 3: Teste de duplicidade
  console.log("[TESTE] Tentando adicionar o Pikachu novamente...");
  if (pikachu !== null) {
    minhaMochila.adicionar(pikachu);
  }

  console.log("-----------------------------------------");

  // Teste 4: Buscar um Pokémon que não existe
  await cozinheiroApi.buscarPokemon("pokemon-inexistente");

  console.log("-----------------------------------------");

  // Teste 5: Mostrar nossa mochila cheia
  minhaMochila.listar();

  console.log("-----------------------------------------");

  // Teste 6: Remover o Pikachu usando o ID dele (25)
  console.log("[TESTE] Removendo o Pikachu (ID 25)...");
  minhaMochila.remover(25);

  console.log("-----------------------------------------");

  // Teste 7: Listar de novo
  minhaMochila.listar();
}

main();