import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <div class="flex flex-row border border-blue-950 space-x-64 justify-center py-20 mx-8">
  <div class="flex flex-col text-center justify-between border border-red-600">
        <p class="text-uppercase font-bold text-xl">CALL US 24/7</p>
        <p class="font-thin text-4xl">+123-854-9949</p>
      </div>
      <div class="flex flex-col text-center justify-between border border-red-600">
        <p class="text-uppercase font-bold text-xl">EMAIL ADDRESS</p>
        <p class="font-thin text-4xl">repair&#64;allpro.com</p>
      </div>
      <div class="flex flex-col text-center justify-between border border-red-600">
        <p class="text-uppercase font-bold text-xl">OPEN HOURS</p>
        <p class="font-thin text-4xl">8:00am - 6:00pm</p>
      </div>
      </div>
  `,
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
