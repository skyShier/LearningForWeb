<template>
  <div id="translateOutput">
	<h2>{{translatedText}}</h2>
  </div>
</template>

<script>
export default {
  name: 'translateOutput',
  props:[
  	"translatedText"
  ]
}
</script>

<style>
#translateOutput{
	width: 600px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 30px;
	text-align: center;
	font-size: 18px;
}
</style>
