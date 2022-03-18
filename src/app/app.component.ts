import { Component } from '@angular/core';

@Component({
  selector: 'mm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Matthew Mishler Personal Website';
  darkMode: boolean = false;

  updateDarkMode(darkModeEnabled: boolean): void {
    this.darkMode = darkModeEnabled;
  }
}
