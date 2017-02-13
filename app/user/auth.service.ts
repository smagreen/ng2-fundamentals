import { Injectable } from '@angular/core'
import { IUser } from './user.model'

@Injectable()
export class AuthService {
    currentUser:IUser
    
    loginUser(userName:string, password:string){
        this.currentUser = {
            id:1,
            userName: userName,
            firstName: 'Steve',
            lastName: 'Green'
        }    
    }

    isAuthenticated(){
        return !!this.currentUser;
    }

    updateCurrentUser(firstName:string, lastname:string){
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastname
    }
} 