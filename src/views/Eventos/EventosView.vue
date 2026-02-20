<template>
  <div>
    <div class="page-title-area bg-overlay bg-overlay-img banner-img">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="breadcrumb-inner">
              <h2 class="page-title" style="color: #fff !important;">EVENTOS RECIENTES DE LA CARRERA</h2>
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
          <div v-if="searchGet" class="col-12 row justify-content-center">
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
                v-for="(ev, id_ev) of searchValues"
                :key="id_ev"
              >
                <div class="single-event-inner">
                  <div class="media">
                    <div class="media-left">
                      <!-- <i class="fa fa-users"></i> -->
                      <router-link :to="'/detalleEvento/' + ev.evento_id">
                        <img
                          :src="url_api + '/Eventos/' + ev.evento_imagen"
                          alt="img"
                          width="200"
                        />
                      </router-link>
                    </div>
                    <div class="details media-body align-self-center">
                      <div class="date">
                        <i class="fa fa-calendar"></i>
                        {{ dmy(ev.evento_fecha) }}
                      </div>
                      <p class="location">
                        <i class="fa fa-map-marker"></i>{{ ev.evento_lugar }}
                      </p>
                      <h5>
                        <router-link :to="'/detalleEvento/' + ev.evento_id">
                          {{ ev.evento_titulo }}
                        </router-link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 row justify-content-center" v-else>
            <div class="col-12" v-if="Eventos.length == 0">
              <h2>SIN EVENTOS</h2>
            </div>
            <div
              v-else
              class="col-lg-6 col-md-6 mb-4"
              v-for="(ev, id_ev) of Eventos"
              :key="id_ev"
            >
              <div class="single-event-inner">
                <div class="media">
                  <div class="media-left">
                    <!-- <i class="fa fa-users"></i> -->
                    <router-link :to="'/detalleEvento/' + ev.evento_id">
                      <img
                        :src="url_api + '/Eventos/' + ev.evento_imagen"
                        alt="img"
                        width="200"
                      />
                    </router-link>
                  </div>
                  <div class="details media-body align-self-center">
                    <div class="date">
                      <i class="fa fa-calendar"></i> {{ dmy(ev.evento_fecha) }}
                    </div>
                    <p class="location">
                      <i class="fa fa-map-marker"></i>{{ ev.evento_lugar }}
                    </p>
                    <h5>
                      <router-link :to="'/detalleEvento/' + ev.evento_id">
                        {{ ev.evento_titulo }}
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

<script>
import SidebarCustom from "@/components/SidebarCustom.vue";
import { mapState } from "vuex";
export default {
  name: "EventosView",
  data() {
    return {
      Eventos: [],
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
    async getEventosAll() {
      try {
        let res = await this.axios.get(
          "/api/eventoAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.Eventos = res.data;
        this.pager = this.Eventos.length / this.NUM_RESULTS;
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
        this.Eventos.forEach((evento) => {
          if (
            evento.evento_titulo
              .toUpperCase()
              .includes(this.search.toUpperCase())
          ) {
            this.searchValues.push(evento);
          }
        });
      } else {
        this.searchGet = false;
      }
    },
  },
  mounted() {
    this.$store.commit("loadOn");
    this.getEventosAll();
  },
  created() {
    this.$store.commit("loadOn");
    this.getEventosAll();
  },
};
</script>