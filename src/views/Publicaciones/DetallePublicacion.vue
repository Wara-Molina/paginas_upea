<template>
  <div>
    <div class="page-title-area bg-overlay bg-overlay-img banner-img">
      <div class="container">
        <div class="row">
          <div class="col-xl-7 col-lg-8">
            <div class="breadcrumb-inner">
              <h2 class="page-title" style="color: #fff !important;">
                {{ Publicaciones.publicaciones_titulo }}
              </h2>
              <ul class="page-list">
                <li>
                  <router-link to="/">INICIO</router-link>
                </li>
                <li>
                  <router-link to="/publicaciones">PUBLICACIONES</router-link>
                </li>
                <li>{{ Publicaciones.publicaciones_titulo }}</li>
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
            <h1>Publicación inexistente</h1>
          </div>
          <div class="col-lg-8 col-12" v-else>
            <div class="single-blog-inner mb-0">
              <div class="thumb">
                <a
                  :href="
                    url_api +
                    '/Publicaciones/' +
                    Publicaciones.publicaciones_imagen
                  "
                >
                  <img
                    :src="
                      url_api +
                      '/Publicaciones/' +
                      Publicaciones.publicaciones_imagen
                    "
                    alt="img"
                    style="cursor: zoom-in"
                  />
                </a>
              </div>
              <div class="details">
                <div class="blog-meta border-0 mt-0 pt-0">
                  <ul>
                    <li class="comnt bg-base">PUBLICACIONES</li>
                    <li class="author">
                      Por <span>{{ Publicaciones.publicaciones_autor }}</span>
                    </li>
                    <li class="date">
                      {{ dmy(Publicaciones.publicaciones_fecha) }}
                    </li>
                  </ul>
                </div>
                <h4 class="mb-0">{{ Publicaciones.publicaciones_titulo }}</h4>
              </div>
            </div>
            <div class="blog-content-inner">
              <p v-html="Publicaciones.publicaciones_descripcion"></p>
            </div>
          </div>
          <!-- sidebar -->
          <div class="col-lg-4 col-12">
            <div class="td-sidebar">
              <!-- <div class="widget widget_search">
                <form class="search-form">
                  <div class="form-group">
                    <input type="text" placeholder="Search" />
                  </div>
                  <button class="submit-btn" type="submit">
                    <i class="fa fa-search"></i>
                  </button>
                </form>
              </div> -->
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
export default {
  name: "detallePublicacion",
  data() {
    return {
      Publicaciones: {},
      errorGet: false,
    };
  },
  components: { SidebarCustom },
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
    async getPublicacion() {
      try {
        let res = await this.axios.get(
          "/api/publicaciones/" + this.$route.params.idPub
        );
        this.Publicaciones = res.data.Descripcion;
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
  },
  mounted() {
    this.getPublicacion();
  },
  created() {
    this.getPublicacion();
  },
};
</script>