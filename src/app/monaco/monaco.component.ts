import { Component } from '@angular/core';
import * as monaco from 'monaco-editor';
import { format } from 'sql-formatter';

@Component({
  selector: 'app-monaco',
  templateUrl: './monaco.component.html',
  styleUrls: ['./monaco.component.scss'],
})
export class MonacoComponent {
  records = [10, 100, 1000];
  editorOptions = {
    theme: 'vs-dark',
    language: 'sql',
  };
  handleRun(event: any) {
    alert('Limited Record: ' + this.activeQuery.collection);
  }
  handleSave(event: any) {
    alert('save successful!');
  }
  editorInit(editor: any) {
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      alert('save successful!');
    });
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      alert('Query successful!');
    });
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Backslash, () => {
      this.results.push(`New Query ${this.results.length + 1}`);
      this.activeResult = this.results[this.results.length - 1];
    });
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyF, () => {
      editor.setValue(
        format(editor.getValue(), {
          language: 'mysql',
          keywordCase: 'upper',
          tabWidth: 4,
        }),
      );
    });
  }
  querys = [
    {
      title: 'New Query',
      collection: 10,
      code: 'select fieldName from tableName where fieldName = 1',
    },
  ];
  activeQuery = this.querys[0];
  addQuery() {
    this.querys.push({
      title: `New Query ${this.querys.length + 1}`,
      collection: 10,
      code: 'select fieldName from tableName where fieldName = 1',
    });
    this.activeQuery = this.querys[this.querys.length - 1];
  }
  removeQuery(index: number) {
    this.querys.splice(index, 1);
    this.activeQuery = this.querys[this.querys.length - 1];
  }
  results = ['New Result'];
  activeResult = this.results[0];
  addResult() {
    this.results.push(`New Result ${this.results.length + 1}`);
    this.activeResult = this.results[this.results.length - 1];
  }
  removeResult(index: number) {
    this.results.splice(index, 1);
    this.activeResult = this.results[this.results.length - 1];
  }
}
