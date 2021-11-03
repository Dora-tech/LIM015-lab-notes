import React, { useState } from "react";
 import { Button } from "react-bootstrap";
 import undraw from './../../src/img/undraw_Taking_notes.png';
 import logodoris from './../../src/img/logo_note.png';
 import google from './../../src/img/google.png';
 import facebook from './../../src/img/facebook-fb.png';
import firebaseApp from "../credenciales";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const Logueo = () => {
  const [estaRegistrandose, setEstaRegistrandose] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    const correo = e.target.formBasicEmail.value;
    const contra = e.target.formBasicPassword.value;

    if (estaRegistrandose) {
      //si se registra
      const usuario = await createUserWithEmailAndPassword(
        auth,
        correo,
        contra
      );
    } else {
      // si está iniciando sesión
      signInWithEmailAndPassword(auth, correo, contra);
    }
  }

  return (
    // style={{  background: 'linear-gradient(to bottom,#ff648b, #3d58b1)' }}
    <section id='container' >
      <article className='article-login'>
          <figure className='figure-login'>
            <img className='fondo-Login1' src={undraw} id='fondoLogin1'  ></img>
          </figure>

          <article className='contenedorLogin'>
            <figure className='figure-title-login'>
              <img src={logodoris} id='fondoPet' className='fondoAnimalPet'></img>
            </figure> 
            <form action="#" className='frmLogin'>
              {/* <div className="form-login-inputs">
                  <input id='email' placeholder='Email' className='btn-texto'/>
                  <input className='btn-texto' type='password' name='password' id='password' placeholder='Password'/>
              </div>   */}
                  {/* <button id='btnsignin' className='btn-signin'>signin</button>  */}
                  <span className='message'></span> 
                  <span className='txt'>Please, sign in </span>
                <figure className='figure-google'>
                  <img src={google} alt='iGoogle' className='logoGmail' 
                   variant="primary"
                   type="submit"
                   onClick={() => signInWithRedirect(auth, googleProvider)}
                  ></img>
                   <img src={facebook} alt='iFacebook' className='logoFacebook' ></img>
                </figure>    
                
                {/* <span className='txt'>¿You do not have an account?</span> */}
                  {/* <button id='registro' className='btn-register' ><a href='#/register'className='a-login-signup'>register</a></button> */}
              </form>
          </article>          
      </article>
    </section>
  );
};

export default Logueo;
