<template>
  <div>
    <div class="page-title-area bg-overlay bg-overlay-img banner-img">
      <div class="container">
        <div class="row">
          <div class="col-xl-7 col-lg-8">
            <div class="breadcrumb-inner">
              <h2 class="page-title" style="color: #fff !important;">
                {{ Gaceta.gaceta_titulo }}
              </h2>
              <ul class="page-list">
                <li>
                  <router-link to="/">INICIO</router-link>
                </li>
                <li>
                  <a style="cursor: pointer" @click="clickBack()">GACETA</a>
                </li>
                <li>{{ Gaceta.gaceta_titulo }}</li>
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
            <h1>Documento inexistente</h1>
          </div>
          <div class="col-lg-8 col-12" v-else>
            <div class="single-blog-inner mb-0">
              <div class="thumb">
                <!-- <iframe
                  :src="url_api + '/Gaceta/' + Gaceta.gaceta_documento"
                  frameborder="0"
                  width="100%"
                  height="700px"
                  id="frame-pdf"
                ></iframe> -->
                <a :href="url_api + '/Gaceta/' + Gaceta.gaceta_documento" target="_blank">
                  <vue-pdf-embed
                    :source="url_api + '/Gaceta/' + Gaceta.gaceta_documento"
                    :disableTextLayer="true"
                  />
                </a>
              </div>
              <div class="details">
                <div class="blog-meta border-0 mt-0 pt-0">
                  <ul>
                    <li class="comnt bg-base">Gaceta</li>
                    <li class="date">
                      {{ dmy(Gaceta.gaceta_fecha) }}
                    </li>
                  </ul>
                </div>
                <h4 class="mb-0">{{ Gaceta.gaceta_titulo }}</h4>
              </div>
            </div>
          </div>
          <!-- sidebar -->
          <div class="col-lg-4 col-12">
            <div class="td-sidebar">
              <SidebarCustom></SidebarCustom>
            </div>
          </div>
          <!-- /.sidebar -->
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
import VuePdfEmbed from "vue-pdf-embed";
export default {
  name: "detalleGaceta",
  data() {
    return {
      Gaceta: {},
      errorGet: false,
    };
  },
  components: { SidebarCustom, VuePdfEmbed },
  computed: {
    ...mapState(["url_api"]),
  },
  methods: {
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
    async getGaceta() {
      try {
        let res = await this.axios.get(
          "/api/gacetauniv/" + this.$route.params.idGac
        );
        this.Gaceta = res.data.Descripcion;
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
        if (error.response.status == 500) {
          this.errorGet = true;
          this.$store.commit("loading");
        }
      }
    },
    clickBack() {
      this.$store.commit("clickLink");
      this.$router.go(-1);
    },
    setPdf() {
      // :src="url_api + '/Gaceta/' + Gaceta.gaceta_documento"
      let pdf = document.getElementById("frame-pdf");
      pdf.setAttribute(
        "src",
        this.url_api + "/Gaceta/" + this.Gaceta.gaceta_documento
      );
    },
  },
  mounted() {
    this.getGaceta();
  },
  created() {
    this.getGaceta();
  },
};
</script>