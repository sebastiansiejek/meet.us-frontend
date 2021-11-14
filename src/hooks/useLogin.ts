import { selectUserToken } from './../store/slices/userSlice';
import { setToken } from 'src/store/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from 'src/generated/gqlQueries';
import { useRouter } from 'next/router';

export const useLogin = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const isLogged = useSelector(selectUserToken);

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

  return {
    mutate,
    isLogged: isLogged ? true : false,
  };
};
