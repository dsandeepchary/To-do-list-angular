import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputs = [{task: '', isImportant: false}];
  addNewInput() {
    this.inputs.push({task: '', isImportant: false});
  }
  markImportant(task) {
    if (this.inputs.indexOf(task) !== -1) {
        const taskIndex = this.inputs.indexOf(task);
        this.inputs[taskIndex].isImportant = !(task.isImportant);
    }
  }
  removeTask(task) {
    if (this.inputs.indexOf(task) !== -1) {
        const index = this.inputs.indexOf(task);
        this.inputs.splice(index, 1);
    }
  }
}
