import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // 2. Add property listOfUser
  listOfUser!: string[];

  // 3. Create constructor, initialize value
  constructor() {
    this.listOfUser = ["Rini", "Widi", "Yuli", "Nova"]
  }

  /* 
     1. Agar UserListComponent bisa meng-implementasi lifecycle angular hook, contoh saat kita call API. ngOnInit akan dipanggil setelah method constructor() dan juga setelah method ngOnChanges() dipanggil 
  */
  ngOnInit(): void {
  }

}
