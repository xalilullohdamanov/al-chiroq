<template>
    <div>
        <section class="section1 container" >
            
            <sections class="img" data-aos="fade-right">
      <img class="media"  :src="preimumimage?.image" alt=""> 
        
        
    </sections>
            
    <section class="shops works" data-aos="fade-left">
      
        <h1 class="product__title" >
            <!-- {{ $t('product__title6') }} -->
            <span v-html="props.preimumtitle?.title"></span>
            <!-- <strong></strong> -->
        </h1>
        <p class="product__text">
            <!-- {{ $t('product__text6') }} -->
            <span v-html="props.preimumtext?.description"></span>  
        </p>
            <div class="grid">
            <img  src="../public/newpgone.svg" alt="" class="grid__img">
            <div class="texts">
                {{ $t('product__text66') }}
                <h1 class="grid__title"></h1>
                <p class="grid__text">До 2000 МБ</p>
            </div>
            <img  src="../public/money.svg" alt="" class="grid__img1">
            <div class="texts">
                {{ $t('product__text66') }}
                <h1 class="grid__title"></h1>
                <p class="grid__text">До 2000 МБ</p>
            </div>
        </div>
        <div class="grid">
            <img  src="../public/lock.svg" alt="" class="grid__img">
            <div class="texts">
                {{ $t('product__text66') }}
                <h1 class="grid__title"></h1>
                <p class="grid__text">До 2000 МБ</p>
            </div>
            <img  src="../public/gift.svg" alt="" class="grid__img1">
            <div class="texts">
                {{ $t('product__text66') }}
                <h1 class="grid__title"></h1>
                <p class="grid__text">До 2000 МБ</p>
            </div>
        </div>
        <section class="href">
            <button class="button">
                {{ $t('product__button6') }}
            </button>
        </section>
    </section>
  </section>
    </div>
</template>
<script setup>
const props = defineProps({
  preimumtitle: Object,
  required: true,
  preimumtext: Object,
  required: true,
  preimumimage:Object,
   required: true,

  
})
</script>