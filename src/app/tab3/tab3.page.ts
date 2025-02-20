import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Додано для роботи ngClass
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonItem } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [CommonModule, IonItem, IonCardContent, IonCardTitle, IonCard, IonCardHeader, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, FormsModule, ExploreContainerComponent, MyHeaderComponent], // Додано CommonModule
})
export class Tab3Page {
  matrixSize: number = 3;
  matrix: number[][] = [];

  constructor() {}

  generateMatrix(): void {
    this.matrix = Array.from({ length: this.matrixSize }, () =>
      Array.from({ length: this.matrixSize }, () => Math.floor(Math.random() * 100) - 50)
    );
  }

  isHighlighted(value: number): boolean {
    return value > 25;
  }
}
