import React, { Component } from "react";

import ProductCard from "./productCard";

class ProductList extends Component {

  render() {
    const products = [
      { id: 1, name: 'KAFKA ON THE SHORE', price: 90, cover: 'https://www.harukimurakami.com/wp-content/uploads/2015/07/KafkaontheShore_r1_GB-682x1024.jpg', quote: '“Closing your eyes isn’t going to change anything. Nothing’s going to disappear just because you can’t see what’s going on…. Keep your eyes wide open. Only a coward closes his eyes.”' },

      { id: 2, name: 'NORWEGIAN WOOD', price: 80, cover: 'https://www.harukimurakami.com/wp-content/uploads/2015/07/NorwegianWood_r1_GB-682x1024.jpg', quote: '“I want you always to remember me. Will you remember that I existed, and that I stood next to you here like this?”' },

      { id: 3, name: 'DANCE DANCE DANCE', price: 70, cover: 'https://www.harukimurakami.com/wp-content/uploads/2015/07/DanceDanceDance_r1_GB-682x1024.jpg', quote: '“As time goes on, you’ll understand. What lasts, lasts; what doesn’t, doesn’t. Time solves most things. And what time can’t solve, you have to solve yourself.”' },

      { id: 4, name: '1Q84', price: 100, cover: 'https://www.harukimurakami.com/wp-content/uploads/2014/10/1Q84_r3-682x1024.jpg', quote: '“I’m like someone who’s been thrown into the ocean at night, floating all alone. I reach out, but no one is there. I call out, but no one answers. I have no connection to anything.”' },
      { id: 5, name: 'THE STRANGE LIBRARY', price: 100, cover: 'https://www.harukimurakami.com/wp-content/uploads/2014/12/The_Strange_Library_r1-682x1024.jpg', quote: '“The tricky thing about mazes is that you don’t know if you’ve chosen the right path until the very end.”' },
      { id: 1, name: 'kafka on the shore', price: 100, cover: 'https://www.harukimurakami.com/wp-content/uploads/2018/04/KillingComm_Book-682x1024.jpg', quote: '“We all live our lives carrying secrets we cannot disclose.”' },
    ];

    return (
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <ProductCard
              id={product.id}
              name={product.name}
              price={product.price}
              cover={product.cover}
              quote={product.quote}
            >
            </ProductCard>
          ))}
        </div></div>
    );
  }
}

export default ProductList;
