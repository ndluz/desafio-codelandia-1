import { Header } from "./components/header";
import { Post } from "./components/post";

import "./main.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <Post
        data='03 de Jan, 2021'
        title='Agora é oficial: o Windows 11 está vindo'
        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis 
        tellus vel diam fringilla, eu ullamcorper ex iaculis.'
      />
      <Post
        data='02 de Jan, 2021'
        title='Tim Berners-Lee vai leiloar código-fonte da web'
        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis 
        tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor 
        justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar 
        tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum 
        ullamcorper libero.'
      />
      <Post
        data='01 de Jan, 2021'
        title='Tem Firefox novo no pedaço e você vai querer migrar'
        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vestibulum vestibulum auctor est.'
      />
      <Post
        data='31 de Dez, 2020'
        title='John McAfee, criador do antivírus McAfee, morre'
        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis 
        tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor 
        justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar 
        tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum 
        ullamcorper libero.'
      />
    </div>
  );
}

export default App;
