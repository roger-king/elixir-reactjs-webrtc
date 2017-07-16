import { observable } from 'mobx';

/**
 * UserModel
 */

export class UserModel {
    @observable email: string;
    @observable username: string;
    @observable id: number;

    constructor(email: string, username: string, id: number) {
        this.email = email;
        this.username = username;
        this.id = id;
    }
}
