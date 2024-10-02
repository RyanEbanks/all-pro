import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <div class="flex flex-col lg:flex-row lg:space-x-64 justify-center py-20 mx-8">
  <div class="flex flex-col text-center justify-between py-4 lg:py-0">
        <p class="text-uppercase font-bold text-base lg:text-xl">CALL US 24/7</p>
        <p class="font-thin text-2xl lg:text-4xl">+123-854-9949</p>
      </div>
      <div class="flex flex-col text-center justify-between py-4 lg:py-0">
        <p class="text-uppercase font-bold text-base lg:text-xl">EMAIL ADDRESS</p>
        <p class="font-thin text-2xl lg:text-4xl">repair&#64;allpro.com</p>
      </div>
      <div class="flex flex-col text-center justify-between py-4 lg:py-0">
        <p class="text-uppercase font-bold text-base lg:text-xl">OPEN HOURS</p>
        <p class="font-thin text-2xl lg:text-4xl">8:00am - 6:00pm</p>
      </div>
      </div>
  `,
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
