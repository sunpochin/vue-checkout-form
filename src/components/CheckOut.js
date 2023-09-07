// import Vue from "vue";
// import BootstrapVue from "bootstrap-vue";
// // import "bootstrap/dist/css/bootstrap.css";
// // import "bootstrap-vue/dist/bootstrap-vue.css";
// Vue.use(BootstrapVue);
import { StripeCheckout } from '@vue-stripe/vue-stripe';

import { db } from './base';
import { doc, setDoc } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';

export default {
	// components: {
	//   StripeCheckout,
	// },

	data() {
		return {
			amount: 25,
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
		async saveDataToFireStore(stripeObject) {
			console.log('saveDataToFireStore');
			// const db = firebase.firestore();
			// const chargesRef = db.collection('charges');
			// const pushId = chargesRef.doc().id;
			// db.collection('charges').doc(pushId).set(stripeObject);

			// const docRef = await addDoc(collection(db, 'cities'), {
			// 	name: 'Tokyo',
			// 	country: 'Japan',
			// });
			// console.log('Document written with ID: ', docRef.id);
			// const data = { name: 'test', country: 'USA' };
			// const ret = await setDoc(doc(db, 'cities', 'new-city-id'), data);
			// console.log('ret: ', ret);
			const ret = await addDoc(collection(db, 'transactions'), stripeObject);
			console.log('ret: ', ret);
			const js = await ret.json();
			console.log('js: ', js);
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
					console.log('error: ', error);
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

			// var stripeObject = {
			// 	amount: this.amount,
			// 	source: 'fake token',
			// };
			// console.log('stripeObject: ', stripeObject);
			// this.saveDataToFireStore(stripeObject);

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
