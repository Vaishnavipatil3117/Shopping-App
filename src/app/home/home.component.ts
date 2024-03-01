import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isHovered = false;
  products = [
    { name: 'Oppo F21 Pro 5G Mobile', price: 15499, image: '../../assets/Images/oppo.webp' },
    { name: 'Real Me Norzo N55', price: 11888, image: '../../assets/Images/narzo.webp' },
    { name: 'Samsung New Galaxy S24 Ultra', price: 109999, image: '../../assets/Images/samsung.webp' },
    { name: 'Vivo V30 Pro 5G', price: 14999, image: '../../assets/Images/vivo.jpg' },
  ];
  watches = [
    { name: 'Unisex Bluetooth Smart Watch', price: 1999, image: '../../assets/Images/watch3.png' },
    { name: 'Zeb-Gemini', price:  9999, image: '../../assets/Images/watch2.webp' },
    { name: 'Titan Talk S Smartwatch', price: 8995, image: '../../assets/Images/watch4.webp' },
    { name: 'CALL TALK I7 PRO MAX SMART WATCH', price: 14999, image: '../../assets/Images/watch5.jpg' },
  ];
  blog = [
    { date: 'FEB 22, 2023', category: 'GADGETS', title: 'GET SOME COOL GADGETS IN 2023',image:'../../assets/Images/post-item1.jpg' },
    { date: 'FEB 25, 2023', category:  'TECHNOLOGY', title: 'TECHNOLOGY HACK YOU WON',image:'../../assets/Images/post-item2.jpg' },
    { date: 'FEB 22, 2023', category: 'CAMERA', title: 'TOP 10 SMALL CAMERA IN THE WORLD',image:'../../assets/Images/post-item3.jpg' },
    
  ];
  addToCart() {
    // Implement your add to cart logic here
    console.log('Item added to cart!');
  }

}
