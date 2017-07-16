import { observable, useStrict, action, computed } from 'mobx';
import { UserService } from './user.service';
import { UserModel as User } from './user.model';

/**
 * UserStore
 */

useStrict(true);
export class UserStore {
    @observable public user: User;

    @action
    public login(email: string, password: string) {
        let vm: any = this;
        let service: UserService = new UserService();
        return service.authenticate(email, password)
            .then((response: any) => {
                vm.user = new User(response.data.data.email, response.data.data.username, response.data.data.id);
                return { status: response };
            });
    }

}
