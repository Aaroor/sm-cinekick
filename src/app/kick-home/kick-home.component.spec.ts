import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KickHomeComponent } from './kick-home.component';

describe('KickHomeComponent', () => {
  let component: KickHomeComponent;
  let fixture: ComponentFixture<KickHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KickHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KickHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
