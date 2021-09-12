import React from 'react';

const OrganizationVacations = (props) => {
    return (
        <div className='container'>
            <div className='row text-center mt-3'>
                <div className='col'>
                    <h2>Организация летнего отдыха</h2>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col'>
                    <p>
                        В летний период 2021 года в МОУ ДО ДООЦ им. Т. Савичевой будут организованы 4 летние смены:
                    </p>
                    <table className='table table-striped table-bordered text-center'>
                        <thead>
                            <tr>
                                <th>Смена</th>
                                <th>Направление</th>
                                <th>Сроки проведения</th>
                                <th>Количество детей</th>
                                <th>Стоимость путёвки</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Общее</td>
                                <td>02.06 – 22.06</td>
                                <td>77</td>
                                <td>22995 руб.</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Общее</td>
                                <td>25.06 – 15.07</td>
                                <td>77</td>
                                <td>22995 руб.</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Общее</td>
                                <td>18.07 – 07.08	</td>
                                <td>77</td>
                                <td>22995 руб.</td>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>Общее</td>
                                <td>10.08 – 30.08</td>
                                <td>77</td>
                                <td>22995 руб.</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Более подробную информацию по организации летнего отдыха и оздоровления детей в летний период 2021 года 
                        в МОУ ДО ДООЦ им. Т. Савичевой можно получить, позвонив по телефону 
                        <a href='tel:8(831)904-14-99'> 8(831)904-14-99</a> или <a href='tel:8(831)904-22-69'>8(831)904-22-69</a>.</p>
                </div>
            </div>
        </div>
    )
}

export default OrganizationVacations;