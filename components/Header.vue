<template>
	<header
		class="flex space-x-4 items-center justify-between py-7 lg:px-desktop mx-auto sticky top-0 z-50 bg-white/80">
		<h1 class="font-bold text-2xl">
			<!-- CONTACT<span class="text-red-600">PRO</span> -->
			<img src="../public/Ok1.png" alt="">
		</h1>
		<input required type='search' name="search" id="search" placeholder="Recherche"
			class="w-1/4 py-3 px-8 drop-shadow-md rounded-md border border-orange-600 focus:ring-0 focus:border-green-400 z-40 animate-slideRight" />
		<!-- <button type="submit"
			class="block text-serif bg-orange-600 w-1/4 py-3 rounded-md font-bold text-white z-40 animate-slideRight">
			Rechercher
		</button> -->
		<ul class="font-serif items-center space-x-14 hidden lg:flex">
			<li class="group space-x-10" @click="activeLink = link" :class="{ 'text-gray-500': activeLink != link }">

				<NuxtLink class="font-medium" to="/">Accueil</NuxtLink>
				<NuxtLink class="font-medium" to="/service">Nos Services</NuxtLink>
				<NuxtLink class="font-medium" to="/entreprise">Entreprise</NuxtLink>
				<NuxtLink class="font-medium" to="/contact">Contact</NuxtLink>



			</li>
		</ul>
		<div class="font-serif space-x-8 hidden lg:block">
			<NuxtLink class="font-medium" @click="showModal = !showModal" to="#">Connexion</NuxtLink>
			<NuxtLink @click="showModal2 = !showModal2"
				class="text-white py-3 px-7 rounded-md bg-green-600 font-medium hover:bg-orange-600 hover:text-white transition-all"
				to="#">Inscription</NuxtLink>
		</div>
		<Modal class="" v-model:show="showModal" bgColor="bg-white/90">
			<div @click.stop="" class="relative bg-white rounded-lg max-w-lg min-w-[400px] animate-fade shadow-xl">
				<!-- Close button -->
				<div class="flex justify-between p-5 border-b border-gray-300">
					<h1 class="font-bold text-2xl">Connexion</h1>
					<button @click="showModal = false" class="">
						<CloseIcon
							class="w-5 h-5 text-gray-400 hover:text-red-600 hover:rotate-[360deg] transition-all duration-500 hover:bg-gray-100 rounded-full focus:outline-dotted focus:outline-gray-300 active:outline active:outline-gray-300" />
					</button>
				</div>
				<div class="px-4 pb-2 mt-5">
					<form @submit.prevent="">
						<div>
							<label for="Nom"
								class="block mb-1 cursor-pointer text-gray-500 font-medium">Nom</label>
							<input required type="email" name="email" id="email"
								class="w-full py-3 rounded-lg border border-gray-300 focus:ring-0 focus:border-green-400" />
							<label for="Email"
								class="block mb-1 cursor-pointer text-gray-500 font-medium">Email</label>
							<input required type="telephone" name="email" id="email"
								class="w-full py-3 rounded-lg border border-gray-300 focus:ring-0 focus:border-green-400" />

						</div>
						<div class="mt-5">
							<button type="submit"
								class="block bg-orange-600 w-full py-3 rounded-md font-bold text-white">
								Connexion
							</button>
						</div>
					</form>
				</div>
			</div>
		</Modal>

		<Modal class="" v-model:show="showModal2" bgColor="bg-white/90">
			<div @click.stop="" class="relative bg-white rounded-lg max-w-lg min-w-[400px] animate-fade shadow-xl">
				<!-- Close button -->
				<div class="flex justify-between p-5 border-b border-gray-300">
					<h1 class="font-bold text-2xl">Inscription</h1>
					<button @click="showModal2 = false" class="">
						<CloseIcon
							class="w-5 h-5 text-gray-400 hover:text-red-600 hover:rotate-[360deg] transition-all duration-500 hover:bg-gray-100 rounded-full focus:outline-dotted focus:outline-gray-300 active:outline active:outline-gray-300" />
					</button>
				</div>
				<div class="px-4 pb-2 mt-5">
					<form @submit.prevent="">
						<div>
							<label for="Nom"
								class="block mb-1 cursor-pointer text-gray-500 font-medium">Nom</label>
							<input required type="email" name="email" id="email"
								class="w-full py-3 rounded-lg border border-gray-300 focus:ring-0 focus:border-green-400" />
							<label for="Email"
								class="block mb-1 cursor-pointer text-gray-500 font-medium">Email</label>
							<input required type="telephone" name="email" id="email"
								class="w-full py-3 rounded-lg border border-gray-300 focus:ring-0 focus:border-green-400" />

							<label for="Email"
								class="block mb-1 cursor-pointer text-gray-500 font-medium">Telephone</label>
							<input required type="telephone" name="email" id="email"
								class="w-full py-3 rounded-lg border border-gray-300 focus:ring-0 focus:border-green-400" />


						</div>
						<div class="mt-5">
							<button type="submit"
								class="block bg-orange-600 w-full py-3 rounded-md font-bold text-white">
								Inscription
							</button>
						</div>
					</form>
				</div>
			</div>
		</Modal>
	</header>
</template>

<script setup>
	import CloseIcon from "@/assets/icons/close.svg?component";
	const activeLink = useState("activeLink", () => "Home");
	const links = ["Accueil", "Nos Services", "Entreprises", "Contact"];
	const showModal = useState("showModal", () => false);
	const showModal2 = useState("showModal2", () => false);
</script>