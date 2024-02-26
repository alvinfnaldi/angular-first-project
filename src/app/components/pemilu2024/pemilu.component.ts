import { Component, OnInit } from '@angular/core';
import { Paslon } from 'src/app/models/paslon.model';

@Component({
  selector: 'app-pemilu',
  templateUrl: './pemilu.component.html',
  styleUrls: ['./pemilu.component.css']
})
export class PemiluComponent implements OnInit {
  listOfPaslon: Paslon[];

  // call once
  constructor() {
    this.listOfPaslon = [
      new Paslon(1, "Anis-Muhaimin", 0, "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/9/4/8996095a-86fc-4f95-be6b-222c6605292a.jpg", "Perubahan"),
      new Paslon(2, "Prabowo-Gibran", 0, "https://thediplomat.com/wp-content/uploads/2023/10/sizes/td-story-s-2/thediplomat_2023-10-23-010410.png", "Melanjutkan"),
      new Paslon(3, "Ganjar-Mahfud", 0, "https://www.radarbogor.id/files/2023/10/WhatsApp-Image-2023-10-18-at-11.01.43-AM-1024x1002.jpeg", "Memperbaiki"),
    ];
  }

  sortedPaslonVotes(): Paslon[] {
    return this.listOfPaslon.sort((a: Paslon, b: Paslon) => b.votes - a.votes);
  }

  addPaslon(nomor: HTMLInputElement, namaPaslon: HTMLInputElement, photo: HTMLInputElement, moto: HTMLInputElement): boolean {
    console.log(`Adding nomor : ${nomor.value} and nama: ${namaPaslon.value}`);
    this.listOfPaslon.push(new Paslon(+nomor.value, namaPaslon.value, 0, photo.value, moto.value))
    return false;
  }

  ngOnInit(): void {
  }
}
