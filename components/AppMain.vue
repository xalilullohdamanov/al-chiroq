<template>
    <div>
        <section class="section container" data-aos="fade-right">
    <section class="work " data-aos="fade-right">
        <h1 class="section__title">
            <!-- {{ $t('intro_descs') }} -->

            <span v-html="props.details?.title"></span>
            <strong></strong>
            
             
        </h1>
        <p class="section__text">
            <!-- {{ $t('intro_desc') }} -->
            <span v-html="props.detailss?.description"></span>
        </p>
        <section class="href">
            <button class="button">
                {{ $t('button') }}
               
            </button>
            <button class="buttons">
            
                <svg class="svgs" width="4" height="5" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.11477 11.9074V15.7593C5.11477 16.4138 4.56675 16.9445 3.89073 16.9445C3.21471 16.9445 2.66669 16.4138 2.66669 15.7593V11.9074C2.66669 11.2529 3.21471 10.7222 3.89073 10.7222C4.56675 10.7222 5.11477 11.2529 5.11477 11.9074Z" fill="#fff"/>
<path d="M21.3334 12.0556V15.9074C21.3334 16.562 20.7853 17.0926 20.1093 17.0926C19.4333 17.0926 18.8853 16.562 18.8853 15.9074V12.0556C18.8853 11.401 19.4333 10.8704 20.1093 10.8704C20.7853 10.8704 21.3334 11.401 21.3334 12.0556Z" fill="#fff"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.9672 10.7222V16.2037C17.9672 17.8401 16.5972 19.1667 14.9071 19.1667H9.09292C7.40287 19.1667 6.03281 17.8401 6.03281 16.2037V10.7222C6.03281 7.53126 8.70442 4.94446 12 4.94446C15.2956 4.94446 17.9672 7.53126 17.9672 10.7222ZM12.459 6.72224H11.541C9.51294 6.72224 7.86887 8.31411 7.86887 10.2778V11.463C7.86887 12.2812 8.5539 12.9445 9.39893 12.9445H14.6011C15.4461 12.9445 16.1312 12.2812 16.1312 11.463V10.2778C16.1312 8.31411 14.4871 6.72224 12.459 6.72224Z" fill="#fff"/>
<path d="M14.9071 10.2778C14.9071 10.7687 14.5646 11.1667 14.1421 11.1667C13.7196 11.1667 13.3771 10.7687 13.3771 10.2778C13.3771 9.78687 13.7196 9.3889 14.1421 9.3889C14.5646 9.3889 14.9071 9.78687 14.9071 10.2778Z" `fill="#fff"/>
<path d="M10.623 10.2778C10.623 10.7687 10.2805 11.1667 9.85794 11.1667C9.43543 11.1667 9.09292 10.7687 9.09292 10.2778C9.09292 9.78687 9.43543 9.3889 9.85794 9.3889C10.2805 9.3889 10.623 9.78687 10.623 10.2778Z" fill="#fff"/>
</svg>

{{ $t('bots') }}
            </button>
         
        </section>
       
    </section>
    
    <sections class="img " >
        <img class="media1"  :src="image?.image" alt=""> 
        <!-- <span v-html="props.image?.image"></span> -->
    </sections>
    
  </section>
    </div>
    
</template>

<script setup>

const props = defineProps({
  details: Object,
  required: true,
  detailss: Object,
  required: true,
  image:Object,
  required: true,
//   image:Object,
//   required: true,
  
})

</script>

