import { TerminalController} from "./controllers/TerminalController";

async function main() {
  const menu = new TerminalController();

  await menu.importIniciar();
}

main();