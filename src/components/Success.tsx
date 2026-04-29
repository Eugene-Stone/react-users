import type { SuccessProps } from '../types';

export const Success = ({ invitesUsers }: SuccessProps) => {
	const count = invitesUsers.length;
	return (
		<div className="success-block">
			<img src="/assets/success.svg" alt="Success" />
			<h3>Success!</h3>
			<p>An invitation has been sent to all {count} users.</p>
			<button onClick={() => window.location.reload()} className="send-invite-btn">
				Back ti list
			</button>
		</div>
	);
};
