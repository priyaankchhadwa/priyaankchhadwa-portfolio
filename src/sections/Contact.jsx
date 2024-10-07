import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

export default function Test() {
	const formRef = useRef();

	const { alert, showAlert, hideAlert } = useAlert();
	const [loading, setLoading] = useState(false);

	const [form, setForm] = useState({ name: '', email: '', message: '' });

	const handleChange = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: 'Priyaank Chhadwa',
					from_email: form.email,
					to_email: 'priyaank29@gmail.com',
					message: form.message,
				},
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
			)
			.then(
				() => {
					setLoading(false);
					showAlert({
						show: true,
						text: 'Thank you for your message 😃',
						type: 'success',
					});

					setTimeout(() => {
						hideAlert(false);
						setForm({
							name: '',
							email: '',
							message: '',
						});
					}, [3000]);
				},
				(error) => {
					setLoading(false);
					console.error(error);

					showAlert({
						show: true,
						text: "I didn't receive your message 😢",
						type: 'danger',
					});
				},
			);
	};
	return (
		<section className="c-space py-20" id="contact">
			<div className="rounded-t-2xl bg-black-200 border border-black-300">
				{alert.show && <Alert {...alert} />}
				<div class="rounded-t-2xl p-6 flex items-center space-x-2 bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800">
					<div className="relative flex items-center justify-center px-3">
						<div class=" absolute w-4 h-4 rounded-full bg-red-500 drop-shadow-[0_0_1em_rgba(239,68,68,1)]"></div>
						<div class=" absolute w-4 h-4 rounded-full bg-red-500 blur"></div>
					</div>
					<div className="relative flex items-center justify-center px-3">
						<div class="absolute w-4 h-4 rounded-full bg-yellow-500 drop-shadow-[0_0_1em_rgba(234,179,8,1)]"></div>
						<div class="absolute w-4 h-4 rounded-full bg-yellow-500 blur"></div>
					</div>
					<div className="relative flex items-center justify-center px-3">
						<div class="absolute w-4 h-4 rounded-full bg-green-500 drop-shadow-[0_0_1em_rgba(34,197,94,1)]"></div>
						<div class="absolute w-4 h-4 rounded-full bg-green-500 blur"></div>
					</div>
				</div>
				<div className="flex justify-center">
					<div className="contact-container">
						<h3 className="head-text">{`Let's talk`}</h3>
						<p className="text-lg text-white-600 mt-3">
							Looking to create a new website or app, upgrade your existing platform, or transform a unique concept into reality? I’m here to make it happen.
						</p>
						<form ref={formRef} onSubmit={handleSubmit} className="my-10 flex flex-col space-y-7">
							<label className="space-y-3">
								<span className="field-label">Name</span>
								<input
									type="text"
									name="name"
									value={form.name}
									onChange={handleChange}
									required
									className="field-input"
									placeholder="John Doe"
								/>
							</label>
							<label className="space-y-3">
								<span className="field-label">Email</span>
								<input
									type="email"
									name="email"
									value={form.email}
									onChange={handleChange}
									required
									className="field-input"
									placeholder="johndoe@gmail.com"
								/>
							</label>
							<label className="space-y-3">
								<span className="field-label">Your message</span>
								<textarea
									name="message"
									value={form.message}
									onChange={handleChange}
									required
									rows={5}
									className="field-input"
									placeholder="Share your thoughts or inquiries..."
								/>
							</label>
							<button className="field-btn" type="submit" disabled={loading}>
								{loading ? 'Sending...' : 'Send Message'}
								<img src="/assets/arrow-up.svg" alt="arrow-up" className="field-btn_arrow" />
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}