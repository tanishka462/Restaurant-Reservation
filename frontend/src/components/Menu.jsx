import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>At Kothari’s, our popular dishes are more than just meals — they’re a celebration of flavor and craftsmanship. From the tender, perfectly seasoned Roasted Lamb Rump to the zesty and refreshing Citrus Cured Salmon, each dish is prepared with attention to detail and passion. Guests love the richness of our Mussels Soup, the savory charm of the Beef Burger Meal, and the delicate textures of our Pan Seared Sea Bass. Whether you're in the mood for a classic Italian Spaghetti or the unique sweetness of our Stuffed Strawberry, every plate at Kothari’s promises an unforgettable taste journey.</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu