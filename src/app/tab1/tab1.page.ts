// tab1.page.ts
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonItem } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonItem, IonCardContent, IonCardTitle, IonCard, IonCardHeader, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, FormsModule, ExploreContainerComponent, MyHeaderComponent],
})
export class Tab1Page {
  numbers: number[] = [0, 0, 0];
  result: number | string = '';

  constructor() {}

  private sumOfDigits(num: number): number {
    return Math.abs(num).toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
  }

  calculate(): void {
    const [a, b, c] = this.numbers.map(num => Number(num));
    const numbersDivisibleBy10 = [a, b, c].filter(num => num % 10 === 0);
    const totalDigitSum = this.sumOfDigits(a) + this.sumOfDigits(b) + this.sumOfDigits(c);

    if (totalDigitSum % 2 !== 0 && numbersDivisibleBy10.length > 0) {
      this.result = numbersDivisibleBy10.reduce((product, num) => product * num, 1);
    } else {
      this.result = 'Умова не підходить';
    }
  }
}