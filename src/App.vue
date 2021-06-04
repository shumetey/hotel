 <template>
  <div id="app">
    <Navbar/>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/BaseNav.vue";

export default {
  name: "BaseNav",
  components: {
    Navbar,
  },
};
</script>

