<template>
  <div>
    <div class="page-title-area bg-overlay bg-overlay-img banner-img">
      <div class="container">
        <div class="row">
          <div class="col-xl-7 col-lg-8">
            <div class="breadcrumb-inner">
              <h2 class="page-title" style="color: #fff !important;">{{ tipo }} ABIERTOS EN LA CARRERA.</h2>
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

    <div class="course-area pd-top-120 pd-bottom-120">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-12">
            <div v-if="searchGet">
              <h3 v-if="searchValues.length == 0">
                No se encontraron resultados.
              </h3>
              <div v-else class="row justify-content-center">
                <div class="col-12">
                  <p>{{ searchValues.length }} resultados</p>
                  <hr />
                </div>
                <div
                  class="col-12 col-lg-6"
                  v-for="(cur, id_cur) of searchValues"
                  :key="id_cur"
                >
                  <div class="single-course-inner">
                    <div class="thumb">
                      <router-link
                        :to="'/detalleCurso/' + cur.iddetalle_cursos_academicos"
                        @click="$store.commit('clickLink')"
                      >
                        <img
                          :src="url_api + '/Cursos/' + cur.det_img_portada"
                          alt="img"
                        />
                      </router-link>
                      <div class="cat-area">
                        <a class="cat bg-base-2" href="course.html">{{
                          cur.tipo_curso_otro.tipo_conv_curso_nombre
                        }}</a>
                      </div>
                    </div>
                    <div class="details">
                      <span class="price">{{ cur.det_costo }}bs</span>
                      <p class="status">
                        <i class="fa fa-clock-o"></i>
                        <b>{{ cur.det_carga_horaria }}</b> hrs academicas.
                      </p>
                      <div class="details-inner">
                        <h5>
                          <a href="course-single.html">{{ cur.det_titulo }}</a>
                        </h5>
                        <div
                          class="author media"
                          v-for="(fac, id_fac) of cur.facilitadores"
                          :key="id_fac"
                        >
                          <div class="media-left">
                            <img
                              :src="url_api + '/Cursos/' + fac.foto_facilitador"
                              alt="img"
                            />
                          </div>
                          <div class="media-body align-self-center">
                            <p>{{ fac.nombre_facilitador }}</p>
                          </div>
                        </div>
                      </div>
                      <div class="bottom-area">
                        <div class="row">
                          <div class="col-6 align-self-center">
                            <div class="rating-inner">
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                            </div>
                          </div>
                          <div class="col-6 align-self-center text-right">
                            <router-link
                              :to="
                                '/detalleCurso/' +
                                cur.iddetalle_cursos_academicos
                              "
                              @click="$store.commit('clickLink')"
                              class="readmore-text"
                            >
                              Leer mas
                            </router-link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="row">
              <div v-if="Cursos.length == 0" class="justify-content-center">
                <h2 class="aligncenter">SIN {{ tipo }}</h2>
              </div>
              <div v-else class="row justify-content-center">
                <div
                  class="col-12 col-lg-6"
                  v-for="(cur, id_cur) of Cursos"
                  :key="id_cur"
                  v-show="
                    (pag - 1) * NUM_RESULTS <= id_cur &&
                    pag * NUM_RESULTS > id_cur
                  "
                >
                  <div class="single-course-inner">
                    <div class="thumb">
                      <router-link
                        :to="'/detalleCurso/' + cur.iddetalle_cursos_academicos"
                        @click="$store.commit('clickLink')"
                      >
                        <img
                          :src="url_api + '/Cursos/' + cur.det_img_portada"
                          alt="img"
                        />
                      </router-link>
                      <div class="cat-area">
                        <a class="cat bg-base-2" href="course.html">{{
                          cur.tipo_curso_otro.tipo_conv_curso_nombre
                        }}</a>
                      </div>
                    </div>
                    <div class="details">
                      <span class="price">{{ cur.det_costo }}bs</span>
                      <p class="status">
                        <i class="fa fa-clock-o"></i>
                        <b>{{ cur.det_carga_horaria }}</b> hrs academicas.
                      </p>
                      <div class="details-inner">
                        <h5>
                          <a href="course-single.html">{{ cur.det_titulo }}</a>
                        </h5>
                        <div
                          class="author media"
                          v-for="(fac, id_fac) of cur.facilitadores"
                          :key="id_fac"
                        >
                          <div class="media-left">
                            <img
                              :src="url_api + '/Cursos/' + fac.foto_facilitador"
                              alt="img"
                            />
                          </div>
                          <div class="media-body align-self-center">
                            <p>{{ fac.nombre_facilitador }}</p>
                          </div>
                        </div>
                      </div>
                      <div class="bottom-area">
                        <div class="row">
                          <div class="col-6 align-self-center">
                            <div class="rating-inner">
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                            </div>
                          </div>
                          <div class="col-6 align-self-center text-right">
                            <router-link
                              :to="
                                '/detalleCurso/' +
                                cur.iddetalle_cursos_academicos
                              "
                              @click="$store.commit('clickLink')"
                              class="readmore-text"
                            >
                              Leer mas
                            </router-link>
                          </div>
                        </div>
                      </div>
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
          </div>
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
  name: "convocatoriasView",
  data() {
    return {
      tipo: "",
      Cursos: [],

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
    async getTipoCur(tipo_cur) {
      try {
        let res = await this.axios.get("/api/TipoCurso/" + tipo_cur);
        this.tipo = res.data.Descripcion.tipo_conv_curso_nombre;
        this.getCursos();
      } catch (error) {
        console.log(error);
      }
    },
    async getCursos() {
      try {
        let res = await this.axios.get(
          "/api/cursosAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Cursos = [];
        res.data.forEach((cs) => {
          if (
            cs.det_estado == "1" &&
            cs.tipo_curso_otro.tipo_conv_curso_nombre == this.tipo
          ) {
            this.Cursos.push(cs);
          }
        });
        this.pager = this.Cursos.length / this.NUM_RESULTS;
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
    buscar() {
      if (this.search != "") {
        this.searchGet = true;

        this.searchValues = [];
        this.Cursos.forEach((cur) => {
          if (
            cur.det_titulo.toUpperCase().includes(this.search.toUpperCase())
          ) {
            this.searchValues.push(cur);
          }
        });
      } else {
        this.searchGet = false;
      }
    },
  },
  mounted() {
    this.$store.commit("loadOn");
    this.getTipoCur(this.$route.params.tipo_cur);
  },
  updated() {
    if (this.getter) {
      this.$store.commit("loadOn");
      this.getTipoCur(this.$route.params.tipo_cur);
      this.$store.state.getter = false;
    }
  },
  created() {
    this.$store.commit("loadOn");
    this.getTipoCur(this.$route.params.tipo_cur);
  },
};
</script>