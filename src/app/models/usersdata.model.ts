export class usersdata {
    id: string;
    name: string;
    region: string;
    avatar:string;
    cover:string;

    constructor ( id: string = '', name: string = '', region: string = '', avatar: string = '', cover: string = ''){
        this.id = id;
        this.name = name;
        this.region = region;
        this.avatar = avatar;
        this.cover = cover;

    }
}