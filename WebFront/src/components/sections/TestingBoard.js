import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { Link } from 'react-router-dom';
import Web3 from 'web3';
import { set } from 'lodash';
import { setBucketName } from 'serverless/lib/plugins/aws/lib/set-bucket-name';

//requires
const axios = require('axios').default;
const contractData = require("./../../contracts/contractRop.json");
//const contractData = require("./../../contracts/contractTest.json");

// Constants (TODO MAKE THIS NOT BAD!)
const sea = "https://fyn3utzg51.execute-api.ap-southeast-2.amazonaws.com/dev/search";
const pass = "pass";
const MINUTE_MS = 60000;

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const TestingBoard = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  // TO GET OFF OF AWS
  /**
   *  Phase
   *  Contract address
   *  signature hash
   */



  //META variables
  const[account, setAccount] = useState();
  const[displayAccount, setDisplayAccount] = useState();
  const[displayMint, setMint] = useState();
  const[displayPublicMint, setPublicMint] = useState();
  const[displayWhitelist, setWhitelist] = useState();
  const[displayError, setError] = useState();
  const[hash, setHash] = useState();
  const[chainError, setChainError] = useState(false);
  const[displayWalletLimit, setDisplayWalletLimit] = useState(false);

  // Non state META varaiables
  const[tokens, setTokens] = useState(false);

  //web3 variables
  const[price, setPrice] = useState(false);
  const[symbol, setSymbol] = useState(false);
  const[mintTotal, setMintTotal] = useState(false);
  const[minted, setMinted] = useState(false);
  const[supply, setSupply] = useState(false);
  const[collection, setCollection] = useState(false);
  const[phase, setPhase] = useState(false);
  const[walletLimit, setWalletLimit] = useState(false);
  const[restricted, setRestricted] = useState(false);
  const[open, setOpen] = useState(false);
  const[name, setName] = useState(false);
  const ethChainID = "0x1";
  const ropChainID = "0x3";


  // Temporary address information
  //const contractAddressTemp = '0x645E9324f4be25be581BB62163cfa86c40b01D07'; 
  const contractAddressTemp = '0x2b89671efe3f16EBb5D2476fE7E2dB95784bD30E'; //metafloppa
  //const contractAddressTemp = '0x6caB7aE0B76a5582da9AEF8440c4413f080f58D4';
  const keyTemp = '192bd423b893ab191ebb63067293bf6eea5850f9343ef126317bea95239c1ca1';
  // web3 (local / via ndoe)
  //const web3 = new Web3("https://mainnet.infura.io/v3/0cae85dc69db45dfb9edaea0e5e50b8b"); //Mainnet
  const web3 = new Web3("https://ropsten.infura.io/v3/0cae85dc69db45dfb9edaea0e5e50b8b"); //ropsten
  const localWeb3 = new Web3(Web3.givenProvider);
  // contracts
  const contract = new web3.eth.Contract(contractData, contractAddressTemp);
  const metaContract = new localWeb3.eth.Contract(contractData, contractAddressTemp);

  // READ ONLY FUNCTIONS

  /** 
  // check mint price off the contract
  async function checkMintPrice()
  {
    setPrice( (await contract.methods.phasePrice().call()));
    console.log(price);
  }*/ 

  //check the total supply
  async function checkMinted()
  {
    setMinted( (await contract.methods.totalSupply().call()));
    //console.log(supply)
  }

  // load the symbol off the contract
  async function checkSymbol()
  {
    setSymbol(await contract.methods.symbol().call());
    //console.log(symbol)
  }

  async function checkCollection()
  {
    setCollection(await contract.methods.getCollectionSize().call());
    //console.log(collection)
  }

  async function checkName()
  {
    setName(await contract.methods.name().call());
    //console.log(name);
  }

  // Check how many tokens the user has
  async function checkTokens(address)
  {
    if(address !== null)
    {
      setTokens(await contract.methods.tokensOfOwner(address).call());
      //console.log(tokens);
    }
  }

  async function getConfig()
  {
   let data = await contract.methods.getConfig().call();  
   setPhase(data[0]);
   setSupply(data[1]); 
   setWalletLimit(data[2]);
   setRestricted(data[3]);
   setOpen(data[4]);
   setPrice(data[5])
   console.log("Config got")
  }

  // check if the wallet has any mints left in this phase
  // TO DO


  // Load the accounts from meta mask and check if they are on the database
  async function load()
  {
    // check if the wallet is connected to the right network
    const {ethereum} = window; 
    let chainID = await ethereum.request({method: 'eth_chainId'});
    console.log("Chain ID: " + chainID)
    
    if(chainID === ropChainID)
    {
      const accounts = await localWeb3.eth.requestAccounts();
      if(accounts != null)
      {
        setAccount(accounts[0]);
        setDisplayAccount(true);
        console.log(restricted);
        console.log(open);
        if(restricted === true && open === false)
        {
          let data =
          {
            "user": accounts[0],
            "pass": pass
          } 
          //send POST via axios
          axios.post(sea, data)
          .then(function(response)
          {
            console.log(response.data.user);
            if(response.data.user === 'false')
            {
              // user is not present in the DB
                setWhitelist(true);
            }
            else
            {
              // user is present in the DB
              console.log("FOUND")
              setHash(response.data.hash);
              setMint(true);
            }
          })
          .catch(function (error)
          {
              console.log(error);
          }
          ); 
        }
        else
        {
          //if the contract indicates a public mint, reveal the div
          setPublicMint(true);
        }
      }
      else
      {
        //display error
        setError(true);
      }
    }
    else
    {
      //give an error for not being on the right network
      setChainError(true);
    }
  } 
  // Mint on the contract given the address + the signature from the DB
  async function mint()
  {
    await metaContract.methods.preMint(1, hash).send({from: account, value: price});
  }

  // public mint function
  async function publicMint()
  {
    await metaContract.methods.preMint(1).send({from: account, value: price})
  }

  // useEffect to check contract information instantly on page load
  useEffect(() => {
    //checkMintPrice();
    checkSymbol();
    checkMinted();
    checkCollection();
    checkName();
    getConfig();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // check the contract information every minute
  setInterval(getConfig, MINUTE_MS / 3);
  setInterval(checkMinted, MINUTE_MS / 3);

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    /**title: 'The Team',
    paragraph: 'Meet the team who is putting together the Metagotchi experience.'**/
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content"/>
          <div className={tilesClasses} >
            <div className="tiles-item reveal-from-right" data-reveal-delay="200" id="Team">
            <Link to="#0" > 
            </Link>
            </div>
            
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <button onClick={load}>
                <p> connect wallet </p>
              </button>
              <p> {name}</p>
              <p> price of a mint: {price / 10**18} ETH</p>
              <p> The ticker is: {symbol} </p> 
              <p> Phase {phase}: {minted} out of {supply} </p>
              <p> The total collection size is: {collection}</p> 
            </div>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
            {displayAccount &&
              <ul className={
                classNames(
                   `list-reset header-nav-right`
                )}>
                  <Link to="#0"> 
                  your account is: {account}
                  </Link>
              </ul>}
            </div>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
            {displayMint &&
            <button onClick={mint} >
            <p> Mint </p>
          </button>}

            </div>

            <div>
            {displayWhitelist && <Link>
            <p> Please join our whitelist to mint </p>
            <Image
              src={require('./../../assets/images/Buttons/Twitter.png')}
              alt="Open"
              width={32}
              height={32} />
          </Link>}
          {!displayWhitelist && displayError && <Link>
            <p> Error! </p>
            <Image
              src={require('./../../assets/images/Buttons/Twitter.png')}
              alt="Open"
              width={32}
              height={32} />
          </Link>}
            </div>

          </div>
        </div>
      </div>
      <div className="container" style={{
        height: '1px',
        background: "black"
      }}> </div>
    </section>
  );
}

TestingBoard.propTypes = propTypes;
TestingBoard.defaultProps = defaultProps;

export default TestingBoard;