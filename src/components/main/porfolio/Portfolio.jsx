import { useEffect, useState } from "react";
import ApiService from "../../../utils/ApiService";
import Constant from "../../../utils/Constant";

function Porfolio() {
  const [products, setProducts] = useState([]);
  const [image_upload_path, setimage_upload_path] = useState("")

  useEffect(() => {
    ApiService.getData('all-products').then((res) => {
      setProducts(res.data);
      setimage_upload_path(res.image_upload_path)
    })
  }, [])
  // console.log(products)
  // console.log(image_upload_path)


  return (
    <>
      <main id="main">
        <section id="portfolio" className="portfolio">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Portfolio</h2>
              <p>Check out our beautifull portfolio</p>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-12">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">All</li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div className="row " data-aos="fade-up" data-aos-delay="200">
              {products.map((value) => (

                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6  filter-app" key={value._id}>
                  <a href={`product/${value.product_slug}`}>
                    <div className="portfolio-wrap">
                      <img
                        src={value?.product_image != '' ? image_upload_path + value?.product_image : Constant.default_image}
                        className="img-fluid" alt=""
                        height={"300px"}
                        width={"300px"}
                      />

                      <div className="portfolio-info">
                        <h4 className='px-3'>{value?.product_name}</h4>

                        <a href='javascript:void(0)' onClick={() => quickview(value)} className='quick-view' >
                          Quick View
                        </a>
                      </div>
                    </div>
                  </a>
                  <div className="card-information">
                    <div className="card-information__wrapper">
                      {/* <div className="caption-with-letter-spacing subtitle mb-1">{value?.product_quantity_gms} */}
                      {/* </div> */}
                      <h4 className="card__title "><a className="full-unstyled-link" href={`product/${value.product_slug}`} title="BCAA+EAA - watermelon">{value?.product_name}</a></h4>
                      <div className="price price--on-sale ">
                        <dl>
                          <div className="price__sale">
                            <dt>
                              <span className="visually-hidden visually-hidden--inline">Sale price</span>
                            </dt>
                            <dd>
                              <span className="price-item price-item--sale">₹{value?.product_selling_price}</span>
                            </dd>
                            <dt className="price__compare">
                              <span className="visually-hidden visually-hidden--inline">Regular price</span>
                            </dt>
                            <dd className="price__compare">
                              <span className="price-item price-item--regular"><del>₹{value?.product_mrp}</del></span>
                            </dd>
                            <dt className="price__compare">
                              <span className="visually-hidden visually-hidden--inline">Discount price</span>
                            </dt>
                            <dd className="price__dis">
                              <span className="product_discount">{Math.floor((value.product_discount_price * 100) / Number(value?.product_mrp))}%</span>
                            </dd>
                            <dd className="card__badge">

                            </dd>
                          </div><dl className="unit-price caption hidden"><dt className="visually-hidden">Unit price
                          </dt>
                            <dd>
                              <span></span>
                              <span aria-hidden="true"></span>
                              <span className="visually-hidden">&nbsp;per&nbsp;</span>
                              <span>

                              </span>
                            </dd>
                          </dl>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>


              ))}

              {/* <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="./src/assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                  </div>
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>App</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="./src/assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                  </div>
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="./src/assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                  </div>
                  <div className="portfolio-info">
                    <h4>App 2</h4>
                    <p>App</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="./src/assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                  </div>
                  <div className="portfolio-info">
                    <h4>Card 2</h4>
                    <p>Card</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="./src/assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                  </div>
                  <div className="portfolio-info">
                    <h4>Web 2</h4>
                    <p>Web</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="./src/assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                  </div>
                  <div className="portfolio-info">
                    <h4>App 3</h4>
                    <p>App</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="./src/assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                  </div>
                  <div className="portfolio-info">
                    <h4>Card 1</h4>
                    <p>Card</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="./src/assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                  </div>
                  <div className="portfolio-info">
                    <h4>Card 3</h4>
                    <p>Card</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="./src/assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                  </div>
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                  </div>
                </div>
              </div> */}

            </div>

          </div>
        </section>
      </main>
    </>
  )
}

export default Porfolio;