<template>
  <div>
    <div class="page-title-area bg-overlay bg-overlay-img banner-img">
      <div class="container">
        <div class="row">
          <div class="col-xl-7 col-lg-8">
            <div class="breadcrumb-inner">
              <h2 class="page-title" style="color: #fff !important;">
                {{ tipo }} VIGENTES EN LA CARRERA
              </h2>
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

          <div class="col-lg-8">
            <div v-if="searchGet">

              <h3 v-if="searchValues.length === 0" class="text-center">
                 No se encontraron resultados para "{{ search }}"
              </h3>

              <div v-else class="row justify-content-center">
                <div class="col-12">
                  <p>{{ searchValues.length }} resultado(s) encontrado(s)</p>
                  <hr />
                </div>
                
                <template v-for="(conv, index) of searchValues" :key="conv.idconvocatorias || index">
                  <div class="single-blog-inner col-12 col-lg-6">
                    <div class="thumb">
                      <router-link
                        :to="'/detalleConvocatoria/' + conv.idconvocatorias"
                        @click="$store.commit('clickLink')"
                      >
                        <img
                          :src="imageUrl + conv.con_foto_portada"
                          :alt="conv.con_titulo"
                          loading="lazy"
                        />
                      </router-link>
                    </div>
                    <div class="details">
                      <div class="blog-meta">
                        <ul>
                          <li class="comnt bg-base">{{ tipo }}</li>
                          <li class="date">
                            <i class="fa fa-calendar"></i>
                            {{ formatearFecha(conv.con_fecha_inicio) }} -
                            {{ formatearFecha(conv.con_fecha_fin) }}
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
                      <router-link
                        :to="'/detalleConvocatoria/' + conv.idconvocatorias"
                        @click="$store.commit('clickLink')"
                        class="readmore-text"
                      >
                        Leer más
                      </router-link>
                    </div>
                  </div>
                </template>
              </div>
            </div>
            <div v-else class="row justify-content-center">

              <div v-if="convocatorias.length === 0" class="col-12 text-center">
                <h2>Sin {{ tipo.toLowerCase() }} disponibles</h2>
                <p class="text-muted">Pronto se agregarán nuevas {{ tipo.toLowerCase() }}.</p>
              </div>
              <div v-else class="col-12 row justify-content-center">
                
                <template v-for="(conv, index) of convocatorias" :key="conv.idconvocatorias || index">
                  <div
                    class="single-blog-inner col-12 col-lg-6"
                    v-show="
                      (pag - 1) * NUM_RESULTS <= index &&
                      pag * NUM_RESULTS > index
                    "
                  >
                    <div class="thumb">
                      <router-link
                        :to="'/detalleConvocatoria/' + conv.idconvocatorias"
                        @click="$store.commit('clickLink')"
                      >
                        <img
                          :src="imageUrl + conv.con_foto_portada"
                          :alt="conv.con_titulo"
                          loading="lazy"
                        />
                      </router-link>
                    </div>
                    <div class="details">
                      <div class="blog-meta">
                        <ul>
                          <li class="comnt bg-base">{{ tipo }}</li>
                          <li class="date">
                            <i class="fa fa-calendar"></i>
                            {{ formatearFecha(conv.con_fecha_inicio) }} -
                            {{ formatearFecha(conv.con_fecha_fin) }}
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
                      <router-link
                        :to="'/detalleConvocatoria/' + conv.idconvocatorias"
                        @click="$store.commit('clickLink')"
                        class="readmore-text"
                      >
                        Leer más
                      </router-link>
                    </div>
                  </div>
                </template>
                
                <!-- Paginación -->
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
              </div>
            </div>
            
          </div>

          <div class="col-lg-4 col-12">
            <div class="td-sidebar">
              
              <!-- Barra de búsqueda -->
              <div class="widget widget_search">
                <div class="search-form">
                  <div class="form-group">
                    <input
                      type="text"
                      :placeholder="'Buscar ' + tipo.toLowerCase().slice(0, -1)"
                      v-model="search"
                      @keyup.enter="buscar"
                    />
                  </div>
                  <button class="submit-btn" @click="buscar" type="button">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
              
              <!-- Sidebar personalizado -->
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

.single-blog-inner img {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 4px;
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.single-blog-inner img:hover {
  transform: scale(1.02);
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
  flex-wrap: wrap;
}
</style>

<script>
import SidebarCustom from "@/components/SidebarCustom.vue";
import { mapState } from "vuex";
import api from '@/plugins/axios' 

export default {
  name: "ConvocatoriasView",
  
  components: {
    SidebarCustom,
  },
  
  data() {
    return {
      idInstitucion: process.env.VUE_APP_ID_INSTITUCION || '22',
      tipo: "",
      convocatorias: [],
      tipoConvocatoriaId: null,
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

  watch: {
    '$route.params.tipo_conv': {
      immediate: true,
      handler(nuevoTipo) {
        if (nuevoTipo) {
          this.cargarDatos(nuevoTipo)
        }
      }
    }
  },

  methods: {
    async cargarDatos(tipoConvId) {
      this.loading = true
      try {
        await this.getTipoConv(tipoConvId)
        await this.getConvocatorias()
      } catch (error) {
        console.error('Error cargando datos:', error)
      } finally {
        this.loading = false
        this.$store.commit("loading")
      }
    },

    async getTipoConv(tipo_conv) {
      try {
        const res = await api.get(`/institucion/${this.idInstitucion}/gacetaEventos`)
        const data = res.data

        const convocatorias = data.convocatorias || []
        const tiposUnicos = {}
        
        convocatorias.forEach(conv => {
          const tipo = conv.tipo_conv_comun?.tipo_conv_comun_titulo
          if (tipo && !tiposUnicos[tipo]) {
            tiposUnicos[tipo] = conv.tipo_conv_comun
          }
        })

        const tipoEncontrado = Object.values(tiposUnicos).find(
          t => t.idtipo_conv_comun == tipo_conv || t.tipo_conv_comun_titulo?.toUpperCase() === tipo_conv.toUpperCase()
        )
        
        if (tipoEncontrado) {
          this.tipo = tipoEncontrado.tipo_conv_comun_titulo
          this.tipoConvocatoriaId = tipo_conv
        } else {
          this.tipo = tipo_conv.toUpperCase()
          this.tipoConvocatoriaId = tipo_conv
        }
        
      } catch (error) {
        console.error('Error cargando tipo de convocatoria:', error)
        this.tipo = tipo_conv.toUpperCase()
      }
    },

    async getConvocatorias() {
      try {
        const res = await api.get(`/institucion/${this.idInstitucion}/gacetaEventos`)
        const data = res.data

        const lista = data.convocatorias || []

        this.convocatorias = lista
          .filter(conv => conv.con_estado === "1" || conv.con_estado === 1)
          .filter(conv => {
            if (this.tipoConvocatoriaId) {
              const tipoNombre = conv.tipo_conv_comun?.tipo_conv_comun_titulo
              const tipoId = conv.tipo_conv_comun?.idtipo_conv_comun
              return tipoNombre === this.tipo || tipoId == this.tipoConvocatoriaId
            }
            return true
          })
          .map(this._limpiarObjeto)

        this._actualizarPager()
        
      } catch (error) {
        console.error('Error cargando convocatorias:', error)
        this.convocatorias = []
      }
    },

    _actualizarPager() {
      const total = this.convocatorias?.length || 0
      this.pager = Math.ceil(total / this.NUM_RESULTS)

      if (this.pag > this.pager && this.pager > 0) {
        this.pag = this.pager
      }
    },


    buscar() {
      const query = this.search.trim().toUpperCase()
      
      if (query) {
        this.searchGet = true
        this.searchValues = this.convocatorias.filter(conv => 
          conv.con_titulo?.toUpperCase().includes(query) ||
          conv.con_descripcion?.toUpperCase().includes(query)
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
    if (this.$route.params.tipo_conv) {
      this.cargarDatos(this.$route.params.tipo_conv)
    }
  },

  beforeUnmount() {
    this.limpiarBusqueda()
    this.convocatorias = []
    this.tipo = ""
  }
};
</script>