<script>
	export {};
</script>

<!-- <script setup lang="ts">
// defineProps<{
// 	msg: string;
// }>();
    // "build": "run-p type-check build-only",
export {};
</script> -->

<template>
	<div class="greetings">
		<!-- <h1 class="green">{{ msg }}</h1> -->
		<h3>Checkout</h3>
		<div class="checkout-area">
			<div class="number-section">
				<div>Card Number</div>
				<div class="number-input">
					<input type="text" />
					<input type="text" />
					<input type="text" />
					<input type="text" />
				</div>
			</div>
			<div class="name-section">
				<div class="name-input">
					<div class="col-4">
						<fieldset class="form-group">
							<legend>First Name</legend>
							<input type="text" />
						</fieldset>
					</div>

					<div class="col-4">
						<fieldset class="form-group">
							<legend>Second Name</legend>
							<input type="text" />
						</fieldset>
					</div>
				</div>
			</div>
			<div class="date-section">
				<div class="date-input">
					<div class="col-3">
						<fieldset class="form-group">
							<legend>Month</legend>
							<input type="text" />
						</fieldset>
					</div>

					<div class="col-3">
						<fieldset class="form-group">
							<legend>Year</legend>
							<input type="text" />
						</fieldset>
					</div>
					<div class="col-3">
					</div>
					<div class="col-2">
						<fieldset class="form-group">
							<legend>CVC</legend>
							<input type="text" />
						</fieldset>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
* {
	margin: 0;
	padding: 0;
}

input {
	box-sizing: border-box;
	width: 100%;
  border-radius: 3px;
  border: solid 1px #777;
  color: darkgray;
}

.checkout-area {
	background-color: #eee;
}

fieldset {
	width: 100%;
	border: 0px;
}
.number-section {
	padding: 10px 30px 10px 30px;
}
.number-input {
	display: flex;
	/* flex-wrap: wrap; */
	/* justify-content: space-between; */
	gap: 20px;
}

.name-section,
.date-section {
	padding: 10px 30px 10px;
}

.name-input,
.date-input {
	display: flex;
	/* justify-content: space-between; */
	gap: 20px;
}
</style>

