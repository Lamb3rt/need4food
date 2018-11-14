import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'need4name';
  restaurants: Observable<any[]>;
  orders: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.restaurants = db.collection('restaurants').valueChanges();
    this.orders = db.collection('orders').valueChanges();
  }
}
