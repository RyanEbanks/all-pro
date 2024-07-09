import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <div class="flex flex-row">
    <div class="flex border border-red-400 w-1/2">
      <img src='/assets/computer-repair-services.jpg' alt='man fixing computer' class="h-36 w-2/6" />
    </div>
    <div class="flex flex-col border border-blue-400 w-1/2">
      <h1 class="text-3xl font-bold">ABOUT US</h1>
      <p>
        The highly-trained technicians have many years of experience with all laptop, notebook, macbook and desktop computer repairs. 
        We pride our company on honesty and the good relationships forged through customer satisfaction. We service all makes and models of MAC laptops, 
        Imac, PC laptops, notebooks and most desktops: Dell, Sony, IBM, HP, Acer, Apple, etc.
      </p>
    </div>
    </div>
  `,
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  
}
