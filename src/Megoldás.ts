import fs from "fs";

export default class Megoldás {
    public constructor(forrás: string) {
        const sorok: string[] = fs.readFileSync(forrás).toString().split("\n");
        for (let i = 0; i < sorok.length; i++) {
            const aktSor: string = sorok[i].trim();
            if (aktSor.length != 0) {
                this._versenyzők.push(new Versenyző(aktSor));
            }
        }
    }
}