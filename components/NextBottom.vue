<template>
    <div>
        <section class="section container" data-aos="fade-left">
    <section class="work works">
        <h1 class="product__title">
            <!-- {{ $t('product__title8') }} -->
            <span v-html="props.next?.title"></span>
           <!-- <strong></strong>  <strong></strong> -->
        </h1>
        <p class="product__text">
            <!-- {{ $t('product__text8') }} -->
            <span v-html="props.text?.description"></span>
        </p>
        <section class="href">
            <button class="button">
                {{ $t('product__button8') }}
             
            </button>

         
        </section>
       
    </section>
    <sections class="img">
        <img class="media" :src="nextimage?.image" alt="">
    </sections>
  
    
  </section>
    </div>
    
</template>
<script setup>

const props = defineProps({
   next: Object,
  required: true,
  text: Object,
  required: true,
  nextimage:Object,
  required: true,
 
//   image:Object,
//   required: true,
  
})

</script>