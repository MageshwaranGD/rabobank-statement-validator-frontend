import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPostComponent } from './json-post.component';

describe('JsonPostComponent', () => {
  let component: JsonPostComponent;
  let fixture: ComponentFixture<JsonPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
