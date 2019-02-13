import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KickTitleComponent } from './kick-title.component';

describe('KickTitleComponent', () => {
  let component: KickTitleComponent;
  let fixture: ComponentFixture<KickTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KickTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KickTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
