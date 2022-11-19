import abi from '../../artifacts/contracts/gor.sol/gor.json';
import { ethers } from "ethers";
import { experimentalStyled as styled } from '@mui/material/styles';
import Head from 'next/head'
import Snackbar from '@mui/material/Snackbar';
import React, { useState } from "react";
import styles from '../styles/Home.module.css'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  margin: '30px',
}));
export default function Home() {
  // Contract Address & ABI
  const contractAddress = "0xFEe129d0f4eEC4aC964b56c6aEc9d235C778E525";
  const contractABI = abi.abi;

  // Component state
  const [open, setOpen] = React.useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [name, setName] = useState("");
  const [prod_quan, setProd_quan] = useState(1);
  const data = ["Product 1","Product 2","Product 3","Product 4"]
  const prices = [0.00065,0.00053,0.00044,0.00034]
  const onNameChange = (event) => {
    setName(event.target.value);
  }

  const onProdQuantChange = (event) => {
    setProd_quan(event.target.value);
  }
  // Wallet connection logic
  const isWalletConnected = async () => {
    try {
      const { ethereum } = window;

      const accounts = await ethereum.request({method: 'eth_accounts'})
      console.log("accounts: ", accounts);

      if (accounts.length > 0) {
        const account = accounts[0];
        console.log("wallet is connected! " + account);
      } else {
        console.log("make sure MetaMask is connected");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  }

  const connectWallet = async () => {
    try {
      const {ethereum} = window;

      if (!ethereum) {
        console.log("please install MetaMask");
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts'
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  }
  const buyGor = async (prod_no) => {
    try {
      const {ethereum} = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();
        const Gor = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        console.log("buying coffee..")
        const gorTxn = await Gor.Purchase(
          name ? name : "anonymous",
          prod_no ? prod_no : 1,
          prod_quan ? prod_quan : 1,
          {value: ethers.utils.parseEther((prod_quan*prices[prod_no-1]).toString())}
        );
        await gorTxn.wait();

        console.log("mined ", gorTxn.hash);

        alert("Item Purchased Successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Gor</title>
        <meta name="description" content="Random Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Random Marketplace !
        </h1>
        
        {isWalletConnected ? (
          <div>
          <Box sx={{ py: 3 }} maxWidth='100%'>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={16}>
            {data.map((prod,ind) => {
              return (
                <Item key={prod}>
                <Card sx={{ maxWidth: '250px' }} >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  src={`/assets/images/${ind+1}.jpg`}
                />
                <CardContent>
                <form className="mui-form">
                  <legend>{prod}</legend>
                  <p>Price : {prices[ind]}</p>
                  <TextField id="name" label="Name" variant="outlined" onChange={onNameChange}/>
                  <TextField id="quantity" label="Quantity" variant="outlined" onChange={onProdQuantChange}/>
                  <Button onClick={()=>{buyGor(ind+1);console.log(ind+1);}}>Buy !</Button>
                </form>
                </CardContent>
              </Card>
              </Item>
              )
            })}
          </Grid>
          </Box>
          </div>
        ) : (
          <button onClick={connectWallet}> Connect your wallet </button>
        )}
      </main>

    </div>
  )
}
