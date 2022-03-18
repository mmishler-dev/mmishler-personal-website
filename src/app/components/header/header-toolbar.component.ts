import { Component, EventEmitter, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'mm-header-toolbar',
  templateUrl: 'header-toolbar.component.html',
  styleUrls: ['header-toolbar.component.scss']
})
export class HeaderToolbarComponent {
  @Output() darkModeEnabled: EventEmitter<any> = new EventEmitter<any>()

  darkModeStateChange($event: MatSlideToggleChange): void {
    this.darkModeEnabled.emit($event.checked);
  }
}
