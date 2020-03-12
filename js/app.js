Vue.component('form-game',{
    data() {
        return {
            judul: 'Robocop',
            genre: 'Shooting',
            harga: '1,000,00',
            data:[]   
        },
    
        
    },

    
    template: `<div class="card border-primary">
           <i class="fa fa-gamepad fa-5x" aria-hidden="true"></i>
              <div class="card-body">

              <div class="form-group">
                <label for="">Judul Game</label>
                <input type="text" v-model="judul" class="form-control">
                <small id="helpId" class="text-muted">Masukkan judul game</small>
              </div>

              <div class="form-group">
                <label for="">Genre Game</label>
                <input type="text"  v-model="genre" class="form-control">
                <small id="helpId" class="text-muted">Masukkan genre game</small>
              </div>

              <div class="form-group">
                <label for="">Harga</label>
                <input type="text"  v-model="harga" class="form-control">
                <small id="helpId" class="text-muted">Help text</small>
              </div>
              
            </div>
              <button type="button" class="btn btn-primary" @click="simpan">Submit</button>

               <div class="card border-primary">
                <div class="card-body">
                  <div class="panel-body">
                      <p class="text-center" v-for="(item, index) in data" :key="index">
                       <b>Judul :</b> {{ item.judul }} <button type="button" class="btn btn-success btn-sm mx-3" @click="edit(index)">edit</button><button type="button" class="btn btn-success btn-sm mx-3" @click="delete(index)">edit</button>  <br/><br/>
                        <b>Genre :</b> {{ item.judul }} {{ item.genre }} <button type="button" class="btn btn-success btn-sm mx-3" @click="edit(index)">edit</button><button type="button" class="btn btn-success btn-sm mx-3" @click="delete(index)">edit</button><br/><br/>
                        <b>Harga :</b> {{ item.harga }} <button type="button" class="btn btn-success btn-sm mx-3" @click="edit(index)">edit</button> <button type="button" class="btn btn-success btn-sm mx-3" @click="delete(index)">edit</button> 
                      </p>
                  </div>
                </div>
              </div>
      </div>`,
 methods: {
    simpan() {

     this.data.push(
       {
         judul: this.judul,
         genre: this.genre,
         harga: this.harga
       },
     )
     this.judul = ''
     this.genre = ''
     this.harga = ''
    },
    delete(index){
      this.data.splice(index, 1)
    },

    edit(index){
      this.buttonType = 'edited'

    }




  },
   
    
})



var game = new Vue({
    el: '#game',

})



