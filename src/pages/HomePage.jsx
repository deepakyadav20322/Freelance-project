import React from 'react'
import HeroSection from '../components/HeroSection'
import NewThing from '../components/NewThing'
import ShopByCategory from '../components/ShopByCategory'
import Devide from '../components/Devide'

import FromOurBlog from '../components/FromOurBlog'
import GetInTouch from '../components/GetInTouch'
import FeaturedProduct from '../components/FeaturedProduct'
import BestSellingProduct from '../components/BestSellingProduct'
import FollowUsInstagram from '../components/FollowUsInstagram'
import EverydayElegance from '../components/EverydayElegance'



const HomePage = () => {
  return (
<div className='overflow-hidden'>    
     <HeroSection/>
     <NewThing  />
     <Devide/>
     <ShopByCategory  />
     <Devide/>
     <EverydayElegance/>
     <Devide/>
     <FeaturedProduct />
     <Devide/>
     <BestSellingProduct/>
     <Devide/>
     <FromOurBlog/>
     <Devide/>
     <FollowUsInstagram/>
     <Devide/>
     <GetInTouch/>

</div>
  )
}

export default HomePage