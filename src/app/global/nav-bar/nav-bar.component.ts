import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  public activateLink = {
    isCartActive: false,
    isProductActive: false,
  }

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((e): e is NavigationEnd  => e instanceof NavigationEnd),
      map((event: NavigationEnd) => {
        this.updateNavLinks(event.url);
      })
    );
  }

  updateNavLinks(url: string) {
    switch (url) {
      case '/cart':
        this.deactivateAllLinks();
        this.activateLink.isCartActive = true;
        break;
      case '/products':
        this.deactivateAllLinks();
        this.activateLink.isProductActive = true;
        break;
      default:
        break;
    }
  }

  deactivateAllLinks() {
    for (const [key, value] of Object.entries(this.activateLink)) {
      console.log(`${key}: ${value}`);
    }
  }
}
