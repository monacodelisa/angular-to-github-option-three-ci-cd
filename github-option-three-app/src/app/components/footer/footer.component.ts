import { Component } from '@angular/core';

import { ToolbarModule } from "primeng/toolbar";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ToolbarModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
