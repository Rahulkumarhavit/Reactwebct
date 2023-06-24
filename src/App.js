import React, { Component } from 'react';
import "./App.css";
class App extends Component{
    render(){
        return(
            <>
                <div className='webiste'>

                                    {/* Main nav bar section */}
                    <section className='wrapper_main'>
                        <img className="main_img"src='image/11.png'alt='main'/>
                        <div className='navbar-container'>
                            <ul className='menu-items'>
                                <li> <a href='{#}'>Çözüm ve Hizmetler</a> </li>
                                <li><a href='{#}'>Ürünler</a></li>
                                <li><a href='{#}'>Teknolojiler</a></li>
                                <li><a href='{#}'>İnsan Kaynakları</a></li>
                                <li><a href='{#}'>Kurumsal</a></li>
                                <li className='btn'><a href='{#}'>İletişim</a></li>
                            </ul>
                        </div>

                        <div className='hero-container'>
                            <div className='hero-heading'>
                                <h1>Bilgi Teknolojilerinde 23<br/> Yıllık Tecrübe</h1>
                            </div>
                            <div className='hero-para'>
                                <p>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı </p>
                                <p>sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş</p>
                                <p>Analizi ve Test Yönetimi hizmetleri sunmaktayız.</p>
                            </div>
                            <div className='hero-input'>
                                <input type='text' placeholder='Mail bültenimize kayıt ol'/>
                                <button className='hero-button btn'>Submit</button>
                            </div>
                        </div>

                    </section>


                            {/* wrapper section start */}

                    <section className='wrapper'>
                        <div className='wrapper-heading'><h3>Kalite ve Süreç Yönetimi</h3></div>
                        <div className='wrapper-para'>
                            <p>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe </p>
                            <p>kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri </p>
                            <p>sunmaktayız</p>
                        </div>

                        <div className='card1'>
                            <div className='item1'>
                                <img src='image/10.png' alt=''/>
                                <h3>Döküman Analizi</h3>
                                <p>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
                            </div>
                            <div className='item1'>
                                <img src='image/12.png' alt=''/>
                                <h3>Kabul ve Değerlendirme</h3>
                                <p>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
                            </div>
                            <div className='item1'>
                                <img src='image/13.png' alt=''/>
                                <h3>İş Kuralları Analizi</h3>
                                <p>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
                            </div>
                        </div>
                        <div className='card1 card2'>
                            <div className='item1'>
                                <img src='image/14.png' alt=''/>
                                <h3>Döküman Analizi</h3>
                                <p>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
                            </div>
                            <div className='item1'>
                                <img src='image/15.png' alt=''/>
                                <h3>Kabul ve Değerlendirme</h3>
                                <p>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
                            </div>
                            <div className='item1'>
                                <img src='image/16.png' alt=''/>
                                <h3>İş Kuralları Analizi</h3>
                                <p>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
                            </div>
                        </div>
                    </section>

                                {/* strip section start here */}

                    <section className='strip'>
                        <div className='strip-heading'><h1>Test Yönetimiyle Neler Sağlıyoruz?</h1></div>
                        <p className='strip-para'>IoT Destekli Çözümler</p>
                        <div className='strip-card'>
                            <div className='strip-item'><p>vulputate nut at accumsa et.ut at accumsa</p></div>
                            <div className='strip-item itemspan'><span className='spantick'><img src='image/19.png'/></span> <p>vulputate ut at accumsan et.ut at accumsa</p></div>
                            <div className='strip-item itemspan'><span className='spantick'><img src='image/19.png'/></span> <p>vulputate ut at accumsan et.ut at accumsa</p></div>
                            <div className='strip-item itemspan'><span className='spantick'><img src='image/19.png'/></span> <p>vulputate ut at accumsan et.ut at accumsa</p></div>                            
                        </div>


                    </section>

                                {/* decor section */}

                    <section className='decor'>
                        <div className='decor1'>
                            <div className='decorwrap decoritem'>
                                <h1 className='decor-heading'> Kalite ve Süreç Yönetimi</h1>
                                <div className='decor-para'>
                                    <p>Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP®</p>
                                    <p>sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır</p>
                                    <p>Projelerinizin yönetimine destek olmak, zayıf olduğunu</p>
                                    <p>düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan</p>
                                    <p>PMI® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız.</p>
                                </div>
                                <button className=' btn'>Submit</button>
                            </div>
                            <div className='decorimg decoritem'><img src='image/1.jpg' alt=''/></div>
                        </div>

                        {/* images 2 be careful */}


                        <div className='decor1 decor2'>
                            <div className='decorimg2 decoritem'><img src='image/illustration2.jpg' alt=''/></div>

                            <div className='decorwrap decor2item'>
                                <h1 className='decor-heading'> Kalite ve Süreç Yönetimi</h1>
                                <div className='decor-para'>
                                    <p>Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP®</p>
                                    <p>sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır</p>
                                    <p>Projelerinizin yönetimine destek olmak, zayıf olduğunu</p>
                                    <p>düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan</p>
                                    <p>PMI® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız.</p>
                                </div>
                                <button className=' btn'>Submit</button>
                            </div>
                            
                        </div>
                    </section>

                                    {/* testimonial section */}

                    <section className='testimonial'>
                        <div className='testimonial-intro'>
                            <h1>Referanslarımız</h1>
                            <p>Bize güvenen ve beraber çalıştığımız iş ortaklarımız</p>
                        </div>
                        <div className='testimonial-img'><img src='image/20.png'/></div>
                    </section>

                    <section className='bize'>
                        <div className='bize-main'>
                            <img src='image/18.png'/>
                            <h1>Bize Ulaşın</h1>
                            <p>Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle irtibata geçin.</p>
                            <button className=' btn'>Submit</button>
                        </div>
                    </section>



                                {/* footer section */}


                    <section className='footer-main'>
                        <div className='footer'>

                        <div className='footer-row'>
                            <p className='footer-para'>Çözüm ve Hizmetler</p>
                            <ul>
                                <li><a href='{#}'>Yazılım Geliştirme</a></li>
                                <li><a href='{#}'>Outsourcing</a></li>
                                <li><a href='{#}'>Kalite ve Süreç Yönetimi</a></li>
                                <li><a href='{#}'>Danışmanlık</a></li>
                                <li><a href='{#}'>Danışmanlık</a></li>
                            </ul>
                        </div>
                        <div className='footer-row'>
                            <p className='footer-para'>Çözüm ve Hizmetler</p>
                            <ul>
                            <li><a href='{#}'>Yazılım Geliştirme</a></li>
                            <li><a href='{#}'>Outsourcing</a></li>
                            <li><a href='{#}'>Kalite ve Süreç Yönetimi</a></li>
                            <li><a href='{#}'>Danışmanlık</a></li>
                
                            </ul>
                        </div>
                        <div className='footer-row'>
                            <p className='footer-para'>Çözüm ve Hizmetler</p>
                            <ul>
                            <li><a href='{#}'>Yazılım Geliştirme</a></li>
                            <li><a href='{#}'>Outsourcing</a></li>
                            <li><a href='{#}'>Kalite ve Süreç Yönetimi</a></li>
                                
                            </ul>
                        </div>
                        <div className='footer-row'>
                            <p className='footer-para'>Çözüm ve Hizmetler</p>
                            <ul>
                            <li><a href='{#}'>Yazılım Geliştirme</a></li>
                            <li><a href='{#}'>Outsourcing</a></li>
                                
                            </ul>
                        </div>
                        </div>
                        <div className='footer-copyright'>
                            <div><p className='copyright'>© Copyright 2010-2021 - Can Çevik</p></div>
                            <div><img src='image/21.png' alt=''/></div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}
export default App;