import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAngularComponent } from './about-angular.component';

describe('AboutAngularComponent', () => {
  let component: AboutAngularComponent;
  let fixture: ComponentFixture<AboutAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
