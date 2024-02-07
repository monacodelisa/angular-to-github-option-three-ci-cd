import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [CommonModule, RouterOutlet, HeaderComponent, HomeComponent, FooterComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {
	title = "github-option-three-app";
}
