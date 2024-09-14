import React from 'react'

function Product(props) {

  // const {productName, price} = props;  //{productName : ayakkabi, price : 3000}

  return (
    <div>
        <div>
          urunler
        </div>

        <div>
          <div>
            isim : {props.productName}
          </div>
          <div>
            fiyat : {props.price}
          </div>
        </div>
    </div>
  )
}

export default Product