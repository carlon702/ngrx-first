import {Component} from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { register } from "../../store/actions";
import { RegisterRequestInterface } from "../../types/registerRequest.interface";
import { RouterLink } from "@angular/router";
import { AuthStateInterface } from "../../types/authState.interface";
import { CommonModule } from "@angular/common";
import { selectIsSubmitting } from "../../store/reducers";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: "mc-register",
    standalone: true,
    templateUrl: "./register.component.html",
    imports:[ReactiveFormsModule, RouterLink, CommonModule]
})

export class RegisterComponent {
    form = this.fb.nonNullable.group({
        username: ["", Validators.required],
        email: ["", Validators.required],
        password: ["", Validators.required],
    })
    isSubmitting$ = this.store.select(selectIsSubmitting)

    constructor(
        private fb: FormBuilder,
        private store: Store,
    ) {}

    onSubmit(){
        console.log("form", this.form.getRawValue())
        const request: RegisterRequestInterface = {
            user: this.form.getRawValue()
        }
        this.store.dispatch(register({request}))
    }
}