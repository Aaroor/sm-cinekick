import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KickHeaderComponent } from './kick-header.component';

describe('KickHeaderComponent', () => {
  let component: KickHeaderComponent;
  let fixture: ComponentFixture<KickHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KickHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KickHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
