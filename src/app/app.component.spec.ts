import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  let target: AppComponent;  
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    target = new AppComponent();
    fixture.detectChanges();
  });

  describe(`Integration Test`, () => {
    it('should use onChange() in select', () => {
      spyOn(component, 'onChange');

      debugElement.query(By.css('select')).triggerEventHandler('change', null);
      expect(component.onChange).toHaveBeenCalled();
    })

    it('should use value in HTML', () => {
      component.value = '';
      fixture.detectChanges();

      htmlElement = debugElement.query(By.css('p')).nativeElement;
      expect(htmlElement.textContent).toBe('');
    })
  })

  describe('Unit Test', () => {
    it('onChange() should change value', () => {
      const stub = <HTMLSelectElement>{
        'value': '1'
      };

      target.onChange(stub);
      expect(target.value).toBe('1');
    })
  })    
});
