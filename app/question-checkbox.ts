import { QuestionBase } from './question-base';

export class CheckboxQuestion extends QuestionBase<boolean> {
    controlType = 'checkbox';
    type: string;

    constructor(options: {} = {}) {
        super(options);
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */