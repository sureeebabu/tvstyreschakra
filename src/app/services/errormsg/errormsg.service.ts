import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrormsgService {

  constructor() { }
  validationMSG = {
    username: [
      { type: 'required', message: 'Name is required.' },
      { type: 'pattern', message: 'Number are not allowed' }
    ],
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    mobileNo: [
      { type: 'required', message: 'Mobile number is required.' },
      { type: 'minlength', message: 'Mobile No must be at least 10' },
      { type: 'maxlength', message: 'Mobile No cannot be more than 10' },
      { type: 'pattern', message: 'Chapter are not allowed' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
      // { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
    confirmPassword: [
      { type: 'required', message: 'Confirm password is required.' }
    ],
    matchingPasswords: [
      { type: 'areEqual', message: 'Password mismatch.' }
    ],
    PaymentType : [
      { type: 'required', message: 'Payment Type is required.' }
    ],
    landmark: [
      { type: 'required', message: 'Landmark is required.' }
    ],
    address: [
      { type: 'required', message: 'Address is required.' }
    ],
    City: [
      { type: 'required', message: 'City is required.' }
    ],
    Country: [
      { type: 'required', message: 'Country is required.' }
    ],
    State: [
      { type: 'required', message: 'State is required.' }
    ],
    Pincode: [
      { type: 'required', message: 'Pincode is required.' },
      { type: 'minlength', message: 'Pincode must be at least 10' },
      { type: 'maxlength', message: 'Pincode cannot be more than 10' },
      { type: 'pattern', message: 'Chapter are not allowed' }
    ],
  };
}
