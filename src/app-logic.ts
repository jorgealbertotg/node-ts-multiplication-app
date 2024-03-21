import fs from "fs";
import { yarg } from "./config/plugins/args.plugins";

const multiplication = (n: number, limit: number = 10): string => {
  let textOutput = `
  ====================================================
                      Tabla del ${n}
  ====================================================\n`;

  for (let i = 1; i <= limit; i++) {
    textOutput += `\n    ${n} x ${i} = ${n*i}`;
  }

  return `${textOutput}\n`;
};

const writeOnFile = (outputPath: string, name: string, data: string): void => {
  fs.mkdirSync(outputPath, { recursive: true });
  fs.writeFileSync(
    `./${outputPath}/${name}`,
    data,
    { flag: "w"}
  );
};

const performMultiplication = (): string => {
  if (yarg.b && yarg.l) {
    return multiplication(yarg.b, yarg.l);
  } else if (yarg.b) {
    return multiplication(yarg.b);
  }
  return "";
};

const displayMultiplication = (result: string): void => {
  if (yarg.s) {
    console.log(result);
  }
};

const writeMultiplication = (result: string): void => {
  if (yarg.g) {
    writeOnFile("outputs", `multiplication_${yarg.b}.txt`, result);
  }
}

const multiplicationResult = performMultiplication();

displayMultiplication(multiplicationResult);
