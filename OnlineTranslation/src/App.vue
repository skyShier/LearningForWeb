<template>
  <div id="app">
  <h1>在线翻译</h1>
  <h5 class="text-muted">简单 / 易用 / 便捷</h5>
	<translateForm v-on:formSubmit="translateText"></translateForm>
  <translateOutput v-text="translatedText"></translateOutput>
  </div>
</template>

<script>
import TranslateForm from './components/TranslateForm'
import TranslateOutput from './components/TranslateOutput'


export default {
  name: 'App',
  data:function(){
  	return{
  		translatedText:""
  	}
  },
  components:{
  	TranslateForm,TranslateOutput
  },
  methods:{
  	translateText:function(text,language){
  		//alert(text);
  		this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20181230T045620Z.e8b186b41ca6b45c.dd81ae84dfc89c229bf345ad2870f182badacc31&lang='+language+'&text='+text)
  		.then((response)=>{
  			//console.log(response.body.text[0]);
  			this.translatedText = response.body.text[0];
  		})
  	}
  }
}
</script>

<style>
h1{
	
}
h1,h5{
	width: 150px;
	margin: 0 auto;
	text-align: center;
	margin-bottom: 20px;
}
#app{
	margin-top: 30px;
}
</style>
