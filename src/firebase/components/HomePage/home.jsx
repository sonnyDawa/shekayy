import React from 'react';
import Footer from '../../../Footer/footer';
import Account from '../Account/account';
import AccountSell from '../Account/accountsell';
import Nav from '../support/nav';
import Price from '../PriceTable.jsx/price';
import BottomMessage from './bottomMessage';
import HomeBody from './HomeBody';
import HomeDescription from './HomeDescription';
import HomeMarketPlace from './homeMarketPlace';
import HomeOption from './homeOption';
import HomePara from './HomePara';
import HomeTeam from './homeTeam';
import SetUp from './setUp';

const Home = () => {
    return (
        <div>
            <div className='body'>
            <Nav/>
            <HomeBody/>
            </div>
          
            <HomeDescription/>
            <HomePara/>
            <HomeMarketPlace/>
            <SetUp/>
            <AccountSell/>
            <HomeTeam/>
            
            <Price/>
            {/* <BottomMessage/> */}
           
            
            <Footer/>
        </div>
    );
}

export default Home;
