<template>
  <div>
    <div class="page-title-area bg-overlay bg-overlay-img banner-img">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="breadcrumb-inner">
              <h2 class="page-title" style="color: #fff !important;">
                {{ Evento.evento_titulo }}
              </h2>
              <ul class="page-list">
                <li>
                  <router-link to="/">INICIO</router-link>
                </li>
                <li>
                  <router-link to="/eventos">EVENTOS</router-link>
                </li>
                <li>{{ Evento.evento_titulo }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-blog-area pd-top-120 pd-bottom-120">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-12" v-if="errorGet">
            <h1>Evento inexistente</h1>
          </div>
          <div class="col-lg-8 col-12" v-else>
            <div class="single-blog-inner mb-0">
              <div class="details">
                <div class="blog-meta border-0 mt-0 pt-0">
                  <ul>
                    <li class="comnt bg-base">EVENTOS</li>
                    <li class="author">
                      <span>{{ Evento.evento_tipo }}</span>
                    </li>
                    <li class="date">{{ dmy(Evento.evento_fecha) }}</li>
                  </ul>
                </div>
                <h4 class="mb-0">{{ Evento.evento_titulo }}</h4>
              </div>
              <div class="thumb mt-4">
                <a :href="url_api + '/Eventos/' + Evento.evento_imagen">
                  <img
                    :src="url_api + '/Eventos/' + Evento.evento_imagen"
                    alt="img"
                    style="cursor: zoom-in"
                  />
                </a>
              </div>
            </div>
            <div class="blog-content-inner">
              <h4>Descripción del Evento</h4>
              <p class="mt-0" v-html="Evento.evento_descripcion"></p>
              <div>
                <div class="gallery-area pd-top-120 pd-bottom-120">
                  <div class="container">
                    <div class="row">
                      <div
                        class="col-md-4"
                        style="margin: auto"
                        v-for="(eg, id_eg) of Evento.evento_galeria"
                        :key="id_eg"
                        v-show="
                          (pag - 1) * NUM_RESULTS <= id_eg &&
                          pag * NUM_RESULTS > id_eg
                        "
                      >
                        <a
                          :href="
                            url_api +
                            '/Eventos/GaleriaEvento/' +
                            eg.galeria_imagen
                          "
                          class="single-gallery"
                          target="_blank"
                        >
                          <img
                            :src="
                              url_api +
                              '/Eventos/GaleriaEvento/' +
                              eg.galeria_imagen
                            "
                            alt="img"
                          />
                        </a>
                      </div>
                      <nav
                        class="col-12 td-page-navigation text-center mb-5 mb-lg-0"
                        v-show="pager > 1"
                      >
                        <ul class="pagination">
                          <li class="pagination-arrow disable">
                            <a
                              href="#"
                              aria-label="Previous"
                              @click.prevent="pag != 1 ? (pag -= 1) : ''"
                            >
                              <i class="fa fa-angle-double-left"></i>
                            </a>
                          </li>
                          <li v-for="(i, index) of pager" :key="index">
                            <a
                              href="#"
                              :class="[i == pag ? 'active' : '']"
                              @click.prevent="pag = i"
                            >
                              {{ i }}
                            </a>
                          </li>
                          <li class="pagination-arrow">
                            <a
                              href="#"
                              aria-label="Next"
                              @click.prevent="pag != pager ? (pag += 1) : ''"
                              ><i class="fa fa-angle-double-right"></i
                            ></a>
                            <!-- v-show="(pag * NUM_RESULTS) / Cursos.length < 1" -->
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-12">
            <SidebarCustom></SidebarCustom>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SidebarCustom from "@/components/SidebarCustom.vue";
export default {
  name: "detalleEvento",
  data() {
    return {
      Evento: {},
      errorGet: false,

      NUM_RESULTS: 3,
      pag: 1,
      pager: 0,
    };
  },
  components: {
    SidebarCustom,
  },
  computed: {
    ...mapState(["url_api"]),
  },
  methods: {
    async getEventoOne() {
      try {
        let res = await this.axios.get(
          "/api/evento/" + this.$route.params.idEv
        );
        this.Evento = res.data.Descripcion;
        this.pager = this.Evento.evento_galeria.length / this.NUM_RESULTS;
        if (this.pager - Math.trunc(this.pager) > 0) {
          this.pager = Math.trunc(this.pager) + 1;
        }
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
        if (error.response.status == 500) {
          this.errorGet = true;
          this.$store.commit("loading");
        }
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
          meses[parseInt(fechaArray[1]) - 1] +
          " de " +
          fechaArray[0]
        );
      }
    },
    clickBack() {
      this.$store.commit("clickLink");
      this.$router.go(-1);
    },
  },
  mounted() {
    this.$store.commit("loadOn");
    this.getEventoOne();
  },
  created() {
    this.$store.commit("loadOn");
    this.getEventoOne();
  },
};
</script>