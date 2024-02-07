import { Component, Input } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";
import { ToolbarModule } from "primeng/toolbar";

@Component({
	selector: "app-sidenav",
	standalone: true,
	imports: [FormsModule, ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive, ToolbarModule],
	templateUrl: "./sidenav.component.html",
	styleUrl: "./sidenav.component.css",
})
export class SidenavComponent {
	@Input() sidenavOpen: boolean = true;

  date: Date[] | undefined;

	items = [
		{
			label: "Home",
			icon: "pi pi-home",
			route: "/home",
		},
		{
			label: "About Me",
			icon: "pi pi-user",
			route: "/about",
		},
		{
			label: "About Angular",
			icon: "pi pi-shield",
			route: "/about-angular",
		}
	];
}
