<template>
  <div>
    <HeaderCustom />
    <router-view />
    <FooterCustom />
  </div>
</template>

<script>
import HeaderCustom from "@/components/HeaderCustom.vue";
import FooterCustom from "@/components/FooterCustom.vue";
import { mapState } from "vuex";

export default {
  name: "appWrapper",
  components: {
    HeaderCustom,
    FooterCustom,
  },
  computed: {
    ...mapState([
      "url_api",
      "Institucion",
      "MenuConv",
      "MenuCur",
      "Colors",
      "getter",
      "statusImg",
    ]),
  },
  methods: {
    async getMenuConv() {
      try {
        let res = await this.axios.get("/api/Tipoconvocatorias");
        let filterConv = [];
        res.data.forEach((element) => {
          if (element.tipo_conv_comun_estado == "1") {
            filterConv.push(element);
          }
        });
        this.$store.state.MenuConv = filterConv;
      } catch (error) {
        console.log(error);
      }
    },
    async getMenuCur() {
      try {
        let res = await this.axios.get("/api/TipoCurso");
        let filterCur = [];
        res.data.forEach((element) => {
          if (element.tipo_conv_curso_estado == "1") {
            filterCur.push(element);
          }
        });
        this.$store.state.MenuCur = filterCur;
      } catch (error) {
        console.log(error);
      }
    },
    async getLinks() {
      try {
        let filterLinks = [];
        let res = await this.axios.get(
          "/api/linksIntExtAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        res.data.forEach((link) => {
          if (link.ei_estado == "1") {
            filterLinks.push(link);
          }
        });
        this.$store.state.Links = filterLinks;
      } catch (error) {
        console.log(error);
      }
    },
    async getInstitucion() {
      try {
        let res = await this.axios.get(
          "/api/InstitucionUPEA/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.$store.state.Institucion = res.data.Descripcion;
        document
          .querySelector("#ico")
          .setAttribute(
            "href",
            this.url_api +
              "/InstitucionUpea/" +
              this.Institucion.institucion_logo
          );
        document.querySelector("#title-page").innerHTML =
          this.Institucion.institucion_nombre;

        // Colores CSS
        if (this.Institucion.colorinstitucion.length > 0) {
          document.documentElement.style.setProperty(
            "--main-color",
            this.Institucion.colorinstitucion[0].color_primario
          );
          document.documentElement.style.setProperty(
            "--main-color-2",
            this.Institucion.colorinstitucion[0].color_secundario
          );
          document.documentElement.style.setProperty(
            "--main-color-3",
            this.Institucion.colorinstitucion[0].color_terciario
          );
        }
        this.setImages(res.data.Descripcion.portada);
      } catch (error) {
        console.log(error);
        if (error.code == "ERR_NETWORK") {
          this.$router.push("/error_network");
        }
      }
    },
    setImages(images) {
      if (Object.keys(images).length > 0) {
        let count = images.length;
        let i = 1;
        let img =
          this.url_api + "/InstitucionUpea/Portada/" + images[0].portada_imagen;
        document
          .querySelector(".banner-img")
          .setAttribute("style", 'background-image: url("' + img + '");');

        setInterval(() => {
          if (i <= count) {
            let img =
              this.url_api +
              "/InstitucionUpea/Portada/" +
              images[i - 1].portada_imagen;
            document
              .querySelector(".banner-img")
              .setAttribute("style", 'background-image: url("' + img + '");');
            i++;
          } else {
            i = 1;
            let img =
              this.url_api +
              "/InstitucionUpea/Portada/" +
              images[0].portada_imagen;
            document
              .querySelector(".banner-img")
              .setAttribute("style", 'background-image: url("' + img + '");');
          }
        }, 5000);
      } else {
        document
          .querySelector(".banner-img")
          .setAttribute("style", "@/assets/upea_fondo.jpg");
      }
      this.$store.commit("loading");
    },
    createdComponents() {
      this.getInstitucion();
      this.getMenuConv();
      this.getMenuCur();
      this.getLinks();
    },
  },
  created() {
    this.createdComponents();
  },
};
</script>