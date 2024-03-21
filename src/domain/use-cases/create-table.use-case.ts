export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {

  }

  execute({ base, limit = 10 }: CreateTableOptions) {
    let textOutput = `
    ====================================================
                        Tabla del ${base}
    ====================================================\n`;

    for (let i = 1; i <= limit; i++) {
      textOutput += `\n    ${base} x ${i} = ${base * i}`;
    }

    return `${textOutput}\n`;
  }
}
