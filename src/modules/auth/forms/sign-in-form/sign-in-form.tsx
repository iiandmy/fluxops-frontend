import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { SignInSchema, SignInSchemaType } from '~/modules/auth/validation';

import { Button, Input, Typography } from '~/components';

import { AppRoutes } from '~/constants';

import { useLoginMutation } from '~/api/session';

import css from './sign-in-form.module.css';

export const SignInForm = () => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors, isDirty, isValid, isSubmitting },
	} = useForm<SignInSchemaType>({
		delayError: 700,
		resolver: zodResolver(SignInSchema),
		mode: 'onChange',
	});
	const [login, _result] = useLoginMutation();

	const submitHandler: SubmitHandler<SignInSchemaType> = (
		data: SignInSchemaType
	) => {
		login({
			email: data.login,
			password: data.password,
		});
	};

	const loginValue = useWatch({ control: control, name: 'login' });
	const passwordValue = useWatch({ control: control, name: 'password' });

	return (
		<form onSubmit={handleSubmit(submitHandler)} className={css.form_wrapper}>
			<div className={css.form_content}>
				<Typography.Headlines
					fontSize="3xl"
					weight="bold"
					className={css.form_header}
				>
					FLUXOPS
				</Typography.Headlines>
				<div className={css.auth_form_wrapper}>
					<Input
						status={loginValue && errors.login ? 'error' : 'success'}
						errorText={loginValue && errors.login?.message}
						placeholder="Username"
						{...register('login')}
						block
					/>
					<Input
						status={errors.password ? 'error' : 'success'}
						errorText={passwordValue && errors.password?.message}
						type="password"
						placeholder="Password"
						{...register('password')}
						block
					/>
				</div>
			</div>
			<div className={css.form_footer}>
				<Button
					disabled={isSubmitting || !isDirty || !isValid}
					type="submit"
					className={css.action_button}
				>
					Login
				</Button>
				<Typography.Body variant="secondary" fontSize="sm" weight="light">
					Forgot password? <Link to={AppRoutes.SignIn}>Reset</Link>
				</Typography.Body>
			</div>
		</form>
	);
};
