<template>
    <div class="bg-white" style="font-family: 'Courier New', Courier, monospace;">
       <textarea class="w-full h-96" v-model="content"></textarea>
       
       <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="save">Save</button>
    </div>
</template>

<script setup>
 import { ref } from 'vue';
 import contents from '../../assets/content.json';
 import * as fs from 'fs-web';
  
 const content = ref(JSON.stringify(contents, null, 2));
 
 
 const save = () =>{
    fs.writeFile('./content.jsons', content.value, (err) => {
        if (err) {
            console.error(err)
            return
        }
        
    })
    console.log(JSON.stringify(contents, null, 2)); 
    alert('Saved!');
    
 }

</script>