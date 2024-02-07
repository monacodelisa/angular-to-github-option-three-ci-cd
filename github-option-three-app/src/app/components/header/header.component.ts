import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ToolbarModule } from "primeng/toolbar";
import { InputSwitchModule } from "primeng/inputswitch";
import { ButtonModule } from "primeng/button";
import { SidenavComponent } from "../sidenav/sidenav.component";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [
		FormsModule,
		ReactiveFormsModule,
    SidenavComponent,
		ToolbarModule,
		InputSwitchModule,
		ButtonModule,
	],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.css",
})
export class HeaderComponent {
	checked: boolean = true;
  sidenavOpen: boolean = true;

  toggleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
  }
}
