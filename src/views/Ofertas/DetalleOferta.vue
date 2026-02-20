<template>
  <div>
    <div class="page-title-area bg-overlay bg-overlay-img banner-img">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="breadcrumb-inner">
              <h2 class="page-title" style="color: #fff !important;">
                {{ Oferta.ofertas_titulo }}
              </h2>
              <ul class="page-list">
                <li>
                  <router-link to="/">INICIO</router-link>
                </li>
                <li>
                  <router-link to="/ofertas">OFERTAS</router-link>
                </li>
                <li>{{ Oferta.ofertas_titulo }}</li>
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
            <h1>Oferta inexistente</h1>
          </div>
          <div class="col-lg-8 col-12" v-else>
            <div class="single-blog-inner mb-0">
              <div class="details">
                <div class="blog-meta border-0 mt-0 pt-0">
                  <ul>
                    <li class="comnt bg-base">OFERTAS ACADÉMICAS</li>
                    <li class="date">
                      {{ dmy(Oferta.ofertas_inscripciones_ini) }}
                      -
                      {{ dmy(Oferta.ofertas_inscripciones_fin) }}
                    </li>
                  </ul>
                </div>
                <h4 class="mb-0">{{ Oferta.ofertas_titulo }}</h4>
              </div>
              <div class="thumb mt-4">
                <a
                  :href="
                    url_api +
                    '/Carrera/OfertasAcademicas/' +
                    Oferta.ofertas_imagen
                  "
                >
                  <img
                    :src="
                      url_api +
                      '/Carrera/OfertasAcademicas/' +
                      Oferta.ofertas_imagen
                    "
                    alt="img"
                    style="cursor: zoom-in"
                  />
                </a>
              </div>
            </div>
            <div class="blog-content-inner">
              <h4>Descripción del Oferta</h4>
              <p class="mt-0" v-html="Oferta.ofertas_descripcion"></p>
              <div class="date">
                <b>Fecha examen: {{ dmy(Oferta.ofertas_fecha_examen) }}</b>
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

<style scoped>
.bg-overlay-img {
  background-image: url("@/assets/Fondo2.jpg");
}
</style>

<script>
import { mapState } from "vuex";
import SidebarCustom from "@/components/SidebarCustom.vue";
export default {
  name: "detalleOferta",
  data() {
    return {
      Oferta: {},
      errorGet: false,
    };
  },
  components: {
    SidebarCustom,
  },
  computed: {
    ...mapState(["url_api"]),
  },
  methods: {
    async getOfertaOne() {
      try {
        let res = await this.axios.get(
          "/api/OfertasAcademicas/" + this.$route.params.idOfer
        );
        this.Oferta = res.data.Descripcion;
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
    this.getOfertaOne();
  },
  created() {
    this.$store.commit("loadOn");
    this.getOfertaOne();
  },
};
</script>