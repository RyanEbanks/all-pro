import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  template: `
 <div class="flex flex-col bg-black items-center py-20">
  <form [formGroup]="myForm" (ngSubmit)="submitForm()" class="w-full max-w-sm">
    <div class="mb-4">
      <label for="name" class="block text-white text-sm font-bold mb-2">Name:</label>
      <input type="text" id="name" formControlName="name" required class="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
    </div>
    <div class="mb-4">
      <label for="email" class="block text-white text-sm font-bold mb-2">Email:</label>
      <input type="email" id="email" formControlName="email" required class="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
    </div>
    <div class="mb-4">
      <label for="time" class="block text-white text-sm font-bold mb-2">Preferred Time:</label>
      <select id="time" formControlName="time" class="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <option value="">Select a time slot</option>
        <option value="8-9">8:00 AM - 9:00 AM</option>
        <option value="9-10">9:00 AM - 10:00 AM</option>
        <option value="10-11">10:00 AM - 11:00 AM</option>
        <option value="11-12">11:00 AM - 12:00 PM</option>
        <option value="12-1">12:00 PM - 1:00 PM</option>
        <option value="1-2">1:00 PM - 2:00 PM</option>
        <option value="2-3">2:00 PM - 3:00 PM</option>
        <option value="3-4">3:00 PM - 4:00 PM</option>
        <option value="4-5">4:00 PM - 5:00 PM</option>
        <option value="5-6">5:00 PM - 6:00 PM</option>
      </select>
    </div>
    <div class="flex items-center justify-between">
      <button type="submit" [disabled]="!myForm.valid" class="hover:bg-[#54be73] bg-transparent text-[#54be73] border-2 border-[#54be73] hover:text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline">
        Submit
      </button>
    </div>
  </form>
</div>

  `,
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      time: ["", Validators.required]
    });
  }

  ngOnInit() {}

  submitForm() {
    if (this.myForm.valid) {
      console.log("Form Has been submitted. This isn't actually going anywhere");
      console.log(this.myForm.value);
    }
  }
}
