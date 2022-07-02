import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();

  // form inputs
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  //emit event
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}


  onSubmit(): void {
    if(!this.text) {
      alert('Plese add a task');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    console.log("null")
    //todo emit event
    this.text = '';
    this.day = '';
    this.reminder = false;
    this.onAddTask.emit();
  }
}
