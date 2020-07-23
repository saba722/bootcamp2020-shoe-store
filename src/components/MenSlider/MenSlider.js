// import React from 'react';
// import './MenSlider.css';
// // import $ from 'jquery';
// import OwlCarousel from 'react-owl-carousel';
// import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
// import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
// import { Grid } from '@material-ui/core';

// // $("a.owl-prev").click(function() {
// //     $("div.owl-prev").click();
// // })
// // $("a.owl-next").click(function() {
// //     $("div.owl-next").click();
// // })

// class MenSlider extends React.Component {
//     render() {
//         return (
//             <Grid>
//                 <section className="container">

//                     <section className="owlwrapper">
//                         <div id="sync1" className="owl-carousel owl-theme">
//                             <OwlCarousel
//                                 className="owl-theme"
//                                 loop
//                                 margin={10}
//                                 nav
//                                 items={3}
//                                 animateOut='fadeOut'
//                             >
//                                 <div className="item">
//                                     <img src="http://www.jiib.ch/material-slider/img/earth.png" alt="1.jpg" />
//                                     <div className="slide-text">
//                                         <h2>Your lab, everywhere</h2>
//                                         <p>Use everyday object in your experiments</p>
//                                         <a className="btn waves-effect waves-purple  lighten-2">Get started</a>
//                                     </div>
//                                 </div>
//                                 <div className="item">
//                                     <img src="http://www.jiib.ch/material-slider/img/red-planet.png" alt="4.jpg" />
//                                     <div className="slide-text">
//                                         <h2>Go red, everywhere</h2>
//                                         <p>And explore the world</p>
//                                         <a className="btn waves-effect waves-purple lighten-2">Learn more</a>
//                                     </div>
//                                 </div>
//                                 <div className="item">
//                                     <img src="http://www.jiib.ch/material-slider/img/ballons.png" alt="3.jpg" />
//                                     <div className="slide-text">
//                                         <h2>Your files, anywhere</h2>
//                                         <p>Google Docs syncs your files across <br />all devices so you can work anywhere.</p>
//                                         <a className="btn waves-effect waves-purple lighten-2">Learn more</a>
//                                     </div>
//                                 </div>
//                             </OwlCarousel>
//                         </div>



//                         {/* <div className="owl-controls material-controls">
//                             <div className="owl-nav">
//                                 <a className="btn-floating btn-large waves-effect grey lighten-2 owl-prev" title=""><i className="material-icons">arrow_back</i></a>
//                                 <a className="btn-floating btn-large waves-effect grey lighten-2 owl-next" title=""><i className="material-icons">arrow_forward</i></a>
//                             </div>
//                         </div> */}
//                     </section>
//                 </section>
//             </Grid>
//         );
//     }
// }

// export default MenSlider;


import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Typography } from '@material-ui/core';
 
class MenSlider extends Component {
    render() {
        return (
            <div>
            <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
            <Typography variant='h4' className='treanding-heading'>Mens Collection</Typography>
                <b><hr /></b>
                <br />
                <br />
                <br />
            <Carousel infiniteLoop={true}>
                <div>
                    <img src="https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/i1-e2d8c203-2369-452d-873e-e016853ee7aa/sportswear-swoosh-pullover-hoodie-MsX3P4.jpg" alt="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/1e590fbc-1dc4-4034-a953-7b132bd386a5/sportswear-swoosh-french-terry-shorts-8p6l9p.jpg" alt="" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/cc798a7c-65cd-4ad3-9e5b-98036798c499/sportswear-french-terry-pullover-hoodie-tpRTZM.jpg" alt="" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </div>
        );
    }
}

export default MenSlider;