<template>
  <div id="translateForm">
  	<div>
		<form v-on:submit="formSubmit">
			<input class="form-control" type="text" v-model="textToTranslate" placeholder="请输入需要翻译的内容" />
			<select class="form-control" v-model="language">
				<option value="en">English</option>
				<option value="ru">Russian</option>
				<option value="ko">Korean</option>
				<option value="ja">Janpenese</option>
			</select>
			<input class="btn btn-primary" type="submit" value="翻译">
		</form>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'translateForm',
  data:function(){
  	return {
  		textToTranslate:"",
  		language:""
  	}
  },
  methods:{
  	formSubmit:function(e){
  		//alert(this.textToTranslate);
  		this.$emit("formSubmit",this.textToTranslate,this.language);
  		e.preventDefault();
  	}
  },
  created:function(){
  	this.language = "en";
  }
}
</script>

<style>
#translateForm{
	width: 600px;
	margin: 0 auto;
	border: 1px solid #f4f4f4;
	background-color: #f1f1f1;
	background-color: rgba();
	padding: 40px 15px;
	border-radius: 10px;
}
.form-control{
	width: 200px;
	display: block;
	float: left;
	margin-left: 30px;
}
.btn{
	margin-left: 30px;
}
</style>
