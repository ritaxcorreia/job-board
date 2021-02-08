import styles from "./Button.module.css";

export default function Button({ className, ...props }) {
	return (
		<button
			// default type
			type="button"
			// spread all the props given to the component
			{...props}
			// make sure to use our class name along with the props classname
			className={`${styles.button} ${className}`}
		/>
	);
}
