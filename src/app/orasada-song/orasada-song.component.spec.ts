import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrasadaSongComponent } from './orasada-song.component';


describe('OrasadaSongComponent', () => {
  let component: OrasadaSongComponent;
  let fixture: ComponentFixture<OrasadaSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrasadaSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrasadaSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
