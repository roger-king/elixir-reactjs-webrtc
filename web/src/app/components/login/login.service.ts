import {AuthService} from './../../services/authentication/auth.service';

export class LoginService {
    login(username: string, password: string){
        alert('Authenticating');
/*        let Auth = new AuthService();
        Auth.login(username, password)
            .then(() => {
                console.log('testing');
            });*/
    }
}