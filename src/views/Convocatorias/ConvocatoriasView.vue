<template>
  <div>
    <div class="page-title-area bg-overlay bg-overlay-img banner-img">
      <div class="container">
        <div class="row">
          <div class="col-xl-7 col-lg-8">
            <div class="breadcrumb-inner">
              <h2 class="page-title" style="color: #fff !important;">{{ tipo }} VIGENTES EN LA CARRERA.</h2>
              <ul class="page-list">
                <li>
                  <router-link to="/">INICIO</router-link>
                </li>
                <li>{{ tipo }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="blog-area pd-top-120 pd-bottom-120">
      <div class="container">
        <div class="row">
          <div class="col-lg-8" v-if="searchGet">
            <h3 v-if="searchValues.length == 0">
              No se encontraron resultados.
            </h3>
            <div class="row justify-content-center" v-else>
              <div class="col-12">
                <p>{{ searchValues.length }} resultados</p>
                <hr />
              </div>
              <div
                class="single-blog-inner col-12 col-lg-6"
                v-for="(conv, id_conv) of searchValues"
                :key="id_conv"
              >
                <div class="thumb">
                  <router-link
                    :to="'/detalleConvocatoria/' + conv.idconvocatorias"
                    @click="$store.commit('clickLink')"
                  >
                    <img
                      :src="url_api + '/Convocatorias/' + conv.con_foto_portada"
                      alt="img"
                    />
                  </router-link>
                </div>
                <div class="details">
                  <div class="blog-meta">
                    <ul>
                      <li class="comnt bg-base">{{ tipo }}</li>
                      <!-- <li class="author">By <span>Adam Mortin</span></li> -->
                      <li class="date">
                        {{ dmy(conv.con_fecha_inicio) }} -
                        {{ dmy(conv.con_fecha_fin) }}
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <router-link
                      :to="'/detalleConvocatoria/' + conv.idconvocatorias"
                      @click="$store.commit('clickLink')"
                    >
                      {{ conv.con_titulo }}
                    </router-link>
                  </h4>
                  <!-- <p v-html="conv.con_descripcion"></p> -->
                  <router-link
                    :to="'/detalleConvocatoria/' + conv.idconvocatorias"
                    @click="$store.commit('clickLink')"
                    class="readmore-text"
                  >
                    Leer mas
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 row justify-content-center" v-else>
            <div
              v-if="Convocatorias.length == 0"
              class="col-12 justify-content-center"
            >
              <h2>SIN {{ tipo }}</h2>
            </div>
            <div
              v-else
              class="single-blog-inner col-12 col-lg-6"
              v-for="(conv, id_conv) of Convocatorias"
              :key="id_conv"
              v-show="
                (pag - 1) * NUM_RESULTS <= id_conv &&
                pag * NUM_RESULTS > id_conv
              "
            >
              <div class="thumb">
                <router-link
                  :to="'/detalleConvocatoria/' + conv.idconvocatorias"
                  @click="$store.commit('clickLink')"
                >
                  <img
                    :src="url_api + '/Convocatorias/' + conv.con_foto_portada"
                    alt="img"
                  />
                </router-link>
              </div>
              <div class="details">
                <div class="blog-meta">
                  <ul>
                    <li class="comnt bg-base">{{ tipo }}</li>
                    
                    <li class="date">
                      {{ dmy(conv.con_fecha_inicio) }} -
                      {{ dmy(conv.con_fecha_fin) }}
                    </li>
                  </ul>
                </div>
                <h4>
                  <router-link
                    :to="'/detalleConvocatoria/' + conv.idconvocatorias"
                    @click="$store.commit('clickLink')"
                  >
                    {{ conv.con_titulo }}
                  </router-link>
                </h4>
                <!-- <p v-html="conv.con_descripcion"></p> -->
                <router-link
                  :to="'/detalleConvocatoria/' + conv.idconvocatorias"
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
                  <!-- v-show="(pag * NUM_RESULTS) / Cursos.length < 1" -->
                </li>
              </ul>
            </nav>
          </div>
          <!-- <nav aria-label="Page navigation" class="text-center">
            <ul class="pagination text-center">
              <li>
                <a
                  href="#"
                  aria-label="Previous"
                  v-show="pag != 1"
                  @click.prevent="pag -= 1"
                >
                  <span aria-hidden="true">Anterior</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="Next"
                  v-show="(pag * NUM_RESULTS) / Convocatorias.length < 1"
                  @click.prevent="pag += 1"
                >
                  <span aria-hidden="true">Siguiente</span>
                </a>
              </li>
            </ul>
          </nav> -->

          <!-- sidebar -->
          <div class="col-lg-4 col-12">
            <div class="td-sidebar">
              <div class="widget widget_search">
                <div class="search-form">
                  <div class="form-group">
                    <input
                      type="text"
                      :placeholder="'Buscar ' + tipo.toLowerCase().slice(0, -1)"
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
  name: "convocatoriasView",
  data() {
    return {
      tipo: "",
      Convocatorias: [],
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
    async getTipoConv(tipo_conv) {
      try {
        let res = await this.axios.get("/api/Tipoconvocatorias/" + tipo_conv);
        this.tipo = res.data.Descripcion.tipo_conv_comun_titulo;
        this.getConvocatorias();
      } catch (error) {
        console.log(error);
      }
    },
    async getConvocatorias() {
      try {
        let res = await this.axios.get(
          "/api/convocatoriasAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Convocatorias = [];
        res.data.forEach((cca) => {
          if (
            cca.con_estado == "1" &&
            cca.tipo_conv_comun.tipo_conv_comun_titulo == this.tipo
          ) {
            this.Convocatorias.push(cca);
          }
        });
        this.pager = this.Convocatorias.length / this.NUM_RESULTS;
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
        this.Convocatorias.forEach((conv) => {
          if (
            conv.con_titulo.toUpperCase().includes(this.search.toUpperCase())
          ) {
            this.searchValues.push(conv);
          }
        });
      } else {
        this.searchGet = false;
      }
    },
  },
  mounted() {
    this.$store.commit("loadOn");
    this.getTipoConv(this.$route.params.tipo_conv);
  },
  updated() {
    if (this.getter) {
      this.$store.commit("loadOn");
      this.getTipoConv(this.$route.params.tipo_conv);
      this.$store.state.getter = false;
    }
  },
  created() {
    this.$store.commit("loadOn");
    this.getTipoConv(this.$route.params.tipo_conv);
  },
};
</script>