import fs from "fs";

export interface SaveFileUseCase {
  execute: (options: SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() {

  }

  execute({
    fileContent,
    fileDestination = "outputs",
    fileName = "table.txt"
  }: SaveFileOptions): boolean {
    try {
      fs.mkdirSync(fileDestination, { recursive: true });
      fs.writeFileSync(
        `./${fileDestination}/${fileName}`,
        fileContent
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}