<template>
    <div>
        <section class="section1 container" data-aos="fade-right">
            
            <sections class="img">
        <img class="media" :src="lastImage?.image" alt="">
        <!-- <span v-html="props.lastImage?.image"></span> -->
    </sections>
            
    <section class="work works">
        <h1 class="product__title">
            <!-- {{ $t('product__title9') }} -->
        
            <span v-html="props.last?.title"></span>
            <!-- <strong></strong>  -->
        </h1>
        <p class="product__text">
            <!-- {{ $t('product__text9') }} -->
            <span v-html="props.lastText?.description"></span>
           
        </p>
        <section class="href">
            <button class="button">
                {{ $t('product__button9') }}
              
            </button>

         
        </section>
       
    </section>
    
  
    
  </section>
    </div>
    
</template>
<script setup>

const props = defineProps({
   last: {
    type:Object,
    required: true,
   },
  
  lastText: {
    type:Object,
    required: true,
  },
 lastImage:{
    type:Object,
    required: true,
 }
 
//   image:Object,
//   required: true,
  
})

</script>