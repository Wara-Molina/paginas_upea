<template>
  <div id="about_d">
    <div class="page-title-area bg-overlay bg-overlay-img banner-img">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="breadcrumb-inner">
              <h2 class="page-title" style="color: #fff !important;">SOBRE NOSOTROS</h2>

            </div>
          </div>
        </div>
      </div>
    </div>




    <section id="nosotros">
      <div class="
        about-area about-right-bg-half
        bg-gray
        pd-top-50 pd-bottom-90
        banner-img
      ">

        <div class="container pd-top-60">
          <h2 class="title">Sobre la carrera</h2>
          <div class="row">
            
            <div class="col-lg-6 bg-gray">
              <div class="section-title" style=" overflow-y: auto;
                                                  height: 40rem;
                                                  border: 2px solid #fff; /* Borde opcional para el contenedor */
                                                  ">

                <p style="padding: 2rem!important; " class="content" v-html="Institucion.institucion_sobre_ins"></p>
              </div>
            </div>
            <div class="col-lg-6">
              <img src="@/assets/perfil.jpg" alt="fondo" />
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-3" style="display: flex; align-items: center">
            <div class="section-title">
              <h2 class="title">
                Historia de la institucion
                <img :src="url_api + '/InstitucionUpea/' + Institucion.institucion_logo
                  " alt="" />
              </h2>
            </div>
          </div>
          <div class="col-lg-9 bg-gray">
            <div class="section-title">
              <p class="content" v-html="Institucion.institucion_historia"></p>
            </div>
          </div>
        </div>
      </div>

    </section>
    <section id="mision">
      <br>
      <div class="bg-cover about-area pd-top-50 pd-bottom-90  bg-cover-img">
        <h5 class="sub-title" style="">Sobre la carrera</h5>
        <h2 class="title">{{ Institucion.institucion_nombre }}</h2>

        <div class="container">
          <div class="row">
            <div class="col-lg-6 align-self-center mt-4 mt-lg-0">
              <div class="section-title style-bg mb-0" style=" border: 2px solid #fff;
  padding: 2rem;
  border-radius: 20px;
  background-color: rgba(244, 244, 244, 0.8);
">
                <div class="single-list-inner mt-4">
                  <ul>
                    <li>
                      <i class="fa fa-check"></i> Mision
                      <p v-html="Institucion.institucion_mision"></p>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-6 align-self-center mt-4 mt-lg-0">
              <div class="section-title style-bg mb-0" style=" border: 2px solid #fff;
  padding: 2rem;
  border-radius: 20px;
  background-color: rgba(244, 244, 244, 0.8);">
                <div class="single-list-inner mt-4">
                  <ul>

                    <li>
                      <i class="fa fa-check"></i> Vision
                      <p v-html="Institucion.institucion_vision"></p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="atoridades">
      <br>
      <div class="team-area pd-top-115 pd-bottom-60">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-title text-center">
                <h6 class="sub-title">Autoridades</h6>
                <h2 class="title">Nuestras autoridades</h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6" v-for="(autoridad, id_aut) of Institucion.autoridad" :key="id_aut" v-show="(pag - 1) * NUM_RESULTS <= id_aut && pag * NUM_RESULTS > id_aut
              ">
              <div class="single-team-inner">
                <div class="thumb thumb-img">
                  <img :src="url_api +
                    '/InstitucionUpea/Autoridad/' +
                    autoridad.foto_autoridad
                    " alt="img" />
                </div>
                <div class="details pt-5">
                  
                  <h5>
                    <a href="single-team.html">{{
                      autoridad.nombre_autoridad
                    }}</a>
                    <br>
                    <span> - {{ autoridad.cargo_autoridad }}</span>
                  </h5>
                  <ul class="team-social-media">
                    <li>
                      <a :href="'https://wa.me/+' + autoridad.celular_autoridad" target="_blank"><i class="fa fa-whatsapp"
                          aria-hidden="true"></i></a>
                    </li>
                    <li>
                      <a :href="autoridad.facebook_autoridad" target="_blank"><i class="fa fa-facebook"
                          aria-hidden="true"></i></a>
                    </li>
                    <li>
                      <a :href="autoridad.twiter_autoridad" target="_blank"><i class="fa fa-twitter"
                          aria-hidden="true"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <nav class="col-12 td-page-navigation text-center mb-5 mb-lg-0" v-show="pager > 1">
              <ul class="pagination">
                <li class="pagination-arrow disable">
                  <a href="#" aria-label="Previous" @click.prevent="pag != 1 ? (pag -= 1) : ''">
                    <i class="fa fa-angle-double-left"></i>
                  </a>
                </li>
                <li v-for="(i, index) of pager" :key="index">
                  <a href="#" :class="[i == pag ? 'active' : '']" @click.prevent="pag = i">
                    {{ i }}
                  </a>
                </li>
                <li class="pagination-arrow">
                  <a href="#" aria-label="Next" @click.prevent="pag != pager ? (pag += 1) : ''"><i
                      class="fa fa-angle-double-right"></i></a>
                  <!-- v-show="(pag * NUM_RESULTS) / Cursos.length < 1" -->
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

    </section>
    <section id="contacto">
    <div>
      <div class=" bg-cover  bg-cover-img">


        <div class="
        about-area about-right-bg-half
        bg-gray
        pd-top-50 pd-bottom-90
        ">
          <div class="container">
            <div class="section-title">
                  <h2 class="title">Contactase con nosotros</h2>
                </div>
            <div class="">
              <div class="col-lg-4 bg-gray" style="text-align:center!important;">
                
              </div>
              <div class=" marco-aut-1">
                <div class="">
                  <p>
                    <b><i class="fa fa-phone"></i> Celular 1: </b>
                    {{ Institucion.institucion_celular1 }}
                  </p>
                  <!-- <p>
                    <b><i class="fa fa-phone"></i> Celular 2: </b>
                    {{ Institucion.institucion_celular2 }}
                  </p> -->
                  <p>
                    <b><i class="fa fa-phone"></i> Telefono 1: </b>
                    {{ Institucion.institucion_telefono1 }}
                  </p>
                  <!-- <p>
                    <b><i class="fa fa-phone"></i> Telefono 2: </b>
                    {{ Institucion.institucion_telefono2 }}
                  </p> -->
                  <p>
                    <b><i class="fa fa-envelope"></i> Correo 1: </b>
                    {{ Institucion.institucion_correo1 }}
                  </p>
                  <!-- <p>
                    <b><i class="fa fa-envelope"></i> Correo 2: </b>
                    {{ Institucion.institucion_correo2 }}
                  </p> -->
                  <p>
                    <b><i class="fa fa-facebook"></i> Facebook: </b>
                    <a :href="Institucion.institucion_facebook" target="_blank">
                      {{ Institucion.institucion_facebook }}
                    </a>
                  </p>
                  <!-- <p>
                    <b><i class="fa fa-twitter"></i> Twitter: </b>
                    <a :href="Institucion.institucion_twitter" target="_blank">
                      {{ Institucion.institucion_twitter }}
                    </a>
                  </p> -->
                  <p>
                    <b><i class="fa fa-youtube"></i> Youtube: </b>
                    <a :href="Institucion.institucion_youtube" target="_blank">
                      {{ Institucion.institucion_youtube }}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
        <div class="contact-g-map">
          <h2>O visítenos</h2>
          <h4>
            <i class="fa fa-map-marker"></i> {{ Institucion.institucion_direccion }}
          </h4>
          <iframe :src="Institucion.institucion_api_google_map"></iframe>
        </div>
      </div>
    </section>






  </div>
</template>
<style>
.bg-cover-img {
  background-image: url("@/assets/fondo_upea.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  object-fit: cover;
  background-size: 100%;
  padding-top: 30px;
  padding-bottom: 50px;
  position: relative;
}
</style>

<script>
import { mapState } from "vuex";
export default {
  name: "AboutView",
  data() {
    return {
      Conv: [],
      Cur: [],
      Serv: [],
      Ofer: [],

      NUM_RESULTS: 3,
      pag: 1,
      pager: 0,
    };
  },
  computed: {
    ...mapState(["Institucion", "url_api"]),
  },
  methods: {
    async getConvocatoriasAll() {
      try {
        let res = await this.axios.get(
          "/api/convocatoriasAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Conv = res.data;
        this.pager = this.Institucion.autoridad.length / this.NUM_RESULTS;
        if (this.pager - Math.trunc(this.pager) > 0) {
          this.pager = Math.trunc(this.pager) + 1;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getCursosAll() {
      try {
        let res = await this.axios.get(
          "/api/cursosAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Cur = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getServiciosAll() {
      try {
        let res = await this.axios.get(
          "/api/ServicioAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Serv = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getOfertasAll() {
      try {
        let res = await this.axios.get(
          "/api/OfertasAcademicasAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Ofer = res.data;
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.$store.commit("loadOn");
    this.getConvocatoriasAll();
    this.getCursosAll();
    this.getServiciosAll();
    this.getOfertasAll();
  },
};
</script>