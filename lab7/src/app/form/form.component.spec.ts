/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.formData = {
      name: 'petro',
      surname: 'test',
      address: 'test@gmail.com',
      password: '123123',
      confirmPassword: '123123',
      allowAdverts: true,
      allowWeather: false
    };
  });

  it('reset() function should reset form data object', () => {
    component.reset();
    expect(component.formDataInit()).toEqual(component.formData);
  });

  it('formDataInit() function should not to be nan', () => {
    expect(component.formDataInit()).not.toBeNaN();
  });

  it('formDataInit() function should reset form data object', () => {
    expect(component.formDataInit()).toEqual({
      name: '',
      surname: '',
      address: '',
      password: '',
      confirmPassword: '',
      allowAdverts: false,
      allowWeather: false
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('name should not be null', () => {
    expect(component.formData.name).not.toEqual('');
  });

  it('name should not be nan', () => {
    expect(component.formData.name).not.toBeNaN();
  });

  it('surname should not be null', () => {
    expect(component.formData.surname).not.toEqual('');
  });

  it('surname should not be nan', () => {
    expect(component.formData.surname).not.toBeNaN();
  });

  it('address should not be null', () => {
    expect(component.formData.address).not.toEqual('');
  });

  it('address should not be nan', () => {
    expect(component.formData.address).not.toBeNaN();
  });

  it('address should be in email format', () => {
    expect(component.formData.address).toContain('@');
  });

  it('password should not be null', () => {
    expect(component.formData.password).not.toEqual('');
  });

  it('password should not be nan', () => {
    expect(component.formData.password).not.toBeNaN();
  });

  it('confirm password should not be null', () => {
    expect(component.formData.confirmPassword).not.toEqual('');
  });

  it('confirm password should not be nan', () => {
    expect(component.formData.password).not.toBeNaN();
  });

  it('Password field should be equal to confirm password field', () => {
    expect(component.formData.password).toEqual(component.formData.confirmPassword);
  });

  it('allowAdverts should not be nan', () => {
    expect(component.formData.allowAdverts).not.toBeNaN();
  })

  it('allowWeather should not be nan', () => {
    expect(component.formData.allowWeather).not.toBeNaN();
  })
});
