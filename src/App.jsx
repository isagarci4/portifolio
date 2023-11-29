import { Header } from './components/Header'
import { Presentation } from './components/Presentation'
import { Project } from './components/Project'

import SecretWordImage from './assets/secretWord.png'
import IgniteFeedImage from './assets/igniteFeed.png'
import NlwCopaImage from './assets/nlwCopa.png'


import styles from './App.module.css'

import './global.css'

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Presentation/> 
        
        <p className={styles.title}>Ultimos <br /> Projetos</p>

        <div className={styles.projects}>          
          <Project 
            projectTitle="Ignite Feed" 
            technologies={["React", "HTML", "CSS"]} 
            backgroundColor="black"
            projectImage={IgniteFeedImage}
            gitHubLink="https://github.com/isagarci4/IgniteFeed"
            deployLink="https://ignite-feed-isagarci4.vercel.app/"
          />
          <Project 
            projectTitle="Secret Word" 
            technologies={["React", "HTML", "CSS"]} 
            backgroundColor="blue"
            projectImage={SecretWordImage}
            gitHubLink="https://github.com/isagarci4/SecretWord"
            deployLink="http://secret-word-five.vercel.app/"
          />
          <Project
            projectTitle="NLW Copa" 
            technologies={["HTML", "CSS", "JS"]} 
            backgroundColor="gray"
            projectImage={NlwCopaImage}
            gitHubLink="https://github.com/isagarci4/NLW-Copa"
            deployLink="https://nlw-copa-virid.vercel.app/"
          />
        </div>
      </main>
    </div>
  )
}

export default App
