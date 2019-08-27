import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class LogInGraudGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let user = localStorage.getItem('userLogin');
    if (user){
      return true;
    }
    Swal("Thông báo!", "Bạn vui lòng đăng nhập để thực hiện thao tác", "error");
    this.router.navigate(['/trangchu']);
    return false; 
  }
}
