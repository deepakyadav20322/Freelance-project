import React from 'react'
import HeroSection from '../components/HeroSection'
import NewThing from '../components/NewThing'
import HomeCategory from '../components/HomeCategory'
import Devide from '../components/Devide'

import FromOurBlog from '../components/FromOurBlog'
import GetInTouch from '../components/GetInTouch'
import FeaturedProduct from '../components/FeaturedProduct'
import BestSellingProduct from '../components/BestSellingProduct'
import FollowUsInstagram from '../components/FollowUsInstagram'
import EverydayElegance from '../components/EverydayElegance'


const HomePage = () => {
  return (
<>    
     <HeroSection/>
     <NewThing  />
     <Devide/>
     <HomeCategory  />
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

</>
  )
}

export default HomePage