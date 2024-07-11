import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  template:`
     <div class="py-20">
        <img src="assets/man.jpg" alt="man smiling" class="h-40 w-40 rounded-full mx-auto"/>
        <h1 class="text-3xl font-bold text-center">John Sanders</h1>
        <p class="uppercase font-thin text-sm text-center">client</p>
        <img src="assets/quote-left-solid.svg" alt="quotation to the left" class="h-8 w-8 mx-auto"/>
        <p class="font-thin text-center text-xl px-8 lg:px-0">Donald came out to my house. he was on time, pleasant to work with and got the job done. I would definitely hire AllPro again.</p>
      </div>
  `,
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
