import React from 'react'
import Slider from '../../Slider/Slider'
import FeaturedProducts from '../../FeaturedProducts/FeaturedProducts';
import Categories from '../../Categories/Categories';


function Home() {
  return (
    <div className="home">
      {/* <Slider /> */}
      <FeaturedProducts type="featured" />
      <Categories/>
      <FeaturedProducts type="trending" />
      {/* <Contact /> */}
    </div>
  );
}

export default Home