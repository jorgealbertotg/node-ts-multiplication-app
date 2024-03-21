import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  fileName: string;
  fileDestination: string;
}

export class ServerApp {
  static run({ base, limit, showTable, fileDestination, fileName }: RunOptions) {
    console.log("Server running...");

    const table = new CreateTable().execute({ base, limit });
    const wasSaved = new SaveFile().execute({
      fileContent: table,
      fileDestination: fileDestination,
      fileName: `${fileName}.txt`
    });

    if (showTable) {
      console.log(table);
    }

    if (wasSaved) {
      console.log(`File ${fileName} created at ${fileDestination}!`);
    } else {
      console.log("File not created");
    }
  }
}
