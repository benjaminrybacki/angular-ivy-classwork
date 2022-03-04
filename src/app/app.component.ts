import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  imageURL: string =
    'https://studyarchitecture.com/wp-content/uploads/NDSU.logo_.typebox.gif';

  isSpecial: boolean = false;
  fontTemp: number = 10;
  fontSize: string = this.fontTemp + 'px';

  username: string = 'Username';

  onMouseOver(): void {
    this.isSpecial = !this.isSpecial;
  }

  onClick(): void {
    this.fontTemp++;
  }
}
