<template>
	<section class="lg:mx-desktop rounded-2xl p-8 mt-8">
		<div class="hero rounded-xl">
			<div class="basis-1/2 pl-20 pt-8 relative">

				<div class="absolute right-[10%] top-1/2 rounded-full w-5 h-5 bg-green-900"></div>

				<div class="absolute left-[40%] bottom-7 rounded-full w-5 h-5 bg-yellow-500"></div>
				<h1
					class="font-serif py-24 font-bold px-8 text-center text-white uppercase text-6xl leading-[1.15] relative z-40 animate-slideDown">
					<div class="absolute right-[20%] top-0  rounded-full w-20 h-20 bg-green-400/50 z-30"></div>
					Bienvenue Chez Nous !
				</h1>



			</div>
		</div>

		<section class="py-8 px-8 bg-[#F3F7F5] rounded-2xl">
			<div class="p-4 text-center ">
				<h1
					class="font-serif font-bold bg-white rounded-sm shadow-lg p-8 w-1/2 justify-center text-left m-8 uppercase text-blue-800 text-5xl leading-[1.15] relative z-40 animate-slideDown">
					Nos Services</h1>
				<div class="py-4 px-4 lg:py-4 flex flex-col lg:flex-row lg:space-x-4 lg:space-x-12">
					<div class="flex justify-end">
						<div class="hero1 p-4  rounded-lg  items-center">

							<h1
								class="font-sans px-8 py-8 text-orange-600 font-bold  text-left m-8 uppercase text-white-600 text-xl z-40 animate-slideDown">
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
								class="font-sans px-8 py-8 text-orange-600 font-bold justify-center text-left m-8 uppercase text-white-600 text-xl z-40 animate-slideDown">
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
						<div class="hero3  rounded-lg ">
							<h1
								class="font-sans px-8 py-8 text-orange-600 font-bold justify-center text-left m-8 uppercase text-white-600 text-xl z-40 animate-slideDown">
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

		<section class="mt-10 py-8 px-8 mx-8 my-8 lg:px-desktop lg:mx-desktop bg-[#F3F7F5] rounded-2xl">
			<div class="flex divide-x-2">
				<div class="basis-1/2 flex space-x-10">
					<h1
						class="font-serif font-bold text-center text-blue-800 uppercase text-4xl leading-[1.15] relative z-40 animate-slideDown">
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
		<About />
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
		height: 45vh;




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