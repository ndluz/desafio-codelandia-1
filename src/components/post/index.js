import coracaoImg from '../../assets/coracao.png';

import './index.css'

export const Post = ({ data, title, body }) => {
  return (
    <div className="post-container">
      <div className="post-detail">
        <small>{data}</small>
        <img src={coracaoImg} alt="coração" />
      </div>
      <div className="post-content">
        <h2>
        {title}
        </h2>
        <p>
          {body}
        </p>
      </div>
    </div>
  )
}
