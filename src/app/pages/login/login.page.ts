import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiServicesService } from './../../services/api-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;
  token: any;
  constructor(
    private fb: FormBuilder,
    private apiServicesService: ApiServicesService,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  async login() {
    this.apiServicesService.login(this.credentials.value).then(async (res) => {
      this.token = res;
      if (this.token.success) {
        const alert = await this.alertController.create({
          header: 'Login correct',
          message: this.token.message,
          buttons: ['OK'],
        });
        await alert.present();
        if (this.token.data.type === 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/client']);
        }
      } else {
        const alert = await this.alertController.create({
          header: 'Login failed',
          message: this.token.message,
          buttons: ['OK'],
        });
        await alert.present();
      }
    });
  }

  get email() {
    return this.credentials.get('email');
  }
  get password() {
    return this.credentials.get('password');
  }
  async gotoregister() {
    this.router.navigateByUrl('/register', { replaceUrl: true });
  }
}
