import { useState } from "react";

export function TwitterFolllowCard({ formatUserName, name = "Don't_found", userName = "User_don't_exist" }) {

  const [isFollowing, setIsFollowing] = useState(false)

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  const image = `https://unavatar.io/${userName}`;
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt="avatar" src={image} />
        <div className='tw-followCard-info'>
          <strong>
            {name}
          </strong>
          <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick} >{text}</button>
      </aside>
    </article>
  )
}