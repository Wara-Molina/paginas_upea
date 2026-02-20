<template>
  <div>
    <div class="page-title-area bg-overlay bg-overlay-img banner-img">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="breadcrumb-inner">
              <h2 class="page-title" style="color: #fff !important;">
                {{ Curso.det_titulo }}
              </h2>
              <ul class="page-list">
                <li>
                  <router-link to="/">INICIO</router-link>
                </li>
                <li>
                  <a style="cursor: pointer" @click="clickBack()">{{
                    Curso.tipo_conv_curso_nombre
                  }}</a>
                </li>
                <li>{{ Curso.det_titulo }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-blog-area pd-top-120 pd-bottom-90">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-12" v-if="errorGet">
            <h1>Curso inexistente</h1>
          </div>
          <div class="col-lg-8 col-12" v-else>
            <div class="course-details-page">
              <div class="course-details-meta-list">
                <div class="row">
                  <div class="col-12 mt-4 mt-md-0">
                    <div class="row">
                      <div class="col-4 align-self-center">
                        <h6>{{ Curso.det_costo }} bs</h6>
                        <span>Costo</span>
                      </div>
                      <div class="col-4 align-self-center">
                        <h6>{{ Curso.det_costo_profe }} bs</h6>
                        <span>Costo profesional</span>
                      </div>
                      <div class="col-4 align-self-center">
                        <h6>{{ Curso.det_costo_ext }} bs</h6>
                        <span>Costo exterior</span>
                      </div>
                      <div class="col-4 align-self-center">
                        <h6>{{ dmy(Curso.det_fecha_ini) }}</h6>
                        <span>fecha inicio</span>
                      </div>
                      <div class="col-4 align-self-center">
                        <h6>{{ dmy(Curso.det_fecha_fin) }}</h6>
                        <span>Fecha fin</span>
                      </div>
                      <div class="col-4 align-self-center">
                        <h6>{{ Curso.det_hora_ini }}</h6>
                        <span>Hora inicio</span>
                      </div>
                    </div>
                  </div>
                  <!-- <div
                    class="
                      col-md-3
                      mt-4 mt-md-0
                      align-self-center
                      text-md-right
                    "
                  >
                    <div class="enrole-inner">
                      <strong>Free</strong>
                      <a class="btn btn-base" href="#">Get Enroll</a>
                    </div>
                  </div> -->
                </div>
              </div>

              <div class="thumb">
                <a :href="url_api + '/Cursos/' + Curso.det_img_portada">
                  <img
                    :src="url_api + '/Cursos/' + Curso.det_img_portada"
                    alt="img"
                    style="cursor:zoom-in"
                  />
                </a>
              </div>
              <div class="course-details-nav-tab text-center">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="tab1-tab"
                      data-toggle="tab"
                      href="#tab1"
                      role="tab"
                      aria-controls="tab1"
                      aria-selected="true"
                      ><i class="fa fa-book"></i> Descripcion del curso</a
                    >
                  </li>
                  <!-- <li class="nav-item">
                    <a
                      class="nav-link"
                      id="tab2-tab"
                      data-toggle="tab"
                      href="#tab2"
                      role="tab"
                      aria-controls="tab2"
                      aria-selected="false"
                    >
                      <i class="fa fa-file-text-o"></i> Course Features</a
                    >
                  </li> -->
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="tab3-tab"
                      data-toggle="tab"
                      href="#tab3"
                      role="tab"
                      aria-controls="tab3"
                      aria-selected="false"
                    >
                      <i class="fa fa-graduation-cap"></i> Facilitadores</a
                    >
                  </li>
                  <!-- <li class="nav-item">
                    <a
                      class="nav-link"
                      id="tab4-tab"
                      data-toggle="tab"
                      href="#tab4"
                      role="tab"
                      aria-controls="tab4"
                      aria-selected="false"
                    >
                      <i class="fa fa-th"></i> Projects & Resources</a
                    >
                  </li> -->
                </ul>
              </div>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="tab1"
                  role="tabpanel"
                  aria-labelledby="tab1-tab"
                >
                  <div class="course-details-content">
                    <h4 class="title">
                      {{ Curso.det_titulo }}
                    </h4>
                    <p v-html="Curso.det_descripcion"></p>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="tab3"
                  role="tabpanel"
                  aria-labelledby="tab3-tab"
                >
                  <div class="row">
                    <div
                      class="col-md-6"
                      v-for="(fac, id_fac) of Curso.facilitadores"
                      :key="id_fac"
                    >
                      <div class="single-team-inner">
                        <div class="thumb">
                          <img
                            :src="url_api + '/Cursos/' + fac.foto_facilitador"
                            alt="img"
                          />
                        </div>
                        <div class="details pt-5">
                          <ul class="team-social-media">
                            <li>
                              <a
                                :href="fac.facebook_facilitador"
                                target="_blank"
                                ><i
                                  class="fa fa-facebook"
                                  aria-hidden="true"
                                ></i
                              ></a>
                            </li>
                            <li>
                              <a
                                :href="
                                  'https://wa.me/+' +
                                  fac.celular_facilitador.replace(/ /g, '')
                                "
                                target="_blank"
                                ><i
                                  class="fa fa-whatsapp"
                                  aria-hidden="true"
                                ></i
                              ></a>
                            </li>
                          </ul>
                          <h5>
                            <a href="single-team.html">{{
                              fac.nombre_facilitador
                            }}</a>
                            <span> - {{ fac.cargo_facilitador }}</span>
                          </h5>
                          <div class="mt-1">
                            {{ fac.descripcion_facilitador }}
                          </div>
                          <p>
                            <i class="fa fa-user"></i>&nbsp; +{{
                              fac.celular_facilitador
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

<style scoped>
.bg-overlay-img {
  background-image: url("@/assets/Fondo2.jpg");
}
</style>

<script>
import { mapState } from "vuex";
import SidebarCustom from "@/components/SidebarCustom.vue";
export default {
  name: "detalleCurso",
  data() {
    return {
      Curso: {},
      errorGet: false,
    };
  },
  components: { SidebarCustom },
  computed: {
    ...mapState(["url_api", "getter"]),
  },
  methods: {
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
    async getCursoOne() {
      try {
        let res = await this.axios.get(
          "/api/cursos/" + this.$route.params.idCur
        );
        this.Curso = res.data.Descripcion;
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
        if (error.response.status == 500) {
          this.errorGet = true;
          this.$store.commit("loading");
        }
      }
    },
    clickBack() {
      this.$store.commit("clickLink");
      this.$router.go(-1);
    },
  },
  mounted() {
    this.$store.commit("loadOn");
    this.getCursoOne();
  },
  created() {
    this.$store.commit("loadOn");
    this.getCursoOne();
  },
};
</script>