<template>
  <div>
    <div class="page-title-area bg-overlay bg-overlay-img banner-img">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="breadcrumb-inner">
              <h2 class="page-title" style="color: #fff !important;">EVENTOS ACONTECIDOS EN LA CARRERA</h2>
              <ul class="page-list">
                <li><router-link to="/">INICIO</router-link></li>
                <li>SERVICIOS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-team-area pd-top-90 pd-bottom-90">
      <div class="container">
        <div class="row">
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
          <div v-if="searchGet" class="col-12 pd-bottom-90">
            <div v-if="searchValues.length == 0">
              <h3>No se encontraron resultados</h3>
            </div>
            <div v-else class="row justify-content-center">
              <div class="col-12">
                <p>{{ searchValues.length }} resultados</p>
                <hr />
              </div>
              <div
                class="col-lg-6 col-md-6 mb-4"
                v-for="(serv, id_serv) of searchValues"
                :key="id_serv"
              >
                <div class="single-event-inner">
                  <div class="media">
                    <div class="media-left">
                      <router-link
                        :to="'/detalleServicio/' + serv.serv_id"
                        @click="$store.commit('clickLink')"
                      >
                        <img
                          :src="
                            url_api + '/Carrera/Servicios/' + serv.serv_imagen
                          "
                          alt="img"
                          width="300"
                        />
                      </router-link>
                    </div>
                    <div class="details media-body align-self-center">
                      <div class="date">
                        <i class="fa fa-calendar"></i>
                        {{ dmy(serv.serv_registro) }}
                      </div>
                      <p class="location">
                        <i class="fa fa-phone"></i>{{ serv.serv_nro_celular }}
                      </p>
                      <h5>
                        <router-link
                          :to="'/detalleServicio/' + serv.serv_id"
                          @click="$store.commit('clickLink')"
                        >
                          {{ serv.serv_nombre }}
                        </router-link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="col-12 row justify-content-center">
            <div v-if="Servicios.length == 0">
              <h1>NO HAY SERVICIOS</h1>
            </div>
            <div
              class="col-lg-6 col-md-6 mb-4"
              v-for="(serv, id_serv) of Servicios"
              :key="id_serv"
              v-show="
                (pag - 1) * NUM_RESULTS <= id_serv &&
                pag * NUM_RESULTS > id_serv
              "
            >
              <div class="single-event-inner">
                <div class="media">
                  <div class="media-left">
                    <router-link
                      :to="'/detalleServicio/' + serv.serv_id"
                      @click="$store.commit('clickLink')"
                    >
                      <img
                        :src="
                          url_api + '/Carrera/Servicios/' + serv.serv_imagen
                        "
                        alt="img"
                        width="300"
                      />
                    </router-link>
                  </div>
                  <div class="details media-body align-self-center">
                    <div class="date">
                      <i class="fa fa-calendar"></i>
                      {{ dmy(serv.serv_registro) }}
                    </div>
                    <p class="location">
                      <i class="fa fa-phone"></i>{{ serv.serv_nro_celular }}
                    </p>
                    <h5>
                      <router-link
                        :to="'/detalleServicio/' + serv.serv_id"
                        @click="$store.commit('clickLink')"
                      >
                        {{ serv.serv_nombre }}
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
  name: "ServiciosView",
  data() {
    return {
      Servicios: [],
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
    ...mapState(["url_api"]),
  },
  methods: {
    async getServiciosAll() {
      try {
        let res = await this.axios.get(
          "/api/ServicioAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Servicios = [];
        res.data.forEach((servicio) => {
          if (servicio.serv_active == "1") {
            this.Servicios.push(servicio);
          }
        });
        this.pager = this.Servicios.length / this.NUM_RESULTS;
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
        this.Servicios.forEach((serv) => {
          if (
            serv.serv_nombre.toUpperCase().includes(this.search.toUpperCase())
          ) {
            this.searchValues.push(serv);
          }
        });
      } else {
        this.searchGet = false;
      }
    },
  },
  mounted() {
    this.$store.commit("loadOn");
    this.getServiciosAll();
  },
  created() {
    this.$store.commit("loadOn");
    this.getServiciosAll();
  },
};
</script>