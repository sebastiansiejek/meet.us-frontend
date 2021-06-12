import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from 'src/generated/gqlQueries';
import { setToken } from 'src/store/slices/userSlice';

export const useLogin = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();

  const mutate = useLoginMutation({
    onSuccess: ({ login }) => {
      dispatch(
        setToken({
          token: login.accessToken,
        }),
      );
      push('my-account');
    },
    onError: (error) => console.warn(error),
  });

  return mutate;
};
