export class EventActivity {
    id: string;
    title: string;
    adresse: string ="";
    description: string = "";
    visible : boolean = true;

    constructor(id: string = "", title: string = "") {
        this.id = id;
        this.title = title;
    }
}