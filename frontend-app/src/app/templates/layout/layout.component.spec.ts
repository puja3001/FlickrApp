import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a header component', async(() => {
    fixture.detectChanges();
    const compile = fixture.debugElement.nativeElement;
    const tag = compile.querySelector('app-header');
    expect(tag).toBeDefined();
  }));
  it('should have a footer component', async(() => {
    fixture.detectChanges();
    const compile = fixture.debugElement.nativeElement;
    const tag = compile.querySelector('app-footer');
    expect(tag).toBeDefined();
  }));
  it('should have a router component', async(() => {
    fixture.detectChanges();
    const compile = fixture.debugElement.nativeElement;
    const atag = compile.querySelector('router-outlet');
    expect(atag).toBeDefined();
  }));
  
});
