<template>
	<section class="checkout-area">
		<div class="error red center-align white-text">
			{{ stripeValidationError }}
		</div>
		<!-- <div class="name-section">
			<div class="name-input">
				<div class="col-4">
					<fieldset class="form-group">
						<legend>First Name</legend>
						<input type="text" />
					</fieldset>
				</div>

				<div class="col-4">
					<fieldset class="form-group">
						<legend>Last Name</legend>
						<input type="text" />
					</fieldset>
				</div>
			</div>
		</div> -->

		<div class="number-section">
			<div>Card Number</div>
			<div id="card-number-element">
				<input type="text" />
			</div>
		</div>

		<div class="date-section">
			<div class="col-3">
				<label>Expiry Date</label>
				<div id="card-expiry-element"></div>
			</div>
			<div class="col-3">
				<label>CVC</label>
				<div id="card-cvc-element"></div>
			</div>
		</div>
		<div class="col s12 place-order-button-block">
			<button class="btn col s12 #e91e63 pink" @click="placeOrderButtonPressed">Place Order</button>
		</div>
	</section>
</template>

<style src="./CheckOut.css" scoped></style>
<script src="./CheckOut.js"></script>
