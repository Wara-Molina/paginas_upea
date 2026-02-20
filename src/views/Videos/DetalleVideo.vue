<template>
  <div>
    <div class="page-title-area bg-overlay bg-overlay-img banner-img">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="breadcrumb-inner">
              <h2 class="page-title" style="color: #fff !important;">TITULO</h2>
              <ul class="page-list">
                <li>
                  <router-link to="/">INICIO</router-link>
                </li>
                <li>
                  <router-link to="/videos">VIDEOS</router-link>
                </li>
                <li>{{ Video.video_titulo }}</li>
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
            <h1>Video inexistente</h1>
          </div>
          <div class="col-lg-8 col-12" v-else>
            <div class="single-blog-inner mb-0">
              <div class="thumb">
                <iframe
                  :src="Video.video_enlace"
                  style="width: 100%; aspect-ratio: 16/9; border-radius: 10px"
                  frameborder="0"
                  allowfullscreen="allowfullscreen"
                />
              </div>
              <div class="details">
                <div class="blog-meta border-0 mt-0 pt-0">
                  <ul>
                    <li class="comnt bg-base">VIDEOS</li>
                  </ul>
                </div>
                <h4 class="mb-0">{{ Video.video_titulo }}</h4>
              </div>
            </div>
            <div class="blog-content-inner">
              <p v-html="Video.video_breve_descripcion"></p>
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

<script>
import { mapState } from "vuex";
import SidebarCustom from "@/components/SidebarCustom.vue";
export default {
  name: "detalleVideo",
  data() {
    return {
      Video: {},
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
    async getVideoOne() {
      try {
        let res = await this.axios.get(
          "/api/Videos/" + this.$route.params.idVid
        );
        this.Video = res.data.Descripcion;
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
    this.getVideoOne();
  },
  created() {
    this.$store.commit("loadOn");
    this.getVideoOne();
  },
};
</script>