export default class Versenyző {
    
    public constructor(sor: string) {
        const m: string[] = sor.split(";");
        this._név = m[0];
        this._kategória = m[1];
        this._eggyesületNeve = m[2];
        for (let i: number = 3; i < m.length; i++) {
            this._pontok.push(parseInt(m[i]));
        }
    }
}