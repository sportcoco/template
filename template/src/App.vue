<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

{% if uViewUI %}
<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
</style>
{% else %}
<style>
	/*每个页面公共css */
	@import "colorui/colorui/main.css";
	@import "colorui/colorui/icon.css";
	@import "colorui/colorui/animation.css";
</style>
{% endif %}