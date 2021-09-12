import React from "react";
import logo from '../img/logo.png';

const Header = (props) => {
    return(
        <header>
            <h1 className='brand text-center pt-2 pb-2 mb-0'>
                <img src={logo} className='logo-left'/>
                <a className='brand-link' href='/'>Лагерь имени Тани Савичевой</a>
                <img src={logo} className='logo-right'/>
            </h1>
            <ul className="nav sticky-top justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">Главная</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Сведения об образовательной организации
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/BasicInformation">Основные сведения</a></li>
                        <li><a className="dropdown-item" href="/docs">Документы</a></li>
                        <li><a className="dropdown-item" href="/Education">Образование</a></li>
                        <li><a className="dropdown-item" href="/EducationalStandards">Образовательный стандарты</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Организации отдыха
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/ForParents">Родителям</a></li>
                        <li><a className="dropdown-item" href="/InformationProgram">Информация о программе</a></li>
                        <li><a className="dropdown-item" href="/OrganizationVacations">Органиция летнего отдыха</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Дополнительно
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/TouristCashback">Туристический кэшбек</a></li>
                        <li><a className="dropdown-item" href="/AntiCorruption">Противодействие коррупции</a></li>
                        <li><a className="dropdown-item" href="/Contacts">Контакты</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/BuyTicket">Купить путевку</a>
                </li>
            </ul>
        </header>
    )
}

export default Header;