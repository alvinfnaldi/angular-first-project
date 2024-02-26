import { Component, Input, OnInit } from '@angular/core';
import { Paslon } from 'src/app/models/paslon.model';

@Component({
  selector: 'app-paslon',
  templateUrl: './paslon.component.html',
  styleUrls: ['./paslon.component.css']
})
export class PaslonComponent implements OnInit {

  // assignment assertion, it could be Paslon type | undefined,
  // it start value with undefined, bet when use get set,
  // it will treat as data type Paslon
  @Input() paslon!: Paslon

  voteUp(): boolean {
    this.paslon.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.paslon.voteDown();
    return false;
  }

  ngOnInit(): void {
  }
}
