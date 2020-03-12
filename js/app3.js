Vue.component('kaos',{
    data() {
        return {
            Kaos: {
                mKaos: [
                    {
                        title: 'Pull and Bear'
                    },
                    {
                        title: 'Zara',
                    },
                    {
                        title: 'Ramayana'
                    }
                ]
            },
            kaosTitle: '',
            buttonType : 'created',
            editIndex: null,
            
        }
    },

    template: `
        <div><form @submit.prevent="tambah" class="mx-auto">
            <div class="form-group col-sm-6">
                <label for="">Merk Kaos</label>
                <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId" v-model="kaosTitle">
                <small id="helpId" class="text-muted">Help text</small>
            </div>
            <input type="submit" class="btn btn-primary btn-sm" id="save" value="Save"></input>
        </form>
        <hr><hr><hr>
        <ul>
        <li v-for="(kaos, index) in Kaos.mKaos" class="my-3">{{kaos.title }}
        <button @click="deleted(index)" class="btn btn-danger btn-sm">Del</button>
        <button @click="edited(index)" class="btn btn-success btn-sm">Edit</button>
        </li>
        </ul>
        </div>`,

       methods: {
           tambah(){
               
                if (this.buttonType == 'created') {
                    this.Kaos.mKaos.push({
                        title: this.kaosTitle
                    })
                    this.kaosTitle = ''  
                }else{
                    var kaos = this.Kaos.mKaos
                    kaos[this.editIndex].title = this.kaosTitle
                    this.Kaos.mKaos = kaos
                    this.buttonType = 'created'
                    this.kaosTitle = ''
                    this.editIndex = null
                    
                    document.getElementById('save').value = 'Save'
                }
                
                          
           },

           deleted(index){
               var x = confirm("Are you sure you want to delete?");
               if(x){
                   this.Kaos.mKaos.splice(index, 1)
               }
           },

           edited(index){
               var findMkaos = this.Kaos.mKaos[index]
               var id = document.getElementById('save').value = 'Save'
              if (id === id) {
                  this.buttonType = 'edited'
                  this.editIndex = index
                  this.kaosTitle = findMkaos.title
                  document.getElementById('save').value = 'Update'
                  
              }
               
               

           }

           
           
       },
})










new Vue({
    el: '#app3',
})