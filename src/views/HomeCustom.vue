<template>
  <div >

    <div>
      <div v-if="idInstitucion === '13' && idCarrera === '7'">
        <div class="banner-area  banner-bg-overlay banner-img">
          <div class="container">
            <div class="avatar ">
              <img :src="url_api + '/InstitucionUpea/' + Institucion.institucion_logo
                " alt="img" style="background:none!important" />

            </div>
            <div class="row ">
              <div class="col-10">

                <div class="banner-inner style-white">

                  <h1>
                    <span id="texto-maquina" class=" title " style="text-transform: uppercase!important;"></span>
                    <span id="cursor" class="typed-cursor">|</span>
                  </h1>



                  <br />
                  <!-- <a class="btn btn-base al-animate-4" href="/about/nosotros">
                Ver más
              </a> -->
                  <div class="cont">
                    <router-link style="margin-left: 50px;" class="btn btn-base" to="/about">SOBRE
                      NOSOTROS</router-link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="(idInstitucion === '22' && idCarrera === '18') || (idInstitucion === '10' && idCarrera === '20')">
        <div class="banner-area banner-area-1 banner-bg-overlay banner-img ">
          <div class="container text-center">
            <div class="avatar ">
              <img :src="url_api + '/InstitucionUpea/' + Institucion.institucion_logo
                " alt="img" style="background:none!important" />

            </div>
            <h1  class=" title_1 " style="text-transform: uppercase!important;">
                    BIENVENIDOS A {{ Institucion.institucion_nombre }}
                  </h1>


                  <br /><br />
                  <!-- <a class="btn btn-base al-animate-4" href="/about/nosotros">
                Ver más
              </a> -->
                  <div >
                    <router-link  class="btn btn-base al-animate-4"
                      to="/about">SOBRE
                      NOSOTROS</router-link>
                  </div>

          </div>
        </div>
      </div>
      <div v-else-if="idInstitucion === '24' && idCarrera === '32'">
        <div class="banner-area banner-area-1 banner-bg-overlay banner-img">
          <div class="container">
            
            <div class="row ">
              <div class="col-10">

                <div class="banner-inner style-white text-center text-lg-left" >


                  <h1 id="" class=" title_1-2 " style=";text-transform: uppercase!important; ">
                    {{ Institucion.institucion_nombre }}
                  </h1>
                  <!-- <h2 class="sub_title text-center" style="color:#fff!important">Universidad Pública de El Alto </h2> -->
                  <div>
                    <transition name="text-fade" mode="out-in">
                      <p class="animated-text " style="color:#fff!important;" :class="{ 'fade-out': isFadingOut }"
                        @animationend="changeText">{{ currentText }}</p>
                    </transition>
                  </div>

                  <br /><br />
                  <!-- <a class="btn btn-base al-animate-4" href="/about/nosotros">
                Ver más
              </a> -->
                  <div class="cont">
                    <router-link style="text-align: center:  !important;" class="btn btn-base " to="/about">SOBRE
                      NOSOTROS</router-link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="banner-area banner-area-1 banner-bg-overlay banner-img ">
          <div class="container text-center">
            <div class="avatar ">
              <img :src="url_api + '/InstitucionUpea/' + Institucion.institucion_logo
                " alt="img" style="background:none!important" />

            </div>
            <h1  class=" title_1 " >
                    {{ Institucion.institucion_nombre }}
                  </h1>


                  <br /><br />
                  <!-- <a class="btn btn-base al-animate-4" href="/about/nosotros">
                Ver más
              </a> -->
                  <div >
                    <router-link  class="btn btn-base al-animate-4"
                      to="/about">SOBRE
                      NOSOTROS</router-link>
                  </div>

          </div>
        </div>
      </div>
    </div>

    <div v-if="(idInstitucion === '22' && idCarrera === '18') || (idInstitucion === '10' && idCarrera === '20')">
      <div class="bg-cover pd-top-70 pd-bottom-70 team-area banner-area-1-2 bg-cover-img-inicio">
        <div class="container ">
          <div class="section-title-est  ">

            <h2 class="title plan" style="padding: 30px;">
              Enlaces Externos</h2>

          </div>

          <div class="row">
            <a class="col-md-4" v-for="(link, id_link) of Links" :key="id_link" :href="link.ei_link" target="_blank">
              <div class="single-block-inner single-block-inner-1" :style="'background-image: url(' +
                url_api +
                '/InstitucionUpea/LinksExternos/' +
                link.ei_imagen +
                ');object-fit:cover'
                ">
                <div class="cat" >{{ link.ei_tipo }}</div>
                <h4>{{ link.ei_nombre }}</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- counter area start -->
    <div class="bg-cover about-area pd-top-50 pd-bottom-90 banner-area-1-2 bg-cover-img-inicio">
      <h2 class="titulo-1">{{ Institucion.institucion_nombre }}</h2>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="slider-container">
              <ul>
                <li><img class="slider-item" src="@/assets/fondo_upea.jpg" alt=""></li>
                <li><img class="slider-item" src="@/assets/images/fondo_ciencias_economicas.jpg" alt=""></li>
                <li><img class="slider-item" src="@/assets/images/Contaduria-Publica-UPEA.jpg" alt=""></li>
                <li><img class="slider-item" src="@/assets/images/adm.jpg" alt=""></li>
              </ul>

            </div>
          </div>
          <div class="col-lg-6 align-self-center mt-4 mt-lg-0" style=" overflow-y: auto;
                                                  height: 40rem;
                                                  border: 2px solid #fff; /* Borde opcional para el contenedor */
                                                  ">

            <div class="section-title  mb-0">


              <p style="padding: 2rem!important;" class="content" v-html="Institucion.institucion_objetivos"></p>

            </div>
          </div>
        </div>
      </div>
      <br> <br>

    </div>
    <div>
      
    </div>


    <!--event-area start-->
    <div class="bg-cover  pd-bottom-100 banner-area-1-2 bg-cover-img">
      <div class="container">
        <div class="row">
          <div class="col-12 ">
            <div class="section-title-est  ">

              <h2 class="title plan" style="padding: 30px;">
                Plan de Estudios</h2>

            </div>
            <div class="conta">
              <a :href="url_api +
                '/InstitucionUpea/' +
                Institucion.institucion_organigrama
                " target="_blank" class="btnDescarga">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download" width="24"
                  height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                  <path d="M7 11l5 5l5 -5"></path>
                  <path d="M12 4l0 12"></path>
                </svg>Descarga la Malla Curricular</a>

            </div>

          </div>

        </div>
      </div>
    </div>
    <!--event-area end-->

    <!-- counter end -->
    <div id="intro-area"></div>
    <!-- intro area start -->
    <div class=" bg-cover intro-area pd-top-50 banner-area-1-2 bg-cover-img-inicio">
      <div class="container">
        <div class="section-title text-center">
          <h5 class="sub-title">Categorías</h5>
          <h2 class="title">Explorar contenido</h2>
        </div>
        <div class="row ">
          <router-link class="col-lg-3 col-md-3 col-sm-6 card-intro" v-for="(conv, id_conv) of MenuConv" :key="id_conv"
            :to="'/convocatorias/' + conv.idtipo_conv_comun" @click="$store.commit('clickLink')">
            <div class="single-intro-inner bg-base style-two text-center">
              <div class="thumb cat-thumb">
                <img src="@/assets/img/intro/5.png" alt="img" />
              </div>
              <div class="details">
                <h5>
                  <span>{{ contarConv(conv.tipo_conv_comun_titulo) }}</span>
                  &nbsp;
                  {{ conv.tipo_conv_comun_titulo }}
                </h5>
              </div>
            </div>
          </router-link>
          <router-link class="col-lg-3 col-md-3 col-sm-6 card-intro" v-for="(cur, id_cur) of MenuCur" :key="id_cur"
            :to="'/cursos/' + cur.idtipo_curso_otros" @click="$store.commit('clickLink')">
            <div class="single-intro-inner bg-base-2 style-two text-center">
              <div class="thumb cat-thumb">
                <img src="@/assets/img/intro/5.png" alt="img" />
              </div>
              <div class="details">
                <h5>
                  <span>{{ contarCur(cur.tipo_conv_curso_nombre) }}</span>
                  &nbsp;
                  {{ cur.tipo_conv_curso_nombre }}
                </h5>
              </div>
            </div>
          </router-link>
          <router-link to="/servicios" class="col-lg-3 col-md-3 col-sm-6 card-intro">
            <div class="single-intro-inner bg-red style-two text-center">
              <div class="thumb cat-thumb">
                <img src="@/assets/img/intro/3.png" alt="img" />
              </div>
              <div class="details">
                <h5>
                  <span>{{ Serv.length }}</span>
                  &nbsp; SERVICIOS
                </h5>
              </div>
            </div>
          </router-link>
          <router-link to="/ofertas" class="col-lg-3 col-md-3 col-sm-6 card-intro">
            <div class="single-intro-inner bg-purple style-two text-center">
              <div class="thumb cat-thumb">
                <img src="@/assets/img/intro/4.png" alt="img" />
              </div>
              <div class="details">
                <h5>
                  <span>{{ Ofer.length }}</span>
                  &nbsp; OFERTAS ACADÉMICAS
                </h5>
              </div>
            </div>
          </router-link>
          <router-link to="/publicaciones" class="col-lg-3 col-md-3 col-sm-6 card-intro">
            <div class="single-intro-inner bg-pink style-two text-center">
              <div class="thumb cat-thumb">
                <img src="@/assets/img/intro/5.png" alt="img" />
              </div>
              <div class="details">
                <h5>
                  <span>{{ Publi.length }}</span>
                  &nbsp; PUBLICACIONES
                </h5>
              </div>
            </div>
          </router-link>
          <router-link to="/gaceta" class="col-lg-3 col-md-3 col-sm-6 card-intro">
            <div class="single-intro-inner bg-base style-two text-center">
              <div class="thumb cat-thumb">
                <img src="@/assets/img/intro/6.png" alt="img" />
              </div>
              <div class="details">
                <h5>
                  <span>{{ Gac.length }}</span>
                  &nbsp; GACETA
                </h5>
              </div>
            </div>
          </router-link>
          <router-link to="/eventos" class="col-lg-3 col-md-3 col-sm-6 card-intro">
            <div class="single-intro-inner bg-base-2 style-two text-center">
              <div class="thumb cat-thumb">
                <img src="@/assets/img/intro/1.png" alt="img" />
              </div>
              <div class="details">
                <h5>
                  <span>{{ Event.length }}</span>
                  &nbsp; EVENTOS
                </h5>
              </div>
            </div>
          </router-link>
          <router-link to="/videos" class="col-lg-3 col-md-3 col-sm-6 card-intro">
            <div class="single-intro-inner bg-base-3 style-two text-center">
              <div class="thumb cat-thumb">
                <img src="@/assets/img/intro/1.png" alt="img" />
              </div>
              <div class="details">
                <h5>
                  <span>{{ Vid.length }}</span>
                  &nbsp; VIDEOS
                </h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- intro area end -->
    <!--facebbok area-->
    <div class="event-area pd-top-50 mg-bottom-120">
      <div class="container">
        <div class="section-title text-center">
          <h5 class="sub-title">Redes Sociales</h5>
          <h2 class="title">
            Facebook
          </h2>
        </div>

        <div class="row no-gutters ">
          <div class="col-xl-7 col-lg-6  banner-area-3 bg-cover bg-cover-img-fb">
            <div class="event-section-title">
              <div class="section-title mb-0 pt-xl-5 style-white">

                <!-- <a class="btn btn-border-white" href="event.html">All Events</a> -->
              </div>
            </div>
          </div>
          <div class="col-xl-5 col-lg-7 area-fb">
            <div class="event-area-inner bg-base-fb">
              <div class="facebook" id="facebook">


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="intro-area pd-top-90 area-facebook">
      <div class="container">
        <div class="section-title text-center">
          <h6 class="sub-title">Redes Sociales</h6>
          <h2 class="title">Facebook</h2>
          <br>

          <div class="facebook" id="facebook">


          </div>
        </div>
      </div>
    </div> -->


    <!-- call to action area start -->

    <!-- call to action area start -->

    <!--team-area start-->
    <div class="team-area  pd-bottom-80">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title text-center">
              <h6 class="sub-title">Autoridades de la carrera de {{ Institucion.institucion_nombre }}</h6>
              <h2 class="title">Nuestras autoridades</h2>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-4 pd-bottom-60 col-md-6" v-for="(autoridad, id_aut) of Institucion.autoridad" :key="id_aut"
            v-show="(pag - 1) * NUM_RESULTS <= id_aut && pag * NUM_RESULTS > id_aut
              ">
            <div class="single-team-inner marco-aut">

              <div class="thumb thumb-img">
                <img :src="url_api +
                  '/InstitucionUpea/Autoridad/' +
                  autoridad.foto_autoridad
                  " alt="img" />

              </div>
              <div class="details str-team-img-text text-center str-team-text ">

                <h5>
                  <a>{{
                    autoridad.nombre_autoridad
                  }}</a>
                  <br>
                  <span>{{ autoridad.cargo_autoridad }}</span>
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

                <!-- <p><i class="fa fa-user"></i> 100+ Courses</p> -->
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
    <!--team-area end-->



    <!--blog-area start-->
    <div class="blog-area pd-top-115 ">
      <div class="">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-7 col-md-11">
            <div class="section-title text-center">
              <h5 class="sub-title">Lo mas reciente</h5>
              <h2 class="title">
                Convocatorias, comunicados recientes
              </h2>
            </div>
          </div>
        </div>
        <div v-if="Object.keys(latestConv).length +
          Object.keys(latestComun).length +
          Object.keys(latestAv).length >
          0
          " class="row justify-content-center bg-cover banner-bg-overlay banner-area-1 bg-cover-img-log">
          <div class="col-lg-4 col-md-6" v-if="Object.keys(latestConv).length != 0">
            <div class="single-blog-inner">
              <div class="thumb">
                <router-link :to="'/detalleConvocatoria/' + latestConv.idconvocatorias">
                  <img style="width:400px; height:400px" :src="url_api + '/Convocatorias/' + latestConv.con_foto_portada
                    " alt="img" />
                </router-link>
              </div>
              <div class="details">
                <div class="blog-meta">
                  <ul>
                    <router-link :to="'/convocatorias/' +
                      latestConv.tipo_conv_comun.idtipo_conv_comun
                      ">
                      <li class="comnt bg-base">
                        {{ latestConv.tipo_conv_comun.tipo_conv_comun_titulo }}
                      </li>
                    </router-link>
                    &nbsp;
                    <li class="date">{{ dmy(latestConv.con_fecha_inicio) }}</li>
                  </ul>
                </div>
                <h4 style="color: #fff!important;">
                  <router-link :to="'/detalleConvocatoria/' + latestConv.idconvocatorias">{{ latestConv.con_titulo
                  }}</router-link>
                </h4>
                <router-link :to="'/detalleConvocatoria/' + latestConv.idconvocatorias" class="readmore-text"
                  style="color: #fff!important;">Leer
                  mas</router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" v-if="Object.keys(latestComun).length != 0">
            <div class="single-blog-inner">
              <div class="thumb">
                <router-link :to="'/detalleConvocatoria/' + latestComun.idconvocatorias">
                  <img style="width:400px; height:400px" :src="url_api + '/Convocatorias/' + latestComun.con_foto_portada
                    " alt="img" />
                </router-link>
              </div>
              <div class="details">
                <div class="blog-meta">
                  <ul>
                    <router-link :to="'/convocatorias/' +
                      latestComun.tipo_conv_comun.idtipo_conv_comun
                      ">
                      <li class="comnt bg-base">
                        {{ latestComun.tipo_conv_comun.tipo_conv_comun_titulo }}
                      </li>
                    </router-link>
                    &nbsp;
                    <li class="date">
                      {{ dmy(latestComun.con_fecha_inicio) }}
                    </li>
                  </ul>
                </div>
                <h4 style="color: #fff!important;">
                  <router-link :to="'/detalleConvocatoria/' + latestComun.idconvocatorias">
                    {{ latestComun.con_titulo }}
                  </router-link>
                </h4>
                <router-link :to="'/detalleConvocatoria/' + latestComun.idconvocatorias" class="readmore-text"
                  style="color: #fff!important;">Leer
                  mas</router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" v-if="Object.keys(latestAv).length != 0">
            <div class="single-blog-inner">
              <div class="thumb">
                <router-link :to="'/detalleConvocatoria/' + latestAv.idconvocatorias">
                  <img style="width:400px; height:400px" :src="url_api + '/Convocatorias/' + latestAv.con_foto_portada
                    " alt="img" />
                </router-link>
              </div>
              <div class="details">
                <div class="blog-meta">
                  <ul>
                    <router-link :to="'/convocatorias/' +
                      latestAv.tipo_conv_comun.idtipo_conv_comun
                      ">
                      <li class="comnt bg-base">
                        {{ latestAv.tipo_conv_comun.tipo_conv_comun_titulo }}
                      </li>
                    </router-link>
                    &nbsp;
                    <li class="date">{{ dmy(latestAv.con_fecha_inicio) }}</li>
                  </ul>
                </div>
                <h4 style="color: #fff!important;">
                  <router-link :to="'/detalleConvocatoria/' + latestAv.idconvocatorias">{{ latestAv.con_titulo
                  }}</router-link>
                </h4>
                <router-link :to="'/detalleConvocatoria/' + latestAv.idconvocatorias" class="readmore-text"
                  style="color: #fff!important;">Leer
                  mas</router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- <carousel
        v-if="itemsToShow>0"
        :items-to-slide="1"
        :breakpoints="carouselBreakpoints1"
        :items-to-show="itemsToShow"
        :autoplay="5000"
        :wrap-around="true">
        <slide v-if="Object.keys(latestConv).length != 0">
          <div class="single-blog-inner">
              <div class="thumb">
                <router-link :to="'/detalleConvocatoria/' + latestConv.idconvocatorias">
                  <img :src="url_api + '/Convocatorias/' + latestConv.con_foto_portada
                    " alt="img" />
                </router-link>
              </div>
              <div class="details">
                <div class="blog-meta">
                  <ul>
                    <router-link :to="'/convocatorias/' +
                      latestConv.tipo_conv_comun.idtipo_conv_comun
                      ">
                      <li class="comnt bg-base">
                        {{ latestConv.tipo_conv_comun.tipo_conv_comun_titulo }}
                      </li>
                    </router-link>
                    &nbsp;
                    <li class="date">{{ dmy(latestConv.con_fecha_inicio) }}</li>
                  </ul>
                </div>
                <h4>
                  <router-link :to="'/detalleConvocatoria/' + latestConv.idconvocatorias">{{ latestConv.con_titulo
                  }}</router-link>
                </h4>
                <router-link :to="'/detalleConvocatoria/' + latestConv.idconvocatorias" class="readmore-text"
                  style="color: #fff!important;">Leer
                  mas</router-link>
              </div>
            </div>
        </slide>
        <template #addons>
      <navigation />
      <pagination />
    </template>

        </carousel> -->


      </div>
    </div>
    <!-- <div class="counter-area">
      <div class="container">
        <div class="row">

          <div class="col-lg-8 pd-top-90">
            <div class="block-area">
              <div class="section-title text-center">
                <h5 class="sub-title">Sistemas Relacionados</h5>
                <h2>ENLACES EXTERNOS</h2>
              </div>

              <div class="row">
                <a class="col-md-6" v-for="(link, id_link) of Links" :key="id_link" :href="link.ei_link" target="_blank">
                  <div class="single-block-inner single-block-inner-1">
                    <div class="cat">{{ link.ei_tipo }}</div>
                    <h4 class="cat">{{ link.ei_nombre }}</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!--blog-area end-->
  </div>
 
</template>

<style scoped>
.maquina-de-escribir {
  font-family: 'Courier New', monospace;
  overflow: hidden;
  white-space: nowrap;
  border-right: 5px solid #FFF;

  display: inline-block;
  vertical-align: middle;
}

.typed-cursor {
  opacity: 1;
  animation: blink 0.7s infinite;
  color: #FFF;
  /* Ancho del cursor y color de borde */
  width: 6px;
  /* Ancho del cursor */
}

#texto-maquina {
  /* font-size: 4vw; */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
  font-weight: bolder;
  font-family: Georgia, 'Times New Roman', Times, serif;
  position: relative;
  /* display: inline-block; */
  font-size: 65px;
}

/* Estilos para el cursor parpadeante */
/* .typed-cursor {
  opacity: 1;
  animation: blink 0.7s infinite;
} */

@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

.titulo-en-movimiento {
  /* Ajusta el tamaño de fuente según tus preferencias */
  animation: moverTitulo 3s linear infinite;
  /* La animación se repetirá infinitamente */
}

@keyframes moverTitulo {
  0% {
    transform: translateX(0);
    /* Posición inicial del título */
  }

  50% {
    transform: translateX(100px);
    /* Posición intermedia del título */
  }

  100% {
    transform: translateX(0);
    /* Vuelve a la posición inicial */
  }
}


.banner-img {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url("@/assets/Fondo2.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover !important;


}

.avatar {
  width: 30%;
  margin: auto;
  display: block;
  margin-top: 100px;
  box-sizing: border-box;
  border-style: none;
  overflow: hidden;


  transform: translatey(0px);
  animation: float 3s ease-in-out infinite;

  img {
    width: 100%;
    height: auto;
  }
}

@keyframes float {
  0% {
    /* box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6); */
    transform: translatey(0px);
  }

  50% {
    /* box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2); */
    transform: translatey(-20px);
  }

  100% {
    /* box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6); */
    transform: translatey(0px);
  }
}

@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

.fondo-img {
  background-image: url("@/assets/images/Conta_1.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  object-fit: cover;
  background-size: 100%;
  position: relative;
}


.bg-cover-img {
  background-image: url("@/assets/images/fondo_4.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  object-fit: cover;
  background-size: 100%;
  padding-top: 30px;
  padding-bottom: 50px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.7);
}

.bg-cover-img-inicio {
  background-image: url("@/assets/images/fondo_inicio2.jpg");
  background-repeat: no-repeat;

  object-fit: cover;
  background-size: 100%;
  padding-top: 3rem;
  padding-bottom: 2rem;
  position: relative;

}

.bg-cover-img-fb {
  background-image: url("@/assets/images/imagen-fb.png");
  background-repeat: no-repeat;
  background-color: #deb887;
  object-fit: cover;


  position: relative;

}

.bg-cover-img-log {
  background-image: url("@/assets/images/fondo_footer.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* object-fit: cover; */
  background-size: 100%;
  padding-top: 30px;
  padding-bottom: 50px;
  position: relative;
}

.thumb-img {
  /* filter: drop-shadow(-2px 2px 15px #000000b3); */
}

.card-intro:hover h5 {
  color: var(--main-color-1);
  user-select: none;
}

.bg-tr {
  backdrop-filter: blur(5px);
  /* background-color: rgba(0, 0, 0, 0.25);*/
  padding-left: 70px;
  padding-bottom: 50px;
  border-radius: 50px;
}

#typewriter {
  position: relative;
  /* top: 50%; */
  width: 17em;
  margin: 0;
  display: block;
  font-family: monospace;
  white-space: nowrap;
  padding-top: 2.5rem;

  /* margin-top: 6rem; */
  overflow: hidden;
  /* padding-top: 30px; */
  animation: typewriter 4s steps(37) 1s 1 normal both,
    blinkTextCursor 500ms steps(37) infinite normal;
  overflow: hidden;

}

@keyframes typewriter {
  from {
    width: 0;
  }

  to {
    width: auto15em;
  }
}

@media screen and (max-width: 768px) {
  #text_adm {
    font-size: 7vw;
    padding: 0%;
  }

  #texto-maquina {

    font-size: 5vw;
    padding: 0%;
    /* Tamaño para pantallas pequeñas */
    padding-bottom: 10px;
  }

  .cont-enlaces {
    display: block;
  }
}

@media screen and (min-height: 800px) {
  .avatar {

    padding-bottom: 200px;

  }

}

@media screen and (min-width: 769px) and (max-width: 1200px) {
  #typewriter {
    font-size: 4vw;
    /* Tamaño para pantallas medianas */
  }
}

@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }

  to {
    border-right-color: transparent;
  }
}

@media screen and (max-width: 768px) {
  #typewriter {
    font-size: 2vw;
    /* Tamaño para pantallas pequeñas */
  }

  #texto-maquina {
    font-weight: 3vw;
  }

  .avatar {
    width: 180px;
  }

  .cont-enlaces {
    display: block;
  }

}

@media screen and (min-width: 769px) and (max-width: 1200px) {
  #typewriter {
    font-size: 3vw;
    /* Tamaño para pantallas medianas */
  }

  .avatar {
    padding-bottom: 0%;
  }
}
@media screen and (max-width: 1281) {
  .avatar {
    width: 100px;
  }
} 

@media screen and (min-width: 1281px) {
  #typewriter {
    font-size: 4vw;
    /* Tamaño para pantallas grandes */
  }

  .avatar {
    padding-top: 2rem;
    padding-bottom: 5rem;
    width: 350px;
  }



  #texto-maquina {
    margin-left: 20px;
  }

}


.animated-text {
  font-size: 24px;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
  /* Transición suave de opacidad */
}

.fade-out {
  opacity: 0;
  /* Texto desvanecido durante la transición de salida */
}
</style>

<script>
import { mapState } from "vuex";
import Typed from 'typed.js';
// import {Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  name: "HomeCustom",
  data() {
    return {
      idInstitucion: process.env.VUE_APP_ID_INSTITUCION,
      idCarrera: process.env.VUE_APP_ID_CARRERA,

      texts: ["Universidad Pública de El Alto", "Tiene como finalidad formar profesionales competentes en lo comercio, financiero y economico acorde a las necesidades del mercado laboral y avance tecnologico"], // Textos que quieres mostrar
      currentIndex: 0, // Índice del texto actual en el array
      isFadingOut: false,
      Conv: 0,
      latestConv: {},
      latestComun: {},
      latestAv: {},

      Cur: 0,
      latestCur: {},
      latestSem: {},

      Serv: [],
      Ofer: [],
      Publi: [],
      Gac: [],
      Event: [],
      Vid: [],


      NUM_RESULTS: 3,
      pag: 1,
      pager: 0,
    };
  },
  computed: {
    ...mapState(["url_api", "Institucion", "MenuConv", "MenuCur", "Links"]),
    currentText() {
      return this.texts[this.currentIndex];
    },
  },

  // components:{
  //   Carousel,
  //   Slide,
  //   Pagination,
  //   Navigation,


  // },
  methods: {

    iniciarMaquinaDeEscribir() {
      const options = {
        strings: [
          "Bienvenid@ a: ",
          "Contaduría Pública",

        ],
        typeSpeed: 80, // Velocidad de escritura en milisegundos
        backSpeed: 35, // Velocidad de borrado en milisegundos
        backDelay: 2000, // Tiempo de espera antes de iniciar el siguiente mensaje en milisegundos
        startDelay: 500, // Tiempo de espera antes de comenzar a escribir en milisegundos
        loop: false, // Repetir el ciclo de mensajes
        showCursor: false, // Mostrar cursor parpadeante
        // cursorChar: "|", // Carácter del cursor
      };
      new Typed("#texto-maquina", options);
    },
    changeText() {
      this.isFadingOut = true; // Iniciar la animación de salida

      setTimeout(() => {
        this.isFadingOut = false; // Detener la animación de salida
        this.currentIndex = (this.currentIndex + 1) % this.texts.length; // Cambiar al siguiente texto
      }, 500); // Tiempo de espera para la transición (ajusta según tu preferencia)
    },


    async getConvocatoriasAll() {
      try {
        let res = await this.axios.get(
          "/api/convocatoriasAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Conv = res.data;
        this.Conv.forEach((conv) => {
          if (
            conv.tipo_conv_comun.tipo_conv_comun_titulo == "CONVOCATORIAS" &&
            conv.con_estado == "1"
          ) {
            if (Object.keys(this.latestConv).length == 0) {
              this.latestConv = conv;
            }
          } else {
            if (
              conv.tipo_conv_comun.tipo_conv_comun_titulo == "COMUNICADOS" &&
              conv.con_estado == "1"
            ) {
              if (Object.keys(this.latestComun).length == 0) {
                this.latestComun = conv;
              }
            } else {
              if (
                conv.tipo_conv_comun.tipo_conv_comun_titulo == "AVISOS" &&
                conv.con_estado == "1"
              ) {
                if (Object.keys(this.latestAv).length == 0) {
                  this.latestAv = conv;
                }
              }
            }
          }
        });
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
        this.Cur.forEach((cur) => {
          if (
            cur.tipo_curso_otro.tipo_conv_curso_nombre == "CURSOS" &&
            cur.det_estado == "1"
          ) {
            if (Object.keys(this.latestCur).length == 0) {
              this.latestCur = cur;
            }
          } else {
            if (
              cur.tipo_curso_otro.tipo_conv_curso_nombre == "SEMINARIOS" &&
              cur.det_estado == "1"
            ) {
              if (Object.keys(this.latestSem).length == 0) {
                this.latestSem = cur;
              }
            }
          }
        });
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
      } catch (error) {
        console.log(error);
      }
    },
    async getPublicaciones() {
      try {
        let res = await this.axios.get(
          "/api/publicacionesAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.Publi = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getGacetaAll() {
      try {
        let res = await this.axios.get(
          "/api/gacetaunivAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.Gac = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getEventos() {
      try {
        let res = await this.axios.get(
          "/api/eventoAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.Event = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getVideos() {
      try {
        let res = await this.axios.get(
          "/api/VideosAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.Vid = res.data;
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
      }
    },
    async setImage(id, img) {
      try {
        await document
          .querySelector("." + id)
          .setAttribute("style", 'background-image: url("' + img + '");');

      } catch (error) {
        console.log(error);
      }
    },
    contarConv(tipo) {
      if (tipo && this.Conv) {
        let count = 0;
        this.Conv.forEach((conv) => {
          if (conv.tipo_conv_comun.tipo_conv_comun_titulo == tipo) {
            count++;
          }
        });
        return count;
      }
    },
    contarCur(tipo) {
      if (tipo && this.Cur) {
        let count = 0;
        this.Cur.forEach((cur) => {
          if (cur.tipo_curso_otro.tipo_conv_curso_nombre == tipo) {
            count++;
          }
        });
        return count;
      }
    },
    dmy(fecha) {
      if (fecha != undefined) {
        const meses = [
          "enero",
          "febrero",
          "marzo",
          "abril",
          "mayo",
          "junio",
          "julio",
          "agosto",
          "septiembre",
          "octubre",
          "noviembre",
          "diciembre",
        ];
        let fechaCadena = fecha.substr(0, 10);
        let fechaArray = fechaCadena.split("-");
        return (
          fechaArray[2] +
          " de " +
          meses[fechaArray[1] - 1] +
          " de " +
          fechaArray[0]
        );
      }
    },
  },
  created() {
    this.$store.commit("loadOn");
    this.getConvocatoriasAll();
    this.getCursosAll();
    this.getServiciosAll();
    this.getOfertasAll();
    this.getPublicaciones();
    this.getGacetaAll();
    this.getEventos();
    this.getVideos();
    this.changeText(); // Iniciar el cambio de texto
  },
  mounted() {
    if (this.idCarrera == '7') {
      this.iniciarMaquinaDeEscribir();
    }


    document.getElementById("facebook").innerHTML = `<div class="fb-page" data-href="${this.Institucion.institucion_facebook}" data-tabs="timeline"
              data-width="700" data-height="" data-small-header="true" data-adapt-container-width="true"
              data-hide-cover="false" data-show-facepile="true">
              <blockquote cite=${this.Institucion.institucion_facebook}" class="fb-xfbml-parse-ignore"><a
                href="${this.Institucion.institucion_facebook}" target="_blank">"${this.Institucion.institucion_nombre}" - UPEA</a>
              </blockquote>
            </div>`;


  },
  updated() {
    document.getElementById("facebook").innerHTML = `<div class="fb-page" data-href="${this.Institucion.institucion_facebook}" data-tabs="timeline"
              data-width="700" data-height="" data-small-header="true" data-adapt-container-width="true"
              data-hide-cover="false" data-show-facepile="true">
              <blockquote cite=${this.Institucion.institucion_facebook}" class="fb-xfbml-parse-ignore"><a
                href="${this.Institucion.institucion_facebook}" target="_blank">${this.Institucion.institucion_nombre} - UPEA</a>
              </blockquote>
            </div>`;
  }

};

</script>
<!-- <div><div class="fb-page" data-href="${this.Institucion.institucion_facebook}" data-tabs="timeline"
  data-width="500" data-height="" data-small-header="true" data-adapt-container-width="true"
  data-hide-cover="false" data-show-facepile="true">
  <blockquote cite=${this.Institucion.institucion_facebook}" class="fb-xfbml-parse-ignore"><a
    href="${this.Institucion.institucion_facebook}" target="_blank">Contaduría Publica - UPEA</a>
  </blockquote>
</div></div> -->