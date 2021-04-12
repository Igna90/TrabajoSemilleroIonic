import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiServicesService } from './../../services/api-services.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  credentials: FormGroup;
  token: any;
  constructor(
    private apiServicesService: ApiServicesService,
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController,
  ) {}

  ngOnInit() {
    this.credentials = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  async doRegister() {
    this.apiServicesService.register(this.credentials.value).then(
      async (res) => {
        this.token = res;
        if (this.token.success) {
          const alert = await this.alertController.create({
            header: 'Register correct',
            message: this.token.message,
            buttons: ['OK'],
          });
          await alert.present();
          this.router.navigate(['/']);
        } else {
          const alert = await this.alertController.create({
            header: 'Register failed',
            message: this.token.message,
            buttons: ['OK'],
          });
          await alert.present();
        }
      }
    );
  }

 
  get name() {
    return this.credentials.get('name');
  }
  get surname() {
    return this.credentials.get('surname');
  }
  get email() {
    return this.credentials.get('email');
  }
  get password() {
    return this.credentials.get('password');
  }
}
