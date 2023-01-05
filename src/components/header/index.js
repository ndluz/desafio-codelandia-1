import lupaImg from '../../assets/lupa.png'
import './index.css'

export const Header = () => {
  return (
    <header >
      <div className="header-title-div">
        <a>Codelândida</a>
        <a>blog</a>
      </div>
      <div className="input-container">
        <img src={lupaImg}/>
        <input type="text" placeholder="Pesquisar no blog" />
      </div>
    </header>
  )
}
