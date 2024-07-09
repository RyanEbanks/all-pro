import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <div class="flex flex-row border border-purple-950">
    <div class="flex border border-red-400 h-custom-h w-1/2">
      <img src='/assets/computer-repair-services.jpg' alt='man fixing computer' class="object-cover" />
    </div>
    <div class="flex flex-col border border-blue-400 w-1/2 px-20 justify-center">
      <h1 class="text-2xl font-thin">Welcome!</h1>
      <h1 class="mb-3 text-6xl font-bold">ABOUT US</h1>
      <p class="my-3 text-xl font-light">
        The highly-trained technicians have many years of experience with all laptop, notebook, macbook and desktop computer repairs. 
        We pride our company on honesty and the good relationships forged through customer satisfaction. We service all makes and models of MAC laptops, 
        Imac, PC laptops, notebooks and most desktops: Dell, Sony, IBM, HP, Acer, Apple, etc.
      </p>
      <button
        class="my-6 py-3 px-9 bg-[#54be73] text-white hover:bg-white hover:text-[#54be73] border-2 border-[#54be73] font-bold w-1/4">Appointment</button>
    </div>
    </div>
  `,
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  
}
