import {
  CoinsIcon,
  CurrencyNote2Icon,
  DieIcon,
  HanCoinsIcon,
  StatsIcon,
  UserEditIcon,
} from '@/assets/svgs';
import { Button } from '..';
import { PropsWithChildren, useEffect, useState } from 'react';
import User1 from '@/assets/users/user-1.png';
import './userprofile.css';
import { SilverLockIcon } from '@/assets/icons';
import api from '@/api/axios';
import { AxiosResponse } from 'axios';
import { useAppSelector } from '@/hooks/store';

const UserStats = {
  totalBets: 'totalBets',
  gamesWon: 'gamesWon',
  netProfit: 'netProfit',
  totalWagered: 'totalWagered',
  allTimeLow: 'allTimeLow',
  allTimeHigh: 'allTimeHigh',
} as const;

type UserStat = (typeof UserStats)[keyof typeof UserStats];

const userStats = new Map<UserStat, number>([
  ['totalBets', 2272],
  ['gamesWon', 825],
  ['netProfit', 448.06],
  ['totalWagered', -4.6],
  ['allTimeLow', 14.91],
  ['allTimeHigh', -6.48],
]);

console.log({ userStats });

export default function UserProfile({
  username,
  self,
}: {
  username: string;
  self?: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<UserProfile | null>();
  const auth = useAppSelector((state) => state.auth);

  console.log({ username });

  // Check if the user profile being requested for belongs to the current user, to view as the owner of the account
  const ownAccount = self && username === auth.user?.username;

  const getUser = async (username: string) => {
    console.log('USERNAME: ', username);
    setLoading(true);
    try {
      const response: AxiosResponse<{ user: UserProfile }> = await api.get(
        `/users/${username}?${`account=${ownAccount && 'self'}`}`,
      );
      const data = response.data;
      console.log('USER_PROFILE_DATA: ', data);
      setUser(data.user);
    } catch (error) {
      console.error('USER_PROFILE', { error });
    } finally {
      console.log('GET_USER_RUN');
      setLoading(false);
    }
  };

  useEffect(() => {
    // console.log('USER_STATS', userStats.entries(), { username });
    getUser(username);
  }, []);

  const ProfileWrapper = ({ children }: PropsWithChildren) => (
    <div className="overflow-y-auto sm:overflow-visible_ sm:mb-0 sm:w-[90vw] sm:h-[86vh]_ md:w-[65vw] md:h-[86vh]_ lg:w-[40vw] rounded space-y-1 px-2 pt-2 max-h-[95vh]">
      <div className="w-[98%] mx-auto pb-4 shrink-0 flex flex-col overflow-auto">
        <header className="shrink-0">
          <h2 className="capitalize font-semibold text-gray-400">
            user profile
          </h2>
        </header>
        <div className="overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  );

  return loading ? (
    // <Loader />
    'Loading...'
  ) : user ? (
    <ProfileWrapper>
      <div className="rounded-md flex items-end overflow-clip __user-bg__ h-40 mt-2">
        <div className="w-24 ml-4">
          <img
            src={user?.photo || User1}
            className="object-cover w-full"
            style={{
              imageRendering: 'pixelated',
            }}
          />
        </div>
        <div className="h-full p-6 pl-4 space-y-2">
          <div className="flex gap-1 items-center">
            <h2 className="text-3xl font-bold">{user?.username}</h2>
            <div className="p-1 h-fit py-[2px] rounded uppercase bg-[rgb(161,152,121)] text font-bold bg-amber text-gray-950">
              {/* User Level */}
              lvl {user.level}
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex gap-2 items-center text-xs font-semibold">
              <span className="uppercase  text-[#A3A6C2]">xp:</span>{' '}
              <span>{'8,110/10,563'}</span>
            </div>
            <div className="w-full h-3 relative after:bg-primary after:rounded overflow-clip after:absolute after:left-0 after:w-1/2 after:h-full  bg-gray-800/60 rounded-md" />
            <div className="flex gap-2 items-center text-sm font-semibold">
              <span className="uppercase text-[#A3A6C2]">join date:</span>{' '}
              <span>
                {/* NOTE: Format date */}
                {new Date(user.joinDate).toLocaleString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false,
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-1 p-2 bg-dark-800 rounded mt-3">
        {ownAccount ? (
          <div className="bg-dark-800 gap-2 flex flex-col p-2.5 rounded-sm">
            <button className="sc-1xm9mse-0 lfSLTO text-sm rounded-sm text-nowrap">
              <span className="flex gap-1">
                <UserEditIcon />
                Edit Profile
              </span>
            </button>
            <div className="text-sm font-semibold">
              <div className="sc-19jkrre-0 jDHDhD">
                <span className="flex items-center gap-1">
                  <span className="text-gray-500">Email:</span>
                  {user.email &&
                    user.email.slice(0, Math.min(user.email.indexOf('@'), 3)) +
                      '*'.repeat(Math.max(0, user.email.indexOf('@') - 3)) +
                      user.email.slice(user.email.indexOf('@'))}
                  <span className="text-xs font-semibold text-red-400">
                    (Not Verified)
                  </span>
                </span>
                <button className="sc-1xm9mse-0 lfSLTO text-sm rounded-sm text-nowrap">
                  Send Verification Email
                </button>
              </div>
            </div>
            <button className="sc-1xm9mse-0 lfSLTO text-sm rounded-sm text-nowrap">
              Reset Password
            </button>
            <button className="sc-1xm9mse-0 fkyWKB text-sm rounded-sm text-nowrap gap-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path>
                <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
              </svg>{' '}
              Log Out
            </button>
          </div>
        ) : (
          <>
            <header>
              <h3 className="capitalize text-sm sm:text-base font-semibold text-gray-400">
                actions
              </h3>
            </header>
            <Button className="flex items-center capitalize gap-1 w-full !py-1">
              <CurrencyNote2Icon />
              <p>tip</p>
            </Button>
          </>
        )}
      </div>
      <div className="bg-dark-800 p-2.5 mt-3 rounded-sm gap-2 flex flex-col">
        <span className="text-[1rem] gap-1 font-semibold flex items-center text-gray-400">
          <StatsIcon />
          User Statistics
        </span>
        <div className="grid auto-rows-auto grid-cols-2 gap-2">
          <div className="flex flex-col gap-2 bg-dark-700 text-sm font-semibold p-2.5 rounded-sm items-center">
            <span className="flex gap-1 items-center">
              <DieIcon />
              <span>Total Bets</span>
            </span>
            <span className="text-white gap-1 flex items-center">
              {user.bets}
            </span>
          </div>
          <div className="flex flex-col gap-2 bg-dark-700 text-sm font-semibold p-2.5 rounded-sm items-center">
            <span className="flex gap-1 items-center">
              <DieIcon />
              <span>Games Won</span>
            </span>
            <span className="text-white gap-1 flex items-center">
              {user.wins}
            </span>
          </div>
          <div className="flex flex-col gap-2 bg-dark-700 text-sm font-semibold p-2.5 rounded-sm items-center">
            <span className="flex gap-1 items-center">
              <CoinsIcon />
              <span>Total Wagered</span>
            </span>
            <span className="text-white gap-1 flex items-center">
              {user.wagered}
              <img
                src={SilverLockIcon}
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </div>
          <div className="flex flex-col gap-2 bg-dark-700 text-sm font-semibold p-2.5 rounded-sm items-center">
            <span className="flex gap-1 items-center">
              <HanCoinsIcon />
              <span>Net Profit</span>
            </span>
            <span className="text-white gap-1 flex items-center">
              <span className="flex items-center gap-1">
                {user.netProfit}
                <img
                  src={SilverLockIcon}
                  width="18"
                  height="18"
                  className="sc-x7t9ms-0 dnLnNz"
                />
              </span>
            </span>
          </div>
          <div className="flex flex-col gap-2 bg-dark-700 text-sm font-semibold p-2.5 rounded-sm items-center">
            <span className="flex gap-1 items-center">
              <StatsIcon />
              <span>All Time High</span>
            </span>
            <span className="text-white gap-1 flex items-center">
              {user.allTimeHigh}
              <img
                src={SilverLockIcon}
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </div>
          <div className="flex flex-col gap-2 bg-dark-700 text-sm font-semibold p-2.5 rounded-sm items-center">
            <span className="flex gap-1 items-center">
              <StatsIcon />
              <span>All Time Low</span>
            </span>
            <span className="text-white gap-1 flex items-center">
              {user.allTimeLow}
              <img
                src={SilverLockIcon}
                width="18"
                height="18"
                className="sc-x7t9ms-0 dnLnNz"
              />
            </span>
          </div>
        </div>
      </div>
    </ProfileWrapper>
  ) : (
    <ProfileWrapper>
      <p className="text-4xl text-center font-bold">User Unavailable</p>
    </ProfileWrapper>
  );
}
