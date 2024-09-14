import React from 'react'

function Product({productName, price}) {
  return (
    <div>
        <div>
          urunler
        </div>
        <div>
          <div>
            isim : {productName}
          </div>
          <div>
            fiyat : {price}
          </div>
        </div>
    </div>
  )
}

export default Product