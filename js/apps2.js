Vue.component('book', {
    data() {
        return {
            arrayBook: [
                {
                    title: 'Hello book'
                },
                {
                    title: 'Hello root'
                }

            ],

            modelTitle: '',
            buttonType: 'created',
            editIndex: null
        }
    },

    template: '<div><div><form @submit.prevent="addBook"><input type="text" v-model="modelTitle"><input type="submit" value="Save"></form></div><ul><li v-for="(item, index) in arrayBook">{{item.title }}<button @click="deleteBook(index)">Del</button><button @click="edited(index)">Edit</button></li></ul></div>',
    methods: {

        addBook() {
            if (this.buttonType == 'created') {
                this.arrayBook.push({
                    title: this.modelTitle
                })
                this.modelTitle = ''
            } else { 
                var book = this.arrayBook
                book[this.editIndex].title = this.modelTitle
                this.arrayBook = book
                this.buttonType = 'created'
                this.editIndex = null
                this.modelTitle = ''
            }
        },

        deleteBook(index) {
            this.arrayBook.splice(index, 1)
        },

        edited(index) {
            this.buttonType = 'edited'
            this.editIndex = index
            var findBook = this.arrayBook[index]
            this.modelTitle = findBook.title

        }

    }
})
this.editIndex = index
var findUser = this.users.data.karyawan[index]
this.Kaos.mKaos.push({
    title: this.kaosTitle
})
this.kaosTitle = ''  
var app = new Vue({
    el: '#app',
})