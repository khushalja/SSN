import React, { Component } from 'react'
import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './footer.css'


export default class footer extends Component {
    render() {
        return (
            <div className='appfoot'>
                <footer class="footer">
                    <div class="footer__addr">
                        <h1 class="footer__logo">Shree Sanskruti Foundation</h1>

                        <h2>Contact</h2>

                        <address>
                            Lokhande nagar, Nagpur<br/>
                             <a class="footer__btn" href="mailto:example@gmail.com"><FaEnvelope/> &nbsp; Email Us</a>
                        </address>
                    </div>

                    <ul class="footer__nav">
                        <li class="nav__item">
                            <h2 class="nav__title"> Social Media</h2>

                            <ul class="nav__ul">
                                <li>
                                    <a href="#" target="_blank"><FaFacebook />  Facebook</a>
                                </li>

                                <li>
                                    <a href="#" target="_blank"><FaWhatsapp/>  Whatsapp</a>
                                </li>

                                <li>
                                    <a href="#" target="_blank"><FaInstagram/>  Instagram</a>
                                </li>
                                <li>
                                    <a href="#" target="_blank"><FaTwitter/>  Twitter</a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav__item nav__item--extra">
                            <h2 class="nav__title">Events</h2>

                            <ul class="nav__ul nav__ul--extra">
                                <li>
                                <a href="#"> Entertainment</a>
                                </li>

                                <li>
                                    <a href="#">Dance Competitions</a>
                                </li>

                                <li>
                                    <a href="#">Charity Events</a>
                                </li>

                                <li>
                                    <a href="#">Fund Raisers</a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav__item">
                            <h2 class="nav__title">Legality</h2>

                            <ul class="nav__ul">
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Terms of Use</a>
                                </li>
                                <li>
                                    <a href="#">Sitemap</a>
                                </li>
                                <li>
                                    <a href="#">Disclaimer</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <div class="legal">
                        <p>&copy; 2022 ShreeSanskruti. All rights reserved.</p>
                        <div class="legal__links">
                            <span>Made by <span class="heart">♥</span> Ritik</span>
                        </div>
                    </div>
                </footer>
            </div >
        )
    }
}
