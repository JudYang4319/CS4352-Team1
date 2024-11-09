import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildstartComponent } from './guildstart.component';

describe('GuildstartComponent', () => {
  let component: GuildstartComponent;
  let fixture: ComponentFixture<GuildstartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildstartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuildstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
