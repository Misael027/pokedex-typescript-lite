import * as readline from "readline-sync";
import { PokeApiService } from "../services/PokeApiService";
import { CatalogoPokemon } from "../services/BoxService";

export class TerminalController {
  private apiService = new PokeApiService();
  private catalogo = new CatalogoPokemon();

  async importIniciar(): Promise<void> {
    let ligando = true;

    while (ligando) {
      console.log("\n=========================================");
      console.log("          MENU POKÉDEX LITE              ");
      console.log("=========================================");
      console.log("1. Buscar e Adicionar Pokémon");
      console.log("2. Listar Meu Catálogo / Mochila");
      console.log("3. Remover Pokémon do Catálogo");
      console.log("4. Sair do Programa");
      console.log("=========================================");
      
      const opcao = readline.question("Escolha uma opcao (1-4): ");

      switch (opcao) {
        case "1":
          const nomeOuId = readline.question("\nDigite o nome ou ID do Pokemon: ");
          console.log("[STATUS] Buscando na PokeAPI...");
          const pokemon = await this.apiService.buscarPokemon(nomeOuId);
          if (pokemon) {
            this.catalogo.adicionar(pokemon);
          }
          break;

        case "2":
          this.catalogo.listar();
          break;

        case "3":
          const idParaRemover = readline.questionInt("\nDigite o ID do Pokemon que deseja remover: ");
          this.catalogo.remover(idParaRemover);
          break;

        case "4":
          console.log("\nFechando a Pokédex... Até mais, treinador!");
          ligando = false;
          break;

        default:
          console.log("\n[AVISO] Opção inválida! Digite um número de 1 a 4.");
      }
      
      
      if (ligando) readline.question("\nAperte ENTER para voltar ao menu...");
    }
  }
}