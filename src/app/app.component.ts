import { Component } from '@angular/core';
import { Person } from './services/data-base.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private dataService: DataService) {}
  flag: boolean = true;
  person: Person = { firstName: '', lastName: '' };

  add(): void {
    this.dataService.addPerson(this.person);
  }
}
