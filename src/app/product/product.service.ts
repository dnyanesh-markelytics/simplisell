import { EventEmitter } from '@angular/core';

export class ProductService{
    private products = [{
        "name":"Honor 9N (Robin Egg Blue, 64 GB) (4 GB RAM)",
        "logo":"assets/images/honor-9n.jpeg",
        "store":"Flipkart",
        "original_price":"₹10999",
        "discount_price":"₹9999",
        "profit":75,
        "buy_link":"https://www.amazon.in/Bose-Quiet-Comfort-Wireless-Headphone/dp/B0756CYWWD/ref=sr_1_1?_encoding=UTF8&pf_rd_i=desktop&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=2b9bb3c1-71bb-48bb-8476-31c6e37895b1&pf_rd_r=QSH4E9J05B9C51WBZ5H9&pf_rd_t=36701&qid=1563378121&s=electronics&smid=A14CZOWI0VEHLG&sr=1-1"
      },
      {
        "name":"Honor 9N (Robin Egg Blue, 64 GB) (4 GB RAM)",
        "logo":"assets/images/honor-9n.jpeg",
        "store":"Flipkart",
        "original_price":"₹10999",
        "discount_price":"₹9999",
        "profit":75,
        "buy_link":"https://www.amazon.in/Bose-Quiet-Comfort-Wireless-Headphone/dp/B0756CYWWD/ref=sr_1_1?_encoding=UTF8&pf_rd_i=desktop&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=2b9bb3c1-71bb-48bb-8476-31c6e37895b1&pf_rd_r=QSH4E9J05B9C51WBZ5H9&pf_rd_t=36701&qid=1563378121&s=electronics&smid=A14CZOWI0VEHLG&sr=1-1"
      },
      {
        "name":"Honor 9N (Robin Egg Blue, 64 GB) (4 GB RAM)",
        "logo":"assets/images/honor-9n.jpeg",
        "store":"Flipkart",
        "original_price":"₹10999",
        "discount_price":"₹9999",
        "profit":75,
        "buy_link":"https://www.amazon.in/Bose-Quiet-Comfort-Wireless-Headphone/dp/B0756CYWWD/ref=sr_1_1?_encoding=UTF8&pf_rd_i=desktop&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=2b9bb3c1-71bb-48bb-8476-31c6e37895b1&pf_rd_r=QSH4E9J05B9C51WBZ5H9&pf_rd_t=36701&qid=1563378121&s=electronics&smid=A14CZOWI0VEHLG&sr=1-1"
      },
      {
        "name":"Honor 9N (Robin Egg Blue, 64 GB) (4 GB RAM)",
        "logo":"assets/images/honor-9n.jpeg",
        "store":"Flipkart",
        "original_price":"₹10999",
        "discount_price":"₹9999",
        "profit":75,
        "buy_link":"https://www.amazon.in/Bose-Quiet-Comfort-Wireless-Headphone/dp/B0756CYWWD/ref=sr_1_1?_encoding=UTF8&pf_rd_i=desktop&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=2b9bb3c1-71bb-48bb-8476-31c6e37895b1&pf_rd_r=QSH4E9J05B9C51WBZ5H9&pf_rd_t=36701&qid=1563378121&s=electronics&smid=A14CZOWI0VEHLG&sr=1-1"
      },
      {
        "name":"Honor 9N (Robin Egg Blue, 64 GB) (4 GB RAM)",
        "logo":"assets/images/honor-9n.jpeg",
        "store":"Flipkart",
        "original_price":"₹10999",
        "discount_price":"₹9999",
        "profit":75,
        "buy_link":"https://www.amazon.in/Bose-Quiet-Comfort-Wireless-Headphone/dp/B0756CYWWD/ref=sr_1_1?_encoding=UTF8&pf_rd_i=desktop&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=2b9bb3c1-71bb-48bb-8476-31c6e37895b1&pf_rd_r=QSH4E9J05B9C51WBZ5H9&pf_rd_t=36701&qid=1563378121&s=electronics&smid=A14CZOWI0VEHLG&sr=1-1"
      }];

      getProducts(){
          return this.products.slice();
      }
}