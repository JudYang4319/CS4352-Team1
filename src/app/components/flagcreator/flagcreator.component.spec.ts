import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagcreatorComponent } from './flagcreator.component';

describe('FlagcreatorComponent', () => {
  let component: FlagcreatorComponent;
  let fixture: ComponentFixture<FlagcreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagcreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlagcreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
