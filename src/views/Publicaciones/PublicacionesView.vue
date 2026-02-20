<template>
  <div>
    <div class="page-title-area bg-overlay bg-overlay-img banner-img">
      <div class="container">
        <div class="row">
          <div class="col-xl-7 col-lg-8">
            <div class="breadcrumb-inner">
              <h2 class="page-title" style="color: #fff !important;">PUBLICACIONES ACTUALES DE LA CARRERA</h2>
              <ul class="page-list">
                <li>
                  <router-link to="/">INICIO</router-link>
                </li>
                <li>PUBLICACIONES</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="blog-area pd-top-120 pd-bottom-120">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-12">
            <div v-if="searchGet">
              <div v-if="searchValues.length == 0">
                <h3>No se encontraron resultados</h3>
              </div>
              <div v-else class="row justify-content-center">
                <div class="col-12">
                  <p>{{ searchValues.length }} resultados</p>
                  <hr />
                </div>
                <div
                  class="single-blog-inner col-12 col-lg-6"
                  v-for="(pub, id_pub) of searchValues"
                  :key="id_pub"
                >
                  <div class="thumb">
                    <router-link
                      :to="'/detallePublicacion/' + pub.publicaciones_id"
                      @click="$store.commit('clickLink')"
                    >
                      <img
                        :src="
                          url_api + '/Publicaciones/' + pub.publicaciones_imagen
                        "
                        alt="img"
                      />
                    </router-link>
                  </div>
                  <div class="details">
                    <div class="blog-meta">
                      <ul>
                        <li class="comnt bg-base">PUBLICACIONES</li>
                        <li class="author">
                          Por <span>{{ pub.publicaciones_autor }}</span>
                        </li>
                        <li class="date">
                          {{ dmy(pub.publicaciones_fecha) }}
                        </li>
                      </ul>
                    </div>
                    <h4>
                      <router-link
                        :to="'/detallePublicacion/' + pub.publicaciones_id"
                        @click="$store.commit('clickLink')"
                      >
                        {{ pub.publicaciones_titulo }}
                      </router-link>
                    </h4>
                    <!-- <p v-html="conv.con_descripcion"></p> -->
                    <router-link
                      :to="'/detallePublicacion/' + pub.idPublicaciones"
                      @click="$store.commit('clickLink')"
                      class="readmore-text"
                    >
                      Leer mas
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="row justify-content-center">
              <div v-if="Publicaciones.length == 0">
                <h2>SIN PUBLICACIONES</h2>
              </div>
              <div
                v-else
                class="single-blog-inner col-12 col-lg-6"
                v-for="(pub, id_pub) of Publicaciones"
                :key="id_pub"
              >
                <div class="thumb">
                  <router-link
                    :to="'/detallePublicacion/' + pub.publicaciones_id"
                    @click="$store.commit('clickLink')"
                  >
                    <img
                      :src="
                        url_api + '/Publicaciones/' + pub.publicaciones_imagen
                      "
                      alt="img"
                    />
                  </router-link>
                </div>
                <div class="details">
                  <div class="blog-meta">
                    <ul>
                      <li class="comnt bg-base">PUBLICACIONES</li>
                      <li class="author">
                        Por <span>{{ pub.publicaciones_autor }}</span>
                      </li>
                      <li class="date">
                        {{ dmy(pub.publicaciones_fecha) }}
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <router-link
                      :to="'/detallePublicacion/' + pub.publicaciones_id"
                      @click="$store.commit('clickLink')"
                    >
                      {{ pub.publicaciones_titulo }}
                    </router-link>
                  </h4>
                  <!-- <p v-html="conv.con_descripcion"></p> -->
                  <router-link
                    :to="'/detallePublicacion/' + pub.publicaciones_id"
                    @click="$store.commit('clickLink')"
                    class="readmore-text"
                  >
                    Leer mas
                  </router-link>
                </div>
              </div>
              <nav class="col-12 td-page-navigation text-center mb-5 mb-lg-0">
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
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <!-- sidebar -->
          <div class="col-lg-4 col-12">
            <div class="td-sidebar">
              <div class="widget widget_search">
                <div class="search-form">
                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Buscar publicacion"
                      v-model="search"
                      @keyup="buscar()"
                    />
                  </div>
                  <button class="submit-btn" @click="buscar()">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
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
  name: "PublicacionesView",
  data() {
    return {
      Publicaciones: [],
      search: "",
      searchGet: false,
      searchValues: [],

      NUM_RESULTS: 4,
      pag: 1,
      pager: 0,
    };
  },
  components: {
    SidebarCustom,
  },
  computed: {
    ...mapState(["url_api", "getter"]),
  },
  methods: {
    async getPublicaciones() {
      try {
        let res = await this.axios.get(
          "/api/PublicacionesAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.Publicaciones = res.data;
        this.pager = this.Publicaciones.length / this.NUM_RESULTS;
        if (this.pager - Math.trunc(this.pager) > 0) {
          this.pager = Math.trunc(this.pager) + 1;
        }
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
      }
    },
    clickBack() {
      this.$store.commit("clickLink");
      this.$router.go(-1);
    },
    dmy(fecha) {
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
    },
    buscar() {
      if (this.search != "") {
        this.searchGet = true;

        this.searchValues = [];
        this.Publicaciones.forEach((pub) => {
          if (
            pub.publicaciones_titulo
              .toUpperCase()
              .includes(this.search.toUpperCase())
          ) {
            this.searchValues.push(pub);
          }
        });
      } else {
        this.searchGet = false;
      }
    },
  },
  mounted() {
    this.$store.commit("loadOn");
    this.getPublicaciones();
  },
  created() {
    this.$store.commit("loadOn");
    this.getPublicaciones();
  },
};
</script>