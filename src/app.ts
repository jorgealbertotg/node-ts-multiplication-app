import { yarg } from "./config/plugins/args.plugins";
import { ServerApp } from "./presentation/server-app";

async function main() {
  const { b, l, s, n, d } = yarg;

  ServerApp.run({
    base: b,
    limit: l,
    showTable: s,
    fileName: n,
    fileDestination: d
  });
}

(async() => {
  await main();
})();
