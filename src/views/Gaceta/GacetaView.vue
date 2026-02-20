<template>
  <div>
    <div class="page-title-area bg-overlay bg-overlay-img banner-img">
      <div class="container">
        <div class="row">
          <div class="col-xl-7 col-lg-8">
            <div class="breadcrumb-inner">
              <h2 class="page-title" style="color: #fff !important;">
                DOCUMENTOS EXISTENTES EN LA GACETA DE LA CARRERA
              </h2>
              <ul class="page-list">
                <li>
                  <router-link to="/">INICIO</router-link>
                </li>
                <li>GACETA</li>
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
            <div v-if="searchGet" class="row">
              <div class="col-12" v-if="searchValues.length == 0">
                <h3>No se encontraron resultados</h3>
              </div>
              <div v-else class="col-12 row justify-content-center">
                <div class="col-12">
                  <hr />
                  <p>{{ searchValues.length }} resultados</p>
                </div>
                <div
                  class="single-blog-inner col-12 col-lg-6"
                  v-for="(gac, id_gac) of searchValues"
                  :key="id_gac"
                >
                  <div class="thumb">
                    <router-link
                      :to="'/detalleGaceta/' + gac.gaceta_id"
                      @click="$store.commit('clickLink')"
                    >
                      <vue-pdf-embed
                        :source="url_api + '/Gaceta/' + gac.gaceta_documento"
                        :page="1"
                      />
                    </router-link>
                  </div>
                  <div class="details">
                    <div class="blog-meta">
                      <ul>
                        <li class="comnt bg-base">Gaceta</li>
                        <!-- <li class="author">By <span>Adam Mortin</span></li> -->
                        <li class="date">
                          {{ dmy(gac.gaceta_fecha) }}
                        </li>
                      </ul>
                    </div>
                    <h4>
                      <router-link
                        :to="'/detalleGaceta/' + gac.gaceta_id"
                        @click="$store.commit('clickLink')"
                      >
                        {{ gac.gaceta_titulo }}
                      </router-link>
                    </h4>
                    <!-- <p v-html="conv.con_descripcion"></p> -->
                    <router-link
                      :to="'/detalleGaceta/' + gac.gaceta_id"
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
              <div v-if="Gaceta.length == 0">
                <h2>SIN GACETA</h2>
              </div>
              <div
                v-else
                class="single-blog-inner col-12 col-lg-6"
                v-for="(gac, id_gac) of Gaceta"
                :key="id_gac"
              >
                <div class="thumb">
                  <a
                    :href="url_api + '/Gaceta/' + gac.gaceta_documento"
                    target="_blank"
                  >
                    <vue-pdf-embed
                      :source="url_api + '/Gaceta/' + gac.gaceta_documento"
                      :page="1"
                      :disableTextLayer="true"
                    />
                  </a>
                </div>
                <div class="details">
                  <div class="blog-meta">
                    <ul>
                      <li class="comnt bg-base">Gaceta</li>
                      <!-- <li class="author">By <span>Adam Mortin</span></li> -->
                      <li class="date">
                        {{ dmy(gac.gaceta_fecha) }}
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <router-link
                      :to="'/detalleGaceta/' + gac.gaceta_id"
                      @click="$store.commit('clickLink')"
                    >
                      {{ gac.gaceta_titulo }}
                    </router-link>
                  </h4>
                  <!-- <p v-html="conv.con_descripcion"></p> -->
                  <router-link
                    :to="'/detalleGaceta/' + gac.gaceta_id"
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
                      placeholder="Buscar documento"
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
import VuePdfEmbed from "vue-pdf-embed";
export default {
  name: "GacetaView",
  data() {
    return {
      Gaceta: [],
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
    VuePdfEmbed,
  },
  computed: {
    ...mapState(["url_api", "getter"]),
  },
  methods: {
    async getGacetaAll() {
      try {
        let res = await this.axios.get(
          "/api/gacetaunivAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.Gaceta = [];
        res.data.forEach((gaceta) => {
          if (gaceta.gaceta_estado == "1") {
            this.Gaceta.push(gaceta);
          }
        });
        this.pager = this.Gaceta.length / this.NUM_RESULTS;
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
        this.Gaceta.forEach((gac) => {
          if (
            gac.gaceta_titulo.toUpperCase().includes(this.search.toUpperCase())
          ) {
            this.searchValues.push(gac);
          }
        });
      } else {
        this.searchGet = false;
      }
    },
  },
  mounted() {
    this.$store.commit("loadOn");
    this.getGacetaAll();
  },
  created() {
    this.$store.commit("loadOn");
    this.getGacetaAll();
  },
};
</script>