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

              <div class="col-12 text-center" v-if="searchValues.length === 0">
                <h3>No se encontraron resultados para "{{ search }}"</h3>
                <button class="btn btn-base mt-3" @click="limpiarBusqueda">
                  Mostrar todas las gacetas
                </button>
              </div>

              <div v-else class="col-12 row justify-content-center">
                <div class="col-12">
                  <hr />
                  <p>{{ searchValues.length }} resultado(s) encontrado(s)</p>
                </div>
                <div
                  class="single-blog-inner col-12 col-lg-6"
                  v-for="(gac, index) of searchValues"
                  :key="gac.gaceta_id || index"
                >
                  <div class="thumb">
                    <router-link
                      :to="'/detalleGaceta/' + gac.gaceta_id"
                      @click="$store.commit('clickLink')"
                    >
                      <vue-pdf-embed
                        :source="imageUrl + gac.gaceta_documento"
                        :page="1"
                        :disableTextLayer="true"
                      />
                    </router-link>
                  </div>
                  <div class="details">
                    <div class="blog-meta">
                      <ul>
                        <li class="comnt bg-base">GACETA</li>
                        <li class="date">
                          <i class="fa fa-calendar"></i>
                          {{ formatearFecha(gac.gaceta_fecha) }}
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
                    <router-link
                      :to="'/detalleGaceta/' + gac.gaceta_id"
                      @click="$store.commit('clickLink')"
                      class="readmore-text"
                    >
                      Leer más
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="row justify-content-center">

              <div v-if="gacetas.length === 0" class="col-12 text-center">
                <h2>Sin gacetas disponibles</h2>
                <p class="text-muted">Pronto se agregarán nuevos documentos.</p>
              </div>
              <template v-else>
                <div
                  class="single-blog-inner col-12 col-lg-6"
                  v-for="(gac, index) of gacetas"
                  :key="gac.gaceta_id || index"
                  v-show="
                    (pag - 1) * NUM_RESULTS <= index &&
                    pag * NUM_RESULTS > index
                  "
                >
                  <div class="thumb">
                    <a
                      :href="imageUrl + gac.gaceta_documento"
                      target="_blank"
                    >
                      <vue-pdf-embed
                        :source="imageUrl + gac.gaceta_documento"
                        :page="1"
                        :disableTextLayer="true"
                      />
                    </a>
                  </div>
                  <div class="details">
                    <div class="blog-meta">
                      <ul>
                        <li class="comnt bg-base">GACETA</li>
                        <li class="date">
                          <i class="fa fa-calendar"></i>
                          {{ formatearFecha(gac.gaceta_fecha) }}
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
                    <router-link
                      :to="'/detalleGaceta/' + gac.gaceta_id"
                      @click="$store.commit('clickLink')"
                      class="readmore-text"
                    >
                      Leer más
                    </router-link>
                  </div>
                </div>

                <nav class="col-12 td-page-navigation text-center mb-5 mb-lg-0" v-if="pager > 1">
                  <ul class="pagination">
                    <li class="pagination-arrow disable">
                      <a
                        href="#"
                        aria-label="Previous"
                        @click.prevent="pag > 1 ? pag-- : null"
                      >
                        <i class="fa fa-angle-double-left"></i>
                      </a>
                    </li>
                    <li v-for="(i, index) of pager" :key="index">
                      <a
                        href="#"
                        :class="[i === pag ? 'active' : '']"
                        @click.prevent="pag = i"
                      >
                        {{ i }}
                      </a>
                    </li>
                    <li class="pagination-arrow">
                      <a
                        href="#"
                        aria-label="Next"
                        @click.prevent="pag < pager ? pag++ : null"
                      >
                        <i class="fa fa-angle-double-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </template>
            </div>
            
          </div>

          <div class="col-lg-4 col-12">
            <div class="td-sidebar">

              <div class="widget widget_search">
                <div class="search-form">
                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Buscar documento"
                      v-model="search"
                      @keyup.enter="buscar"
                    />
                  </div>
                  <button class="submit-btn" @click="buscar" type="button">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>

              <SidebarCustom></SidebarCustom>
            </div>
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

.search-form {
  display: flex;
  gap: 0.5rem;
}

.search-form input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.search-form input:focus {
  outline: none;
  border-color: var(--main-color-1, #007bff);
}

.submit-btn {
  padding: 0.75rem 1.5rem;
  background: var(--main-color-1, #007bff);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background: var(--main-color-2, #0056b3);
}

.vue-pdf-embed {
  width: 100%;
  height: 200px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  transition: box-shadow 0.3s ease;
}

.vue-pdf-embed:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.text-center h2,
.text-center h3 {
  color: #666;
  padding: 2rem;
}

.text-muted {
  color: #999;
}


.blog-meta .date {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>

<script>
import { mapState } from "vuex";
import SidebarCustom from "@/components/SidebarCustom.vue";
import VuePdfEmbed from "vue-pdf-embed";
import api from '@/plugins/axios' 

export default {
  name: "GacetaView",
  
  components: {
    SidebarCustom,
    VuePdfEmbed,
  },
  
  data() {
    return {

      idInstitucion: process.env.VUE_APP_ID_INSTITUCION || '22',

      gacetas: [],
      search: "",
      searchGet: false,
      searchValues: [],
      NUM_RESULTS: 4,
      pag: 1,
      pager: 0,

      loading: false
    };
  },
  
  computed: {
    ...mapState(["url_api", "Institucion"]),

    imageUrl() {
      return process.env.VUE_APP_UPLOADS_URL || 'https://servicioadministrador.upea.bo/uploads/'
    }
  },

  methods: {
    async getGacetaAll() {
      this.loading = true
      try {

        const res = await api.get(`/institucion/${this.idInstitucion}/gacetaEventos`)
        const data = res.data
        const lista = data.upea_gaceta_universitaria || []
        this.gacetas = lista
          .filter(gac => gac.gaceta_estado === "1" || gac.gaceta_estado === 1)
          .map(this._limpiarObjeto)

        this._actualizarPager()
        
      } catch (error) {
        console.error('Error cargando gacetas:', error)
        this.gacetas = []
      } finally {
        this.loading = false
        this.$store.commit("loading")
      }
    },

    _actualizarPager() {
      const total = this.gacetas?.length || 0
      this.pager = Math.ceil(total / this.NUM_RESULTS)
      if (this.pag > this.pager && this.pager > 0) {
        this.pag = this.pager
      }
    },

    buscar() {
      const query = this.search.trim().toUpperCase()
      
      if (query) {
        this.searchGet = true
        this.searchValues = this.gacetas.filter(gac => 
          gac.gaceta_titulo?.toUpperCase().includes(query)
        )
        this.pag = 1
      } else {
        this.limpiarBusqueda()
      }
    },
    limpiarBusqueda() {
      this.search = ""
      this.searchGet = false
      this.searchValues = []
      this.pag = 1
    },

    formatearFecha(fecha) {
      if (!fecha) return ''
      if (typeof fecha === 'string' && fecha.includes('de')) return fecha
      
      const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
      ]
      
      let fechaObj
      if (fecha.includes('T')) {
        fechaObj = new Date(fecha)
      } else {

        const partes = fecha.substr(0, 10).split("-")
        fechaObj = new Date(partes[0], parseInt(partes[1]) - 1, partes[2])
      }
      
      if (isNaN(fechaObj.getTime())) return fecha
      
      return `${fechaObj.getDate()} de ${meses[fechaObj.getMonth()]} de ${fechaObj.getFullYear()}`
    },
    _limpiarObjeto(obj) {
      if (!obj || typeof obj !== 'object') return obj
      const cleaned = { ...obj }
      Object.keys(cleaned).forEach(key => {
        if (typeof cleaned[key] === 'string') {
          cleaned[key] = cleaned[key].trim()
        } else if (cleaned[key] && typeof cleaned[key] === 'object' && !Array.isArray(cleaned[key])) {
          cleaned[key] = this._limpiarObjeto(cleaned[key])
        }
      })
      return cleaned
    },

    clickBack() {
      this.$store.commit("clickLink")
      this.$router.go(-1)
    }
  },

  created() {
    this.$store.commit("loadOn")
    this.getGacetaAll()
  },
  beforeUnmount() {
    this.limpiarBusqueda()
  }
};
</script>