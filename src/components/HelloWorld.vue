<script setup lang="ts">
import router from "@/router";
import { onMounted, ref } from "vue";
interface Drink {
  name: string;
  price: number;
}

interface Food {
  name: string;
  description: string;
  price: number;
}

interface Dessert {
  name: string;
  price: number;
}

const bebidasDialog = ref(false);
const comidaDialog = ref(false);
const postresDialog = ref(false);
const toEventos = () => {
  router.push("/eventos");
};
// Leches y Milkshakes
const otrasBebidas = ref<Drink[]>([
  { name: "Leche Chocolatada", price: 7000 },
  { name: "Leche fría - vaso", price: 5000 },
  { name: "Milkshake Vaso", price: 15000 },
]);
const toInstagram = () => {
  window.open("https://www.instagram.com/centralbarpy/", "_blank");
};
// Gaseosas
const gaseosas = ref<Drink[]>([
  { name: "500ml", price: 12000 },
  { name: "1000ml", price: 14000 },
  { name: "2.000ml", price: 22000 },
]);

// Agua mineral sin gas
const aguaSinGas = ref<Drink[]>([
  { name: "500ml", price: 6000 },
  { name: "2000ml", price: 9000 },
]);

// Agua mineral gasificado
const aguaGasificada = ref<Drink[]>([
  { name: "500 ml", price: 6000 },
  { name: "2000 ml", price: 9000 },
  { name: "Agua Tónica", price: 12000 },
  { name: "Schweppes", price: 12000 },
]);

// Cervezas
const cervezas = ref<Drink[]>([
  { name: "Pilsen", price: 10000 },
  { name: "Brahma", price: 10000 },
  { name: "Corona", price: 15000 },
  { name: "Heineken", price: 16000 },
]);

// Cocktails
const cocktails = ref<Drink[]>([
  { name: "Mojito", price: 25000 },
  { name: "Piña Colada", price: 25000 },
  { name: "Margarita", price: 28000 },
  { name: "Caipirinha", price: 25000 },
]);

// Platos Principales
const platosPrincipales = ref<Food[]>([
  {
    name: "Filete de Res",
    description:
      "Filete de res premium a la parrilla con salsa de chimichurri y papas salteadas",
    price: 55000,
  },
  {
    name: "Pollo al Horno",
    description:
      "Pollo marinado horneado con hierbas, acompañado de vegetales de temporada",
    price: 45000,
  },
  {
    name: "Pasta Carbonara",
    description: "Pasta fresca con salsa cremosa, panceta y queso parmesano",
    price: 38000,
  },
  {
    name: "Salmón Grillado",
    description:
      "Filete de salmón a la parrilla con salsa de mantequilla y limón",
    price: 60000,
  },
]);

// Entradas
const entradas = ref<Food[]>([
  {
    name: "Empanadas Caseras",
    description: "Empanadas de carne, pollo o queso (3 unidades)",
    price: 25000,
  },
  {
    name: "Ensalada César",
    description: "Lechuga romana, crutones, queso parmesano y aderezo César",
    price: 28000,
  },
  {
    name: "Carpaccio de Res",
    description: "Finas láminas de res con rúcula, limón y parmesano",
    price: 32000,
  },
]);

// Guarniciones
const guarniciones = ref<Food[]>([
  {
    name: "Papas Fritas",
    description: "Porción de papas fritas caseras",
    price: 15000,
  },
  {
    name: "Puré de Papas",
    description: "Cremoso puré de papas con mantequilla",
    price: 15000,
  },
  {
    name: "Vegetales Salteados",
    description: "Mix de vegetales frescos salteados con hierbas",
    price: 18000,
  },
]);
// Add this with your other ref variables
const horarios = ref([
  { day: "Lunes - Jueves", hours: "12:00 - 22:00" },
  { day: "Viernes - Sábado", hours: "12:00 - 00:00" },
  { day: "Domingo", hours: "12:00 - 20:00" },
]);
// Postres
const postres = ref<Dessert[]>([
  { name: "Flan Casero", price: 18000 },
  { name: "Torta de Chocolate", price: 22000 },
  { name: "Helado Artesanal (3 sabores)", price: 20000 },
  { name: "Cheesecake con Frutos Rojos", price: 25000 },
  { name: "Tiramisú", price: 23000 },
]);

// Cafés y Tés
const cafesTes = ref<Dessert[]>([
  { name: "Café Espresso", price: 8000 },
  { name: "Capuchino", price: 12000 },
  { name: "Té de Hierbas", price: 7000 },
  { name: "Café Cortado", price: 9000 },
]);

const imageLoaded = ref(false);
const textAnimated = ref(false);

// In the <script setup> section, add this function to scroll to contact section
const scrollToContact = () => {
  document.getElementById("location-section")?.scrollIntoView({
    behavior: "smooth",
  });
};

// Add a function for WhatsApp redirect (add this with your other functions)
const toWhatsApp = () => {
  window.open("https://wa.me/595981123456", "_blank"); // Replace with your actual number
};

// Update the onMounted function to reduce animation delay times
onMounted(() => {
  setTimeout(() => {
    imageLoaded.value = true;
    setTimeout(() => {
      textAnimated.value = true;
    }, 300);
  }, 100);
});

// Function to scroll to menu section
const scrollToMenu = () => {
  document.getElementById("menu-section")?.scrollIntoView({
    behavior: "smooth",
  });
};
</script>

<template>
  <v-app class="dark-theme">
    <v-app-bar :elevation="2" class="custom-app-bar">
      <!-- Logo on the left -->
      <template v-slot:prepend>
        <div class="logo-container">
          <img
            src="/src/assets/logo.png"
            alt="Restaurant Logo"
            class="restaurant-logo"
          />
          <span class="logo-text">Nombre</span>
        </div>
      </template>

      <!-- Spacer to push the elements to the right -->
      <v-spacer></v-spacer>

      <!-- Navigation buttons on the right -->
      <div class="nav-buttons">
        <v-btn variant="text" class="nav-btn" @click="scrollToMenu">Menú</v-btn>
        <v-btn variant="text" class="nav-btn" @click="scrollToContact"
          >Contacto</v-btn
        >
      </div>
      <!--  -->
      <!-- Mobile menu button, only visible on small screens -->
    </v-app-bar>

    <div class="hero-container">
      <v-img
        src="/src/assets/Images/patrick-tomasso-GXXYkSwndP4-unsplash.jpg"
        cover
        class="hero-image"
        :class="{ reveal: imageLoaded }"
      ></v-img>
      <div class="content-overlay">
        <div class="text-wrapper">
          <h1 class="tagline" :class="{ appear: textAnimated }">
            <span class="word">El mejor restaurant de la ciudad</span>
          </h1>
          <div class="divider" :class="{ appear: textAnimated }"></div>
          <p class="subtitle" :class="{ appear: textAnimated }">
            Sabores que cuentan historias
          </p>
        </div>
      </div>

      <!-- Fixed down arrow to indicate scrolling -->
      <v-row justify="center">
        <div
          class="scroll-indicator"
          :class="{ appear: textAnimated }"
          @click="scrollToMenu"
        >
          <div class="arrow-down">
            <v-icon icon="mdi-chevron-down" size="large"></v-icon>
          </div>
        </div>
      </v-row>
    </div>

    <!-- Menu Section -->
    <div id="menu-section" class="menu-section">
      <h2 class="section-title">Menú</h2>
      <div class="menu-categories">
        <v-card
          @click="bebidasDialog = true"
          class="category-card position-relative"
          :variant="'text'"
        >
          <v-img
            src="/src/assets/Images/istockphoto-849648874-612x612.jpg"
            class="bebidasImg"
          ></v-img>
          <div class="category-overlay">
            <p class="category-text">Bebidas</p>
          </div>
        </v-card>
        <v-card
          @click="comidaDialog = true"
          class="category-card position-relative"
          :variant="'text'"
        >
          <v-img
            src="/src/assets/Images/HD-wallpaper-pizza-slice-fast-food-cheese-green-peppers-food.jpg"
            class="bebidasImg"
          ></v-img>
          <div class="category-overlay">
            <p class="category-text">Comida</p>
          </div>
        </v-card>
        <v-card
          @click="postresDialog = true"
          class="category-card position-relative"
          :variant="'text'"
        >
          <v-img
            src="/src/assets/Images/istockphoto-487960671-612x612.jpg"
            class="bebidasImg"
          ></v-img>
          <div class="category-overlay">
            <p class="category-text">Postres</p>
          </div>
        </v-card>
      </div>

      <div class="menu-pdf-section">
        <v-btn variant="outlined" prepend-icon="mdi-download" class="mt-n15">
          Descargar PDF
        </v-btn>
      </div>
    </div>

    <!-- Bebidas Dialog -->
    <v-dialog v-model="bebidasDialog" max-width="900px">
      <v-row>
        <v-icon></v-icon><v-spacer></v-spacer
        ><v-icon class="mr-3 mb-4" @click="bebidasDialog = false"
          >mdi-close-circle-outline</v-icon
        >
      </v-row>
      <v-card>
        <v-card-title
          style="font-family: Georgia, 'Times New Roman', Times, serif"
          class="text-center text-h5 font-weight-bold mb-2"
          >Bebidas</v-card-title
        >
        <v-card-text>
          <!-- Gaseosas -->
          <div class="mb-6">
            <div class="text-h6 font-weight-bold mb-2">Gaseosas</div>
            <div
              v-for="(item, index) in gaseosas"
              :key="'gas-' + index"
              class="d-flex justify-space-between mb-1"
            >
              <div>{{ item.name }}</div>
              <div class="d-flex align-center">
                <div class="text-right dotted-leader flex-grow-1 mr-2"></div>
                <div class="dotted-leader">
                  {{ item.price.toLocaleString() }} Gs
                </div>
              </div>
            </div>
          </div>

          <!-- Agua Mineral -->
          <div class="mb-6">
            <div class="text-h6 font-weight-bold mb-2">
              Agua mineral sin gas
            </div>
            <div
              v-for="(item, index) in aguaSinGas"
              :key="'agua-' + index"
              class="d-flex justify-space-between mb-1"
            >
              <div>{{ item.name }}</div>
              <div class="d-flex align-center">
                <div class="text-right dotted-leader flex-grow-1 mr-2"></div>
                <div>{{ item.price.toLocaleString() }} Gs</div>
              </div>
            </div>
          </div>

          <!-- Agua Gasificada -->
          <div class="mb-6">
            <div class="text-h6 font-weight-bold mb-2">
              Agua mineral gasificada
            </div>
            <div
              v-for="(item, index) in aguaGasificada"
              :key="'agas-' + index"
              class="d-flex justify-space-between mb-1"
            >
              <div>{{ item.name }}</div>
              <div class="d-flex align-center">
                <div class="text-right dotted-leader flex-grow-1 mr-2"></div>
                <div>{{ item.price.toLocaleString() }} Gs</div>
              </div>
            </div>
          </div>

          <!-- Otras Bebidas -->
          <div class="mb-6">
            <div class="text-h6 font-weight-bold mb-2">Leches y Milkshakes</div>
            <div
              v-for="(item, index) in otrasBebidas"
              :key="'otra-' + index"
              class="d-flex justify-space-between mb-1"
            >
              <div>{{ item.name }}</div>
              <div class="d-flex align-center">
                <div class="text-right dotted-leader flex-grow-1 mr-2"></div>
                <div>{{ item.price.toLocaleString() }} Gs</div>
              </div>
            </div>
          </div>

          <!-- Cerveza -->
          <div class="mb-6">
            <div class="text-h6 font-weight-bold mb-2">Cerveza</div>
            <div
              v-for="(item, index) in cervezas"
              :key="'cerv-' + index"
              class="d-flex justify-space-between mb-1"
            >
              <div>{{ item.name }}</div>
              <div class="d-flex align-center">
                <div class="text-right dotted-leader flex-grow-1 mr-2"></div>
                <div>{{ item.price.toLocaleString() }} Gs</div>
              </div>
            </div>
          </div>

          <!-- Cocktails -->
          <div class="mb-6">
            <div class="text-h6 font-weight-bold mb-2">Cocktails</div>
            <div
              v-for="(item, index) in cocktails"
              :key="'cock-' + index"
              class="d-flex justify-space-between mb-1"
            >
              <div>{{ item.name }}</div>
              <div class="d-flex align-center">
                <div class="text-right dotted-leader flex-grow-1 mr-2"></div>
                <div>{{ item.price.toLocaleString() }} Gs</div>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Comida Dialog -->
    <v-dialog v-model="comidaDialog" max-width="900px">
      <v-row>
        <v-icon></v-icon><v-spacer></v-spacer
        ><v-icon class="mr-3 mb-4" @click="comidaDialog = false"
          >mdi-close-circle-outline</v-icon
        >
      </v-row>
      <v-card>
        <v-card-title
          style="font-family: Georgia, 'Times New Roman', Times, serif"
          class="text-center text-h5 font-weight-bold mb-2"
          >Comida</v-card-title
        >
        <v-card-text>
          <!-- Entradas -->
          <div class="mb-6">
            <div class="text-h6 font-weight-bold mb-2">Entradas</div>
            <div
              v-for="(item, index) in entradas"
              :key="'entrada-' + index"
              class="mb-3"
            >
              <div class="d-flex justify-space-between">
                <div class="font-weight-medium">{{ item.name }}</div>
                <div>{{ item.price.toLocaleString() }} Gs</div>
              </div>
              <div class="text-caption text-grey">{{ item.description }}</div>
            </div>
          </div>

          <!-- Platos Principales -->
          <div class="mb-6">
            <div class="text-h6 font-weight-bold mb-2">Platos Principales</div>
            <div
              v-for="(item, index) in platosPrincipales"
              :key="'plato-' + index"
              class="mb-3"
            >
              <div class="d-flex justify-space-between">
                <div class="font-weight-medium">{{ item.name }}</div>
                <div>{{ item.price.toLocaleString() }} Gs</div>
              </div>
              <div class="text-caption text-grey">{{ item.description }}</div>
            </div>
          </div>

          <!-- Guarniciones -->
          <div class="mb-6">
            <div class="text-h6 font-weight-bold mb-2">Guarniciones</div>
            <div
              v-for="(item, index) in guarniciones"
              :key="'guarnicion-' + index"
              class="mb-3"
            >
              <div class="d-flex justify-space-between">
                <div class="font-weight-medium">{{ item.name }}</div>
                <div>{{ item.price.toLocaleString() }} Gs</div>
              </div>
              <div class="text-caption text-grey">{{ item.description }}</div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Postres Dialog -->
    <v-dialog v-model="postresDialog" max-width="900px">
      <v-row>
        <v-icon></v-icon><v-spacer></v-spacer
        ><v-icon class="mr-3 mb-4" @click="postresDialog = false"
          >mdi-close-circle-outline</v-icon
        >
      </v-row>
      <v-card>
        <v-card-title
          style="font-family: Georgia, 'Times New Roman', Times, serif"
          class="text-center text-h5 font-weight-bold mb-2"
          >Postres</v-card-title
        >
        <v-card-text>
          <!-- Postres -->
          <div class="mb-6">
            <div class="text-h6 font-weight-bold mb-2">Postres</div>
            <div
              v-for="(item, index) in postres"
              :key="'postre-' + index"
              class="d-flex justify-space-between mb-1"
            >
              <div>{{ item.name }}</div>
              <div class="d-flex align-center">
                <div class="text-right dotted-leader flex-grow-1 mr-2"></div>
                <div>{{ item.price.toLocaleString() }} Gs</div>
              </div>
            </div>
          </div>

          <!-- Cafés y Tés -->
          <div class="mb-6">
            <div class="text-h6 font-weight-bold mb-2">Cafés y Tés</div>
            <div
              v-for="(item, index) in cafesTes"
              :key="'cafe-' + index"
              class="d-flex justify-space-between mb-1"
            >
              <div>{{ item.name }}</div>
              <div class="d-flex align-center">
                <div class="text-right dotted-leader flex-grow-1 mr-2"></div>
                <div>{{ item.price.toLocaleString() }} Gs</div>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- Eventos -->

    <!-- Horario Section -->
    <div id="horario-section" class="horario-section">
      <h2 class="section-title">Horarios</h2>
      <div class="horario-container">
        <div class="horario-card">
          <div class="horario-icon">
            <v-icon icon="mdi-clock-outline" size="x-large"></v-icon>
          </div>
          <div class="horario-title">Horarios de Atención</div>
          <div class="horario-list">
            <div
              v-for="(item, index) in horarios"
              :key="index"
              class="horario-item"
            >
              <div class="horario-day">{{ item.day }}</div>
              <div class="horario-hours">{{ item.hours }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Location/Footer Section -->
    <div id="location-section" class="location-section">
      <h2 class="section-title">Ubicación</h2>
      <div class="location-container">
        <div class="info-container">
          <h3 class="location-heading">Dirección</h3>
          <p class="location-text">Av. Mariscal López 1234</p>
          <p class="location-text">Asunción, Paraguay</p>

          <h3 class="location-heading mt-6">Contacto</h3>
          <p class="location-text">Teléfono: 981 123-456</p>
          <p class="location-text">Email: info@restaurantname.com</p>

          <div class="social-icons mt-6">
            <v-btn
              @click="toWhatsApp"
              icon="mdi-whatsapp"
              variant="text"
              color="white"
              class="social-icon"
            ></v-btn>
            <v-btn
              @click="toInstagram"
              icon="mdi-instagram"
              variant="text"
              color="white"
              class="social-icon"
            ></v-btn>
            <v-btn
              icon="mdi-facebook"
              variant="text"
              color="white"
              class="social-icon"
            ></v-btn>
          </div>
        </div>

        <div class="map-container">
          <!-- Google Maps iframe - replace the src with your actual Google Maps embed URL -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5322467637074!2d-57.63290542394573!3d-25.290758777655736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da8987f7c8b07%3A0xd8b5d8a0dfad45fc!2sAv.%20Mariscal%20L%C3%B3pez%2C%20Asunci%C3%B3n%2C%20Paraguay!5e0!3m2!1sen!2sus!4v1708632123123!5m2!1sen!2sus"
            class="google-map"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </div>

      <div class="footer-bar mb-n16">
        <p class="copyright">
          © 2025 Restaurant Name. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </v-app>
</template>

<style scoped>
/* Dark Theme Styling */
.dark-theme {
  --bg-color: #121212;
  --text-color: #e0e0e0;
  --card-bg: #1e1e1e;
  --accent-color: #e67e22;
  --secondary-bg: #1a1a1a;
  background-color: var(--bg-color);
  color: var(--text-color);
}

/* App Bar Styling */
.custom-app-bar {
  background: rgba(18, 18, 18, 0.8) !important;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  z-index: 10;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.restaurant-logo {
  height: 40px;
  width: auto;
}

.logo-text {
  font-weight: 600;
  font-size: 1.2rem;
  color: white;
  letter-spacing: 1px;
}

.nav-buttons {
  display: flex;
  gap: 10px;
}

.nav-btn {
  color: white !important;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
}

.nav-btn::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  background-color: white;
  transition: all 0.3s ease;
}

.nav-btn:hover::after {
  width: 80%;
  left: 10%;
}

/* Hide buttons on small screens */
@media (max-width: 768px) {
  .nav-buttons {
    display: none;
  }
}

/* Rest of your existing CSS */
.hero-container {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.content-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.hero-image {
  height: 100vh; /* Modified to fit exactly the viewport height */
  filter: grayscale(0.5) brightness(0.4); /* Darkened for dark theme */
  transform: scale(1.2);
  transition: filter 2.5s cubic-bezier(0.215, 0.61, 0.355, 1),
    transform 3s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.reveal {
  filter: grayscale(0.3) brightness(0.5); /* Darkened for dark theme */
  transform: scale(1);
}

.text-wrapper {
  position: relative;
  overflow: hidden;
  padding: 2rem;
  text-align: center;
  max-width: 80%;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}

.tagline {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  letter-spacing: 1px;
}

.word {
  display: inline-block;
  opacity: 0;
  transform: translateY(100%) rotateX(20deg);
  transition: transform 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    opacity 0.8s ease;
  transition-delay: calc(var(--i, 0) * 0.1s);
  transform-origin: bottom center;
}

.tagline.appear .word {
  transform: translateY(0) rotateX(0);
  opacity: 1;
}

.tagline.appear .word:nth-child(1) {
  --i: 1;
}
.tagline.appear .word:nth-child(2) {
  --i: 2;
}
.tagline.appear .word:nth-child(3) {
  --i: 3;
}
.tagline.appear .word:nth-child(4) {
  --i: 4;
}
.tagline.appear .word:nth-child(5) {
  --i: 5;
}
.tagline.appear .word:nth-child(6) {
  --i: 6;
}

.divider {
  height: 2px;
  width: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.8),
    transparent
  );
  margin: 0 auto 1.5rem;
  transition: width 1.2s ease;
  transition-delay: 1.2s;
}

.divider.appear {
  width: 70%;
}

.subtitle {
  font-size: 1.8rem;
  font-weight: 300;
  font-style: italic;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  opacity: 0;
  transform: scale(0.9) translateY(20px);
  transition: opacity 1.2s ease,
    transform 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: 1.5s;
  letter-spacing: 2px;
}

.subtitle.appear {
  opacity: 1;
  transform: scale(1) translateY(0);
}

/* Down Arrow Styling - FIXED */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  opacity: 0;
  transition: opacity 1s ease;
  transition-delay: 2s;
  cursor: pointer;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
}

.scroll-indicator.appear {
  opacity: 1;
  animation: bounce 2s infinite;
}

.arrow-down {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

/* Menu Section Styling */
.menu-section {
  padding: 5rem 2rem;
  background-color: var(--secondary-bg);
  position: relative;
  z-index: 1;
  color: var(--text-color);
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  color: var(--text-color);
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.2rem;
  text-align: center;
  color: #999;
  margin-bottom: 3rem;
  font-style: italic;
}

/* Menu Categories */
.menu-categories {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.category-btn {
  min-width: 150px;
  padding: 1rem 2rem;
  font-weight: 600;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.category-btn:hover {
  transform: translateY(-3px);
}

/* Dialog styling */
.dialog-card {
  background-color: var(--card-bg);
  color: var(--text-color);
  border-radius: 10px;
}

.dialog-title {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 1.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--accent-color);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
/* Menu Grid */
.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.menu-item {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: rgba(30, 30, 30, 0.8);
}

.menu-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.menu-item-image-container {
  height: 200px;
  overflow: hidden;
}

.menu-item-image {
  transition: transform 0.5s ease;
}

.menu-item:hover .menu-item-image {
  transform: scale(1.05);
}

.menu-item-details {
  padding: 1.5rem;
}

.menu-item-name {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.menu-item-description {
  font-size: 0.95rem;
  color: #999;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.menu-item-price {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--accent-color);
}

.menu-pdf-section {
  margin-top: 4rem;
  text-align: center;
}

.menu-pdf-section p {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #999;
}

.download-btn {
  padding: 0.75rem 2rem;
  font-weight: 600;
  letter-spacing: 1px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.download-btn:hover {
  transform: translateY(-2px);
}

.remaining-content {
  position: relative;
  z-index: 1;
  background-color: var(--bg-color);
  min-height: 100vh;
}

@media (max-width: 768px) {
  .tagline {
    font-size: 2.8rem;
    gap: 0.3rem;
  }

  .subtitle {
    font-size: 1.4rem;
  }

  .divider.appear {
    width: 90%;
  }

  .section-title {
    font-size: 2.2rem;
  }

  .menu-grid {
    grid-template-columns: 1fr;
  }

  .menu-categories {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .category-btn {
    width: 100%;
    max-width: 300px;
  }
}
.category-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.bebidasImg {
  height: 250px;
  width: 350px;
  opacity: 0.5;
  transition: transform 0.5s ease;
}
.ComidaImg {
  height: 250px;
  width: 250px;
  opacity: 0.5;
  transition: transform 0.5s ease;
}

.category-card:hover .bebidasImg {
  transform: scale(1.05);
}
.category-card:hover .ComidaImg {
  transform: scale(1.05);
}

.category-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
}

.category-card:hover .category-overlay {
  background-color: rgba(0, 0, 0, 0.6);
}

.category-text {
  color: white;
  font-size: 1.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, letter-spacing 0.3s ease;
}

.category-card:hover .category-text {
  transform: scale(1.1);
  letter-spacing: 2px;
}
.dotted-leader {
  position: relative;
  overflow: hidden;
}

.dotted-leader::after {
  position: absolute;
  padding-left: 0.25em;
  content: "................................................................................................";
  color: #ffffff;
}
/* Location Section Styling */
.location-section {
  padding: 5rem 2rem;
  background-color: var(--bg-color);
  color: var(--text-color);
  position: relative;
}

.location-container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto 3rem;
  gap: 3rem;
  flex-wrap: wrap;
}

.info-container {
  flex: 1;
  min-width: 300px;
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.map-container {
  flex: 2;
  min-width: 300px;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.google-map {
  width: 100%;
  height: 100%;
  border: none;
}

.location-heading {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--accent-color);
}

.location-text {
  font-size: 1rem;
  color: #e0e0e0;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-icon:hover {
  transform: translateY(-3px);
  color: var(--accent-color) !important;
}

.footer-bar {
  padding: 1.5rem 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.copyright {
  color: #999;
  font-size: 0.9rem;
}

/* Media Queries */
@media (max-width: 768px) {
  .location-container {
    flex-direction: column;
  }

  .map-container {
    height: 300px;
  }
}
/* Horario Section Styling */
.horario-section {
  padding: 5rem 2rem;
  background-color: var(--bg-color);
  position: relative;
  z-index: 1;
  color: var(--text-color);
}

.horario-container {
  display: flex;
  justify-content: center;
  margin: 2rem auto;
  max-width: 800px;
}

.horario-card {
  background-color: var(--card-bg);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  width: 100%;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.horario-icon {
  margin-bottom: 1.5rem;
  color: var(--accent-color);
}

.horario-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.horario-title::after {
  content: "";
  position: absolute;
  width: 50%;
  height: 2px;
  background-color: var(--accent-color);
  bottom: -10px;
  left: 25%;
}

.horario-list {
  margin-top: 2rem;
}

.horario-item {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
}

.horario-day {
  font-weight: 600;
}

.horario-hours {
  color: var(--accent-color);
  font-weight: 500;
}

@media (max-width: 768px) {
  .horario-item {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
}
</style>
