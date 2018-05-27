import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputs = [{task: ''}];
  addNewInput() {
    this.inputs.push({task: ''});
  }
  removeTask(task) {
    if (this.inputs.indexOf(task) !== -1) {
        const index = this.inputs.indexOf(task);
        this.inputs.splice(index, 1);
    }
  }
}
