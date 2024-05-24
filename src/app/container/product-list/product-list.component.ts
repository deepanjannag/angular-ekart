import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: 'Nike React Infinity Run Flyknit',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
      brand: 'NIKE',
      category: 'RUNNING',
      gender: 'MEN',
      color: ['White', 'Blue', 'Black'],
      size: [6, 7, 8, 9, 10],
      price: 160,
      discountPrice: 140,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://dodo.ac/np/images/b/b8/Trekking_Shoes_%28White%29_NH_Icon.png',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 2,
      name: 'Adidas Ultraboost 21',
      description:
        'The Adidas Ultraboost 21 is known for its exceptional comfort and performance...',
      brand: 'ADIDAS',
      category: 'RUNNING',
      gender: 'WOMEN',
      color: ['Pink', 'White'],
      size: [5, 6, 7, 8],
      price: 180,
      discountPrice: 140,
      is_in_inventory: true,
      items_left: 5,
      imageURL:
        'https://dodo.ac/np/images/b/b8/Trekking_Shoes_%28White%29_NH_Icon.png',
      slug: 'adidas-ultraboost-21',
    },
    {
      id: 3,
      name: 'Asics Gel-Kayano 27',
      description:
        'Asics Gel-Kayano 27 provides excellent support and comfort for long runs...',
      brand: 'ASICS',
      category: 'RUNNING',
      gender: 'MEN',
      color: ['Black', 'Green'],
      size: [7, 8, 9, 10, 11],
      price: 150,
      discountPrice: 140,
      is_in_inventory: false,
      items_left: 0,
      imageURL:
        'https://dodo.ac/np/images/b/b8/Trekking_Shoes_%28White%29_NH_Icon.png',
      slug: 'asics-gel-kayano-27',
    },
    {
      id: 4,
      name: 'Puma Future Rider',
      description:
        'Puma Future Rider is a stylish and comfortable choice for everyday wear...',
      brand: 'PUMA',
      category: 'CASUAL',
      gender: 'UNISEX',
      color: ['Red', 'White', 'Blue'],
      size: [6, 7, 8, 9, 10, 11],
      price: 120,
      is_in_inventory: true,
      items_left: 10,
      imageURL:
        'https://dodo.ac/np/images/b/b8/Trekking_Shoes_%28White%29_NH_Icon.png',
      slug: 'puma-future-rider',
    },
    {
      id: 5,
      name: 'Reebok Nano X1',
      description:
        'Reebok Nano X1 is designed for high-performance training...',
      brand: 'REEBOK',
      category: 'TRAINING',
      gender: 'MEN',
      color: ['Black', 'Gray'],
      size: [7, 8, 9, 10, 11, 12],
      price: 130,
      discountPrice: 20,
      is_in_inventory: true,
      items_left: 7,
      imageURL:
        'https://dodo.ac/np/images/b/b8/Trekking_Shoes_%28White%29_NH_Icon.png',
      slug: 'reebok-nano-x1',
    },
    {
      id: 6,
      name: 'New Balance 1080v11',
      description:
        'The New Balance 1080v11 offers superior cushioning for long-distance running...',
      brand: 'NEW BALANCE',
      category: 'RUNNING',
      gender: 'WOMEN',
      color: ['Purple', 'Pink'],
      size: [6, 7, 8, 9],
      price: 150,
      is_in_inventory: true,
      items_left: 2,
      imageURL:
        'https://dodo.ac/np/images/b/b8/Trekking_Shoes_%28White%29_NH_Icon.png',
      slug: 'new-balance-1080v11',
    },
    {
      id: 7,
      name: 'Brooks Ghost 13',
      description:
        'Brooks Ghost 13 is perfect for runners seeking a smooth ride...',
      brand: 'BROOKS',
      category: 'RUNNING',
      gender: 'MEN',
      color: ['Blue', 'White'],
      size: [8, 9, 10, 11],
      price: 140,
      discountPrice: 130,
      is_in_inventory: true,
      items_left: 4,
      imageURL:
        'https://dodo.ac/np/images/b/b8/Trekking_Shoes_%28White%29_NH_Icon.png',
      slug: 'brooks-ghost-13',
    },
    {
      id: 8,
      name: 'Saucony Endorphin Speed',
      description:
        'Saucony Endorphin Speed is a versatile running shoe with a responsive ride...',
      brand: 'SAUCONY',
      category: 'RUNNING',
      gender: 'WOMEN',
      color: ['Yellow', 'Black'],
      size: [6, 7, 8, 9, 10],
      price: 160,
      is_in_inventory: true,
      items_left: 6,
      imageURL:
        'https://dodo.ac/np/images/b/b8/Trekking_Shoes_%28White%29_NH_Icon.png',
      slug: 'saucony-endorphin-speed',
    },
    {
      id: 9,
      name: 'Hoka One One Clifton 7',
      description: 'Hoka One One Clifton 7 offers a lightweight, plush ride...',
      brand: 'HOKA ONE ONE',
      category: 'RUNNING',
      gender: 'MEN',
      color: ['Blue', 'Orange'],
      size: [7, 8, 9, 10, 11],
      price: 130,
      is_in_inventory: true,
      items_left: 8,
      imageURL:
        'https://dodo.ac/np/images/b/b8/Trekking_Shoes_%28White%29_NH_Icon.png',
      slug: 'hoka-one-one-clifton-7',
    },
    {
      id: 10,
      name: 'Under Armour HOVR Phantom 2',
      description:
        'Under Armour HOVR Phantom 2 combines style and comfort for everyday use...',
      brand: 'UNDER ARMOUR',
      category: 'CASUAL',
      gender: 'UNISEX',
      color: ['Black', 'White'],
      size: [6, 7, 8, 9, 10, 11, 12],
      price: 140,
      discountPrice: 100,
      is_in_inventory: true,
      items_left: 12,
      imageURL:
        'https://dodo.ac/np/images/b/b8/Trekking_Shoes_%28White%29_NH_Icon.png',
      slug: 'under-armour-hovr-phantom-2',
    },
  ];

  totalProducts = this.products.length;
  inStockProducts = this.products.filter((p) => p.is_in_inventory).length;
  outOfStockProducts = this.products.filter((p) => !p.is_in_inventory).length;

  @Input()
  searchText: string = '';

  selectedFilterRadioButton: string = 'all';

  onFilterChanged(value: string) {
    console.log('Value is: ' + value);
    this.selectedFilterRadioButton = value;
  }
}
