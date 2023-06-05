import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
    formSignin: FormGroup;

    constructor(private fb: FormBuilder, private authService: AuthService) {
        this.formSignin = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        });
    }

    onHandleSubmit() {
        if (this.formSignin.valid) {
            this.authService.signin(this.formSignin.value).subscribe(data => {
                console.log(data);
            });
        }
        console.log(this.formSignin.value);
    }
}
