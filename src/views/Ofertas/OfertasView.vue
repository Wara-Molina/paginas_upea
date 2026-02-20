<template>
  <div>
    <div class="page-title-area bg-overlay bg-overlay-img banner-img">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="breadcrumb-inner">
              <h2 class="page-title" style="color: #fff !important;">
                OFERTAS ACADÉMICAS QUE DISPONE ACTUALMENTE LA CARRERA
              </h2>
              <ul class="page-list">
                <li><router-link to="/">INICIO</router-link></li>
                <li>OFERTAS ACADÉMICAS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-team-area pd-top-120 pd-bottom-120">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-12"></div>
          <div class="col-lg-4 col-12">
            <div class="td-sidebar">
              <div class="widget widget_search">
                <div class="search-form">
                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Buscar servicio"
                      v-model="search"
                      @keyup="buscar()"
                    />
                  </div>
                  <button class="submit-btn" @click="buscar()">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 row" v-if="searchGet">
            <div class="col-12" v-if="searchValues == 0">
              <h3>No se encontraron resultados</h3>
            </div>
            <div v-else class="col-12 row justify-content-center">
              <div class="col-12">
                <p>{{ searchValues.length }} resultados</p>
                <hr />
              </div>
              <div
                class="col-lg-6 col-md-6 mb-4"
                v-for="(ofer, id_ofer) of searchValues"
                :key="id_ofer"
              >
                <div class="single-event-inner">
                  <div class="media">
                    <div class="media-left">
                      <router-link
                        :to="'/detalleOferta/' + ofer.ofertas_id"
                        @click="$store.commit('clickLink')"
                      >
                        <img
                          :src="
                            url_api +
                            '/Carrera/OfertasAcademicas/' +
                            ofer.ofertas_imagen
                          "
                          alt="img"
                          width="200"
                        />
                      </router-link>
                    </div>
                    <div class="details media-body align-self-center">
                      <div class="date">
                        <i class="fa fa-calendar"></i>
                        Inscripciones hasta el
                        {{ dmy(ofer.ofertas_inscripciones_fin) }}
                      </div>
                      <h5>
                        <router-link
                          :to="'/detalleOferta/' + ofer.ofertas_id"
                          @click="$store.commit('clickLink')"
                        >
                          {{ ofer.ofertas_titulo }}
                        </router-link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 row justify-content-center" v-else>
            <div v-if="Ofertas.length == 0">
              <h1>NO HAY OFERTAS ACADÉMICAS</h1>
            </div>
            <div
              class="col-lg-6 col-md-6 mb-4"
              v-for="(ofer, id_ofer) of Ofertas"
              :key="id_ofer"
            >
              <div class="single-event-inner">
                <div class="media">
                  <div class="media-left">
                    <router-link
                      :to="'/detalleOferta/' + ofer.ofertas_id"
                      @click="$store.commit('clickLink')"
                    >
                      <img
                        :src="
                          url_api +
                          '/Carrera/OfertasAcademicas/' +
                          ofer.ofertas_imagen
                        "
                        alt="img"
                        width="200"
                      />
                    </router-link>
                  </div>
                  <div class="details media-body align-self-center">
                    <div class="date">
                      <i class="fa fa-calendar"></i>
                      Inscripciones hasta el
                      {{ dmy(ofer.ofertas_inscripciones_fin) }}
                    </div>
                    <h5>
                      <router-link
                        :to="'/detalleOferta/' + ofer.ofertas_id"
                        @click="$store.commit('clickLink')"
                      >
                        {{ ofer.ofertas_titulo }}
                      </router-link>
                    </h5>
                  </div>
                </div>
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
          <div class="col-12">
            <hr />
            <SidebarCustom></SidebarCustom>
          </div>
          <!-- <nav class="td-page-navigation mb-5 mb-lg-0">
            <ul class="pagination">
              <li class="pagination-arrow">
                <a href="#"><i class="fa fa-angle-double-left"></i></a>
              </li>
              <li><a href="#">1</a></li>
              <li><a class="active" href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li class="pagination-arrow">
                <a href="#"><i class="fa fa-angle-double-right"></i></a>
              </li>
            </ul>
          </nav> -->
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
import SidebarCustom from "@/components/SidebarCustom.vue";
import { mapState } from "vuex";
export default {
  name: "OfertasView",
  data() {
    return {
      Ofertas: [],
      search: "",
      searchGet: false,
      searchValues: [],

      NUM_RESULTS: 4,
      pag: 1,
      pager: 0,
    };
  },
  computed: {
    ...mapState(["url_api"]),
  },
  components: {
    SidebarCustom,
  },
  methods: {
    async getOfertasAll() {
      try {
        let res = await this.axios.get(
          "/api/OfertasAcademicasAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Ofertas = res.data;
        this.pager = this.Ofertas.length / this.NUM_RESULTS;
        if (this.pager - Math.trunc(this.pager) > 0) {
          this.pager = Math.trunc(this.pager) + 1;
        }
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
      }
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
        meses[parseInt(fechaArray[1]) - 1] +
        " de " +
        fechaArray[0]
      );
    },
    buscar() {
      if (this.search != "") {
        this.searchGet = true;

        this.searchValues = [];
        this.Ofertas.forEach((ofer) => {
          if (
            ofer.ofertas_titulo
              .toUpperCase()
              .includes(this.search.toUpperCase())
          ) {
            this.searchValues.push(ofer);
          }
        });
      } else {
        this.searchGet = false;
      }
    },
  },
  mounted() {
    this.$store.commit("loadOn");
    this.getOfertasAll();
  },
  created() {
    this.$store.commit("loadOn");
    this.getOfertasAll();
  },
};
</script>