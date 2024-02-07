import { Component } from '@angular/core';

import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FieldsetModule, AvatarModule,AvatarGroupModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  mcl = "{{ MonaCodeLisa }}"

  links = [
		{
			icon: "pi pi-globe",
			url: "https://monacodelisa.com",
		},
		{
			icon: "pi pi-github",
			url: "https://github.com/monacodelisa",
		},
		{
			icon: "pi pi-linkedin",
			url: "https://www.linkedin.com/in/monacodelisa/",
		},
	];
}
