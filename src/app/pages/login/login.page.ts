import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ErrormsgService } from 'src/app/services/errormsg/errormsg.service';
import { ConfigService } from 'src/app/services/config/config.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validationsForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public errorMsg: ErrormsgService,
    private config: ConfigService,
    private loader: LoaderService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      password: new FormControl('', Validators.compose([
        // Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  onSubmit(values) {
    this.loader.present(`Please Wait ... `);
    const bodyValues = {
      "username" : values.username,
      "Password" : values.password
    };
    this.config.postData('login_in', bodyValues).subscribe(res => {
      console.log(res);
      const response: any = res;
      if (response.is_success) {
        this.toast.toastFn(`${response.messages}`);
      } else {
        alert('else');
        this.toast.toastFn(`${response.messages}`);
      }
      this.loader.dismiss();
    }, error => {
      this.loader.dismiss();
      console.log(error);
      this.toast.toastFn(`${error.error.messages}`);
    });

  }

}
