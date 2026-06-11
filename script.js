const walletBtn =
  document.getElementById(
    'connectWallet'
  );

walletBtn.onclick =
  async () => {

  if(!window.ethereum){

    alert(
      'Install MetaMask'
    );

    return;
  }

  const accounts =
    await window.ethereum.request({
      method:'eth_requestAccounts'
    });

  walletBtn.innerText =
    accounts[0].slice(0,6)
    + "..."
    + accounts[0].slice(-4);
};
