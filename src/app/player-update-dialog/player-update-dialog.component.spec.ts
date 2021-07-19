import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerUpdateDialogComponent } from './player-update-dialog.component';

describe('PlayerUpdateDialogComponent', () => {
  let component: PlayerUpdateDialogComponent;
  let fixture: ComponentFixture<PlayerUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerUpdateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
