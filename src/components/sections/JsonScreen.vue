<template>
    <div class="bg-white" style="font-family: 'Courier New', Courier, monospace;">
        <textarea class="w-full h-96" v-model="content"></textarea>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="save">Save</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import contents from '../../assets/content.json';
// import * as fs from 'fs-web';
import { writeFile } from 'fs-web';

const content = ref(JSON.stringify(contents, null, 2));


const save = () => {

    writeFile('../../assets/content.json', content.value, (err) => {
        console.log('The file has been saved!');
        if (err) {
            console.error(err)
            return
        }

    })

    // fs.writeFileSync('../../assets/content.json', content.value, (err) => {
    //     console.log('The file has been saved!');
    //     if (err) {
    //         console.error(err)
    //         return
    //     }

    // })
    console.log(JSON.stringify(contents, null, 2));
    alert('Saved!');

}

</script>