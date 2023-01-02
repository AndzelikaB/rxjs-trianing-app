import { Component } from '@angular/core';
import { DataBaseService, Person } from './services/data-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private dataBaseService: DataBaseService) {}
  name: string = '';
  surname: string = '';
  warunek: boolean = false;

  hiddenLeft(): void {
    this.warunek = !this.warunek;
  }

  addPerson1(name: string, surname: string): void {
    this.dataBaseService.addPerson({
      firstName: name,
      lastName: surname,
    });
  }
}
