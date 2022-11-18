import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer class="new_footer_area bg_color">
            <div class="new_footer_top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInLeft" }}>
                                <h3 class="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                <p>Don’t miss any updates of our new templates and extensions.!</p>
                                <form action="/shop" class="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                                    <input type="text" name="EMAIL" class="form-control memail" placeholder="Email" />
                                    <button class="btn btn_get btn_get_two">Subscribe</button>
                                    <p class="mchimp-errmessage" style={{ display: "none" }}></p>
                                    <p class="mchimp-sucmessage" style={{ display: "none" }}></p>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{ visibility: "visible", animationDelay: "0.4s", animationName: "fadeInLeft" }}>
                                <h3 class="f-title f_600 t_color f_size_18">Download</h3>
                                <ul class="list-unstyled f_list">
                                    <li><a href="/shop">Company</a></li>
                                    <li><a href="/shop">Android App</a></li>
                                    <li><a href="/shop">ios App</a></li>
                                    <li><a href="/shop">Desktop</a></li>
                                    <li><a href="/shop">Projects</a></li>
                                    <li><a href="/shop">My tasks</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{ visibility: "visible", animationDelay: "0.6s", animationName: "fadeInLeft" }}>
                                <h3 class="f-title f_600 t_color f_size_18">Help</h3>
                                <ul class="list-unstyled f_list">
                                    <li><a href="/shop">FAQ</a></li>
                                    <li><a href="/shop">Term &amp; conditions</a></li>
                                    <li><a href="/shop">Reporting</a></li>
                                    <li><a href="/shop">Documentation</a></li>
                                    <li><a href="/shop">Support Policy</a></li>
                                    <li><a href="/shop">Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{ visibility: "visible", animationDelay: "0.8s", animationName: "fadeInLeft" }}>
                                <h3 class="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                <div class="f_social_icon">
                                    <a href="/shop" class="fab fa-facebook"></a>
                                    <a href="/shop" class="fab fa-twitter"></a>
                                    <a href="/shop" class="fab fa-linkedin"></a>
                                    <a href="/shop" class="fab fa-pinterest"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer_bg">
                    <div class="footer_bg_one"></div>
                    <div class="footer_bg_two"></div>
                </div>
            </div>
            <div class="footer_bottom">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-sm-7">
                            <p class="mb-0 f_400">© Ema-John Inc.. 2022 All rights reserved.</p>
                        </div>
                        <div class="col-lg-6 col-sm-5 text-right">
                            <p>Made with <i class="icon_heart"></i> in <a href="/" target="_blank">Sohidul Islam</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer