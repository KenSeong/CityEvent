export class usersdata {
    id: string;
    name: string;
    region: string;

    constructor ( id: string = '', name: string = '', region: string = ''){
        this.id = id;
        this.name = name;
        this.region = region;
    }
}