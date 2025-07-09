import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MyButtonComponent } from './my-button.component';
import { EventEmitter } from '@angular/core';

describe('MyButtonComponent', () => {
  let component: MyButtonComponent;
  let fixture: ComponentFixture<MyButtonComponent>;
  let buttonElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
     buttonElement = fixture.nativeElement.querySelector('button');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('button styling', () => {
    it('should have default styles applied when no input label is provided', () => {

      if ('getComputedStyle' in window) {
        const computedStyle = (window as any).getComputedStyle(buttonElement);

        expect(computedStyle.backgroundColor).toBe('rgb(0, 123, 255)');
        expect(computedStyle.color).toBe('rgb(255, 255, 255)');
        expect(computedStyle.border).toBe('0px none rgb(255, 255, 255)');
        // Add other style properties you want to test
      } else {
        fail('getComputedStyle is not available in this environment');
      }
    });

    it('should display the label text from input', () => {
      component.label = 'Test Button';
      fixture.detectChanges();
      expect(buttonElement.textContent).toContain('Test Button');
    });

    describe('click events', () => {
      let clickSpy: jasmine.Spy;

      beforeEach(() => {
        clickSpy = jasmine.createSpy('click event spy');
        // Bind the click spy to the component's click output
        (component.click as EventEmitter<void>).subscribe(clickSpy);
      });

      it('should emit a click event when button is clicked', () => {
        const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button');
        buttonElement.click();
        expect(clickSpy).toHaveBeenCalled();
      });
    });
  });
});
