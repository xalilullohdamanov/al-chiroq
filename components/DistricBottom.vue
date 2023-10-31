<template>
    <div>
        <section class="section3 container" data-aos="fade-right">
            
         
            
    <section class="work works">
        <h1 class="product__title">
            <!-- {{ $t('product__title5') }} -->
            <span v-html="props.districtitle?.title"></span>
          <!-- <strong></strong> -->
        </h1>
        <p class="product__text">
            <!-- {{ $t('product__text5') }} -->
            <span v-html="props. districtext?.description"></span>
        </p>
        <section class="href">
            
            <button class="button">
                {{ $t('product__button5') }}
               
                
            </button>

           
        </section>
      
    </section>
    
    <sections class="img">
        
        <img class="media" :src="districImage?.image" alt="">
    </sections>
  
    <img src="../public/mini-imge2.svg" alt="" class="mini__img2">
  </section>
  
    </div>
   
    
</template>
<script setup>

const props = defineProps({
   districtitle: Object,
  required: true,
  districtext: Object,
  required: true,
  districImage:Object,
  required: true,
//   image:Object,
//   required: true,
  
})

</script>