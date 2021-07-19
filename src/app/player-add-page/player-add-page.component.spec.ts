import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerAddPageComponent } from './player-add-page.component';

describe('PlayerAddPageComponent', () => {
  let component: PlayerAddPageComponent;
  let fixture: ComponentFixture<PlayerAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerAddPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
