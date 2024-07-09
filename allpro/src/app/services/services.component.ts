import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `
  <h1 class="text-white text-6xl font-bold text-center pt-20 pb-8">Services</h1>
  <div class="flex flex-row flex-wrap justify-center space-x-20 pb-20">
  <div class="border border-white w-1/5 text-center my-6 space-y-3">
        <img src="assets/desktop-solid.svg" alt="desktop icon" class="h-16 w-16 mx-auto transform transition-transform duration-300 hover:scale-110">
        <h3 class="text-white">Desktop Repair</h3>
        <p class="text-white text-sm">With our Laptop Repair, you’ll be thrilled you came to us for your repair. Bring us whatever you need us to fix.</p>
      </div>
      <div class="border border-white w-1/5 text-center my-6 space-y-3">
        <img src="assets/tablet-solid.svg" alt="desktop icon" class="h-16 w-16 mx-auto transform transition-transform duration-300 hover:scale-110">
        <h3 class="text-white">Tablet Repair</h3>
        <p class="text-white text-sm">Since 2007, we’ve provided customers with convenient and comprehensive services for all their repair needs.</p>
      </div>
      <div class="border border-white w-1/5 text-center my-6 space-y-3">
        <img src="assets/mobile-screen-button-solid.svg" alt="desktop icon" class="h-16 w-16 mx-auto transform transition-transform duration-300 hover:scale-110">
        <h3 class="text-white">Smartphone Repair</h3>
        <p class="text-white text-sm">We’ll be sure to do everything in our power to get the job done right. Get in touch to find out more about this service.</p>
      </div>
      <div class="border border-white w-1/5 text-center my-6 space-y-3">
        <img src="assets/laptop-solid.svg" alt="desktop icon" class="h-16 w-16 mx-auto transform transition-transform duration-300 hover:scale-110">
        <h3 class="text-white">Laptop Repair</h3>
        <p class="text-white text-sm">Our Laptop Repair are available to all of our clients, when they need them most. Call us today and find out more.</p>
      </div>
      <div class="border border-white w-1/5 text-center my-6 space-y-3">
        <img src="assets/microchip-solid.svg" alt="desktop icon" class="h-16 w-16 mx-auto transform transition-transform duration-300 hover:scale-110">
        <h3 class="text-white">Hardware Repair</h3>
        <p class="text-white text-sm">Our fantastic Hardware Repair are among our most popular services. Our team members are happy to answer any of your questions.</p>
      </div>
      <div class="border border-white w-1/5 text-center my-6 space-y-3">
        <img src="assets/lightbulb-solid.svg" alt="desktop icon" class="h-16 w-16 mx-auto transform transition-transform duration-300 hover:scale-110">
        <h3 class="text-white">App Installation</h3>
        <p class="text-white text-sm">We're committed to your happiness, which is why our expert repair technicians provide all the services you need.</p>
      </div>
  </div>
  `,
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
