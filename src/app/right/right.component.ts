import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from '../services/data-base.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css'],
})
export class RightComponent implements OnInit {
  title: string = 'Subject';
  persons: Observable<Person[]> = of([
    { firstName: 'Anna', lastName: 'Bonik' },
    { firstName: 'Karol', lastName: 'Kowalski' },
    { firstName: 'Wiktoria', lastName: 'Nowakowska' },
    { firstName: 'Leopold', lastName: 'Witkiewicz' },
    { firstName: 'Aurelia', lastName: 'Zenik' },
  ]);

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    console.log('Right Component');
    this.persons = this.dataService.subject.asObservable();
    console.log('show: ' + this.persons);
    this.persons.subscribe((response) => console.log(response));

    this.dataService.subject.next([
      { firstName: 'Anna', lastName: 'Bonik' },
      { firstName: 'Karol', lastName: 'Kowalski' },
      { firstName: 'Wiktoria', lastName: 'Nowakowska' },
      { firstName: 'Leopold', lastName: 'Witkiewicz' },
      { firstName: 'Aurelia', lastName: 'Zenik' },
    ]);
  }
}
