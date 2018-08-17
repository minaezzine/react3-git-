import React, { Component } from 'react';

import './App.css';
import Box from './Components/box';
import Boc from './Components/boc2';
import Bol from './Components/bol';

class App extends Component {
  render() {
    
    return (
      <div className="App">
      
       <h1 className="App-title">nos programmes</h1>
       &nbsp;&nbsp;&nbsp;
       <div className="bo">

      <Boc color="pink" color2="pinkt" name='FULL TIME PROGRAM' des1="un programme intensif de 3 mois"des2=" pour devenir développeur 
    fullstack "des3="js ou java. Un coaching technique et "
    des4=" professionnel régulier et des liens" des5="très forts avec le monde de " des6=" l'entreprise." des7="&nbsp;&nbsp;&nbsp;"/>
      
      <Boc   color="yellow" color2="yellowt"   name='PART TIME PROGRAM' des1="Tu peux développer ton produit"des2=" technologique pendant l'année" des3=" scolaire si tu es étudiant ou en " des4="parallèle de ton travail si tu es "des5="un professionnel. Ça se passe tous les weekends"des6=" (demi-journée Samedi ou dimanche)"des7=" dans notre Hackerspace !"/>
    
      <Boc    color="green"  color2="greent"  name='KIDS CODING PROGRAM' des1="Ce programme vise à initier les plus"des2="jeunes (8-12 ans) à l'informatique et "des3="à la programmation sur 4 niveaux. "des4="Un niveau dure 2 mois. À la fin du "des4="programme, l'enfant doit présenter"des5="son projet au PDG d'une entreprise "des6="technologique.
 " des7="&nbsp;&nbsp;&nbsp;"/>
     
      <Boc  color="bleu" color2="bleut"   name='SUMMER ACADEMY' des1="Développe ton produit"des2="technologique pendant 3 semaines "des3="pendant l'été. Un expérience très "des4="riche d'apprentissage et de "des5="rencontres avec des passionnés de "des6="la technologie."
 des7="&nbsp;&nbsp;&nbsp;"/>
</div>

   

     
      <header className="App-header">
          <div className="carre">
          <div className="back">
          <br/>
          <br/>
          <br/>
          <br/>
        
          <h1 >QUELQUES  CHIFFRES</h1>
          <br/>
      <Box   chiff='+20,000' des="Passionnés du "des2="DIGITAL"/>
      &nbsp;&nbsp;&nbsp;
      <Box    chiff='+500' des="Etudints depuis le "des2="démarrage en aout 2016" />
      &nbsp;&nbsp;&nbsp;
      <Box   chiff='+300' des="produits développés"des2="&nbsp;&nbsp;&nbsp; "/>
      &nbsp;&nbsp;&nbsp;
      <Box   chiff='+30' des="Instructeurs Game,Web"des2=" et mobile"/>
      &nbsp;&nbsp;&nbsp;
      <Box   chiff='+50' des="Speakers"des2="&nbsp;&nbsp;&nbsp; "/>
      &nbsp;&nbsp;&nbsp;
      <Box   chiff='400m²' des="De hackerspace au "des2="coeur du lac 1"/>
      </div>
      </div>
        </header>
        <div className="back">
        <h2>ou se passent les session?</h2>
        <h3>les session se passent dans les hackerspaces de GoMyCode dans les villes suivantes: l'hébergement est possible dans la limite des places disponibleq.</h3>
      <div className="imaa">
      <Bol img='https://objects.airfrance.com/FR/common/common/img/tbaf/destinations/TUN/video/TUN-video-1_1-1024x1024.jpg' code="tunis"/>
      &nbsp;&nbsp;&nbsp;
      <Bol img='https://d7ieeqxtzpkza.cloudfront.net/wp-content/uploads/2018/04/sousse5.jpg' code="sousse" />
      &nbsp;&nbsp;&nbsp;
      <Bol  img='http://www.leaders.com.tn/uploads/content/thumbnails/14627276591_content.jpg'code="sfax"/>
      
    </div>
      </div>
  
      
        
      </div>
    );
  }
}

export default App;
