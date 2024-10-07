const Footer = () => {
	return (
		<footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
			<div className="flex gap-3">
				<a target="_blank" href="https://github.com/priyaankchhadwa" className="social-icon">
					<img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
				</a>
				<a target="_blank" href="https://www.linkedin.com/in/priyaankchhadwa/" className="social-icon">
					<img src="/assets/linkedin.svg" alt="LinkedIn" className="w-1/2 h-1/2" />
				</a>
				<a target="_blank" href="https://instagram.com/priyaankchhadwa" className="social-icon">
					<img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
				</a>
			</div>

			<p className="text-white-500">© 2024 Priyaank Chhadwa. All rights reserved.</p>
		</footer>
	);
};

export default Footer;
