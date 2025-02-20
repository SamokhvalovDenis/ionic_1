// tab2.page.ts
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonItem } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonItem, IonCardContent, IonCardTitle, IonCard, IonCardHeader, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, FormsModule, ExploreContainerComponent, MyHeaderComponent],
})
export class Tab2Page {
  range: number[] = [0, 0];
  numbers: number[] = [];
  result: number = 0;

  constructor() {}

  calculate(): void {
    const [a, b] = this.range.map(num => Number(num));
    this.numbers = [];
    this.result = 0;

    for (let i = a; i <= b; i++) {
      if (Math.abs(i % 7) === 3) {
        this.numbers.push(i);
        this.result += i;
      }
    }
  }
}
