import { useDispatch } from 'react-redux';
import { useLoginMutation } from 'src/generated/gqlQueries';
import { setToken } from 'src/store/slices/userSlice';

export const useLogin = () => {
  const dispatch = useDispatch();

  const mutate = useLoginMutation({
    onSuccess: ({ login }) => {
      dispatch(
        setToken({
          token: login.accessToken,
        }),
      );
    },
    onError: (error) => console.log(error),
  });

  return mutate;
};
