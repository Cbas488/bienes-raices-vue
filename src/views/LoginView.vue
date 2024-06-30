<script setup>
import { useField, useForm } from 'vee-validate'
import { loginSchema as validationSchema } from '@/validation/loginSchema'
import { useAuthStore } from '@/stores/auth'

const { handleSubmit } = useForm({ validationSchema })
const email = useField('email')
const password = useField('password')
const auth = useAuthStore()

const submit = handleSubmit((values) => {
	auth.login(values)
})
</script>

<template>
	<v-card flat max-width="600" class="mx-auto my-10">
		<v-card-title class="text-h4 font-weight-bold" tag="h3">
			Iniciar Sesion
		</v-card-title>
		<v-card-subtitle class="text-h5"
			>Iniciar sesion con tu cuenta</v-card-subtitle
		>
		<v-alert
			v-if="auth.hasError"
			type="error"
			:title="auth.errorMessage"
			class="my-5"
		>
		</v-alert>
		<v-form class="mt-5">
			<v-text-field
				type="email"
				label="Email"
				bg-color="blue-grey-lighten-5"
				v-model="email.value.value"
				:error-messages="email.errorMessage.value"
				class="mt-3"
			/>
			<v-text-field
				type="password"
				label="Password"
				bg-color="blue-grey-lighten-5"
				v-model="password.value.value"
				:error-messages="password.errorMessage.value"
			/>
			<v-btn @click="submit" block color="pink-accent-3" class="mt-3"
				>Inicar Sesion</v-btn
			>
		</v-form>
	</v-card>
</template>
