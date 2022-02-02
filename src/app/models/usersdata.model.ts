export class usersdata {
    id: string;
    name: string;
    localisation: string;

    constructor ( id: string = '', name: string = '', localisation: string = ''){
        this.id = id;
        this.name = name;
        this.localisation = localisation;
    }
}