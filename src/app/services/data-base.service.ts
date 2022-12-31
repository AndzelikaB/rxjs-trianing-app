import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataBaseService {
  private persons: Person[] = [
    { firstName: 'Anna', lastName: 'Bonik' },
    { firstName: 'Karol', lastName: 'Kowalski' },
    { firstName: 'Wiktoria', lastName: 'Nowakowska' },
  ];

  fetchPersons(): Observable<Person[]> {
    return of(this.persons);
  }

  addPerson(person: Person): Observable<Person[]> {
    this.persons.push(person);
    return of(this.persons);
  }
}

export interface Person {
  firstName: string;
  lastName: string;
}
