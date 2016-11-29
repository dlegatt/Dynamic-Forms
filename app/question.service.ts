import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import {CheckboxQuestion} from "./question-checkbox";

@Injectable()
export class QuestionService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

        new TextboxQuestion({
          key: 'STORENAME',
          label: 'Store Name',
          type: 'text',
          order: 1
        }),
        new TextboxQuestion({
          key: 'STOREADDR',
          label: 'Street Address',
          type: 'text',
          order: 2
        }),
        new TextboxQuestion({
          key: 'STORECITY',
          label: 'City',
          type: 'text',
          order: 3
        }),
        new DropdownQuestion({
          key: 'STORESTATE',
          label: 'State',
          options: [
            {key: 'MN', value: 'Minnesota'},
            {key: 'ND', value: 'North Dakota'},
            {key: 'SD', value: 'South Dakota'},
            {key: 'IA', value: 'Iowa'},
            {key: 'WI',value: 'Wisconsin'}
          ],
          order: 4
        }),
        new CheckboxQuestion({
          key: 'PRINTNOTFOUND',
          label: 'Print slip when item not found?',
          value: false,
          order: 5
        })
      // new DropdownQuestion({
      //   key: 'brave',
      //   label: 'Bravery Rating',
      //   options: [
      //     {key: 'solid',  value: 'Solid'},
      //     {key: 'great',  value: 'Great'},
      //     {key: 'good',   value: 'Good'},
      //     {key: 'unproven', value: 'Unproven'}
      //   ],
      //   order: 3
      // }),
      // new CheckboxQuestion({
      //   key: 'checkThis',
      //   label: 'Check This Box',
      //   value: 1,
      //   order: 4
      // }),
      // new TextboxQuestion({
      //   key: 'firstName',
      //   label: 'First name',
      //   value: 'Bombasto',
      //   required: true,
      //   order: 1
      // }),
      //
      // new TextboxQuestion({
      //   key: 'emailAddress',
      //   label: 'Email',
      //   type: 'email',
      //   order: 2
      // })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/