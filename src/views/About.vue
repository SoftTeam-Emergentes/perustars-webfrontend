<template>

  <body>
  <div class="cover">
    <div class="img"></div>
    <div class="center">
      <div class="title text-h2">Hay un artista en tu interior</div>
      <br>
      <br>
      <div class="sub_title">Descúbrelo</div>
    </div>
  </div>
  <div class="purpose" id="purpose_tag">
    <h4 class="default-h4">Nuestro Propósito</h4>
    <div class="section_purpose">
      <div class="artists">
        <div class="img_artists"></div>
        <div class="section_artists square">
          <i class="fas fa-desktop section-icon"></i>
          <h5 class="default-h5">Ser la plataforma definitiva para <br>artistas peruanos</h5>
          <p class="default-p">Buscamos brindar una plataforma web a través de la cual distintos
            artistas peruanos puedan promocionar su arte al público interesado. Así,
            estos artistas podrán vivir de lo que les gusta hacer, además de atraer a personas
            para que se interesen en el arte peruano.</p>
        </div>
      </div>
      <div class="amateurs">
        <div class="section_amateurs square">
          <i class="fas fa-palette section-icon"></i>
          <h5 class="default-h5">El lugar donde encontrarás <br>el arte que buscas</h5>
          <p class="default-p">Somos el website en el cual el arte más moderno e innovador
            se reúne. Para que los amantes del arte peruano o interesados en el mismo tengan al
            alcance un sitio donde descubran obras de arte acorde a sus gustos y dar el reconocimiento
            a los artistas detrás de tan fascinantes proyectos.</p>
        </div>
        <div class="img_amateurs"></div>
      </div>
    </div>
  </div>

  <div class="spacing"><hr></div>

  <div class="benefits" id="benefits_tag">
    <h4 class="default-h4">Únete ahora y ...</h4>
    <div class="artists_benefits">
      <div class="img_benefits_artists"></div>
      <div class="section_benefits_artists">
        <ul>
          <li><i class="fas fa-check"></i> Crea tu propio perfil.</li>
          <li><i class="fas fa-check"></i> Sube y publicita tus proyectos.</li>
          <li><i class="fas fa-check"></i> Organiza tus propios eventos.</li>

        </ul>
      </div>
    </div>
    <div class="amateurs_benefits">
      <div class="img_benefits_amateurs"></div>
      <div class="section_benefits_amateurs">
        <ul>
          <li><i class="fas fa-check"></i> Descubre artistas, proyectos, eventos y más... </li>
          <li><i class="fas fa-check"></i> Sigue a tus artistas favoritos.</li>
          <li><i class="fas fa-check"></i> Arma tu calendario de eventos.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="spacing"><hr></div>

  <div class="registration" id="registration_tag">
    <h4 class="default-h4">Regístrate Gratis</h4>
    <div class="section_registration">
      <div class="img_registration"></div>
      <div class="section_registercontent">
        <p>Únete ahora y obtén la oportunidad de recibir beneficios únicos.</p>
        <v-btn class="btn-register text-body-1" to="/register">Regístrate</v-btn>
      </div>
    </div>
  </div>

  <footer id="contact_tag">
    <div class="contact">
      <div class="section_contact">
        <h6>Contáctanos</h6>
        <p>info@uteam.com</p>
        <p>(01) 333-3333 / (51) 999 999 999</p>
      </div>
      <div class="section_uteam">
        Copyright © 2021 UX-Team
      </div>
      <div class="section_socialmedia">
    <!--<a href= "https://facebook.com" target="_blank"><i class="fab fa-facebook-f facebook"></i></a>
        <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram instagram"></i></a>
        <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter twitter"></i></a>-->
        <v-btn text color="white" to="/terms&conditions">Términos y condiciones</v-btn>
<!--        <terms-and-conditions dialogValue="dialogValue"></terms-and-conditions>-->
      </div>
    </div>
  </footer>

  </body>

</template>

<script>
/*import TermsAndConditions from '../components/terms-and-conditions'*/
export default {
  name: "about-view",
  components:{
    /*TermsAndConditions*/
  },
  data () {
    return {
      dialogValue: false,
    }
  },
  created() {
    this.$emit('isLogged')
  }
}
</script>

<style scoped>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  scroll-behavior: smooth;
}
.default-h4{
  text-align: center;
  font-size: 45px;
  font-weight: 600;
  margin-bottom: 80px;
}
.default-h5{
  font-size: 20px;
  text-align: center;
}
.section-icon{
  font-size: 50px;
  color: black;
}

.default-p{
  text-align: center;
  font-size: 15px;
  word-spacing: 0.25em;
}
.spacing{
  display: flex;
  justify-content: center;
}
hr{
  width: 60%;
  justify-content: center;
  color: rgb(214, 207, 207);
  box-shadow: 0px 0px 1px rgb(204, 204, 204);
}

/*Navbar*/
nav{
  position: fixed;
  background: #fff;
  width: 100%;
  padding: 12px 0;
  z-index: 12;
  box-shadow: 0px 0px 3px rgb(110, 110, 110);
}
nav .menu{
  max-width: 1250px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.menu .logo a{
  text-decoration: none;
  color: #ce1212;
  font-size: 35px;
  font-weight: 600;
}
.menu ul{
  display: inline-flex;
}
.menu ul li{
  list-style: none;
  margin-left: 7px;
}
.menu ul li:first-child{
  margin-left: 0px;
}
.menu ul li a{
  text-decoration: none;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.1s ease;
}
.menu ul li a:hover{
  font-size: 17px;
  font-weight: 500;
}

/* Navbar Buttons*/
nav .menu-btn i{
  color: #ce1212;
  font-size: 22px;
  cursor: pointer;
  display: none;
}
input[type="checkbox"]{
  display: none;
}

/* Cover Page*/
.img{
  /*background: url('../../FrontEnd Open source/web-apps-sw51/src/app/components/pre-menu/img/cover_page.jpg')no-repeat;*/
  background: url("../assets/img/cover_page.jpg")no-repeat;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
}

.img::before{
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.center{
  position: absolute;
  top: 350px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 0 20px;
  text-align: center;
}
.center .title{
  color: #fff;
  font-weight: 600;
}
.center .sub_title{
  color: #fff;
  font-size: 52px;
  font-weight: 600;
  margin-top: 10px;
}

.btns button:hover{
  background: white;
  color: black;
}

/* Purpose*/
.purpose{
  padding-top: 6%;
  height: 150vh;
  padding: 70px;
}
.section_purpose{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 10%;
  box-shadow: 5px 6px 10px 1px rgba(0,0,0,0.71);
}
.square{
  padding: 0 30px;
  background: rgba(45, 159, 212, 0.068);
}

/* artists purpose*/
.section_purpose .artists{
  display: grid;
  grid-template-columns: repeat(2,1fr);
}
.img_artists{
  /*background: url('../../FrontEnd Open source/web-apps-sw51/src/app/components/pre-menu/img/painting.jpg')no-repeat;*/
  background: url("../assets/img/painting.jpg")no-repeat;
  opacity: 0.9;
  width: 100%;
  background-size: 100% 100%;
  height: 350px;
}
.section_artists{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

/* amateurs purpose*/
.section_purpose .amateurs{
  display: grid;
  grid-template-columns: repeat(2,1fr);
}
.img_amateurs{
  /*background: url('../../FrontEnd Open source/web-apps-sw51/src/app/components/pre-menu/img/amateur.jpg')no-repeat;*/
  background: url("../assets/img/amateur.jpg")no-repeat;
  opacity: 0.9;
  width: 100%;
  background-size: 100% 100%;
  height: 350px;
}
.section_amateurs{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

/* Benefits */
.benefits{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6% 0;
}

/* Artists Benefits*/
.artists_benefits{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  height: 350px;
}
.img_benefits_artists{
  /*background: url('../../FrontEnd Open source/web-apps-sw51/src/app/components/pre-menu/img/working.svg')no-repeat;*/
  background: url("../assets/img/working.svg")no-repeat;
  width: 40%;
  background-size: 100% 100%;
  height: 320px;
}
.section_benefits_artists{
  width: 30%;
  height: fit-content;
}
.section_benefits_artists ul{
  list-style: none;
}
.section_benefits_artists ul li{
  margin: 25px 0px;
}
.section_benefits_artists ul li i{
  color: #ce1212;
  margin-right: 10px;
}

/* Amateurs Benefits*/
.amateurs_benefits{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: row-reverse;
  width: 90%;
  height: 350px;
}
.img_benefits_amateurs{
  /*background: url('../../FrontEnd Open source/web-apps-sw51/src/app/components/pre-menu/img/finding_art.svg')no-repeat;*/
  background: url("../assets/img/finding_art.svg")no-repeat;
  width: 40%;
  background-size: 100% 100%;
  height: 320px;
}
.section_benefits_amateurs{
  width: 30%;
  height: fit-content;
}
.section_benefits_amateurs ul{
  list-style: none;
}
.section_benefits_amateurs ul li{
  margin: 25px 0px;
}
.section_benefits_amateurs ul li i{
  color: #ce1212;
  margin-right: 10px;
}

/* Registration */
.registration{
  padding: 8% 0;
  height: 630px;
  background-color: white;
}
.img_registration{
  /*background: url('../../FrontEnd Open source/web-apps-sw51/src/app/components/pre-menu/img/undraw_Forms_re_pkrt.svg')no-repeat;*/
  background: url("../assets/img/undraw_Forms_re_pkrt.svg")no-repeat;
  width: 45%;
  background-size: 100% 100%;
  height: 320px;
}
.section_registration{
  display: flex;
  justify-content: space-around;
}
.section_registercontent{
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
}
.section_registercontent .btn-register{
  border: none;
  margin-top: 50px;
  background: #ce1212;
  color: white;
  font-size: 20px;
  font-weight: 500;
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
  outline: none;
}
.section_registercontent .btn-register:hover{
  background: white;
  color: #ce1212;
  box-shadow: inset 0 0 0 2px #ce1212;
  cursor:pointer;
}
.section_registercontent p{
  text-align: center;
  font-size: 20px;
}

/* Footer */
footer{
  background: #1b1717;
}
.contact{
  padding: 80px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
footer div{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: center;
  justify-content: center;
  color: white;
}
.section_contact{
  height: 100px;
  justify-content: space-around;
}
.section_socialmedia{
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
.section_socialmedia i{
  color: white;
  text-decoration: none;
  width: 40px;
  height: 40px;
  padding-top: 7px;
  border-radius: 30px;
  font-size: 25px;
  text-align: center;
  transition: all 0.2s ease;
}
.section_socialmedia i:hover{
  width: 45px;
  height: 45px;
  padding-top: 9px;
  padding-left: 1px;
}
.facebook{
  background: blue;
}
.instagram{
  background: rgb(161, 27, 121);
}
.twitter{
  background: rgb(51, 123, 151);
}
h6{
  font-size: 20px;
  text-align: center;
  margin-bottom: 5px;
}
.terms-and-conditions{
  color: white;
}

/* Responsive*/
@media (max-width: 1000px){
  nav{
    padding: 5px 20px 5px 30px;
  }
}
@media (max-width: 920px) {
  nav .menu-btn i{
    display: block;
  }
  #click:checked ~ .menu-btn i:before{
    content: "\f00d";
  }
  nav .menu ul{
    position: fixed;
    top: 48px;
    left: -100%;
    background: #fff;
    height: 50vh;
    width: 100%;
    text-align: center;
    display: block;
    transition: all 0.3s ease;
    box-shadow: 0px 0px 3px rgb(110, 110, 110);
  }
  #click:checked ~ ul{
    left: 0;
  }
  nav .menu ul li{
    width: 100%;
    margin: 40px 0;
  }
  nav .menu ul li a{
    width: 100%;
    margin-left: -100%;
    display: block;
    font-size: 20px;
    transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  #click:checked ~ ul li a{
    margin-left: 0px;
  }
  nav .menu ul li a{
    color: #000;
    transition: all 0.3s ease;
  }
  nav .menu ul li a:hover{
    background: none;
    color: #ce1212;
    font-weight: 700;
  }
  .center .title{
    font-size: 35px;
  }
  .center .sub_title{
    font-size: 32px;
  }
  .purpose{
    height: 1500px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .default-h4{
    font-size: 30px;
  }
  .section_purpose{
    height: 1200px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
  }
  .section_purpose .artists{
    height: 50%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 60% 40%;
    grid-template-areas:

        "artists_text"
        "artists_img";
  }
  .img_artists{
    grid-area: artists_img;
    height: 100%;
  }
  .section_artists{
    grid-area: artists_text;
  }

  /* amateurs purpose*/
  .section_purpose .amateurs{
    height: 50%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 60% 40%;
    grid-template-areas:
        "amateurs_text"
        "amateurs_img";
  }
  .img_amateurs{
    grid-area: amateurs_img;
    height: 100%
  }
  .section_amateurs{
    grid-area: amateurs_text;
  }

  /* Artists Benefits*/
  .artists_benefits{
    flex-direction: column;
    height: 450px;
  }
  .benefits{
    padding: 60px 0px;
  }
  .img_benefits_artists{
    width: 60%;
  }
  .section_benefits_artists{
    width: 100%;
  }
  .section_benefits_artists ul li{
    text-align: center;
  }
  /* Amateurs Benefits*/
  .amateurs_benefits{
    flex-direction: column;
    height: 450px;
  }
  .img_benefits_amateurs{
    width: 60%;
  }
  .section_benefits_amateurs{
    width: 100%;
  }
  .section_benefits_amateurs ul li{
    text-align: center;
  }
  .registration{
    padding: 60px 0px;
  }
}
@media(max-width: 630px){
  .purpose{
    align-items: center;
    width: 100%;
    padding: 55px 15px;
  }
  .section_purpose{
    width: 100%;
  }
  .section_registration{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .img_registration{
    width: 100%;
  }
  .section_registercontent{
    width: 100%;
  }
  .section_registercontent p{
    margin-top: 40px;
  }
  footer{
    margin-top: 100px;
  }
  .contact{
    height: 400px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .section_uteam{
    order: 10;
  }
  .section_socialmedia{
    width: 50%;
  }
  .registration{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 800px;
  }
  .section_registration{
    width: 90%;
  }
  .section_registration p{
    font-size: 17px;
  }

}


</style>