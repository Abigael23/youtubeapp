import React from 'react'

const HomeComp = () => {
  return (
    <div>
      <button>
        <div>{props.img}</div>
        <h6>
          {props.title}
          {props.group}
        </h6>
        <p>
          {props.director}
        </p>
        <p>
        {props.views}
        {props.time}
        </p>
      </button>
    </div>
  )
}

export default HomeComp