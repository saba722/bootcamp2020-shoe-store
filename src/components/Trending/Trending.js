import React from 'react';
import $ from 'jquery';
import { Typography } from '@material-ui/core';
import './Trending.css';
const Trending = () => {

    $(function () {
        $('.material-card > .mc-btn-action').click(function () {
            var card = $(this).parent('.material-card');
            var icon = $(this).children('i');
            icon.addClass('fa-spin-fast');

            if (card.hasClass('mc-active')) {
                card.removeClass('mc-active');

                window.setTimeout(function () {
                    icon
                        .removeClass('fa-arrow-left')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-bars');

                }, 800);
            } else {
                card.addClass('mc-active');

                window.setTimeout(function () {
                    icon
                        .removeClass('fa-bars')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-arrow-left');

                }, 800);
            }
        });
    });

    return (
        <div>
            <section className="container">
                <Typography variant='h4' className='treanding-heading'>Trending</Typography>
                <b><hr /></b>
                <br />
                <br />
                <br />
                <div className="row active-with-click">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <article className="material-card Teal">
                            <h2>
                                <span>Jordan QUAI54</span>
                                <strong>
                                    <i className="fa fa-fw fa-star"></i>
                            Men
                        </strong>
                            </h2>
                            <div className="mc-content">
                                <div className="img-container">
                                    <img alt="" className="img-responsive" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-f07701e3-6343-4ff2-bdc6-9103aa7ec9b6/air-zoom-superrep-hiit-class-shoe-sdWCtF.jpg" />
                                </div>
                                <div className="mc-description">
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                        </div>
                            </div>
                            {/* eslint-disable-next-line */}
                            <a className="mc-btn-action">
                                <i className="fa fa-bars"></i>
                            </a>
                            <div className="mc-footer">
                                <h4>
                                    See More Products
                        </h4>
                                {/* eslint-disable-next-line */}
                                <a className="fa fa-fw fa-facebook" href='#'></a>
                                {/* eslint-disable-next-line */}
                                <a className="fa fa-fw fa-twitter" href='#'></a>
                                {/* eslint-disable-next-line */}
                                <a className="fa fa-fw fa-linkedin" href='#'></a>
                                {/* eslint-disable-next-line */}
                                <a className="fa fa-fw fa-google-plus" href='#'></a>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <article className="material-card Green">
                            <h2>
                                <span>Swoosh Fly Collection</span>
                                <strong>
                                    <i className="fa fa-fw fa-star"></i>
                            Women
                        </strong>
                            </h2>
                            <div className="mc-content">
                                <div className="img-container">
                                    <img alt="" className="img-responsive" src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ff0718b9-5494-49ca-89a2-fe3e8ce16109/custom-nike-air-max-95-unlocked-by-you.jpg" />
                                </div>
                                <div className="mc-description">
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                        </div>
                            </div>
                            {/* eslint-disable-next-line */}
                            <a className="mc-btn-action">
                                <i className="fa fa-bars"></i>
                            </a>
                            <div className="mc-footer">
                                <h4>
                                    See More Products
                        </h4>
                                {/* eslint-disable-next-line */}
                                <a className="fa fa-fw fa-facebook" href='#'></a>
                                {/* eslint-disable-next-line */}
                                <a className="fa fa-fw fa-twitter" href='#'></a>
                                {/* eslint-disable-next-line */}
                                <a className="fa fa-fw fa-linkedin" href='#'></a>
                                {/* eslint-disable-next-line */}
                                <a className="fa fa-fw fa-google-plus" href='#'></a>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <article className="material-card Light-Green">
                            <h2>
                                <span>Trail Running Collection</span>
                                <strong>
                                    <i className="fa fa-fw fa-star"></i>
                            Kids
                        </strong>
                            </h2>
                            <div className="mc-content">
                                <div className="img-container">
                                    <img alt="" className="img-responsive" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/695f645c-bce9-4421-a923-cd68e3980249/air-zoom-speed-younger-older-running-shoe-JnhB6z.jpg" />
                                </div>
                                <div className="mc-description">
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                        </div>
                            </div>
                            {/* eslint-disable-next-line */}
                            <a className="mc-btn-action">
                                <i className="fa fa-bars"></i>
                            </a>
                            <div className="mc-footer">
                                <h4>
                                    See More Products
                        </h4>
                                {/* eslint-disable-next-line */}
                                <a className="fa fa-fw fa-facebook" href='#'></a>
                                {/* eslint-disable-next-line */}
                                <a className="fa fa-fw fa-twitter" href='#'></a>
                                {/* eslint-disable-next-line */}
                                <a className="fa fa-fw fa-linkedin" href='#'></a>
                                {/* eslint-disable-next-line */}
                                <a className="fa fa-fw fa-google-plus" href='#'></a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Trending;