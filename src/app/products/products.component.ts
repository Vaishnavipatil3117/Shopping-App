import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    FormsModule,CommonModule,ProductDetailsComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  item: any = {};

  selectItem(val: any) {
    this.item = this.product[val];
  }

  close() {
    this.item = {}
  }

  product = [
    {
      id: 1,
      productName: 'mobile',
      price: 14599,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '../../assets/Images/insta-item1.jpg'
    },
    {
      id: 2,
      productName: 'mobile',
      price: 9000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '../../assets/Images/insta-item5.jpg'
    },
    {
      id: 3,
      productName: 'mobile',
      price: 10000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '../../assets/Images/insta-item3.jpg'
    },
    {
      id: 4,
      productName: 'mobile',
      price: 15000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '../../assets/Images/insta-item4.jpg'
    },
    {
      id: 5,
      productName: 'mobile',
      price: 9000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '../../assets/Images/insta-item5.jpg'
    },
    {
      id: 6,
      productName: 'mobile',
      price: 14599,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '../../assets/Images/insta-item1.jpg'
    },
    {
      id: 7,
      productName: 'mobile',
      price: 10413,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '../../assets/Images/insta-item5.jpg'
    },
    {
      id: 8,
      productName: 'mobile',
      price: 9999,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '../../assets/Images/insta-item3.jpg'
    },
    {
      id: 9,
      productName: 'mobile',
      price: 14599,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '../../assets/Images/insta-item4.jpg'
    },
    {
      id: 10,
      productName: 'mobile',
      price: 9599,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '../../assets/Images/insta-item5.jpg'
    },
  ];


}
