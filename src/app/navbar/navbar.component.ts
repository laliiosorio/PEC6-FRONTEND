import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentComponent = 'home';

  showComponent(component: string) {
    this.currentComponent = component;
    console.log(this.currentComponent)
  }
}
