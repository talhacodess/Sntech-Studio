import React from 'react'
import PortfolioFilters from '../component/portfolio/PortfolioFilters'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router';

function PortfolioPage() {
    return (
        <>
            {/** breadbrumb area */}

            <div className='breadcrumb-area about'>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-content text-center">
                                <h4>Contact</h4>
                                <ul className='breadcrumb-list'>
                                    <Link to={'/'} ><li className='home'>Home</li></Link>
                                    <li className='list-arrow'><MdOutlineKeyboardArrowLeft size={25} /></li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <div className="container">

                <PortfolioFilters />

            </div>



        </>

    )
}

export default PortfolioPage
