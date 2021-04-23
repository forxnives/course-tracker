import React from 'react'

function SuggestCat({cat}) {
    return (
        <>
        <div className="main_title_3">
        <span></span>
        <h2>{cat}</h2>
        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
        <a href="grid-listings-filterscol.html">See all</a>
      </div>
      <div className="row add_bottom_30">
        <div className="col-lg-3 col-sm-6">
          <a href="detail-shop.html" className="grid_item small">
            <figure>
              <img src="img/shop_1.jpg" alt=""/>
              <div className="info">
                <h3>Victoria Secretes</h3>
              </div>
            </figure>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6">
          <a href="detail-shop.html" className="grid_item small">
            <figure>
              <img src="img/shop_2.jpg" alt=""/>
              <div className="info">
                <h3>Louis Vuitton</h3>
              </div>
            </figure>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6">
          <a href="detail-shop.html" className="grid_item small">
            <figure>
              <img src="img/shop_3.jpg" alt=""/>
              <div className="info">
                <h3>Burberry</h3>
              </div>
            </figure>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6">
          <a href="detail-shop.html" className="grid_item small">
            <figure>
              <img src="img/shop_4.jpg" alt=""/>
              <div className="info">
                <h3>Pinko</h3>
              </div>
            </figure>
          </a>
        </div>
      </div>
      </>
    )
}

export default SuggestCat
