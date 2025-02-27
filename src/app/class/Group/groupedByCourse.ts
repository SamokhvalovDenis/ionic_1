import {Group} from './group';
export class GroupedByCourse {
    groups: Group[] = [];
  
    addGroup(group: Group) {
      this.groups.push(group);
    }
  
    sortByCourse() {
      this.groups.sort((a, b) => a.course - b.course);
    }
  }