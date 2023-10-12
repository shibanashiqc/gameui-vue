<template>
  <!-- <div class="fade-in style"> -->
  <section class="pt-16 pb-25 min-h-screen-75 space text-center fade-in">

    <div class="text-white py-20 px-10">

      <span class="font-xl  text-white">
        {{ msg }}
      </span>

      <div class="grid grid-cols-1 md:grid-cols-6 gap-4 x-gap pr-3 py-4">
        <div class="xl:col-span-2 md:col-span-6 sm:col-span-6">
          <button style="font-size: 21px;"
            class="btn border-dotted border-2 border-white-500  text-pink-300 font-bold py-2">CHART</button>
        </div>
        <div>

          <button style="font-size: 21px;"
            class="btn border-dotted border-2 border-pink-500 bg-green-200  text-black font-bold py-2">BUY</button>
          <!-- <button
            class="border-dotted border-2 border-white-500 btn bg-green-200 hover:bg-black-200 text-black-200 font-bold py-2">BUY</button> -->
        </div>
      </div>

    </div>

  </section>


  <div class="bg-pink-300 rounded-lg">
    <section id="about" class="">

      <div class="rounded-t-lg  h-14 shadow bg-pink-300 border-gray-700">
      </div>
      <div class="items-center">
        <div class="max-w p-10  shadow bg-pink-300 ">

          <!-- <div class="bg-gray-800 w-12 h-9" style="position: relative;left: 12%;top: 88px;"></div> -->
          <div class="flex justify-center pt-3 lg:px-32 ">
            <div class="bg-white mt-10 w-full">
              <p class="mb-3 font-normal p-10 fade-in" style="font-size: 16px;"> {{ content }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-pink-300" id="tokenomics">
      <div class="rounded-t-lg  h-14 bg-[#101021] w-full">
      </div>
      <div class="bg-[#101021] ">





        <div class="pb-5 pt-20 lg:px-4 rounded-md w-full">



          <div
            class="grid grid-cols-1 lg:col-span-3 sm:grid-cols-3 lg:grid-cols-3 gap-4 text-sm font-medium text-white text-left px-10 lg:px-20 fade-in">
            <div class="text-left">
              <h5 style="font-size: 45px;"
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-whiter text-white pt-2">CA :
              </h5>
              {{ ca }}
            </div>
            <div class="text-left">
              <h5 style="font-size: 45px;"
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white pt-2"> TOTAL SUPPLY :</h5>
              {{ total_supply }}
            </div>
            <div class="text-left lg:pl-20">
              <h5 style="font-size: 45px;"
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white pt-2"> TAX :</h5>
              {{ tax }}
            </div>
          </div>



          <div class="w-full flex justify-end px-2 mt-2">

          </div>
          <div class="overflow-x-auto mt-6 px-20">

            <!-- <table class="table-auto border-collapse w-full">
            <thead>
              <tr class=" text-sm font-medium text-white text-left" >
                <th>CA : </th>
                <th>TOTAL SUPPLY : </th>
                <th>TAX : </th>
              </tr>
            </thead>
            <tbody class="text-sm font-normal text-white">

              <tr class="border-gray-200">
                <td class="px-4 py-4"> 0*0ndsndsasasshjsasa</td>
                <td class="px-4 py-4">20000000000</td>
                <td class="px-4 py-4">4.2 % Buy 6.8 % Sell</td>
              </tr>
            </tbody>
          </table> -->
          </div>


          <div class="tn-atom bg-green-200 " style="height: 1px;"></div>



        </div>

      </div>

    </section>
  </div>


  <section class="bg-[#101021] pt-5 lg:px-20">

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 x-gap pr-3 py-4 pr-2 px-2">

      <div class="border border-gray-200  shadow bg-pink-300 border-gray-700 items-center "
        v-for="auto in section_1_topics" :key="auto.title">
        <h3 class="fade-in mb-2 text-2xl font-bold tracking-tight  text-center pt-2">{{ auto.title }}</h3>
        <p class="fade-in p-2 mb-3 font-normal " style="font-size: 18px;" v-html="auto.description">

        </p>
      </div>

      <!-- <div class=" border border-gray-200  shadow bg-pink-300 border-gray-700 items-center">
        <h3 class="mb-2 text-2xl font-bold tracking-tight  text-center pt-2">AUTO PIOLOTS</h3>
        <p class="p-2 mb-3 font-normal ">
          {{ content }}
        </p>
      </div> -->

    </div>
  </section>


  <section class="bg-[#101021] lg:p-32 p-12" id="roadmap">

    <h2 class="text-center text-white pb-2 font-bold text-4xl tracking-wider">
      ROADMAP
    </h2>
    <!-- <hr class="border-2 border-blue-200 mb-5" /> -->

    <hr class="border-1 border-green-200 mb-5" />
    <div class="pt-2" v-for="roadmap in roadmaps" :key="roadmap.title">

      <div
        class="pb-5 grid grid-cols-1 lg:col-span-3 sm:grid-cols-3 lg:grid-cols-3 gap-4 text-sm font-medium text-white text-left px-10">
        <div class="text-center">
          <img class="lg:h-48 md:h-20 object-cover object-center" :src="roadmap.img" alt="blog cover" />
        </div>
        <div class="text-center lg:pt-12">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-whiter text-white pt-2">{{ roadmap.title }}
          </h5>

          <!-- <div class="lg:px-10" v-if="roadmap.load">
            <div class="flex  flex-wrap" v-for="point in roadmap.points" :key="point">
              <a href="#" class="text-white  md:mb-2 lg:mb-0">
                <p class="inline-flex items-center">
                  * {{ point }}
                </p>
              </a>
            </div>
          </div> -->

          <ul class="lg:px-10" v-if="roadmap.load">
            <li v-for="point in roadmap.points" :key="point" class="text-white-200  md:mb-2 lg:mb-0 list-disc">
              {{ point }}
            </li>
          </ul>

        </div>
        <div class="text-center lg:px-20 lg:pt-12 px-20">
          <!-- arrow  -->
          <div class="tab">
            <!-- <input type="checkbox" name="accordion-1" :id="point" class="tab__checkbox" v-on:click="roadmap.load = !roadmap.load" /> -->
            <!-- <label for="{{ point }}" :class="roadmap.load ? 'tab__labels' : 'tab__label'" v-on:click="roadmap.load = !roadmap.load" ></label> -->

            <div v-on:click="roadmap.load = !roadmap.load">

              <div v-if="roadmap.load">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 208 180" fill="none">
                  <path
                    d="M102.057 0.999996C102.827 -0.333337 104.751 -0.333333 105.521 1L206.846 176.5C207.616 177.833 206.654 179.5 205.114 179.5H2.4641C0.924496 179.5 -0.0377495 177.833 0.732051 176.5L102.057 0.999996Z"
                    fill="#94E6BE" />
                </svg>
              </div>

              <div v-else>

                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 208 180" fill="none"
                  version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                  transform="matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,0,0)">
                  <path
                    d="M102.057 0.999996C102.827 -0.333337 104.751 -0.333333 105.521 1L206.846 176.5C207.616 177.833 206.654 179.5 205.114 179.5H2.4641C0.924496 179.5 -0.0377495 177.833 0.732051 176.5L102.057 0.999996Z"
                    fill="#94E6BE"></path>
                </svg>

              </div>


            </div>






          </div>
        </div>

      </div>

      <hr class="border-1 border-green-200 mb-5" />

    </div>


    <!-- <div class="flex flex-wrap -m-4">

      <div class="p-4 md:w-1/3" v-for="roadmap in roadmaps" :key="roadmap.title">
        <div class="h-full border-2 border-gray-200 border-opacity-60  overflow-hidden">
          <div class="w-full">
            <div class="w-full flex p-2">
              <div class="p-2 ">
                <img :src="roadmap.img" alt="author" class="w-10 h-10 rounded-full overflow-hidden" />
              </div>
              <div class="pl-2 pt-2 text-white">
                <p class="font-bold">{{ roadmap.title }}</p>
                <p class="text-xs">{{ roadmap.date }}</p>
              </div>
            </div>
          </div>


          <img class="lg:h-48 md:h-36 w-full object-cover object-center" :src="roadmap.img" alt="blog cover" />

          <div class="p-4">

            <div class="flex items-center flex-wrap" v-for="point in roadmap.points" :key="point">
              <a href="#" class="text-white  md:mb-2 lg:mb-0">
                <p class="inline-flex items-center">
                  * {{ point }}
                </p>
              </a>

            </div>


          </div>
        </div>
      </div>

    </div> -->







  </section>




  <section class="bg-[#101021] from-pink-50 to-indigo-100" id="lore">


    <div class="rounded-t-lg w-full  h-14 shadow bg-green-200 ">
    </div>

    <div class="bg-green-200 p-12 lg:p-20">


      <!-- <h1 class="text-center font-bold text-5xl text-white">Lore</h1> -->
      <hr class="border-1 border-black mb-5" />

      <!-- <div class="grid justify-center md:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-7 my-10">
     
      <div class="bg-dark  border shadow-md max-w-xs md:max-w-none overflow-hidden" v-for="lo in lore"
        :key="lo.title">
        <img class="h-56 lg:h-60 w-full object-cover" :src="lo.img" alt="" />
        <div class="p-3">
        
          <h3 class="font-semibold text-xl leading-6 text-white my-2">
            {{ lo.title }}
          </h3>

          <p class="paragraph-normal text-blue-600 text-overflow-handle" v-if="!lo.load">
            {{ lo.desc }}
          </p>

          <p class="text-blue-600" v-if="lo.load">
            {{ lo.desc }}
          </p>


          <button class="mt-3 block text-white" href="#" v-on:click="lo.load = !lo.load">
            Read More </button>
        </div>
      </div>


    </div> -->

      <!-- <hr class="border-2 border-dark-200 mb-5" /> -->
      <div class="pt-2" v-for="lo in lore" :key="lo.title">

        <div
          class="pb-5 grid grid-cols-1 lg:col-span-3 sm:grid-cols-3 lg:grid-cols-3 gap-4 text-sm font-medium  text-left px-10">
          <div class="text-center">
            <img class="lg:h-48 md:h-20 object-cover object-center" :src="lo.img" alt="blog cover" />
          </div>
          <div class="text-center lg:pt-12">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-whiter  pt-2">{{ lo.title }}
            </h5>

            <div class="lg:px-10" v-if="lo.load">
              <p class="text-dark">
                {{ lo.desc }}
              </p>
            </div>

          </div>
          <div class="text-center lg:px-20 lg:pt-12 px-28">
            <!-- arrow  -->
            <div class="tab">
              <!-- <input type="checkbox" name="accordion-1" :id="point" class="tab__checkbox" v-on:click="roadmap.load = !roadmap.load" /> -->
              <label for="{{ lo }}" :class="lo.load ? 'tab__labels' : 'tab__label'"
                v-on:click="lo.load = !lo.load"></label>

            </div>
          </div>

        </div>

        <hr class="border-1 border-black mb-5" />

        <!-- <hr class="border-2 border-grey-800 mb-5" /> -->

      </div>
    </div>


  </section>



  <footer class="bg-[#101021] from-gray-100 via-[#bce1ff] to-gray-100">
    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 gap-32 lg:grid-cols-3">
        <div>
          <img src="#" class="mr-5 h-6 sm:h-9" alt="logo" />
          <p class="max-w-xs mt-4 text-sm text-gray-600">
            {{ footer.des }}
          </p>
          <div class="flex mt-8 space-x-6 text-gray-600">
            <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
              <span class="sr-only"> Facebook </span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd" />
              </svg>
            </a>
            <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
              <span class="sr-only"> Instagram </span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd" />
              </svg>
            </a>
            <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
              <span class="sr-only"> Twitter </span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
              <span class="sr-only"> GitHub </span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd" />
              </svg>
            </a>
            <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
              <span class="sr-only"> Dribbble </span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>


        <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
          <a v-for="link in footer.links" :key="link" class="hover:opacity-75" :href="link.href"> {{ link.name }} </a>
        </nav>

        <div class="grid grid-cols-1 gap-2 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-2">
          <!-- <div>
            <p class="font-medium">
              Company
            </p>
            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <a class="hover:opacity-75" href> About </a>
              <a class="hover:opacity-75" href> Meet the Team </a>
              <a class="hover:opacity-75" href> History </a>
              <a class="hover:opacity-75" href> Careers </a>
            </nav>
          </div> -->
          <!-- <div>
            <p class="font-medium">
              Services
            </p>
            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <a class="hover:opacity-75" href> 1on1 Coaching </a>
              <a class="hover:opacity-75" href> Company Review </a>
              <a class="hover:opacity-75" href> Accounts Review </a>
              <a class="hover:opacity-75" href> HR Consulting </a>
              <a class="hover:opacity-75" href> SEO Optimisation </a>
            </nav>
          </div> -->
          <!-- <div>
            <p class="font-medium">
              Helpful Links
            </p>
            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <a class="hover:opacity-75" href> Contact </a>
              <a class="hover:opacity-75" href> FAQs </a>
              <a class="hover:opacity-75" href> Live Chat </a>
            </nav>
          </div> -->
          <div>
            <!-- <p class="font-medium">
              Legal
            </p> -->



          </div>
        </div>
      </div>
      <p class="mt-8 text-xs text-gray-800">
        © {{ footer.copy_right }}
      </p>
    </div>
  </footer>
  <!-- </div> -->
</template>

<script>

import contents from './content.json';
const content = contents.section_1;
const roadmaps = contents.roadmaps;
const lore = contents.lore;
const title = contents.title;
const ca = contents.ca;
const total_supply = contents.total_supply;
const tax = contents.tax;
const section_1_topics = contents.section_1_topics;
const footer = contents.footer;

export default {
  name: 'HomeSection',
  data() {
    return {
      msg: title,
      content: content,
      roadmaps: roadmaps,
      lore: lore,
      ca: ca,
      total_supply: total_supply,
      tax: tax,
      section_1_topics: section_1_topics,
      footer: footer
    }
  }
}

</script>

<style>
.bd {
  height: 300px;
  width: 50%;
  background-color: yellow;
  border-radius: 1%;

}

.hgt {
  /* height: 350px; */
}




.text-overflow-handle {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis
}


.squareCut {
  position: relative;
  z-index: 1;
  top: -55px;
  /* left:370px; */
}

.squareCut:before,
.squareCut:after {
  content: "";
  position: absolute;
  background-color: #fff;
  z-index: -1;
}

.squareCut:before {
  width: 300px;
  height: 90px;
  top: -25px;
  left: -22px;
}

.squareCut:after {
  height: 130px;
  width: 260px;
  left: -2px;
  top: -45px;
}



.btn {
  width: 300px;
  height: 50px;
}

@media (min-width: 320px) {
  .font-xl {
    font-size: 3rem;
  }
}

@media (min-width: 640px) {
  .font-xl {
    font-size: 4rem;
  }
}

@media (min-width: 768px) {
  .font-xl {
    font-size: 7rem;
  }
}

@media (min-width: 1024px) {
  .font-xl {
    font-size: 7rem;
  }
}

@media (min-width: 1280px) {
  .two {
    /* //square */
    /* clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); */
    clip-path: polygon(6% 0, 100% 0, 100% 79%, 95% 100%, 0 100%, 0 19%);
    border: none;
    padding: 50px;

  }

  .font-xl {
    font-size: 10rem;
    text-align: center;
  }
}

.space {
  /* padding: 0 1em; */
}

.x-gap {
  margin-left: auto;
  margin-right: auto;

}

.align-middle {
  vertical-align: middle;
}


.tab input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.tab__content {
  max-height: 0;
  overflow: hidden;
  transition: all 0.35s;
}

.tab input:checked~.tab__content {
  max-height: 10rem;
}

/* Visual styles */
.accordion {
  color: var(--theme);
  border: 2px solid;
  border-radius: 0.5rem;
  overflow: hidden;
}

.tab__label,
.tab__close {
  display: flex;
  color: white;
  background: var(--theme);
  cursor: pointer;
  font-size: 60px;
  color: yellowgreen;
}

.tab__labels {
  display: flex;
  color: white;
  background: var(--theme);
  cursor: pointer;
  font-size: 60px;
  color: yellowgreen;
}

.tab__label {
  justify-content: space-between;
  padding: 1rem;
}

.tab__label::after {
  content: "\276F";
  width: 1em;
  height: 1em;
  text-align: center;
  transform: rotate(90deg);
  transition: all 0.35s;
}

.tab__labels::after {
  content: "\276F";
  width: 1em;
  height: 1em;
  text-align: center;
  transform: rotate(270deg);
  transition: all 0.35s;
}

.tab input:checked+.tab__label::after {
  transform: rotate(270deg);
}

.tab__content p {
  margin: 0;
  padding: 1rem;
}

.tab__close {
  justify-content: flex-end;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
}

.accordion--radio {
  --theme: var(--secondary);
}

/* Small animation */
.tab__label:hover::after {
  animation: bounce .5s infinite;
}


@keyframes bounce {
  25% {
    transform: rotate(90deg) translate(.25rem);
  }

  75% {
    transform: rotate(90deg) translate(-.25rem);
  }
}



.fade-in {
  animation: fadeIn ease 5s;
  -webkit-animation: fadeIn ease 5s;
  -moz-animation: fadeIn ease 5s;
  -o-animation: fadeIn ease 5s;
  -ms-animation: fadeIn ease 5s;
}


@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.tn-atom {
  opacity: 0.3;
  background-color: #a9fad2;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
}

/* The style below is just for the appearance of the example div */

.style {
  width: 90vw;
  height: 90vh;
  text-align: center;
  padding-top: calc(50vh - 50px);
  margin-left: 5vw;
  /* border:4px double #F00; */
  /* background-color:#000; */
}

.style p {
  color: #fff;
  font-size: 50px;
}
</style>