<template>
  <header class="py-4 mx-auto sticky top-0 z-50 bg-white/80">
    <div class="flex lg:flex-row items-center justify-between py-4 lg:px-desktop mx-auto sticky top-0 z-50 bg-white">

      <!-- Header logo -->

      <div class="flex space-x-2 justify-end">
        <h1 class="font-bold text-2xl">
          <nuxt-link to="/"><img src="../public/Ok1.png" alt=""></nuxt-link>
        </h1>
      </div>
      <ul class="font-serif items-center space-x-14 hidden lg:flex">
        <li class="group space-x-10" @click="activeLink = link" :class="{ 'text-gray-500': activeLink != link }">
          <NuxtLink class="hover font-medium text-xl" to="/">Accueil</NuxtLink>
          <NuxtLink class="hover font-medium text-xl" to="/service">Nos services</NuxtLink>
          <NuxtLink class="hover font-medium text-xl" to="/service">Sociétés</NuxtLink>
          <NuxtLink class="hover font-medium text-xl" to="/start-up">Les Startups</NuxtLink>
          <NuxtLink class="hover font-medium text-xl" to="/top-entreprise">Top 10</NuxtLink>
        </li>
      </ul>
      <div class="font-serif space-x-8 hidden lg:block">
        <NuxtLink
            class="font-medium text-blue-500 text-xl px-7 py-3 border border-blue-500 hover:border-blue-600 rounded"
            @click="showModal = !showModal" to="#">Connexion
        </NuxtLink>
        <NuxtLink @click="showModal2 = !showModal2"
                  class="text-white text-xl py-3 px-7 rounded-md bg-blue-500 font-medium hover:bg-blue-600 hover:text-white transition-all"
                  to="#">Inscription
        </NuxtLink>
      </div>

      <Modal class="" v-model:show="showModal" bgColor="bg-gray-900 bg-opacity-80">
        <div @click.stop="" class="relative bg-white rounded-lg animate-fade shadow-xl w-3/5">
          <!-- Close button -->
          <div class="flex justify-between p-5 border-b border-gray-300">
            <span class="flex justify-center w-full">
              <h1 class="font-bold text-3xl uppercase text-blue-500  text-center rounded text-center">Connexion</h1>
            </span>
          </div>
          <div class="px-4 pb-2 mt-5">
            <div class="container px-6 py-12 h-full">
              <form @submit.prevent="">
                <div class="flex items-center h-full gap-6 text-gray-800">
                  <div class="hidden md:block md:w-1/2 mb-12 md:mb-0">
                    <img src="../assets/svg/login.svg" class="w-full" alt="Phone image"/>
                  </div>
                  <div class="w-full md:w-1/2 lg:ml-20">
                    <form>
                      <!-- Email input -->
                      <div class="mb-6">
                        <input
                            type="email"
                            class="form-control block w-full h-14 rounded-lg text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Addresse email"
                        />
                      </div>

                      <!-- Password input -->
                      <div class="mb-6">
                        <input
                            type="password"
                            class="form-control block w-full h-14 rounded-lg text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Mot de passe"
                        />
                      </div>

                      <div class="flex justify-between items-center mb-6">
                        <div class="form-group form-check">
                          <input
                              type="checkbox"
                              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                              id="exampleCheck3"
                              checked
                          />
                          <label class="form-check-label inline-block text-gray-800" for=""
                          >Se rappeller de moi</label
                          >
                        </div>
                        <a
                            href="#!"
                            class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                        >Mot de passe oublié?</a
                        >
                      </div>

                      <!-- Submit button -->
                      <button
                          type="submit"
                          class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                      >
                        Se connecter
                      </button>

                      <div
                          class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                      >
                        <p class="text-center font-semibold mx-4 mb-0">OU</p>
                      </div>

                      <a
                          class="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                          style="background-color: #3b5998"
                          href="#!"
                          role="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                      >
                        <!-- Facebook -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            class="w-3.5 h-3.5 mr-2"
                        >
                          <path
                              fill="currentColor"
                              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                          />
                        </svg>
                        Continuez avec Facebook
                      </a>
                      <a
                          class="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                          style="background-color: #55acee"
                          href="#!"
                          role="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                      >
                        <!-- Twitter -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            class="w-3.5 h-3.5 mr-2"
                        >
                          <path
                              fill="currentColor"
                              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                          />
                        </svg>
                        Continuez avec Twitter
                      </a>
                    </form>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>

      <Modal class="" v-model:show="showModal2" bgColor="bg-gray-900 bg-opacity-80">
        <div @click.stop="" class="relative bg-white rounded-lg animate-fade shadow-xl w-3/5">
          <!-- Close button -->
          <div class="flex justify-between p-5 border-b border-gray-300">
            <span class="flex justify-center w-full">
              <h1 class="font-bold text-3xl uppercase text-blue-500  text-center rounded text-center">Inscription</h1>
            </span>
          </div>
          <div class="px-4 pb-2 mt-5">
            <div class="container px-6 py-12 h-full">
              <form @submit.prevent="">
                <div class="flex items-center h-full gap-6 text-gray-800">
                  <div class="hidden md:block md:w-1/2 mb-12 md:mb-0">
                    <img src="../assets/svg/login.svg" class="w-full" alt="Phone image"/>
                  </div>
                  <div class="w-full md:w-1/2 lg:ml-20">
                    <form>
                      <!-- Email input -->
                      <div class="mb-6">
                        <input
                            type="text"
                            class="form-control block w-full h-14 rounded-lg text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Nom de la Sociéte"
                        />
                      </div>

                      <div class="mb-6">
                        <input
                            type="text"
                            class="form-control block w-full h-14 rounded-lg text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Nom complet du gérant"
                        />
                      </div>

                      <div class="mb-6">
                        <input
                            type="email"
                            class="form-control block w-full h-14 rounded-lg text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Email de la société"
                        />
                      </div>

                      <div class="mb-6">
                        <input
                            type="text"
                            class="form-control block w-full h-14 rounded-lg text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Domaine d'activité"
                        />
                      </div>

                      <!-- Password input -->
                      <div class="mb-6">
                        <input
                            type="password"
                            class="form-control block w-full h-14 rounded-lg text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Mot de passe"
                        />
                      </div>

                      <div class="mb-6">
                        <input
                            type="password"
                            class="form-control block w-full h-14 rounded-lg text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Confirmer le mot de passe"
                        />
                      </div>

                      <div class="flex justify-center items-center mb-6">
                        <a
                            href="#!"
                            class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                        >Vous avez déja un compte? <strong class="ml-4 underline text-blue-600">Se connecter</strong></a
                        >
                      </div>

                      <!-- Submit button -->
                      <button
                          type="submit"
                          class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                      >
                        Se connecter
                      </button>

                      <div
                          class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                      >
                        <p class="text-center font-semibold mx-4 mb-0">OU</p>
                      </div>

                      <a
                          class="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                          style="background-color: #3b5998"
                          href="#!"
                          role="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                      >
                        <!-- Facebook -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            class="w-3.5 h-3.5 mr-2"
                        >
                          <path
                              fill="currentColor"
                              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                          />
                        </svg>
                        Continuez avec Facebook
                      </a>
                      <a
                          class="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                          style="background-color: #55acee"
                          href="#!"
                          role="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                      >
                        <!-- Twitter -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            class="w-3.5 h-3.5 mr-2"
                        >
                          <path
                              fill="currentColor"
                              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                          />
                        </svg>
                        Continuez avec Twitter
                      </a>
                    </form>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>

      <!-- Mobile toggle -->
      <div class="md:hidden">
        <button @click="drawer">
          <svg class="h-8 w-8 fill-current text-black" fill="none" stroke-linecap="round"
               stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Dark Background Transition -->
      <transition enter-class="opacity-0" enter-active-class="ease-out transition-medium"
                  enter-to-class="opacity-100" leave-class="opacity-100"
                  leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
        <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
          <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
        </div>
      </transition>

      <!-- Drawer Menu -->
      <aside
          class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
          :class="isOpen ? 'translate-x-0' : '-translate-x-full'">

        <div class="close">
          <button class="absolute top-0 right-0 mt-4 mr-4" @click=" isOpen = false">
            <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round"
                 stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <span @click="isOpen = false" class="flex w-full items-center py-2 border-b">
                         <nuxt-link to="/">
                              <img src="../public/Ok1.png" alt="">
                         </nuxt-link>
                    </span>

        <span class="flex w-full items-center border-b">
                    <input required type='search' name="search" id="search" placeholder="Recherche"
                           class="w-full  drop-shadow-md rounded-md border border-orange-600 focus:ring-0 focus:border-green-400 animate-slideRight"/>
                    </span>


        <div class="font-serif space-x-8 lg:block">


        </div>

        <ul class="divide-y font-serif">
          <li>
            <NuxtLink to="/" @click="isOpen = false" class="my-4 inline-block">Accueil</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/service" @click="isOpen = false" class="my-4 inline-block">Nos Services</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/entreprise" @click="isOpen = false" class="my-4 inline-block">Entreprises</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" @click="isOpen = false" class="my-4 inline-block">Contact</NuxtLink>
          </li>
          <li>
            <NuxtLink @click="showModal = !showModal, isOpen = false"
                      class="my-4 w-full text-center font-semibold cta inline-block bg-blue-800 hover:bg-blue-600 px-3 py-2 rounded text-white"
                      to="#">Connexion
            </NuxtLink>
          </li>
          <li>
            <NuxtLink @click="showModal2 = !showModal2, isOpen = false"
                      class="my-2 w-full text-center font-semibold cta inline-block bg-green-600 hover:bg-orange-600 px-3 py-2 rounded text-white hover:bg-orange-600 hover:text-white transition-all"
                      to="#">Inscription
            </NuxtLink>
          </li>
        </ul>

        <div class="follow">
          <p class="italic font-sans text-sm">Suivez-nous sur nos Pages:</p>
          <div class="social flex space-x-5 mt-4 ">
            <a href="#">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"
                   class="h-5 w-5 fill-current text-gray-900 hover:text-blue-800 hover:rounded-full" role="img"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                </path>
              </svg>
            </a>
            <a href="#">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
                   class="h-5 w-5 fill-current text-gray-900 hover:text-blue-800 hover:rounded-full" role="img"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                </path>
              </svg>
            </a>
            <a href="#">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
                   class="h-5 w-5 fill-current text-gray-900 hover:text-blue-800 hover:rounded-full" role="img"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                </path>
              </svg>
            </a>
            <a href="#">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube"
                   class="h-5 w-5 fill-current text-gray-900 hover:text-blue-800 hover:rounded-full" role="img"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor"
                      d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                </path>
              </svg>
            </a>
          </div>
        </div>

      </aside>

    </div>
  </header>
</template>

<script setup>
import CloseIcon from "@/assets/icons/close.svg?component";

const activeLink = useState("activeLink", () => "Home");
const links = ["Accueil", "Nos Services", "Entreprises", "Contact"];
const showModal = useState("showModal", () => false);
const showModal2 = useState("showModal2", () => false);
</script>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  }
};
</script>

<style scoped>
.hover {
  --c: linear-gradient(#000 0 0); /* update the color here */

  padding-bottom: 0.6em;
  background: var(--c), var(--c);
  background-size: 0.3em 0.1em;
  background-position: 50% 100%;
  background-repeat: no-repeat;
  transition: 0.3s linear, background-size 0.3s 0.2s linear;
}

.hover:hover {
  background-size: 40% 0.1em;
  background-position: 10% 100%, 90% 100%;
}
</style>