import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFriendsComponent } from './myfriends.component';

describe('MyFriendsComponent', () => {
  let component: MyFriendsComponent;
  let fixture: ComponentFixture<MyFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFriendsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
