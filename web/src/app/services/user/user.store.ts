import { observable, useStrict, action, computed} from 'mobx';
import { UserService} from './user.service';
import { UserModel as User } from './user.model';

/**
 * UserStore
 */

useStrict(true);
export class UserStore {
    @observable public user: Array<User> = [];

    constructor() {

    }

    @action
    create(title: string) {
        this.user.push(new User());
    }

    toJson() {
        // TODO: This is an example and can be renamed.
        //return this.user.map(user => user.toJson);
    }
}
