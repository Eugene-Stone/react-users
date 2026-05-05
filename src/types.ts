import type { ChangeEvent } from 'react';

export interface UserType {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar?: string;
}

export interface UsersProps {
	items: UserType[];
	isLoading: boolean;
	searchValue: string;
	invitesUsers: string[];
	handleSearchInput: (e: ChangeEvent<HTMLInputElement>) => void;
	// handleSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void; // Или так, тогда не нужен импорт ChangeEvent
	handleInviteUser: (email: string) => void;
	handleSendInvite: () => void;
}

export interface UserCardProps extends UserType {
	handleInviteUser: (email: string) => void;
	invitesUsers: string[];
}

export interface SuccessProps {
	invitesUsers: string[];
}
