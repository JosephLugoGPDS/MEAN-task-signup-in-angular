import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styles: [
  ]
})
export class PrivateTasksComponent implements OnInit {

  constructor(private tasksService:TasksService) { }

  privateTasks = [];

  ngOnInit(): void {
    this.tasksService.getPrivateTasks()
      .subscribe(
        res => {
          console.log(res);
          this.privateTasks = res;
        },
        err => console.log(err)
      )
  }

}
