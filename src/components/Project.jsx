import { GithubLogo, Globe } from "phosphor-react";

import styles from './Project.module.css'

export function Project({ projectTitle, technologies, backgroundColor, projectImage, gitHubLink, deployLink }) {
    return(
        <article className={styles.project}>
            <header>
                <p className={styles.projectName}>{projectTitle}</p>
                <div className={styles.technologies}>
                    {technologies.map(tech => {
                        return <button key={tech} disabled>{tech}</button>
                    })}
                </div>
            </header>

            <div className={styles.projectImage} style={{background: backgroundColor}}>
                <img src={projectImage}/>
            </div>

            <footer>
                <a href={gitHubLink}>
                    GitHub
                    <GithubLogo size={20}/>
                </a>
                <a href={deployLink}>
                    Deploy
                    <Globe size={20}/>
                </a>
            </footer>
        </article>
    )
}