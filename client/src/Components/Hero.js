import React from 'react'

function Hero({departments}) {

  console.log(departments)

    return (
        <>
        <section className="hero_single version_2">
          <div className="wrapper">
            <div className="container">
              <h3>Find what you need!</h3>
              <p>Discover top rated hotels, shops and restaurants around the world</p>
            </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
                    <div className="input-group" id="adv-search">
                        <input type="text" className="form-control search-input" placeholder="Search for snippets" />
                        <div className="input-group-btn">
                            <div className="btn-group" role="group">
                                <div className="dropdown dropdown-lg">
                                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span className="caret"></span></button>
                                    <div className="dropdown-menu dropdown-menu-righ">

                                    </div>
                                </div>
                                <button type="button" className="btn btn-primary"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
          </div>

          </div>
          
        </section>


<div className="main_categories">
<div className="container">
  <ul className="clearfix">
    <li>
      <a href="grid-listings-filterscol.html">
        <i className="icon-shop"></i>
        <h3>{departments[0]?.name}</h3>
      </a>
    </li>
    <li>
      <a href="grid-listings-filterscol.html">
        <i className="icon-lodging"></i>
        <h3>{departments[1]?.name}</h3>
      </a>
    </li>
    <li>
      <a href="grid-listings-filterscol.html">
        <i className="icon-restaurant"></i>
        <h3>{departments[2]?.name}</h3>
      </a>
    </li>
    <li>
      <a href="grid-listings-filterscol.html">
        <i className="icon-bar"></i>
        <h3>{departments[3]?.name}</h3>
      </a>
    </li>
    <li>
      <a href="grid-listings-filterscol.html">
        <i className="icon-dot-3"></i>
        <h3>More</h3>
      </a>
    </li>
  </ul>
</div>

</div>

</>
    )
}

export default Hero
