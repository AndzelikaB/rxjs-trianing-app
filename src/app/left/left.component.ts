import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { Person } from '../services/data-base.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'],
})
export class LeftComponent implements OnInit, OnDestroy {
  title: string = 'Behavior Subject';
  persons: Person[] = [];
  private subscriptions: Subscription = new Subscription();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    const sub = this.dataService.behaviorSubject.subscribe(
      (people: Person[]) => {
        this.persons = people;
        console.log('Left Component Subscription');
      },
      (error) => console.error(error),
      () => console.log('Left Component complete!')
    );
    this.subscriptions.add(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
