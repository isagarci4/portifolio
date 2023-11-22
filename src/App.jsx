import { Header } from './components/Header'
import { Presentation } from './components/Presentation'

import styles from './App.module.css'

import './global.css'

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Presentation/>
      </main>
    </div>
  )
}

export default App
