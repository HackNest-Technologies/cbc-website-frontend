import Button from "../shared/Button.jsx";

const FeedbackForm = () => (
	<section className="container p-6 mx-auto">
		<div className="p-4 feedback-form rounded-3xl mobile:flex flex-row-reverse">
			<div className="p-4 bg-[#FFFFFFF2] rounded-2xl space-y-4 flex-1">
				<div>
					<h4 className="font-satoshi">FEEDBACK FORM</h4>
					<p className="text-sm text-[#666666]">Share your feedback</p>
				</div>

				<form className="space-y-3">
					<div className="flex flex-col gap-1">
						<label htmlFor="name">Name</label>
						<input
							className="p-2 rounded-full border border-[#E5E5E5]"
							type="text"
							id="name"
							name="name"
							placeholder="E.g Wisdom Ibu"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="email">Email</label>
						<input
							className="p-2 rounded-full border border-[#E5E5E5]"
							type="email"
							id="email"
							name="email"
							placeholder="E.g Wisdomibu@gmail.com"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="feedback">Feedback</label>
						<textarea
							name="feedback"
							id="feedback"
							className="p-2 rounded-md border border-[#E5E5E5]"
							rows={5}
						></textarea>
					</div>

					<Button
						text="Submit Feedback"
						variant="solid"
						type="submit"
						style={{ width: "100%", justifyContent: "center" }}
					/>
				</form>
			</div>

			<p className="w-[219.77px] text-[32px] text-white mt-33 flex-1 mobile:flex mobile:mt-0 mobile:items-end mobile:text-[40px]">
				We would love to hear from you!
			</p>
		</div>
	</section>
);

export default FeedbackForm;
