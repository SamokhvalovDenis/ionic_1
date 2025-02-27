import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { Chart, registerables } from 'chart.js';
import { Group } from '../class/Group/group';
import { GroupedByCourse } from '../class/Group/groupedByCourse';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.page.html',
  styleUrls: ['./cloud.page.scss'],
  standalone: true,
  imports: [IonList, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MyHeaderComponent, ]
})
export class CloudPage implements OnInit {
  
  dataUrl = "https://api.jsonbin.io/v3/b/67bf79f3acd3cb34a8f1844e";
  groupedData: GroupedByCourse = new GroupedByCourse();
  chart!: Chart;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    try {
      const response = await fetch(this.dataUrl);
      const jsonData = await response.json();
      const groups: Group[] = jsonData.record.groups.map((g: any) => new Group(g.name, g.course, g.leader, g.studentCount));

      this.groupedData = new GroupedByCourse();
      groups.forEach(group => this.groupedData.addGroup(group));

      this.groupedData.sortByCourse();
      this.createChart();
    } catch (error) {
      console.error("Помилка завантаження даних:", error);
    }
  }

  createChart() {
    const ctx = document.getElementById('groupChart') as HTMLCanvasElement;
    
    const courses = [...new Set(this.groupedData.groups.map(g => g.course))];
    const studentCounts = courses.map(course => 
      this.groupedData.groups
        .filter(g => g.course === course)
        .reduce((sum, g) => sum + g.studentCount, 0)
    );

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: courses.map(c => `Курс ${c}`),
        datasets: [{
          label: 'Кількість студентів',
          data: studentCounts,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
}
