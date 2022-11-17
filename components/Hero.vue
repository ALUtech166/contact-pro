<template>
  <section class="">
    <div class="hero">
      <div class="flex flex-col justify-center items-center w-full pt-[6%]">

        <div class="absolute right-[10%] top-1/2 rounded-full w-5 h-5 bg-green-900"></div>

        <div
            class="pt-16 font-serif lg:py-desktop font-bold px-16 pb-4 text-center text-white uppercase md:text-4xl lg:text-6xl text-2xl z-40 animate-slideDown">
          <!--					<div class="absolute right-[20%] top-20  rounded-full lg:w-20 lg:h-20 bg-green-400/50 z-30"></div>-->
          <h1>Bienvenue Chez Nous !</h1>
        </div>

        <div class="lg:pr-4 items-center justify-center">
          <div class="w-full">
            <div class="lg:py-4 md:px-16 flex flex-col lg:flex-row md:flex-nowrap lg:flex-nowrap lg:space-x-10 md:space-y-0 space-y-2">
              <div class="flex justify-center">
                <div class="mb-3 w-full xl:w-96">
                  <select class="form-select appearance-none block w-full px-3 py-3 text-sm lg:text-base font-normal text-gray-700
                      bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
                      focus:text-gray-700 uppercase focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                    <option class="" selected>à la recherche de :</option>
                    <option value="">Sociétés</option>
                    <option value="">Professionnel</option>
                  </select>
                </div>
              </div>

              <div class="flex justify-center">
                <div class="mb-3 w-full xl:w-96">
                  <select class="form-select appearance-none block w-full px-3 py-3 text-sm lg:text-base font-normal text-gray-700
                      bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
                      focus:text-gray-700 uppercase focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                    <option class="" selected>Sélectionner un secteur :</option>
                    <option value="">Sociétés</option>
                    <option value="">Professionnel</option>
                  </select>
                </div>
              </div>
              <div class="flex justify-center">
                <div class="mb-3 w-full xl:w-96">
                  <select class="form-select appearance-none block w-full px-3 py-3 text-sm lg:text-base font-normal text-gray-700
                      bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
                      focus:text-gray-700 uppercase focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                    <option class="" selected>Choisir une adresse</option>
                    <option value="">Sociétés</option>
                    <option value="">Professionnel</option>
                  </select>
                </div>
              </div>

<!--              <NuxtLink class="bg-black h-1">Rechercher</NuxtLink>-->
              <NuxtLink to="/result" type="submit"
                         class="text-serif bg-blue-800 hover:bg-green-600 hover:text-white h-12 text-center py-2 px-20 text-center rounded-md font-bold text-white z-40 animate-slideDown">
                Rechercher
              </NuxtLink>


            </div>


          </div>


        </div>


      </div>
    </div>

    <section class="py-8 lg:px-8 bg-[#F3F7F5] rounded-2xl">
      <div class="lg:p-4 text-center">
        <h1
            class="font-serif font-bold bg-white rounded-sm shadow-lg p-8 w-full lg:w-1/2 justify-center text-left lg:m-8 uppercase text-blue-800 md:text-4xl lg:text-4xl text-center text-2xl z-40 animate-slideDown">
          Nos Services</h1>
        <div class="lg:py-4 flex flex-col lg:flex-row lg:space-x-4 lg:space-x-12">
          <div class="flex justify-center">
            <div class="hero1 lg:p-4  rounded-lg  items-center">

              <h1
                  class="font-sans bg-white rounded-sm shadow-lg px-16 py-8 text-orange-600 font-bold  text-left m-8 uppercase text-white-600 text-md z-40 animate-slideDown">
                Annuaire Professionnel</h1>
              <p class="px-16 py-16 justify text-white text-justify">

                Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Corrupti minima
                similique optio? Cumque porro dolorem dignissimos, facilis tenetur
                temporibus architecto quia.
              </p>

            </div>
          </div>

          <div class="flex justify-center">
            <div class="hero2 rounded-lg items-center">
              <h1
                  class="font-sans px-16 py-8 bg-white rounded-sm shadow text-orange-600 font-bold justify-center text-left m-8 uppercase text-white-600 text-md z-40 animate-slideDown">
                Communication</h1>
              <p class="px-16 py-16 justify text-white text-justify">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Corrupti minima
                similique optio? Cumque porro dolorem dignissimos, facilis tenetur
                temporibus architecto quia.
              </p>

            </div>
          </div>

          <div class="flex justify-start">
            <div class="hero3  rounded-lg items-center">
              <h1
                  class="font-sans px-16 py-8 bg-white rounded-sm shadow text-orange-600 font-bold justify-center text-left m-8 uppercase text-white-600 text-md z-40 animate-slideDown">
                Solutions digital</h1>
              <p class="px-16 py-16 text-white text-justify">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Corrupti minima
                similique optio? Cumque porro dolorem dignissimos, facilis tenetur
                temporibus architecto quia.</p>

            </div>
          </div>
        </div>
      </div>
    </section>
    <About/>

    <section class="mt-10 py-8 px-8 mx-8 my-8 lg:px-desktop lg:mx-desktop bg-[#F3F7F5] rounded-2xl">
      <div class="flex flex-col lg:flex-row lg:space-x-4 lg:space-x-12 divide-x-2">
        <div class="basis-1/2 flex space-x-10">
          <h1
              class="font-serif font-bold text-center text-blue-800 uppercase lg:text-4xl  text-2xl z-40 animate-slideDown">
            Ils Nous Font <br>
            Confiance !
          </h1>
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
  </section>


</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
}
</script>


<style>
.hero {
  background-image: url(../public/Ok.png);
  background-size: cover;
  height: 55vh;


}

.hero1 {
  background-image: url(../public/annuaire.svg);
  background-size: cover;
  opacity: 0.9;


}

.hero2 {
  background-image: url(../public/Ok2.svg);
  background-size: cover;
  opacity: 0.9;


}


.hero3 {
  background-image: url(../public/Ok3.svg);
  background-size: cover;
  opacity: 0.9;


}
</style>