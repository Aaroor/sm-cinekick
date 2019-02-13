import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KickFooterComponent } from './kick-footer.component';

describe('KickFooterComponent', () => {
  let component: KickFooterComponent;
  let fixture: ComponentFixture<KickFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KickFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KickFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
