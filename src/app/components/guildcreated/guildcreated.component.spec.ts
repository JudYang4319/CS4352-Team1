import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildcreatedComponent } from './guildcreated.component';

describe('GuildcreatedComponent', () => {
  let component: GuildcreatedComponent;
  let fixture: ComponentFixture<GuildcreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildcreatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuildcreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
