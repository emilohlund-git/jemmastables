import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { User } from '../generated/graphql';
import { RootState } from '../redux/reducers';

function RouteGuard({ children }: any) {
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();
  const user: User = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (!user) router.push('/login');
    if (user) setAuthorized(true);
  }, []);

  return authorized && children;
}

export { RouteGuard };
