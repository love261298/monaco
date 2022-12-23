import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonacoComponent } from './monaco.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [MonacoComponent],
  imports: [CommonModule, FormsModule, MonacoEditorModule.forRoot(), MatButtonModule, MatSelectModule, MatTabsModule ],
  exports: [MonacoComponent],
})
export class MonacoModule {}
