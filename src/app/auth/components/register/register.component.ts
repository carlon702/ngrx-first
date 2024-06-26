import {Component} from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { RegisterRequestInterface } from "../../types/registerRequest.interface";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { selectIsSubmitting, selectValidationErrors } from "../../store/reducers";
import { authActions } from "../../store/actions";
import { BackendErrorMessages } from "src/app/shared/components/backendErrorMessages/backendErrorMessages.component";
import { combineLatest } from "rxjs";


@Component({
    selector: "mc-register",
    standalone: true,
    templateUrl: "./register.component.html",
    imports:[ReactiveFormsModule, RouterLink, CommonModule, BackendErrorMessages]
})

export class RegisterComponent {
    form = this.fb.nonNullable.group({
        username: ["", Validators.required],
        email: ["", Validators.required],
        password: ["", Validators.required],
    })
    data$ = combineLatest({
       isSubmitting: this.store.select(selectIsSubmitting),
       backendErrors: this.store.select(selectValidationErrors),
    })

    constructor(
        private fb: FormBuilder,
        private store: Store,
    ) {}

    onSubmit(){
        console.log("form", this.form.getRawValue())
        const request: RegisterRequestInterface = {
            user: this.form.getRawValue()
        }
        this.store.dispatch(authActions.register({request}))
    }
}