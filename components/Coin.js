import React from 'react'




function Coins () {
    return (
        <div id="dexcoin"className='overflow-hidden flex flex-col'>
     <div className='flex flex-row mx-16 justify-between items-center'>
          <div className='flex flex-col my-4 w-[70%] mr-10'>
            <h1 className='text-5xl font-Kanit text-blue-400 tracking-wide uppercase'>Token</h1>
            <h1 className='text-[20px] font-Kanit text-gray-400 text-justify mt-6'>
            The token name is Dex coin. The token will be launched on the Binance Smart chain. It will be a native Bep20 which will
be transferable in the cryptocurrency ecosystem as well as within the game.
The benefit of introducing this token is to enable the play2earn feature which is the main part of our goal. The goal of Dex
coin is to establish a sustainable economy while aligning incentives for all ecosystem stakeholders - players, builders,
developers, and investors.<br/>
The ways of earning the token have already been mentioned. These include but are not limited to:
</h1>
<ol className='list-disc text-[20px] font-Kanit text-gray-400 text-justify m-6'>
<li >Playing Games</li>
<li>Ingame currency</li>
<li>Achievements and Rewards </li></ol>

<h1 className='text-[20px] font-Kanit text-gray-400 text-justify '>
These Dex coin will be fungible blockchain based tokens. Hence, they will be transferable outside the game on any
exchange, marketplace, game that accepts the token as their form of currency.
The tokens will be added to centralized exchanges allowing users to buy/sell these easily.
The value of these coins will be determined by the game success, it&apos;s usage, daily active users, daily transactions and the
overall brand of Dex coin.
</h1>          

          </div>
          
            <img
            src='/DexBattle PNG/DexCoin-nostore.jpg'
            className='h-full w-[30%]  border border-gray-400 rounded-lg'/>

          

        </div> 

        <div className=' flex flex-row mx-16 my-[50px] justify-evenly'>
            <div className='flex flex-col items-center'>
                <hl className='text-blue-400 font-Kanit text-[40px] text-center'>1 000 000 000</hl>
                <hl className='text-white font-Kanit text-2xl text-center'>Total Supply</hl>
            </div>

            <div className='flex flex-col items-center'>
                <hl className='text-blue-400 font-Kanit text-[40px] text-center'>Binance Samrt Chain</hl>
                <hl className='text-white font-Kanit text-2xl text-center'>Blockchain</hl>
            </div>
        </div>

        <div>
            {/* dohnut chart here */}
        </div>

    </div>
    ) 
}
export default Coins