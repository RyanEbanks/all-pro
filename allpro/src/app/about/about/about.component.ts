import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <div class="flex flex-col lg:flex-row my-10">
    <div class="flex lg:h-custom-h w-full lg:w-1/2">
      <img src='/assets/computer-repair-services.jpg' alt='man fixing computer' class="object-cover" />
    </div>
    <div class="flex flex-col w-full lg:w-1/2 px-10 lg:px-20 justify-center">
      <h1 class="text-2xl font-thin text-center lg:text-left">Welcome!</h1>
      <h1 class="mb-3 text-4xl lg:text-6xl font-bold text-center lg:text-left">ABOUT US</h1>
      <p class="my-3 text-xl font-light text-center lg:text-left">
        The highly-trained technicians have many years of experience with all laptop, notebook, macbook and desktop computer repairs. 
        We pride our company on honesty and the good relationships forged through customer satisfaction. We service all makes and models of MAC laptops, 
        Imac, PC laptops, notebooks and most desktops: Dell, Sony, IBM, HP, Acer, Apple, etc.
      </p>
      <button
        class="my-6 py-3 px-9 mx-auto lg:mx-0 bg-[#54be73] text-white hover:bg-white hover:text-[#54be73] border-2 border-[#54be73] font-bold w-3/4 lg:w-1/4">Appointment</button>
    </div>
    </div>
  `,
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  
}
