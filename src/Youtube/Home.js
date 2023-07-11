import React from 'react'
import HomeComp from './HomeComp'
// import {info} from './File'

const Home = () => {
  return (
    <div>
        <div>
            <div>
                {
                    info.map((items, index) =>(
                        <HomeComp 
                            img={items.image}
                            title={items.title}
                            group={items.group}
                            director={items.director}
                            view={items.view}
                            time={items.time}
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Home