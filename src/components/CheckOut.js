// import Vue from "vue";
// import BootstrapVue from "bootstrap-vue";
// // import "bootstrap/dist/css/bootstrap.css";
// // import "bootstrap-vue/dist/bootstrap-vue.css";
// Vue.use(BootstrapVue);
import { StripeCheckout } from '@vue-stripe/vue-stripe';

export default {
	// components: {
	//   StripeCheckout,
	// },

	data() {
		return {
			stripe: null,
			cardNumberElement: null,
			cardExpiryElement: null,
			cardCVCElement: null,
			stripeValidationError: null,
		};
	},
	mounted() {
		this.stripe = Stripe(
			'pk_test_51JxV0zJkaD0DoJENAo0mlSKR24WvevGgkUjojizAdubLVk98Llz9avtfPNKtjAvJF27eMoPIars2xQy2X9DkB0ax00xb63kCiR'
		);
		this.createAndMountFormElements();
	},
	methods: {
		saveDataToFireStore() {
			console.log('saveDataToFireStore');
		},
		placeOrderButtonPressed(event) {
			// console.log('event: ', event);
			this.stripe
				.createToken(this.cardNumberElement)
				.then((result) => {
					if (result.error) {
						this.stripeValidationError = result.error.message;
						console.log('result.error: ', result.error);
					} else {
						var stripeObject = {
							amount: this.amount,
							source: result.token,
						};
						this.saveDataToFireStore(stripeObject);
					}
				})
				.catch((error) => {
					console.log('error: ', error)
					this.stripeValidationError = error;
				});
		},
		setValidationError(event) {
			this.stripeValidationError = event.error ? event.error.message : '';
		},

		createAndMountFormElements() {
			let elements = this.stripe.elements();

			this.cardNumberElement = elements.create('cardNumber');
			this.cardNumberElement.mount('#card-number-element');

			this.cardExpiryElement = elements.create('cardExpiry');
			this.cardExpiryElement.mount('#card-expiry-element');

			this.cardCVCElement = elements.create('cardCvc');
			this.cardCVCElement.mount('#card-cvc-element');

			console.log('this.cardNumberElement: ', this.cardNumberElement);

			this.cardNumberElement.on('change', this.setValidationError);
			this.cardExpiryElement.on('change', this.setValidationError);
			this.cardCVCElement.on('change', this.setValidationError);
		},
	},
};

// <script setup lang="ts">
//  defineProps<{
// 	  msg: string;
//  }>();
// "build": "run-p type-check build-only",
//export {};
//</script>  }
