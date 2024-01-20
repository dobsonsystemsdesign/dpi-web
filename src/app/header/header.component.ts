import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  scrollTo(id: string) {
    let el = document.getElementById(id);
    if (el != null) {
      el.scrollIntoView();
    } else { 
      console.log("unable to find navigation point: " + id);
    }
  }

}
