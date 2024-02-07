import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";
import { ToolbarModule } from "primeng/toolbar";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    RouterOutlet,
		RouterLink,
		RouterLinkActive,
    ToolbarModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

}
