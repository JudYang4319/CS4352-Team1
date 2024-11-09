import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuildComponent } from './viewguild.component';

describe('ViewGuildComponent', () => {
  let component: ViewGuildComponent;
  let fixture: ComponentFixture<ViewGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewGuildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
