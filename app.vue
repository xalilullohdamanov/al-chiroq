
<script setup>

import AOS from 'aos'
import 'aos/dist/aos.css'
import AppHeader from "./components/AppHeader.vue";

const { locale } = useI18n();

watch(locale, () => {
    
  refresh();
});

const { data, refresh } = await useAsyncData("data", () =>
  $fetch("https://alchiroq-dashboard.ulasoft.uz/api", {
    headers: {
      "Accept-Language": locale.value,
    },
  }),
);

onMounted(() => {
    AOS.init()
})
</script>



<template>
    <div>
<!-- {{ $t("name")}} -->
 <!-- <test/>         -->
        <!-- {{ data }} -->
        <AppHeader />
        <AppMain 
            :details="data?.blocks[0]"
            :detailss="data?.blocks[0]"
            :image="data?.blocks[0]"
            
        />
        
        <product />
        <ProductBottom />
        <Distric />
        <DistricBottom
        :districtitle="data?.blocks[1]"
        :districtext="data?.blocks[1]"
        :districImage="data?.blocks[1]"
        />
        <premium 
        :preimumtext="data?.blocks[2]"
        :preimumtitle="data?.blocks[2]"
        :preimumimage="data?.blocks[2]"
        />
        <PremiumBottom
        :primiumtext="data?.blocks[3]"
        :primiumtitle="data?.blocks[3]"
        :primiumImage="data?.blocks[3]"
        />
        <next />
        <NextBottom 
        :next="data?.blocks[4]"
        :text="data?.blocks[4]"
        :nextimage="data?.blocks[4]"
        
        />
        <Last 
        :last="data?.blocks[5]"
        :last-text="data?.blocks[5]"
        :last-image="data?.blocks[5]"
        />
        <AppFooter />
       
       
    </div>
    
    
    
</template>
 <!-- <script setup>
const props = defineProps(['data'])

console.log(props.data)
export default {
  props: ['data'],
  setup(props) {
   
    console.log(props.data)
    defineProps({
  title: String,
  likes: Number
})
  }
}
</script>   -->





