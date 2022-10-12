<template>
     <div>
          <Top />
          <main class="mb-16">
               <section class="py-24 px-8 bg-orange-600">
                    <div class="text-justify">
                         <div class="">
                              <h1
                                   class="font-serif font-bold text-center text-white uppercase text-4xl z-40 animate-slideDown">
                                   Contact
                              </h1>
                         </div>
                    <div class="text-center relative">
                         <div class="absolute left-0 top-0 rounded-full w-20 h-20 bg-green-400/50 z-10">
                         </div>
                         <!-- <h1 class="font-bold text-8xl">12</h1>
                    							<p class="uppercase font-bold text-gray-500">Countries</p> -->
                    </div>
                    <div class="flex items-center justify-evenly space-x-10 basis-1/2">
                         <div class="text-center relative">
                              <div class="absolute left-0 top-0 rounded-full w-20 h-20 bg-green-400/50 z-10">
                              </div>
                              <!-- <h1 class="font-bold text-8xl">12</h1>
                    							<p class="uppercase font-bold text-gray-500">Countries</p> -->
                         </div>
                         <div class="text-center relative">
                              <div class="absolute left-0 top-0 rounded-full w-20 h-20 bg-yellow-400/50 z-10">
                              </div>
                              <!-- <h1 class="font-bold text-8xl">11K</h1>
                    							<p class="uppercase font-bold text-gray-500">Participants</p> -->
                         </div>
                    </div>
                    </div>
               </section>

               <section class="mt-10 py-8 px-8 mx-8 my-8 lg:px-desktop  lg:mx-desktop bg-[#F3F7F5] lg:rounded-2xl">
                    <div class="">
                         <div class="basis-1/2 space-x-10">
                              <h1
                                   class="font-serif font-bold text-center text-blue-800 uppercase lg:text-4xl text-md  z-40 animate-slideDown">
                                   Contactez-Nous
                              </h1>
                         </div>
                         
                    </div>
               </section>


               <section class="lg:mt-10 lg:py-8 lg:px-8 lg:mx-8 lg:my-8 lg:px-desktop lg:mx-desktop bg-[#F3F7F5] rounded-2xl">
                    <div class="flex flex-col lg:flex-row lg:space-x-4 lg:space-x-12 space-x-10">
                         <div class="basis-1/2 justify-end space-x-10">
                              <h1
                                   class="px-8 font-serif font-bold text-center text-blue-800 uppercase lg:text-2xl text-md z-40 animate-slideDown">
                                   Email
                              </h1>
                              <p class="py-4 px-8 font-serif text-left lg:text-xl text-md text-gray-600">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod eligendi
                                   natus dolores velit,
                              </p>

                              <h3 class="py-4 px-8 flex font-serif font-bold text-left text-md text-blue-900">
                                   contactpro@afrique.com
                              </h3>
                         </div>


                         <div class="basis-1/2  justify-end space-x-10">
                              <h1
                                   class="font-serif font-bold text-center text-blue-800 uppercase lg:text-2xl text-md  z-40 animate-slideDown">
                                   Telephone
                              </h1>
                              <p class="py-4 font-serif text-left lg:text-xl text-md text-gray-600">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod eligendi
                                   natus dolores velit,
                              </p>

                              <h3 class="py-4 font-serif flex font-bold text-left text-md text-blue-900">
                                   91 58 44 74 | 96 36 03 31
                              </h3>
                         </div>

                         <div class="basis-1/2 justify-end space-x-10">
                              <h1
                                   class="font-serif font-bold text-center text-blue-800 uppercase text-2xl  animate-slideDown">
                                   Adresse
                              </h1>

                              <p class="py-4 font-serif text-left lg:text-xl text-md text-gray-600">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod eligendi
                                   natus dolores velit,
                              </p>

                              <h3 class="py-4 flex font-serif font-bold text-left text-xl text-blue-900">
                                  

                                   Lomé, Togo
                              </h3>
                         </div>

                    </div>
               </section>

               <section class="lg:mt-10 lg:py-16 lg:px-8 lg:mx-8 lg:my-8 lg:px-desktop lg:mx-desktop bg-orange-600 lg:rounded-2xl">
                    <div class="flex flex-col lg:flex-row lg:space-x-4 lg:space-x-12 space-x-10">
                         <div class="py-4 basis-1/2 font-serif space-x-8 px-8 lg:block">

                              <NuxtLink @click="showContact = !showContact"
                                   class=" bg-blue-800 text-white py-3 px-7 rounded-md font-medium hover:border-black hover:bg-green-700 hover:text-white transition-all"
                                   to="#">Envoyer Un Message</NuxtLink>
                         </div>

                         <div class="flex items-center flex-nowrap space-x-10">
                              <h1 class="font-bold py-4 text-white uppercase text-sm">suivez-nous sur nos pages :</h1>
                              <div
                                   class="font-sans font-bold text-left text-white text-justify  uppercase text-lg  z-40 animate-slideDown">

                                   <nuxt-link to="#">
                                        <img src="../public/social.png" alt="">
                                   </nuxt-link>
                              </div>
                              <div
                                   class="font-sans font-bold text-left text-white text-justify  uppercase text-lg  z-40 animate-slideDown">

                                   <nuxt-link to="#">
                                        <img src="../public/social-1.png" alt="">
                                   </nuxt-link>
                              </div>
                              <div
                                   class="font-sans font-bold text-left text-white text-justify  uppercase text-lg  z-40 animate-slideDown">

                                   <nuxt-link to="#">
                                        <img src="../public/social-2.png" alt="">
                                   </nuxt-link>
                              </div>
                              <div
                                   class="font-sans font-bold text-left text-white text-justify  uppercase text-lg  z-40 animate-slideDown">
                                   <nuxt-link to="#"><img src="../public/social-3.png" alt=""></nuxt-link>
                              </div>
                              <div
                                   class="font-sans font-bold text-left text-white text-justify  uppercase text-lg  z-40 animate-slideDown">
                                   <nuxt-link to="#">
                                        <img src="../public/Ok-2.png" alt="">
                                   </nuxt-link>
                              </div>


                         </div>

                    </div>

                    <Modal class="my-8" v-model:show="showContact" bgColor="bg-white/90">
                         <div @click.stop=""
                              class="relative bg-white rounded-lg max-w-lg min-w-[400px] animate-fade shadow-xl">
                              <!-- Close button -->
                             
                              <div class="px-8 pb-2 mt-5">

                                   <div class="flex justify-between p-4 border-b border-gray-300">
                                        <h1 class="font-bold text-blue-800 uppercase text-sm">Contactez-Nous</h1>
                                        <button @click="showContact = false" class="">
                                             <CloseIcon
                                                  class="w-5 h-5 text-gray-400 hover:text-red-600 hover:rotate-[360deg] transition-all duration-500 hover:bg-gray-100 rounded-full focus:outline-dotted focus:outline-gray-300 active:outline active:outline-gray-300" />
                                        </button>
                                   
                                   </div>
                                  
                                   <form @submit.prevent="">
                                        <div>
                                             <label for="Nom"
                                                  class="block mb-1 cursor-pointer text-gray-900 font-medium">Nom</label>
                                             <input required type="email" name="email" id="email"
                                                  class="w-full py-3 rounded-lg border border-gray-300 focus:ring-0 focus:border-green-400" />
                                             <label for="Email"
                                                  class="block mb-1 cursor-pointer text-gray-900 font-medium">Email</label>
                                             <input required type="telephone" name="email" id="email"
                                                  class="w-full py-3 rounded-lg border border-gray-300 focus:ring-0 focus:border-green-400" />
                                             <label for="Telephone"
                                                  class="block mb-1 cursor-pointer text-gray-900 font-medium">Telephone</label>
                                             <input required type="email" name="email" id="email"
                                                  class="w-full py-3 rounded-lg border border-gray-300 focus:ring-0 focus:border-green-400" />
                                             <label for="Telephone"
                                                  class="block mb-1 cursor-pointer text-gray-900 font-medium">Message</label>
                                             <textarea
                                                  class="w-full py-3 rounded-lg border border-gray-300 focus:ring-0 focus:border-green-400"
                                                  name="" id="" cols="20" rows="10"></textarea>
                                        </div>
                                        <div class="mt-5">
                                             <button type="submit"
                                                  class="block bg-orange-600 w-full py-3 rounded-md font-bold text-white">
                                                  Envoyer
                                             </button>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </Modal>
               </section>


<br>

               <section>
                    <div class="mapouter rounded-md px-8">
                         <div class="gmap_canvas">

                              <iframe
                                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126931.66483124522!2d1.1766505177710849!3d6.182317116520904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1c113185419%3A0x3224b5422caf411d!2zTG9tw6k!5e0!3m2!1sfr!2stg!4v1663865125978!5m2!1sfr!2stg"
                                   width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                   referrerpolicy="no-referrer-when-downgrade"></iframe>
                         </div>

                    </div>
               </section>




          </main>

          <footer>
               <Footer />
          </footer>




     </div>
</template>


<script setup>
     import CloseIcon from "@/assets/icons/close.svg?component";
     const showContact = useState("showContact", () => false);
</script>


<style scoped>
     .banner {
          background-image: url(../public/banner.png);
          background-size: cover;
          height: 45vh;
     }

     .image {
          width: 100%;
          height: 50vh;
     }
</style>