import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    inputs = [{task: '', isImportant: false}];
    isNightMode = false;
    importantClass = 'btn btn-outline-light rounded-0 border-0';
    headingClass = 'text-light';
    addClass = 'btn btn-outline-light night-color-hover rounded-0 border-0';
    tickClass = 'night-color-hover btn btn-outline-light rounded-0 border-0';
    mainDivClass = 'night-mode';
    adjustClass = 'btn night-color-hover btn-outline-light rounded-0 border-0 btn-lg pull-right';

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

    toggleMode() {
        this.isNightMode = !this.isNightMode;
        if (this.isNightMode === false) {
            this.importantClass = 'btn btn-outline-dark imp-day rounded-0 border-0';
            this.headingClass = 'text-dark';
            this.addClass = 'btn btn-outline-dark day-color-hover rounded-0 border-0';
            this.tickClass = 'day-color-hover btn btn-outline-dark rounded-0 border-0';
            this.mainDivClass = 'day-mode';
            this.adjustClass = 'btn day-color-hover btn-outline-dark rounded-0 border-0 btn-lg pull-right';
        } else {
            this.headingClass = 'text-light';
            this.importantClass = 'btn btn-outline-light imp-night rounded-0 border-0';
            this.addClass = 'btn btn-outline-light night-color-hover rounded-0 border-0';
            this.tickClass = 'night-color-hover btn btn-outline-light rounded-0 border-0';
            this.mainDivClass = 'night-mode';
            this.adjustClass = 'btn night-color-hover btn-outline-light rounded-0 border-0 btn-lg pull-right';
        }
    }
}
