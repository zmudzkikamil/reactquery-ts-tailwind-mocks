import { classNames } from '../../../utils/classNames';

export interface IButtonIconProps {
	icon: React.ReactNode;
	rounded?: boolean;
	disabled?: boolean;
	className?: string;
	onClick?: () => void;
}

export const ButtonIcon: React.FC<IButtonIconProps> = ({ icon, rounded, disabled, className, onClick }) => {
	const containerStyles = classNames({
		'h-9 w-9 flex items-center justify-center': true,
		'bg-gray cursor-not-allowed': !!disabled,
		'bg-black-lightest hover:bg-purple': !disabled,
		'rounded-full': !!rounded,
		rounded: !rounded,
		[className as string]: !!className,
	});

	return (
		<button
			className={containerStyles}
			onClick={onClick}>
			{icon}
		</button>
	);
};
