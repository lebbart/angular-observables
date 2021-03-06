import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const myNumbers = Observable.interval(1000);
    // myNumbers.subscribe(
    //   (number: number) => {
    //     console.log(number);
    //   }
    // );

    const someNewObs = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        // observer.error('This does not work.');
        observer.complete();
      }, 5000);
    });

    someNewObs.subscribe(
      (data: string) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      }, () => {
        console.log('completed');
      }
    );
  }

}
