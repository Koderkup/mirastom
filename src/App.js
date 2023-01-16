import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { nanoid } from 'nanoid'
import Content from './components/Content';

class App extends React.Component {
  constructor(props){
super(props)
this.state = {
  services: [
    {id: nanoid(),
    title: 'Терапия',
    img: './img/3.jpg',
    desc: 'Лечение зубов и десен любой сложности. Современные материалы и оборудование',
    price: 'от 100 руб'
    },
    {
      id: nanoid(),
      title: 'Хирургия',
      img: './img/4.jpg',
      desc: 'Удалим зуб - даже не почувствуете',
      price: 'от 80 руб'
    },
{
  id: nanoid(),
  title: 'Протезирование и имплантация',
  img: './img/5.jpg',
  desc: '32 жемчужины! И никак не меньше',
  price: 'от 400 руб'
},
{
  id: nanoid(),
  title: 'Гигиена полости рта',
  img: './img/6.jpg',
  desc: 'Ослепительная белая улыбка. Будет Вашим постоянным спутником',
  price: 'от 40 руб'
},
  ]
}

  }
  render(){
  return (
    <div className='wrapper'>
      <Header />
      <Content services={this.state.services}/>
      <Footer />
    </div>
  );
  }
}

export default App;
