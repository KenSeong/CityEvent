export class usersdata {
    id: string;
    name: string;
    region: string;
    avatar:string;
    cover:string;
    hobbies:string;

    constructor ( id: string = '', name: string = '', region: string = '', avatar: string = '', cover: string = '', hobbies: string = ''){
        this.id = id;
        this.name = name;
        this.region = region;
        this.avatar = avatar;
        this.cover = cover;
        this.hobbies = hobbies;

    }
}