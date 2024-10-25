import { useEffect, useState } from "react"
import styles from './ReposList.module.css'

const ReposList = ({nomeUsuario})=>{
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true)
    useEffect(()=>{
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson =>{
            setTimeout(()=>{
                setEstaCarregando(false)
                setRepos(resJson)
            },3000)
            
        })
    },[nomeUsuario])
    return( 
        <div className="container">
            {estaCarregando&&(
                <h1>Carregando...</h1>
            )}
            <ul className={styles.list}>
            {repos.map(repositorio => (
                <li key={repositorio.id} className={styles.listItem}>
                    <div className={styles.itemName}>
                        <b>{repositorio.name}</b>
                    </div>
                    <div className={styles.itemLanguage}>
                        <p>Linguagem: {repositorio.language}</p>
                    </div>
                    <a className={styles.itemLink} target='_blank' href={repositorio.html_url}>Acesse aqui</a>
                </li>
            ))}
        </ul>
        </div>
    )
}

export default ReposList
