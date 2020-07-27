import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styles: [
  ]
})
export class TasksComponent implements OnInit {

  constructor(private tasksService:TasksService) { }

  tasks = [];

  ngOnInit(): void {
    this.tasksService.getTasks()
      .subscribe(
        res => {
          console.log(res)
          this.tasks = res;
        },
        err => console.log(err)  
        );
    
  }

}
