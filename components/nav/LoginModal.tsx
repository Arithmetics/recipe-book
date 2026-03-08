import { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'sonner';
import { CURRENT_USER_QUERY } from '../auth/queries';
import {
  useSignInMutation,
  UserAuthenticationWithPasswordSuccess,
  UserAuthenticationWithPasswordFailure,
} from '../../generated/graphql-types';
import { useUser } from './Nav';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type LoginModalProps = {
  isOpen: boolean;
};

export default function LoginModal({ isOpen }: LoginModalProps): JSX.Element {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading: getUserLoading } = useUser();

  const [signin, { data, loading }] = useSignInMutation({
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const submitLogin = async (): Promise<void> => {
    try {
      const res = await signin({
        variables: { email: email.toLowerCase(), password },
      });

      if ((res.data?.authenticateUserWithPassword as UserAuthenticationWithPasswordSuccess)?.item) {
        toast.success('Signed in', { description: 'Welcome back' });
        router.push('/');
      }
    } catch {
      toast.error('Error', {
        description:
          'There was an error on the backend. Try again and then Email Brock if it persists',
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => undefined}>
      <DialogContent className="sm:max-w-md">
        {getUserLoading ? (
          <div className="flex justify-center py-24">
            <div className="size-10 animate-spin rounded-full border-2 border-border border-t-main" />
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Sign In</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-muted-foreground">
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-muted-foreground">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  onKeyDown={(e) => (e.key === 'Enter' ? submitLogin() : undefined)}
                />
              </div>
              {(data?.authenticateUserWithPassword as UserAuthenticationWithPasswordFailure)
                ?.message && (
                <p className="text-sm text-destructive">
                  {
                    (data?.authenticateUserWithPassword as UserAuthenticationWithPasswordFailure)
                      .message
                  }
                </p>
              )}
              <Button onClick={() => submitLogin()} disabled={loading}>
                {loading ? 'Signing in…' : 'Sign in'}
              </Button>
            </div>
            <DialogFooter />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
