<template>
    <div>
        <section class="section container" data-aos="fade-left">
    <section class="work works">
        <h1 class="product__title">
            <!-- {{ $t('product__title2') }} -->
            <span v-html="props.primiumtitle?.title"></span>
             <strong></strong> 
        </h1>
        <p class="product__text">
            <!-- {{ $t('product__text2') }} -->
            <span v-html="props. primiumtext?.description"></span>
        </p>
        <section class="href">
            <button class="button">
                {{ $t('product__button2') }}
            </button>
        </section>
    </section>
    <sections class="img">
        <img class="media" :src="primiumImage?.image" alt="">
    </sections>
    <img src="../public/mini-imge3.svg" alt="" class="mini__img3">
  </section>
    </div>
</template>
<script setup>

const props = defineProps({
   primiumtitle: Object,
  required: true,
  primiumtext: Object,
  required: true,
  primiumImage:Object,
  required: true,
//   image:Object,
//   required: true,
  
})

</script>