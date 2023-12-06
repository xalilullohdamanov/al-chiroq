


<template> 
    <div> 
    <header class="header container">
     
         <nav class="nav">
        
            
              <nav class="nav__content">
                     <div class="logo">
                        <img class="media__img" src="../public/logoo.svg" alt="">
                    </div>   
                    
                   <div class="logo__content"  >
                        <a href="https://play.google.com/store/apps/details?id=com.ucell.aladdin&hl=en&gl=US" target="_blank" data-aos="fade-up" data-v-281b00bf class="aos-init aos-animate"> <img class="logo1 mediaa"  src="../public/Google Play - rus.svg" alt=""></a> 
                        <li  > 
                            <img class="logo2 "   src="../public/Frame.png"  alt="" @click.prevent="changess()">
                            <lu class="nav__dropdown" >
                                <a href="" class="listt"   @click.prevent="change()">
                                    <img  src="../public/uzb-1.jpg"   alt="" class="nav__dropdown-img" >
                                   <span class="lang">uz</span>
                                </a>
                                <a href="" class="listt" @click.prevent="changes()">
                                    <img  src="../public/en-bayroq.png" alt="" class="nav__dropdown-img1">
                                    <span  class="en">en</span>
                                </a>
                            </lu>
                        </li>  
                    </div> 
                    <div class="dropdown1">
                      <div class="select">
                        <span class="selected"></span>
                        <div class="caret"></div>
                        <ul class="menu">
                          <li>
                            <img  src="../public/en-bayroq.png" alt="" class="nav__dropdown-img1">
                          </li>
                          <li>
                           jhghjhghg
                          </li>
                          <li class="active">
                            bbjbjb
                          </li>
                        </ul>
                      </div>
                    </div>
                </nav> 
           </nav> 
    </header>
</div>
</template> 
<script >
onMounted(() => {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown =>{
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const selected = dropdown.querySelector('.selected');
    select.addEventListener('click',()=>
  select.classList.toggle('select-clicked'),
  caret.classList.toggle('caret-rotate'),
  menu.classList.toggle('menu-open'),
  )
  options.forEach(option =>{
    option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
      option.forEach(option =>{
        option.classList.remove('active');
      });
      option.classList.add('active');
    });
  });
});
}),
// export default {
  
  // name: "index",
  // directives: {

  // },
  // props: {
  //   settings: {
  //     type: Object,
  //     default: () => ({})
  //   },
  // },

  // data() {
  //   return {
  //     langToggle: false,
  //     localeOptions: null,
  //     selectedLocale: "uz",
  //     windowWidth: null,

  //     isOpened: false,
  //     hamburgerClass: '',
  //     ariaExpanded: false,
  //   }
  // },

  // async mounted() {
  //   this.windowWidth = window.innerWidth
    
  //   this.popupItem = this.$el
  // },

  // methods: {

  //   // refreshWindow() {
  //   //   window.scrollTo(0, 0)
  //   // },
  //   change(){
  //     this.$i18n.locale = 'uz'
  //   }, 
  //   changes(){
  //     this.$i18n.locale = 'en'
  //   },
  //   changess(){
  //     this.$i18n.locale = 'ru'
  //   },
  //   // getLocaleFromStorage() {
  //   //   this.selectedLocale = this.$i18n.locale
  //   // },

  //   // langValue(value) {
  //   //   this.selectedLocale = value
  //   //   this.langToggle = false
  //   //   localStorage.setItem('locale', this.selectedLocale)
  //   //   this.hamburgerClass = ''
  //   //   this.isOpened = false
  //   //   this.ariaExpanded = true
  //   //   this.filterLocales()
  //   // },


  //   // filterLocales() {
  //   //   this.localeOptions = this.$i18n.availableLocales
  //   //   this.localeOptions.forEach((item, index) => {
  //   //     if (item === this.selectedLocale) {
  //   //       this.localeOptions.splice(index, 1)
  //   //     }
  //   //   })
  //   // },

  //   // toggleLang() {
  //   //   this.langToggle = !this.langToggle
  //   // },

  //   // hideDropdownOptions() {
  //   //   this.langToggle = false
  //   // },

  //   // openMenu() {
  //   //   if (this.hamburgerClass !== '') {
  //   //     this.hamburgerClass = ''
  //   //     this.isOpened = false
  //   //     this.ariaExpanded = true
  //   //   } else {
  //   //     this.hamburgerClass = 'opened'
  //   //     this.ariaExpanded = false
  //   //     this.isOpened = true
  //   //   }
  //   // },

  //   // selectNavigation() {
  //   //   this.isOpened = false
  //   //   this.hamburgerClass = ''
  //   // },
  // }
// }
</script>
   

 <!-- <script setup>

function uz(){
    localStorage.lang = 'uz'
    console.log(localStorage);
    
 } 
function en(){
    localStorage.lang = 'en'
    console.log(localStorage);
}
//  methods: {
//      localStorage(){
//       let lang = this.lang == "ru" ? "uz" : "ru"
//       this.$emit("localStorage", lang)
//       this.$i18n.localStorage = lang
//      }
 
</script>  --> 
