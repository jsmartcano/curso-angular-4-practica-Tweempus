import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwinmpCardComponent } from './twimp/twinmp-card/twinmp-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TwinmpCardComponent],
  exports: [TwinmpCardComponent]
})
export class SharedModule { }
