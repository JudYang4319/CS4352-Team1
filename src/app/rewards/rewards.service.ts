import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RewardsService {

  private pointsSubject = new BehaviorSubject<number>(0);
  points$ = this.pointsSubject.asObservable();

  constructor() { 
    // Initialize
    this.pointsSubject.next(0);
  }

  addPoints(points: number) {
    const currentTotal = this.pointsSubject.getValue();
    this.pointsSubject.next(currentTotal + points);
  }

  getTotalPoints(): number {
    return this.pointsSubject.getValue();
  }
}
