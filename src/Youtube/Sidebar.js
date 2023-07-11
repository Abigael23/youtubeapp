import React from 'react'

function Sidebar() {
  return (
    <div>
        <button>
        <i className='bi bi-house-door-fill'></i>
        <span>Home</span>
        </button>
        <button>
        <i className='bi bi-'></i>
            <span>Shorts</span>
        </button>
        <button>
        <i className='bi bi-'></i>
            <span>Subscriptions</span>
        </button>
        <hr />
        <button>
        <i className='bi bi-'></i>
            <span>Library</span>
        </button>
        <button>
        <i className='bi bi-clock-history'></i>
            <span>History</span>
        </button>
        <button>
        <i className='bi bi-play-btn'></i>
            <span>Your videos</span>
        </button>
        <button>
        <i className='bi bi-clock'></i>
            <span>Watch later</span>
        </button>
        <button>
        <i className='bi bi-hand-thumbs-up'></i>
            <span>Liked videos</span>
        </button>
    </div>
  )
}

export default Sidebar