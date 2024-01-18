import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(
    private classToggler: ClassToggleService,
    private toastr:ToastrService,
    private router:Router) {
    super();
  }

  Logout(){
    window.setTimeout(()=>{
      localStorage.removeItem('SecretMiddlewareKey');
      this.toastr.success("Logout Successfully");
      this.router.navigate(['/']);
    },1500);
  }
}
