import { Route, Routes } from 'react-router-dom';
import './App.css';
import './Media.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Departments from './pages/Departments';
import Doctors from './pages/Doctors';
import Connection from './pages/Connection';
import PricesPage from './pages/PricesPage';
import { useState } from 'react';
import { Context } from "./components/Context";
import Login from './pages/Login';

import Axtoroshich from './components/Axtoroshich';
import Anotayin from './components/Anotayin';
// import Endokrin from './components/Endokrin';
// import Yndhanur from './components/Yndhanur';
// import Aknabujakan from './components/Aknabujakan';
// import Aryan from './components/Aryan';
// import Endoskopik from './components/Endoskopik';
// import Virabujutyun from './components/Virabujutyun';
// import Anesteziologia from './components/Anesteziologia';
// import Dimacnotayin from './components/Dimacnotayin';
// import Kosmetologia from './components/Kosmetologia';
// import Invaziv from './components/Invaziv';
// import Laboratoria from './components/Laboratoria';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';
// import  from './components/';


function App() {

  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)
  const [addedList, setAddedList] = useState([])

  const values = {
    count, setCount,
    total, setTotal,
    addedList, setAddedList
  }

  return (
    <Context.Provider value={values}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/Մեր մասին' element={<AboutUs />}></Route>
          <Route path='/Բաժանմունքներ' element={<Departments />}></Route>
          <Route path='/Բժիշկներ' element={<Doctors />}></Route>
          <Route path='/Կապ մեզ հետ' element={<Connection />}></Route>
          <Route path='/Գնացանկ' element={<PricesPage />}></Route>
          <Route path='/Մուտք' element={<Login />}></Route>
          
          <Route path='/Ախտորոշիչ բաժանմունք' element={<Axtoroshich />}></Route>
          <Route path='/Անոթային վիրաբուժության բաժանմունք' element={<Anotayin />}></Route>
          {/* <Route path='/Էնդոկրին վիրաբուժության բաժանմունք' element={<Endokrin />}></Route>
          <Route path='/Ընդհանուր թերապիայի բաժանմունք' element={<Yndhanur />}></Route>
          <Route path='/Ակնաբուժական բաժանմունք' element={<Aknabujakan />}></Route>
          <Route path='/Արյան բանկ' element={<Aryan />}></Route>
          <Route path='/Էնդոսկոպիկ վիրաբուժության բաժանմունք' element={<Endoskopik />}></Route>
          <Route path='/Ընդհանուր վիրաբուժության բաժանմունք' element={<Virabujutyun />}></Route>
          <Route path='/Անեսթեզիոլոգիայի, վերակենդանացման և անհետաձգելի բուժօգնության բաժանմունք' element={<Anesteziologia />}></Route>
          <Route path='/Դիմածնոտային վիրաբուժության բաժանմունք' element={<Dimacnotayin />}></Route>
          <Route path='/Կոսմետոլոգիական ծառայություն' element={<Kosmetologia />}></Route>
          <Route path='/Ինվազիվ սրտաբանության բաժանմունք' element={<Invaziv />}></Route>
          <Route path='/Լաբորատորիա' element={<Laboratoria />}></Route> */}
          {/* <Route path='/Կանանց կոնսուլտացիա' element={<Kananc />}></Route>
          <Route path='/Կոլոպրոկտոլոգիայի բաժանմունք' element={<Koloprokol />}></Route>
          <Route path='/Կրծքային վիրաբուժության բաժանմունք' element={<Krcqayin />}></Route>
          <Route path='/Հեմոդիալիզի բաժանմունք' element={<Hemodialez />}></Route>
          <Route path='/Մանկաբարձագինեկոլոգիական բաժանմունք' element={<Manakabardz />}></Route>
          <Route path='/Նեյրովիրաբուժության բաժանմունք' element={<Neyro />}></Route>
          <Route path='/Նյարդաբանական բաժանմունք' element={<Nyard />}></Route>
          <Route path='/Նորածնային բաժանմունք' element={<Noracnayin />}></Route>
          <Route path='/Ուռուցքաբանության բաժանմունք' element={<Urucq />}></Route>
          <Route path='/Ուրոլոգիայի բաժանմունք' element={<Urolog />}></Route>
          <Route path='/Պլաստիկ և միկրովիրաբուժության բաժանմունք' element={<Plastik />}></Route>
          <Route path='/Պոլիկլինիկա' element={<Poliklinika />}></Route>
          <Route path='/Սրտաբանության և առիթմոլոգիայի բաժանմունք' element={<Srtaban />}></Route>
          <Route path='/Սրտային վիրաբուժության բաժանմունք' element={<Srtayin />}></Route>
          <Route path='/երարտադրողական առողջության բաժանմունք' element={<Erartadroghakan />}></Route>
          <Route path='/Վիրահատական բլոկ' element={<Virahatakan />}></Route>
          <Route path='/Վնասվածքաբանության և օրթոպեդիայի բաժանմունք' element={<Vnasvacq />}></Route>
          <Route path='/Քիթ-կոկորդ-ականջաբանության բաժանմունք' element={<Qit />}></Route>
          <Route path='/Դեղատուն' element={<Deghatun />}></Route>
          <Route path='/Անոթանեյրովիրաբուժական բաժանմունք' element={<Anot />}></Route> */}

         


        </Routes>

        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
