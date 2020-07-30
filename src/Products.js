import React from 'react';

import './products.css';

async function getProducts() {
    const res = await fetch('/api/Products')
    const products = await res.json()
    return products
    // return new Promise((resolve) => {
    //   resolve([
    //     {
    //       id: 1,
    //       name: "Product",
    //     },
    //   ]);
    // })
}

class Products extends React.Component {
  constructor () {
    super();
    this.state = {
      products: []
    };
  }

  async componentDidMount() {
    const products = await getProducts();
    this.setState({ products })
  }

  render() {
    return (
    <div>
      {this.state.products.map(p => <div key={p.id} className="item">{p.name}</div>)}
    </div>
    )
  }
}

export default Products