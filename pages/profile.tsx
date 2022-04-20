import {
  shortenAddress,
  useContractFunction,
  useEthers,
  useLookupAddress,
  useCall,
  ERC20,
} from "@usedapp/core";
import { ButtonConfirmed } from "../components/Button";
import { ProductCarousel } from "../components/ProductCarousel";
import { useContract } from "../hooks/useContract";
import { useERC721 } from "../hooks/useERC721";
import { useModals } from "../hooks/useModals";
import { MintButton } from "../components/MintButton";
import { Tag } from "degen";
import { PageLayout } from "../components/PageLayout";
import Image from "next/image";
import user from "../public/profile1.png";
import discord from "../public/icons/discord.svg";
import logout from "../public/icons/logout.svg";
import { useRouter } from "next/router";
import ERC721ABI from "../constants/abi/ERC721.json";
import { Contract } from "@ethersproject/contracts";
import { ethers } from "ethers";
import maskSquare from "../public/mask-square.png";
import { IconNFT } from "degen";
import Link from "next/link";

const ERC721_ADDRESS = "0x84b0d249405ed0e1a215ff4b7f5bf79a8ab165ea"; //ropsten

const ProfileItem = ({ className }: { className: string }) => (
  <div
    className={`w-full lg:w-1/2 flex flex-col justify-center items-center border-r border-gray-500 border-b border-gray-500 min-h-[calc(100vh-112px)] ${className}`}
  >
    <Image src={maskSquare} alt="profile photo" />
    <p className="text-2xl text-white">nect0 mask</p>
    <p className="mt-4 text-xl text-gray-300">altr_native</p>
  </div>
);

const Profile = () => {
  const { account, deactivate, library } = useEthers();
  const ENSName = useLookupAddress();
  const { showWalletModal } = useModals();
  const router = useRouter();
  const { balanceOf, totalSupply, maxSupply } = useERC721();

  return (
    <PageLayout>
      <section className="w-full lg:w-1/5 border-r border-gray-500 h-full flex flex-col items-center justify-around block border-b py-10 lg:py-0 lg:fixed lg:top-[112px] mt-[130px] lg:mt-0 lg:border-b-0 max-h-[calc(100vh-112px)]">
        <div>
          <Image src={user} alt="profile photo" />
          <p className="text-center font-semibold mt-6 text-gray-100">
            {account && (ENSName || shortenAddress(account))}
          </p>
        </div>
        <div>
          <button
            className="block flex items-center px-3 py-3 border border-transparent shadow-sm text-[20px] font-semibold rounded-2xl text-white bg-teal hover:bg-teal-hover max-w-full w-[206px] mx-2"
            onClick={() => {
              deactivate();
              localStorage.removeItem("walletconnect");
              router.push("/");
            }}
          >
            <Image
              src={logout}
              width="24"
              height="24"
              className="inline-block"
              alt=""
            />
            <span className="inline-flex w-full justify-center mt-0.5">
              Logout
            </span>
          </button>
          <button className="block mt-6 flex items-center px-3 py-3 border border-transparent shadow-sm text-[20px] font-semibold rounded-2xl text-white bg-indigo-600 hover:bg-indigo-700 max-w-full w-[206px] mx-2">
            <Image
              src={discord}
              width="24"
              height="24"
              className="inline-block"
              alt=""
            />
            <span className="inline-flex w-full justify-center mt-0.5">
              Discord
            </span>
          </button>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row justify-between flex-wrap pl-0 lg:pl-[20%] min-h-[calc(100vh-112px)] mt-[112px]">
        {balanceOf ? (
          <>
            {Array.from({ length: 5 }).map((t, i) => {
              let borderClasses = "";
              if (i % 2 !== 0) borderClasses += "border-r";
              if (balanceOf % 2 === 0 && i >= balanceOf - 3)
                borderClasses += "border-b-0";
              if (balanceOf % 2 !== 0 && i === balanceOf - 1)
                borderClasses += "border-b-0";
              return <ProfileItem key={i} className={borderClasses} />;
            })}
          </>
        ) : (
          <div className="w-full min-h-[calc(100vh-112px)] flex flex-col items-center justify-center">
            <p>No items owned</p>
            <Link href="/">
              <button className="block mt-6 flex items-center px-3 py-3 border border-transparent shadow-sm text-[20px] font-semibold rounded-2xl text-white bg-teal hover:bg-teal-hover max-w-full w-[206px] mx-2">
                <IconNFT />
                <span className="inline-flex w-full justify-center mt-0.5">
                  View Items
                </span>
              </button>
            </Link>
          </div>
        )}
      </section>
    </PageLayout>
  );
};

export default Profile;
