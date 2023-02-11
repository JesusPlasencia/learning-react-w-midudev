import { useState } from "react"

export const TwitterFollowCard = ({ formatUserName, userName, name, initialIsFollowing }) => {
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const handleFollowClick = () => {
        setIsFollowing(!isFollowing)
    }

    const text = isFollowing ? "Following" : "Follow"
    const buttonClassName = isFollowing
        ? "tw-follow-card-aside-button is-following" : "tw-follow-card-aside-button"
    
    return (
        <article className='tw-follow-card-container'>
            <header className='tw-follow-card-header'>
                <img className='tw-follow-card-header-avatar' alt={`${name} Account`} src={`https://unavatar.io/${userName}`} />
                <div className='tw-follow-card-header-info'>
                    <strong>{name}</strong>
                    <span>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside className='tw-follow-card-aside'>
                <button className={buttonClassName} onClick={handleFollowClick}>
                    <span className="tw-follow-card-text-no-hover">{text}</span>
                    <span className="tw-follow-card-stop-follow">Stop Follow</span>
                </button>
            </aside>
        </article>
    )
}