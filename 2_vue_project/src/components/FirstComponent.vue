<template>
    <div> <!-- Vue components can only have one root element-->
        <h1>Hello VUE!!</h1>
        <p>My name is {{ name }}, I'm a {{ profession }}</p> <!-- {{}} "execute" vue code -->
    </div>
</template>

<script>
    export default {
        // Exported object
        name: 'FirstComponent',
        // Data to be used in the component
        data() {
            return {
                name: "Diego B.",
                profession: "Jockey",
            }
        }
    }
</script>