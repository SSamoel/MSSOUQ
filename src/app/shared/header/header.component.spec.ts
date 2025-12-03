import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponet } from './header.component';

describe('FooterComponent', () => {
  let component: HeaderComponet;
  let fixture: ComponentFixture<HeaderComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponet ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
