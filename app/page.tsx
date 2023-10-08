import { ThirdwebProvider, ConnectWallet } from "@thirdweb-dev/react";
import { Astar } from "@thirdweb-dev/chains";

export default function Home() {
  return (
    <ThirdwebProvider activeChain={Astar}>
      <div>
        <main>
          <h1>
            Welcome to CompanyDAO !!
          </h1>
          <div>
            <ConnectWallet />
          </div>
        </main>
      </div>
    </ThirdwebProvider>
  );
}
