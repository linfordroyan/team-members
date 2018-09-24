export class Member{
    public id:string;
    public name: string;
    public company: string;
    public status: string;
    public lastUpdated: string;
    public notes: string;
    public selected: boolean;

    constructor(id:string,name: string, company: string, status: string, lastupdated:string,note: string){
        this.id = id;
        this.name = name;
        this.company = company;
        this.status = status;
        this.lastUpdated = lastupdated;
        this.notes = note;
    }
}