import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlagLoginService {
  @Output() Flag_LogIn = new EventEmitter; 
  @Output() Form_DangKi = new EventEmitter; 
  @Output() Form_DangNhap = new EventEmitter; 
  constructor() { }
}
