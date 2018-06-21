import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  
onToggleSidebar() {
  document.getElementById("sidebar").classList.toggle('active');
  document.getElementById("working-area").classList.toggle('active');
}

}
