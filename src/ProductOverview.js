import React, { Fragment } from 'react';

const ProductOverview = ({
  product: { included, data },
  handlePurchase,
  selectedColour,
  selectedSize
}) => (
  <Fragment>
    <div className="content-picture">
      <div className="brand">
        <img src="https://i.imgur.com/mtXTYem.png" />
      </div>
      <div className="photo">
        <img src={included.main_images[0].link.href} />
      </div>
    </div>

    <div className="content-text">
      <div className="header">
        <h1>{data.name}</h1>
        <div className="rating">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star-half-o" />
        </div>
      </div>

      {/* <h4>{selectedColour.toUpperCase()}</h4> */}

      <h5>{data.meta.display_price.with_tax.formatted}</h5>

      <h3>DESCRIPTION</h3>
      <p>{data.description}</p>

      <div className="specs">
        {data.meta.variations.map((variant, index) => (
          <div key={index} className={variant.name.toLowerCase()}>
            <h3>{variant.name}</h3>

            {variant.name.toLowerCase() == 'colour' && (
              <Fragment>
                {variant.options.map((option, index) => (
                  <Fragment>
                    <input
                      type="radio"
                      name="radio"
                      id={option.name.replace(' ', '-').toLowerCase()}
                      className="radio"
                      onClick={e => alert(e.target.id)}
                      value={option.name.replace(' ', '-').toLowerCase()}
                    />

                    <label for={option.name.replace(' ', '-').toLowerCase()}>
                      &nbsp;
                    </label>
                  </Fragment>
                ))}
              </Fragment>
            )}

            {variant.name.toLowerCase() == 'size' && (
              <Fragment>
                <select>
                  {variant.options.map(option => (
                    <option key={option.name}>{option.name}</option>
                  ))}
                </select>
              </Fragment>
            )}
          </div>
        ))}

        <div className="purchase">
          <div className="button" onClick={handlePurchase}>
            <i className="fa fa-credit-card" />
            <span>Purchase</span>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default ProductOverview;
