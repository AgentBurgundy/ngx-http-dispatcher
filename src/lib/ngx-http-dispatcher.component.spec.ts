import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHttpDispatcherComponent } from './ngx-http-dispatcher.component';

describe('NgxHttpDispatcherComponent', () => {
  let component: NgxHttpDispatcherComponent;
  let fixture: ComponentFixture<NgxHttpDispatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxHttpDispatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHttpDispatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
