import './App.css'
import './index.css'
import { TwitterFolllowCard } from './TwitterFollowCard'

export function App() {

  const formatUserName = (userName) => `@${userName}`

  return (
    <section className='App'>
      <TwitterFolllowCard name="Mark Zuckerberg" userName="finkd" formatUserName={formatUserName} />
      <TwitterFolllowCard name="Elon" userName="elonmusk" formatUserName={formatUserName} />
      <TwitterFolllowCard formatUserName={formatUserName} />
    </section>

  )
}