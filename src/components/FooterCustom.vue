
<template>
  <div>
    <footer class="bg-cover footer-area banner-area-4">
      <div class="footer-top pd-top-115">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-5">
              <div class="widget widget_contact pr-lg-3">
                <div class="widget-title">
                  <img :src="imageUrl + Institucion.institucion_logo" alt="img" width="125" />
                </div>
                <ul class="social-media-2">
                  <li><strong>REDES SOCIALES:</strong></li>
                  <br>
                  <li>
                    <a :href="Institucion.institucion_facebook?.trim()" target="_blank">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a :href="Institucion.institucion_youtube?.trim()" target="_blank">
                      <i class="fa fa-youtube" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="col-lg-3 col-md-3 widget widget_tags">
              <h4 class="widget-title">Enlaces Externos</h4>
              <div class="tagcloud">
                <a 
                  :href="link.url_link?.trim()" 
                  target="_blank" 
                  v-for="(link, index) of Links" 
                  :key="link.id_link || index"
                  :title="link.tipo"
                >
                  {{ link.nombre }}
                </a>
                <a href="https://sie.upea.bo/" target="_blank">SIE UPEA</a>
              </div>
            </div>

            <div class="col-lg-5 col-md-4 col-sm-12 pl-lg-5 pr-5 pr-lg-0">
              <div class="widget widget_contact pr-lg-3">
                <h4 class="widget-title">Contacto</h4>
                <ul class="details style-icon">
                  <li>
                    <i class="fa fa-phone"></i> 
                    +{{ Institucion.institucion_celular1 }}
                  </li>
                  <li>
                    <i class="fa fa-envelope"></i>
                    {{ Institucion.institucion_correo1?.trim() }}
                  </li>
                  <li>
                    <i class="fa fa-map-marker"></i>
                    {{ Institucion.institucion_direccion?.trim() }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="">
        <div class="container">
          <div class="row">
            <div class="col-md-7 text-md-right align-self-center mt-lg-0 mt-3">
              <a href="https://sie.upea.bo/" target="_blank">
                <img src="@/assets/sie.png" width="100" alt="sie" />
              </a>
              <p>© Copyright 2023 SIE_UPEA&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <div class="whatsapp">
      <a 
        class="btn_whatsapp" 
        :href="'https://api.whatsapp.com/send?phone=591' + Institucion.institucion_celular1"
        target="_blank" 
        title="Contactanos por Whatsapp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
          <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
        </svg>
      </a>
    </div>
  </div>
</template>

<style>
.footer-area {
  position: relative;
  background-image: url("@/assets/images/Conta_1.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
}
</style>

<script>
import { mapState } from "vuex";

export default {
  name: "footerView",
  
  computed: {
    ...mapState(["Institucion", "MenuConv", "MenuCur", "url_api", "Links"]),
    
    imageUrl() {
      return process.env.VUE_APP_UPLOADS_URL || 'https://servicioadministrador.upea.bo/uploads/'
    }
  },
  
  methods: {
    clickBack() {
      this.$store.commit("clickLink");
      this.$router.go(-1);
    },
  },
};
</script>