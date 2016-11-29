import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { QuestionBase }     from './question-base';

@Component({
  moduleId: module.id,
  selector: 'df-question',
  templateUrl: 'dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

  onChange($event,question,surveyId) {
    console.log(question);
    let answer = {
      question: question,
      survey: surveyId,
      value: null
    };
    if ($event.target.type === 'checkbox') {
      answer.value = $event.target.checked;
      console.log(answer);
      return;
    }
    answer.value = $event.target.value;
    console.log(answer);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/