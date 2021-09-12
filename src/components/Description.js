import React from 'react';
import border from '../img/border.svg'
import zamdir from '../img/zamdir.png'
import methodist from '../img/methodist.png'
import director from '../img/director.png'

const Description = (props) => {
    return(
        <>
            <div className='description'>
                <img src={border} alt='изображение границы' className='rounded mx-auto d-block pt-1 img-border-top'></img>
                <div className="container">
                    <div className="row text-center pt-2">
                        <div className="col"><h2 className='description-title'>О лагере</h2></div>
                    </div>
                    <div className="row justify-content-center text-center pt-3 pb-1">
                        <div className="col-xl-11">
                            <p className='description-text'>
                                МОУ ДО ДООЦ им. Т. Савичевой на сегодняшний день является учреждением, которое не только осуществляет 
                                образовательную и воспитательную функцию, но и осуществляет оздоровление и отдых детей.
                                <br />
                                Работа коллектива лагеря неоднократно отмечалась грамотами и благодарностями администрации Шатковского района, 
                                координационного совета по организации летнего отдыха, Земского собрания района, благодарственными письмами 
                                различных организаций и учреждений области.
                                В 2005 и 2010 году наш лагерь получил диплом победителя по итогам областного смотра-конкурса «Лучший лагерь Нижегородской области».
                                <br />
                                За все эти годы в нашем лагере отдохнуло более 15 тысяч мальчишек и девчонок со всей Нижегородской области. 
                                В нашем центре отдыхают дети из Шатковского, Арзамасского, Вадского, Первомайского, Гагинского, Лукояновского, 
                                Починковского районов, города Нижнего Новгорода, Дзержинска, Москвы. Ежегодно центр работает в 4 смены со 100% наполняемостью.
                                <br />
                                Заместитель директора по воспитательной работе и методисты – ведущие педагоги из школ района. Их стаж работы в центре более 20 лет. 
                                Коллектив вожатых, воспитателей и педагогов дополнительного образования так же стабилен на протяжении десятка лет и обновляется
                                ежегодно всего на 10-15%. То же можно сказать и об административно - хозяйственном штате.
                            </p>
                        </div>
                    </div>
                </div>
                <img src={border} alt='изображение границы' className='rounded mx-auto d-block img-border-bottom'></img>
            </div>
            <div>
                <div className='container'>
                    <div className="row text-center pt-3">
                        <div className="col"><h2 className='description-title'>Руководство</h2></div>
                    </div>
                    <div className='row justify-content-center text-center pt-4 pb-4'>
                        <div className="col-md-3">
                            <figure>
                                <img src={zamdir} alt='изображение границы' className='img-management'></img>
                                <figcaption>Зам. директора, методист</figcaption>
                            </figure>
                        </div>
                        <div className="col-md-3">
                            <figure>
                                <img src={director} alt='изображение границы' className='img-management'></img>
                                <figcaption>Директор</figcaption>
                            </figure>
                        </div>
                        <div className="col-md-3">
                            <figure>
                                <img src={methodist} alt='изображение границы' className='img-management'></img>
                                <figcaption>Методист</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className='description'>
                <div className='container'>
                    <div className="row text-center pt-3">
                        <div className="col"><h2 className='description-title'>Контакты</h2></div>
                    </div>
                    <div className="row text-center pt-3">
                        <div className="col">
                            <p className='description-text'>
                                МОУ ДО ДООЦ им. Т. Савичевой <br />
                                Адрес: 607700, Нижегородская область, р.п. Шатки, ул. Заречная, д. 1 <br />
                                Телефон/Факс: <a href='tel:8(831)904-14-99'>8(831)904-14-99</a>, <a href='tel:8(831)904-22-69'>8(831)904-22-69</a> <br />
                                Электронная почта: <a href='mailto:lagertsavichevoi@mail.ru'>lagertsavichevoi@mail.ru</a> <br />
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center pb-3">
                        <iframe width="1400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?width=923&amp;height=400&amp;hl=en&amp;q=%D0%B7%D0%B0%D1%80%D0%B5%D1%87%D0%BD%D0%B0%D1%8F,%201,%20Detskiy%20Ozdorovitel'nyy%20Lagel%20%D0%A8%D0%B0%D1%82%D0%BA%D0%B8+(%D0%9C%D0%9E%D0%A3%20%D0%94%D0%9E%20%D0%94%D0%9E%D0%9E%D0%A6%20%D0%B8%D0%BC.%20%D0%A2.%20%D0%A1%D0%B0%D0%B2%D0%B8%D1%87%D0%B5%D0%B2%D0%BE%D0%B9)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=4b78f483327cda1b9f57301aa3feb35cf92c04a7'></script>
                    </div>
                </div>           
                
            </div>
        </>
        
        
    )
}

export default Description;
