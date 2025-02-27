export class Group {
    name: string;
    course: number;
    leader: string;
    studentCount: number;
  
    constructor(name: string, course: number, leader: string, studentCount: number) {
      this.name = name;
      this.course = course;
      this.leader = leader;
      this.studentCount = studentCount;
    }
  }