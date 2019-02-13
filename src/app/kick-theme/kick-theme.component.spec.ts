import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KickThemeComponent } from './kick-theme.component';

describe('KickThemeComponent', () => {
  let component: KickThemeComponent;
  let fixture: ComponentFixture<KickThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KickThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KickThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
