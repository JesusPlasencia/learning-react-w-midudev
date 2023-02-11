import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        username: "midudev",
        name: "Miguel Ángel Durán",
        isFollowing: true
    },
    {
        username: "arcticmonkeys",
        name: "Arctic Monkeys",
        isFollowing: true
    }
]

export const App = () => {
    const formattedUserName = (userName) => <span>@{userName}</span>
    return (
        <section className='App'>
            {
                users.map((user, index) => {
                    const { isFollowing, name, username } = user
                    return (
                        <TwitterFollowCard
                            key={username}
                            formatUserName={formattedUserName}
                            userName={username}
                            name={name}
                            initialIsFollowing={isFollowing} />
                    )
                })
            }
        </section>
    )
}