(this["webpackJsonp@pancake/interface"] = this["webpackJsonp@pancake/interface"] || []).push([[0], {
    108: function(e) {
        e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')
    },
    153: function(e) {
        e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]')
    },
    160: function(e) {
        e.exports = JSON.parse('{"name":"PancakeSwap Default List","timestamp":"2021-05-06T00:00:00Z","version":{"major":3,"minor":0,"patch":0},"tags":{},"logoURI":"https://exchange.pancakeswap.finance/images/pancakeswap.png","keywords":["pancake","default"],"tokens":[{"name":"WBNB Token","symbol":"WBNB","address":"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c","chainId":56,"decimals":18,"logoURI":"./images/coins/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png"},{"name":"BUSD Token","symbol":"BUSD","address":"0xe9e7cea3dedca5984780bafc599bd69add087d56","chainId":56,"decimals":18,"logoURI":"./images/coins/0xe9e7cea3dedca5984780bafc599bd69add087d56.png"},{"name":"Ethereum Token","symbol":"ETH","address":"0x2170ed0880ac9a755fd29b2688956bd959f933f8","chainId":56,"decimals":18,"logoURI":"./images/coins/0x2170ed0880ac9a755fd29b2688956bd959f933f8.png"},{"name":"BTCB Token","symbol":"BTCB","address":"0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c","chainId":56,"decimals":18,"logoURI":"./images/coins/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c.png"},{"name":"Tether USD","symbol":"USDT","address":"0x55d398326f99059ff775485246999027b3197955","chainId":56,"decimals":18,"logoURI":"./images/coins/0x55d398326f99059ff775485246999027b3197955.png"},{"name":"PancakeSwap Token","symbol":"CAKE","address":"0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82","chainId":56,"decimals":18,"logoURI":"./images/coins/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.png"},{"name":"Venus","symbol":"XVS","address":"0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63","chainId":56,"decimals":18,"logoURI":"./images/coins/0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63.png"},{"name":"VAI Stablecoin","symbol":"VAI","address":"0x4bd17003473389a42daf6a0a729f6fdb328bbbd7","chainId":56,"decimals":18,"logoURI":"./images/coins/0x4bd17003473389a42daf6a0a729f6fdb328bbbd7.png"},{"name":"Pancake Bunny","symbol":"BUNNY","address":"0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51","chainId":56,"decimals":18,"logoURI":"./images/coins/0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51.png"},{"name":"SafeMoon","symbol":"SAFEMOON","address":"0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3","chainId":56,"decimals":9,"logoURI":"./images/coins/0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3.png"},{"name":"Alpaca","symbol":"ALPACA","address":"0x8f0528ce5ef7b51152a59745befdd91d97091d2f","chainId":56,"decimals":18,"logoURI":"./images/coins/0x8f0528ce5ef7b51152a59745befdd91d97091d2f.png"},{"name":"Belt","symbol":"BELT","address":"0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f","chainId":56,"decimals":18,"logoURI":"./images/coins/0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f.png"},{"name":"TokoCrypto","symbol":"TKO","address":"0x9f589e3eabe42ebc94a44727b3f3531c0c877809","chainId":56,"decimals":18,"logoURI":"./images/coins/0x9f589e3eabe42ebc94a44727b3f3531c0c877809.png"},{"name":"Nerve Finance","symbol":"NRV","address":"0x42f6f551ae042cbe50c739158b4f0cac0edb9096","chainId":56,"decimals":18,"logoURI":"./images/coins/0x42f6f551ae042cbe50c739158b4f0cac0edb9096.png"},{"name":"Ellipsis","symbol":"EPS","address":"0xa7f552078dcc247c2684336020c03648500c6d9f","chainId":56,"decimals":18,"logoURI":"./images/coins/0xa7f552078dcc247c2684336020c03648500c6d9f.png"}]}')
    },
    201: function(e) {
        e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLastBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"name":"difficulty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"name":"gaslimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"name":"coinbase","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]')
    },
    232: function(e) {
        e.exports = JSON.parse('{"Farm":"Farm","Staking":"Staking","Syrup Pool":"Syrup Pool","Exchange":"Exchange","Docs":"Docs","Voting":"Voting","Lottery":"Lottery","Claim BNB":"Claim BNB","Your %asset% Balance":"Your %asset% Balance","Total %asset% Supply":"Total %asset% Supply","Locked":"Locked","Pending harvest":"Pending harvest","New rewards per block":"New rewards per block","Total CAKE burned since launch":"Total CAKE burned since launch","See the Kitchen":"See the Kitchen","Telegram":"Telegram","Blog":"Blog","Github":"Github","Twitter":"Twitter","Deposit":"Deposit","Earn":"Earn","Stake LP tokens to stack CAKE":"Stake LP tokens to stack CAKE","You can swap back anytime":"You can swap back anytime","%asset% Earned":"%asset% Earned","Tokens Staked":"Tokens Staked","Every time you stake and unstake CAKE tokens, the contract will automagically harvest CAKE rewards for you!":"Every time you stake and unstake CAKE tokens, the contract will automagically harvest CAKE rewards for you!","XVS Tokens Earned":"XVS Tokens Earned","Rewards will be calculated per block and total rewards will be distributed automatically at the end of each project\u2019s farming period.":"Rewards will be calculated per block and total rewards will be distributed automatically at the end of each project\u2019s farming period.","Pool":"Pool","Coming Soon":"Coming Soon","APY":"APY","Total Liquidity":"Total Liquidity","View on BscScan":"View on BscScan","Cake price":"Cake price","%asset% Tokens Earned":"%asset% Tokens Earned","%num% blocks until farming ends":"%num% blocks until farming ends","Coming Soon...":"Coming Soon...","Your Stake":"Your Stake","Farming starts in %num% Blocks":"Farming starts in %num% Blocks","Finished":"Finished","Farming ends in %num% Blocks":"Farming ends in %num% Blocks","Project site":"Project site","Info site":"Info site","You can unstake at any time.":"You can unstake at any time.","Rewards are calculated per block.":"Rewards are calculated per block.","Total":"Total","End":"End","View Project Site":"View Project Site","Your Project? \ud83d\udc40":"Your Project? \ud83d\udc40","Create a pool for your token":"Create a pool for your token","Apply now":"Apply now","Round 1: BUYING":"Round 1: BUYING","%num% CAKE":"%num% CAKE","Spend CAKE to buy tickets, contributing to the lottery pot. Ticket purchases end approx. 30 minutes before lottery. Win prizes if 2, 3, or 4 of your ticket numbers match the winning numbers and their positions! Good luck!":"Spend CAKE to buy tickets, contributing to the lottery pot. Ticket purchases end approx. 30 minutes before lottery. Win prizes if 2, 3, or 4 of your ticket numbers match the winning numbers and their positions! Good luck!","Your total tickets for this round":"Your total tickets for this round","Buy ticket":"Buy ticket","View your tickets":"View your tickets","Approx. time left to buy tickets":"Approx. time left to buy tickets","My Tickets (Total: %TICKETS%)":"My Tickets (Total: %TICKETS%)","Close":"Close","Latest Winning Numbers":"Latest Winning Numbers","Ticket":"Ticket","Tickets matching 4 numbers:":"Tickets matching 4 numbers:","Tickets matching 3 numbers:":"Tickets matching 3 numbers:","Tickets matching 2 numbers:":"Tickets matching 2 numbers:","Export recent winning numbers":"Export recent winning numbers","Enter amount of tickets to buy":"Enter amount of tickets to buy","Max":"Max","%num% CAKE Available":"%num% CAKE Available","%num% %symbol% Available":"%num% %symbol% Available","Your amount must be a multiple of 10 CAKE":"Your amount must be a multiple of 10 CAKE","1 Ticket = %lotteryPrice% CAKE":"1 Ticket = %lotteryPrice% CAKE","Until ticket sale:":"Until ticket sale:","You will spend: %num% CAKE":"You will spend: %num% CAKE","Cancel":"Cancel","Confirm":"Confirm","Warning":"Warning","Lottery ticket purchases are final.":"Lottery ticket purchases are final.","Your CAKE will not be returned to you after you spend it to buy tickets.":"Your CAKE will not be returned to you after you spend it to buy tickets.","Tickets are only valid for one lottery draw, and will be burned after the draw.":"Tickets are only valid for one lottery draw, and will be burned after the draw.","Buying tickets does not guarantee you will win anything. Please only participate once you understand the risks.":"Buying tickets does not guarantee you will win anything. Please only participate once you understand the risks.","I understand":"I understand","Ticket purchases are final. Your CAKE cannot be returned to you after buying tickets.":"Ticket purchases are final. Your CAKE cannot be returned to you after buying tickets.","Claim prizes":"Claim prizes","CAKE prizes to be claimed":"CAKE prizes to be claimed","Round 2: CLAIMING":"Round 2: CLAIMING","Pending Confirmation":"Pending Confirmation","Approx. time before next lottery start":"Approx. time before next lottery start","Approve CAKE":"Approve CAKE","IFO: Initial Farm Offerings":"IFO: Initial Farm Offerings","Buy new tokens with a brand new token sale model.":"Buy new tokens with a brand new token sale model.","You\u2019ll pay for the new tokens using CAKE-BNB LP tokens, which means you need to stake equal amounts of CAKE and BNB in a liquidity pool to take part.":"You\u2019ll pay for the new tokens using CAKE-BNB LP tokens, which means you need to stake equal amounts of CAKE and BNB in a liquidity pool to take part.","Get CAKE-BNB LP >":"Get CAKE-BNB LP >","The project gets the BNB, PancakeSwap burns the CAKE.":"The project gets the BNB, PancakeSwap burns the CAKE.","You get the tokens.":"You get the tokens.","Want to launch your own IFO?":"Want to launch your own IFO?","Launch your project with PancakeSwap, Binance Smart Chain\u2019s most-used AMM project and liquidity provider, to bring your token directly to the most active and rapidly growing community on BSC.":"Launch your project with PancakeSwap, Binance Smart Chain\u2019s most-used AMM project and liquidity provider, to bring your token directly to the most active and rapidly growing community on BSC.","Apply to launch":"Apply to launch","Community":"Community","Core":"Core","Available":"Available","My Wallet":"My Wallet","Sign out":"Sign out","Harvest all (%count%)":"Harvest all (%count%)","Cake Stats":"Cake Stats","Total CAKE Supply":"Total CAKE Supply","Total CAKE Burned":"Total CAKE Burned","New CAKE/block":"New CAKE/block","Farms & Staking":"Farms & Staking","CAKE to Harvest":"CAKE to Harvest","CAKE in Wallet":"CAKE in Wallet","Collecting CAKE":"Collecting CAKE","Your Lottery Winnings":"Your Lottery Winnings","CAKE to Collect":"CAKE to Collect","Total jackpot this round":"Total jackpot this round","Collect Winnings":"Collect Winnings","Buy Tickets":"Buy Tickets","Harvest":"Harvest","Approve":"Approve","Select":"Select","Winning Numbers This Round":"Winning Numbers This Round","Winning numbers":"Winning numbers","Total prizes":"Total prizes","Round #%num%":"Round #%num%","Total Pot:":"Total Pot:","Staking Pool":"Staking Pool","PancakeSwap":"PancakeSwap","The #1 AMM and yield farm on Binance Smart Chain.":"The #1 AMM and yield farm on Binance Smart Chain.","Stake CAKE to earn new tokens.":"Stake CAKE to earn new tokens.","Launch Time":"Launch Time","For Sale":"For Sale","CAKE to burn (USD)":"CAKE to burn (USD)","CAKE to burn:":"CAKE to burn:","Unstake":"Unstake","\u2b50\ufe0f Every time you stake and unstake LP tokens, the contract will automagically harvest CAKE rewards for you!":"\u2b50\ufe0f Every time you stake and unstake LP tokens, the contract will automagically harvest CAKE rewards for you!","How to take part":"How to take part","Before Sale":"Before Sale","Buy CAKE and BNB tokens":"Buy CAKE and BNB tokens","Get CAKE-BNB LP tokens by adding CAKE and BNB liquidity":"Get CAKE-BNB LP tokens by adding CAKE and BNB liquidity","During Sale":"During Sale","While the sale is live, commit your CAKE-LP tokens to buy the IFO tokens":"While the sale is live, commit your CAKE-LP tokens to buy the IFO tokens","After Sale":"After Sale","Claim the tokens you bought, along with any unspent funds.":"Claim the tokens you bought, along with any unspent funds.","Done!":"Done!","Read more":"Read more","Connect":"Connect","Trade in for CAKE, or keep for your collection!":"Trade in for CAKE, or keep for your collection!","Register your interest in winning an NFT below.":"Register your interest in winning an NFT below.","Register for a chance to win":"Register for a chance to win","Learn more":"Learn more","Trade in NFT":"Trade in NFT","Trade in":"Trade in","You will receive":"You will receive","When you trade in this NFT to receive CAKE, you will lose access to it forever!":"When you trade in this NFT to receive CAKE, you will lose access to it forever!","Claim NFT":"Claim NFT","How it works":"How it works","Winners will be able to claim an NFT on this page once the claiming period starts.":"Winners will be able to claim an NFT on this page once the claiming period starts.","If you\u2019re not selected, you won\u2019t be able to claim. Better luck next time!":"If you\u2019re not selected, you won\u2019t be able to claim. Better luck next time!","Winners can trade in their NFTs for a CAKE value until the expiry date written below. If you don\'t trade in your NFT by then, don\u2019t worry: you\u2019ll still keep it in your wallet!":"Winners can trade in their NFTs for a CAKE value until the expiry date written below. If you don\'t trade in your NFT by then, don\u2019t worry: you\u2019ll still keep it in your wallet!","How are winners selected?":"How are winners selected?","Winners are selected at random! Good luck!":"Winners are selected at random! Good luck!","Value if traded in":"Value if traded in","Number minted":"Number minted","Number burned":"Number burned","Claim this NFT":"Claim this NFT","Trade in for CAKE":"Trade in for CAKE","Loading\u2026":"Loading\u2026","Details":"Details","You won!":"You won!","Claim an NFT from the options below!":"Claim an NFT from the options below!","Can be traded until":"Can be traded until","Wallet Disconnected":"Wallet Disconnected","Connect to see if you have won an NFT!":"Connect to see if you have won an NFT!","Home":"Home","Trade":"Trade","Farms":"Farms","Pools":"Pools","NFT":"NFT","Info":"Info","IFO":"IFO","More":"More","Liquidity":"Liquidity","Overview":"Overview","Token":"Token","Pairs":"Pairs","Accounts":"Accounts","Stake LP tokens to earn CAKE":"Stake LP tokens to earn CAKE","Active":"Active","Inactive":"Inactive","Dual":"Dual","Compound":"Compound","Unstake %asset%":"Unstake %asset%","The CAKE Lottery":"The CAKE Lottery","Buy tickets with CAKE":"Buy tickets with CAKE","Win if 2, 3 or 4 of your ticket numbers match!":"Win if 2, 3 or 4 of your ticket numbers match!","%time% Until lottery draw":"%time% Until lottery draw","Next draw":"Next draw","Past draws":"Past draws","Round %num%":"Round %num%","Total Pot":"Total Pot","Your tickets for this round":"Your tickets for this round","Sorry, no prizes to collect":"Sorry, no prizes to collect","In Wallet":"In Wallet","Loading...":"Loading...","Next IFO":"Next IFO","Past IFOs":"Past IFOs","APR":"APR","Select lottery number:":"Select lottery number:","Search":"Search","History":"History","Pool Size":"Pool Size","Burned":"Burned","To burn":"To burn","Show Last":"Show Last","Prize Pot":"Prize Pot","Winners":"Winners","No. Matched":"No. Matched","Approve Contract":"Approve Contract","%asset% staked":"%asset% staked","Total Value Locked":"Total Value Locked","Across all LPs and Syrup Pools":"Across all LPs and Syrup Pools","Your wallet":"Your wallet","Logout":"Logout","Profile Setup":"Profile Setup","Show off your stats and collectibles with your unique profile.":"Show off your stats and collectibles with your unique profile.","Total cost: 10 CAKE":"Total cost: 10 CAKE","Get Starter Collectible":"Get Starter Collectible","Set Profile Picture":"Set Profile Picture","Join Team":"Join Team","Set Name":"Set Name","Step 1":"Step 1","Every profile starts by making a \\"starter\\" collectible (NFT).":"Every profile starts by making a \\"starter\\" collectible (NFT).","This starter will also become your first profile picture.":"This starter will also become your first profile picture.","You can change your profile pic later if you get another approved Pancake Collectible,":"You can change your profile pic later if you get another approved Pancake Collectible,","Choose your Starter!":"Choose your Starter!","Choose wisely: you can only ever make one starter collectible!":"Choose wisely: you can only ever make one starter collectible!","Cost: 5 CAKE":"Cost: 5 CAKE","Next Step":"Next Step","Approving":"Approving","Confirming":"Confirming","Approved":"Approved","Confirmed":"Confirmed","Insufficient CAKE balance":"Insufficient CAKE balance","Step 2":"Step 2","Choose collectible":"Choose collectible","Choose a profile picture from the eligible collectibles (NFT) in your wallet, shown below.":"Choose a profile picture from the eligible collectibles (NFT) in your wallet, shown below.","Only approved Pancake Collectibles can be used.":"Only approved Pancake Collectibles can be used.","Allow collectible to be locked":"Allow collectible to be locked","The collectible you\'ve chosen will be locked in a smart contract while it\'s being used as your profile picture. ":"The collectible you\'ve chosen will be locked in a smart contract while it\'s being used as your profile picture. ","Don\'t worry - you\'ll be able to get it back at any time.":"Don\'t worry - you\'ll be able to get it back at any time.","Step 3":"Step 3","Join a Team":"Join a Team","It won\'t be possible to undo the choice you make for the foreseeable future!":"It won\'t be possible to undo the choice you make for the foreseeable future!","There\'s currently no big difference between teams, and no benefit of joining one team over another for now.":"There\'s currently no big difference between teams, and no benefit of joining one team over another for now.","So pick whichever you like!":"So pick whichever you like!","%count% Members":"%count% Members","Step 4":"Step 4","This name will be shown in team leaderboards and search results as long as your profile is active.":"This name will be shown in team leaderboards and search results as long as your profile is active.","Your name must be at least 3 and at most 15 standards letters and numbers long.":"Your name must be at least 3 and at most 15 standards letters and numbers long.","Complete Profile":"Complete Profile","Maximum length: 15 characters":"Maximum length: 15 characters","Minimum length: 3 characters":"Minimum length: 3 characters","No spaces or special characters":"No spaces or special characters","Submitting NFT to contract and confirming User Name and Team":"Submitting NFT to contract and confirming User Name and Team","Oops!":"Oops!","We couldn\'t find any Pancake Collectibles in your wallet.":"We couldn\'t find any Pancake Collectibles in your wallet.","You need a Pancake Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\'ll need to get it back or acquire a new one somehow. You can\'t make a new starter with this wallet address.":"You need a Pancake Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\'ll need to get it back or acquire a new one somehow. You can\'t make a new starter with this wallet address.","ROI":"ROI","Timeframe":"Timeframe","CAKE per $1000":"CAKE per $1000","Calculated based on current rates. Compounding %freq%x daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.":"Calculated based on current rates. Compounding %freq%x daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.","You can\'t change this once you click Confirm.":"You can\'t change this once you click Confirm.","Until ticket sale":"Until ticket sale","To burn:":"To burn:","On sale soon":"On sale soon","On sale":"On sale","Teams Overview":"Teams Overview","Teams":"Teams","See More":"See More","Team Achievements":"Team Achievements","Team Points":"Team Points","Active Members":"Active Members","Set up now":"Set up now","You haven\u2019t set up your profile yet!":"You haven\u2019t set up your profile yet!","You can do this at any time by clicking on your profile picture in the menu":"You can do this at any time by clicking on your profile picture in the menu","Collect":"Collect","Compounding":"Compounding","Harvesting":"Harvesting","Buy CAKE":"Buy CAKE","Get LP tokens":"Get LP tokens","Show":"Show","Hide":"Hide","Stake LP tokens":"Stake LP tokens","Stake":"Stake","Earned":"Earned","Staked":"Staked","The lottery number you provided does not exist":"The lottery number you provided does not exist","Error fetching data":"Error fetching data","Claim BNB to access lottery":"Claim BNB to access lottery","Teams & Profiles":"Teams & Profiles","Earn more points for completing larger quests!":"Earn more points for completing larger quests!","Collecting points for these tasks makes them available again.":"Collecting points for these tasks makes them available again.","Earn points by completing regular tasks!":"Earn points by completing regular tasks!","Task Center":"Task Center","Achievements":"Achievements","Enter your name...":"Enter your name...","I understand that people can view my wallet if they know my username":"I understand that people can view my wallet if they know my username","A minimum of %num% CAKE is required":"A minimum of %num% CAKE is required","Only reuse a name from other social media if you\'re OK with people viewing your wallet. You can\'t change your name once you click Confirm.":"Only reuse a name from other social media if you\'re OK with people viewing your wallet. You can\'t change your name once you click Confirm.","Please connect your wallet to continue":"Please connect your wallet to continue","Public Profile":"Public Profile","Show off your stats and collectibles with your unique profile. Team features will be revealed soon!":"Show off your stats and collectibles with your unique profile. Team features will be revealed soon!","Points":"Points","Set Your Name":"Set Your Name","Step %num%":"Step %num%","See the list >":"See the list >","Staked only":"Staked only","Get %symbol%":"Get %symbol%","Balance":"Balance","Oops, page not found.":"Oops, page not found.","Back Home":"Back Home","Unstake LP tokens":"Unstake LP tokens","Live":"Live","Start":"Start","Finish":"Finish","Connect wallet to view":"Connect wallet to view","Sorry, you needed to register during the \u201centry\u201d period!":"Sorry, you needed to register during the \u201centry\u201d period!","Check your Rank":"Check your Rank","You\u2019re not participating this time.":"You\u2019re not participating this time.","Rank in team":"Rank in team","Your volume":"Your volume","Since start":"Since start","Your Score":"Your Score","Enable":"Enable","Enabling":"Enabling","%amount% CAKE":"%amount% CAKE","IFO Shopper: %title%":"IFO Shopper: %title%","%num% of total":"%num% of total","All estimated rates take into account this pool\u2019s %fee%% performance fee":"All estimated rates take into account this pool\u2019s %fee%% performance fee","Sorry, you didn\u2019t contribute enough LP tokens to meet the minimum threshold. You didn\u2019t buy anything in this sale, but you can still reclaim your LP tokens.":"Sorry, you didn\u2019t contribute enough LP tokens to meet the minimum threshold. You didn\u2019t buy anything in this sale, but you can still reclaim your LP tokens.","Only applies within 3 days of staking. Unstaking after 3 days will not include a fee. Timer resets every time you stake new CAKE in the pool.":"Only applies within 3 days of staking. Unstaking after 3 days will not include a fee. Timer resets every time you stake new CAKE in the pool.","Unstaking Fee":"Unstaking Fee","unstaking fee until":"unstaking fee until","unstaking fee if withdrawn within 72h":"unstaking fee if withdrawn within 72h","Unstaking fee: %fee%%":"Unstaking fee: %fee%%","Performance Fee":"Performance Fee","Compound: collect and restake CAKE into pool.":"Compound: collect and restake CAKE into pool.","Harvest: collect CAKE and send to wallet":"Harvest: collect CAKE and send to wallet","%position% Entered":"%position% Entered","Sort by":"Sort by","Expired":"Expired","Calculating":"Calculating","Next":"Next","Later":"Later","Up":"Up","Down":"Down","%multiplier% Payout":"%multiplier% Payout","Enter %direction%":"Enter %direction%","Prize Pool:":"Prize Pool:","Charts":"Charts","Your history":"Your history","All":"All","Collected":"Collected","Uncollected":"Uncollected","Round":"Round","Rounds":"Rounds","PNL":"PNL","Your Result":"Your Result","Your direction":"Your direction","Your position":"Your position","Lose":"Lose","Entry starts":"Entry starts","Locked Price":"Locked Price","Last Price":"Last Price","Closed Price":"Closed Price","Win":"Win","Opening Block":"Opening Block","Closing Block":"Closing Block","Total Value Locked (TVL)":"Total Value Locked (TVL)","Automatic restaking":"Automatic restaking","Manual CAKE":"Manual CAKE","Auto CAKE":"Auto CAKE","Auto CAKE Bounty":"Auto CAKE Bounty","Claim":"Claim","Any funds you stake in this pool will be automagically harvested and restaked (compounded) for you.":"Any funds you stake in this pool will be automagically harvested and restaked (compounded) for you.","Total staked":"Total staked","Just stake some tokens to earn.":"Just stake some tokens to earn.","High APR, low risk.":"High APR, low risk.","Stake Liquidity Pool (LP) tokens to earn.":"Stake Liquidity Pool (LP) tokens to earn.","Basic Sale":"Basic Sale","Everyone can only commit a limited amount, but may expect a higher return per token committed.":"Everyone can only commit a limited amount, but may expect a higher return per token committed.","Unlimited Sale":"Unlimited Sale","No limits on the amount you can commit. Additional fee applies when claiming.":"No limits on the amount you can commit. Additional fee applies when claiming.","Every person can only commit a limited amount, but may expect a higher return per token committed.":"Every person can only commit a limited amount, but may expect a higher return per token committed.","You didn\u2019t participate in this sale!":"You didn\u2019t participate in this sale!","Max. LP token entry":"Max. LP token entry","How to Take Part":"How to Take Part","Activate your Profile":"Activate your Profile","You\u2019ll need an active PancakeSwap Profile to take part in an IFO!":"You\u2019ll need an active PancakeSwap Profile to take part in an IFO!","Profile Active!":"Profile Active!","Get CAKE-BNB LP Tokens":"Get CAKE-BNB LP Tokens","Stake CAKE and BNB in the liquidity pool to get LP tokens.":"Stake CAKE and BNB in the liquidity pool to get LP tokens.","You\u2019ll spend them to buy IFO sale tokens.":"You\u2019ll spend them to buy IFO sale tokens.","Commit LP Tokens":"Commit LP Tokens","When the IFO sales are live, you can \u201ccommit\u201d your LP tokens to buy the tokens being sold.":"When the IFO sales are live, you can \u201ccommit\u201d your LP tokens to buy the tokens being sold.","We recommend committing to the Basic Sale first, but you can do both if you like.":"We recommend committing to the Basic Sale first, but you can do both if you like.","Claim your tokens and achievement":"Claim your tokens and achievement","After the IFO sales finish, you can claim any IFO tokens that you bought, and any unspent CAKE-BNB LP tokens will be returned to your wallet.":"After the IFO sales finish, you can claim any IFO tokens that you bought, and any unspent CAKE-BNB LP tokens will be returned to your wallet.","This round\u2019s closing transaction has been submitted to the blockchain, and is awaiting confirmation.":"This round\u2019s closing transaction has been submitted to the blockchain, and is awaiting confirmation.","No prediction history available":"No prediction history available","If you are sure you should see history here, make sure you\u2019re connected to the correct wallet and try again.":"If you are sure you should see history here, make sure you\u2019re connected to the correct wallet and try again.","Last price from Chainlink Oracle":"Last price from Chainlink Oracle","Charts are provided for reference only and do not reflect rounds\u2019 final outcome.":"Charts are provided for reference only and do not reflect rounds\u2019 final outcome.","Please refer to the prices shown on the cards for the final outcome.":"Please refer to the prices shown on the cards for the final outcome.","%num% Points to Collect":"%num% Points to Collect","Net results":"Net results","Average return / round":"Average return / round","Average position entered / round":"Average position entered / round","Won":"Won","Lost":"Lost","Entered":"Entered","Connect your wallet to view your prediction history":"Connect your wallet to view your prediction history","Best round: %roundId%":"Best round: %roundId%","You\u2019ve already staked the maximum amount you can stake in this pool!":"You\u2019ve already staked the maximum amount you can stake in this pool!","Markets Paused":"Markets Paused","Prediction markets have been paused due to an error.":"Prediction markets have been paused due to an error.","All open positions have been canceled.":"All open positions have been canceled.","You can reclaim any funds entered into existing positions via the History tab on this page.":"You can reclaim any funds entered into existing positions via the History tab on this page.","Show History":"Show History","Welcome!":"Welcome!","This product is still in beta (testing) phase.":"This product is still in beta (testing) phase.","Before you use this product, make sure you fully understand the risks involved.":"Before you use this product, make sure you fully understand the risks involved.","Once you enter a position, you cannot cancel or adjust it.":"Once you enter a position, you cannot cancel or adjust it.","All losses are final.":"All losses are final.","I understand that I am using this product at my own risk. Any loss incurred due to my actions are my own responsibility.":"I understand that I am using this product at my own risk. Any loss incurred due to my actions are my own responsibility.","Stake CAKE and BNB in the liquidity pool to get LP tokens. You\'ll spend them to buy IFO sale tokens.":"Stake CAKE and BNB in the liquidity pool to get LP tokens. You\'ll spend them to buy IFO sale tokens.","You\'ll need an active PancakeSwap Profile to take part in an IFO!":"You\'ll need an active PancakeSwap Profile to take part in an IFO!","Your LP tokens committed":"Your LP tokens committed","Max. Committed":"Max. Committed","Total committed:":"Total committed:","Additional fee:":"Additional fee:","Learn more about %symbol%":"Learn more about %symbol%","Earned since your last action":"Earned since your last action","Commit ~%amount% LP in total to earn!":"Commit ~%amount% LP in total to earn!","Learn more about %title%":"Learn more about %title%","365d(APY)":"365d(APY)","%num%d":"%num%d","d":"d","h":"h","m":"m","Hide or show expandable content":"Hide or show expandable content","No tokens to stake":"No tokens to stake","Successfully claimed!":"Successfully claimed!","Unable to claim NFT":"Unable to claim NFT","Unable to claim NFT, please try again.":"Unable to claim NFT, please try again.","Error":"Error","1x %nftName% Collectible":"1x %nftName% Collectible","1x %nftName% NFT":"1x %nftName% NFT","NFT successfully transferred!":"NFT successfully transferred!","View Contract":"View Contract","See Pair Info":"See Pair Info","Stake LP":"Stake LP","Multiplier":"Multiplier","Start Farming":"Start Farming","Farming":"Farming","Enable Farm":"Enable Farm","Search Farms":"Search Farms","To Top":"To Top","Total value of the funds in this farm\u2019s liquidity pool":"Total value of the funds in this farm\u2019s liquidity pool","The multiplier represents the amount of CAKE rewards each farm gets.":"The multiplier represents the amount of CAKE rewards each farm gets.","For example, if a 1x farm was getting 1 CAKE per block, a 40x farm would be getting 40 CAKE per block.":"For example, if a 1x farm was getting 1 CAKE per block, a 40x farm would be getting 40 CAKE per block.","Hot":"Hot","Success!":"Success!","You have successfully claimed your rewards.":"You have successfully claimed your rewards.","Commit":"Commit","If you don\u2019t commit enough LP tokens, you may not receive any IFO tokens at all and will only receive a full refund of your LP tokens.":"If you don\u2019t commit enough LP tokens, you may not receive any IFO tokens at all and will only receive a full refund of your LP tokens.","LP Tokens required":"LP Tokens required","Get LP tokens, or make sure your tokens aren\u2019t staked somewhere else.":"Get LP tokens, or make sure your tokens aren\u2019t staked somewhere else.","Funds to raise:":"Funds to raise:","Price per %symbol%:":"Price per %symbol%:","You need an active PancakeSwap Profile to take part in an IFO!":"You need an active PancakeSwap Profile to take part in an IFO!","Achievement":"Achievement","Commit ~%minLp% LP in total to earn!":"Commit ~%minLp% LP in total to earn!","What\u2019s the difference between a Basic Sale and Unlimited Sale?":"What\u2019s the difference between a Basic Sale and Unlimited Sale?","In the Basic Sale, every user can commit a maximum of about 100 USD worth of CAKE-BNB LP Tokens. We calculate the maximum LP amount about 30 minutes before each IFO. The Basic Sale has no participation fee.":"In the Basic Sale, every user can commit a maximum of about 100 USD worth of CAKE-BNB LP Tokens. We calculate the maximum LP amount about 30 minutes before each IFO. The Basic Sale has no participation fee.","In the Unlimited Sale, there\u2019s no limit to the amount of CAKE-BNB LP Tokens you can commit. However, there\u2019s a fee for participation: see below.":"In the Unlimited Sale, there\u2019s no limit to the amount of CAKE-BNB LP Tokens you can commit. However, there\u2019s a fee for participation: see below.","Which sale should I commit to? Can I do both?":"Which sale should I commit to? Can I do both?","You can choose one or both at the same time! If you\u2019re only committing a small amount, we recommend the Basic Sale first. Just remember you need a PancakeSwap Profile in order to participate.":"You can choose one or both at the same time! If you\u2019re only committing a small amount, we recommend the Basic Sale first. Just remember you need a PancakeSwap Profile in order to participate.","How much is the participation fee?":"How much is the participation fee?","There\u2019s only a participation fee for the Unlimited Sale: there\u2019s no fee for the Basic Sale.":"There\u2019s only a participation fee for the Unlimited Sale: there\u2019s no fee for the Basic Sale.","The fee will start at 1%.":"The fee will start at 1%.","The 1% participation fee decreases in cliffs, based on the percentage of overflow from the \u201cUnlimited\u201d portion of the sale.":"The 1% participation fee decreases in cliffs, based on the percentage of overflow from the \u201cUnlimited\u201d portion of the sale.","Where does the participation fee go?":"Where does the participation fee go?","We burn it. The CAKE-BNB LP tokens from the participation fee will be decomposed. We will then use the BNB portion to market buy the CAKE equivalent, and finally throw all of the CAKE into the weekly token burn.":"We burn it. The CAKE-BNB LP tokens from the participation fee will be decomposed. We will then use the BNB portion to market buy the CAKE equivalent, and finally throw all of the CAKE into the weekly token burn.","How can I get an achievement for participating in the IFO?":"How can I get an achievement for participating in the IFO?","You need to contribute a minimum of about 10 USD worth of CAKE-BNB LP Tokens to either sale.":"You need to contribute a minimum of about 10 USD worth of CAKE-BNB LP Tokens to either sale.","You can contribute to one or both, it doesn\u2019t matter. Only your overall contribution is counted for the achievement.":"You can contribute to one or both, it doesn\u2019t matter. Only your overall contribution is counted for the achievement.","The Lottery Is Changing!":"The Lottery Is Changing!","Come back soon!":"Come back soon!","Staked (compounding)":"Staked (compounding)","Contract Enabled":"Contract Enabled","You can now stake in the %symbol% vault!":"You can now stake in the %symbol% vault!","You can now stake in the %symbol% pool!":"You can now stake in the %symbol% pool!","Please try again. Confirm the transaction and make sure you are paying enough gas!":"Please try again. Confirm the transaction and make sure you are paying enough gas!","Start earning":"Start earning","Recent CAKE profit":"Recent CAKE profit","Unstaked!":"Unstaked!","Unstaked":"Unstaked","Staked!":"Staked!","Your funds have been staked in the pool":"Your funds have been staked in the pool","Your earnings have also been harvested to your wallet":"Your earnings have also been harvested to your wallet","%error% - Please try again.":"%error% - Please try again.","Stake in Pool":"Stake in Pool","Balance: %balance%":"Balance: %balance%","%day%d : %hour%h : %minute%m":"%day%d : %hour%h : %minute%m","%day%d %hour%h %minute%m":"%day%d %hour%h %minute%m","Subtracted automatically from each yield harvest and burned.":"Subtracted automatically from each yield harvest and burned.","Blocks":"Blocks","Add to Metamask":"Add to Metamask","Compounded":"Compounded","Canceled":"Canceled","Please try again and confirm the transaction.":"Please try again and confirm the transaction.","Harvested":"Harvested","Close Window":"Close Window","Insufficient %symbol% balance":"Insufficient %symbol% balance","You\u2019ll need %symbol% to stake in this pool!":"You\u2019ll need %symbol% to stake in this pool!","Buy some %symbol%, or make sure your %symbol% isn\u2019t in another pool or LP.":"Buy some %symbol%, or make sure your %symbol% isn\u2019t in another pool or LP.","Buy":"Buy","Locate Assets":"Locate Assets","%symbol% required":"%symbol% required","Your %symbol% earnings have also been harvested to your wallet!":"Your %symbol% earnings have also been harvested to your wallet!","Your %symbol% funds have been staked in the pool!":"Your %symbol% funds have been staked in the pool!","Max stake for this pool: %amount% %token%":"Max stake for this pool: %amount% %token%","Maximum total stake: %amount% %token%":"Maximum total stake: %amount% %token%","APY includes compounding, APR doesn\u2019t. This pool\u2019s CAKE is compounded automatically, so we show APY.":"APY includes compounding, APR doesn\u2019t. This pool\u2019s CAKE is compounded automatically, so we show APY.","This pool\u2019s rewards aren\u2019t compounded automatically, so we show APR":"This pool\u2019s rewards aren\u2019t compounded automatically, so we show APR","Auto":"Auto","Manual":"Manual","Earn CAKE, stake CAKE":"Earn CAKE, stake CAKE","This bounty is given as a reward for providing a service to other users.":"This bounty is given as a reward for providing a service to other users.","Whenever you successfully claim the bounty, you\u2019re also helping out by activating the Auto CAKE Pool\u2019s compounding function for everyone.":"Whenever you successfully claim the bounty, you\u2019re also helping out by activating the Auto CAKE Pool\u2019s compounding function for everyone.","Auto-Compound Bounty: %fee%% of all Auto CAKE pool users pending yield":"Auto-Compound Bounty: %fee%% of all Auto CAKE pool users pending yield","Bounty collected!":"Bounty collected!","CAKE bounty has been sent to your wallet.":"CAKE bounty has been sent to your wallet.","Could not be collected":"Could not be collected","There may be an issue with your transaction, or another user claimed the bounty first.":"There may be an issue with your transaction, or another user claimed the bounty first.","Claim Bounty":"Claim Bounty","You\u2019ll claim":"You\u2019ll claim","Pool total pending yield":"Pool total pending yield","Bounty":"Bounty","What\u2019s this?":"What\u2019s this?","Help":"Help","Syrup Pools":"Syrup Pools","Best round: #%roundId%":"Best round: #%roundId%","View Reclaimed & Won":"View Reclaimed & Won","This round was automatically canceled due to an error. If you entered a position, please reclaim your funds below.":"This round was automatically canceled due to an error. If you entered a position, please reclaim your funds below.","Round History":"Round History","Your History":"Your History","Filter":"Filter","Starting Soon":"Starting Soon","Live Now":"Live Now","Reclaim":"Reclaim","This page can\u2019t be displayed right now due to an error. Please check back soon.":"This page can\u2019t be displayed right now due to an error. Please check back soon.","Round Canceled":"Round Canceled","Learn More":"Learn More","Payout":"Payout","%position% position entered":"%position% position entered","Enter UP":"Enter UP","Enter DOWN":"Enter DOWN","An error occurred, unable to enter your position":"An error occurred, unable to enter your position","Set Position":"Set Position","Insufficient BNB balance":"Insufficient BNB balance","A minimum amount of %num% %token% is required":"A minimum amount of %num% %token% is required","Enter an amount":"Enter an amount","You won\u2019t be able to remove or change your position once you enter it.":"You won\u2019t be able to remove or change your position once you enter it.","Prize Pool":"Prize Pool","Winnings collected!":"Winnings collected!","Your prizes have been sent to your wallet":"Your prizes have been sent to your wallet","Collecting":"Collecting","Closing":"Closing","Position reclaimed!":"Position reclaimed!","Reclaim Position":"Reclaim Position","This Product is in beta.":"This Product is in beta.","I understand that I am using this product at my own risk. Any losses incurred due to my actions are my own responsibility.":"I understand that I am using this product at my own risk. Any losses incurred due to my actions are my own responsibility.","I understand that this product is still in beta. I am participating at my own risk":"I understand that this product is still in beta. I am participating at my own risk","Continue":"Continue","Points Collected!":"Points Collected!","%num% points":"%num% points","Cost to update:":"Cost to update:","Cost to reactivate:":"Cost to reactivate:","Profile Updated!":"Profile Updated!","Choose a new Collectible to use as your profile pic.":"Choose a new Collectible to use as your profile pic.","Sorry! You don\u2019t have any eligible Collectibles in your wallet to use!":"Sorry! You don\u2019t have any eligible Collectibles in your wallet to use!","Make sure you have a Pancake Collectible in your wallet and try again!":"Make sure you have a Pancake Collectible in your wallet and try again!","Edit Profile":"Edit Profile","Change Profile Pic":"Change Profile Pic","Remove Profile Pic":"Remove Profile Pic","Profile Paused!":"Profile Paused!","This will suspend your profile and send your Collectible back to your wallet":"This will suspend your profile and send your Collectible back to your wallet","While your profile is suspended, you won\'t be able to earn points, but your achievements and points will stay associated with your profile":"While your profile is suspended, you won\'t be able to earn points, but your achievements and points will stay associated with your profile","Cost to reactivate in the future: %cost% CAKE":"Cost to reactivate in the future: %cost% CAKE","%minimum% CAKE required to change profile pic":"%minimum% CAKE required to change profile pic","Reactivate Profile":"Reactivate Profile","No achievements yet!":"No achievements yet!","Claim your Gift!":"Claim your Gift!","Thank you for being a day-one user of Pancake Profiles!":"Thank you for being a day-one user of Pancake Profiles!","If you haven\'t already noticed, we made a mistake and the starter bunny you chose got mixed up and changed into another bunny. Oops!":"If you haven\'t already noticed, we made a mistake and the starter bunny you chose got mixed up and changed into another bunny. Oops!","To make it up to you, we\u2019ll refund you the full 4 CAKE it cost to make your bunny.":"To make it up to you, we\u2019ll refund you the full 4 CAKE it cost to make your bunny.","We\u2019re also preparing an all-new collectible for you to claim (for free!) in the near future.":"We\u2019re also preparing an all-new collectible for you to claim (for free!) in the near future.","Once you claim the refund, you can make another account with another wallet, mint a new bunny, and send it to your main account via the NFT page.":"Once you claim the refund, you can make another account with another wallet, mint a new bunny, and send it to your main account via the NFT page.","Claim Your CAKE":"Claim Your CAKE","Pancake Collectibles":"Pancake Collectibles","Pancake Collectibles are special ERC-721 NFTs that can be used on the PancakeSwap platform.":"Pancake Collectibles are special ERC-721 NFTs that can be used on the PancakeSwap platform.","NFTs in this user\u2019s wallet that aren\u2019t approved Pancake Collectibles won\u2019t be shown here.":"NFTs in this user\u2019s wallet that aren\u2019t approved Pancake Collectibles won\u2019t be shown here.","No NFTs Found":"No NFTs Found","See all approved Pancake Collectibles":"See all approved Pancake Collectibles","Coming Soon!":"Coming Soon!","Profile created!":"Profile created!","Submitting NFT to contract and confirming User Name and Team.":"Submitting NFT to contract and confirming User Name and Team.","Cost":"Cost","Your Profile":"Your Profile","Check your stats and collect achievements":"Check your stats and collect achievements","You\u2019ve got a gift to claim!":"You\u2019ve got a gift to claim!","Show off your stats and collectibles with your unique profile":"Show off your stats and collectibles with your unique profile","Total cost: 1.5 CAKE":"Total cost: 1.5 CAKE","Cost: %num% CAKE":"Cost: %num% CAKE","You can change your profile pic later if you get another approved Pancake Collectible.":"You can change your profile pic later if you get another approved Pancake Collectible.","Every profile starts by making a \u201cstarter\u201d collectible (NFT).":"Every profile starts by making a \u201cstarter\u201d collectible (NFT).","We couldn\u2019t find any Pancake Collectibles in your wallet.":"We couldn\u2019t find any Pancake Collectibles in your wallet.","You need a Pancake Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\u2019ll need to get it back or acquire a new one somehow. You can\u2019t make a new starter with this wallet address.":"You need a Pancake Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\u2019ll need to get it back or acquire a new one somehow. You can\u2019t make a new starter with this wallet address.","The collectible you\'ve chosen will be locked in a smart contract while it\u2019s being used as your profile picture. Don\'t worry - you\'ll be able to get it back at any time.":"The collectible you\'ve chosen will be locked in a smart contract while it\u2019s being used as your profile picture. Don\'t worry - you\'ll be able to get it back at any time.","It won\u2019t be possible to undo the choice you make for the foreseeable future!":"It won\u2019t be possible to undo the choice you make for the foreseeable future!","There\u2019s currently no big difference between teams, and no benefit of joining one team over another for now. So pick whichever one you like!":"There\u2019s currently no big difference between teams, and no benefit of joining one team over another for now. So pick whichever one you like!","Your name must be at least 3 and at most 15 standard letters and numbers long. You can\u2019t change this once you click Confirm.":"Your name must be at least 3 and at most 15 standard letters and numbers long. You can\u2019t change this once you click Confirm.","Unable to verify username":"Unable to verify username","Created %dateCreated% ago":"Created %dateCreated% ago","Paused":"Paused","April":"April","Easter Battle":"Easter Battle","$200,000 in Prizes!":"$200,000 in Prizes!","Compete with other teams to win CAKE, collectible NFTs, achievements & more!":"Compete with other teams to win CAKE, collectible NFTs, achievements & more!","Now Live!":"Now Live!","Calculating prizes":"Calculating prizes","I want to Battle!":"I want to Battle!","Trade Now":"Trade Now","Claim period over":"Claim period over","Prizes Claimed!":"Prizes Claimed!","Nothing to claim":"Nothing to claim","Registered!":"Registered!","Congratulations! You won":"Congratulations! You won","Collectible NFT":"Collectible NFT","All prizes will be sent directly to your wallet and user account.":"All prizes will be sent directly to your wallet and user account.","How Can I Join?":"How Can I Join?","Set up your":"Set up your","Pancake Profile":"Pancake Profile","then register for the competition by clicking \u201cI WANT TO BATTLE\u201d button above.":"then register for the competition by clicking \u201cI WANT TO BATTLE\u201d button above.","Battle Time":"Battle Time","Trade BNB/BUSD, CAKE/BNB, ETH/BNB and BTCB/BNB during the battle period to raise both your and your team\u2019s score. See the Rules section below for more.":"Trade BNB/BUSD, CAKE/BNB, ETH/BNB and BTCB/BNB during the battle period to raise both your and your team\u2019s score. See the Rules section below for more.","Prize Claim":"Prize Claim","Teams and traders will be ranked in the order of trading volume. Collect your prizes and celebrate!":"Teams and traders will be ranked in the order of trading volume. Collect your prizes and celebrate!","Registration starting April 5":"Registration starting April 5","Tier":"Tier","CAKE Prizes (Split)":"CAKE Prizes (Split)","Gold":"Gold","Silver":"Silver","Bronze":"Bronze","Purple":"Purple","Teal":"Teal","#%team% Team":"#%team% Team","Prizes by Team":"Prizes by Team","Higher trading volume = higher rank!":"Higher trading volume = higher rank!","Prizes to be distributed in CAKE and shared by all members of a tier. CAKE price in USD to be determined on the day of distribution. Details below.":"Prizes to be distributed in CAKE and shared by all members of a tier. CAKE price in USD to be determined on the day of distribution. Details below.","Every eligible participant will win prizes at the end of the competition.":"Every eligible participant will win prizes at the end of the competition.","The better your team performs, the better prizes you will get!":"The better your team performs, the better prizes you will get!","The final winning team will be the team with the highest total combined volume of their top 500 members at the end of the competition period.":"The final winning team will be the team with the highest total combined volume of their top 500 members at the end of the competition period.","Make a profile!":"Make a profile!","It looks like you\u2019ve disabled your account by removing your Pancake Collectible (NFT) profile picture.":"It looks like you\u2019ve disabled your account by removing your Pancake Collectible (NFT) profile picture.","Reactivate your profile!":"Reactivate your profile!","You need to reactivate your profile by replacing your profile picture in order to join the competition.":"You need to reactivate your profile by replacing your profile picture in order to join the competition.","Go to my profile":"Go to my profile","You have registered for the competition!":"You have registered for the competition!","Registering for the competition will make your wallet address publicly visible on the leaderboard.":"Registering for the competition will make your wallet address publicly visible on the leaderboard.","This decision cannot be reversed.":"This decision cannot be reversed.","I understand that my address may be displayed publicly throughout the competition.":"I understand that my address may be displayed publicly throughout the competition.","Eligible trading pairs":"Eligible trading pairs","Only trades on BNB/BUSD, CAKE/BNB, ETH/BNB and BTCB/BNB pairs will be included in volume calculations.":"Only trades on BNB/BUSD, CAKE/BNB, ETH/BNB and BTCB/BNB pairs will be included in volume calculations.","Calculating team ranks and winners":"Calculating team ranks and winners","Team ranks are calculated by the total combined volume of the top 500 members of each respective team.":"Team ranks are calculated by the total combined volume of the top 500 members of each respective team.","Prize distribution":"Prize distribution","Prizes to be distributed in CAKE and shared by all members of each respective tier as per the Prizes section above.":"Prizes to be distributed in CAKE and shared by all members of each respective tier as per the Prizes section above.","CAKE prizes will be distributed as per the CAKE/BUSD price on the day of distribution. Every eligible participant will win prizes at the end of the competition.":"CAKE prizes will be distributed as per the CAKE/BUSD price on the day of distribution. Every eligible participant will win prizes at the end of the competition.","Every participant will win at least one prize at the end of the competition":"Every participant will win at least one prize at the end of the competition","Fine print":"Fine print","In the event of a disagreement concerning the final winning team or rank, PancakeSwap will have the final say.":"In the event of a disagreement concerning the final winning team or rank, PancakeSwap will have the final say.","PancakeSwap can and will disqualify any team or specific members that are proven to have taken malicious action or attempt to \u201ccheat\u201d in any way.":"PancakeSwap can and will disqualify any team or specific members that are proven to have taken malicious action or attempt to \u201ccheat\u201d in any way.","Can I join the battle after it starts?":"Can I join the battle after it starts?","Sorry, no. You need to register during the registration period, before the start of the event.":"Sorry, no. You need to register during the registration period, before the start of the event.","How do I know if I successfully registered?":"How do I know if I successfully registered?","At the top of the page, the text in the button \u201cI Want to Battle\u201d will change to \u201cRegistered\u201d.":"At the top of the page, the text in the button \u201cI Want to Battle\u201d will change to \u201cRegistered\u201d.","How can I see my current rank?":"How can I see my current rank?","Check Your Score section on the event page. You\u2019ll need to connect your wallet, of course.":"Check Your Score section on the event page. You\u2019ll need to connect your wallet, of course.","How do I claim my prize(s)?":"How do I claim my prize(s)?","After the battle ends, visit the event page and click the \u201cClaim Prizes\u201d button in the top section or in \u201cYour Score\u201d section. Once you claim your prizes successfully, the button text will change to \u201cPrizes Claimed\u201d.":"After the battle ends, visit the event page and click the \u201cClaim Prizes\u201d button in the top section or in \u201cYour Score\u201d section. Once you claim your prizes successfully, the button text will change to \u201cPrizes Claimed\u201d.","Trade to increase your rank":"Trade to increase your rank","Eligible pairs: BNB/BUSD, CAKE/BNB, ETH/BNB and BTCB/BNB":"Eligible pairs: BNB/BUSD, CAKE/BNB, ETH/BNB and BTCB/BNB","Play as a team":"Play as a team","The higher your team\u2019s rank, the better your prizes":"The higher your team\u2019s rank, the better your prizes","Top Traders":"Top Traders","Since start of the competition":"Since start of the competition","Show More":"Show More","Share Score":"Share Score","Your tier: gold":"Your tier: gold","Love, The Chefs x":"Love, The Chefs x","HECK YEAH!":"HECK YEAH!","Next tier":"Next tier","to become #%rank% in team":"to become #%rank% in team","#%global% Overall":"#%global% Overall","CAKE Prizes":"CAKE Prizes","Share Your Score":"Share Your Score","Brag to your friends and annoy your rivals with your custom scorecard!":"Brag to your friends and annoy your rivals with your custom scorecard!","Download Image":"Download Image","Screenshot or press & hold the image to share!":"Screenshot or press & hold the image to share!","Block %num%":"Block %num%","%max% %symbol% Available":"%max% %symbol% Available","Profile Pic":"Profile Pic","Transfer":"Transfer","Congratulations!":"Congratulations!","You won a collectible!":"You won a collectible!","Claim now":"Claim now","NFT in wallet":"NFT in wallet","Trade in your NFT for CAKE, or just keep it for your collection.":"Trade in your NFT for CAKE, or just keep it for your collection.","No NFTs to claim":"No NFTs to claim","You have no NFTs to claim at this time, but you can still see the NFTs in this series below.":"You have no NFTs to claim at this time, but you can still see the NFTs in this series below.","Please wait...":"Please wait...","The claiming period hasn\u2019t started yet. Check back soon.":"The claiming period hasn\u2019t started yet. Check back soon.","Please enter a valid wallet address":"Please enter a valid wallet address","Unable to transfer NFT":"Unable to transfer NFT","Transfer NFT":"Transfer NFT","Transferring":"Transferring","Receiving address":"Receiving address","Paste address":"Paste address","Could not retrieve CAKE costs for profile":"Could not retrieve CAKE costs for profile","An error occurred approving transaction":"An error occurred approving transaction","Provider Error":"Provider Error","No provider was found":"No provider was found","Authorization Error":"Authorization Error","Please authorize to access your account":"Please authorize to access your account","Unable to find connector":"Unable to find connector","The connector config is wrong":"The connector config is wrong","You have contributed %amount% CAKE-BNB LP tokens to this IFO!":"You have contributed %amount% CAKE-BNB LP tokens to this IFO!","You\u2019ll need CAKE-BNB LP tokens to participate in the IFO!":"You\u2019ll need CAKE-BNB LP tokens to participate in the IFO!","Your %symbol% committed":"Your %symbol% committed","Your %symbol% RECLAIMED":"Your %symbol% RECLAIMED","Your %symbol% TO RECLAIM":"Your %symbol% TO RECLAIM","%symbol% received":"%symbol% received","%symbol% to receive":"%symbol% to receive","Stories were told, and songs were sung about Chef Mixie\u2019s pancakes and her big Syrup gun.":"Stories were told, and songs were sung about Chef Mixie\u2019s pancakes and her big Syrup gun.","Eggscellent! Celebrating Syrup Storm winning the Easter Battle!":"Eggscellent! Celebrating Syrup Storm winning the Easter Battle!","Melting Easter eggs and melting hearts!":"Melting Easter eggs and melting hearts!","Watch out for Flipsie\u2019s spatula smash!":"Watch out for Flipsie\u2019s spatula smash!","Do you like chocolate with your syrup? Go long!":"Do you like chocolate with your syrup? Go long!","Happy Niu Year! This bunny\u2019s excited for the year of the bull (market!)":"Happy Niu Year! This bunny\u2019s excited for the year of the bull (market!)","Oopsie daisy! Hiccup\'s had a bit of an accident. Poor little fella.":"Oopsie daisy! Hiccup\'s had a bit of an accident. Poor little fella.","Aww, looks like eating pancakes all day is not easy. Sweet dreams!":"Aww, looks like eating pancakes all day is not easy. Sweet dreams!","Sunny is always cheerful when there are pancakes around. Smile!":"Sunny is always cheerful when there are pancakes around. Smile!","Don\'t let that dopey smile deceive you... Churro\'s a master CAKE chef!":"Don\'t let that dopey smile deceive you... Churro\'s a master CAKE chef!","Nommm... Oh hi, I\'m just meditating on the meaning of CAKE.":"Nommm... Oh hi, I\'m just meditating on the meaning of CAKE.","Three guesses what\'s put that twinkle in those eyes! (Hint: it\'s CAKE)":"Three guesses what\'s put that twinkle in those eyes! (Hint: it\'s CAKE)","These bunnies love nothing more than swapping pancakes. Especially on BSC.":"These bunnies love nothing more than swapping pancakes. Especially on BSC.","It\'s raining syrup on this bunny, but he doesn\'t seem to mind. Can you blame him?":"It\'s raining syrup on this bunny, but he doesn\'t seem to mind. Can you blame him?","These bunnies like their pancakes with blueberries. What\'s your favorite topping?":"These bunnies like their pancakes with blueberries. What\'s your favorite topping?","Love makes the world go \'round... but so do pancakes. And these bunnies know it.":"Love makes the world go \'round... but so do pancakes. And these bunnies know it.","It\u2019s sparkling syrup, pancakes, and even lottery tickets! This bunny really loves it.":"It\u2019s sparkling syrup, pancakes, and even lottery tickets! This bunny really loves it.","The storm\'s a-comin! Watch out! These bulls are stampeding in a syrupy surge!":"The storm\'s a-comin! Watch out! These bulls are stampeding in a syrupy surge!","The flippening is coming. Don\'t get in these bunnies\' way, or you\'ll get flipped, too!":"The flippening is coming. Don\'t get in these bunnies\' way, or you\'ll get flipped, too!","Can you stand the heat? Stay out of the kitchen or you might get burned to a crisp!":"Can you stand the heat? Stay out of the kitchen or you might get burned to a crisp!","%ratio%% of total sale":"%ratio%% of total sale","Your %symbol% earnings have been sent to your wallet!":"Your %symbol% earnings have been sent to your wallet!","Your %symbol% earnings have been re-invested into the pool!":"Your %symbol% earnings have been re-invested into the pool!","Stake %symbol%":"Stake %symbol%","You must harvest and compound your earnings from this pool manually.":"You must harvest and compound your earnings from this pool manually.","Register":"Register","Contribute %symbol%":"Contribute %symbol%","Volume":"Volume","%symbol% per $1,000":"%symbol% per $1,000","Prediction (BETA)":"Prediction (BETA)","Collectibles":"Collectibles","Team Battle":"Team Battle","Teams & Profile":"Teams & Profile","Leaderboard":"Leaderboard","Tokens":"Tokens","Contact":"Contact","Merch":"Merch","LP Migration":"LP Migration","V1 Liquidity (Old)":"V1 Liquidity (Old)","Claim Collectible":"Claim Collectible","The higher your team\u2019s rank, the better your prizes!":"The higher your team\u2019s rank, the better your prizes!","Get Ready":"Get Ready","Earn up to %highestApr% APR in Farms":"Earn up to %highestApr% APR in Farms","Earn %assets% in Pools":"Earn %assets% in Pools","Activate PancakeSwap Profile to take part in next IFO\u2018s!":"Activate PancakeSwap Profile to take part in next IFO\u2018s!","Trading Battle":"Trading Battle","Prediction":"Prediction","Initial Farm Offering":"Initial Farm Offering","An error occurred confirming transaction":"An error occurred confirming transaction","Successfully Enabled!":"Successfully Enabled!","You can now participate in the %symbol% IFO.":"You can now participate in the %symbol% IFO.","Team Ranks":"Team Ranks","Prizes":"Prizes","Rules":"Rules","Entry":"Entry","Enable pool":"Enable pool","Start staking":"Start staking","Search Pools":"Search Pools","Ends in":"Ends in","Starts in":"Starts in","Total amount of %symbol% staked in this pool":"Total amount of %symbol% staked in this pool","These pools are no longer distributing rewards. Please unstake your tokens.":"These pools are no longer distributing rewards. Please unstake your tokens.","Max. stake per user":"Max. stake per user","You have claimed your rewards!":"You have claimed your rewards!","Already Collected":"Already Collected","Ended %date%":"Ended %date%","Starts %date%":"Starts %date%","Ends %date%":"Ends %date%","Closed":"Closed","Vote Now":"Vote Now","Soon":"Soon","No proposals found":"No proposals found","Creator":"Creator","Proposals":"Proposals","Make a Proposal":"Make a Proposal","Have your say in the future of the PancakeSwap Ecosystem":"Have your say in the future of the PancakeSwap Ecosystem","Got a suggestion?":"Got a suggestion?","Community proposals are a great way to see how the community feels about your ideas.":"Community proposals are a great way to see how the community feels about your ideas.","They won\'t necessarily be implemented if the community votes successful, but suggestions with a lot of community support may be made into Core proposals.":"They won\'t necessarily be implemented if the community votes successful, but suggestions with a lot of community support may be made into Core proposals.","%field% is required":"%field% is required","Please create a minimum of %num% choices":"Please create a minimum of %num% choices","Choices must not be empty":"Choices must not be empty","Please select a valid date":"Please select a valid date","Please select a valid time":"Please select a valid time","End date must be after the start date":"End date must be after the start date","Invalid snapshot":"Invalid snapshot"}')
    },
    234: function(e, t, n) {
        e.exports = n.p + "static/media/blue-loader.904b44c2.svg"
    },
    236: function(e) {
        e.exports = JSON.parse('{"name":"Pancake Unsupported List","timestamp":"2021-01-05T20:47:02.923Z","version":{"major":1,"minor":0,"patch":0},"tags":{},"logoURI":"ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir","keywords":["pancake","unsupported"],"tokens":[]}')
    },
    237: function(e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ENS","name":"_ens","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"a","type":"address"}],"name":"AddrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"coinType","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"newAddress","type":"bytes"}],"name":"AddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":false,"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"AuthorisationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"hash","type":"bytes"}],"name":"ContenthashChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"record","type":"bytes"}],"name":"DNSRecordChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"}],"name":"DNSRecordDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"DNSZoneCleared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"indexed":false,"internalType":"address","name":"implementer","type":"address"}],"name":"InterfaceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"NameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"x","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"string","name":"indexedKey","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"TextChanged","type":"event"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"addr","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"authorisations","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"clearDNSZone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"contenthash","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"uint16","name":"resource","type":"uint16"}],"name":"dnsRecord","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"}],"name":"hasDNSRecords","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"interfaceImplementer","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"pubkey","outputs":[{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentType","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setABI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"coinType","type":"uint256"},{"internalType":"bytes","name":"a","type":"bytes"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"a","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"setAuthorisation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"hash","type":"bytes"}],"name":"setContenthash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setDNSRecords","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"internalType":"address","name":"implementer","type":"address"}],"name":"setInterface","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"setPubkey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"setText","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"}],"name":"text","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]')
    },
    238: function(e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ENS","name":"_old","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"label","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"old","outputs":[{"internalType":"contract ENS","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"recordExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setSubnodeRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"}]')
    },
    239: function(e) {
        e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]')
    },
    240: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAulBMVEUAAADvrxDvtwjvuAnxuQvwuQrwuQvwuQrwugvwugvvtwvxuAvxugvvtwjvtgrwuQvxugnwuwryuQvxuwvvugvvtQvwuQvvtwzvuQ3wuAvvvxDvuAvvuArwugvvtwrvuQrvtgvvuAzvuAvvtwvvtgvwuQvFmQvFmQwZGRAZGRELDhF+Yw5EOQ82LhDirgs2Lg9wWQ4oIxDTpAxhTg7TowsnIxBhTw59ZA6Mbg1vWQ6Lbw6Lbg1EOA////8DpA4OAAAAJXRSTlMAEEBwj6/P3++/YJ+fIFDfb69fjzAw70BQvxCQsM+gUHCQcKCQAtJYUgAAAAFiS0dEPdBtUVkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflARoNBSomjRAaAAADq0lEQVRo3sWabXeaMBSAg4gglrG1Vqrtttr2FgZrt6KOvf3/37UPakngJrk32LP70ZzzPOblXiCJEKTwRv44mIQRAEAUToOxP/LEqcKLZyEgMTmLkxPQ/SkYYjrQMTLS9xG8c//zIZAijZ347yMgh4NiFAIrmIrkA7DjjDHd5xE4BLkT3hgc44KUfEkIzpEShmkewYBIL63DDwPj3LL4YXD4b8w3Ggjj85gPGKU5gV98IRgundfnY1GWBMMCXa0ejU8ypFjGjYl8kuGiz4/JfJLhnD8BLZ9i6E3DGYdPMQTMAVL5FEOmCEImn2BIOR3o8wkGn94BjG83LDxqB3C+3eATO6DjWw2vs3DlyLcajgspYPCrimGYHpKYwwfgGDzrFPf5LMN+mpc8PscwtYwQzucYPPMIfcX5XcOTnhCb6+jzNwnzXW6RDS+1njATQkyAZNioLRWJD6kQK2OqvBo23ZaKwgfwxAgohk2/paLwIRM++vtWNbT87VYxSPytJhOu8fW5kQ0Sf/ciGyT+D3y1XqOF6LGQ//RzI/HLUjL8lPiafLjB8nifX8iwb3dlqRhkPm74iDwLjvn7C+djhkab06mI9PWhwfl9Q6OvGgthqj8Nzu8aGlNdEsb61uB81dAYK19XkBea+larglpT+QqbQDFUcoNsUPO3MvChP8mtoVIbWkO3PlR6/gJZpkdD1W04Gvr1p9LxIcWqda5LtL0Bq2+Vhg9TtFTkSqnY/lYMEv+PUvkKvFSgxS4v5PomrdZ6J/EbebVWhabY4eW6Vte/ZKiV9S8Zak25ziwPnB1WNdr8etnaHjiWR+YTXpfa/LUYPPOr9Su/Z2jKkmL4KIT4ROJ3DE1Zkgwz84vX31JT+RrOi5dhEtTK1xpUfmF4dUwsL7+4gc7ffyD4wDPQ+bDf6DQu1L6BwYfDfsKSY+Dwbw7faOZkzg0fgWY+fKZ9xuoNBfEz1jjNBoOFD+1e9ipyMdj48m7ILfANNj7EnO2cvqFgbefYngp9g5UPndOEgGew82fdTcGIY7Dz+ycJ9m3N1mDnA3LcsiYbCPw1svO7ComGwnFrmTANkBc0fuK8vZ8XBD7MdQcIMcFA4BvO027hBHFnOsS5fWM+aZScx+cw0+EQfDT//0eNQqzWrvw19aZC7NSJiHFmndzz+QHvfgK3E2nGPtXnKKI7p3sJVEXqO19DuQrs+GUmhkQSG99cl/4J7tAk8T26eRvO4hPe0Mn8h2B5vP4zCR78jAj/BxvHMSB40+znAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAxLTI2VDEzOjA0OjUyKzAwOjAwvapJxgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMS0yNlQxMzowNDo1MiswMDowMMz38XoAAAAASUVORK5CYII="
    },
    262: function(e, t, n) {
        e.exports = n(456)
    },
    313: function(e, t) {},
    327: function(e, t) {},
    329: function(e, t) {},
    340: function(e, t) {},
    456: function(e, t, n) {
        "use strict";
        n.r(t);
        var a, r, o, i, l = n(0), c = n.n(l), u = n(1), s = n(38), d = n(6), m = n.n(d), p = n(23), f = n(8), b = n(2), y = n(100), h = n(129), v = n(110), g = n(111), E = n(11), w = (a = {},
        Object(E.a)(a, b.a.MAINNET, "https://bsc-dataseed1.defibit.io"),
        Object(E.a)(a, b.a.TESTNET, "https://data-seed-prebsc-1-s1.binance.org:8545"),
        a), k = (r = {},
        Object(E.a)(r, b.a.MAINNET, "https://bscscan.com"),
        Object(E.a)(r, b.a.TESTNET, "https://testnet.bscscan.com"),
        r), C = function() {
            var e = Object(p.a)(m.a.mark((function e(t) {
                var n;
                return m.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!(n = window.ethereum) || !n.request) {
                                e.next = 14;
                                break
                            }
                            return e.prev = 2,
                            e.next = 5,
                            n.request({
                                method: "wallet_addEthereumChain",
                                params: [{
                                    chainId: "0x".concat(t.toString(16)),
                                    chainName: "Binance Smart Chain Mainnet",
                                    nativeCurrency: {
                                        name: "BNB",
                                        symbol: "bnb",
                                        decimals: 18
                                    },
                                    rpcUrls: [w[t]],
                                    blockExplorerUrls: ["".concat(k[t], "/")]
                                }]
                            });
                        case 5:
                            return e.abrupt("return", !0);
                        case 8:
                            return e.prev = 8,
                            e.t0 = e.catch(2),
                            console.error("Failed to setup the network in Metamask:", e.t0),
                            e.abrupt("return", !1);
                        case 12:
                            e.next = 16;
                            break;
                        case 14:
                            return console.error("Can't setup the BSC network on metamask because window.ethereum is undefined"),
                            e.abrupt("return", !1);
                        case 16:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[2, 8]])
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), O = n(24), T = n(225), x = Object(l.createContext)({
            toasts: [],
            clear: function() {
                return null
            },
            remove: function() {
                return null
            },
            toastError: function() {
                return null
            },
            toastInfo: function() {
                return null
            },
            toastSuccess: function() {
                return null
            },
            toastWarning: function() {
                return null
            }
        }), j = function(e) {
            var t = e.children
              , n = Object(l.useState)([])
              , a = Object(f.a)(n, 2)
              , r = a[0]
              , o = a[1]
              , i = Object(l.useCallback)((function(e) {
                var t = e.title
                  , n = e.description
                  , a = e.type;
                o((function(e) {
                    var r = Object(T.kebabCase)(t)
                      , o = e.filter((function(e) {
                        return e.id !== r
                    }
                    ));
                    return [{
                        id: r,
                        title: t,
                        description: n,
                        type: a
                    }].concat(Object(O.a)(o))
                }
                ))
            }
            ), [o])
              , s = function(e) {
                o((function(t) {
                    return t.filter((function(t) {
                        return t.id !== e
                    }
                    ))
                }
                ))
            };
            return c.a.createElement(x.Provider, {
                value: {
                    toasts: r,
                    clear: function() {
                        return o([])
                    },
                    remove: s,
                    toastError: function(e, t) {
                        return i({
                            title: e,
                            description: t,
                            type: u.eb.DANGER
                        })
                    },
                    toastInfo: function(e, t) {
                        return i({
                            title: e,
                            description: t,
                            type: u.eb.INFO
                        })
                    },
                    toastSuccess: function(e, t) {
                        return i({
                            title: e,
                            description: t,
                            type: u.eb.SUCCESS
                        })
                    },
                    toastWarning: function(e, t) {
                        return i({
                            title: e,
                            description: t,
                            type: u.eb.WARNING
                        })
                    }
                }
            }, t, c.a.createElement(u.Y, {
                toasts: r,
                onRemove: s
            }))
        }, I = function() {
            var e = Object(l.useContext)(x);
            if (void 0 === e)
                throw new Error("Toasts context undefined");
            return e
        }, A = n(91), N = n(12), S = n(112), P = n(10), R = n(14), B = n(15), U = n(115), L = n(90), M = n(16), Y = function(e) {
            Object(R.a)(n, e);
            var t = Object(B.a)(n);
            function n(e, a, r) {
                var o;
                return Object(P.a)(this, n),
                (o = t.call(this, e)).code = a,
                o.data = r,
                o
            }
            return n
        }(Object(U.a)(Error)), F = function e(t, n, a) {
            var r = this;
            Object(P.a)(this, e),
            this.isMetaMask = !1,
            this.chainId = void 0,
            this.url = void 0,
            this.host = void 0,
            this.path = void 0,
            this.batchWaitTimeMs = void 0,
            this.nextId = 1,
            this.batchTimeoutId = null,
            this.batch = [],
            this.clearBatch = Object(p.a)(m.a.mark((function e() {
                var t, n, a, o, i, l, c, u, s, d, p, f, b, y;
                return m.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return console.debug("Clearing batch", r.batch),
                            t = r.batch,
                            r.batch = [],
                            r.batchTimeoutId = null,
                            e.prev = 4,
                            e.next = 7,
                            fetch(r.url, {
                                method: "POST",
                                headers: {
                                    "content-type": "application/json",
                                    accept: "application/json"
                                },
                                body: JSON.stringify(t.map((function(e) {
                                    return e.request
                                }
                                )))
                            });
                        case 7:
                            n = e.sent,
                            e.next = 14;
                            break;
                        case 10:
                            return e.prev = 10,
                            e.t0 = e.catch(4),
                            t.forEach((function(e) {
                                return (0,
                                e.reject)(new Error("Failed to send batch call"))
                            }
                            )),
                            e.abrupt("return");
                        case 14:
                            if (n.ok) {
                                e.next = 17;
                                break
                            }
                            return t.forEach((function(e) {
                                return (0,
                                e.reject)(new Y("".concat(n.status, ": ").concat(n.statusText),-32e3))
                            }
                            )),
                            e.abrupt("return");
                        case 17:
                            return e.prev = 17,
                            e.next = 20,
                            n.json();
                        case 20:
                            a = e.sent,
                            e.next = 27;
                            break;
                        case 23:
                            return e.prev = 23,
                            e.t1 = e.catch(17),
                            t.forEach((function(e) {
                                return (0,
                                e.reject)(new Error("Failed to parse JSON response"))
                            }
                            )),
                            e.abrupt("return");
                        case 27:
                            o = t.reduce((function(e, t) {
                                return e[t.request.id] = t,
                                e
                            }
                            ), {}),
                            i = Object(S.a)(a);
                            try {
                                for (i.s(); !(l = i.n()).done; )
                                    c = l.value,
                                    u = o[c.id],
                                    s = u.resolve,
                                    d = u.reject,
                                    p = u.request.method,
                                    s && d && ("error"in c ? d(new Y(null === c || void 0 === c || null === (f = c.error) || void 0 === f ? void 0 : f.message,null === c || void 0 === c || null === (b = c.error) || void 0 === b ? void 0 : b.code,null === c || void 0 === c || null === (y = c.error) || void 0 === y ? void 0 : y.data)) : "result"in c ? s(c.result) : d(new Y("Received unexpected JSON-RPC response to ".concat(p, " request."),-32e3,c)))
                            } catch (m) {
                                i.e(m)
                            } finally {
                                i.f()
                            }
                        case 30:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[4, 10], [17, 23]])
            }
            ))),
            this.sendAsync = function(e, t) {
                r.request(e.method, e.params).then((function(n) {
                    return t(null, {
                        jsonrpc: "2.0",
                        id: e.id,
                        result: n
                    })
                }
                )).catch((function(e) {
                    return t(e, null)
                }
                ))
            }
            ,
            this.request = function() {
                var e = Object(p.a)(m.a.mark((function e(t, n) {
                    var a, o;
                    return m.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if ("string" === typeof t) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", r.request(t.method, t.params));
                            case 2:
                                if ("eth_chainId" !== t) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return", "0x".concat(r.chainId.toString(16)));
                            case 4:
                                return o = new Promise((function(e, a) {
                                    r.batch.push({
                                        request: {
                                            jsonrpc: "2.0",
                                            id: r.nextId++,
                                            method: t,
                                            params: n
                                        },
                                        resolve: e,
                                        reject: a
                                    })
                                }
                                )),
                                r.batchTimeoutId = null !== (a = r.batchTimeoutId) && void 0 !== a ? a : setTimeout(r.clearBatch, r.batchWaitTimeMs),
                                e.abrupt("return", o);
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }(),
            this.chainId = t,
            this.url = n;
            var o = new URL(n);
            this.host = o.host,
            this.path = o.pathname,
            this.batchWaitTimeMs = null !== a && void 0 !== a ? a : 50
        }, D = new (function(e) {
            Object(R.a)(n, e);
            var t = Object(B.a)(n);
            function n(e) {
                var a, r = e.urls, o = e.defaultChainId;
                return Object(P.a)(this, n),
                Object(M.a)(o || 1 === Object.keys(r).length, "defaultChainId is a required argument with >1 url"),
                (a = t.call(this, {
                    supportedChainIds: Object.keys(r).map((function(e) {
                        return Number(e)
                    }
                    ))
                })).providers = void 0,
                a.currentChainId = void 0,
                a.currentChainId = o || Number(Object.keys(r)[0]),
                a.providers = Object.keys(r).reduce((function(e, t) {
                    return e[Number(t)] = new F(Number(t),r[Number(t)]),
                    e
                }
                ), {}),
                a
            }
            return Object(N.a)(n, [{
                key: "activate",
                value: function() {
                    var e = Object(p.a)(m.a.mark((function e() {
                        return m.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", {
                                        provider: this.providers[this.currentChainId],
                                        chainId: this.currentChainId,
                                        account: null
                                    });
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getProvider",
                value: function() {
                    var e = Object(p.a)(m.a.mark((function e() {
                        return m.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.providers[this.currentChainId]);
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getChainId",
                value: function() {
                    var e = Object(p.a)(m.a.mark((function e() {
                        return m.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.currentChainId);
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getAccount",
                value: function() {
                    var e = Object(p.a)(m.a.mark((function e() {
                        return m.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", null);
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "deactivate",
                value: function() {}
            }, {
                key: "provider",
                get: function() {
                    return this.providers[this.currentChainId]
                }
            }]),
            n
        }(L.AbstractConnector))({
            urls: w,
            defaultChainId: b.a.MAINNET
        });
        var z, K, _, X, q, W = new v.a({
            supportedChainIds: [b.a.MAINNET, b.a.TESTNET]
        }), V = new h.BscConnector({
            supportedChainIds: [b.a.MAINNET]
        }), H = new g.b({
            rpc: Object(E.a)({}, b.a.MAINNET, w[b.a.MAINNET]),
            bridge: "https://pancakeswap.bridge.walletconnect.org",
            qrcode: !0,
            pollingInterval: 15e3
        }), G = (o = {},
        Object(E.a)(o, u.u.Injected, W),
        Object(E.a)(o, u.u.WalletConnect, H),
        Object(E.a)(o, u.u.BSC, V),
        o), Q = (z = {},
        Object(E.a)(z, b.a.MAINNET, new b.j(b.a.MAINNET,"0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",18,"CAKE","PancakeSwap Token")),
        Object(E.a)(z, b.a.TESTNET, new b.j(b.a.TESTNET,"0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe",18,"CAKE","PancakeSwap Token")),
        z), J = (K = {},
        Object(E.a)(K, b.a.MAINNET, new b.j(b.a.MAINNET,"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",18,"BUSD","Binance USD")),
        Object(E.a)(K, b.a.TESTNET, new b.j(b.a.TESTNET,"0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",18,"BUSD","Binance USD")),
        K), Z = new b.j(b.a.MAINNET,"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",18,"WBNB","Wrapped BNB"), $ = new b.j(b.a.MAINNET,"0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",18,"DAI","Dai Stablecoin"), ee = new b.j(b.a.MAINNET,"0x55d398326f99059fF775485246999027B3197955",18,"USDT","Tether USD"), te = new b.j(b.a.MAINNET,"0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",18,"BTCB","Binance BTC"), ne = new b.j(b.a.MAINNET,"0x23396cf899ca06c4472205fc903bdb4de249d6fc",18,"UST","Wrapped UST Token"), ae = new b.j(b.a.MAINNET,"0x2170ed0880ac9a755fd29b2688956bd959f933f8",18,"ETH","Binance-Peg Ethereum Token"), re = "0x10ED43C718714eb63d5aA57B78B54704E256024E", oe = (_ = {},
        Object(E.a)(_, b.a.MAINNET, [b.n[b.a.MAINNET], Q[b.a.MAINNET], J[b.a.MAINNET], $, ee, te, ne, ae]),
        Object(E.a)(_, b.a.TESTNET, [b.n[b.a.TESTNET], Q[b.a.TESTNET], J[b.a.TESTNET]]),
        _), ie = Object(E.a)({}, b.a.MAINNET, {}), le = Object(E.a)({}, b.a.MAINNET, {}), ce = (X = {},
        Object(E.a)(X, b.a.MAINNET, [J[b.a.MAINNET], Q[b.a.MAINNET], te]),
        Object(E.a)(X, b.a.TESTNET, [b.n[b.a.TESTNET], Q[b.a.TESTNET], J[b.a.TESTNET]]),
        X), ue = (q = {},
        Object(E.a)(q, b.a.MAINNET, [b.n[b.a.MAINNET], $, J[b.a.MAINNET], ee]),
        Object(E.a)(q, b.a.TESTNET, [b.n[b.a.TESTNET], Q[b.a.TESTNET], J[b.a.TESTNET]]),
        q), se = Object(E.a)({}, b.a.MAINNET, [[Q[b.a.MAINNET], Z], [J[b.a.MAINNET], ee], [$, ee]]), de = b.e.BigInt(0), me = new b.g(b.e.BigInt(1),b.e.BigInt(1e4)), pe = b.e.BigInt(1e4), fe = new b.g(b.e.BigInt(100),pe), be = new b.g(b.e.BigInt(300),pe), ye = new b.g(b.e.BigInt(500),pe), he = new b.g(b.e.BigInt(1e3),pe), ve = new b.g(b.e.BigInt(1500),pe), ge = b.e.exponentiate(b.e.BigInt(10), b.e.BigInt(16)), Ee = new b.g(b.e.BigInt(50),b.e.BigInt(1e4)), we = new b.g("0"), ke = new b.g("1"), Ce = ["0x7F367cC41522cE07553e823bf3be79A889DEbe1B", "0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b", "0x901bb9583b24D97e995513C6778dc6888AB6870e", "0xA7e5d5A720f06526557c513402f2e6B5fA20b008", "0x8576aCC5C05D6Ce88f4e49bf65BdF0C62F91353C"];
        function Oe() {
            var e = Object(s.d)()
              , t = Object(s.d)("NETWORK");
            return e.active ? e : t
        }
        var Te = function() {
            var e = Object(s.d)()
              , t = e.activate
              , n = e.deactivate
              , a = e.chainId
              , r = I().toastError;
            return {
                login: Object(l.useCallback)((function(e) {
                    var n = G[e];
                    n ? t(n, function() {
                        var e = Object(p.a)(m.a.mark((function e(o) {
                            return m.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (window.localStorage.removeItem(u.bb),
                                        !(o instanceof s.a)) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 4,
                                        C(a || b.a.MAINNET);
                                    case 4:
                                        e.sent && t(n),
                                        e.next = 9;
                                        break;
                                    case 8:
                                        o instanceof v.b || o instanceof h.NoBscProviderError ? r("Provider Error", "No provider was found") : o instanceof v.c || o instanceof g.a ? (n instanceof g.b && (n.walletConnectProvider = null),
                                        r("Authorization Error", "Please authorize to access your account")) : r(o.name, o.message);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()) : r("Can't find connector", "The connector config is wrong")
                }
                ), []),
                logout: n
            }
        }
          , xe = (n(362),
        n(56))
          , je = n.n(xe)
          , Ie = n(20)
          , Ae = n(29)
          , Ne = n(165)
          , Se = n(82)
          , Pe = n(230)
          , Re = n.n(Pe)
          , Be = n(231)
          , Ue = n.n(Be);
        Ne.a.use(Re.a).use(Ue.a).use(Se.a).init({
            backend: {
                loadPath: "./locales/{{lng}}.json"
            },
            react: {
                useSuspense: !0
            },
            fallbackLng: "en",
            preload: ["en"],
            keySeparator: !1,
            interpolation: {
                escapeValue: !1
            }
        });
        Ne.a;
        var Le = n(32)
          , Me = n(130)
          , Ye = n(64);
        function Fe() {
            var e = Oe().chainId;
            return Object(Ie.d)((function(t) {
                return t.application.blockNumber[null !== e && void 0 !== e ? e : -1]
            }
            ))
        }
        var De = n(19)
          , ze = /^0x[a-fA-F0-9]{40}$/
          , Ke = /^0x[a-f0-9]*$/;
        function _e(e) {
            if (!ze.test(e.address))
                throw new Error("Invalid address: ".concat(e.address));
            if (!Ke.test(e.callData))
                throw new Error("Invalid hex: ".concat(e.callData));
            return "".concat(e.address, "-").concat(e.callData)
        }
        function Xe(e) {
            var t = e.split("-");
            if (2 !== t.length)
                throw new Error("Invalid call key: ".concat(e));
            return {
                address: t[0],
                callData: t[1]
            }
        }
        var qe = Object(De.b)("multicall/addMulticallListeners")
          , We = Object(De.b)("multicall/removeMulticallListeners")
          , Ve = Object(De.b)("multicall/fetchingMulticallResults")
          , He = Object(De.b)("multicall/errorFetchingMulticallResults")
          , Ge = Object(De.b)("multicall/updateMulticallResults");
        function Qe(e) {
            return -1 !== ["string", "number"].indexOf(typeof e)
        }
        function Je(e) {
            return void 0 === e || Array.isArray(e) && e.every((function(e) {
                return Qe(e) || Array.isArray(e) && e.every(Qe)
            }
            ))
        }
        var Ze = {
            valid: !1,
            blockNumber: void 0,
            data: void 0
        }
          , $e = {
            blocksPerFetch: 1 / 0
        };
        function et(e, t) {
            var n = Oe().chainId
              , a = Object(Ie.d)((function(e) {
                return e.multicall.callResults
            }
            ))
              , r = Object(Ie.c)()
              , o = Object(l.useMemo)((function() {
                var t, n, a;
                return JSON.stringify(null !== (t = null === e || void 0 === e || null === (n = e.filter((function(e) {
                    return Boolean(e)
                }
                ))) || void 0 === n || null === (a = n.map(_e)) || void 0 === a ? void 0 : a.sort()) && void 0 !== t ? t : [])
            }
            ), [e]);
            return Object(l.useEffect)((function() {
                var e = JSON.parse(o);
                if (n && 0 !== e.length) {
                    var a = e.map((function(e) {
                        return Xe(e)
                    }
                    ));
                    return r(qe({
                        chainId: n,
                        calls: a,
                        options: t
                    })),
                    function() {
                        r(We({
                            chainId: n,
                            calls: a,
                            options: t
                        }))
                    }
                }
            }
            ), [n, r, t, o]),
            Object(l.useMemo)((function() {
                return e.map((function(e) {
                    var t;
                    if (!n || !e)
                        return Ze;
                    var r, o = null === (t = a[n]) || void 0 === t ? void 0 : t[_e(e)];
                    return (null === o || void 0 === o ? void 0 : o.data) && "0x" !== (null === o || void 0 === o ? void 0 : o.data) && (r = o.data),
                    {
                        valid: !0,
                        data: r,
                        blockNumber: null === o || void 0 === o ? void 0 : o.blockNumber
                    }
                }
                ))
            }
            ), [a, e, n])
        }
        var tt = {
            valid: !1,
            result: void 0,
            loading: !1,
            syncing: !1,
            error: !1
        }
          , nt = {
            valid: !0,
            result: void 0,
            loading: !0,
            syncing: !0,
            error: !1
        };
        function at(e, t, n, a) {
            if (!e)
                return tt;
            var r = e.valid
              , o = e.data
              , i = e.blockNumber;
            if (!r)
                return tt;
            if (r && !i)
                return nt;
            if (!t || !n || !a)
                return nt;
            var l = o && o.length > 2
              , c = (null !== i && void 0 !== i ? i : 0) < a
              , u = void 0;
            if (l && o)
                try {
                    u = t.decodeFunctionResult(n, o)
                } catch (s) {
                    return console.debug("Result data parsing failed", n, o),
                    {
                        valid: !0,
                        loading: !1,
                        error: !0,
                        syncing: c,
                        result: u
                    }
                }
            return {
                valid: !0,
                loading: !1,
                syncing: c,
                result: u,
                error: !l
            }
        }
        function rt(e, t, n, a, r) {
            var o = Object(l.useMemo)((function() {
                return t.getFunction(n)
            }
            ), [t, n])
              , i = Object(l.useMemo)((function() {
                return o && Je(a) ? t.encodeFunctionData(o, a) : void 0
            }
            ), [a, t, o])
              , c = et(Object(l.useMemo)((function() {
                return o && e && e.length > 0 && i ? e.map((function(e) {
                    return e && i ? {
                        address: e,
                        callData: i
                    } : void 0
                }
                )) : []
            }
            ), [e, i, o]), r)
              , u = Fe();
            return Object(l.useMemo)((function() {
                return c.map((function(e) {
                    return at(e, t, o, u)
                }
                ))
            }
            ), [o, c, t, u])
        }
        function ot(e, t, n, a) {
            var r = Object(l.useMemo)((function() {
                var n;
                return null === e || void 0 === e || null === (n = e.interface) || void 0 === n ? void 0 : n.getFunction(t)
            }
            ), [e, t])
              , o = et(Object(l.useMemo)((function() {
                return e && r && Je(n) ? [{
                    address: e.address,
                    callData: e.interface.encodeFunctionData(r, n)
                }] : []
            }
            ), [e, r, n]), a)[0]
              , i = Fe();
            return Object(l.useMemo)((function() {
                return at(o, null === e || void 0 === e ? void 0 : e.interface, r, i)
            }
            ), [o, e, r, i])
        }
        function it(e, t) {
            return t && e === b.d ? b.n[t] : e instanceof b.j ? e : void 0
        }
        function lt(e, t) {
            var n = e && t ? it(e.currency, t) : void 0;
            return n && e ? new b.k(n,e.raw) : void 0
        }
        function ct(e) {
            return e.equals(b.n[e.chainId]) ? b.d : e
        }
        var ut, st = new Ye.Interface(Me.a);
        function dt(e) {
            var t = Oe().chainId
              , n = Object(l.useMemo)((function() {
                return e.map((function(e) {
                    var n = Object(f.a)(e, 2)
                      , a = n[0]
                      , r = n[1];
                    return [it(a, t), it(r, t)]
                }
                ))
            }
            ), [t, e])
              , a = rt(Object(l.useMemo)((function() {
                return n.map((function(e) {
                    var t = Object(f.a)(e, 2)
                      , n = t[0]
                      , a = t[1];
                    return n && a && !n.equals(a) ? b.f.getAddress(n, a) : void 0
                }
                ))
            }
            ), [n]), st, "getReserves");
            return Object(l.useMemo)((function() {
                return a.map((function(e, t) {
                    var a = e.result
                      , r = e.loading
                      , o = n[t][0]
                      , i = n[t][1];
                    if (r)
                        return [ut.LOADING, null];
                    if (!o || !i || o.equals(i))
                        return [ut.INVALID, null];
                    if (!a)
                        return [ut.NOT_EXISTS, null];
                    var l = a.reserve0
                      , c = a.reserve1
                      , u = o.sortsBefore(i) ? [o, i] : [i, o]
                      , s = Object(f.a)(u, 2)
                      , d = s[0]
                      , m = s[1];
                    return [ut.EXISTS, new b.f(new b.k(d,l.toString()),new b.k(m,c.toString()))]
                }
                ))
            }
            ), [a, n])
        }
        function mt(e, t) {
            return dt([[e, t]])[0]
        }
        !function(e) {
            e[e.LOADING = 0] = "LOADING",
            e[e.NOT_EXISTS = 1] = "NOT_EXISTS",
            e[e.EXISTS = 2] = "EXISTS",
            e[e.INVALID = 3] = "INVALID"
        }(ut || (ut = {}));
        var pt = J[b.a.MAINNET];
        var ft = function() {
            var e = Oe().chainId || b.a.MAINNET;
            return function(e) {
                var t = Oe().chainId
                  , n = it(e, t)
                  , a = dt(Object(l.useMemo)((function() {
                    return [[t && n && Object(b.o)(b.n[t], n) ? void 0 : e, t ? b.n[t] : void 0], [(null === n || void 0 === n ? void 0 : n.equals(pt)) ? void 0 : n, t === b.a.MAINNET ? pt : void 0], [t ? b.n[t] : void 0, t === b.a.MAINNET ? pt : void 0]]
                }
                ), [t, e, n]))
                  , r = Object(f.a)(a, 3)
                  , o = Object(f.a)(r[0], 2)
                  , i = o[0]
                  , c = o[1]
                  , u = Object(f.a)(r[1], 2)
                  , s = u[0]
                  , d = u[1]
                  , m = Object(f.a)(r[2], 2)
                  , p = m[0]
                  , y = m[1];
                return Object(l.useMemo)((function() {
                    if (e && n && t)
                        if (n.equals(b.n[t])) {
                            if (d) {
                                var a = d.priceOf(b.n[t]);
                                return new b.h(e,pt,a.denominator,a.numerator)
                            }
                        } else {
                            if (n.equals(pt))
                                return new b.h(pt,pt,"1","1");
                            var r = null === c || void 0 === c ? void 0 : c.reserveOf(b.n[t])
                              , o = r && y ? y.priceOf(b.n[t]).quote(r).raw : b.e.BigInt(0);
                            if (s === ut.EXISTS && d && d.reserveOf(pt).greaterThan(o)) {
                                var l = d.priceOf(n);
                                return new b.h(e,pt,l.denominator,l.numerator)
                            }
                            if (i === ut.EXISTS && c && p === ut.EXISTS && y && y.reserveOf(pt).greaterThan("0") && c.reserveOf(b.n[t]).greaterThan("0")) {
                                var u = y.priceOf(pt)
                                  , m = c.priceOf(b.n[t])
                                  , f = u.multiply(m).invert();
                                return new b.h(e,pt,f.denominator,f.numerator)
                            }
                        }
                }
                ), [t, e, c, i, y, p, d, s, n])
            }(Q[e])
        }
          , bt = function() {
            var e = ft();
            Object(l.useEffect)((function() {
                var t = e ? e.toFixed(2) : "";
                document.title = "Pancake Swap"
            }
            ), [e])
        }
          , yt = {
            locale: "en-US",
            language: "English",
            code: "en"
        }
          , ht = {
            "ar-SA": {
                locale: "ar-SA",
                language: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
                code: "ar"
            },
            "bn-BD": {
                locale: "bn-BD",
                language: "\u09ac\u09be\u0982\u09b2\u09be",
                code: "bn"
            },
            "en-US": yt,
            "de-DE": {
                locale: "de-DE",
                language: "Deutsch",
                code: "de"
            },
            "el-GR": {
                locale: "el-GR",
                language: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
                code: "el"
            },
            "es-ES": {
                locale: "es-ES",
                language: "Espa\xf1ol",
                code: "es-ES"
            },
            "fi-FI": {
                locale: "fi-FI",
                language: "Suomalainen",
                code: "fi"
            },
            "fil-PH": {
                locale: "fil-PH",
                language: "Filipino",
                code: "fil"
            },
            "fr-FR": {
                locale: "fr-FR",
                language: "Fran\xe7ais",
                code: "fr"
            },
            "hi-IN": {
                locale: "hi-IN",
                language: "\u0939\u093f\u0902\u0926\u0940",
                code: "hi"
            },
            "hu-HU": {
                locale: "hu-HU",
                language: "Magyar",
                code: "hu"
            },
            "id-ID": {
                locale: "id-ID",
                language: "Bahasa Indonesia",
                code: "id"
            },
            "it-IT": {
                locale: "it-IT",
                language: "Italiano",
                code: "it"
            },
            "ja-JP": {
                locale: "ja-JP",
                language: "\u65e5\u672c\u8a9e",
                code: "ja"
            },
            "ko-KR": {
                locale: "ko-KR",
                language: "\ud55c\uad6d\uc5b4",
                code: "ko"
            },
            "nl-NL": {
                locale: "nl-NL",
                language: "Nederlands",
                code: "nl"
            },
            "pl-PL": {
                locale: "pl-PL",
                language: "Polski",
                code: "pl"
            },
            "pt-BR": {
                locale: "pt-BR",
                language: "Portugu\xeas (Brazil)",
                code: "pt-br"
            },
            "pt-PT": {
                locale: "pt-PT",
                language: "Portugu\xeas",
                code: "pt-pt"
            },
            "ro-RO": {
                locale: "ro-RO",
                language: "Rom\xe2n\u0103",
                code: "ro"
            },
            "ru-RU": {
                locale: "ru-RU",
                language: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
                code: "ru"
            },
            "sv-SE": {
                locale: "sv-SE",
                language: "Svenska",
                code: "sv"
            },
            "ta-IN": {
                locale: "ta-IN",
                language: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",
                code: "ta"
            },
            "tr-TR": {
                locale: "tr-TR",
                language: "T\xfcrk\xe7e",
                code: "tr"
            },
            "uk-UA": {
                locale: "uk-UA",
                language: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
                code: "uk"
            },
            "vi-VN": {
                locale: "vi-VN",
                language: "Ti\u1ebfng Vi\u1ec7t",
                code: "vi"
            },
            "zh-CN": {
                locale: "zh-CN",
                language: "\u7b80\u4f53\u4e2d\u6587",
                code: "zh-cn"
            },
            "zh-TW": {
                locale: "zh-TW",
                language: "\u7e41\u9ad4\u4e2d\u6587",
                code: "zh-tw"
            }
        }
          , vt = Object.values(ht)
          , gt = n(3)
          , Et = n(9);
        function wt() {
            var e = Object(Et.a)(["\n  body {\n    min-height: 100vh;\n    background-color: ", ';\n\n    img {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n\n  ul {\n    list-style: none; \n  }\n\n  li {\n    display: flex;\n    align-items: center;\n  }\n\n  li::before {\n    content: "\u2022";\n    color: ', ";\n    margin-right: 8px;\n  }\n"]);
            return wt = function() {
                return e
            }
            ,
            e
        }
        var kt = Object(gt.c)(wt(), (function(e) {
            return e.theme.colors.background
        }
        ), (function(e) {
            return e.theme.colors.primary
        }
        ))
          , Ct = c.a.createContext({
            isDark: !1,
            toggleTheme: function() {
                return null
            }
        })
          , Ot = function(e) {
            var t = e.children
              , n = Object(l.useState)((function() {
                var e = localStorage.getItem("IS_DARK");
                return !!e && JSON.parse(e)
            }
            ))
              , a = Object(f.a)(n, 2)
              , r = a[0]
              , o = a[1];
            return c.a.createElement(Ct.Provider, {
                value: {
                    isDark: r,
                    toggleTheme: function() {
                        o((function(e) {
                            return localStorage.setItem("IS_DARK", JSON.stringify(!e)),
                            !e
                        }
                        ))
                    }
                }
            }, c.a.createElement(gt.b, {
                theme: r ? u.cb : u.db
            }, c.a.createElement(u.T, null), c.a.createElement(kt, null), t))
        }
          , Tt = function() {
            var e = Object(l.useContext)(Ct);
            return {
                isDark: e.isDark,
                toggleTheme: e.toggleTheme,
                theme: Object(l.useContext)(gt.a)
            }
        }
          , xt = [{
            label: "Home",
            icon: "HomeIcon",
            href: "/"
        }, {
            label: "Trade",
            icon: "TradeIcon",
            initialOpenState: !0,
            items: [{
                label: "Exchange",
                href: "/swap"
            }, {
                label: "Liquidity",
                href: "/pool"
            }, {
                label: "LP Migration",
                href: "./claim.php"
            }, {
                label: "V1 Liquidity (Old)",
                href: "./claim.php"
            }]
        }, {
            label: "Farms",
            icon: "FarmIcon",
            href: "#"
        }, {
            label: "Pools",
            icon: "PoolIcon",
            href: "#"
        }, {
            label: "Prediction (BETA)",
            icon: "PredictionsIcon",
            href: "#"
        }, {
            label: "Lottery",
            icon: "TicketIcon",
            href: "#"
        }, {
            label: "NFT",
            icon: "NftIcon",
            href: "#"
        }, {
            label: "Teams & Profile",
            icon: "GroupsIcon",
            calloutClass: "rainbow",
            items: [{
                label: "Leaderboard",
                href: "#"
            }, {
                label: "Task Center",
                href: "#"
            }, {
                label: "Your Profile",
                href: "#"
            }]
        }, {
            label: "Info",
            icon: "InfoIcon",
            href: "#",
            status: {
                text: "NEW",
                color: "success"
            }
        }, {
            label: "IFO",
            icon: "IfoIcon",
            href: "#"
        }, {
            label: "More",
            icon: "MoreIcon",
            items: [{
                label: "Voting",
                href: "#"
            }, {
                label: "Github",
                href: "#"
            }, {
                label: "Docs",
                href: "#"
            }, {
                label: "Blog",
                href: "#"
            }]
        }]
          , jt = n(18)
          , It = n(232)
          , At = "pancakeswap_language"
          , Nt = function() {
            var e = Object(p.a)(m.a.mark((function e(t) {
                var n, a;
                return m.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            fetch("".concat(".", "/locales/").concat(t, ".json"));
                        case 2:
                            return n = e.sent,
                            e.next = 5,
                            n.json();
                        case 5:
                            return a = e.sent,
                            e.abrupt("return", a);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , St = function() {
            try {
                return localStorage.getItem(At) || yt.locale
            } catch (e) {
                return yt.locale
            }
        }
          , Pt = {
            isFetching: !0,
            currentLanguage: yt
        }
          , Rt = new Map;
        Rt.set(yt.locale, It);
        var Bt = Object(l.createContext)(void 0)
          , Ut = function(e) {
            var t = e.children
              , n = Object(l.useState)((function() {
                var e = St();
                return Object(jt.a)(Object(jt.a)({}, Pt), {}, {
                    currentLanguage: ht[e]
                })
            }
            ))
              , a = Object(f.a)(n, 2)
              , r = a[0]
              , o = a[1]
              , i = r.currentLanguage;
            Object(l.useEffect)((function() {
                (function() {
                    var e = Object(p.a)(m.a.mark((function e() {
                        var t, n, a;
                        return m.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if ((t = St()) === yt.locale) {
                                        e.next = 7;
                                        break
                                    }
                                    return n = Rt.get(yt.locale),
                                    e.next = 5,
                                    Nt(t);
                                case 5:
                                    a = e.sent,
                                    Rt.set(t, Object(jt.a)(Object(jt.a)({}, n), a));
                                case 7:
                                    o((function(e) {
                                        return Object(jt.a)(Object(jt.a)({}, e), {}, {
                                            isFetching: !1
                                        })
                                    }
                                    ));
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }
                )()()
            }
            ), [o]);
            var u = function() {
                var e = Object(p.a)(m.a.mark((function e(t) {
                    var n, a;
                    return m.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (Rt.has(t.locale)) {
                                    e.next = 11;
                                    break
                                }
                                return o((function(e) {
                                    return Object(jt.a)(Object(jt.a)({}, e), {}, {
                                        isFetching: !0
                                    })
                                }
                                )),
                                e.next = 4,
                                Nt(t.locale);
                            case 4:
                                n = e.sent,
                                a = Rt.get(yt.locale),
                                Rt.set(t.locale, Object(jt.a)(Object(jt.a)({}, a), n)),
                                localStorage.setItem(At, t.locale),
                                o((function(e) {
                                    return Object(jt.a)(Object(jt.a)({}, e), {}, {
                                        isFetching: !1,
                                        currentLanguage: t
                                    })
                                }
                                )),
                                e.next = 13;
                                break;
                            case 11:
                                localStorage.setItem(At, t.locale),
                                o((function(e) {
                                    return Object(jt.a)(Object(jt.a)({}, e), {}, {
                                        isFetching: !1,
                                        currentLanguage: t
                                    })
                                }
                                ));
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , s = Object(l.useCallback)((function(e, t) {
                var n = Rt.has(i.locale) ? Rt.get(i.locale) : Rt.get(yt.locale)
                  , a = n ? n[e] : e;
                if (a.match(/%\S+?%/gm) && t) {
                    var r = a;
                    return Object.keys(t).forEach((function(e) {
                        var n = new RegExp("%".concat(e, "%"),"g");
                        r = r.replace(n, t[e].toString())
                    }
                    )),
                    r
                }
                return a
            }
            ), [i]);
            return c.a.createElement(Bt.Provider, {
                value: Object(jt.a)(Object(jt.a)({}, r), {}, {
                    setLanguage: u,
                    t: s
                })
            }, t)
        }
          , Lt = function() {
            var e = Object(l.useContext)(Bt);
            if (void 0 === e)
                throw new Error("Language context is undefined");
            return e
        }
          , Mt = function(e) {
            var t = Object(s.d)().account
              , n = Tt()
              , a = n.isDark
              , r = n.toggleTheme
              , o = Te()
              , i = o.login
              , l = o.logout
              , d = ft()
              , m = Lt()
              , p = m.currentLanguage
              , f = m.setLanguage;
            return c.a.createElement(u.G, Object.assign({
                links: xt,
                account: t,
                login: i,
                logout: l,
                isDark: a,
                toggleTheme: r,
                currentLang: p.code,
                langs: vt,
                setLang: f,
                cakePriceUsd: d ? parseFloat(d.toFixed(2)) : void 0
            }, e))
        };
        function Yt() {
            var e = Object(Et.a)(["\n  margin-bottom: 40px;\n"]);
            return Yt = function() {
                return e
            }
            ,
            e
        }
        var Ft = gt.e.nav(Yt())
          , Dt = function() {
            var e, t = Object(Le.g)();
            return c.a.createElement(Ft, null, c.a.createElement(u.h, {
                activeIndex: (e = t.pathname,
                e.includes("/pool") || e.includes("/create") || e.includes("/add") || e.includes("/remove") || e.includes("/find") ? 1 : 0),
                scale: "sm",
                variant: "subtle"
            }, c.a.createElement(u.i, {
                id: "swap-nav-link",
                to: "/swap",
                as: Ae.b
            }, "Swap"), c.a.createElement(u.i, {
                id: "pool-nav-link",
                to: "/pool",
                as: Ae.b
            }, "Liquidity")))
        };
        function zt() {
            var e = Object(Et.a)(["\n  svg {\n    fill: ", ";\n    transition: background-color 0.2s, opacity 0.2s;\n  }\n  &:hover {\n    svg {\n      opacity: 0.65;\n    }\n  }\n  &:active {\n    svg {\n      opacity: 0.85;\n    }\n  }\n"]);
            return zt = function() {
                return e
            }
            ,
            e
        }
        function Kt() {
            var e = Object(Et.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-top: 16px;\n\n  ", " {\n    justify-content: space-between;\n    flex-direction: row;\n  }\n"]);
            return Kt = function() {
                return e
            }
            ,
            e
        }
        var _t = gt.e.div(Kt(), (function(e) {
            return e.theme.mediaQueries.md
        }
        ))
          , Xt = Object(gt.e)(u.w)(zt(), (function(e) {
            return e.theme.colors.textSubtle
        }
        ))
          , qt = function() {
            return c.a.createElement(_t, null, c.a.createElement(u.w, {
                flexDirection: ["column", "column", "row"],
                alignItems: "center"
            }, c.a.createElement(u.h, {
                variant: "subtle",
                scale: "sm",
                activeIndex: 0
            }, c.a.createElement(u.i, {
                as: "a",
                href: "/"
            }, "V2"), c.a.createElement(u.i, {
                as: "a",
                href: "#"
            }, "V1 (old)")), c.a.createElement(u.F, {
                href: "#",
                ml: [0, 0, "40px"],
                mt: ["20px", "20px", 0],
                mb: ["8px", "8px", 0]
            }, "Convert ERC-20 to BEP-20")), c.a.createElement(u.w, {
                flexGrow: 1,
                alignItems: "center",
                width: ["100%", "100%", "100%", "auto"],
                justifyContent: ["center", "center", "center", "flex-end"]
            }, c.a.createElement(Xt, null, c.a.createElement(u.g, {
                id: "clickExchangeHelp",
                as: u.E,
                external: !0,
                href: "#",
                variant: "subtle"
            }, "Need help ?"), c.a.createElement(u.V, {
                viewBox: "0 0 16 16"
            }, c.a.createElement("path", {
                d: "M0 16V0C0 0 3 1 6 1C9 1 16 -2 16 3.5C16 10.5 7.5 16 0 16Z"
            }))), c.a.createElement(u.C, {
                src: "./images/help.svg",
                alt: "Get some help",
                width: 160,
                height: 108
            })))
        }
          , Wt = n(37);
        function Vt() {
            var e = Object(Et.a)(["\n  animation: 2s ", " linear infinite;\n  height: ", ";\n  width: ", ";\n  path {\n    stroke: ", ";\n  }\n"]);
            return Vt = function() {
                return e
            }
            ,
            e
        }
        function Ht() {
            var e = Object(Et.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);
            return Ht = function() {
                return e
            }
            ,
            e
        }
        var Gt = Object(gt.f)(Ht())
          , Qt = gt.e.svg(Vt(), Gt, (function(e) {
            return e.size
        }
        ), (function(e) {
            return e.size
        }
        ), (function(e) {
            var t = e.stroke
              , n = e.theme;
            return null !== t && void 0 !== t ? t : n.colors.primary
        }
        ));
        function Jt(e) {
            var t = e.size
              , n = void 0 === t ? "16px" : t
              , a = e.stroke
              , r = Object(Wt.a)(e, ["size", "stroke"]);
            return c.a.createElement(Qt, Object.assign({
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                size: n,
                stroke: a
            }, r), c.a.createElement("path", {
                d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
                strokeWidth: "2.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }))
        }
        function Zt() {
            var e = Object(Et.a)(["\n  color: ", ";\n"]);
            return Zt = function() {
                return e
            }
            ,
            e
        }
        function $t() {
            var e = Object(Et.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 20rem;\n"]);
            return $t = function() {
                return e
            }
            ,
            e
        }
        var en = gt.e.div($t())
          , tn = gt.e.h2(Zt(), (function(e) {
            return e.theme.colors.secondary
        }
        ));
        function nn(e) {
            var t = e.children
              , n = Object(Se.b)().t
              , a = Object(s.d)().active
              , r = Object(s.d)("NETWORK")
              , o = r.active
              , i = r.error
              , u = r.activate
              , d = function() {
                var e = Object(s.d)()
                  , t = e.activate
                  , n = e.active
                  , a = Object(l.useState)(!1)
                  , r = Object(f.a)(a, 2)
                  , o = r[0]
                  , i = r[1];
                return Object(l.useEffect)((function() {
                    W.isAuthorized().then((function(e) {
                        e || y.isMobile && window.ethereum ? t(W, void 0, !0).catch((function() {
                            i(!0)
                        }
                        )) : i(!0)
                    }
                    ))
                }
                ), [t]),
                Object(l.useEffect)((function() {
                    n && i(!0)
                }
                ), [n]),
                o
            }();
            Object(l.useEffect)((function() {
                !d || o || i || a || u(D)
            }
            ), [d, o, i, u, a]),
            function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = Object(s.d)()
                  , n = t.active
                  , a = t.error
                  , r = t.activate;
                Object(l.useEffect)((function() {
                    var t = window.ethereum;
                    if (t && t.on && !n && !a && !e) {
                        var o = function() {
                            r(W, void 0, !0).catch((function(e) {
                                console.error("Failed to activate after chain changed", e)
                            }
                            ))
                        }
                          , i = function(e) {
                            e.length > 0 && r(W, void 0, !0).catch((function(e) {
                                console.error("Failed to activate after accounts changed", e)
                            }
                            ))
                        };
                        return t.on("chainChanged", o),
                        t.on("accountsChanged", i),
                        function() {
                            t.removeListener && (t.removeListener("chainChanged", o),
                            t.removeListener("accountsChanged", i))
                        }
                    }
                }
                ), [n, a, e, r])
            }(!d);
            var m = Object(l.useState)(!1)
              , p = Object(f.a)(m, 2)
              , b = p[0]
              , h = p[1];
            return Object(l.useEffect)((function() {
                var e = setTimeout((function() {
                    h(!0)
                }
                ), 600);
                return function() {
                    clearTimeout(e)
                }
            }
            ), []),
            d ? !a && i ? c.a.createElement(en, null, c.a.createElement(tn, null, n("unknownError"))) : a || o ? t : b ? c.a.createElement(en, null, c.a.createElement(Jt, null)) : null : null
        }
        var an = n(131)
          , rn = Object(De.b)("user/updateMatchesDarkMode")
          , on = Object(De.b)("user/updateUserDarkMode")
          , ln = Object(De.b)("user/updateUserExpertMode")
          , cn = Object(De.b)("user/updateUserSingleHopOnly")
          , un = Object(De.b)("user/updateUserSlippageTolerance")
          , sn = Object(De.b)("user/updateUserDeadline")
          , dn = Object(De.b)("user/addSerializedToken")
          , mn = Object(De.b)("user/removeSerializedToken")
          , pn = Object(De.b)("user/addSerializedPair")
          , fn = Object(De.b)("user/removeSerializedPair")
          , bn = Object(De.b)("app/toggleURLWarning")
          , yn = Object(De.b)("user/muteAudio")
          , hn = Object(De.b)("user/unmuteAudio");
        function vn(e) {
            var t = e.location.search
              , n = Object(Ie.c)();
            return Object(l.useEffect)((function() {
                if (t && !(t.length < 2)) {
                    var e = Object(an.parse)(t, {
                        parseArrays: !1,
                        ignoreQueryPrefix: !0
                    }).theme;
                    "string" === typeof e && ("light" === e.toLowerCase() ? n(on({
                        userDarkMode: !1
                    })) : "dark" === e.toLowerCase() && n(on({
                        userDarkMode: !0
                    })))
                }
            }
            ), [n, t]),
            null
        }
        var gn = n(21);
        function En() {
            var e = Object(Et.a)(["\n  border: 1px solid ", ";\n"]);
            return En = function() {
                return e
            }
            ,
            e
        }
        function wn() {
            var e = Object(Et.a)(["\n  background-color: ", ";\n"]);
            return wn = function() {
                return e
            }
            ,
            e
        }
        function kn() {
            var e = Object(Et.a)(["\n  border: 1px solid ", ";\n  background-color: ", ";\n"]);
            return kn = function() {
                return e
            }
            ,
            e
        }
        function Cn() {
            var e = Object(Et.a)(["\n  border: 1px solid ", ";\n  background-color: ", ";\n"]);
            return Cn = function() {
                return e
            }
            ,
            e
        }
        function On() {
            var e = Object(Et.a)(["\n  width: ", ";\n  border-radius: 16px;\n  padding: 1.25rem;\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n"]);
            return On = function() {
                return e
            }
            ,
            e
        }
        var Tn = Object(gt.e)(u.f)(On(), (function(e) {
            var t = e.width;
            return null !== t && void 0 !== t ? t : "100%"
        }
        ), (function(e) {
            return e.padding
        }
        ), (function(e) {
            return e.border
        }
        ), (function(e) {
            return e.borderRadius
        }
        ), (function(e) {
            return e.theme.colors.background
        }
        ))
          , xn = Tn
          , jn = Object(gt.e)(Tn)(Cn(), (function(e) {
            return e.theme.colors.background
        }
        ), (function(e) {
            return e.theme.colors.backgroundAlt
        }
        ))
          , In = Object(gt.e)(Tn)(kn(), (function(e) {
            return e.theme.colors.cardBorder
        }
        ), (function(e) {
            return e.theme.colors.background
        }
        ))
          , An = Object(gt.e)(Tn)(wn(), (function(e) {
            return e.theme.colors.dropdown
        }
        ))
          , Nn = Object(gt.e)(Tn)(En(), (function(e) {
            return e.theme.colors.dropdown
        }
        ));
        function Sn() {
            var e = Object(Et.a)(["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ", ";\n  justify-items: ", ";\n"]);
            return Sn = function() {
                return e
            }
            ,
            e
        }
        function Pn() {
            var e = Object(Et.a)(["\n  width: 100%;\n  align-items: center;\n"]);
            return Pn = function() {
                return e
            }
            ,
            e
        }
        function Rn() {
            var e = Object(Et.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]);
            return Rn = function() {
                return e
            }
            ,
            e
        }
        var Bn = gt.e.div(Rn())
          , Un = Object(gt.e)(Bn)(Pn())
          , Ln = gt.e.div(Sn(), (function(e) {
            var t = e.gap;
            return ("sm" === t ? "8px" : "md" === t && "12px") || "lg" === t && "24px" || t
        }
        ), (function(e) {
            var t = e.justify;
            return t && t
        }
        ))
          , Mn = Bn
          , Yn = n(116)
          , Fn = n(164)
          , Dn = n(233);
        n(390);
        function zn() {
            var e = Object(Et.a)(["\n        min-height: ", "vh;\n      "]);
            return zn = function() {
                return e
            }
            ,
            e
        }
        function Kn() {
            var e = Object(Et.a)(["\n        max-height: ", "vh;\n      "]);
            return Kn = function() {
                return e
            }
            ,
            e
        }
        function _n() {
            var e = Object(Et.a)(["\n  overflow-y: ", ";\n\n  &[data-reach-dialog-content] {\n    margin: 0 0 2rem 0;\n    background-color: ", ";\n    box-shadow: 0 4px 8px 0 ", ";\n    padding: 0px;\n    width: 90vw;\n    overflow-y: auto;\n    overflow-x: hidden;\n\n    align-self: ", ";\n\n    max-width: 420px;\n    ", "\n    ", "\n    display: flex;\n    border-radius: 32px;\n    ", " {\n      width: 65vw;\n      margin: 0;\n    }\n    ", " {\n      width: 85vw;\n    }\n  }\n"]);
            return _n = function() {
                return e
            }
            ,
            e
        }
        function Xn() {
            var e = Object(Et.a)(["\n  &[data-reach-dialog-overlay] {\n    z-index: 2;\n    background-color: transparent;\n    overflow: hidden;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(69, 42, 122, 0.3);\n  }\n"]);
            return Xn = function() {
                return e
            }
            ,
            e
        }
        var qn = Object(Yn.a)(Fn.b)
          , Wn = Object(gt.e)(qn)(Xn())
          , Vn = Object(Yn.a)(Fn.a)
          , Hn = Object(gt.e)((function(e) {
            e.minHeight,
            e.maxHeight,
            e.mobile,
            e.isOpen;
            var t = Object(Wt.a)(e, ["minHeight", "maxHeight", "mobile", "isOpen"]);
            return c.a.createElement(Vn, t)
        }
        )).attrs({
            "aria-label": "dialog"
        })(_n(), (function(e) {
            return e.mobile ? "scroll" : "hidden"
        }
        ), (function(e) {
            return e.theme.colors.backgroundAlt
        }
        ), (function(e) {
            return e.theme.shadows.level1
        }
        ), (function(e) {
            return e.mobile ? "flex-end" : "center"
        }
        ), (function(e) {
            var t = e.maxHeight;
            return t && Object(gt.d)(Kn(), t)
        }
        ), (function(e) {
            var t = e.minHeight;
            return t && Object(gt.d)(zn(), t)
        }
        ), (function(e) {
            return e.theme.mediaQueries.lg
        }
        ), (function(e) {
            return e.theme.mediaQueries.md
        }
        ));
        function Gn(e) {
            var t = e.isOpen
              , n = e.onDismiss
              , a = e.minHeight
              , r = void 0 !== a && a
              , o = e.maxHeight
              , i = void 0 === o ? 90 : o
              , l = e.initialFocusRef
              , u = e.children
              , s = Object(Yn.c)(t, null, {
                config: {
                    duration: 200
                },
                from: {
                    opacity: 0
                },
                enter: {
                    opacity: 1
                },
                leave: {
                    opacity: 0
                }
            })
              , d = Object(Yn.b)((function() {
                return {
                    y: 0,
                    config: {
                        mass: 1,
                        tension: 210,
                        friction: 20
                    }
                }
            }
            ))
              , m = Object(f.a)(d, 2)
              , p = m[0].y
              , b = m[1]
              , h = Object(Dn.a)({
                onDrag: function(e) {
                    b({
                        y: e.down ? e.movement[1] : 0
                    }),
                    (e.movement[1] > 300 || e.velocity > 3 && e.direction[1] > 0) && n()
                }
            });
            return c.a.createElement(c.a.Fragment, null, s.map((function(e) {
                var t = e.item
                  , a = e.key
                  , o = e.props;
                return t && c.a.createElement(Wn, {
                    key: a,
                    style: o,
                    onDismiss: n,
                    initialFocusRef: l,
                    unstable_lockFocusAcrossFrames: !1
                }, c.a.createElement(Hn, Object.assign({}, y.isMobile ? Object(jt.a)(Object(jt.a)({}, h()), {}, {
                    style: {
                        transform: p.interpolate((function(e) {
                            return "translateY(".concat(e > 0 ? e : 0, "px)")
                        }
                        ))
                    }
                }) : {}, {
                    "aria-label": "dialog content",
                    minHeight: r,
                    maxHeight: i,
                    mobile: y.isMobile
                }), !l && y.isMobile ? c.a.createElement("div", {
                    tabIndex: 1
                }) : null, u))
            }
            )))
        }
        function Qn() {
            var e = Object(Et.a)(["\n  height: ", ";\n  width: ", ";\n"]);
            return Qn = function() {
                return e
            }
            ,
            e
        }
        function Jn() {
            var e = Object(Et.a)(["\n  animation: 2s ", " linear infinite;\n  width: 16px;\n  height: 16px;\n"]);
            return Jn = function() {
                return e
            }
            ,
            e
        }
        function Zn() {
            var e = Object(Et.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);
            return Zn = function() {
                return e
            }
            ,
            e
        }
        var $n = Object(gt.f)(Zn())
          , ea = gt.e.img(Jn(), $n)
          , ta = Object(gt.e)(ea)(Qn(), (function(e) {
            return e.size
        }
        ), (function(e) {
            return e.size
        }
        ));
        function na() {
            var e = Object(Et.a)(["\n  width: fit-content;\n  margin: ", ";\n"]);
            return na = function() {
                return e
            }
            ,
            e
        }
        function aa() {
            var e = Object(Et.a)(["\n  flex-wrap: wrap;\n  margin: ", ";\n  justify-content: ", ";\n\n  & > * {\n    margin: ", " !important;\n  }\n"]);
            return aa = function() {
                return e
            }
            ,
            e
        }
        function ra() {
            var e = Object(Et.a)(["\n  display: flex;\n  align-items: flex-end;\n"]);
            return ra = function() {
                return e
            }
            ,
            e
        }
        function oa() {
            var e = Object(Et.a)(["\n  justify-content: space-between;\n"]);
            return oa = function() {
                return e
            }
            ,
            e
        }
        function ia() {
            var e = Object(Et.a)(["\n  width: ", ";\n  display: flex;\n  padding: 0;\n  align-items: ", ";\n  justify-content: ", ";\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"]);
            return ia = function() {
                return e
            }
            ,
            e
        }
        var la = Object(gt.e)(u.f)(ia(), (function(e) {
            var t = e.width;
            return null !== t && void 0 !== t ? t : "100%"
        }
        ), (function(e) {
            var t = e.align;
            return null !== t && void 0 !== t ? t : "center"
        }
        ), (function(e) {
            var t = e.justify;
            return null !== t && void 0 !== t ? t : "flex-start"
        }
        ), (function(e) {
            return e.padding
        }
        ), (function(e) {
            return e.border
        }
        ), (function(e) {
            return e.borderRadius
        }
        ))
          , ca = Object(gt.e)(la)(oa())
          , ua = gt.e.div(ra())
          , sa = Object(gt.e)(la)(aa(), (function(e) {
            var t = e.gap;
            return t && "-".concat(t)
        }
        ), (function(e) {
            var t = e.justify;
            return t && t
        }
        ), (function(e) {
            return e.gap
        }
        ))
          , da = Object(gt.e)(la)(na(), (function(e) {
            var t = e.gap;
            return t && "-".concat(t)
        }
        ))
          , ma = la
          , pa = n(234)
          , fa = n.n(pa)
          , ba = n(85)
          , ya = n(25)
          , ha = n(44)
          , va = n(235);
        function ga(e) {
            try {
                return Object(ya.getAddress)(e)
            } catch (t) {
                return !1
            }
        }
        function Ea(e, t, n) {
            switch (n) {
            case "transaction":
                return "".concat(k[e], "/tx/").concat(t);
            case "token":
                return "".concat(k[e], "/token/").concat(t);
            case "block":
                return "".concat(k[e], "/block/").concat(t);
            case "address":
            default:
                return "".concat(k[e], "/address/").concat(t)
            }
        }
        function wa(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4
              , n = ga(e);
            if (!n)
                throw Error("Invalid 'address' parameter '".concat(e, "'."));
            return "".concat(n.substring(0, t + 2), "...").concat(n.substring(42 - t))
        }
        function ka(e) {
            return e.mul(gn.a.from(1e4).add(gn.a.from(1e3))).div(gn.a.from(1e4))
        }
        function Ca(e, t) {
            if (t < 0 || t > 1e4)
                throw Error("Unexpected slippage value: ".concat(t));
            return [b.e.divide(b.e.multiply(e.raw, b.e.BigInt(1e4 - t)), b.e.BigInt(1e4)), b.e.divide(b.e.multiply(e.raw, b.e.BigInt(1e4 + t)), b.e.BigInt(1e4))]
        }
        function Oa(e, t, n, a) {
            if (!ga(e) || e === ha.a)
                throw Error("Invalid 'address' parameter '".concat(e, "'."));
            return new ba.a(e,t,function(e, t) {
                return t ? function(e, t) {
                    return e.getSigner(t).connectUnchecked()
                }(e, t) : e
            }(n, a))
        }
        function Ta(e, t, n) {
            return Oa(re, va.a, t, n)
        }
        var xa = function(e) {
            return "https://assets.trustwalletapp.com/blockchains/smartchain/assets/".concat(e, "/logo.png")
        };
        function ja() {
            var e = Object(Et.a)(["\n  padding: 60px 0;\n"]);
            return ja = function() {
                return e
            }
            ,
            e
        }
        function Ia() {
            var e = Object(Et.a)(["\n  background-color: ", ";\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n"]);
            return Ia = function() {
                return e
            }
            ,
            e
        }
        function Aa() {
            var e = Object(Et.a)(["\n  padding: 24px;\n"]);
            return Aa = function() {
                return e
            }
            ,
            e
        }
        function Na() {
            var e = Object(Et.a)(["\n  width: 100%;\n"]);
            return Na = function() {
                return e
            }
            ,
            e
        }
        var Sa = gt.e.div(Na())
          , Pa = Object(gt.e)(Ln)(Aa())
          , Ra = Object(gt.e)(Pa)(Ia(), (function(e) {
            return e.theme.colors.background
        }
        ))
          , Ba = Object(gt.e)(Un)(ja());
        function Ua(e) {
            var t = e.onDismiss
              , n = e.pendingText;
            return c.a.createElement(Sa, null, c.a.createElement(Pa, null, c.a.createElement(u.w, {
                justifyContent: "flex-end"
            }, c.a.createElement(u.B, {
                variant: "text",
                scale: "sm",
                onClick: t
            }, c.a.createElement(u.s, null))), c.a.createElement(Ba, null, c.a.createElement(ta, {
                src: fa.a,
                alt: "loader",
                size: "90px"
            })), c.a.createElement(Ln, {
                gap: "12px",
                justify: "center"
            }, c.a.createElement(u.X, {
                fontSize: "20px"
            }, "Waiting For Confirmation"), c.a.createElement(Ln, {
                gap: "12px",
                justify: "center"
            }, c.a.createElement(u.X, {
                bold: !0,
                small: !0,
                textAlign: "center"
            }, n)), c.a.createElement(u.X, {
                small: !0,
                color: "textSubtle",
                textAlign: "center"
            }, "Confirm this transaction in your wallet"))))
        }
        function La(e) {
            var t, n = e.onDismiss, a = e.chainId, r = e.hash, o = e.currencyToAdd, i = Oe().library, s = function(e) {
                var t = Oe()
                  , n = t.library
                  , a = it(e, t.chainId)
                  , r = Object(l.useState)()
                  , o = Object(f.a)(r, 2)
                  , i = o[0]
                  , c = o[1];
                return {
                    addToken: Object(l.useCallback)((function() {
                        n && n.provider.isMetaMask && n.provider.request && a ? n.provider.request({
                            method: "wallet_watchAsset",
                            params: {
                                type: "ERC20",
                                options: {
                                    address: a.address,
                                    symbol: a.symbol,
                                    decimals: a.decimals,
                                    image: xa(a.address)
                                }
                            }
                        }).then((function(e) {
                            c(e)
                        }
                        )).catch((function() {
                            return c(!1)
                        }
                        )) : c(!1)
                    }
                    ), [n, a]),
                    success: i
                }
            }(o), d = s.addToken, m = s.success;
            return c.a.createElement(Sa, null, c.a.createElement(Pa, null, c.a.createElement(ca, null, c.a.createElement("div", null), c.a.createElement(u.B, {
                variant: "text",
                onClick: n
            }, c.a.createElement(u.s, null))), c.a.createElement(Ba, null, c.a.createElement(u.d, {
                strokeWidth: .5,
                width: "90px",
                color: "primary"
            })), c.a.createElement(Ln, {
                gap: "12px",
                justify: "center"
            }, c.a.createElement(u.X, {
                fontSize: "20px"
            }, "Transaction Submitted"), a && r && c.a.createElement(u.E, {
                external: !0,
                small: !0,
                href: Ea(a, r, "transaction")
            }, "View on BscScan"), o && (null === i || void 0 === i || null === (t = i.provider) || void 0 === t ? void 0 : t.isMetaMask) && c.a.createElement(u.g, {
                variant: "tertiary",
                mt: "12px",
                width: "fit-content",
                onClick: d
            }, m ? c.a.createElement(da, null, "Added ", o.symbol, " ", c.a.createElement(u.n, {
                width: "16px",
                color: "success",
                ml: "6px"
            })) : c.a.createElement(da, null, "Add ", o.symbol, " to Metamask ", c.a.createElement(u.I, {
                width: "16px",
                ml: "6px"
            }))), c.a.createElement(u.g, {
                onClick: n,
                mt: "20px"
            }, "Close"))))
        }
        function Ma(e) {
            var t = e.title
              , n = e.bottomContent
              , a = e.onDismiss
              , r = e.topContent;
            return c.a.createElement(Sa, null, c.a.createElement(Pa, null, c.a.createElement(ca, null, c.a.createElement(u.X, {
                fontSize: "20px"
            }, t), c.a.createElement(u.B, {
                variant: "text",
                onClick: a
            }, c.a.createElement(u.s, null))), r()), c.a.createElement(Ra, {
                gap: "12px"
            }, n()))
        }
        function Ya(e) {
            var t = e.message
              , n = e.onDismiss;
            return c.a.createElement(Sa, null, c.a.createElement(Pa, null, c.a.createElement(ca, null, c.a.createElement(u.X, {
                fontSize: "20px"
            }, "Error"), c.a.createElement(u.B, {
                variant: "text",
                onClick: n
            }, c.a.createElement(u.s, null))), c.a.createElement(Ln, {
                style: {
                    marginTop: 20,
                    padding: "2rem 0"
                },
                gap: "24px",
                justify: "center"
            }, c.a.createElement(u.v, {
                color: "failure",
                width: "64px"
            }), c.a.createElement(u.X, {
                color: "failure",
                style: {
                    textAlign: "center",
                    width: "85%"
                }
            }, t))), c.a.createElement(Ra, {
                gap: "12px"
            }, c.a.createElement(u.g, {
                onClick: n
            }, "Dismiss")))
        }
        function Fa(e) {
            var t = e.isOpen
              , n = e.onDismiss
              , a = e.attemptingTxn
              , r = e.hash
              , o = e.pendingText
              , i = e.content
              , l = e.currencyToAdd
              , u = Oe().chainId;
            return u ? c.a.createElement(Gn, {
                isOpen: t,
                onDismiss: n,
                maxHeight: 90
            }, a ? c.a.createElement(Ua, {
                onDismiss: n,
                pendingText: o
            }) : r ? c.a.createElement(La, {
                chainId: u,
                hash: r,
                onDismiss: n,
                currencyToAdd: l
            }) : i()) : null
        }
        var Da = n(74)
          , za = n(108)
          , Ka = n(153)
          , _a = new Ye.Interface(za)
          , Xa = (new Ye.Interface(Ka),
        _a)
          , qa = []
          , Wa = ["https://tokens.pancakeswap.finance/pancakeswap-top-100.json", "https://tokens.pancakeswap.finance/pancakeswap-extended.json"].concat(qa)
          , Va = []
          , Ha = n(160);
        function Ga(e, t) {
            var n = Wa.includes(e) ? Wa.indexOf(e) : Number.MAX_SAFE_INTEGER
              , a = Wa.includes(t) ? Wa.indexOf(t) : Number.MAX_SAFE_INTEGER;
            return n < a ? 1 : n > a ? -1 : 0
        }
        var Qa, Ja = n(236), Za = function(e) {
            Object(R.a)(n, e);
            var t = Object(B.a)(n);
            function n(e, a) {
                var r;
                return Object(P.a)(this, n),
                (r = t.call(this, e.chainId, e.address, e.decimals, e.symbol, e.name)).tokenInfo = void 0,
                r.tags = void 0,
                r.tokenInfo = e,
                r.tags = a,
                r
            }
            return Object(N.a)(n, [{
                key: "logoURI",
                get: function() {
                    return this.tokenInfo.logoURI
                }
            }]),
            n
        }(b.j), $a = (Qa = {},
        Object(E.a)(Qa, b.a.MAINNET, {}),
        Object(E.a)(Qa, b.a.TESTNET, {}),
        Qa), er = "undefined" !== typeof WeakMap ? new WeakMap : null;
        function tr(e) {
            var t = null === er || void 0 === er ? void 0 : er.get(e);
            if (t)
                return t;
            var n = e.tokens.reduce((function(t, n) {
                var a, r, o, i = null !== (a = null === (r = n.tags) || void 0 === r || null === (o = r.map((function(t) {
                    var n;
                    if (null === (n = e.tags) || void 0 === n ? void 0 : n[t])
                        return Object(jt.a)(Object(jt.a)({}, e.tags[t]), {}, {
                            id: t
                        })
                }
                ))) || void 0 === o ? void 0 : o.filter((function(e) {
                    return Boolean(e)
                }
                ))) && void 0 !== a ? a : [], l = new Za(n,i);
                if (void 0 !== t[l.chainId][l.address])
                    throw Error("Duplicate tokens.");
                return Object(jt.a)(Object(jt.a)({}, t), {}, Object(E.a)({}, l.chainId, Object(jt.a)(Object(jt.a)({}, t[l.chainId]), {}, Object(E.a)({}, l.address, {
                    token: l,
                    list: e
                }))))
            }
            ), Object(jt.a)({}, $a));
            return null === er || void 0 === er || er.set(e, n),
            n
        }
        function nr() {
            return Object(Ie.d)((function(e) {
                return e.lists.byUrl
            }
            ))
        }
        function ar(e, t) {
            var n;
            return n = {},
            Object(E.a)(n, b.a.MAINNET, Object(jt.a)(Object(jt.a)({}, e[b.a.MAINNET]), t[b.a.MAINNET])),
            Object(E.a)(n, b.a.TESTNET, Object(jt.a)(Object(jt.a)({}, e[b.a.TESTNET]), t[b.a.TESTNET])),
            n
        }
        function rr(e) {
            var t = nr();
            return Object(l.useMemo)((function() {
                return e ? e.slice().sort(Ga).reduce((function(e, n) {
                    var a, r = null === (a = t[n]) || void 0 === a ? void 0 : a.current;
                    if (!r)
                        return e;
                    try {
                        return ar(e, Object.assign(tr(r)))
                    } catch (o) {
                        return console.error("Could not show token list due to error", o),
                        e
                    }
                }
                ), $a) : $a
            }
            ), [t, e])
        }
        function or() {
            var e;
            return null === (e = Object(Ie.d)((function(e) {
                return e.lists.activeListUrls
            }
            ))) || void 0 === e ? void 0 : e.filter((function(e) {
                return !qa.includes(e)
            }
            ))
        }
        function ir() {
            return ar(rr(or()), tr(Ha))
        }
        function lr() {
            return rr(function() {
                var e = nr()
                  , t = or();
                return Object.keys(e).filter((function(e) {
                    return !(null === t || void 0 === t ? void 0 : t.includes(e)) && !qa.includes(e)
                }
                ))
            }())
        }
        var cr = n(26)
          , ur = n(132)
          , sr = n.n(ur);
        function dr(e) {
            return {
                chainId: e.chainId,
                address: e.address,
                decimals: e.decimals,
                symbol: e.symbol,
                name: e.name
            }
        }
        function mr(e) {
            return new b.j(e.chainId,e.address,e.decimals,e.symbol,e.name)
        }
        function pr() {
            var e = Object(Ie.c)()
              , t = Object(Ie.d)((function(e) {
                return e.user.audioPlay
            }
            ))
              , n = Object(l.useCallback)((function() {
                e(t ? yn() : hn())
            }
            ), [t, e]);
            return [t, n]
        }
        function fr() {
            return Object(Ie.d)((function(e) {
                return e.user.userExpertMode
            }
            ))
        }
        function br() {
            var e = Object(Ie.c)()
              , t = fr()
              , n = Object(l.useCallback)((function() {
                e(ln({
                    userExpertMode: !t
                }))
            }
            ), [t, e]);
            return [t, n]
        }
        function yr() {
            var e = Object(Ie.c)();
            return [Object(Ie.d)((function(e) {
                return e.user.userSingleHopOnly
            }
            )), Object(l.useCallback)((function(t) {
                e(cn({
                    userSingleHopOnly: t
                }))
            }
            ), [e])]
        }
        function hr() {
            var e = Object(Ie.c)();
            return [Object(Ie.d)((function(e) {
                return e.user.userSlippageTolerance
            }
            )), Object(l.useCallback)((function(t) {
                e(un({
                    userSlippageTolerance: t
                }))
            }
            ), [e])]
        }
        function vr() {
            var e = Oe().chainId
              , t = Object(Ie.d)((function(e) {
                return e.user.tokens
            }
            ));
            return Object(l.useMemo)((function() {
                var n;
                return e ? Object.values(null !== (n = null === t || void 0 === t ? void 0 : t[e]) && void 0 !== n ? n : {}).map(mr) : []
            }
            ), [t, e])
        }
        function gr(e) {
            return {
                token0: dr(e.token0),
                token1: dr(e.token1)
            }
        }
        function Er(e) {
            var t = Object(f.a)(e, 2)
              , n = t[0]
              , a = t[1];
            return new b.j(n.chainId,b.f.getAddress(n, a),18,"Cake-LP","Pancake LPs")
        }
        var wr, kr = n(237), Cr = n(238), Or = n(239), Tr = n(201), xr = (wr = {},
        Object(E.a)(wr, b.a.MAINNET, "0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb"),
        Object(E.a)(wr, b.a.TESTNET, "0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A"),
        wr);
        function jr(e, t) {
            var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
              , a = Oe()
              , r = a.library
              , o = a.account;
            return Object(l.useMemo)((function() {
                if (!e || !t || !r)
                    return null;
                try {
                    return Oa(e, t, r, n && o ? o : void 0)
                } catch (a) {
                    return console.error("Failed to get contract", a),
                    null
                }
            }
            ), [e, t, r, n, o])
        }
        function Ir(e, t) {
            return jr(e, za, t)
        }
        function Ar(e) {
            var t, n = Oe().chainId;
            if (n)
                switch (n) {
                case b.a.MAINNET:
                case b.a.TESTNET:
                    t = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                }
            return jr(t, Cr, e)
        }
        function Nr(e, t) {
            return jr(e, kr, t)
        }
        function Sr() {
            var e = Oe().chainId;
            return jr(e && xr[e], Tr, !1)
        }
        function Pr(e, t) {
            if (0 === t.length)
                return e;
            var n = ga(t);
            if (n)
                return e.filter((function(e) {
                    return e.address === n
                }
                ));
            var a = t.toLowerCase().split(/\s+/).filter((function(e) {
                return e.length > 0
            }
            ));
            if (0 === a.length)
                return e;
            var r = function(e) {
                var t = e.toLowerCase().split(/\s+/).filter((function(e) {
                    return e.length > 0
                }
                ));
                return a.every((function(e) {
                    return 0 === e.length || t.some((function(t) {
                        return t.startsWith(e) || t.endsWith(e)
                    }
                    ))
                }
                ))
            };
            return e.filter((function(e) {
                var t = e.symbol
                  , n = e.name;
                return t && r(t) || n && r(n)
            }
            ))
        }
        function Rr(e, t) {
            return Object(l.useMemo)((function() {
                if (!e)
                    return [];
                var n = t.toLowerCase().split(/\s+/).filter((function(e) {
                    return e.length > 0
                }
                ));
                if (n.length > 1)
                    return e;
                var a = []
                  , r = []
                  , o = [];
                return e.map((function(e) {
                    var i, l;
                    return (null === (i = e.symbol) || void 0 === i ? void 0 : i.toLowerCase()) === n[0] ? a.push(e) : (null === (l = e.symbol) || void 0 === l ? void 0 : l.toLowerCase().startsWith(t.toLowerCase().trim())) ? r.push(e) : o.push(e)
                }
                )),
                [].concat(a, r, o)
            }
            ), [e, t])
        }
        var Br = n(70);
        function Ur(e, t) {
            var n = Oe().chainId
              , a = vr();
            return Object(l.useMemo)((function() {
                if (!n)
                    return {};
                var r = Object.keys(e[n]).reduce((function(t, a) {
                    return t[a] = e[n][a].token,
                    t
                }
                ), {});
                return t ? a.reduce((function(e, t) {
                    return e[t.address] = t,
                    e
                }
                ), Object(jt.a)({}, r)) : r
            }
            ), [n, a, e, t])
        }
        function Lr() {
            return Ur(ir(), !0)
        }
        function Mr() {
            var e = Ur(lr(), !1)
              , t = Object.keys(Lr());
            return t ? Object.keys(e).reduce((function(n, a) {
                return t.includes(a) || (n[a] = e[a]),
                n
            }
            ), {}) : e
        }
        function Yr() {
            return Ur(ar(tr(Ja), rr(qa)), !1)
        }
        function Fr(e) {
            var t = vr();
            return !!e && !!t.find((function(t) {
                return Object(b.o)(e, t)
            }
            ))
        }
        var Dr = /^0x[a-fA-F0-9]{64}$/;
        function zr(e, t, n) {
            return e && e.length > 0 ? e : t && Dr.test(t) && 0 === Object(Br.arrayify)(t)[31] ? Object(cr.parseBytes32String)(t) : n
        }
        function Kr(e) {
            var t = Oe().chainId
              , n = Lr()
              , a = ga(e)
              , r = Ir(a || void 0, !1)
              , o = function(e, t) {
                return jr(e, Ka, t)
            }(a || void 0, !1)
              , i = a ? n[a] : void 0
              , c = ot(i ? void 0 : r, "name", void 0, $e)
              , u = ot(i ? void 0 : o, "name", void 0, $e)
              , s = ot(i ? void 0 : r, "symbol", void 0, $e)
              , d = ot(i ? void 0 : o, "symbol", void 0, $e)
              , m = ot(i ? void 0 : r, "decimals", void 0, $e);
            return Object(l.useMemo)((function() {
                if (i)
                    return i;
                if (t && a) {
                    if (m.loading || s.loading || c.loading)
                        return null;
                    var e, n, r, o;
                    if (m.result)
                        return new b.j(t,a,m.result[0],zr(null === (e = s.result) || void 0 === e ? void 0 : e[0], null === (n = d.result) || void 0 === n ? void 0 : n[0], "UNKNOWN"),zr(null === (r = c.result) || void 0 === r ? void 0 : r[0], null === (o = u.result) || void 0 === o ? void 0 : o[0], "Unknown Token"))
                }
            }
            ), [a, t, m.loading, m.result, s.loading, s.result, d.result, i, c.loading, c.result, u.result])
        }
        function _r(e) {
            var t = "BNB" === (null === e || void 0 === e ? void 0 : e.toUpperCase())
              , n = Kr(t ? void 0 : e);
            return t ? b.d : n
        }
        function Xr(e) {
            var t = Sr()
              , n = Object(l.useMemo)((function() {
                return e ? e.map(ga).filter((function(e) {
                    return !1 !== e
                }
                )).sort() : []
            }
            ), [e])
              , a = function(e, t, n, a) {
                var r = Object(l.useMemo)((function() {
                    var n;
                    return null === e || void 0 === e || null === (n = e.interface) || void 0 === n ? void 0 : n.getFunction(t)
                }
                ), [e, t])
                  , o = et(Object(l.useMemo)((function() {
                    return e && r && n && n.length > 0 ? n.map((function(t) {
                        return {
                            address: e.address,
                            callData: e.interface.encodeFunctionData(r, t)
                        }
                    }
                    )) : []
                }
                ), [n, e, r]), a)
                  , i = Fe();
                return Object(l.useMemo)((function() {
                    return o.map((function(t) {
                        return at(t, null === e || void 0 === e ? void 0 : e.interface, r, i)
                    }
                    ))
                }
                ), [r, e, o, i])
            }(t, "getEthBalance", n.map((function(e) {
                return [e]
            }
            )));
            return Object(l.useMemo)((function() {
                return n.reduce((function(e, t, n) {
                    var r, o, i = null === a || void 0 === a || null === (r = a[n]) || void 0 === r || null === (o = r.result) || void 0 === o ? void 0 : o[0];
                    return i && (e[t] = b.c.ether(b.e.BigInt(i.toString()))),
                    e
                }
                ), {})
            }
            ), [n, a])
        }
        function qr(e, t) {
            var n = Object(l.useMemo)((function() {
                var e;
                return null !== (e = null === t || void 0 === t ? void 0 : t.filter((function(e) {
                    return !1 !== ga(null === e || void 0 === e ? void 0 : e.address)
                }
                ))) && void 0 !== e ? e : []
            }
            ), [t])
              , a = rt(Object(l.useMemo)((function() {
                return n.map((function(e) {
                    return e.address
                }
                ))
            }
            ), [n]), Xa, "balanceOf", [e])
              , r = Object(l.useMemo)((function() {
                return a.some((function(e) {
                    return e.loading
                }
                ))
            }
            ), [a]);
            return [Object(l.useMemo)((function() {
                return e && n.length > 0 ? n.reduce((function(e, t, n) {
                    var r, o, i = null === a || void 0 === a || null === (r = a[n]) || void 0 === r || null === (o = r.result) || void 0 === o ? void 0 : o[0], l = i ? b.e.BigInt(i.toString()) : void 0;
                    return l && (e[t.address] = new b.k(t,l)),
                    e
                }
                ), {}) : {}
            }
            ), [e, n, a]), r]
        }
        function Wr(e, t) {
            return qr(e, t)[0]
        }
        function Vr(e, t) {
            var n = Wr(e, [t]);
            if (t)
                return n[t.address]
        }
        function Hr(e, t) {
            var n = Object(l.useMemo)((function() {
                var e;
                return null !== (e = null === t || void 0 === t ? void 0 : t.filter((function(e) {
                    return e instanceof b.j
                }
                ))) && void 0 !== e ? e : []
            }
            ), [t])
              , a = Wr(e, n)
              , r = Xr(Object(l.useMemo)((function() {
                var e;
                return null !== (e = null === t || void 0 === t ? void 0 : t.some((function(e) {
                    return e === b.d
                }
                ))) && void 0 !== e && e
            }
            ), [t]) ? [e] : []);
            return Object(l.useMemo)((function() {
                var n;
                return null !== (n = null === t || void 0 === t ? void 0 : t.map((function(t) {
                    if (e && t)
                        return t instanceof b.j ? a[t.address] : t === b.d ? r[e] : void 0
                }
                ))) && void 0 !== n ? n : []
            }
            ), [e, t, r, a])
        }
        function Gr(e, t) {
            return Hr(e, [t])[0]
        }
        function Qr() {
            var e = Object(Et.a)(["\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n"]);
            return Qr = function() {
                return e
            }
            ,
            e
        }
        var Jr = gt.e.div(Qr())
          , Zr = function(e) {
            var t = e.text
              , n = Object(Wt.a)(e, ["text"])
              , a = Object(u.gb)(t, {
                placement: "right-end",
                trigger: "hover"
            })
              , r = a.targetRef
              , o = a.tooltip
              , i = a.tooltipVisible;
            return c.a.createElement(u.f, n, i && o, c.a.createElement(Jr, {
                ref: r
            }, c.a.createElement(u.z, {
                color: "textSubtle",
                width: "16px"
            })))
        }
          , $r = n(240)
          , eo = n.n($r)
          , to = n(162)
          , no = n.n(to)
          , ao = n(113)
          , ro = n(99);
        var oo = new TextDecoder;
        function io(e) {
            var t = function(e) {
                if ((e = e.startsWith("0x") ? e.substr(2) : e).length % 2 !== 0)
                    throw new Error("hex must have length that is multiple of 2");
                for (var t = new Uint8Array(e.length / 2), n = 0; n < t.length; n++)
                    t[n] = parseInt(e.substr(2 * n, 2), 16);
                return t
            }(e)
              , n = Object(ao.getCodec)(t);
            switch (n) {
            case "ipfs-ns":
                var a = Object(ao.rmPrefix)(t)
                  , r = new no.a(a);
                return "ipfs://".concat(Object(ro.toB58String)(r.multihash));
            case "ipns-ns":
                var o = Object(ao.rmPrefix)(t)
                  , i = new no.a(o)
                  , l = Object(ro.decode)(i.multihash);
                return "identity" === l.name ? "ipns://".concat(oo.decode(l.digest).trim()) : "ipns://".concat(Object(ro.toB58String)(i.multihash));
            default:
                throw new Error("Unrecognized codec: ".concat(n))
            }
        }
        var lo = /^(([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+)eth(\/.*)?$/;
        function co(e) {
            var t = e.match(lo);
            if (t)
                return {
                    ensName: "".concat(t[1].toLowerCase(), "eth"),
                    ensPath: t[4]
                }
        }
        function uo(e) {
            var t, n;
            switch (e.split(":")[0].toLowerCase()) {
            case "https":
                return [e];
            case "http":
                return ["https" + e.substr(4), e];
            case "ipfs":
                var a = null === (t = e.match(/^ipfs:(\/\/)?(.*)$/i)) || void 0 === t ? void 0 : t[2];
                return ["https://cloudflare-ipfs.com/ipfs/".concat(a, "/"), "https://ipfs.io/ipfs/".concat(a, "/")];
            case "ipns":
                var r = null === (n = e.match(/^ipns:(\/\/)?(.*)$/i)) || void 0 === n ? void 0 : n[2];
                return ["https://cloudflare-ipfs.com/ipns/".concat(r, "/"), "https://ipfs.io/ipns/".concat(r, "/")];
            default:
                return []
            }
        }
        function so(e) {
            return /^0x0*$/.test(e)
        }
        function mo(e) {
            var t = Object(l.useMemo)((function() {
                return e ? co(e) : void 0
            }
            ), [e])
              , n = function(e) {
                var t, n, a, r = Object(l.useMemo)((function() {
                    if (!e)
                        return [void 0];
                    try {
                        return e ? [Object(Br.namehash)(e)] : [void 0]
                    } catch (t) {
                        return [void 0]
                    }
                }
                ), [e]), o = ot(Ar(!1), "resolver", r), i = null === (t = o.result) || void 0 === t ? void 0 : t[0], c = ot(Nr(i && so(i) ? void 0 : i, !1), "contenthash", r);
                return {
                    contenthash: null !== (n = null === (a = c.result) || void 0 === a ? void 0 : a[0]) && void 0 !== n ? n : null,
                    loading: o.loading || c.loading
                }
            }(null === t || void 0 === t ? void 0 : t.ensName);
            return Object(l.useMemo)((function() {
                return t ? n.contenthash ? uo(io(n.contenthash)) : [] : e ? uo(e) : []
            }
            ), [t, n.contenthash, e])
        }
        var po = {}
          , fo = function(e) {
            var t = e.srcs
              , n = e.alt
              , a = Object(Wt.a)(e, ["srcs", "alt"])
              , r = Object(l.useState)(0)
              , o = Object(f.a)(r, 2)[1]
              , i = t.find((function(e) {
                return !po[e]
            }
            ));
            return i ? c.a.createElement("img", Object.assign({}, a, {
                alt: n,
                src: i,
                onError: function() {
                    i && (po[i] = !0),
                    o((function(e) {
                        return e + 1
                    }
                    ))
                }
            })) : c.a.createElement(u.z, a)
        };
        function bo() {
            var e = Object(Et.a)(["\n  width: ", ";\n  height: ", ";\n"]);
            return bo = function() {
                return e
            }
            ,
            e
        }
        function yo() {
            var e = Object(Et.a)(["\n  width: ", ";\n  height: ", ";\n"]);
            return yo = function() {
                return e
            }
            ,
            e
        }
        var ho = gt.e.img(yo(), (function(e) {
            return e.size
        }
        ), (function(e) {
            return e.size
        }
        ))
          , vo = Object(gt.e)(fo)(bo(), (function(e) {
            return e.size
        }
        ), (function(e) {
            return e.size
        }
        ));
        function go(e) {
            var t, n = e.currency, a = e.size, r = void 0 === a ? "24px" : a, o = e.style, i = mo(n instanceof Za ? n.logoURI : void 0), u = Object(l.useMemo)((function() {
                return n === b.d ? [] : n instanceof b.j ? n instanceof Za ? [].concat(Object(O.a)(i), [xa(n.address)]) : [xa(n.address)] : []
            }
            ), [n, i]);
            return n === b.d ? c.a.createElement(ho, {
                src: eo.a,
                size: r,
                style: o
            }) : c.a.createElement(vo, {
                size: r,
                srcs: u,
                alt: "".concat(null !== (t = null === n || void 0 === n ? void 0 : n.symbol) && void 0 !== t ? t : "token", " logo"),
                style: o
            })
        }
        function Eo() {
            var e = Object(Et.a)(["\n  display: flex;\n  flex-direction: row;\n  margin-right: ", ";\n"]);
            return Eo = function() {
                return e
            }
            ,
            e
        }
        var wo = gt.e.div(Eo(), (function(e) {
            return e.margin && "4px"
        }
        ));
        function ko(e) {
            var t = e.currency0
              , n = e.currency1
              , a = e.size
              , r = void 0 === a ? 20 : a
              , o = e.margin
              , i = void 0 !== o && o;
            return c.a.createElement(wo, {
                margin: i
            }, t && c.a.createElement(go, {
                currency: t,
                size: r.toString() + "px",
                style: {
                    marginRight: "4px"
                }
            }), n && c.a.createElement(go, {
                currency: n,
                size: r.toString() + "px"
            }))
        }
        function Co() {
            var e = Object(Et.a)(["\n  width: ", ";\n  height: ", ";\n"]);
            return Co = function() {
                return e
            }
            ,
            e
        }
        var Oo = Object(gt.e)(fo)(Co(), (function(e) {
            return e.size
        }
        ), (function(e) {
            return e.size
        }
        ));
        function To(e) {
            var t = e.logoURI
              , n = e.style
              , a = e.size
              , r = void 0 === a ? "24px" : a
              , o = e.alt
              , i = mo(t);
            return c.a.createElement(Oo, {
                alt: o,
                size: r,
                srcs: i,
                style: n
            })
        }
        function xo() {
            var e = Object(Et.a)(["\n  border: 1px solid ", ";\n  border-radius: 10px;\n  display: flex;\n  padding: 6px;\n\n  align-items: center;\n  :hover {\n    cursor: ", ";\n    background-color: ", ";\n  }\n\n  background-color: ", ";\n  opacity: ", ";\n"]);
            return xo = function() {
                return e
            }
            ,
            e
        }
        var jo = gt.e.div(xo(), (function(e) {
            var t = e.theme;
            return e.disable ? "transparent" : t.colors.dropdown
        }
        ), (function(e) {
            return !e.disable && "pointer"
        }
        ), (function(e) {
            var t = e.theme;
            return !e.disable && t.colors.background
        }
        ), (function(e) {
            var t = e.theme;
            return e.disable && t.colors.dropdown
        }
        ), (function(e) {
            return e.disable && "0.4"
        }
        ));
        function Io(e) {
            var t = e.chainId
              , n = e.onSelect
              , a = e.selectedCurrency;
            return c.a.createElement(Ln, {
                gap: "md"
            }, c.a.createElement(sa, null, c.a.createElement(u.X, {
                fontSize: "14px"
            }, "Common bases"), c.a.createElement(Zr, {
                text: "These tokens are commonly paired with other tokens.",
                ml: "4px"
            })), c.a.createElement(sa, {
                gap: "auto"
            }, c.a.createElement(jo, {
                onClick: function() {
                    a && Object(b.o)(a, b.d) || n(b.d)
                },
                disable: a === b.d
            }, c.a.createElement(go, {
                currency: b.d,
                style: {
                    marginRight: 8
                }
            }), c.a.createElement(u.X, null, "BNB")), (t ? ce[t] : []).map((function(e) {
                var t = a instanceof b.j && a.address === e.address;
                return c.a.createElement(jo, {
                    onClick: function() {
                        return !t && n(e)
                    },
                    disable: t,
                    key: e.address
                }, c.a.createElement(go, {
                    currency: e,
                    style: {
                        marginRight: 8
                    }
                }), c.a.createElement(u.X, null, e.symbol))
            }
            ))))
        }
        var Ao = n(243);
        function No() {
            var e = Object(Et.a)(["\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 140px;\n  font-size: 12px;\n"]);
            return No = function() {
                return e
            }
            ,
            e
        }
        function So() {
            var e = Object(Et.a)(["\n  height: 16px;\n  width: 16px;\n  margin-right: 6px;\n  stroke: ", ";\n"]);
            return So = function() {
                return e
            }
            ,
            e
        }
        function Po() {
            var e = Object(Et.a)(["\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) auto;\n  grid-gap: 16px;\n  align-items: center;\n\n  opacity: ", ";\n"]);
            return Po = function() {
                return e
            }
            ,
            e
        }
        var Ro = gt.e.div(Po(), (function(e) {
            return e.dim ? "0.4" : "1"
        }
        ))
          , Bo = Object(gt.e)(u.n)(So(), (function(e) {
            return e.theme.colors.success
        }
        ))
          , Uo = gt.e.div(No());
        function Lo(e) {
            var t, n, a = e.token, r = e.style, o = e.dim, i = e.showImportView, l = e.setImportToken, s = Oe().chainId, d = lr(), m = s && (null === d || void 0 === d || null === (t = d[s]) || void 0 === t || null === (n = t[a.address]) || void 0 === n ? void 0 : n.list), p = Fr(a), f = function(e) {
                var t = Lr();
                return !(!t || !e) && !!t[e.address]
            }(a);
            return c.a.createElement(Ro, {
                style: r
            }, c.a.createElement(go, {
                currency: a,
                size: "24px",
                style: {
                    opacity: o ? "0.6" : "1"
                }
            }), c.a.createElement(Ln, {
                gap: "4px",
                style: {
                    opacity: o ? "0.6" : "1"
                }
            }, c.a.createElement(sa, null, c.a.createElement(u.X, null, a.symbol), c.a.createElement(u.X, {
                color: "textDisabled",
                ml: "8px"
            }, c.a.createElement(Uo, {
                title: a.name
            }, a.name))), m && m.logoURI && c.a.createElement(da, null, c.a.createElement(u.X, {
                small: !0,
                mr: "4px",
                color: "textSubtle"
            }, "via ", m.name), c.a.createElement(To, {
                logoURI: m.logoURI,
                size: "12px"
            }))), f || p ? c.a.createElement(da, {
                style: {
                    minWidth: "fit-content"
                }
            }, c.a.createElement(Bo, null), c.a.createElement(u.X, {
                color: "success"
            }, "Active")) : c.a.createElement(u.g, {
                width: "fit-content",
                onClick: function() {
                    l && l(a),
                    i()
                }
            }, "Import"))
        }
        function Mo() {
            var e = Object(Et.a)(["\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) minmax(0, 72px);\n  grid-gap: 8px;\n  cursor: ", ";\n  pointer-events: ", ";\n  :hover {\n    background-color: ", ";\n  }\n  opacity: ", ";\n"]);
            return Mo = function() {
                return e
            }
            ,
            e
        }
        function Yo() {
            var e = Object(Et.a)(["\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-gap: 16px;\n  align-items: center;\n"]);
            return Yo = function() {
                return e
            }
            ,
            e
        }
        function Fo() {
            var e = Object(Et.a)(["\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 5rem;\n  text-overflow: ellipsis;\n"]);
            return Fo = function() {
                return e
            }
            ,
            e
        }
        function Do(e) {
            return e instanceof b.j ? e.address : e === b.d ? "ETHER" : ""
        }
        var zo = Object(gt.e)(u.X)(Fo())
          , Ko = gt.e.div(Yo());
        function _o(e) {
            var t = e.balance;
            return c.a.createElement(zo, {
                title: t.toExact()
            }, t.toSignificant(4))
        }
        var Xo = Object(gt.e)(ca)(Mo(), (function(e) {
            return !e.disabled && "pointer"
        }
        ), (function(e) {
            return e.disabled && "none"
        }
        ), (function(e) {
            var t = e.theme;
            return !e.disabled && t.colors.background
        }
        ), (function(e) {
            var t = e.disabled
              , n = e.selected;
            return t || n ? .5 : 1
        }
        ));
        function qo(e) {
            var t = e.currency
              , n = e.onSelect
              , a = e.isSelected
              , r = e.otherSelected
              , o = e.style
              , i = Oe().account
              , l = Do(t)
              , s = function(e, t) {
                var n;
                return t === b.d || Boolean(t instanceof b.j && (null === (n = e[t.chainId]) || void 0 === n ? void 0 : n[t.address]))
            }(ir(), t)
              , d = Fr(t)
              , m = Gr(null !== i && void 0 !== i ? i : void 0, t);
            return c.a.createElement(Xo, {
                style: o,
                className: "token-item-".concat(l),
                onClick: function() {
                    return a ? null : n()
                },
                disabled: a,
                selected: r
            }, c.a.createElement(go, {
                currency: t,
                size: "24px"
            }), c.a.createElement(Mn, null, c.a.createElement(u.X, {
                bold: !0
            }, t.symbol), c.a.createElement(u.X, {
                color: "textSubtle",
                small: !0,
                ellipsis: !0,
                maxWidth: "200px"
            }, !s && d && "Added by user \u2022", " ", t.name)), c.a.createElement(da, {
                style: {
                    justifySelf: "flex-end"
                }
            }, m ? c.a.createElement(_o, {
                balance: m
            }) : i ? c.a.createElement(Jt, null) : null))
        }
        function Wo(e) {
            var t = e.height
              , n = e.currencies
              , a = e.selectedCurrency
              , r = e.onCurrencySelect
              , o = e.otherCurrency
              , i = e.fixedListRef
              , s = e.showETH
              , d = e.showImportView
              , m = e.setImportToken
              , p = e.breakIndex
              , f = Object(l.useMemo)((function() {
                var e = s ? [b.b.ETHER].concat(Object(O.a)(n)) : n;
                return void 0 !== p && (e = [].concat(Object(O.a)(e.slice(0, p)), [void 0], Object(O.a)(e.slice(p, e.length)))),
                e
            }
            ), [p, n, s])
              , y = Oe().chainId
              , h = Mr()
              , v = Object(l.useCallback)((function(e) {
                var t = e.data
                  , n = e.index
                  , i = e.style
                  , l = t[n]
                  , s = Boolean(a && Object(b.o)(a, l))
                  , f = Boolean(o && Object(b.o)(o, l))
                  , v = it(l, y)
                  , g = h && v && Object.keys(h).includes(v.address);
                return n !== p && t ? g && v ? c.a.createElement(Lo, {
                    style: i,
                    token: v,
                    showImportView: d,
                    setImportToken: m,
                    dim: !0
                }) : c.a.createElement(qo, {
                    style: i,
                    currency: l,
                    isSelected: s,
                    onSelect: function() {
                        return r(l)
                    },
                    otherSelected: f
                }) : c.a.createElement(Ko, {
                    style: i
                }, c.a.createElement(In, {
                    padding: "8px 12px",
                    borderRadius: "8px"
                }, c.a.createElement(ca, null, c.a.createElement(u.X, {
                    small: !0
                }, "Expanded results from inactive Token Lists"), c.a.createElement(Zr, {
                    text: "Tokens from inactive lists. Import specific tokens below or click 'Manage' to activate more lists.",
                    ml: "4px"
                }))))
            }
            ), [y, h, r, o, a, m, d, p])
              , g = Object(l.useCallback)((function(e, t) {
                return Do(t[e])
            }
            ), []);
            return c.a.createElement(Ao.a, {
                height: t,
                ref: i,
                width: "100%",
                itemData: f,
                itemCount: f.length,
                itemSize: 56,
                itemKey: g
            }, v)
        }
        function Vo(e) {
            var t = function() {
                var e = Oe().account
                  , t = Lr()
                  , n = Wr(null !== e && void 0 !== e ? e : void 0, Object(l.useMemo)((function() {
                    return Object.values(null !== t && void 0 !== t ? t : {})
                }
                ), [t]));
                return null !== n && void 0 !== n ? n : {}
            }()
              , n = Object(l.useMemo)((function() {
                return function(e) {
                    return function(t, n) {
                        var a = function(e, t) {
                            return e && t ? e.greaterThan(t) ? -1 : e.equalTo(t) ? 0 : 1 : e && e.greaterThan("0") ? -1 : t && t.greaterThan("0") ? 1 : 0
                        }(e[t.address], e[n.address]);
                        return 0 !== a ? a : t.symbol && n.symbol ? t.symbol.toLowerCase() < n.symbol.toLowerCase() ? -1 : 1 : t.symbol || n.symbol ? -1 : 0
                    }
                }(null !== t && void 0 !== t ? t : {})
            }
            ), [t]);
            return Object(l.useMemo)((function() {
                return e ? function(e, t) {
                    return -1 * n(e, t)
                }
                : n
            }
            ), [e, n])
        }
        function Ho(e, t) {
            var n = Object(l.useState)(e)
              , a = Object(f.a)(n, 2)
              , r = a[0]
              , o = a[1];
            return Object(l.useEffect)((function() {
                var n = setTimeout((function() {
                    o(e)
                }
                ), t);
                return function() {
                    clearTimeout(n)
                }
            }
            ), [e, t]),
            r
        }
        function Go(e) {
            var t = e.selectedCurrency
              , n = e.onCurrencySelect
              , a = e.otherSelectedCurrency
              , r = e.showCommonBases
              , o = e.showImportView
              , i = e.setImportToken
              , s = Object(Se.b)().t
              , d = Oe().chainId
              , m = Object(l.useRef)()
              , p = Object(l.useRef)(null)
              , y = Object(l.useState)("")
              , h = Object(f.a)(y, 2)
              , v = h[0]
              , g = h[1]
              , E = Ho(v, 200)
              , w = Object(l.useState)(!1)
              , k = Object(f.a)(w, 1)[0]
              , C = Lr()
              , O = Kr(E)
              , T = Fr(O)
              , x = pr()
              , j = Object(f.a)(x, 1)[0]
              , I = Object(l.useMemo)((function() {
                var e = E.toLowerCase().trim();
                return "" === e || "b" === e || "bn" === e || "bnb" === e
            }
            ), [E])
              , A = Vo(k)
              , N = Object(l.useMemo)((function() {
                return Pr(Object.values(C), E)
            }
            ), [C, E])
              , S = Rr(Object(l.useMemo)((function() {
                return N.sort(A)
            }
            ), [N, A]), E)
              , P = Object(l.useCallback)((function(e) {
                var t;
                (n(e),
                j) && (null === p || void 0 === p || null === (t = p.current) || void 0 === t || t.play())
            }
            ), [j, n])
              , R = Object(l.useRef)()
              , B = Object(l.useCallback)((function(e) {
                var t, n = e.target.value, a = ga(n);
                g(a || n),
                null === (t = m.current) || void 0 === t || t.scrollTo(0)
            }
            ), [])
              , U = Object(l.useCallback)((function(e) {
                if ("Enter" === e.key)
                    if ("bnb" === E.toLowerCase().trim())
                        P(b.d);
                    else if (S.length > 0) {
                        var t;
                        (null === (t = S[0].symbol) || void 0 === t ? void 0 : t.toLowerCase()) !== E.trim().toLowerCase() && 1 !== S.length || P(S[0])
                    }
            }
            ), [S, P, E])
              , L = function(e) {
                var t = Oe().chainId
                  , n = Mr();
                return Object(l.useMemo)((function() {
                    return t && "" !== e ? Pr(Object.values(n), e) : void 0
                }
                ), [t, n, e])
            }(E)
              , M = Rr(L, E);
            return c.a.createElement(c.a.Fragment, null, c.a.createElement("audio", {
                id: "bgMusic",
                ref: p
            }, c.a.createElement("source", {
                src: "swap.mp3",
                type: "audio/mp3"
            })), c.a.createElement("div", null, c.a.createElement(Ln, {
                gap: "16px"
            }, c.a.createElement(ma, null, c.a.createElement(u.D, {
                id: "token-search-input",
                placeholder: s("tokenSearchPlaceholder"),
                scale: "lg",
                autoComplete: "off",
                value: v,
                ref: R,
                onChange: B,
                onKeyDown: U
            })), r && c.a.createElement(Io, {
                chainId: d,
                onSelect: P,
                selectedCurrency: t
            })), O && !T ? c.a.createElement(Mn, {
                style: {
                    padding: "20px 0",
                    height: "100%"
                }
            }, c.a.createElement(Lo, {
                token: O,
                showImportView: o,
                setImportToken: i
            })) : (null === S || void 0 === S ? void 0 : S.length) > 0 || (null === M || void 0 === M ? void 0 : M.length) > 0 ? c.a.createElement(u.f, {
                margin: "24px -24px"
            }, c.a.createElement(Wo, {
                height: 390,
                showETH: I,
                currencies: M ? S.concat(M) : S,
                breakIndex: L && S ? S.length : void 0,
                onCurrencySelect: P,
                otherCurrency: a,
                selectedCurrency: t,
                fixedListRef: m,
                showImportView: o,
                setImportToken: i
            })) : c.a.createElement(Mn, {
                style: {
                    padding: "20px",
                    height: "100%"
                }
            }, c.a.createElement(u.X, {
                color: "textSubtle",
                textAlign: "center",
                mb: "20px"
            }, "No results found."))))
        }
        function Qo() {
            var e = Object(Et.a)(["\n  overflow-y: auto;\n"]);
            return Qo = function() {
                return e
            }
            ,
            e
        }
        var Jo = Object(gt.e)(Ln)(Qo());
        function Zo(e) {
            var t = e.tokens
              , n = e.handleCurrencySelect
              , a = Oe().chainId
              , r = Object(l.useState)(!1)
              , o = Object(f.a)(r, 2)
              , i = o[0]
              , s = o[1]
              , d = function() {
                var e = Object(Ie.c)();
                return Object(l.useCallback)((function(t) {
                    e(dn({
                        serializedToken: dr(t)
                    }))
                }
                ), [e])
            }()
              , m = lr();
            return c.a.createElement(Jo, {
                gap: "lg"
            }, c.a.createElement(u.H, {
                variant: "warning"
            }, c.a.createElement(u.X, null, "Anyone can create a BEP20 token on BSC with any name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token.", c.a.createElement("br", null), c.a.createElement("br", null), "If you purchase an arbitrary token, you may be unable to sell it back.")), t.map((function(e) {
                var t, n, r = a && (null === m || void 0 === m || null === (t = m[a]) || void 0 === t || null === (n = t[e.address]) || void 0 === n ? void 0 : n.list), o = e.address ? "".concat(e.address.substring(0, 6), "...").concat(e.address.substring(e.address.length - 4)) : null;
                return c.a.createElement(u.x, {
                    key: e.address,
                    gridTemplateRows: "1fr 1fr 1fr",
                    gridGap: "4px"
                }, void 0 !== r ? c.a.createElement(u.W, {
                    variant: "success",
                    outline: !0,
                    scale: "sm",
                    startIcon: r.logoURI && c.a.createElement(To, {
                        logoURI: r.logoURI,
                        size: "12px"
                    })
                }, "via ", r.name) : c.a.createElement(u.W, {
                    variant: "failure",
                    outline: !0,
                    scale: "sm",
                    startIcon: c.a.createElement(u.v, {
                        color: "failure"
                    })
                }, "Unknown Source"), c.a.createElement(u.w, {
                    alignItems: "center"
                }, c.a.createElement(u.X, {
                    mr: "8px"
                }, e.name), c.a.createElement(u.X, null, "(", e.symbol, ")")), a && c.a.createElement(u.w, {
                    justifyContent: "space-between",
                    width: "100%"
                }, c.a.createElement(u.X, {
                    mr: "4px"
                }, o), c.a.createElement(u.E, {
                    href: Ea(a, e.address, "address"),
                    external: !0
                }, "(View on BscScan)")))
            }
            )), c.a.createElement(u.w, {
                justifyContent: "space-between",
                alignItems: "center"
            }, c.a.createElement(u.w, {
                alignItems: "center",
                onClick: function() {
                    return s(!i)
                }
            }, c.a.createElement(u.m, {
                scale: "sm",
                name: "confirmed",
                type: "checkbox",
                checked: i,
                onChange: function() {
                    return s(!i)
                }
            }), c.a.createElement(u.X, {
                ml: "8px",
                style: {
                    userSelect: "none"
                }
            }, "I understand")), c.a.createElement(u.g, {
                variant: "danger",
                disabled: !i,
                onClick: function() {
                    t.map((function(e) {
                        return d(e)
                    }
                    )),
                    n && n(t[0])
                },
                className: ".token-dismiss-button"
            }, "Import")))
        }
        var $o = {
            pending: Object(De.b)("lists/fetchTokenList/pending"),
            fulfilled: Object(De.b)("lists/fetchTokenList/fulfilled"),
            rejected: Object(De.b)("lists/fetchTokenList/rejected")
        }
          , ei = Object(De.b)("lists/addList")
          , ti = Object(De.b)("lists/removeList")
          , ni = Object(De.b)("lists/enableList")
          , ai = Object(De.b)("lists/disableList")
          , ri = Object(De.b)("lists/acceptListUpdate")
          , oi = (Object(De.b)("lists/rejectVersionUpdate"),
        n(241))
          , ii = n(242)
          , li = new (n.n(ii).a)({
            allErrors: !0
        }).compile(oi);
        function ci(e, t) {
            return ui.apply(this, arguments)
        }
        function ui() {
            return (ui = Object(p.a)(m.a.mark((function e(t, n) {
                var a, r, o, i, l, c, u, s, d, p, f, b, y;
                return m.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!(a = co(t))) {
                                e.next = 23;
                                break
                            }
                            return e.prev = 2,
                            e.next = 5,
                            n(a.ensName);
                        case 5:
                            i = e.sent,
                            e.next = 12;
                            break;
                        case 8:
                            throw e.prev = 8,
                            e.t0 = e.catch(2),
                            console.debug("Failed to resolve ENS name: ".concat(a.ensName), e.t0),
                            new Error("Failed to resolve ENS name: ".concat(a.ensName));
                        case 12:
                            e.prev = 12,
                            l = io(i),
                            e.next = 20;
                            break;
                        case 16:
                            throw e.prev = 16,
                            e.t1 = e.catch(12),
                            console.debug("Failed to translate contenthash to URI", i),
                            new Error("Failed to translate contenthash to URI: ".concat(i));
                        case 20:
                            r = uo("".concat(l).concat(null !== (o = a.ensPath) && void 0 !== o ? o : "")),
                            e.next = 24;
                            break;
                        case 23:
                            r = uo(t);
                        case 24:
                            c = 0;
                        case 25:
                            if (!(c < r.length)) {
                                e.next = 55;
                                break
                            }
                            return u = r[c],
                            s = c === r.length - 1,
                            d = void 0,
                            e.prev = 29,
                            e.next = 32,
                            fetch(u);
                        case 32:
                            d = e.sent,
                            e.next = 41;
                            break;
                        case 35:
                            if (e.prev = 35,
                            e.t2 = e.catch(29),
                            console.debug("Failed to fetch list", t, e.t2),
                            !s) {
                                e.next = 40;
                                break
                            }
                            throw new Error("Failed to download list ".concat(t));
                        case 40:
                            return e.abrupt("continue", 52);
                        case 41:
                            if (d.ok) {
                                e.next = 45;
                                break
                            }
                            if (!s) {
                                e.next = 44;
                                break
                            }
                            throw new Error("Failed to download list ".concat(t));
                        case 44:
                            return e.abrupt("continue", 52);
                        case 45:
                            return e.next = 47,
                            d.json();
                        case 47:
                            if (p = e.sent,
                            li(p)) {
                                e.next = 51;
                                break
                            }
                            throw y = null !== (f = null === (b = li.errors) || void 0 === b ? void 0 : b.reduce((function(e, t) {
                                var n, a = "".concat(t.dataPath, " ").concat(null !== (n = t.message) && void 0 !== n ? n : "");
                                return e.length > 0 ? "".concat(e, "; ").concat(a) : "".concat(a)
                            }
                            ), "")) && void 0 !== f ? f : "unknown error",
                            new Error("Token list failed validation: ".concat(y));
                        case 51:
                            return e.abrupt("return", p);
                        case 52:
                            c++,
                            e.next = 25;
                            break;
                        case 55:
                            throw new Error("Unrecognized list URL protocol.");
                        case 56:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[2, 8], [12, 16], [29, 35]])
            }
            )))).apply(this, arguments)
        }
        var si = [{
            constant: !0,
            inputs: [{
                name: "node",
                type: "bytes32"
            }],
            name: "resolver",
            outputs: [{
                name: "resolverAddress",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }]
          , di = [{
            constant: !0,
            inputs: [{
                internalType: "bytes32",
                name: "node",
                type: "bytes32"
            }],
            name: "contenthash",
            outputs: [{
                internalType: "bytes",
                name: "",
                type: "bytes"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }];
        function mi(e, t) {
            return new ba.a(e,di,t)
        }
        function pi(e, t) {
            return fi.apply(this, arguments)
        }
        function fi() {
            return (fi = Object(p.a)(m.a.mark((function e(t, n) {
                var a, r, o;
                return m.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return a = new ba.a("0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",si,n),
                            r = Object(Br.namehash)(t),
                            e.next = 4,
                            a.resolver(r);
                        case 4:
                            return o = e.sent,
                            e.abrupt("return", mi(o, n).contenthash(r));
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function bi() {
            var e = Oe()
              , t = e.chainId
              , n = e.library
              , a = Object(Ie.c)()
              , r = Object(l.useCallback)((function(e) {
                if (!n || t !== b.a.MAINNET) {
                    if (t === b.a.MAINNET) {
                        var a = function() {
                            var e;
                            return i = null !== (e = i) && void 0 !== e ? e : new A.a(D.provider)
                        }();
                        if (a)
                            return pi(e, a)
                    }
                    throw new Error("Could not construct mainnet ENS resolver")
                }
                return pi(e, n)
            }
            ), [t, n]);
            return Object(l.useCallback)(function() {
                var e = Object(p.a)(m.a.mark((function e(t) {
                    var n, o, i = arguments;
                    return m.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = !(i.length > 1 && void 0 !== i[1]) || i[1],
                                o = Object(De.e)(),
                                n && a($o.pending({
                                    requestId: o,
                                    url: t
                                })),
                                e.abrupt("return", ci(t, r).then((function(e) {
                                    return n && a($o.fulfilled({
                                        url: t,
                                        tokenList: e,
                                        requestId: o
                                    })),
                                    e
                                }
                                )).catch((function(e) {
                                    throw console.debug("Failed to get list at url ".concat(t), e),
                                    n && a($o.rejected({
                                        url: t,
                                        requestId: o,
                                        errorMessage: e.message
                                    })),
                                    e
                                }
                                )));
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), [a, r])
        }
        function yi() {
            var e = Object(Et.a)(["\n  padding: 1rem 0;\n  height: 100%;\n  overflow: auto;\n"]);
            return yi = function() {
                return e
            }
            ,
            e
        }
        function hi() {
            var e = Object(Et.a)(["\n  background-color: ", ";\n  border: solid 1px;\n  border-color: ", ";\n  transition: 200ms;\n  align-items: center;\n  padding: 1rem;\n  border-radius: 20px;\n"]);
            return hi = function() {
                return e
            }
            ,
            e
        }
        function vi() {
            var e = Object(Et.a)(["\n  width: 100%;\n  height: 100%;\n"]);
            return vi = function() {
                return e
            }
            ,
            e
        }
        var gi = Object(gt.e)(Mn)(vi())
          , Ei = Object(gt.e)(ma)(hi(), (function(e) {
            var t = e.active
              , n = e.theme;
            return t ? "".concat(n.colors.success, "19") : "transparent"
        }
        ), (function(e) {
            var t = e.active
              , n = e.theme;
            return t ? n.colors.success : n.colors.tertiary
        }
        ));
        function wi(e) {
            return "list-row-".concat(e.replace(/\./g, "-"))
        }
        var ki = Object(l.memo)((function(e) {
            var t, n = e.listUrl, a = Object(Ie.d)((function(e) {
                return e.lists.byUrl
            }
            )), r = Object(Ie.c)(), o = a[n], i = o.current, s = o.pendingUpdate, d = function(e) {
                var t = or();
                return Boolean(null === t || void 0 === t ? void 0 : t.includes(e))
            }(n), m = Object(l.useCallback)((function() {
                s && r(ri(n))
            }
            ), [r, n, s]), p = Object(l.useCallback)((function() {
                window.confirm("Please confirm you would like to remove this list") && r(ti(n))
            }
            ), [r, n]), f = Object(l.useCallback)((function() {
                r(ni(n))
            }
            ), [r, n]), b = Object(l.useCallback)((function() {
                r(ai(n))
            }
            ), [r, n]), y = Object(u.gb)(c.a.createElement("div", null, c.a.createElement(u.X, null, i && (t = i.version,
            "v".concat(t.major, ".").concat(t.minor, ".").concat(t.patch))), c.a.createElement(u.F, {
                external: !0,
                href: "https://tokenlists.org/token-list?url=".concat(n)
            }, "See"), c.a.createElement(u.g, {
                variant: "danger",
                scale: "xs",
                onClick: p,
                disabled: 1 === Object.keys(a).length
            }, "Remove"), s && c.a.createElement(u.g, {
                variant: "text",
                onClick: m,
                style: {
                    fontSize: "12px"
                }
            }, "Update list")), {
                placement: "right-end",
                trigger: "click"
            }), h = y.targetRef, v = y.tooltip, g = y.tooltipVisible;
            return i ? c.a.createElement(Ei, {
                active: d,
                key: n,
                id: wi(n)
            }, g && v, i.logoURI ? c.a.createElement(To, {
                size: "40px",
                style: {
                    marginRight: "1rem"
                },
                logoURI: i.logoURI,
                alt: "".concat(i.name, " list logo")
            }) : c.a.createElement("div", {
                style: {
                    width: "24px",
                    height: "24px",
                    marginRight: "1rem"
                }
            }), c.a.createElement(Mn, {
                style: {
                    flex: "1"
                }
            }, c.a.createElement(ma, null, c.a.createElement(u.X, {
                bold: !0
            }, i.name)), c.a.createElement(da, {
                mt: "4px"
            }, c.a.createElement(u.X, {
                fontSize: "12px",
                mr: "6px"
            }, i.tokens.length, " tokens"), c.a.createElement("span", {
                ref: h
            }, c.a.createElement(u.t, {
                color: "text",
                width: "12px"
            })))), c.a.createElement(u.Z, {
                checked: d,
                onChange: function() {
                    d ? b() : f()
                }
            })) : null
        }
        ))
          , Ci = gt.e.div(yi());
        function Oi(e) {
            var t = e.setModalView
              , n = e.setImportList
              , a = e.setListUrl
              , r = Object(l.useState)("")
              , o = Object(f.a)(r, 2)
              , i = o[0]
              , s = o[1]
              , d = nr()
              , b = or()
              , y = Object(l.useState)()
              , h = Object(f.a)(y, 2)
              , v = h[0]
              , g = h[1];
            Object(l.useEffect)((function() {
                !v && b && g(b)
            }
            ), [v, b]);
            var E = Object(l.useCallback)((function(e) {
                s(e.target.value)
            }
            ), [])
              , w = bi()
              , k = Object(l.useMemo)((function() {
                return uo(i).length > 0 || Boolean(co(i))
            }
            ), [i])
              , C = Object(l.useMemo)((function() {
                return Object.keys(d).filter((function(e) {
                    return Boolean(d[e].current) && !Boolean(qa.includes(e))
                }
                )).sort((function(e, t) {
                    var n = d[e].current
                      , a = d[t].current;
                    return (null === v || void 0 === v ? void 0 : v.includes(e)) && !(null === v || void 0 === v ? void 0 : v.includes(t)) ? -1 : !(null === v || void 0 === v ? void 0 : v.includes(e)) && (null === v || void 0 === v ? void 0 : v.includes(t)) ? 1 : n && a ? n.name.toLowerCase() < a.name.toLowerCase() ? -1 : n.name.toLowerCase() === a.name.toLowerCase() ? 0 : 1 : n ? -1 : a ? 1 : 0
                }
                ))
            }
            ), [d, v])
              , O = Object(l.useState)()
              , T = Object(f.a)(O, 2)
              , x = T[0]
              , j = T[1]
              , I = Object(l.useState)()
              , A = Object(f.a)(I, 2)
              , N = A[0]
              , S = A[1];
            Object(l.useEffect)((function() {
                function e() {
                    return (e = Object(p.a)(m.a.mark((function e() {
                        return m.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    w(i, !1).then((function(e) {
                                        return j(e)
                                    }
                                    )).catch((function() {
                                        return S("Error importing list")
                                    }
                                    ));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                k ? function() {
                    e.apply(this, arguments)
                }() : (j(void 0),
                "" !== i && S("Enter valid list location")),
                "" === i && S(void 0)
            }
            ), [w, i, k]);
            var P = Object.keys(d).includes(i)
              , R = Object(l.useCallback)((function() {
                x && (n(x),
                t(zi.importList),
                a(i))
            }
            ), [i, n, a, t, x]);
            return c.a.createElement(gi, null, c.a.createElement(Ln, {
                gap: "14px"
            }, c.a.createElement(ma, null, c.a.createElement(u.D, {
                id: "list-add-input",
                scale: "lg",
                placeholder: "https:// or ipfs:// or ENS name",
                value: i,
                onChange: E
            })), N ? c.a.createElement(u.X, {
                color: "failure",
                style: {
                    textOverflow: "ellipsis",
                    overflow: "hidden"
                }
            }, N) : null), x && c.a.createElement(Ln, {
                style: {
                    paddingTop: 0
                }
            }, c.a.createElement(xn, {
                padding: "12px 20px"
            }, c.a.createElement(ca, null, c.a.createElement(da, null, x.logoURI && c.a.createElement(To, {
                logoURI: x.logoURI,
                size: "40px"
            }), c.a.createElement(Ln, {
                gap: "4px",
                style: {
                    marginLeft: "20px"
                }
            }, c.a.createElement(u.X, {
                bold: !0
            }, x.name), c.a.createElement(u.X, {
                color: "textSubtle",
                small: !0
            }, x.tokens.length, " tokens"))), P ? c.a.createElement(da, null, c.a.createElement(u.o, {
                width: "16px",
                mr: "10px"
            }), c.a.createElement(u.X, null, "Loaded")) : c.a.createElement(u.g, {
                width: "fit-content",
                onClick: R
            }, "Import")))), c.a.createElement(Ci, null, c.a.createElement(Ln, {
                gap: "md"
            }, C.map((function(e) {
                return c.a.createElement(ki, {
                    key: e,
                    listUrl: e
                })
            }
            )))))
        }
        function Ti() {
            var e = Object(Et.a)(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);
            return Ti = function() {
                return e
            }
            ,
            e
        }
        function xi() {
            var e = Object(Et.a)(["\n  width: 100%;\n  height: calc(100% - 60px);\n  position: relative;\n  padding-bottom: 60px;\n"]);
            return xi = function() {
                return e
            }
            ,
            e
        }
        var ji = gt.e.div(xi())
          , Ii = gt.e.div(Ti());
        function Ai(e) {
            var t = e.setModalView
              , n = e.setImportToken
              , a = Oe().chainId
              , r = Object(l.useState)("")
              , o = Object(f.a)(r, 2)
              , i = o[0]
              , s = o[1]
              , d = Object(l.useRef)()
              , m = Object(l.useCallback)((function(e) {
                var t = e.target.value
                  , n = ga(t);
                s(n || t)
            }
            ), [])
              , p = Kr(i)
              , b = vr()
              , y = function() {
                var e = Object(Ie.c)();
                return Object(l.useCallback)((function(t, n) {
                    e(mn({
                        chainId: t,
                        address: n
                    }))
                }
                ), [e])
            }()
              , h = Object(l.useCallback)((function() {
                a && b && b.map((function(e) {
                    return y(a, e.address)
                }
                ))
            }
            ), [y, b, a])
              , v = Object(l.useMemo)((function() {
                return a && b.map((function(e) {
                    return c.a.createElement(ca, {
                        key: e.address,
                        width: "100%"
                    }, c.a.createElement(da, null, c.a.createElement(go, {
                        currency: e,
                        size: "20px"
                    }), c.a.createElement(u.E, {
                        external: !0,
                        href: Ea(a, e.address, "address"),
                        color: "textSubtle",
                        ml: "10px"
                    }, e.symbol)), c.a.createElement(da, null, c.a.createElement(u.B, {
                        variant: "text",
                        onClick: function() {
                            return y(a, e.address)
                        }
                    }, c.a.createElement(u.s, null)), c.a.createElement(u.F, {
                        href: Ea(a, e.address, "address")
                    })))
                }
                ))
            }
            ), [b, a, y])
              , g = "" === i || ga(i);
            return c.a.createElement(ji, null, c.a.createElement(Mn, {
                style: {
                    width: "100%",
                    flex: "1 1"
                }
            }, c.a.createElement(Ln, {
                gap: "14px"
            }, c.a.createElement(ma, null, c.a.createElement(u.D, {
                id: "token-search-input",
                scale: "lg",
                placeholder: "0x0000",
                value: i,
                autoComplete: "off",
                ref: d,
                onChange: m,
                isWarning: !g
            })), !g && c.a.createElement(u.X, {
                color: "failure"
            }, "Enter valid token address"), p && c.a.createElement(Lo, {
                token: p,
                showImportView: function() {
                    return t(zi.importToken)
                },
                setImportToken: n,
                style: {
                    height: "fit-content"
                }
            })), v, c.a.createElement(Ii, null, c.a.createElement(u.X, {
                bold: !0,
                color: "textSubtle"
            }, null === b || void 0 === b ? void 0 : b.length, " Custom ", 1 === b.length ? "Token" : "Tokens"), b.length > 0 && c.a.createElement(u.g, {
                variant: "tertiary",
                onClick: h
            }, "Clear all"))))
        }
        function Ni() {
            var e = Object(Et.a)(["\n  width: 100%;\n"]);
            return Ni = function() {
                return e
            }
            ,
            e
        }
        var Si = Object(gt.e)(u.h)(Ni());
        function Pi(e) {
            var t = e.setModalView
              , n = e.setImportList
              , a = e.setImportToken
              , r = e.setListUrl
              , o = Object(l.useState)(!0)
              , i = Object(f.a)(o, 2)
              , s = i[0]
              , d = i[1];
            return c.a.createElement(u.L, null, c.a.createElement(Si, {
                activeIndex: s ? 0 : 1,
                onItemClick: function() {
                    return d((function(e) {
                        return !e
                    }
                    ))
                },
                scale: "sm",
                variant: "subtle",
                mb: "32px"
            }, c.a.createElement(u.i, {
                width: "50%"
            }, "Lists"), c.a.createElement(u.i, {
                width: "50%"
            }, "Tokens")), s ? c.a.createElement(Oi, {
                setModalView: t,
                setImportList: n,
                setListUrl: r
            }) : c.a.createElement(Ai, {
                setModalView: t,
                setImportToken: a
            }))
        }
        function Ri() {
            var e = Object(Et.a)(["\n  height: 3px;\n  width: 3px;\n  background-color: ", ";\n  border-radius: 50%;\n"]);
            return Ri = function() {
                return e
            }
            ,
            e
        }
        function Bi() {
            var e = Object(Et.a)(["\n  position: relative;\n  width: 100%;\n  overflow: auto;\n"]);
            return Bi = function() {
                return e
            }
            ,
            e
        }
        var Ui = gt.e.div(Bi())
          , Li = gt.e.div(Ri(), (function(e) {
            return e.theme.colors.text
        }
        ));
        function Mi(e) {
            var t, n = e.listURL, a = e.list, r = e.onImport, o = Tt().theme, i = Object(Ie.c)(), s = Object(l.useState)(!1), d = Object(f.a)(s, 2), m = d[0], p = d[1], b = nr(), y = bi(), h = Boolean(null === (t = b[n]) || void 0 === t ? void 0 : t.loadingRequestId), v = Object(l.useState)(null), g = Object(f.a)(v, 2), E = g[0], w = g[1], k = Object(l.useCallback)((function() {
                h || (w(null),
                y(n).then((function() {
                    i(ni(n)),
                    r()
                }
                )).catch((function(e) {
                    w(e.message),
                    i(ti(n))
                }
                )))
            }
            ), [h, i, y, n, r]);
            return c.a.createElement(Ui, null, c.a.createElement(Ln, {
                gap: "md"
            }, c.a.createElement(Ln, {
                gap: "md"
            }, c.a.createElement(xn, {
                padding: "12px 20px"
            }, c.a.createElement(ca, null, c.a.createElement(da, null, a.logoURI && c.a.createElement(To, {
                logoURI: a.logoURI,
                size: "40px"
            }), c.a.createElement(Ln, {
                gap: "sm",
                style: {
                    marginLeft: "20px"
                }
            }, c.a.createElement(da, null, c.a.createElement(u.X, {
                bold: !0,
                mr: "6px"
            }, a.name), c.a.createElement(Li, null), c.a.createElement(u.X, {
                small: !0,
                color: "textSubtle",
                ml: "6px"
            }, a.tokens.length, " tokens")), c.a.createElement(u.E, {
                small: !0,
                external: !0,
                ellipsis: !0,
                maxWidth: "90%",
                href: "https://tokenlists.org/token-list?url=".concat(n)
            }, n))))), c.a.createElement(u.H, {
                variant: "danger"
            }, c.a.createElement(u.w, {
                flexDirection: "column"
            }, c.a.createElement(u.X, {
                fontSize: "20px",
                textAlign: "center",
                color: o.colors.failure,
                mb: "16px"
            }, "Import at your own risk"), c.a.createElement(u.X, {
                color: o.colors.failure,
                mb: "8px"
            }, "By adding this list you are implicitly trusting that the data is correct. Anyone can create a list, including creating fake versions of existing lists and lists that claim to represent projects that do not have one."), c.a.createElement(u.X, {
                bold: !0,
                color: o.colors.failure,
                mb: "16px"
            }, "If you purchase a token from this list, you may not be able to sell it back."), c.a.createElement(u.w, {
                alignItems: "center"
            }, c.a.createElement(u.m, {
                name: "confirmed",
                type: "checkbox",
                checked: m,
                onChange: function() {
                    return p(!m)
                },
                scale: "sm"
            }), c.a.createElement(u.X, {
                ml: "10px",
                style: {
                    userSelect: "none"
                }
            }, "I understand")))), c.a.createElement(u.g, {
                disabled: !m,
                onClick: k
            }, "Import"), E ? c.a.createElement(u.X, {
                color: "failure",
                style: {
                    textOverflow: "ellipsis",
                    overflow: "hidden"
                }
            }, E) : null)))
        }
        function Yi() {
            var e = Object(Et.a)(["\n  padding: 24px;\n  height: 100%;\n  max-height: 680px;\n  overflow-y: auto;\n"]);
            return Yi = function() {
                return e
            }
            ,
            e
        }
        function Fi() {
            var e = Object(Et.a)(["\n  max-width: 420px;\n  width: 100%;\n"]);
            return Fi = function() {
                return e
            }
            ,
            e
        }
        function Di() {
            var e = Object(Et.a)(["\n  width: 100%;\n  background-color: ", ";\n  text-align: center;\n"]);
            return Di = function() {
                return e
            }
            ,
            e
        }
        var zi, Ki = gt.e.div(Di(), (function(e) {
            return e.theme.colors.backgroundAlt
        }
        )), _i = Object(gt.e)(u.N)(Fi()), Xi = Object(gt.e)(u.L)(Yi());
        function qi(e) {
            var t, n = e.onDismiss, a = void 0 === n ? function() {
                return null
            }
            : n, r = e.onCurrencySelect, o = e.selectedCurrency, i = e.otherSelectedCurrency, s = e.showCommonBases, d = void 0 !== s && s, m = Object(l.useState)(zi.search), p = Object(f.a)(m, 2), b = p[0], y = p[1], h = Object(l.useCallback)((function(e) {
                r(e),
                a()
            }
            ), [a, r]), v = function(e) {
                var t = Object(l.useRef)();
                return Object(l.useEffect)((function() {
                    t.current = e
                }
                ), [e]),
                t.current
            }(b), g = Object(l.useState)(), w = Object(f.a)(g, 2), k = w[0], C = w[1], O = Object(l.useState)(), T = Object(f.a)(O, 2), x = T[0], j = T[1], I = Object(l.useState)(), A = Object(f.a)(I, 2), N = A[0], S = A[1], P = (t = {},
            Object(E.a)(t, zi.search, {
                title: "Select a token",
                onBack: void 0
            }),
            Object(E.a)(t, zi.manage, {
                title: "Manage",
                onBack: function() {
                    return y(zi.search)
                }
            }),
            Object(E.a)(t, zi.importToken, {
                title: "Import Tokens",
                onBack: function() {
                    return y(v && v !== zi.importToken ? v : zi.search)
                }
            }),
            Object(E.a)(t, zi.importList, {
                title: "Import List",
                onBack: function() {
                    return y(zi.search)
                }
            }),
            t);
            return c.a.createElement(_i, {
                minWidth: "320px"
            }, c.a.createElement(u.O, null, c.a.createElement(u.Q, null, P[b].onBack && c.a.createElement(u.K, {
                onBack: P[b].onBack
            }), c.a.createElement(u.y, null, P[b].title)), c.a.createElement(u.M, {
                onDismiss: a
            })), c.a.createElement(Xi, null, b === zi.search ? c.a.createElement(Go, {
                onCurrencySelect: h,
                selectedCurrency: o,
                otherSelectedCurrency: i,
                showCommonBases: d,
                showImportView: function() {
                    return y(zi.importToken)
                },
                setImportToken: C
            }) : b === zi.importToken && k ? c.a.createElement(Zo, {
                tokens: [k],
                handleCurrencySelect: h
            }) : b === zi.importList && x && N ? c.a.createElement(Mi, {
                list: x,
                listURL: N,
                onImport: function() {
                    return y(zi.manage)
                }
            }) : b === zi.manage ? c.a.createElement(Pi, {
                setModalView: y,
                setImportToken: C,
                setImportList: j,
                setListUrl: S
            }) : "", b === zi.search && c.a.createElement(Ki, null, c.a.createElement(u.g, {
                scale: "sm",
                variant: "text",
                onClick: function() {
                    return y(zi.manage)
                },
                className: "list-token-manage-button"
            }, "Manage Tokens"))))
        }
        function Wi() {
            var e = Object(Et.a)(["\n  color: ", ";\n  width: 0;\n  position: relative;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: transparent;\n  font-size: 16px;\n  text-align: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"]);
            return Wi = function() {
                return e
            }
            ,
            e
        }
        !function(e) {
            e[e.search = 0] = "search",
            e[e.manage = 1] = "manage",
            e[e.importToken = 2] = "importToken",
            e[e.importList = 3] = "importList"
        }(zi || (zi = {}));
        var Vi = gt.e.input(Wi(), (function(e) {
            var t = e.error
              , n = e.theme;
            return t ? n.colors.failure : n.colors.text
        }
        ), (function(e) {
            var t = e.align;
            return t && t
        }
        ), (function(e) {
            return e.theme.colors.textSubtle
        }
        ))
          , Hi = RegExp("^\\d*(?:\\\\[.])?\\d*$")
          , Gi = c.a.memo((function(e) {
            var t = e.value
              , n = e.onUserInput
              , a = e.placeholder
              , r = Object(Wt.a)(e, ["value", "onUserInput", "placeholder"]);
            return c.a.createElement(Vi, Object.assign({}, r, {
                value: t,
                onChange: function(e) {
                    var t;
                    ("" === (t = e.target.value.replace(/,/g, ".")) || Hi.test(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))) && n(t)
                },
                inputMode: "decimal",
                title: "Token Amount",
                autoComplete: "off",
                autoCorrect: "off",
                type: "text",
                pattern: "^[0-9]*[.,]?[0-9]*$",
                placeholder: a || "0.0",
                minLength: 1,
                maxLength: 79,
                spellCheck: "false"
            }))
        }
        ));
        function Qi() {
            var e = Object(Et.a)(["\n  border-radius: 16px;\n  background-color: ", ";\n  box-shadow: ", ";\n"]);
            return Qi = function() {
                return e
            }
            ,
            e
        }
        function Ji() {
            var e = Object(Et.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: ", ";\n  background-color: ", ";\n  z-index: 1;\n"]);
            return Ji = function() {
                return e
            }
            ,
            e
        }
        function Zi() {
            var e = Object(Et.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);
            return Zi = function() {
                return e
            }
            ,
            e
        }
        function $i() {
            var e = Object(Et.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  color: ", ";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n  span:hover {\n    cursor: pointer;\n    color: ", ";\n  }\n"]);
            return $i = function() {
                return e
            }
            ,
            e
        }
        function el() {
            var e = Object(Et.a)(["\n  align-items: center;\n  height: 34px;\n  font-size: 16px;\n  font-weight: 500;\n  background-color: transparent;\n  color: ", ";\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  padding: 0 0.5rem;\n  :focus,\n  :hover {\n    background-color: ", ";\n  }\n"]);
            return el = function() {
                return e
            }
            ,
            e
        }
        function tl() {
            var e = Object(Et.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: ", ";\n"]);
            return tl = function() {
                return e
            }
            ,
            e
        }
        var nl = gt.e.div(tl(), (function(e) {
            return e.selected ? "0.75rem 0.5rem 0.75rem 1rem" : "0.75rem 0.75rem 0.75rem 1rem"
        }
        ))
          , al = gt.e.button(el(), (function(e) {
            var t = e.selected
              , n = e.theme;
            return t ? n.colors.text : "#FFFFFF"
        }
        ), (function(e) {
            var t = e.theme;
            return Object(Da.a)(.05, t.colors.input)
        }
        ))
          , rl = gt.e.div($i(), (function(e) {
            return e.theme.colors.text
        }
        ), (function(e) {
            var t = e.theme;
            return Object(Da.a)(.2, t.colors.textSubtle)
        }
        ))
          , ol = gt.e.span(Zi())
          , il = gt.e.div(Ji(), (function(e) {
            return e.hideInput ? "8px" : "20px"
        }
        ), (function(e) {
            return e.theme.colors.background
        }
        ))
          , ll = gt.e.div(Qi(), (function(e) {
            return e.theme.colors.input
        }
        ), (function(e) {
            return e.theme.shadows.inset
        }
        ));
        function cl(e) {
            var t = e.value
              , n = e.onUserInput
              , a = e.onMax
              , r = e.showMaxButton
              , o = e.label
              , i = e.onCurrencySelect
              , l = e.currency
              , s = e.disableCurrencySelect
              , d = void 0 !== s && s
              , m = e.hideBalance
              , p = void 0 !== m && m
              , b = e.pair
              , y = void 0 === b ? null : b
              , h = e.hideInput
              , v = void 0 !== h && h
              , g = e.otherCurrency
              , E = e.id
              , w = e.showCommonBases
              , k = Oe().account
              , C = Gr(null !== k && void 0 !== k ? k : void 0, null !== l && void 0 !== l ? l : void 0)
              , O = Object(Se.b)().t
              , T = o || O("Input")
              , x = Object(u.fb)(c.a.createElement(qi, {
                onCurrencySelect: i,
                selectedCurrency: l,
                otherSelectedCurrency: g,
                showCommonBases: w
            }))
              , j = Object(f.a)(x, 1)[0];
            return c.a.createElement(il, {
                id: E
            }, c.a.createElement(ll, {
                hideInput: v
            }, !v && c.a.createElement(rl, null, c.a.createElement(ca, null, c.a.createElement(u.X, {
                fontSize: "14px"
            }, T), k && c.a.createElement(u.X, {
                onClick: a,
                fontSize: "14px",
                style: {
                    display: "inline",
                    cursor: "pointer"
                }
            }, !p && l && C ? "Balance: ".concat(null === C || void 0 === C ? void 0 : C.toSignificant(6)) : " -"))), c.a.createElement(nl, {
                style: v ? {
                    padding: "0",
                    borderRadius: "8px"
                } : {},
                selected: d
            }, !v && c.a.createElement(c.a.Fragment, null, c.a.createElement(Gi, {
                className: "token-amount-input",
                value: t,
                onUserInput: function(e) {
                    n(e)
                }
            }), k && l && r && "To" !== o && c.a.createElement(u.g, {
                onClick: a,
                scale: "sm",
                variant: "text"
            }, "MAX")), c.a.createElement(al, {
                selected: !!l,
                className: "open-currency-select-button",
                onClick: function() {
                    d || j()
                }
            }, c.a.createElement(ol, null, y ? c.a.createElement(ko, {
                currency0: y.token0,
                currency1: y.token1,
                size: 16,
                margin: !0
            }) : l ? c.a.createElement(go, {
                currency: l,
                size: "24px",
                style: {
                    marginRight: "8px"
                }
            }) : null, y ? c.a.createElement(u.X, {
                id: "pair"
            }, null === y || void 0 === y ? void 0 : y.token0.symbol, ":", null === y || void 0 === y ? void 0 : y.token1.symbol) : c.a.createElement(u.X, {
                id: "pair"
            }, (l && l.symbol && l.symbol.length > 20 ? "".concat(l.symbol.slice(0, 4), "...").concat(l.symbol.slice(l.symbol.length - 5, l.symbol.length)) : null === l || void 0 === l ? void 0 : l.symbol) || O("Select a currency")), !d && c.a.createElement(u.p, null))))))
        }
        function ul(e) {
            var t = ga(e)
              , n = function(e) {
                var t, n, a, r = Ho(e, 200), o = Object(l.useMemo)((function() {
                    if (!r || !ga(r))
                        return [void 0];
                    try {
                        return r ? [Object(Br.namehash)("".concat(r.toLowerCase().substr(2), ".addr.reverse"))] : [void 0]
                    } catch (e) {
                        return [void 0]
                    }
                }
                ), [r]), i = ot(Ar(!1), "resolver", o), c = null === (t = i.result) || void 0 === t ? void 0 : t[0], u = ot(Nr(c && !so(c) ? c : void 0, !1), "name", o), s = r !== e;
                return {
                    ENSName: s ? null : null !== (n = null === (a = u.result) || void 0 === a ? void 0 : a[0]) && void 0 !== n ? n : null,
                    loading: s || i.loading || u.loading
                }
            }(t || void 0)
              , a = function(e) {
                var t, n, a, r = Ho(e, 200), o = Object(l.useMemo)((function() {
                    if (!r)
                        return [void 0];
                    try {
                        return r ? [Object(Br.namehash)(r)] : [void 0]
                    } catch (e) {
                        return [void 0]
                    }
                }
                ), [r]), i = ot(Ar(!1), "resolver", o), c = null === (t = i.result) || void 0 === t ? void 0 : t[0], u = ot(Nr(c && !so(c) ? c : void 0, !1), "addr", o), s = r !== e;
                return {
                    address: s ? null : null !== (n = null === (a = u.result) || void 0 === a ? void 0 : a[0]) && void 0 !== n ? n : null,
                    loading: s || i.loading || u.loading
                }
            }(e);
            return {
                loading: n.loading || a.loading,
                address: t || a.address,
                name: n.ENSName ? n.ENSName : !t && a.address && e || null
            }
        }
        var sl = n(154);
        function dl(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : we;
            if (e && !t)
                return !1;
            if (t && !e)
                return !0;
            if (e && t) {
                if (e.tradeType !== t.tradeType || !Object(b.o)(e.inputAmount.currency, t.inputAmount.currency) || !Object(b.o)(t.outputAmount.currency, t.outputAmount.currency))
                    throw new Error("Trades are not comparable");
                return n.equalTo(we) ? e.executionPrice.lessThan(t.executionPrice) : e.executionPrice.raw.multiply(n.add(ke)).lessThan(t.executionPrice)
            }
        }
        function ml(e, t) {
            var n = Oe().chainId
              , a = n ? [it(e, n), it(t, n)] : [void 0, void 0]
              , r = Object(f.a)(a, 2)
              , o = r[0]
              , i = r[1]
              , c = Object(l.useMemo)((function() {
                var e, t, a, r, l;
                if (!n)
                    return [];
                var c = null !== (e = oe[n]) && void 0 !== e ? e : []
                  , u = o && null !== (t = null === (a = ie[n]) || void 0 === a ? void 0 : a[o.address]) && void 0 !== t ? t : []
                  , s = i && null !== (r = null === (l = ie[n]) || void 0 === l ? void 0 : l[i.address]) && void 0 !== r ? r : [];
                return [].concat(Object(O.a)(c), Object(O.a)(u), Object(O.a)(s))
            }
            ), [n, o, i])
              , u = Object(l.useMemo)((function() {
                return sr()(c, (function(e) {
                    return c.map((function(t) {
                        return [e, t]
                    }
                    ))
                }
                ))
            }
            ), [c])
              , s = dt(Object(l.useMemo)((function() {
                return o && i ? [[o, i]].concat(Object(O.a)(c.map((function(e) {
                    return [o, e]
                }
                ))), Object(O.a)(c.map((function(e) {
                    return [i, e]
                }
                ))), Object(O.a)(u)).filter((function(e) {
                    return Boolean(e[0] && e[1])
                }
                )).filter((function(e) {
                    var t = Object(f.a)(e, 2)
                      , n = t[0]
                      , a = t[1];
                    return n.address !== a.address
                }
                )).filter((function(e) {
                    var t = Object(f.a)(e, 2)
                      , a = t[0]
                      , r = t[1];
                    if (!n)
                        return !0;
                    var o = le[n]
                      , i = null === o || void 0 === o ? void 0 : o[a.address]
                      , l = null === o || void 0 === o ? void 0 : o[r.address];
                    return !i && !l || !(i && !i.find((function(e) {
                        return r.equals(e)
                    }
                    ))) && !(l && !l.find((function(e) {
                        return a.equals(e)
                    }
                    )))
                }
                )) : []
            }
            ), [o, i, c, u, n]));
            return Object(l.useMemo)((function() {
                return Object.values(s.filter((function(e) {
                    return Boolean(e[0] === ut.EXISTS && e[1])
                }
                )).reduce((function(e, t) {
                    var n, a = Object(f.a)(t, 2)[1];
                    return e[a.liquidityToken.address] = null !== (n = e[a.liquidityToken.address]) && void 0 !== n ? n : a,
                    e
                }
                ), {}))
            }
            ), [s])
        }
        var pl;
        function fl(e, t) {
            var n = Yr()
              , a = Oe().chainId
              , r = it(e, a)
              , o = it(t, a);
            if (n) {
                if (r && Object.keys(n).includes(r.address))
                    return !0;
                if (o && Object.keys(n).includes(o.address))
                    return !0
            }
            return !1
        }
        !function(e) {
            e.INPUT = "INPUT",
            e.OUTPUT = "OUTPUT"
        }(pl || (pl = {}));
        var bl = Object(De.b)("swap/selectCurrency")
          , yl = Object(De.b)("swap/switchCurrencies")
          , hl = Object(De.b)("swap/typeInput")
          , vl = Object(De.b)("swap/replaceSwapState")
          , gl = Object(De.b)("swap/setRecipient")
          , El = new b.g(b.e.BigInt(25),b.e.BigInt(1e4))
          , wl = new b.g(b.e.BigInt(1e4),b.e.BigInt(1e4))
          , kl = wl.subtract(El);
        function Cl(e) {
            var t = e ? wl.subtract(e.route.pairs.reduce((function(e) {
                return e.multiply(kl)
            }
            ), wl)) : void 0
              , n = e && t ? e.priceImpact.subtract(t) : void 0;
            return {
                priceImpactWithoutFee: n ? new b.g(null === n || void 0 === n ? void 0 : n.numerator,null === n || void 0 === n ? void 0 : n.denominator) : void 0,
                realizedLPFee: t && e && (e.inputAmount instanceof b.k ? new b.k(e.inputAmount.token,t.multiply(e.inputAmount.raw).quotient) : b.c.ether(t.multiply(e.inputAmount.raw).quotient))
            }
        }
        function Ol(e, t) {
            var n, a, r = (a = t,
            new b.g(b.e.BigInt(a),b.e.BigInt(1e4)));
            return n = {},
            Object(E.a)(n, pl.INPUT, null === e || void 0 === e ? void 0 : e.maximumAmountIn(r)),
            Object(E.a)(n, pl.OUTPUT, null === e || void 0 === e ? void 0 : e.minimumAmountOut(r)),
            n
        }
        function Tl(e) {
            return (null === e || void 0 === e ? void 0 : e.lessThan(ve)) ? (null === e || void 0 === e ? void 0 : e.lessThan(ye)) ? (null === e || void 0 === e ? void 0 : e.lessThan(be)) ? (null === e || void 0 === e ? void 0 : e.lessThan(fe)) ? 0 : 1 : 2 : 3 : 4
        }
        function xl() {
            return Object(Ie.d)((function(e) {
                return e.swap
            }
            ))
        }
        function jl() {
            var e = Object(Ie.c)()
              , t = Object(l.useCallback)((function(t, n) {
                e(bl({
                    field: t,
                    currencyId: n instanceof b.j ? n.address : n === b.d ? "BNB" : ""
                }))
            }
            ), [e]);
            return {
                onSwitchTokens: Object(l.useCallback)((function() {
                    e(yl())
                }
                ), [e]),
                onCurrencySelection: t,
                onUserInput: Object(l.useCallback)((function(t, n) {
                    e(hl({
                        field: t,
                        typedValue: n
                    }))
                }
                ), [e]),
                onChangeRecipient: Object(l.useCallback)((function(t) {
                    e(gl({
                        recipient: t
                    }))
                }
                ), [e])
            }
        }
        function Il(e, t) {
            if (e && t)
                try {
                    var n = Object(sl.parseUnits)(e, t.decimals).toString();
                    if ("0" !== n)
                        return t instanceof b.j ? new b.k(t,b.e.BigInt(n)) : b.c.ether(b.e.BigInt(n))
                } catch (a) {
                    console.debug('Failed to parse input amount: "'.concat(e, '"'), a)
                }
        }
        var Al = ["0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f", "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a", "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"];
        function Nl(e, t) {
            return e.route.path.some((function(e) {
                return e.address === t
            }
            )) || e.route.pairs.some((function(e) {
                return e.liquidityToken.address === t
            }
            ))
        }
        function Sl() {
            var e, t, n, a, r, o, i, c = Oe().account, u = xl(), s = u.independentField, d = u.typedValue, m = u[pl.INPUT].currencyId, p = u[pl.OUTPUT].currencyId, y = u.recipient, h = _r(m), v = _r(p), g = ul(null !== y && void 0 !== y ? y : void 0), w = null !== (e = null === y ? c : g.address) && void 0 !== e ? e : null, k = Hr(null !== c && void 0 !== c ? c : void 0, [null !== h && void 0 !== h ? h : void 0, null !== v && void 0 !== v ? v : void 0]), C = s === pl.INPUT, O = Il(d, null !== (t = C ? h : v) && void 0 !== t ? t : void 0), T = function(e, t) {
                var n = ml(null === e || void 0 === e ? void 0 : e.currency, t)
                  , a = yr()
                  , r = Object(f.a)(a, 1)[0];
                return Object(l.useMemo)((function() {
                    if (e && t && n.length > 0) {
                        var a;
                        if (r)
                            return null !== (a = b.l.bestTradeExactIn(n, e, t, {
                                maxHops: 1,
                                maxNumResults: 1
                            })[0]) && void 0 !== a ? a : null;
                        for (var o = null, i = 1; i <= 3; i++) {
                            var l, c = null !== (l = b.l.bestTradeExactIn(n, e, t, {
                                maxHops: i,
                                maxNumResults: 1
                            })[0]) && void 0 !== l ? l : null;
                            dl(o, c, Ee) && (o = c)
                        }
                        return o
                    }
                    return null
                }
                ), [n, e, t, r])
            }(C ? O : void 0, null !== v && void 0 !== v ? v : void 0), x = function(e, t) {
                var n = ml(e, null === t || void 0 === t ? void 0 : t.currency)
                  , a = yr()
                  , r = Object(f.a)(a, 1)[0];
                return Object(l.useMemo)((function() {
                    if (e && t && n.length > 0) {
                        var a;
                        if (r)
                            return null !== (a = b.l.bestTradeExactOut(n, e, t, {
                                maxHops: 1,
                                maxNumResults: 1
                            })[0]) && void 0 !== a ? a : null;
                        for (var o = null, i = 1; i <= 3; i++) {
                            var l, c = null !== (l = b.l.bestTradeExactOut(n, e, t, {
                                maxHops: i,
                                maxNumResults: 1
                            })[0]) && void 0 !== l ? l : null;
                            dl(o, c, Ee) && (o = c)
                        }
                        return o
                    }
                    return null
                }
                ), [e, t, n, r])
            }(null !== h && void 0 !== h ? h : void 0, C ? void 0 : O), j = C ? T : x, I = (n = {},
            Object(E.a)(n, pl.INPUT, k[0]),
            Object(E.a)(n, pl.OUTPUT, k[1]),
            n), A = (a = {},
            Object(E.a)(a, pl.INPUT, null !== h && void 0 !== h ? h : void 0),
            Object(E.a)(a, pl.OUTPUT, null !== v && void 0 !== v ? v : void 0),
            a);
            (c || (r = "Connect Wallet"),
            O) || (r = null !== (o = r) && void 0 !== o ? o : "Enter an amount");
            A[pl.INPUT] && A[pl.OUTPUT] || (r = null !== (i = r) && void 0 !== i ? i : "Select a token");
            var N, S, P = ga(w);
            w && P ? (-1 !== Al.indexOf(P) || T && Nl(T, P) || x && Nl(x, P)) && (r = null !== (N = r) && void 0 !== N ? N : "Invalid recipient") : r = null !== (S = r) && void 0 !== S ? S : "Enter a recipient";
            var R = hr()
              , B = Object(f.a)(R, 1)[0]
              , U = j && B && Ol(j, B)
              , L = [I[pl.INPUT], U ? U[pl.INPUT] : null]
              , M = L[0]
              , Y = L[1];
            return M && Y && M.lessThan(Y) && (r = "Insufficient " + Y.currency.symbol + " balance"),
            {
                currencies: A,
                currencyBalances: I,
                parsedAmount: O,
                v2Trade: null !== j && void 0 !== j ? j : void 0,
                inputError: r
            }
        }
        function Pl(e) {
            if ("string" === typeof e) {
                var t = ga(e);
                if (t)
                    return t;
                if ("BNB" === e.toUpperCase())
                    return "BNB";
                if (!1 === t)
                    return "BNB"
            }
            return null !== "BNB" ? "BNB" : ""
        }
        var Rl, Bl, Ul = /^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/, Ll = /^0x[a-fA-F0-9]{40}$/;
        function Ml(e) {
            var t, n = Pl(e.inputCurrency), a = Pl(e.outputCurrency);
            n === a && ("string" === typeof e.outputCurrency ? n = "" : a = "");
            var r, o = function(e) {
                if ("string" !== typeof e)
                    return null;
                var t = ga(e);
                return t || (Ul.test(e) || Ll.test(e) ? e : null)
            }(e.recipient);
            return t = {},
            Object(E.a)(t, pl.INPUT, {
                currencyId: n
            }),
            Object(E.a)(t, pl.OUTPUT, {
                currencyId: a
            }),
            Object(E.a)(t, "typedValue", "string" !== typeof (r = e.exactAmount) || isNaN(parseFloat(r)) ? "" : r),
            Object(E.a)(t, "independentField", function(e) {
                return "string" === typeof e && "output" === e.toLowerCase() ? pl.OUTPUT : pl.INPUT
            }(e.exactField)),
            Object(E.a)(t, "recipient", o),
            t
        }
        function Yl() {
            var e = Oe().chainId
              , t = Object(Ie.c)()
              , n = function() {
                var e = Object(Le.g)().search;
                return Object(l.useMemo)((function() {
                    return e && e.length > 1 ? Object(an.parse)(e, {
                        parseArrays: !1,
                        ignoreQueryPrefix: !0
                    }) : {}
                }
                ), [e])
            }()
              , a = Object(l.useState)()
              , r = Object(f.a)(a, 2)
              , o = r[0]
              , i = r[1];
            return Object(l.useEffect)((function() {
                if (e) {
                    var a = Ml(n);
                    t(vl({
                        typedValue: a.typedValue,
                        field: a.independentField,
                        inputCurrencyId: a[pl.INPUT].currencyId,
                        outputCurrencyId: a[pl.OUTPUT].currencyId,
                        recipient: null
                    })),
                    i({
                        inputCurrencyId: a[pl.INPUT].currencyId,
                        outputCurrencyId: a[pl.OUTPUT].currencyId
                    })
                }
            }
            ), [t, e]),
            o
        }
        function Fl(e) {
            var t, n, a = e.rawSlippage, r = e.setRawSlippage, o = e.deadline, i = e.setDeadline, s = Object(l.useState)(""), d = Object(f.a)(s, 2), m = d[0], p = d[1], b = Object(l.useState)(""), y = Object(f.a)(b, 2), h = y[0], v = y[1], g = "" === m || (a / 100).toFixed(2) === Number.parseFloat(m).toFixed(2), E = "" === h || (o / 60).toString() === h;
            function w(e) {
                p(e);
                try {
                    var t = Number.parseInt((100 * Number.parseFloat(e)).toString());
                    !Number.isNaN(t) && t < 5e3 && r(t)
                } catch (n) {}
            }
            function k(e) {
                v(e);
                try {
                    var t = 60 * Number.parseInt(e);
                    !Number.isNaN(t) && t > 0 && i(t)
                } catch (n) {}
            }
            return t = "" === m || g ? g && a < 50 ? Rl.RiskyLow : g && a > 500 ? Rl.RiskyHigh : void 0 : Rl.InvalidInput,
            n = "" === h || E ? void 0 : Bl.InvalidInput,
            c.a.createElement(Ln, {
                gap: "md"
            }, c.a.createElement(Ln, {
                gap: "sm"
            }, c.a.createElement(da, null, c.a.createElement(u.X, {
                fontSize: "14px"
            }, "Slippage tolerance"), c.a.createElement(Zr, {
                text: "Your transaction will revert if the price changes unfavorably by more than this percentage.",
                ml: "4px"
            })), c.a.createElement(u.w, {
                flexWrap: ["wrap", "wrap", "nowrap"]
            }, c.a.createElement(u.x, {
                gridTemplateColumns: "1fr 1fr 1fr",
                gridGap: "8px",
                mb: ["8px", "8px", 0],
                mr: [0, 0, "8px"]
            }, c.a.createElement(u.g, {
                onClick: function() {
                    p(""),
                    r(10)
                },
                variant: 10 === a ? "primary" : "tertiary"
            }, "0.1%"), c.a.createElement(u.g, {
                onClick: function() {
                    p(""),
                    r(50)
                },
                variant: 50 === a ? "primary" : "tertiary"
            }, "0.5%"), c.a.createElement(u.g, {
                onClick: function() {
                    p(""),
                    r(100)
                },
                variant: 100 === a ? "primary" : "tertiary"
            }, "1%")), c.a.createElement(ca, null, c.a.createElement(u.D, {
                scale: "lg",
                placeholder: (a / 100).toFixed(2),
                value: m,
                onBlur: function() {
                    w((a / 100).toFixed(2))
                },
                onChange: function(e) {
                    return w(e.target.value)
                },
                isWarning: !g,
                isSuccess: ![10, 50, 100].includes(a)
            }), c.a.createElement(u.X, {
                color: "primary",
                bold: !0,
                ml: "8px"
            }, "%"))), !!t && c.a.createElement(ca, {
                style: {
                    fontSize: "14px",
                    paddingTop: "7px",
                    color: t === Rl.InvalidInput ? "red" : "#F3841E"
                }
            }, t === Rl.InvalidInput ? "Enter a valid slippage percentage" : t === Rl.RiskyLow ? "Your transaction may fail" : "Your transaction may be frontrun")), c.a.createElement(Ln, {
                gap: "sm"
            }, c.a.createElement(da, null, c.a.createElement(u.X, {
                fontSize: "14px"
            }, "Transaction deadline"), c.a.createElement(Zr, {
                text: "Your transaction will revert if it is pending for more than this long.",
                ml: "4px"
            })), c.a.createElement(da, null, c.a.createElement(u.D, {
                color: n ? "red" : void 0,
                onBlur: function() {
                    k((o / 60).toString())
                },
                placeholder: (o / 60).toString(),
                value: h,
                onChange: function(e) {
                    return k(e.target.value)
                }
            }), c.a.createElement(u.X, {
                pl: "8px",
                fontSize: "14px"
            }, "minutes"))))
        }
        !function(e) {
            e.InvalidInput = "InvalidInput",
            e.RiskyLow = "RiskyLow",
            e.RiskyHigh = "RiskyHigh"
        }(Rl || (Rl = {})),
        function(e) {
            e.InvalidInput = "InvalidInput"
        }(Bl || (Bl = {}));
        var Dl = function(e) {
            var t = e.onDismiss
              , n = Object(l.useState)(!1)
              , a = Object(f.a)(n, 2)
              , r = a[0]
              , o = a[1]
              , i = hr()
              , s = Object(f.a)(i, 2)
              , d = s[0]
              , m = s[1]
              , p = function() {
                var e = Object(Ie.c)();
                return [Object(Ie.d)((function(e) {
                    return e.user.userDeadline
                }
                )), Object(l.useCallback)((function(t) {
                    e(sn({
                        userDeadline: t
                    }))
                }
                ), [e])]
            }()
              , b = Object(f.a)(p, 2)
              , y = b[0]
              , h = b[1]
              , v = br()
              , g = Object(f.a)(v, 2)
              , E = g[0]
              , w = g[1]
              , k = yr()
              , C = Object(f.a)(k, 2)
              , O = C[0]
              , T = C[1]
              , x = pr()
              , j = Object(f.a)(x, 2)
              , I = j[0]
              , A = j[1]
              , N = jl().onChangeRecipient;
            return r ? c.a.createElement(u.J, {
                title: "Are you sure?",
                onBack: function() {
                    return o(!1)
                },
                onDismiss: t,
                style: {
                    maxWidth: "420px"
                }
            }, c.a.createElement(u.L, null, c.a.createElement(u.H, {
                variant: "warning",
                mb: "24px"
            }, c.a.createElement(u.X, null, "Expert mode turns off the \u201cConfirm\u201d transaction prompt, and allows high slippage trades that often result in bad rates and lost funds.")), c.a.createElement(u.X, {
                mb: "24px"
            }, "Only use this mode if you know what you\u2019re doing."), c.a.createElement(u.g, {
                variant: "danger",
                onClick: function() {
                    "confirm" === window.prompt('Please type the word "confirm" to enable expert mode.') && (w(),
                    o(!1))
                }
            }, "Turn On Expert Mode"))) : c.a.createElement(u.J, {
                title: "Settings",
                headerBackground: "gradients.cardHeader",
                onDismiss: t
            }, c.a.createElement(u.L, null, c.a.createElement(Ln, {
                gap: "md",
                style: {
                    padding: "1rem"
                }
            }, c.a.createElement(u.X, {
                bold: !0,
                fontSize: "20px"
            }, "Transaction Settings"), c.a.createElement(Fl, {
                rawSlippage: d,
                setRawSlippage: m,
                deadline: y,
                setDeadline: h
            }), c.a.createElement(u.X, {
                bold: !0,
                fontSize: "20px",
                mt: "32px"
            }, "Interface Settings"), c.a.createElement(ca, null, c.a.createElement(da, null, c.a.createElement(u.X, {
                fontSize: "14px"
            }, "Toggle Expert Mode"), c.a.createElement(Zr, {
                text: "Bypasses confirmation modals and allows high slippage trades. Use at your own risk.",
                ml: "4px"
            })), c.a.createElement(u.S, {
                id: "toggle-expert-mode-button",
                checked: E,
                onChange: E ? function() {
                    N(null),
                    w()
                }
                : function() {
                    return o(!0)
                }
            })), c.a.createElement(ca, null, c.a.createElement(da, null, c.a.createElement(u.X, {
                fontSize: "14px"
            }, "Disable Multihops"), c.a.createElement(Zr, {
                text: "Restricts swaps to direct pairs only.",
                ml: "4px"
            })), c.a.createElement(u.S, {
                id: "toggle-disable-multihop-button",
                checked: O,
                onChange: function() {
                    T(!O)
                }
            })), c.a.createElement(u.w, {
                justifyContent: "space-between",
                alignItems: "center",
                mb: "8px"
            }, c.a.createElement(da, null, c.a.createElement(u.X, {
                fontSize: "14px"
            }, "Audio"), c.a.createElement(Zr, {
                text: "\ud83d\udc30 Turn down your volume a bit before you swap",
                ml: "4px"
            })), c.a.createElement(u.S, {
                checked: I,
                onChange: A
            })))))
        };
        function zl() {
            var e = Object(u.fb)(c.a.createElement(Dl, null))
              , t = Object(f.a)(e, 1)[0]
              , n = br()
              , a = Object(f.a)(n, 1)[0];
            return c.a.createElement(u.R, {
                show: a
            }, c.a.createElement(u.g, {
                variant: "text",
                p: 0,
                id: "open-settings-dialog-button"
            }, c.a.createElement(u.ab, {
                color: "primary",
                width: "24px"
            })))
        }
        var Kl = Object(De.b)("transactions/addTransaction")
          , _l = Object(De.b)("transactions/clearAllTransactions")
          , Xl = Object(De.b)("transactions/finalizeTransaction")
          , ql = Object(De.b)("transactions/checkedTransaction");
        function Wl() {
            var e = Oe()
              , t = e.chainId
              , n = e.account
              , a = Object(Ie.c)();
            return Object(l.useCallback)((function(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , o = r.summary
                  , i = r.approval
                  , l = r.claim;
                if (n && t) {
                    var c = e.hash;
                    if (!c)
                        throw Error("No transaction hash found.");
                    a(Kl({
                        hash: c,
                        from: n,
                        chainId: t,
                        approval: i,
                        summary: o,
                        claim: l
                    }))
                }
            }
            ), [a, t, n])
        }
        function Vl() {
            var e, t = Oe().chainId, n = Object(Ie.d)((function(e) {
                return e.transactions
            }
            ));
            return t && null !== (e = n[t]) && void 0 !== e ? e : {}
        }
        function Hl(e) {
            return (new Date).getTime() - e.addedTime < 864e5
        }
        function Gl() {
            var e = Object(Et.a)(["\n  color: ", ";\n"]);
            return Gl = function() {
                return e
            }
            ,
            e
        }
        function Ql() {
            var e = Object(Et.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-decoration: none !important;\n  border-radius: 0.5rem;\n  padding: 0.25rem 0rem;\n  font-weight: 500;\n  font-size: 0.825rem;\n  color: ", ";\n"]);
            return Ql = function() {
                return e
            }
            ,
            e
        }
        var Jl = gt.e.div(Ql(), (function(e) {
            return e.theme.colors.primary
        }
        ))
          , Zl = gt.e.div(Gl(), (function(e) {
            var t = e.pending
              , n = e.success
              , a = e.theme;
            return t ? a.colors.primary : n ? a.colors.success : a.colors.failure
        }
        ));
        function $l(e) {
            var t, n, a = e.tx, r = Oe().chainId, o = null === a || void 0 === a ? void 0 : a.summary, i = !(null === a || void 0 === a ? void 0 : a.receipt), l = !i && a && (1 === (null === (t = a.receipt) || void 0 === t ? void 0 : t.status) || "undefined" === typeof (null === (n = a.receipt) || void 0 === n ? void 0 : n.status));
            return r ? c.a.createElement(Jl, {
                pending: i,
                success: l
            }, c.a.createElement(u.F, {
                href: Ea(r, a.hash, "transaction")
            }, null !== o && void 0 !== o ? o : a.hash), c.a.createElement(Zl, {
                pending: i,
                success: l
            }, i ? c.a.createElement(Jt, null) : l ? c.a.createElement(u.o, {
                color: "success"
            }) : c.a.createElement(u.s, {
                color: "failure"
            }))) : null
        }
        function ec(e, t) {
            return t.addedTime - e.addedTime
        }
        function tc(e) {
            return c.a.createElement(u.w, {
                flexDirection: "column"
            }, e.map((function(e, t) {
                return c.a.createElement($l, {
                    key: t,
                    tx: e
                })
            }
            )))
        }
        var nc = function(e) {
            var t = e.onDismiss
              , n = Object(s.d)()
              , a = n.account
              , r = n.chainId
              , o = Object(Ie.c)()
              , i = Vl()
              , d = Object(l.useMemo)((function() {
                return Object.values(i).filter(Hl).sort(ec)
            }
            ), [i])
              , m = d.filter((function(e) {
                return !e.receipt
            }
            ))
              , p = d.filter((function(e) {
                return e.receipt
            }
            ))
              , f = Object(l.useCallback)((function() {
                r && o(_l({
                    chainId: r
                }))
            }
            ), [o, r]);
            return c.a.createElement(u.J, {
                title: "Recent Transactions",
                headerBackground: "gradients.cardHeader",
                onDismiss: t
            }, a && c.a.createElement(u.L, null, m.length || p.length ? c.a.createElement(c.a.Fragment, null, c.a.createElement(sa, {
                mb: "1rem",
                style: {
                    justifyContent: "space-between"
                }
            }, c.a.createElement(u.X, null, "Recent Transactions"), c.a.createElement(u.g, {
                variant: "tertiary",
                scale: "xs",
                onClick: f
            }, "clear all")), tc(m), tc(p)) : c.a.createElement(u.X, null, "No recent transactions")))
        }
          , ac = function() {
            var e = Object(u.fb)(c.a.createElement(nc, null))
              , t = Object(f.a)(e, 1)[0];
            return c.a.createElement(c.a.Fragment, null, c.a.createElement(u.g, {
                variant: "text",
                p: 0,
                onClick: t,
                ml: "16px"
            }, c.a.createElement(u.A, {
                color: "primary",
                width: "24px"
            })))
        };
        function rc() {
            var e = Object(Et.a)(["\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px;\n  width: 100%;\n  border-bottom: 1px solid ", ";\n"]);
            return rc = function() {
                return e
            }
            ,
            e
        }
        var oc = Object(gt.e)(u.w)(rc(), (function(e) {
            return e.theme.colors.cardBorder
        }
        ))
          , ic = function(e) {
            var t = e.title
              , n = e.subtitle
              , a = e.helper
              , r = e.backTo
              , o = e.noConfig
              , i = void 0 !== o && o;
            return c.a.createElement(oc, null, c.a.createElement(u.w, {
                alignItems: "center",
                mr: i ? 0 : "16px"
            }, r && c.a.createElement(u.B, {
                as: Ae.b,
                to: r
            }, c.a.createElement(u.b, {
                width: "32px"
            })), c.a.createElement(u.w, {
                flexDirection: "column"
            }, c.a.createElement(u.y, {
                as: "h2",
                mb: "8px"
            }, t), c.a.createElement(u.w, {
                alignItems: "center"
            }, a && c.a.createElement(Zr, {
                text: a,
                mr: "4px"
            }), c.a.createElement(u.X, {
                color: "textSubtle",
                fontSize: "14px"
            }, n)))), !i && c.a.createElement(u.w, null, c.a.createElement(zl, null), c.a.createElement(ac, null)))
        };
        function lc() {
            var e = Object(Et.a)(["\n  border-radius: 24px;\n  max-width: 436px;\n  width: 100%;\n  z-index: 1;\n"]);
            return lc = function() {
                return e
            }
            ,
            e
        }
        var cc = Object(gt.e)(u.j)(lc());
        function uc(e) {
            var t = e.children;
            return c.a.createElement(cc, null, t)
        }
        function sc(e) {
            var t, n, a = null === (t = ot(Ir(null === e || void 0 === e ? void 0 : e.address, !1), "totalSupply")) || void 0 === t || null === (n = t.result) || void 0 === n ? void 0 : n[0];
            return e && a ? new b.k(e,a.toString()) : void 0
        }
        function dc(e) {
            if (e === b.d)
                return "BNB";
            if (e instanceof b.j)
                return e.address;
            throw new Error("invalid currency")
        }
        function mc() {
            var e = Object(Et.a)(["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"]);
            return mc = function() {
                return e
            }
            ,
            e
        }
        var pc = gt.e.span(mc());
        function fc() {
            var e = Object(Et.a)(["\n  height: 24px;\n"]);
            return fc = function() {
                return e
            }
            ,
            e
        }
        var bc = Object(gt.e)(ca)(fc());
        function yc(e) {
            var t = e.pair
              , n = e.showUnwrapped
              , a = void 0 !== n && n
              , r = Oe().account
              , o = a ? t.token0 : ct(t.token0)
              , i = a ? t.token1 : ct(t.token1)
              , s = Object(l.useState)(!1)
              , d = Object(f.a)(s, 2)
              , m = d[0]
              , p = d[1]
              , y = Vr(null !== r && void 0 !== r ? r : void 0, t.liquidityToken)
              , h = sc(t.liquidityToken)
              , v = y && h && b.e.greaterThanOrEqual(h.raw, y.raw) ? new b.g(y.raw,h.raw) : void 0
              , g = t && h && y && b.e.greaterThanOrEqual(h.raw, y.raw) ? [t.getLiquidityValue(t.token0, h, y, !1), t.getLiquidityValue(t.token1, h, y, !1)] : [void 0, void 0]
              , E = Object(f.a)(g, 2)
              , w = E[0]
              , k = E[1];
            return c.a.createElement(c.a.Fragment, null, y && b.e.greaterThan(y.raw, b.e.BigInt(0)) ? c.a.createElement(u.j, null, c.a.createElement(u.k, null, c.a.createElement(Ln, {
                gap: "16px"
            }, c.a.createElement(bc, null, c.a.createElement(da, null, c.a.createElement(u.X, {
                color: "secondary",
                bold: !0
            }, "LP tokens in your wallet"))), c.a.createElement(bc, {
                onClick: function() {
                    return p(!m)
                }
            }, c.a.createElement(da, null, c.a.createElement(ko, {
                currency0: o,
                currency1: i,
                margin: !0,
                size: 20
            }), c.a.createElement(u.X, {
                small: !0,
                color: "textSubtle"
            }, o.symbol, "-", i.symbol, " LP")), c.a.createElement(da, null, c.a.createElement(u.X, null, y ? y.toSignificant(4) : "-"))), c.a.createElement(Ln, {
                gap: "4px"
            }, c.a.createElement(bc, null, c.a.createElement(u.X, {
                color: "textSubtle",
                small: !0
            }, "Share of pool:"), c.a.createElement(u.X, null, v ? v.toFixed(6) + "%" : "-")), c.a.createElement(bc, null, c.a.createElement(u.X, {
                color: "textSubtle",
                small: !0
            }, "Pooled ", o.symbol, ":"), w ? c.a.createElement(da, null, c.a.createElement(u.X, {
                ml: "6px"
            }, null === w || void 0 === w ? void 0 : w.toSignificant(6))) : "-"), c.a.createElement(bc, null, c.a.createElement(u.X, {
                color: "textSubtle",
                small: !0
            }, "Pooled ", i.symbol, ":"), k ? c.a.createElement(da, null, c.a.createElement(u.X, {
                ml: "6px"
            }, null === k || void 0 === k ? void 0 : k.toSignificant(6))) : "-"))))) : c.a.createElement(jn, null, c.a.createElement(u.X, {
                fontSize: "14px",
                style: {
                    textAlign: "center"
                }
            }, c.a.createElement("span", {
                role: "img",
                "aria-label": "pancake-icon"
            }, "\ud83e\udd5e"), " ", "By adding liquidity you'll earn 0.17% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.")))
        }
        function hc(e) {
            var t = e.pair
              , n = Object(Wt.a)(e, ["pair"])
              , a = Oe().account
              , r = ct(t.token0)
              , o = ct(t.token1)
              , i = Object(l.useState)(!1)
              , s = Object(f.a)(i, 2)
              , d = s[0]
              , m = s[1]
              , p = Vr(null !== a && void 0 !== a ? a : void 0, t.liquidityToken)
              , y = sc(t.liquidityToken)
              , h = p && y && b.e.greaterThanOrEqual(y.raw, p.raw) ? new b.g(p.raw,y.raw) : void 0
              , v = t && y && p && b.e.greaterThanOrEqual(y.raw, p.raw) ? [t.getLiquidityValue(t.token0, y, p, !1), t.getLiquidityValue(t.token1, y, p, !1)] : [void 0, void 0]
              , g = Object(f.a)(v, 2)
              , E = g[0]
              , w = g[1];
            return c.a.createElement(u.j, Object.assign({
                style: {
                    borderRadius: "12px"
                }
            }, n), c.a.createElement(u.w, {
                justifyContent: "space-between",
                role: "button",
                onClick: function() {
                    return m(!d)
                },
                p: "16px"
            }, c.a.createElement(u.w, {
                flexDirection: "column"
            }, c.a.createElement(u.w, {
                alignItems: "center",
                mb: "4px"
            }, c.a.createElement(ko, {
                currency0: r,
                currency1: o,
                size: 20
            }), c.a.createElement(u.X, {
                bold: !0,
                ml: "8px"
            }, r && o ? "".concat(r.symbol, "/").concat(o.symbol) : c.a.createElement(pc, null, "Loading"))), c.a.createElement(u.X, {
                fontSize: "14px",
                color: "textSubtle"
            }, null === p || void 0 === p ? void 0 : p.toSignificant(4))), d ? c.a.createElement(u.r, null) : c.a.createElement(u.p, null)), d && c.a.createElement(Ln, {
                gap: "8px",
                style: {
                    padding: "16px"
                }
            }, c.a.createElement(bc, null, c.a.createElement(da, null, c.a.createElement(go, {
                size: "20px",
                currency: r
            }), c.a.createElement(u.X, {
                color: "textSubtle",
                ml: "4px"
            }, "Pooled ", r.symbol)), E ? c.a.createElement(da, null, c.a.createElement(u.X, {
                ml: "6px"
            }, null === E || void 0 === E ? void 0 : E.toSignificant(6))) : "-"), c.a.createElement(bc, null, c.a.createElement(da, null, c.a.createElement(go, {
                size: "20px",
                currency: o
            }), c.a.createElement(u.X, {
                color: "textSubtle",
                ml: "4px"
            }, "Pooled ", o.symbol)), w ? c.a.createElement(da, null, c.a.createElement(u.X, {
                ml: "6px"
            }, null === w || void 0 === w ? void 0 : w.toSignificant(6))) : "-"), c.a.createElement(bc, null, c.a.createElement(u.X, {
                color: "textSubtle"
            }, "Share of pool"), c.a.createElement(u.X, null, h ? ("0.00" === h.toFixed(2) ? "<0.01" : h.toFixed(2)) + "%" : "-")), p && b.e.greaterThan(p.raw, de) && c.a.createElement(u.w, {
                flexDirection: "column"
            }, c.a.createElement(u.g, {
                as: Ae.b,
                to: "/remove/".concat(dc(r), "/").concat(dc(o)),
                variant: "primary",
                width: "100%",
                mb: "8px"
            }, "Remove"), c.a.createElement(u.g, {
                as: Ae.b,
                to: "/add/".concat(dc(r), "/").concat(dc(o)),
                variant: "text",
                startIcon: c.a.createElement(u.a, {
                    color: "primary"
                }),
                width: "100%"
            }, "Add liquidity instead"))))
        }
        var vc = function(e) {
            var t = Te()
              , n = t.login
              , a = t.logout
              , r = Object(u.hb)(n, a).onPresentConnectModal;
            return c.a.createElement(u.g, Object.assign({
                onClick: r
            }, e), "Claim BNB")
        };
        vc.defaultProps = {
            width: "100%"
        };
        var gc, Ec, wc = vc;
        function kc(e, t) {
            var n = Oe().account
              , a = e instanceof b.k ? e.token : void 0
              , r = function(e, t, n) {
                var a = ot(Ir(null === e || void 0 === e ? void 0 : e.address, !1), "allowance", Object(l.useMemo)((function() {
                    return [t, n]
                }
                ), [t, n])).result;
                return Object(l.useMemo)((function() {
                    return e && a ? new b.k(e,a.toString()) : void 0
                }
                ), [e, a])
            }(a, null !== n && void 0 !== n ? n : void 0, t)
              , o = function(e, t) {
                var n = Vl();
                return Object(l.useMemo)((function() {
                    return "string" === typeof e && "string" === typeof t && Object.keys(n).some((function(a) {
                        var r = n[a];
                        if (!r)
                            return !1;
                        if (r.receipt)
                            return !1;
                        var o = r.approval;
                        return !!o && (o.spender === t && o.tokenAddress === e && Hl(r))
                    }
                    ))
                }
                ), [n, t, e])
            }(null === a || void 0 === a ? void 0 : a.address, t)
              , i = Object(l.useMemo)((function() {
                return e && t ? e.currency === b.d ? gc.APPROVED : r ? r.lessThan(e) ? o ? gc.PENDING : gc.NOT_APPROVED : gc.APPROVED : gc.UNKNOWN : gc.UNKNOWN
            }
            ), [e, r, o, t])
              , c = Ir(null === a || void 0 === a ? void 0 : a.address)
              , u = Wl()
              , s = Object(l.useCallback)(Object(p.a)(m.a.mark((function n() {
                var r, o;
                return m.a.wrap((function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            if (i === gc.NOT_APPROVED) {
                                n.next = 3;
                                break
                            }
                            return console.error("approve was called unnecessarily"),
                            n.abrupt("return");
                        case 3:
                            if (a) {
                                n.next = 6;
                                break
                            }
                            return console.error("no token"),
                            n.abrupt("return");
                        case 6:
                            if (c) {
                                n.next = 9;
                                break
                            }
                            return console.error("tokenContract is null"),
                            n.abrupt("return");
                        case 9:
                            if (e) {
                                n.next = 12;
                                break
                            }
                            return console.error("missing amount to approve"),
                            n.abrupt("return");
                        case 12:
                            if (t) {
                                n.next = 15;
                                break
                            }
                            return console.error("no spender"),
                            n.abrupt("return");
                        case 15:
                            return r = !1,
                            n.next = 18,
                            c.estimateGas.approve(t, ha.c).catch((function() {
                                return r = !0,
                                c.estimateGas.approve(t, e.raw.toString())
                            }
                            ));
                        case 18:
                            return o = n.sent,
                            n.abrupt("return", c.approve(t, r ? e.raw.toString() : ha.c, {
                                gasLimit: ka(o)
                            }).then((function(n) {
                                u(n, {
                                    summary: "Approve " + e.currency.symbol,
                                    approval: {
                                        tokenAddress: a.address,
                                        spender: t
                                    }
                                })
                            }
                            )).catch((function(e) {
                                throw console.debug("Failed to approve token", e),
                                e
                            }
                            )));
                        case 20:
                        case "end":
                            return n.stop()
                        }
                }
                ), n)
            }
            ))), [i, a, c, e, t, u]);
            return [i, s]
        }
        function Cc() {
            var e = Object(Ie.d)((function(e) {
                return e.user.userDeadline
            }
            ))
              , t = function() {
                var e, t;
                return null === (e = ot(Sr(), "getCurrentBlockTimestamp")) || void 0 === e || null === (t = e.result) || void 0 === t ? void 0 : t[0]
            }();
            return Object(l.useMemo)((function() {
                if (t && e)
                    return t.add(e)
            }
            ), [t, e])
        }
        !function(e) {
            e[e.UNKNOWN = 0] = "UNKNOWN",
            e[e.NOT_APPROVED = 1] = "NOT_APPROVED",
            e[e.PENDING = 2] = "PENDING",
            e[e.APPROVED = 3] = "APPROVED"
        }(gc || (gc = {})),
        function(e) {
            e.CURRENCY_A = "CURRENCY_A",
            e.CURRENCY_B = "CURRENCY_B"
        }(Ec || (Ec = {}));
        var Oc = Object(De.b)("mint/typeInputMint")
          , Tc = Object(De.b)("mint/resetMintState")
          , xc = b.e.BigInt(0);
        function jc() {
            return Object(Ie.d)((function(e) {
                return e.mint
            }
            ))
        }
        function Ic(e) {
            if (e)
                return e.currency === b.d ? b.e.greaterThan(e.raw, ge) ? b.c.ether(b.e.subtract(e.raw, ge)) : b.c.ether(b.e.BigInt(0)) : e
        }
        function Ac(e) {
            var t, n, a, r, o, i, l, s, d = e.noLiquidity, m = e.price, p = e.currencies, f = e.parsedAmounts, b = e.poolTokenPercentage, y = e.onAdd;
            return c.a.createElement(c.a.Fragment, null, c.a.createElement(ca, null, c.a.createElement(u.X, null, null === (t = p[Ec.CURRENCY_A]) || void 0 === t ? void 0 : t.symbol, " Deposited"), c.a.createElement(da, null, c.a.createElement(go, {
                currency: p[Ec.CURRENCY_A],
                style: {
                    marginRight: "8px"
                }
            }), c.a.createElement(u.X, null, null === (n = f[Ec.CURRENCY_A]) || void 0 === n ? void 0 : n.toSignificant(6)))), c.a.createElement(ca, null, c.a.createElement(u.X, null, null === (a = p[Ec.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol, " Deposited"), c.a.createElement(da, null, c.a.createElement(go, {
                currency: p[Ec.CURRENCY_B],
                style: {
                    marginRight: "8px"
                }
            }), c.a.createElement(u.X, null, null === (r = f[Ec.CURRENCY_B]) || void 0 === r ? void 0 : r.toSignificant(6)))), c.a.createElement(ca, null, c.a.createElement(u.X, null, "Rates"), c.a.createElement(u.X, null, "1 ".concat(null === (o = p[Ec.CURRENCY_A]) || void 0 === o ? void 0 : o.symbol, " = ").concat(null === m || void 0 === m ? void 0 : m.toSignificant(4), " ").concat(null === (i = p[Ec.CURRENCY_B]) || void 0 === i ? void 0 : i.symbol))), c.a.createElement(ca, {
                style: {
                    justifyContent: "flex-end"
                }
            }, c.a.createElement(u.X, null, "1 ".concat(null === (l = p[Ec.CURRENCY_B]) || void 0 === l ? void 0 : l.symbol, " = ").concat(null === m || void 0 === m ? void 0 : m.invert().toSignificant(4), " ").concat(null === (s = p[Ec.CURRENCY_A]) || void 0 === s ? void 0 : s.symbol))), c.a.createElement(ca, null, c.a.createElement(u.X, null, "Share of Pool:"), c.a.createElement(u.X, null, d ? "100" : null === b || void 0 === b ? void 0 : b.toSignificant(4), "%")), c.a.createElement(u.g, {
                onClick: y,
                mt: "20px"
            }, d ? "Create Pool & Supply" : "Confirm Supply"))
        }
        function Nc(e) {
            var t, n, a, r, o, i, l, s, d = e.currencies, m = e.noLiquidity, p = e.poolTokenPercentage, f = e.price;
            return c.a.createElement(Ln, {
                gap: "md"
            }, c.a.createElement(sa, {
                justify: "space-around",
                gap: "4px"
            }, c.a.createElement(Ln, {
                justify: "center"
            }, c.a.createElement(u.X, null, null !== (t = null === f || void 0 === f ? void 0 : f.toSignificant(6)) && void 0 !== t ? t : "-"), c.a.createElement(u.X, {
                fontSize: "14px",
                pt: 1
            }, null === (n = d[Ec.CURRENCY_B]) || void 0 === n ? void 0 : n.symbol, " per ", null === (a = d[Ec.CURRENCY_A]) || void 0 === a ? void 0 : a.symbol)), c.a.createElement(Ln, {
                justify: "center"
            }, c.a.createElement(u.X, null, null !== (r = null === f || void 0 === f || null === (o = f.invert()) || void 0 === o ? void 0 : o.toSignificant(6)) && void 0 !== r ? r : "-"), c.a.createElement(u.X, {
                fontSize: "14px",
                pt: 1
            }, null === (i = d[Ec.CURRENCY_A]) || void 0 === i ? void 0 : i.symbol, " per ", null === (l = d[Ec.CURRENCY_B]) || void 0 === l ? void 0 : l.symbol)), c.a.createElement(Ln, {
                justify: "center"
            }, c.a.createElement(u.X, null, m && f ? "100" : null !== (s = (null === p || void 0 === p ? void 0 : p.lessThan(me)) ? "<0.01" : null === p || void 0 === p ? void 0 : p.toFixed(2)) && void 0 !== s ? s : "0", "%"), c.a.createElement(u.X, {
                fontSize: "14px",
                pt: 1
            }, "Share of Pool"))))
        }
        function Sc() {
            var e = Object(Et.a)(["\n  padding: 8px 0;\n  width: 100%;\n  max-width: 400px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  color: ", ";\n  background-color: ", ";\n  text-align: center;\n"]);
            return Sc = function() {
                return e
            }
            ,
            e
        }
        var Pc = gt.e.div(Sc(), (function(e) {
            return e.theme.colors.text
        }
        ), (function(e) {
            return e.theme.colors.invertedContrast
        }
        ))
          , Rc = function(e) {
            var t = e.currencies
              , n = e.onDismiss
              , a = Oe().chainId
              , r = a && t ? t.map((function(e) {
                return it(e, a)
            }
            )) : []
              , o = Yr();
            return c.a.createElement(u.J, {
                title: "Unsupported Assets",
                maxWidth: "420px",
                onDismiss: n
            }, c.a.createElement(Ln, {
                gap: "lg"
            }, r.map((function(e) {
                var t;
                return e && o && Object.keys(o).includes(e.address) && c.a.createElement(Nn, {
                    key: null === (t = e.address) || void 0 === t ? void 0 : t.concat("not-supported")
                }, c.a.createElement(Ln, {
                    gap: "10px"
                }, c.a.createElement(sa, {
                    gap: "5px",
                    align: "center"
                }, c.a.createElement(go, {
                    currency: e,
                    size: "24px"
                }), c.a.createElement(u.X, null, e.symbol)), a && c.a.createElement(u.E, {
                    external: !0,
                    small: !0,
                    color: "primaryDark",
                    href: Ea(a, e.address, "address")
                }, e.address)))
            }
            )), c.a.createElement(Ln, {
                gap: "lg"
            }, c.a.createElement(u.X, null, "Some assets are not available through this interface because they may not work well with our smart contract or we are unable to allow trading for legal reasons."))))
        };
        function Bc(e) {
            var t = e.currencies
              , n = Object(u.fb)(c.a.createElement(Rc, {
                currencies: t
            }))
              , a = Object(f.a)(n, 1)[0];
            return c.a.createElement(Pc, null, c.a.createElement(u.g, {
                variant: "text",
                onClick: a
            }, "Read more about unsupported assets"))
        }
        function Uc() {
            var e = Object(Et.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding: 16px;\n  padding-bottom: 0;\n  min-height: calc(100vh - 64px);\n  background: ", ";\n\n  ", " {\n    background-size: auto;\n  }\n\n  ", " {\n    padding: 24px;\n    padding-bottom: 0;\n  }\n\n  ", " {\n    padding-top: 32px;\n    min-height: calc(100vh - 64px);\n  }\n"]);
            return Uc = function() {
                return e
            }
            ,
            e
        }
        var Lc = gt.e.div(Uc(), (function(e) {
            return e.theme.colors.gradients.bubblegum
        }
        ), (function(e) {
            return e.theme.mediaQueries.xs
        }
        ), (function(e) {
            return e.theme.mediaQueries.sm
        }
        ), (function(e) {
            return e.theme.mediaQueries.lg
        }
        ))
          , Mc = function(e) {
            var t = e.children
              , n = Object(Wt.a)(e, ["children"]);
            return c.a.createElement(Lc, n, c.a.createElement(Dt, null), t, c.a.createElement(u.w, {
                flexGrow: 1
            }), c.a.createElement(qt, null))
        };
        function Yc(e) {
            var t, n, a, r, o, i, s, d, y, h, v, g = e.match.params, w = g.currencyIdA, k = g.currencyIdB, C = e.history, T = Oe(), x = T.account, j = T.chainId, I = T.library, A = _r(w), N = _r(k), S = Boolean(j && (A && Object(b.o)(A, b.n[j]) || N && Object(b.o)(N, b.n[j]))), P = fr(), R = jc(), B = R.independentField, U = R.typedValue, L = R.otherTypedValue, M = function(e, t) {
                var n, a, r, o, i, c, u, s = Oe(), d = s.account, m = s.chainId, p = jc(), y = p.independentField, h = p.typedValue, v = p.otherTypedValue, g = y === Ec.CURRENCY_A ? Ec.CURRENCY_B : Ec.CURRENCY_A, w = Object(l.useMemo)((function() {
                    var n;
                    return n = {},
                    Object(E.a)(n, Ec.CURRENCY_A, null !== e && void 0 !== e ? e : void 0),
                    Object(E.a)(n, Ec.CURRENCY_B, null !== t && void 0 !== t ? t : void 0),
                    n
                }
                ), [e, t]), k = mt(w[Ec.CURRENCY_A], w[Ec.CURRENCY_B]), C = Object(f.a)(k, 2), O = C[0], T = C[1], x = sc(null === T || void 0 === T ? void 0 : T.liquidityToken), j = O === ut.NOT_EXISTS || Boolean(x && b.e.equal(x.raw, xc)), I = Hr(null !== d && void 0 !== d ? d : void 0, [w[Ec.CURRENCY_A], w[Ec.CURRENCY_B]]), A = (n = {},
                Object(E.a)(n, Ec.CURRENCY_A, I[0]),
                Object(E.a)(n, Ec.CURRENCY_B, I[1]),
                n), N = Il(h, w[y]), S = Object(l.useMemo)((function() {
                    if (j)
                        return v && w[g] ? Il(v, w[g]) : void 0;
                    if (N) {
                        var n = lt(N, m)
                          , a = [it(e, m), it(t, m)]
                          , r = a[0]
                          , o = a[1];
                        if (r && o && n && T) {
                            var i = g === Ec.CURRENCY_B ? t : e
                              , l = g === Ec.CURRENCY_B ? T.priceOf(r).quote(n) : T.priceOf(o).quote(n);
                            return i === b.d ? b.c.ether(l.raw) : l
                        }
                    } else
                        ;
                }
                ), [j, v, w, g, N, e, m, t, T]), P = (a = {},
                Object(E.a)(a, Ec.CURRENCY_A, y === Ec.CURRENCY_A ? N : S),
                Object(E.a)(a, Ec.CURRENCY_B, y === Ec.CURRENCY_A ? S : N),
                a), R = Object(l.useMemo)((function() {
                    if (j) {
                        var t = P[Ec.CURRENCY_A]
                          , n = P[Ec.CURRENCY_B];
                        return t && n ? new b.h(t.currency,n.currency,t.raw,n.raw) : void 0
                    }
                    var a = it(e, m);
                    return T && a ? T.priceOf(a) : void 0
                }
                ), [m, e, j, T, P]), B = Object(l.useMemo)((function() {
                    var e = P[Ec.CURRENCY_A]
                      , t = P[Ec.CURRENCY_B]
                      , n = [lt(e, m), lt(t, m)]
                      , a = n[0]
                      , r = n[1];
                    return T && x && a && r ? T.getLiquidityMinted(x, a, r) : void 0
                }
                ), [P, m, T, x]), U = Object(l.useMemo)((function() {
                    return B && x ? new b.g(B.raw,x.add(B).raw) : void 0
                }
                ), [B, x]);
                d || (i = "Connect Wallet"),
                O === ut.INVALID && (i = null !== (c = i) && void 0 !== c ? c : "Invalid pair"),
                P[Ec.CURRENCY_A] && P[Ec.CURRENCY_B] || (i = null !== (u = i) && void 0 !== u ? u : "Enter an amount");
                var L, M, Y = P[Ec.CURRENCY_A], F = P[Ec.CURRENCY_B];
                return Y && (null === A || void 0 === A || null === (r = A[Ec.CURRENCY_A]) || void 0 === r ? void 0 : r.lessThan(Y)) && (i = "Insufficient " + (null === (L = w[Ec.CURRENCY_A]) || void 0 === L ? void 0 : L.symbol) + " balance"),
                F && (null === A || void 0 === A || null === (o = A[Ec.CURRENCY_B]) || void 0 === o ? void 0 : o.lessThan(F)) && (i = "Insufficient " + (null === (M = w[Ec.CURRENCY_B]) || void 0 === M ? void 0 : M.symbol) + " balance"),
                {
                    dependentField: g,
                    currencies: w,
                    pair: T,
                    pairState: O,
                    currencyBalances: A,
                    parsedAmounts: P,
                    price: R,
                    noLiquidity: j,
                    liquidityMinted: B,
                    poolTokenPercentage: U,
                    error: i
                }
            }(null !== A && void 0 !== A ? A : void 0, null !== N && void 0 !== N ? N : void 0), Y = M.dependentField, F = M.currencies, D = M.pair, z = M.pairState, K = M.currencyBalances, _ = M.parsedAmounts, X = M.price, q = M.noLiquidity, W = M.liquidityMinted, V = M.poolTokenPercentage, H = M.error, G = function(e) {
                var t = Object(Ie.c)();
                return {
                    onFieldAInput: Object(l.useCallback)((function(n) {
                        t(Oc({
                            field: Ec.CURRENCY_A,
                            typedValue: n,
                            noLiquidity: !0 === e
                        }))
                    }
                    ), [t, e]),
                    onFieldBInput: Object(l.useCallback)((function(n) {
                        t(Oc({
                            field: Ec.CURRENCY_B,
                            typedValue: n,
                            noLiquidity: !0 === e
                        }))
                    }
                    ), [t, e])
                }
            }(q), Q = G.onFieldAInput, J = G.onFieldBInput, Z = !H, $ = Object(l.useState)(!1), ee = Object(f.a)($, 2), te = ee[0], ne = ee[1], ae = Object(l.useState)(!1), oe = Object(f.a)(ae, 2), ie = oe[0], le = oe[1], ce = Cc(), ue = hr(), se = Object(f.a)(ue, 1)[0], de = Object(l.useState)(""), me = Object(f.a)(de, 2), pe = me[0], fe = me[1], be = (a = {},
            Object(E.a)(a, B, U),
            Object(E.a)(a, Y, q ? L : null !== (t = null === (n = _[Y]) || void 0 === n ? void 0 : n.toSignificant(6)) && void 0 !== t ? t : ""),
            a), ye = [Ec.CURRENCY_A, Ec.CURRENCY_B].reduce((function(e, t) {
                return Object(jt.a)(Object(jt.a)({}, e), {}, Object(E.a)({}, t, Ic(K[t])))
            }
            ), {}), he = [Ec.CURRENCY_A, Ec.CURRENCY_B].reduce((function(e, t) {
                var n, a;
                return Object(jt.a)(Object(jt.a)({}, e), {}, Object(E.a)({}, t, null === (n = ye[t]) || void 0 === n ? void 0 : n.equalTo(null !== (a = _[t]) && void 0 !== a ? a : "0")))
            }
            ), {}), ve = kc(_[Ec.CURRENCY_A], re), ge = Object(f.a)(ve, 2), Ee = ge[0], we = ge[1], ke = kc(_[Ec.CURRENCY_B], re), Ce = Object(f.a)(ke, 2), Te = Ce[0], xe = Ce[1], je = Wl();
            function Ae() {
                return Ne.apply(this, arguments)
            }
            function Ne() {
                return (Ne = Object(p.a)(m.a.mark((function e() {
                    var t, n, a, r, o, i, l, c, u, s, d, p, f, y, h, v;
                    return m.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (j && I && x) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                if (n = Ta(0, I, x),
                                a = _[Ec.CURRENCY_A],
                                r = _[Ec.CURRENCY_B],
                                a && r && A && N && ce) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return");
                            case 6:
                                return t = {},
                                Object(E.a)(t, Ec.CURRENCY_A, Ca(a, q ? 0 : se)[0]),
                                Object(E.a)(t, Ec.CURRENCY_B, Ca(r, q ? 0 : se)[0]),
                                o = t,
                                A === b.d || N === b.d ? (p = N === b.d,
                                i = n.estimateGas.addLiquidityETH,
                                l = n.addLiquidityETH,
                                c = [null !== (s = null === (d = it(p ? A : N, j)) || void 0 === d ? void 0 : d.address) && void 0 !== s ? s : "", (p ? a : r).raw.toString(), o[p ? Ec.CURRENCY_A : Ec.CURRENCY_B].toString(), o[p ? Ec.CURRENCY_B : Ec.CURRENCY_A].toString(), x, ce.toHexString()],
                                u = gn.a.from((p ? r : a).raw.toString())) : (i = n.estimateGas.addLiquidity,
                                l = n.addLiquidity,
                                c = [null !== (f = null === (y = it(A, j)) || void 0 === y ? void 0 : y.address) && void 0 !== f ? f : "", null !== (h = null === (v = it(N, j)) || void 0 === v ? void 0 : v.address) && void 0 !== h ? h : "", a.raw.toString(), r.raw.toString(), o[Ec.CURRENCY_A].toString(), o[Ec.CURRENCY_B].toString(), x, ce.toHexString()],
                                u = null),
                                le(!0),
                                e.next = 11,
                                i.apply(void 0, Object(O.a)(c).concat([u ? {
                                    value: u
                                } : {}])).then((function(e) {
                                    return l.apply(void 0, Object(O.a)(c).concat([Object(jt.a)(Object(jt.a)({}, u ? {
                                        value: u
                                    } : {}), {}, {
                                        gasLimit: ka(e)
                                    })])).then((function(e) {
                                        var t, n, a, r;
                                        le(!1),
                                        je(e, {
                                            summary: "Add " + (null === (t = _[Ec.CURRENCY_A]) || void 0 === t ? void 0 : t.toSignificant(3)) + " " + (null === (n = F[Ec.CURRENCY_A]) || void 0 === n ? void 0 : n.symbol) + " and " + (null === (a = _[Ec.CURRENCY_B]) || void 0 === a ? void 0 : a.toSignificant(3)) + " " + (null === (r = F[Ec.CURRENCY_B]) || void 0 === r ? void 0 : r.symbol)
                                        }),
                                        fe(e.hash)
                                    }
                                    ))
                                }
                                )).catch((function(e) {
                                    le(!1),
                                    4001 !== (null === e || void 0 === e ? void 0 : e.code) && console.error(e)
                                }
                                ));
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            var Se = function() {
                var e, t, n, a;
                return q ? c.a.createElement(Ln, {
                    gap: "20px"
                }, c.a.createElement(jn, {
                    mt: "20px",
                    borderRadius: "20px"
                }, c.a.createElement(ua, null, c.a.createElement(u.X, {
                    fontSize: "48px",
                    marginRight: "10px"
                }, (null === (e = F[Ec.CURRENCY_A]) || void 0 === e ? void 0 : e.symbol) + "/" + (null === (t = F[Ec.CURRENCY_B]) || void 0 === t ? void 0 : t.symbol)), c.a.createElement(ko, {
                    currency0: F[Ec.CURRENCY_A],
                    currency1: F[Ec.CURRENCY_B],
                    size: 30
                })))) : c.a.createElement(Ln, {
                    gap: "20px"
                }, c.a.createElement(u.w, {
                    alignItems: "center",
                    mt: "20px"
                }, c.a.createElement(u.X, {
                    fontSize: "48px",
                    marginRight: "10px"
                }, null === W || void 0 === W ? void 0 : W.toSignificant(6)), c.a.createElement(ko, {
                    currency0: F[Ec.CURRENCY_A],
                    currency1: F[Ec.CURRENCY_B],
                    size: 30
                })), c.a.createElement(ma, null, c.a.createElement(u.X, {
                    fontSize: "24px"
                }, (null === (n = F[Ec.CURRENCY_A]) || void 0 === n ? void 0 : n.symbol) + "/" + (null === (a = F[Ec.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol) + " Pool Tokens")), c.a.createElement(u.X, {
                    small: !0,
                    textAlign: "left",
                    pt: "8px"
                }, "Output is estimated. If the price changes by more than ".concat(se / 100, "% your transaction will revert.")))
            }
              , Pe = function() {
                return c.a.createElement(Ac, {
                    price: X,
                    currencies: F,
                    parsedAmounts: _,
                    noLiquidity: q,
                    onAdd: Ae,
                    poolTokenPercentage: V
                })
            }
              , Re = "Supplying ".concat(null === (r = _[Ec.CURRENCY_A]) || void 0 === r ? void 0 : r.toSignificant(6), " ").concat(null === (o = F[Ec.CURRENCY_A]) || void 0 === o ? void 0 : o.symbol, " and ").concat(null === (i = _[Ec.CURRENCY_B]) || void 0 === i ? void 0 : i.toSignificant(6), " ").concat(null === (s = F[Ec.CURRENCY_B]) || void 0 === s ? void 0 : s.symbol)
              , Be = Object(l.useCallback)((function(e) {
                var t = dc(e);
                t === k ? C.push("/add/".concat(k, "/").concat(w)) : C.push("/add/".concat(t, "/").concat(k))
            }
            ), [k, C, w])
              , Ue = Object(l.useCallback)((function(e) {
                var t = dc(e);
                w === t ? k ? C.push("/add/".concat(k, "/").concat(t)) : C.push("/add/".concat(t)) : C.push("/add/".concat(w || "BNB", "/").concat(t))
            }
            ), [w, C, k])
              , Le = Object(l.useCallback)((function() {
                ne(!1),
                pe && Q(""),
                fe("")
            }
            ), [Q, pe])
              , Me = fl(null === F || void 0 === F ? void 0 : F.CURRENCY_A, null === F || void 0 === F ? void 0 : F.CURRENCY_B);
            return c.a.createElement(Mc, null, c.a.createElement(uc, null, c.a.createElement(ic, {
                title: "Add Liquidity",
                subtitle: "Add liquidity to receive LP tokens",
                helper: "Liquidity providers earn a 0.17% trading fee on all trades made for that token pair, proportional to their share of the liquidity pool.",
                backTo: "/pool"
            }), c.a.createElement(u.k, null, c.a.createElement(Fa, {
                isOpen: te,
                onDismiss: Le,
                attemptingTxn: ie,
                hash: pe,
                content: function() {
                    return c.a.createElement(Ma, {
                        title: q ? "You are creating a pool" : "You will receive",
                        onDismiss: Le,
                        topContent: Se,
                        bottomContent: Pe
                    })
                },
                pendingText: Re,
                currencyToAdd: null === D || void 0 === D ? void 0 : D.liquidityToken
            }), c.a.createElement(Ln, {
                gap: "20px"
            }, q && c.a.createElement(Un, null, c.a.createElement(u.H, {
                variant: "warning"
            }, c.a.createElement("div", null, c.a.createElement(u.X, {
                bold: !0,
                mb: "8px"
            }, "You are the first liquidity provider."), c.a.createElement(u.X, {
                mb: "8px"
            }, "The ratio of tokens you add will set the price of this pool."), c.a.createElement(u.X, null, "Once you are happy with the rate click supply to review.")))), c.a.createElement(cl, {
                value: be[Ec.CURRENCY_A],
                onUserInput: Q,
                onMax: function() {
                    var e, t;
                    Q(null !== (e = null === (t = ye[Ec.CURRENCY_A]) || void 0 === t ? void 0 : t.toExact()) && void 0 !== e ? e : "")
                },
                onCurrencySelect: Be,
                showMaxButton: !he[Ec.CURRENCY_A],
                currency: F[Ec.CURRENCY_A],
                id: "add-liquidity-input-tokena",
                showCommonBases: !0
            }), c.a.createElement(Un, null, c.a.createElement(u.a, {
                width: "16px"
            })), c.a.createElement(cl, {
                value: be[Ec.CURRENCY_B],
                onUserInput: J,
                onCurrencySelect: Ue,
                onMax: function() {
                    var e, t;
                    J(null !== (e = null === (t = ye[Ec.CURRENCY_B]) || void 0 === t ? void 0 : t.toExact()) && void 0 !== e ? e : "")
                },
                showMaxButton: !he[Ec.CURRENCY_B],
                currency: F[Ec.CURRENCY_B],
                id: "add-liquidity-input-tokenb",
                showCommonBases: !0
            }), F[Ec.CURRENCY_A] && F[Ec.CURRENCY_B] && z !== ut.INVALID && c.a.createElement(c.a.Fragment, null, c.a.createElement(jn, {
                padding: "0px",
                borderRadius: "20px"
            }, c.a.createElement(ca, {
                padding: "1rem"
            }, c.a.createElement(u.X, {
                fontSize: "14px"
            }, q ? "Initial prices" : "Prices", " and pool share")), " ", c.a.createElement(jn, {
                padding: "1rem",
                borderRadius: "20px"
            }, c.a.createElement(Nc, {
                currencies: F,
                poolTokenPercentage: V,
                noLiquidity: q,
                price: X
            })))), Me ? c.a.createElement(u.g, {
                disabled: !0,
                mb: "4px"
            }, "Unsupported Asset") : x ? c.a.createElement(Ln, {
                gap: "md"
            }, (Ee === gc.NOT_APPROVED || Ee === gc.PENDING || Te === gc.NOT_APPROVED || Te === gc.PENDING) && Z && c.a.createElement(ca, null, Ee !== gc.APPROVED && c.a.createElement(u.g, {
                onClick: we,
                disabled: Ee === gc.PENDING,
                width: Te !== gc.APPROVED ? "48%" : "100%"
            }, Ee === gc.PENDING ? c.a.createElement(pc, null, "Approving ", null === (d = F[Ec.CURRENCY_A]) || void 0 === d ? void 0 : d.symbol) : "Approve " + (null === (y = F[Ec.CURRENCY_A]) || void 0 === y ? void 0 : y.symbol)), Te !== gc.APPROVED && c.a.createElement(u.g, {
                onClick: xe,
                disabled: Te === gc.PENDING,
                width: Ee !== gc.APPROVED ? "48%" : "100%"
            }, Te === gc.PENDING ? c.a.createElement(pc, null, "Approving ", null === (h = F[Ec.CURRENCY_B]) || void 0 === h ? void 0 : h.symbol) : "Approve " + (null === (v = F[Ec.CURRENCY_B]) || void 0 === v ? void 0 : v.symbol))), c.a.createElement(u.g, {
                variant: !Z && _[Ec.CURRENCY_A] && _[Ec.CURRENCY_B] ? "danger" : "primary",
                onClick: function() {
                    P ? Ae() : ne(!0)
                },
                disabled: !Z || Ee !== gc.APPROVED || Te !== gc.APPROVED
            }, null !== H && void 0 !== H ? H : "Supply")) : c.a.createElement(wc, null)))), Me ? c.a.createElement(Bc, {
                currencies: [F.CURRENCY_A, F.CURRENCY_B]
            }) : D && !q && z !== ut.INVALID ? c.a.createElement(Ln, {
                style: {
                    minWidth: "20rem",
                    width: "100%",
                    maxWidth: "400px",
                    marginTop: "1rem"
                }
            }, c.a.createElement(yc, {
                showUnwrapped: S,
                pair: D
            })) : null)
        }
        function Fc() {
            return c.a.createElement(Le.a, {
                to: "/add/"
            })
        }
        var Dc = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;
        function zc(e) {
            var t = e.match.params.currencyIdA.match(Dc);
            return (null === t || void 0 === t ? void 0 : t.length) ? c.a.createElement(Le.a, {
                to: "/add/".concat(t[1], "/").concat(t[2])
            }) : c.a.createElement(Yc, e)
        }
        function Kc(e) {
            var t = e.match.params
              , n = t.currencyIdA
              , a = t.currencyIdB;
            return n.toLowerCase() === a.toLowerCase() ? c.a.createElement(Le.a, {
                to: "/add/".concat(n)
            }) : c.a.createElement(Yc, e)
        }
        function _c() {
            var e = Object(Et.a)(["\n  background-color: ", ";\n"]);
            return _c = function() {
                return e
            }
            ,
            e
        }
        var Xc = Object(gt.e)(u.k)(_c(), (function(e) {
            return e.theme.colors.dropdownDeep
        }
        ));
        function qc() {
            var e = Oe().account
              , t = function() {
                var e = Oe().chainId
                  , t = Lr()
                  , n = Object(l.useMemo)((function() {
                    var t;
                    return e && null !== (t = se[e]) && void 0 !== t ? t : []
                }
                ), [e])
                  , a = Object(l.useMemo)((function() {
                    return e ? sr()(Object.keys(t), (function(n) {
                        var a, r = t[n];
                        return (null !== (a = ue[e]) && void 0 !== a ? a : []).map((function(e) {
                            return e.address === r.address ? null : [e, r]
                        }
                        )).filter((function(e) {
                            return null !== e
                        }
                        ))
                    }
                    )) : []
                }
                ), [t, e])
                  , r = Object(Ie.d)((function(e) {
                    return e.user.pairs
                }
                ))
                  , o = Object(l.useMemo)((function() {
                    if (!e || !r)
                        return [];
                    var t = r[e];
                    return t ? Object.keys(t).map((function(e) {
                        return [mr(t[e].token0), mr(t[e].token1)]
                    }
                    )) : []
                }
                ), [r, e])
                  , i = Object(l.useMemo)((function() {
                    return o.concat(a).concat(n)
                }
                ), [a, n, o]);
                return Object(l.useMemo)((function() {
                    var e = i.reduce((function(e, t) {
                        var n = Object(f.a)(t, 2)
                          , a = n[0]
                          , r = n[1]
                          , o = a.sortsBefore(r)
                          , i = o ? "".concat(a.address, ":").concat(r.address) : "".concat(r.address, ":").concat(a.address);
                        return e[i] || (e[i] = o ? [a, r] : [r, a]),
                        e
                    }
                    ), {});
                    return Object.keys(e).map((function(t) {
                        return e[t]
                    }
                    ))
                }
                ), [i])
            }()
              , n = Object(l.useMemo)((function() {
                return t.map((function(e) {
                    return {
                        liquidityToken: Er(e),
                        tokens: e
                    }
                }
                ))
            }
            ), [t])
              , a = Object(l.useMemo)((function() {
                return n.map((function(e) {
                    return e.liquidityToken
                }
                ))
            }
            ), [n])
              , r = qr(null !== e && void 0 !== e ? e : void 0, a)
              , o = Object(f.a)(r, 2)
              , i = o[0]
              , s = o[1]
              , d = Object(l.useMemo)((function() {
                return n.filter((function(e) {
                    var t, n = e.liquidityToken;
                    return null === (t = i[n.address]) || void 0 === t ? void 0 : t.greaterThan("0")
                }
                ))
            }
            ), [n, i])
              , m = dt(d.map((function(e) {
                return e.tokens
            }
            )))
              , p = s || (null === m || void 0 === m ? void 0 : m.length) < d.length || (null === m || void 0 === m ? void 0 : m.some((function(e) {
                return !e
            }
            )))
              , b = m.map((function(e) {
                return Object(f.a)(e, 2)[1]
            }
            )).filter((function(e) {
                return Boolean(e)
            }
            ));
            return c.a.createElement(Mc, null, c.a.createElement(uc, null, c.a.createElement(ic, {
                title: "Your Liquidity",
                subtitle: "Remove liquidity to receive tokens back"
            }), c.a.createElement(Xc, null, e ? p ? c.a.createElement(u.X, {
                color: "textSubtle",
                textAlign: "center"
            }, c.a.createElement(pc, null, "Loading")) : (null === b || void 0 === b ? void 0 : b.length) > 0 ? b.map((function(e, t) {
                return c.a.createElement(hc, {
                    key: e.liquidityToken.address,
                    pair: e,
                    mb: t < b.length - 1 ? "16px" : 0
                })
            }
            )) : c.a.createElement(u.X, {
                color: "textSubtle",
                textAlign: "center"
            }, "No liquidity found.") : c.a.createElement(u.X, {
                color: "textSubtle",
                textAlign: "center"
            }, "Connect to a wallet to view your liquidity."), e && !p && c.a.createElement(u.w, {
                flexDirection: "column",
                alignItems: "center",
                mt: "24px"
            }, c.a.createElement(u.X, {
                color: "textSubtle",
                mb: "8px"
            }, "Don't see a pool you joined ?"), c.a.createElement(u.g, {
                id: "import-pool-link",
                variant: "secondary",
                scale: "sm",
                as: Ae.b,
                to: "/find"
            }, "Find other LP tokens"))), c.a.createElement(u.l, {
                style: {
                    textAlign: "center"
                }
            }, c.a.createElement(u.g, {
                id: "import-pool-link",
                as: Ae.b,
                to: "/add",
                width: "100%",
                startIcon: c.a.createElement(u.a, {
                    color: "white"
                })
            }, "Add liquidity"))))
        }
        function Wc() {
            var e = Object(Et.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"]);
            return Wc = function() {
                return e
            }
            ,
            e
        }
        var Vc, Hc = Object(gt.e)(Ae.b)(Wc(), (function(e) {
            return e.theme.colors.primary
        }
        ));
        function Gc() {
            var e = Object(Et.a)(["\n  background-color: ", ";\n  color: ", ";\n  box-shadow: none;\n  border-radius: 16px;\n"]);
            return Gc = function() {
                return e
            }
            ,
            e
        }
        !function(e) {
            e[e.TOKEN0 = 0] = "TOKEN0",
            e[e.TOKEN1 = 1] = "TOKEN1"
        }(Vc || (Vc = {}));
        var Qc = Object(gt.e)(u.g)(Gc(), (function(e) {
            return e.theme.colors.input
        }
        ), (function(e) {
            return e.theme.colors.text
        }
        ));
        function Jc() {
            var e, t = Oe().account, n = Object(l.useState)(Vc.TOKEN1), a = Object(f.a)(n, 2), r = a[0], o = a[1], i = Object(l.useState)(b.d), s = Object(f.a)(i, 2), d = s[0], m = s[1], p = Object(l.useState)(null), y = Object(f.a)(p, 2), h = y[0], v = y[1], g = mt(null !== d && void 0 !== d ? d : void 0, null !== h && void 0 !== h ? h : void 0), E = Object(f.a)(g, 2), w = E[0], k = E[1], C = function() {
                var e = Object(Ie.c)();
                return Object(l.useCallback)((function(t) {
                    e(pn({
                        serializedPair: gr(t)
                    }))
                }
                ), [e])
            }();
            Object(l.useEffect)((function() {
                k && C(k)
            }
            ), [k, C]);
            var O = w === ut.NOT_EXISTS || Boolean(w === ut.EXISTS && k && b.e.equal(k.reserve0.raw, b.e.BigInt(0)) && b.e.equal(k.reserve1.raw, b.e.BigInt(0)))
              , T = Vr(null !== t && void 0 !== t ? t : void 0, null === k || void 0 === k ? void 0 : k.liquidityToken)
              , x = Boolean(T && b.e.greaterThan(T.raw, b.e.BigInt(0)))
              , j = Object(l.useCallback)((function(e) {
                r === Vc.TOKEN0 ? m(e) : v(e)
            }
            ), [r])
              , I = c.a.createElement(jn, {
                padding: "45px 10px"
            }, c.a.createElement(u.X, {
                textAlign: "center"
            }, t ? "Select a token to find your liquidity." : "Connect to a wallet to find pools"))
              , A = Object(u.fb)(c.a.createElement(qi, {
                onCurrencySelect: j,
                showCommonBases: !0,
                selectedCurrency: null !== (e = r === Vc.TOKEN0 ? h : d) && void 0 !== e ? e : void 0
            }))
              , N = Object(f.a)(A, 1)[0];
            return c.a.createElement(Mc, null, c.a.createElement(uc, null, c.a.createElement(ic, {
                title: "Import Pool",
                subtitle: "Import an existing pool",
                backTo: "/pool"
            }), c.a.createElement(Ln, {
                style: {
                    padding: "1rem"
                },
                gap: "md"
            }, c.a.createElement(Qc, {
                endIcon: c.a.createElement(u.p, null),
                onClick: function() {
                    N(),
                    o(Vc.TOKEN0)
                }
            }, d ? c.a.createElement(ma, null, c.a.createElement(go, {
                currency: d
            }), c.a.createElement(u.X, {
                ml: "8px"
            }, d.symbol)) : c.a.createElement(u.X, {
                ml: "8px"
            }, "Select a Token")), c.a.createElement(Un, null, c.a.createElement(u.a, null)), c.a.createElement(Qc, {
                endIcon: c.a.createElement(u.p, null),
                onClick: function() {
                    N(),
                    o(Vc.TOKEN1)
                }
            }, h ? c.a.createElement(ma, null, c.a.createElement(go, {
                currency: h
            }), c.a.createElement(u.X, {
                ml: "8px"
            }, h.symbol)) : c.a.createElement(u.X, {
                as: ma
            }, "Select a Token")), x && c.a.createElement(Un, {
                style: {
                    justifyItems: "center",
                    backgroundColor: "",
                    padding: "12px 0px",
                    borderRadius: "12px"
                }
            }, c.a.createElement(u.X, {
                textAlign: "center"
            }, "Pool Found!"), c.a.createElement(Hc, {
                to: "/pool"
            }, c.a.createElement(u.X, {
                textAlign: "center"
            }, "Manage this pool."))), d && h ? w === ut.EXISTS ? x && k ? c.a.createElement(yc, {
                pair: k
            }) : c.a.createElement(jn, {
                padding: "45px 10px"
            }, c.a.createElement(Ln, {
                gap: "sm",
                justify: "center"
            }, c.a.createElement(u.X, {
                textAlign: "center"
            }, "You don\u2019t have liquidity in this pool yet."), c.a.createElement(Hc, {
                to: "/add/".concat(dc(d), "/").concat(dc(h))
            }, c.a.createElement(u.X, {
                textAlign: "center"
            }, "Add liquidity.")))) : O ? c.a.createElement(jn, {
                padding: "45px 10px"
            }, c.a.createElement(Ln, {
                gap: "sm",
                justify: "center"
            }, c.a.createElement(u.X, {
                textAlign: "center"
            }, "No pool found."), c.a.createElement(Hc, {
                to: "/add/".concat(dc(d), "/").concat(dc(h))
            }, "Create pool."))) : w === ut.INVALID ? c.a.createElement(jn, {
                padding: "45px 10px"
            }, c.a.createElement(Ln, {
                gap: "sm",
                justify: "center"
            }, c.a.createElement(u.X, {
                textAlign: "center",
                fontWeight: 500
            }, "Invalid pair."))) : w === ut.LOADING ? c.a.createElement(jn, {
                padding: "45px 10px"
            }, c.a.createElement(Ln, {
                gap: "sm",
                justify: "center"
            }, c.a.createElement(u.X, {
                textAlign: "center"
            }, "Loading", c.a.createElement(pc, null)))) : null : I)))
        }
        var Zc, $c = n(4);
        !function(e) {
            e.LIQUIDITY_PERCENT = "LIQUIDITY_PERCENT",
            e.LIQUIDITY = "LIQUIDITY",
            e.CURRENCY_A = "CURRENCY_A",
            e.CURRENCY_B = "CURRENCY_B"
        }(Zc || (Zc = {}));
        var eu = Object(De.b)("burn/typeInputBurn");
        function tu() {
            return Object(Ie.d)((function(e) {
                return e.burn
            }
            ))
        }
        function nu() {
            var e = Object(Et.a)(["\n  border: solid 1px ", ";\n  border-radius: 16px;\n  padding: 16px;\n"]);
            return nu = function() {
                return e
            }
            ,
            e
        }
        var au = gt.e.div(nu(), (function(e) {
            return e.theme.colors.cardBorder
        }
        ));
        function ru(e) {
            var t, n, a, r, o, i, s, d, y, h, v, g, w, k, C = e.history, T = e.match.params, x = T.currencyIdA, j = T.currencyIdB, I = null !== (t = _r(x)) && void 0 !== t ? t : void 0, A = null !== (n = _r(j)) && void 0 !== n ? n : void 0, N = Oe(), S = N.account, P = N.chainId, R = N.library, B = Object(l.useMemo)((function() {
                return [it(I, P), it(A, P)]
            }
            ), [I, A, P]), U = Object(f.a)(B, 2), L = U[0], M = U[1], Y = tu(), F = Y.independentField, D = Y.typedValue, z = function(e, t) {
                var n, a, r, o, i, l = Oe(), c = l.account, u = l.chainId, s = tu(), d = s.independentField, m = s.typedValue, p = mt(e, t), y = Object(f.a)(p, 2)[1], h = Wr(null !== c && void 0 !== c ? c : void 0, [null === y || void 0 === y ? void 0 : y.liquidityToken]), v = null === h || void 0 === h ? void 0 : h[null !== (n = null === y || void 0 === y || null === (a = y.liquidityToken) || void 0 === a ? void 0 : a.address) && void 0 !== n ? n : ""], g = [it(e, u), it(t, u)], w = g[0], k = g[1], C = (r = {},
                Object(E.a)(r, Zc.CURRENCY_A, w),
                Object(E.a)(r, Zc.CURRENCY_B, k),
                Object(E.a)(r, Zc.LIQUIDITY, null === y || void 0 === y ? void 0 : y.liquidityToken),
                r), O = sc(null === y || void 0 === y ? void 0 : y.liquidityToken), T = y && O && v && w && b.e.greaterThanOrEqual(O.raw, v.raw) ? new b.k(w,y.getLiquidityValue(w, O, v, !1).raw) : void 0, x = y && O && v && k && b.e.greaterThanOrEqual(O.raw, v.raw) ? new b.k(k,y.getLiquidityValue(k, O, v, !1).raw) : void 0, j = (o = {},
                Object(E.a)(o, Zc.CURRENCY_A, T),
                Object(E.a)(o, Zc.CURRENCY_B, x),
                o), I = new b.g("0","100");
                if (d === Zc.LIQUIDITY_PERCENT)
                    I = new b.g(m,"100");
                else if (d === Zc.LIQUIDITY) {
                    if (null === y || void 0 === y ? void 0 : y.liquidityToken) {
                        var A = Il(m, y.liquidityToken);
                        A && v && !A.greaterThan(v) && (I = new b.g(A.raw,v.raw))
                    }
                } else if (C[d]) {
                    var N = Il(m, C[d])
                      , S = j[d];
                    N && S && !N.greaterThan(S) && (I = new b.g(N.raw,S.raw))
                }
                var P, R, B = (i = {},
                Object(E.a)(i, Zc.LIQUIDITY_PERCENT, I),
                Object(E.a)(i, Zc.LIQUIDITY, v && I && I.greaterThan("0") ? new b.k(v.token,I.multiply(v.raw).quotient) : void 0),
                Object(E.a)(i, Zc.CURRENCY_A, w && I && I.greaterThan("0") && T ? new b.k(w,I.multiply(T.raw).quotient) : void 0),
                Object(E.a)(i, Zc.CURRENCY_B, k && I && I.greaterThan("0") && x ? new b.k(k,I.multiply(x.raw).quotient) : void 0),
                i);
                return c || (P = "Connect Wallet"),
                B[Zc.LIQUIDITY] && B[Zc.CURRENCY_A] && B[Zc.CURRENCY_B] || (P = null !== (R = P) && void 0 !== R ? R : "Enter an amount"),
                {
                    pair: y,
                    parsedAmounts: B,
                    error: P
                }
            }(null !== I && void 0 !== I ? I : void 0, null !== A && void 0 !== A ? A : void 0), K = z.pair, _ = z.parsedAmounts, X = z.error, q = function() {
                var e = Object(Ie.c)();
                return {
                    onUserInput: Object(l.useCallback)((function(t, n) {
                        e(eu({
                            field: t,
                            typedValue: n
                        }))
                    }
                    ), [e])
                }
            }().onUserInput, W = !X, V = Object(l.useState)(!1), H = Object(f.a)(V, 2), G = H[0], Q = H[1], J = Object(l.useState)(!1), Z = Object(f.a)(J, 2), $ = Z[0], ee = Z[1], te = Object(l.useState)(!1), ne = Object(f.a)(te, 2), ae = ne[0], oe = ne[1], ie = Object(l.useState)(""), le = Object(f.a)(ie, 2), ce = le[0], ue = le[1], se = Cc(), de = hr(), me = Object(f.a)(de, 1)[0], pe = (y = {},
            Object(E.a)(y, Zc.LIQUIDITY_PERCENT, _[Zc.LIQUIDITY_PERCENT].equalTo("0") ? "0" : _[Zc.LIQUIDITY_PERCENT].lessThan(new b.g("1","100")) ? "<1" : _[Zc.LIQUIDITY_PERCENT].toFixed(0)),
            Object(E.a)(y, Zc.LIQUIDITY, F === Zc.LIQUIDITY ? D : null !== (a = null === (r = _[Zc.LIQUIDITY]) || void 0 === r ? void 0 : r.toSignificant(6)) && void 0 !== a ? a : ""),
            Object(E.a)(y, Zc.CURRENCY_A, F === Zc.CURRENCY_A ? D : null !== (o = null === (i = _[Zc.CURRENCY_A]) || void 0 === i ? void 0 : i.toSignificant(6)) && void 0 !== o ? o : ""),
            Object(E.a)(y, Zc.CURRENCY_B, F === Zc.CURRENCY_B ? D : null !== (s = null === (d = _[Zc.CURRENCY_B]) || void 0 === d ? void 0 : d.toSignificant(6)) && void 0 !== s ? s : ""),
            y), fe = null === (h = _[Zc.LIQUIDITY_PERCENT]) || void 0 === h ? void 0 : h.equalTo(new b.g("1")), be = jr(null === K || void 0 === K || null === (v = K.liquidityToken) || void 0 === v ? void 0 : v.address, Me.a, k), ye = Object(l.useState)(null), he = Object(f.a)(ye, 2), ve = he[0], ge = he[1], Ee = kc(_[Zc.LIQUIDITY], re), we = Object(f.a)(Ee, 2), ke = we[0], Ce = we[1];
            function Te() {
                return (Te = Object(p.a)(m.a.mark((function e() {
                    var t, n, a, r, o, i, l;
                    return m.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (be && K && R && se) {
                                    e.next = 2;
                                    break
                                }
                                throw new Error("missing dependencies");
                            case 2:
                                if (t = _[Zc.LIQUIDITY]) {
                                    e.next = 5;
                                    break
                                }
                                throw new Error("missing liquidity amount");
                            case 5:
                                return e.next = 7,
                                be.nonces(S);
                            case 7:
                                n = e.sent,
                                a = [{
                                    name: "name",
                                    type: "string"
                                }, {
                                    name: "version",
                                    type: "string"
                                }, {
                                    name: "chainId",
                                    type: "uint256"
                                }, {
                                    name: "verifyingContract",
                                    type: "address"
                                }],
                                r = {
                                    name: "Pancake LPs",
                                    version: "1",
                                    chainId: P,
                                    verifyingContract: K.liquidityToken.address
                                },
                                o = [{
                                    name: "owner",
                                    type: "address"
                                }, {
                                    name: "spender",
                                    type: "address"
                                }, {
                                    name: "value",
                                    type: "uint256"
                                }, {
                                    name: "nonce",
                                    type: "uint256"
                                }, {
                                    name: "deadline",
                                    type: "uint256"
                                }],
                                i = {
                                    owner: S,
                                    spender: re,
                                    value: t.raw.toString(),
                                    nonce: n.toHexString(),
                                    deadline: se.toNumber()
                                },
                                l = JSON.stringify({
                                    types: {
                                        EIP712Domain: a,
                                        Permit: o
                                    },
                                    domain: r,
                                    primaryType: "Permit",
                                    message: i
                                }),
                                R.send("eth_signTypedData_v4", [S, l]).then($c.splitSignature).then((function(e) {
                                    ge({
                                        v: e.v,
                                        r: e.r,
                                        s: e.s,
                                        deadline: se.toNumber()
                                    })
                                }
                                )).catch((function(e) {
                                    4001 !== (null === e || void 0 === e ? void 0 : e.code) && Ce()
                                }
                                ));
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            var xe = Object(l.useCallback)((function(e, t) {
                return ge(null),
                q(e, t)
            }
            ), [q])
              , je = Object(l.useCallback)((function(e) {
                return xe(Zc.LIQUIDITY, e)
            }
            ), [xe])
              , Ae = Object(l.useCallback)((function(e) {
                return xe(Zc.CURRENCY_A, e)
            }
            ), [xe])
              , Ne = Object(l.useCallback)((function(e) {
                return xe(Zc.CURRENCY_B, e)
            }
            ), [xe])
              , Se = Wl();
            function Pe() {
                return Re.apply(this, arguments)
            }
            function Re() {
                return (Re = Object(p.a)(m.a.mark((function e() {
                    var t, n, a, r, o, i, l, c, u, s, d, p, f, y;
                    return m.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (P && R && S && se) {
                                    e.next = 2;
                                    break
                                }
                                throw new Error("missing dependencies");
                            case 2:
                                if (n = _[Zc.CURRENCY_A],
                                a = _[Zc.CURRENCY_B],
                                n && a) {
                                    e.next = 5;
                                    break
                                }
                                throw new Error("missing currency amounts");
                            case 5:
                                if (r = Ta(0, R, S),
                                t = {},
                                Object(E.a)(t, Zc.CURRENCY_A, Ca(n, me)[0]),
                                Object(E.a)(t, Zc.CURRENCY_B, Ca(a, me)[0]),
                                o = t,
                                I && A) {
                                    e.next = 9;
                                    break
                                }
                                throw new Error("missing tokens");
                            case 9:
                                if (i = _[Zc.LIQUIDITY]) {
                                    e.next = 12;
                                    break
                                }
                                throw new Error("missing liquidity amount");
                            case 12:
                                if (l = A === b.d,
                                c = I === b.d || l,
                                L && M) {
                                    e.next = 16;
                                    break
                                }
                                throw new Error("could not wrap");
                            case 16:
                                if (ke !== gc.APPROVED) {
                                    e.next = 20;
                                    break
                                }
                                c ? (u = ["removeLiquidityETH", "removeLiquidityETHSupportingFeeOnTransferTokens"],
                                s = [l ? L.address : M.address, i.raw.toString(), o[l ? Zc.CURRENCY_A : Zc.CURRENCY_B].toString(), o[l ? Zc.CURRENCY_B : Zc.CURRENCY_A].toString(), S, se.toHexString()]) : (u = ["removeLiquidity"],
                                s = [L.address, M.address, i.raw.toString(), o[Zc.CURRENCY_A].toString(), o[Zc.CURRENCY_B].toString(), S, se.toHexString()]),
                                e.next = 25;
                                break;
                            case 20:
                                if (null === ve) {
                                    e.next = 24;
                                    break
                                }
                                c ? (u = ["removeLiquidityETHWithPermit", "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"],
                                s = [l ? L.address : M.address, i.raw.toString(), o[l ? Zc.CURRENCY_A : Zc.CURRENCY_B].toString(), o[l ? Zc.CURRENCY_B : Zc.CURRENCY_A].toString(), S, ve.deadline, !1, ve.v, ve.r, ve.s]) : (u = ["removeLiquidityWithPermit"],
                                s = [L.address, M.address, i.raw.toString(), o[Zc.CURRENCY_A].toString(), o[Zc.CURRENCY_B].toString(), S, ve.deadline, !1, ve.v, ve.r, ve.s]),
                                e.next = 25;
                                break;
                            case 24:
                                throw new Error("Attempting to confirm without approval or a signature. Please contact support.");
                            case 25:
                                return e.next = 27,
                                Promise.all(u.map((function(e) {
                                    var t;
                                    return (t = r.estimateGas)[e].apply(t, Object(O.a)(s)).then(ka).catch((function(t) {
                                        console.error("estimateGas failed", e, s, t)
                                    }
                                    ))
                                }
                                )));
                            case 27:
                                if (d = e.sent,
                                -1 !== (p = d.findIndex((function(e) {
                                    return gn.a.isBigNumber(e)
                                }
                                )))) {
                                    e.next = 33;
                                    break
                                }
                                console.error("This transaction would fail. Please contact support."),
                                e.next = 38;
                                break;
                            case 33:
                                return f = u[p],
                                y = d[p],
                                oe(!0),
                                e.next = 38,
                                r[f].apply(r, Object(O.a)(s).concat([{
                                    gasLimit: y
                                }])).then((function(e) {
                                    var t, n;
                                    oe(!1),
                                    Se(e, {
                                        summary: "Remove " + (null === (t = _[Zc.CURRENCY_A]) || void 0 === t ? void 0 : t.toSignificant(3)) + " " + (null === I || void 0 === I ? void 0 : I.symbol) + " and " + (null === (n = _[Zc.CURRENCY_B]) || void 0 === n ? void 0 : n.toSignificant(3)) + " " + (null === A || void 0 === A ? void 0 : A.symbol)
                                    }),
                                    ue(e.hash)
                                }
                                )).catch((function(e) {
                                    oe(!1),
                                    console.error(e)
                                }
                                ));
                            case 38:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function Be() {
                var e, t;
                return c.a.createElement(Ln, {
                    gap: "md",
                    style: {
                        marginTop: "20px"
                    }
                }, c.a.createElement(ca, {
                    align: "flex-end"
                }, c.a.createElement(u.X, {
                    fontSize: "24px"
                }, null === (e = _[Zc.CURRENCY_A]) || void 0 === e ? void 0 : e.toSignificant(6)), c.a.createElement(da, {
                    gap: "4px"
                }, c.a.createElement(go, {
                    currency: I,
                    size: "24px"
                }), c.a.createElement(u.X, {
                    fontSize: "24px",
                    ml: "10px"
                }, null === I || void 0 === I ? void 0 : I.symbol))), c.a.createElement(da, null, c.a.createElement(u.a, {
                    width: "16px"
                })), c.a.createElement(ca, {
                    align: "flex-end"
                }, c.a.createElement(u.X, {
                    fontSize: "24px"
                }, null === (t = _[Zc.CURRENCY_B]) || void 0 === t ? void 0 : t.toSignificant(6)), c.a.createElement(da, {
                    gap: "4px"
                }, c.a.createElement(go, {
                    currency: A,
                    size: "24px"
                }), c.a.createElement(u.X, {
                    fontSize: "24px",
                    ml: "10px"
                }, null === A || void 0 === A ? void 0 : A.symbol))), c.a.createElement(u.X, {
                    small: !0,
                    textAlign: "left",
                    pt: "12px"
                }, "Output is estimated. If the price changes by more than ".concat(me / 100, "% your transaction will revert.")))
            }
            function Ue() {
                var e;
                return c.a.createElement(c.a.Fragment, null, c.a.createElement(ca, null, c.a.createElement(u.X, null, "".concat(null === I || void 0 === I ? void 0 : I.symbol, "/").concat(null === A || void 0 === A ? void 0 : A.symbol), " Burned"), c.a.createElement(da, null, c.a.createElement(ko, {
                    currency0: I,
                    currency1: A,
                    margin: !0
                }), c.a.createElement(u.X, null, null === (e = _[Zc.LIQUIDITY]) || void 0 === e ? void 0 : e.toSignificant(6)))), K && c.a.createElement(c.a.Fragment, null, c.a.createElement(ca, null, c.a.createElement(u.X, null, "Price"), c.a.createElement(u.X, null, "1 ", null === I || void 0 === I ? void 0 : I.symbol, " = ", L ? K.priceOf(L).toSignificant(6) : "-", " ", null === A || void 0 === A ? void 0 : A.symbol)), c.a.createElement(ca, null, c.a.createElement("div", null), c.a.createElement(u.X, null, "1 ", null === A || void 0 === A ? void 0 : A.symbol, " = ", M ? K.priceOf(M).toSignificant(6) : "-", " ", null === I || void 0 === I ? void 0 : I.symbol))), c.a.createElement(u.g, {
                    disabled: !(ke === gc.APPROVED || null !== ve),
                    onClick: Pe
                }, "Confirm"))
            }
            var Le = "Removing ".concat(null === (g = _[Zc.CURRENCY_A]) || void 0 === g ? void 0 : g.toSignificant(6), " ").concat(null === I || void 0 === I ? void 0 : I.symbol, " and ").concat(null === (w = _[Zc.CURRENCY_B]) || void 0 === w ? void 0 : w.toSignificant(6), " ").concat(null === A || void 0 === A ? void 0 : A.symbol)
              , Ye = Object(l.useCallback)((function(e) {
                xe(Zc.LIQUIDITY_PERCENT, e.toString())
            }
            ), [xe])
              , Fe = I === b.d || A === b.d
              , De = Boolean(P && (I && Object(b.o)(b.n[P], I) || A && Object(b.o)(b.n[P], A)))
              , ze = Object(l.useCallback)((function(e) {
                j && dc(e) === j ? C.push("/remove/".concat(dc(e), "/").concat(x)) : C.push("/remove/".concat(dc(e), "/").concat(j))
            }
            ), [x, j, C])
              , Ke = Object(l.useCallback)((function(e) {
                x && dc(e) === x ? C.push("/remove/".concat(j, "/").concat(dc(e))) : C.push("/remove/".concat(x, "/").concat(dc(e)))
            }
            ), [x, j, C])
              , _e = Object(l.useCallback)((function() {
                Q(!1),
                ge(null),
                ce && xe(Zc.LIQUIDITY_PERCENT, "0"),
                ue("")
            }
            ), [xe, ce])
              , Xe = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100
                  , a = Object(l.useState)((function() {
                    return e
                }
                ))
                  , r = Object(f.a)(a, 2)
                  , o = r[0]
                  , i = r[1]
                  , c = Object(l.useRef)()
                  , u = Object(l.useCallback)((function(e) {
                    i(e),
                    c.current && clearTimeout(c.current),
                    c.current = setTimeout((function() {
                        t(e),
                        c.current = void 0
                    }
                    ), n)
                }
                ), [n, t]);
                return Object(l.useEffect)((function() {
                    c.current && (clearTimeout(c.current),
                    c.current = void 0),
                    i(e)
                }
                ), [e]),
                [o, u]
            }(Number.parseInt(_[Zc.LIQUIDITY_PERCENT].toFixed(0)), Ye)
              , qe = Object(f.a)(Xe, 2)
              , We = qe[0]
              , Ve = qe[1];
            return c.a.createElement(Mc, null, c.a.createElement(uc, null, c.a.createElement(Fa, {
                isOpen: G,
                onDismiss: _e,
                attemptingTxn: ae,
                hash: ce || "",
                content: function() {
                    return c.a.createElement(Ma, {
                        title: "You will receive",
                        onDismiss: _e,
                        topContent: Be,
                        bottomContent: Ue
                    })
                },
                pendingText: Le
            }), c.a.createElement(ic, {
                backTo: "/pool",
                title: "Remove ".concat(null === I || void 0 === I ? void 0 : I.symbol, "-").concat(null === A || void 0 === A ? void 0 : A.symbol, " liquidity"),
                subtitle: "To receive ".concat(null === I || void 0 === I ? void 0 : I.symbol, " and ").concat(null === A || void 0 === A ? void 0 : A.symbol),
                noConfig: !0
            }), c.a.createElement(u.k, null, c.a.createElement(Ln, {
                gap: "20px"
            }, c.a.createElement(ca, null, c.a.createElement(u.X, null, "Amount"), c.a.createElement(u.g, {
                variant: "text",
                scale: "sm",
                onClick: function() {
                    return ee(!$)
                }
            }, $ ? "Simple" : "Detailed")), !$ && c.a.createElement(au, null, c.a.createElement(u.X, {
                fontSize: "40px",
                bold: !0,
                mb: "16px",
                style: {
                    lineHeight: 1
                }
            }, pe[Zc.LIQUIDITY_PERCENT], "%"), c.a.createElement(u.U, {
                name: "lp-amount",
                min: 0,
                max: 100,
                value: We,
                onValueChanged: function(e) {
                    return Ve(Math.ceil(e))
                },
                mb: "16px"
            }), c.a.createElement(u.w, {
                flexWrap: "wrap",
                justifyContent: "space-evenly"
            }, c.a.createElement(u.g, {
                variant: "tertiary",
                scale: "sm",
                onClick: function() {
                    return xe(Zc.LIQUIDITY_PERCENT, "25")
                }
            }, "25%"), c.a.createElement(u.g, {
                variant: "tertiary",
                scale: "sm",
                onClick: function() {
                    return xe(Zc.LIQUIDITY_PERCENT, "50")
                }
            }, "50%"), c.a.createElement(u.g, {
                variant: "tertiary",
                scale: "sm",
                onClick: function() {
                    return xe(Zc.LIQUIDITY_PERCENT, "75")
                }
            }, "75%"), c.a.createElement(u.g, {
                variant: "tertiary",
                scale: "sm",
                onClick: function() {
                    return xe(Zc.LIQUIDITY_PERCENT, "100")
                }
            }, "Max")))), !$ && c.a.createElement(c.a.Fragment, null, c.a.createElement(Un, null, c.a.createElement(u.c, {
                color: "textSubtle",
                width: "24px",
                my: "16px"
            })), c.a.createElement(Ln, {
                gap: "10px"
            }, c.a.createElement(u.X, {
                bold: !0,
                color: "secondary",
                fontSize: "12px"
            }, "YOU WILL RECEIVE"), c.a.createElement(In, null, c.a.createElement(u.w, {
                justifyContent: "space-between",
                mb: "8px"
            }, c.a.createElement(u.w, null, c.a.createElement(go, {
                currency: I
            }), c.a.createElement(u.X, {
                small: !0,
                color: "textSubtle",
                id: "remove-liquidity-tokena-symbol",
                ml: "4px"
            }, null === I || void 0 === I ? void 0 : I.symbol)), c.a.createElement(u.X, {
                small: !0
            }, pe[Zc.CURRENCY_A] || "-")), c.a.createElement(u.w, {
                justifyContent: "space-between"
            }, c.a.createElement(u.w, null, c.a.createElement(go, {
                currency: A
            }), c.a.createElement(u.X, {
                small: !0,
                color: "textSubtle",
                id: "remove-liquidity-tokenb-symbol",
                ml: "4px"
            }, null === A || void 0 === A ? void 0 : A.symbol)), c.a.createElement(u.X, {
                small: !0
            }, pe[Zc.CURRENCY_B] || "-")), P && (De || Fe) ? c.a.createElement(ca, {
                style: {
                    justifyContent: "flex-end",
                    fontSize: "14px"
                }
            }, Fe ? c.a.createElement(Hc, {
                to: "/remove/".concat(I === b.d ? b.n[P].address : x, "/").concat(A === b.d ? b.n[P].address : j)
            }, "Receive WBNB") : De ? c.a.createElement(Hc, {
                to: "/remove/".concat(I && Object(b.o)(I, b.n[P]) ? "BNB" : x, "/").concat(A && Object(b.o)(A, b.n[P]) ? "BNB" : j)
            }, "Receive BNB") : null) : null))), $ && c.a.createElement(u.f, {
                my: "16px"
            }, c.a.createElement(cl, {
                value: pe[Zc.LIQUIDITY],
                onUserInput: je,
                onMax: function() {
                    xe(Zc.LIQUIDITY_PERCENT, "100")
                },
                showMaxButton: !fe,
                disableCurrencySelect: !0,
                currency: null === K || void 0 === K ? void 0 : K.liquidityToken,
                pair: K,
                id: "liquidity-amount",
                onCurrencySelect: function() {
                    return null
                }
            }), c.a.createElement(Un, null, c.a.createElement(u.c, {
                width: "24px",
                my: "16px"
            })), c.a.createElement(cl, {
                hideBalance: !0,
                value: pe[Zc.CURRENCY_A],
                onUserInput: Ae,
                onMax: function() {
                    return xe(Zc.LIQUIDITY_PERCENT, "100")
                },
                showMaxButton: !fe,
                currency: I,
                label: "Output",
                onCurrencySelect: ze,
                id: "remove-liquidity-tokena"
            }), c.a.createElement(Un, null, c.a.createElement(u.a, {
                width: "24px",
                my: "16px"
            })), c.a.createElement(cl, {
                hideBalance: !0,
                value: pe[Zc.CURRENCY_B],
                onUserInput: Ne,
                onMax: function() {
                    return xe(Zc.LIQUIDITY_PERCENT, "100")
                },
                showMaxButton: !fe,
                currency: A,
                label: "Output",
                onCurrencySelect: Ke,
                id: "remove-liquidity-tokenb"
            })), K && c.a.createElement(Ln, {
                gap: "10px",
                style: {
                    marginTop: "16px"
                }
            }, c.a.createElement(u.X, {
                bold: !0,
                color: "secondary",
                fontSize: "12px"
            }, "PRICES"), c.a.createElement(In, null, c.a.createElement(u.w, {
                justifyContent: "space-between"
            }, c.a.createElement(u.X, {
                small: !0,
                color: "textSubtle"
            }, "1 ", null === I || void 0 === I ? void 0 : I.symbol, " ="), c.a.createElement(u.X, {
                small: !0
            }, L ? K.priceOf(L).toSignificant(6) : "-", " ", null === A || void 0 === A ? void 0 : A.symbol)), c.a.createElement(u.w, {
                justifyContent: "space-between"
            }, c.a.createElement(u.X, {
                small: !0,
                color: "textSubtle"
            }, "1 ", null === A || void 0 === A ? void 0 : A.symbol, " ="), c.a.createElement(u.X, {
                small: !0
            }, M ? K.priceOf(M).toSignificant(6) : "-", " ", null === I || void 0 === I ? void 0 : I.symbol)))), c.a.createElement(u.f, {
                position: "relative",
                mt: "16px"
            }, S ? c.a.createElement(ca, null, c.a.createElement(u.g, {
                variant: ke === gc.APPROVED || null !== ve ? "success" : "primary",
                onClick: function() {
                    return Te.apply(this, arguments)
                },
                disabled: ke !== gc.NOT_APPROVED || null !== ve,
                width: "100%",
                mr: "0.5rem"
            }, ke === gc.PENDING ? c.a.createElement(pc, null, "Approving") : ke === gc.APPROVED || null !== ve ? "Approved" : "Approve"), c.a.createElement(u.g, {
                variant: !W && _[Zc.CURRENCY_A] && _[Zc.CURRENCY_B] ? "danger" : "primary",
                onClick: function() {
                    Q(!0)
                },
                width: "100%",
                disabled: !W || null === ve && ke !== gc.APPROVED
            }, X || "Remove")) : c.a.createElement(wc, null)))), K ? c.a.createElement(Ln, {
                style: {
                    minWidth: "20rem",
                    width: "100%",
                    maxWidth: "400px",
                    marginTop: "1rem"
                }
            }, c.a.createElement(yc, {
                showUnwrapped: De,
                pair: K
            })) : null)
        }
        var ou = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;
        function iu(e) {
            var t = e.match.params.tokens;
            if (!ou.test(t))
                return c.a.createElement(Le.a, {
                    to: "/pool"
                });
            var n = t.split("-")
              , a = Object(f.a)(n, 2)
              , r = a[0]
              , o = a[1];
            return c.a.createElement(Le.a, {
                to: "/remove/".concat(r, "/").concat(o)
            })
        }
        function lu() {
            var e = Object(Et.a)(["\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  width: 0;\n  background-color: ", ";\n  transition: color 300ms ", ";\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ", ";\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"]);
            return lu = function() {
                return e
            }
            ,
            e
        }
        function cu() {
            var e = Object(Et.a)(["\n  flex: 1;\n  padding: 1rem;\n"]);
            return cu = function() {
                return e
            }
            ,
            e
        }
        function uu() {
            var e = Object(Et.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ", ";\n  transition: border-color 300ms ", ",\n    color 500ms ", ";\n  background-color: ", ";\n"]);
            return uu = function() {
                return e
            }
            ,
            e
        }
        function su() {
            var e = Object(Et.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ", ";\n  z-index: 1;\n  width: 100%;\n"]);
            return su = function() {
                return e
            }
            ,
            e
        }
        var du = gt.e.div(su(), (function(e) {
            return e.theme.colors.backgroundAlt
        }
        ))
          , mu = gt.e.div(uu(), (function(e) {
            var t = e.error
              , n = e.theme;
            return t ? n.colors.failure : n.colors.background
        }
        ), (function(e) {
            return e.error ? "step-end" : "step-start"
        }
        ), (function(e) {
            return e.error ? "step-end" : "step-start"
        }
        ), (function(e) {
            return e.theme.colors.backgroundAlt
        }
        ))
          , pu = gt.e.div(cu())
          , fu = gt.e.input(lu(), (function(e) {
            return e.theme.colors.backgroundAlt
        }
        ), (function(e) {
            return e.error ? "step-end" : "step-start"
        }
        ), (function(e) {
            var t = e.error
              , n = e.theme;
            return t ? n.colors.failure : n.colors.primary
        }
        ), (function(e) {
            return e.theme.colors.textDisabled
        }
        ), (function(e) {
            return e.theme.colors.textDisabled
        }
        ));
        function bu(e) {
            var t = e.id
              , n = e.value
              , a = e.onChange
              , r = Oe().chainId
              , o = ul(n)
              , i = o.address
              , s = o.loading
              , d = o.name
              , m = Object(l.useCallback)((function(e) {
                var t = e.target.value.replace(/\s+/g, "");
                a(t)
            }
            ), [a])
              , p = Boolean(n.length > 0 && !s && !i);
            return c.a.createElement(du, {
                id: t
            }, c.a.createElement(mu, {
                error: p
            }, c.a.createElement(pu, null, c.a.createElement(Ln, {
                gap: "md"
            }, c.a.createElement(ca, null, c.a.createElement(u.X, null, "Recipient"), i && r && c.a.createElement(u.E, {
                external: !0,
                small: !0,
                href: Ea(r, null !== d && void 0 !== d ? d : i, "address")
            }, "(View on BscScan)")), c.a.createElement(fu, {
                className: "recipient-address-input",
                type: "text",
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "off",
                spellCheck: "false",
                placeholder: "Wallet Address or ENS name",
                error: p,
                pattern: "^(0x[a-fA-F0-9]{40})$",
                onChange: m,
                value: n
            })))))
        }
        function yu() {
            var e = Object(Et.a)(["\n  background-color: ", ";\n  color: ", ";\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n"]);
            return yu = function() {
                return e
            }
            ,
            e
        }
        function hu() {
            var e = Object(Et.a)(["\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n"]);
            return hu = function() {
                return e
            }
            ,
            e
        }
        function vu() {
            var e = Object(Et.a)(["\n  background-color: ", ";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ", ";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n"]);
            return vu = function() {
                return e
            }
            ,
            e
        }
        function gu() {
            var e = Object(Et.a)(["\n  width: 220px;\n"]);
            return gu = function() {
                return e
            }
            ,
            e
        }
        function Eu() {
            var e = Object(Et.a)(["\n  height: 22px;\n  width: 22px;\n  background-color: ", ";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ", ";\n  }\n  :focus {\n    background-color: ", ";\n    outline: none;\n  }\n"]);
            return Eu = function() {
                return e
            }
            ,
            e
        }
        function wu() {
            var e = Object(Et.a)(["\n  color: ", ";\n"]);
            return wu = function() {
                return e
            }
            ,
            e
        }
        function ku() {
            var e = Object(Et.a)(["\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        "]);
            return ku = function() {
                return e
            }
            ,
            e
        }
        function Cu() {
            var e = Object(Et.a)(["\n  padding: 2px;\n\n  ", "\n"]);
            return Cu = function() {
                return e
            }
            ,
            e
        }
        function Ou() {
            var e = Object(Et.a)(["\n  position: relative;\n  padding: 1rem;\n"]);
            return Ou = function() {
                return e
            }
            ,
            e
        }
        var Tu = gt.e.div(Ou())
          , xu = gt.e.div(Cu(), (function(e) {
            return e.clickable ? Object(gt.d)(ku()) : null
        }
        ))
          , ju = Object(gt.e)(u.X)(wu(), (function(e) {
            var t = e.theme
              , n = e.severity;
            return 3 === n || 4 === n ? t.colors.failure : 2 === n ? t.colors.warning : 1 === n ? t.colors.text : t.colors.success
        }
        ))
          , Iu = gt.e.button(Eu(), (function(e) {
            return e.theme.colors.background
        }
        ), (function(e) {
            return e.theme.colors.text
        }
        ), (function(e) {
            return e.theme.colors.dropdown
        }
        ), (function(e) {
            return e.theme.colors.dropdown
        }
        ))
          , Au = Object(gt.e)(u.X).attrs({
            ellipsis: !0
        })(gu())
          , Nu = gt.e.div(vu(), (function(e) {
            var t = e.theme;
            return Object(Da.b)(.9, t.colors.failure)
        }
        ), (function(e) {
            return e.theme.colors.failure
        }
        ))
          , Su = gt.e.div(hu(), (function(e) {
            var t = e.theme;
            return Object(Da.b)(.9, t.colors.failure)
        }
        ));
        function Pu(e) {
            var t = e.error;
            return c.a.createElement(Nu, null, c.a.createElement(Su, null, c.a.createElement(u.v, {
                width: "24px"
            })), c.a.createElement("p", null, t))
        }
        var Ru = Object(gt.e)(Ln)(yu(), (function(e) {
            var t = e.theme;
            return Object(Da.b)(.9, t.colors.primary)
        }
        ), (function(e) {
            return e.theme.colors.primary
        }
        ));
        function Bu(e) {
            var t = e.priceImpact;
            return c.a.createElement(ju, {
                fontSize: "14px",
                severity: Tl(t)
            }, t ? t.lessThan(me) ? "<0.01%" : "".concat(t.toFixed(2), "%") : "-")
        }
        function Uu(e) {
            var t, n, a, r, o = e.trade, i = e.onConfirm, s = e.allowedSlippage, d = e.swapErrorMessage, m = e.disabledConfirm, p = Object(l.useState)(!1), y = Object(f.a)(p, 2), h = y[0], v = y[1], g = Object(l.useMemo)((function() {
                return Ol(o, s)
            }
            ), [s, o]), E = Object(l.useMemo)((function() {
                return Cl(o)
            }
            ), [o]), w = E.priceImpactWithoutFee, k = E.realizedLPFee, C = Tl(w);
            return c.a.createElement(c.a.Fragment, null, c.a.createElement(Ln, {
                gap: "0px"
            }, c.a.createElement(ca, {
                align: "center"
            }, c.a.createElement(u.X, {
                fontSize: "14px"
            }, "Price"), c.a.createElement(u.X, {
                fontSize: "14px",
                style: {
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    textAlign: "right",
                    paddingLeft: "10px"
                }
            }, function(e, t) {
                return e ? t ? "".concat(e.executionPrice.invert().toSignificant(6), " ").concat(e.inputAmount.currency.symbol, " / ").concat(e.outputAmount.currency.symbol) : "".concat(e.executionPrice.toSignificant(6), " ").concat(e.outputAmount.currency.symbol, " / ").concat(e.inputAmount.currency.symbol) : ""
            }(o, h), c.a.createElement(Iu, {
                onClick: function() {
                    return v(!h)
                }
            }, c.a.createElement(u.e, {
                width: "14px"
            })))), c.a.createElement(ca, null, c.a.createElement(da, null, c.a.createElement(u.X, {
                fontSize: "14px"
            }, o.tradeType === b.m.EXACT_INPUT ? "Minimum received" : "Maximum sold"), c.a.createElement(Zr, {
                text: "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.",
                ml: "4px"
            })), c.a.createElement(da, null, c.a.createElement(u.X, {
                fontSize: "14px"
            }, o.tradeType === b.m.EXACT_INPUT ? null !== (t = null === (n = g[pl.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(4)) && void 0 !== t ? t : "-" : null !== (a = null === (r = g[pl.INPUT]) || void 0 === r ? void 0 : r.toSignificant(4)) && void 0 !== a ? a : "-"), c.a.createElement(u.X, {
                fontSize: "14px",
                marginLeft: "4px"
            }, o.tradeType === b.m.EXACT_INPUT ? o.outputAmount.currency.symbol : o.inputAmount.currency.symbol))), c.a.createElement(ca, null, c.a.createElement(da, null, c.a.createElement(u.X, {
                fontSize: "14px"
            }, "Price Impact"), c.a.createElement(Zr, {
                text: "The difference between the market price and your price due to trade size.",
                ml: "4px"
            })), c.a.createElement(Bu, {
                priceImpact: w
            })), c.a.createElement(ca, null, c.a.createElement(da, null, c.a.createElement(u.X, {
                fontSize: "14px"
            }, "Liquidity Provider Fee"), c.a.createElement(Zr, {
                text: c.a.createElement(c.a.Fragment, null, c.a.createElement(u.X, {
                    mb: "12px"
                }, "For each trade a 0.25% fee is paid"), c.a.createElement(u.X, null, "- 0.17% to LP token holders"), c.a.createElement(u.X, null, "- 0.03% to the Treasury"), c.a.createElement(u.X, null, "- 0.05% towards CAKE buyback and burn")),
                ml: "4px"
            })), c.a.createElement(u.X, {
                fontSize: "14px"
            }, k ? (null === k || void 0 === k ? void 0 : k.toSignificant(6)) + " " + o.inputAmount.currency.symbol : "-"))), c.a.createElement(sa, null, c.a.createElement(u.g, {
                variant: C > 2 ? "danger" : "primary",
                onClick: i,
                disabled: m,
                mt: "12px",
                id: "confirm-swap-or-send",
                width: "100%"
            }, C > 2 ? "Swap Anyway" : "Confirm Swap"), d ? c.a.createElement(Pu, {
                error: d
            }) : null))
        }
        function Lu(e) {
            var t, n, a = e.trade, r = e.allowedSlippage, o = e.recipient, i = e.showAcceptChanges, s = e.onAcceptChanges, d = Object(l.useMemo)((function() {
                return Ol(a, r)
            }
            ), [a, r]), m = Tl(Object(l.useMemo)((function() {
                return Cl(a)
            }
            ), [a]).priceImpactWithoutFee);
            return c.a.createElement(Ln, {
                gap: "md",
                style: {
                    marginTop: "20px"
                }
            }, c.a.createElement(ca, {
                align: "flex-end"
            }, c.a.createElement(da, {
                gap: "0px"
            }, c.a.createElement(go, {
                currency: a.inputAmount.currency,
                size: "24px",
                style: {
                    marginRight: "12px"
                }
            }), c.a.createElement(Au, {
                fontSize: "24px",
                color: i && a.tradeType === b.m.EXACT_OUTPUT ? "primary" : "text"
            }, a.inputAmount.toSignificant(6))), c.a.createElement(da, {
                gap: "0px"
            }, c.a.createElement(u.X, {
                fontSize: "24px",
                ml: "10px"
            }, a.inputAmount.currency.symbol))), c.a.createElement(da, null, c.a.createElement(u.c, {
                width: "16px",
                ml: "4px"
            })), c.a.createElement(ca, {
                align: "flex-end"
            }, c.a.createElement(da, {
                gap: "0px"
            }, c.a.createElement(go, {
                currency: a.outputAmount.currency,
                size: "24px",
                style: {
                    marginRight: "12px"
                }
            }), c.a.createElement(Au, {
                fontSize: "24px",
                color: m > 2 ? "failure" : i && a.tradeType === b.m.EXACT_INPUT ? "primary" : "text"
            }, a.outputAmount.toSignificant(6))), c.a.createElement(da, {
                gap: "0px"
            }, c.a.createElement(u.X, {
                fontSize: "24px",
                ml: "10px"
            }, a.outputAmount.currency.symbol))), i ? c.a.createElement(Ru, {
                justify: "flex-start",
                gap: "0px"
            }, c.a.createElement(ca, null, c.a.createElement(da, null, c.a.createElement(u.v, {
                mr: "8px"
            }), c.a.createElement(u.X, {
                color: "primary"
            }, " Price Updated")), c.a.createElement(u.g, {
                onClick: s
            }, "Accept"))) : null, c.a.createElement(Ln, {
                justify: "flex-start",
                gap: "sm",
                style: {
                    padding: "12px 0 0 0px"
                }
            }, a.tradeType === b.m.EXACT_INPUT ? c.a.createElement(u.X, {
                small: !0,
                textAlign: "left",
                style: {
                    width: "100%"
                }
            }, "Output is estimated. You will receive at least ", c.a.createElement("b", null, null === (t = d[pl.OUTPUT]) || void 0 === t ? void 0 : t.toSignificant(6), " ", a.outputAmount.currency.symbol), " or the transaction will revert.") : c.a.createElement(u.X, {
                small: !0,
                textAlign: "left",
                style: {
                    width: "100%"
                }
            }, "Input is estimated. You will sell at most ", c.a.createElement("b", null, null === (n = d[pl.INPUT]) || void 0 === n ? void 0 : n.toSignificant(6), " ", a.inputAmount.currency.symbol), " or the transaction will revert.")), null !== o ? c.a.createElement(Ln, {
                justify: "flex-start",
                gap: "sm",
                style: {
                    padding: "12px 0 0 0px"
                }
            }, c.a.createElement(u.X, {
                color: "textSubtle"
            }, "Output will be sent to", " ", c.a.createElement("b", {
                title: o
            }, ga(o) ? wa(o) : o))) : null)
        }
        function Mu(e) {
            var t, n, a, r, o, i, u = e.trade, s = e.originalTrade, d = e.onAcceptChanges, m = e.allowedSlippage, p = e.onConfirm, f = e.onDismiss, y = e.recipient, h = e.swapErrorMessage, v = e.isOpen, g = e.attemptingTxn, E = e.txHash, w = Object(l.useMemo)((function() {
                return Boolean(u && s && (t = s,
                (e = u).tradeType !== t.tradeType || !Object(b.o)(e.inputAmount.currency, t.inputAmount.currency) || !e.inputAmount.equalTo(t.inputAmount) || !Object(b.o)(e.outputAmount.currency, t.outputAmount.currency) || !e.outputAmount.equalTo(t.outputAmount)));
                var e, t
            }
            ), [s, u]), k = Object(l.useCallback)((function() {
                return u ? c.a.createElement(Lu, {
                    trade: u,
                    allowedSlippage: m,
                    recipient: y,
                    showAcceptChanges: w,
                    onAcceptChanges: d
                }) : null
            }
            ), [m, d, y, w, u]), C = Object(l.useCallback)((function() {
                return u ? c.a.createElement(Uu, {
                    onConfirm: p,
                    trade: u,
                    disabledConfirm: w,
                    swapErrorMessage: h,
                    allowedSlippage: m
                }) : null
            }
            ), [m, p, w, h, u]), O = "Swapping ".concat(null === u || void 0 === u || null === (t = u.inputAmount) || void 0 === t ? void 0 : t.toSignificant(6), " ").concat(null === u || void 0 === u || null === (n = u.inputAmount) || void 0 === n || null === (a = n.currency) || void 0 === a ? void 0 : a.symbol, " for ").concat(null === u || void 0 === u || null === (r = u.outputAmount) || void 0 === r ? void 0 : r.toSignificant(6), " ").concat(null === u || void 0 === u || null === (o = u.outputAmount) || void 0 === o || null === (i = o.currency) || void 0 === i ? void 0 : i.symbol), T = Object(l.useCallback)((function() {
                return h ? c.a.createElement(Ya, {
                    onDismiss: f,
                    message: h
                }) : c.a.createElement(Ma, {
                    title: "Confirm Swap",
                    onDismiss: f,
                    topContent: k,
                    bottomContent: C
                })
            }
            ), [f, C, k, h]);
            return c.a.createElement(Fa, {
                isOpen: v,
                onDismiss: f,
                attemptingTxn: g,
                hash: E,
                content: T,
                pendingText: O,
                currencyToAdd: null === u || void 0 === u ? void 0 : u.outputAmount.currency
            })
        }
        function Yu(e) {
            return null !== e && void 0 !== e
        }
        function Fu(e) {
            return function(e, t) {
                var n = Object(l.useState)(t && t(e) ? e : void 0)
                  , a = Object(f.a)(n, 2)
                  , r = a[0]
                  , o = a[1];
                return Object(l.useEffect)((function() {
                    o((function(n) {
                        return !t || t(e) ? e : n
                    }
                    ))
                }
                ), [t, e]),
                r
            }(e, Yu)
        }
        var Du = Object(l.memo)((function(e) {
            var t = e.trade;
            return c.a.createElement(u.w, {
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "flex-end",
                alignItems: "center"
            }, t.route.path.map((function(e, t, n) {
                var a = t === n.length - 1
                  , r = ct(e);
                return c.a.createElement(l.Fragment, {
                    key: t
                }, c.a.createElement(u.w, {
                    alignItems: "end"
                }, c.a.createElement(u.X, {
                    fontSize: "14px",
                    ml: "0.125rem",
                    mr: "0.125rem"
                }, r.symbol)), !a && c.a.createElement(u.q, {
                    width: "12px"
                }))
            }
            )))
        }
        ));
        function zu(e) {
            var t, n, a, r, o = e.trade, i = e.allowedSlippage, l = Cl(o), s = l.priceImpactWithoutFee, d = l.realizedLPFee, m = o.tradeType === b.m.EXACT_INPUT, p = Ol(o, i);
            return c.a.createElement(Ln, {
                style: {
                    padding: "0 16px"
                }
            }, c.a.createElement(ca, null, c.a.createElement(da, null, c.a.createElement(u.X, {
                fontSize: "14px",
                color: "textSubtle"
            }, m ? "Minimum received" : "Maximum sold"), c.a.createElement(Zr, {
                text: "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.",
                ml: "4px"
            })), c.a.createElement(da, null, c.a.createElement(u.X, {
                fontSize: "14px"
            }, m ? null !== (t = "".concat(null === (n = p[pl.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(4), " ").concat(o.outputAmount.currency.symbol)) && void 0 !== t ? t : "-" : null !== (a = "".concat(null === (r = p[pl.INPUT]) || void 0 === r ? void 0 : r.toSignificant(4), " ").concat(o.inputAmount.currency.symbol)) && void 0 !== a ? a : "-"))), c.a.createElement(ca, null, c.a.createElement(da, null, c.a.createElement(u.X, {
                fontSize: "14px",
                color: "textSubtle"
            }, "Price Impact"), c.a.createElement(Zr, {
                text: "The difference between the market price and estimated price due to trade size.",
                ml: "4px"
            })), c.a.createElement(Bu, {
                priceImpact: s
            })), c.a.createElement(ca, null, c.a.createElement(da, null, c.a.createElement(u.X, {
                fontSize: "14px",
                color: "textSubtle"
            }, "Liquidity Provider Fee"), c.a.createElement(Zr, {
                text: c.a.createElement(c.a.Fragment, null, c.a.createElement(u.X, {
                    mb: "12px"
                }, "For each trade a 0.25% fee is paid"), c.a.createElement(u.X, null, "- 0.17% to LP token holders"), c.a.createElement(u.X, null, "- 0.03% to the Treasury"), c.a.createElement(u.X, null, "- 0.05% towards CAKE buyback and burn")),
                ml: "4px"
            })), c.a.createElement(u.X, {
                fontSize: "14px"
            }, d ? "".concat(d.toSignificant(4), " ").concat(o.inputAmount.currency.symbol) : "-")))
        }
        function Ku(e) {
            var t = e.trade
              , n = hr()
              , a = Object(f.a)(n, 1)[0]
              , r = Boolean(t && t.route.path.length > 2);
            return c.a.createElement(Ln, {
                gap: "0px"
            }, t && c.a.createElement(c.a.Fragment, null, c.a.createElement(zu, {
                trade: t,
                allowedSlippage: a
            }), r && c.a.createElement(c.a.Fragment, null, c.a.createElement(ca, {
                style: {
                    padding: "0 16px"
                }
            }, c.a.createElement("span", {
                style: {
                    display: "flex",
                    alignItems: "center"
                }
            }, c.a.createElement(u.X, {
                fontSize: "14px",
                color: "textSubtle"
            }, "Route"), c.a.createElement(Zr, {
                text: "Routing through these tokens resulted in the best price for your trade.",
                ml: "4px"
            })), c.a.createElement(Du, {
                trade: t
            })))))
        }
        function _u() {
            var e = Object(Et.a)(["\n  margin-top: ", ";\n  padding-top: 16px;\n  padding-bottom: 16px;\n  width: 100%;\n  max-width: 400px;\n  border-radius: 20px;\n  background-color: ", ";\n\n  transform: ", ";\n  transition: transform 300ms ease-in-out;\n"]);
            return _u = function() {
                return e
            }
            ,
            e
        }
        var Xu = gt.e.div(_u(), (function(e) {
            return e.show ? "16px" : 0
        }
        ), (function(e) {
            return e.theme.colors.invertedContrast
        }
        ), (function(e) {
            return e.show ? "translateY(0%)" : "translateY(-100%)"
        }
        ));
        function qu(e) {
            var t, n = e.trade, a = Object(Wt.a)(e, ["trade"]), r = Fu(n);
            return c.a.createElement(Xu, {
                show: Boolean(n)
            }, c.a.createElement(Ku, Object.assign({}, a, {
                trade: null !== (t = null !== n && void 0 !== n ? n : r) && void 0 !== t ? t : void 0
            })))
        }
        function Wu(e) {
            var t, n, a, r, o, i = e.price, l = e.showInverted, s = e.setShowInverted, d = l ? null === i || void 0 === i ? void 0 : i.toSignificant(6) : null === i || void 0 === i || null === (t = i.invert()) || void 0 === t ? void 0 : t.toSignificant(6), m = Boolean((null === i || void 0 === i ? void 0 : i.baseCurrency) && (null === i || void 0 === i ? void 0 : i.quoteCurrency)), p = l ? "".concat(null === i || void 0 === i || null === (n = i.quoteCurrency) || void 0 === n ? void 0 : n.symbol, " per ").concat(null === i || void 0 === i || null === (a = i.baseCurrency) || void 0 === a ? void 0 : a.symbol) : "".concat(null === i || void 0 === i || null === (r = i.baseCurrency) || void 0 === r ? void 0 : r.symbol, " per ").concat(null === i || void 0 === i || null === (o = i.quoteCurrency) || void 0 === o ? void 0 : o.symbol);
            return c.a.createElement(u.X, {
                style: {
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex"
                }
            }, m ? c.a.createElement(c.a.Fragment, null, null !== d && void 0 !== d ? d : "-", " ", p, c.a.createElement(Iu, {
                onClick: function() {
                    return s(!l)
                }
            }, c.a.createElement(u.e, {
                width: "14px"
            }))) : "-")
        }
        var Vu = function(e) {
            var t = e.tokens
              , n = e.onDismiss
              , a = e.onCancel;
            return c.a.createElement(u.J, {
                title: "Import Token",
                onDismiss: function() {
                    n && n(),
                    a()
                },
                style: {
                    maxWidth: "420px"
                }
            }, c.a.createElement(Zo, {
                tokens: t,
                handleCurrencySelect: n
            }))
        };
        function Hu() {
            var e = Object(Et.a)(["\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(\n    90deg,\n    ", "\n      0%,\n    ", "\n      80%\n  );\n  opacity: 0.6;\n"]);
            return Hu = function() {
                return e
            }
            ,
            e
        }
        function Gu() {
            var e = Object(Et.a)(["\n  width: calc(100% - 20px);\n  display: flex;\n  align-items: center;\n"]);
            return Gu = function() {
                return e
            }
            ,
            e
        }
        function Qu() {
            var e = Object(Et.a)(["\n  min-width: 20px;\n  min-height: 20px;\n  background-color: ", ";\n  border-radius: 50%;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 8px;\n  font-size: 12px;\n"]);
            return Qu = function() {
                return e
            }
            ,
            e
        }
        function Ju() {
            var e = Object(Et.a)(["\n  width: 50%;\n"]);
            return Ju = function() {
                return e
            }
            ,
            e
        }
        var Zu, $u, es = Object(gt.e)(ca)(Ju()), ts = gt.e.div(Qu(), (function(e) {
            var t = e.theme
              , n = e.confirmed;
            return e.disabled ? t.colors.backgroundDisabled : n ? t.colors.success : t.colors.primary
        }
        )), ns = gt.e.div(Gu()), as = gt.e.div(Hu(), (function(e) {
            var t = e.theme
              , n = e.prevConfirmed;
            return e.disabled ? t.colors.backgroundDisabled : Object(Da.b)(.5, n ? t.colors.success : t.colors.primary)
        }
        ), (function(e) {
            var t = e.theme
              , n = e.prevConfirmed;
            return e.disabled ? t.colors.backgroundDisabled : n ? t.colors.primary : t.colors.backgroundDisabled
        }
        ));
        function rs(e) {
            var t = e.steps
              , n = e.disabled
              , a = void 0 !== n && n
              , r = Object(Wt.a)(e, ["steps", "disabled"]);
            return c.a.createElement(Ln, Object.assign({
                justify: "center"
            }, r), c.a.createElement(es, null, t.map((function(e, n) {
                return c.a.createElement(ns, {
                    key: n
                }, c.a.createElement(ts, {
                    confirmed: e,
                    disabled: a || !t[n - 1] && 0 !== n
                }, e ? "\u2713" : n + 1), c.a.createElement(as, {
                    prevConfirmed: e,
                    disabled: a
                }))
            }
            )), c.a.createElement(ts, {
                disabled: a || !t[t.length - 1]
            }, t.length + 1)))
        }
        function os(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50
              , n = arguments.length > 2 ? arguments[2] : void 0
              , a = Oe()
              , r = a.account
              , o = a.chainId
              , i = a.library
              , c = ul(n)
              , u = c.address
              , s = null === n ? r : u
              , d = Cc();
            return Object(l.useMemo)((function() {
                if (!e || !s || !i || !r || !o || !d)
                    return [];
                var n = Ta(0, i, r);
                if (!n)
                    return [];
                var a = [];
                return a.push(b.i.swapCallParameters(e, {
                    feeOnTransfer: !1,
                    allowedSlippage: new b.g(b.e.BigInt(t),pe),
                    recipient: s,
                    deadline: d.toNumber()
                })),
                e.tradeType === b.m.EXACT_INPUT && a.push(b.i.swapCallParameters(e, {
                    feeOnTransfer: !0,
                    allowedSlippage: new b.g(b.e.BigInt(t),pe),
                    recipient: s,
                    deadline: d.toNumber()
                })),
                a.map((function(e) {
                    return {
                        parameters: e,
                        contract: n
                    }
                }
                ))
            }
            ), [r, t, o, d, i, s, e])
        }
        !function(e) {
            e[e.INVALID = 0] = "INVALID",
            e[e.LOADING = 1] = "LOADING",
            e[e.VALID = 2] = "VALID"
        }(Zu || (Zu = {})),
        function(e) {
            e[e.NOT_APPLICABLE = 0] = "NOT_APPLICABLE",
            e[e.WRAP = 1] = "WRAP",
            e[e.UNWRAP = 2] = "UNWRAP"
        }($u || ($u = {}));
        var is = {
            wrapType: $u.NOT_APPLICABLE
        };
        function ls(e, t, n) {
            var a = Oe()
              , r = a.chainId
              , o = a.account
              , i = function(e) {
                var t = Oe().chainId;
                return jr(t ? b.n[t].address : void 0, Or, e)
            }()
              , c = Gr(null !== o && void 0 !== o ? o : void 0, e)
              , u = Object(l.useMemo)((function() {
                return Il(n, e)
            }
            ), [e, n])
              , s = Wl();
            return Object(l.useMemo)((function() {
                if (!i || !r || !e || !t)
                    return is;
                var n = u && c && !c.lessThan(u);
                return e === b.d && Object(b.o)(b.n[r], t) ? {
                    wrapType: $u.WRAP,
                    execute: n && u ? Object(p.a)(m.a.mark((function e() {
                        var t;
                        return m.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    i.deposit({
                                        value: "0x".concat(u.raw.toString(16))
                                    });
                                case 3:
                                    t = e.sent,
                                    s(t, {
                                        summary: "Wrap ".concat(u.toSignificant(6), " BNB to WBNB")
                                    }),
                                    e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7,
                                    e.t0 = e.catch(0),
                                    console.error("Could not deposit", e.t0);
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 7]])
                    }
                    ))) : void 0,
                    inputError: n ? void 0 : "Insufficient BNB balance"
                } : Object(b.o)(b.n[r], e) && t === b.d ? {
                    wrapType: $u.UNWRAP,
                    execute: n && u ? Object(p.a)(m.a.mark((function e() {
                        var t;
                        return m.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    i.withdraw("0x".concat(u.raw.toString(16)));
                                case 3:
                                    t = e.sent,
                                    s(t, {
                                        summary: "Unwrap ".concat(u.toSignificant(6), " WBNB to BNB")
                                    }),
                                    e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7,
                                    e.t0 = e.catch(0),
                                    console.error("Could not withdraw", e.t0);
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 7]])
                    }
                    ))) : void 0,
                    inputError: n ? void 0 : "Insufficient WBNB balance"
                } : is
            }
            ), [i, r, e, t, u, c, s])
        }
        function cs() {
            var e = Object(Et.a)(["\n  font-size: 12px;\n  font-weight: bold;\n  color: ", ";\n"]);
            return cs = function() {
                return e
            }
            ,
            e
        }
        var us = Object(gt.e)(u.X)(cs(), (function(e) {
            return e.theme.colors.secondary
        }
        ));
        function ss(e) {
            var t, n, a, r, o, i, s, d, y, h, v = e.history, g = Yl(), w = [_r(null === g || void 0 === g ? void 0 : g.inputCurrencyId), _r(null === g || void 0 === g ? void 0 : g.outputCurrencyId)], k = w[0], C = w[1], T = Object(l.useMemo)((function() {
                var e, t;
                return null !== (e = null === (t = [k, C]) || void 0 === t ? void 0 : t.filter((function(e) {
                    return e instanceof b.j
                }
                ))) && void 0 !== e ? e : []
            }
            ), [k, C]), x = Lr(), j = T && T.filter((function(e) {
                return !Boolean(e.address in x)
            }
            )), I = Oe().account, A = br(), N = Object(f.a)(A, 1)[0], S = hr(), P = Object(f.a)(S, 1)[0], R = xl(), B = R.independentField, U = R.typedValue, L = R.recipient, M = Sl(), Y = M.v2Trade, F = M.currencyBalances, D = M.parsedAmount, z = M.currencies, K = M.inputError, _ = ls(z[pl.INPUT], z[pl.OUTPUT], U), X = _.wrapType, q = _.execute, W = _.inputError, V = X !== $u.NOT_APPLICABLE, H = V ? void 0 : Y, G = V ? (t = {},
            Object(E.a)(t, pl.INPUT, D),
            Object(E.a)(t, pl.OUTPUT, D),
            t) : (n = {},
            Object(E.a)(n, pl.INPUT, B === pl.INPUT ? D : null === H || void 0 === H ? void 0 : H.inputAmount),
            Object(E.a)(n, pl.OUTPUT, B === pl.OUTPUT ? D : null === H || void 0 === H ? void 0 : H.outputAmount),
            n), Q = jl(), J = Q.onSwitchTokens, Z = Q.onCurrencySelection, $ = Q.onUserInput, ee = Q.onChangeRecipient, te = !K, ne = B === pl.INPUT ? pl.OUTPUT : pl.INPUT, ae = Object(l.useCallback)((function(e) {
                $(pl.INPUT, e)
            }
            ), [$]), oe = Object(l.useCallback)((function(e) {
                $(pl.OUTPUT, e)
            }
            ), [$]), ie = Object(l.useState)({
                showConfirm: !1,
                tradeToConfirm: void 0,
                attemptingTxn: !1,
                swapErrorMessage: void 0,
                txHash: void 0
            }), le = Object(f.a)(ie, 2), ce = le[0], ue = ce.showConfirm, se = ce.tradeToConfirm, de = ce.swapErrorMessage, me = ce.attemptingTxn, pe = ce.txHash, fe = le[1], be = (s = {},
            Object(E.a)(s, B, U),
            Object(E.a)(s, ne, V ? null !== (a = null === (r = G[B]) || void 0 === r ? void 0 : r.toExact()) && void 0 !== a ? a : "" : null !== (o = null === (i = G[ne]) || void 0 === i ? void 0 : i.toSignificant(6)) && void 0 !== o ? o : ""),
            s), ve = null === H || void 0 === H ? void 0 : H.route, ge = Boolean(z[pl.INPUT] && z[pl.OUTPUT] && (null === (d = G[B]) || void 0 === d ? void 0 : d.greaterThan(b.e.BigInt(0)))), Ee = !ve, we = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , n = Object(l.useMemo)((function() {
                    return e ? Ol(e, t)[pl.INPUT] : void 0
                }
                ), [e, t]);
                return kc(n, re)
            }(H, P), ke = Object(f.a)(we, 2), Ce = ke[0], Te = ke[1], xe = Object(l.useState)(!1), je = Object(f.a)(xe, 2), Ie = je[0], Ae = je[1];
            Object(l.useEffect)((function() {
                Ce === gc.PENDING && Ae(!0)
            }
            ), [Ce, Ie]);
            var Ne = Ic(F[pl.INPUT])
              , Se = Boolean(Ne && (null === (y = G[pl.INPUT]) || void 0 === y ? void 0 : y.equalTo(Ne)))
              , Pe = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50
                  , n = arguments.length > 2 ? arguments[2] : void 0
                  , a = Oe()
                  , r = a.account
                  , o = a.chainId
                  , i = a.library
                  , c = os(e, t, n)
                  , u = Wl()
                  , s = ul(n)
                  , d = s.address
                  , f = null === n ? r : d;
                return Object(l.useMemo)((function() {
                    return e && i && r && o ? f ? {
                        state: Zu.VALID,
                        callback: function() {
                            var t = Object(p.a)(m.a.mark((function t() {
                                var a, o, i, l, s, d, p, b, y, h;
                                return m.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2,
                                            Promise.all(c.map((function(e) {
                                                var t, n = e.parameters, a = n.methodName, r = n.args, o = n.value, i = e.contract, l = !o || so(o) ? {} : {
                                                    value: o
                                                };
                                                return (t = i.estimateGas)[a].apply(t, Object(O.a)(r).concat([l])).then((function(t) {
                                                    return {
                                                        call: e,
                                                        gasEstimate: t
                                                    }
                                                }
                                                )).catch((function(t) {
                                                    var n;
                                                    return console.debug("Gas estimate failed, trying eth_call to extract error", e),
                                                    (n = i.callStatic)[a].apply(n, Object(O.a)(r).concat([l])).then((function(n) {
                                                        return console.debug("Unexpected successful call after failed estimate gas", e, t, n),
                                                        {
                                                            call: e,
                                                            error: new Error("Unexpected issue with estimating the gas. Please try again.")
                                                        }
                                                    }
                                                    )).catch((function(t) {
                                                        var n;
                                                        console.debug("Call threw error", e, t);
                                                        var a = t.reason || (null === (n = t.data) || void 0 === n ? void 0 : n.message) || t.message
                                                          , r = "The transaction cannot succeed due to error: ".concat(null !== a && void 0 !== a ? a : "Unknown error, check the logs", ".");
                                                        return {
                                                            call: e,
                                                            error: new Error(r)
                                                        }
                                                    }
                                                    ))
                                                }
                                                ))
                                            }
                                            )));
                                        case 2:
                                            if (a = t.sent,
                                            o = a.find((function(e, t, n) {
                                                return "gasEstimate"in e && (t === n.length - 1 || "gasEstimate"in n[t + 1])
                                            }
                                            ))) {
                                                t.next = 9;
                                                break
                                            }
                                            if (!((i = a.filter((function(e) {
                                                return "error"in e
                                            }
                                            ))).length > 0)) {
                                                t.next = 8;
                                                break
                                            }
                                            throw i[i.length - 1].error;
                                        case 8:
                                            throw new Error("Unexpected error. Please contact support: none of the calls threw an error");
                                        case 9:
                                            return l = o.call,
                                            s = l.contract,
                                            d = l.parameters,
                                            p = d.methodName,
                                            b = d.args,
                                            y = d.value,
                                            h = o.gasEstimate,
                                            t.abrupt("return", s[p].apply(s, Object(O.a)(b).concat([Object(jt.a)({
                                                gasLimit: ka(h)
                                            }, y && !so(y) ? {
                                                value: y,
                                                from: r
                                            } : {
                                                from: r
                                            })])).then((function(t) {
                                                var a = e.inputAmount.currency.symbol
                                                  , o = e.outputAmount.currency.symbol
                                                  , i = e.inputAmount.toSignificant(3)
                                                  , l = e.outputAmount.toSignificant(3)
                                                  , c = "Swap ".concat(i, " ").concat(a, " for ").concat(l, " ").concat(o)
                                                  , s = f === r ? c : "".concat(c, " to ").concat(n && ga(n) ? wa(n) : n);
                                                return u(t, {
                                                    summary: s
                                                }),
                                                t.hash
                                            }
                                            )).catch((function(e) {
                                                throw 4001 === (null === e || void 0 === e ? void 0 : e.code) ? new Error("Transaction rejected.") : (console.error("Swap failed", e, p, b, y),
                                                new Error("Swap failed: ".concat(e.message)))
                                            }
                                            )));
                                        case 11:
                                        case "end":
                                            return t.stop()
                                        }
                                }
                                ), t)
                            }
                            )));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        error: null
                    } : null !== n ? {
                        state: Zu.INVALID,
                        callback: null,
                        error: "Invalid recipient"
                    } : {
                        state: Zu.LOADING,
                        callback: null,
                        error: null
                    } : {
                        state: Zu.INVALID,
                        callback: null,
                        error: "Missing dependencies"
                    }
                }
                ), [e, i, r, o, f, n, c, u])
            }(H, P, L)
              , Re = Pe.callback
              , Be = Pe.error
              , Ue = Cl(H).priceImpactWithoutFee
              , Le = yr()
              , Me = Object(f.a)(Le, 1)[0]
              , Ye = Object(l.useCallback)((function() {
                Ue && !function(e) {
                    return e.lessThan(he) ? !!e.lessThan(ye) || window.confirm("This swap has a price impact of at least ".concat(ye.toFixed(0), "%. Please confirm that you would like to continue with this swap.")) : "confirm" === window.prompt("This swap has a price impact of at least ".concat(he.toFixed(0), '%. Please type the word "confirm" to continue with this swap.'))
                }(Ue) || Re && (fe({
                    attemptingTxn: !0,
                    tradeToConfirm: se,
                    showConfirm: ue,
                    swapErrorMessage: void 0,
                    txHash: void 0
                }),
                Re().then((function(e) {
                    fe({
                        attemptingTxn: !1,
                        tradeToConfirm: se,
                        showConfirm: ue,
                        swapErrorMessage: void 0,
                        txHash: e
                    })
                }
                )).catch((function(e) {
                    fe({
                        attemptingTxn: !1,
                        tradeToConfirm: se,
                        showConfirm: ue,
                        swapErrorMessage: e.message,
                        txHash: void 0
                    })
                }
                )))
            }
            ), [Ue, ue, Re, se])
              , Fe = Object(l.useState)(!1)
              , De = Object(f.a)(Fe, 2)
              , ze = De[0]
              , Ke = De[1]
              , _e = Tl(Ue)
              , Xe = !K && (Ce === gc.NOT_APPROVED || Ce === gc.PENDING || Ie && Ce === gc.APPROVED) && !(_e > 3 && !N)
              , qe = Object(l.useCallback)((function() {
                fe({
                    showConfirm: !1,
                    tradeToConfirm: se,
                    attemptingTxn: me,
                    swapErrorMessage: de,
                    txHash: pe
                }),
                pe && $(pl.INPUT, "")
            }
            ), [me, $, de, se, pe])
              , We = Object(l.useCallback)((function() {
                fe({
                    tradeToConfirm: H,
                    swapErrorMessage: de,
                    txHash: pe,
                    attemptingTxn: me,
                    showConfirm: ue
                })
            }
            ), [me, ue, de, H, pe])
              , Ve = Object(l.useCallback)((function(e) {
                Ae(!1),
                Z(pl.INPUT, e)
            }
            ), [Z])
              , He = Object(l.useCallback)((function() {
                Ne && $(pl.INPUT, Ne.toExact())
            }
            ), [Ne, $])
              , Ge = Object(l.useCallback)((function(e) {
                return Z(pl.OUTPUT, e)
            }
            ), [Z])
              , Qe = fl(null === z || void 0 === z ? void 0 : z.INPUT, null === z || void 0 === z ? void 0 : z.OUTPUT)
              , Je = Object(u.fb)(c.a.createElement(Vu, {
                tokens: j,
                onCancel: function() {
                    return v.push("/swap/")
                }
            }))
              , Ze = Object(f.a)(Je, 1)[0];
            return Object(l.useEffect)((function() {
                j.length > 0 && Ze()
            }
            ), [j.length]),
            c.a.createElement(Mc, null, c.a.createElement(uc, null, c.a.createElement(ic, {
                title: "Exchange",
                subtitle: "Trade tokens in an instant"
            }), c.a.createElement(Tu, {
                id: "swap-page"
            }, c.a.createElement(Mu, {
                isOpen: ue,
                trade: H,
                originalTrade: se,
                onAcceptChanges: We,
                attemptingTxn: me,
                txHash: pe,
                recipient: L,
                allowedSlippage: P,
                onConfirm: Ye,
                swapErrorMessage: de,
                onDismiss: qe
            }), c.a.createElement(Ln, {
                gap: "md"
            }, c.a.createElement(cl, {
                label: B === pl.OUTPUT && !V && H ? "From (estimated)" : "Claim",
                value: be[pl.INPUT],
                showMaxButton: !Se,
                currency: z[pl.INPUT],
                onUserInput: ae,
                onMax: He,
                onCurrencySelect: Ve,
                otherCurrency: z[pl.OUTPUT],
                value: "10",
                id: "swap-currency-input"
            }), c.a.createElement(Ln, {
                justify: "space-between"
            }, c.a.createElement(sa, {
                justify: N ? "space-between" : "center",
                style: {
                    padding: "0 1rem"
                }
            }, c.a.createElement(xu, {
                clickable: !0
            }, c.a.createElement(u.c, {
                width: "16px",
                onClick: function() {
                    Ae(!1),
                    J()
                },
                color: z[pl.INPUT] && z[pl.OUTPUT] ? "primary" : "text"
            })), null === L && !V && N ? c.a.createElement(u.g, {
                variant: "text",
                id: "add-recipient-button",
                onClick: function() {
                    return ee("")
                }
            }, "+ Add a send (optional)") : null)), c.a.createElement(cl, {
                value: be[pl.OUTPUT],
                onUserInput: oe,
                label: B === pl.INPUT && !V && H ? "To (estimated)" : "To",
                showMaxButton: !1,
                currency: z[pl.OUTPUT],
                onCurrencySelect: Ge,
                otherCurrency: z[pl.INPUT],
                id: "swap-currency-output"
            }), N && null !== L && !V ? c.a.createElement(c.a.Fragment, null, c.a.createElement(sa, {
                justify: "space-between",
                style: {
                    padding: "0 1rem"
                }
            }, c.a.createElement(xu, {
                clickable: !1
            }, c.a.createElement(u.c, {
                width: "16px"
            })), c.a.createElement(u.g, {
                variant: "text",
                id: "remove-recipient-button",
                onClick: function() {
                    return ee(null)
                }
            }, "- Remove send")), c.a.createElement(bu, {
                id: "recipient",
                value: L,
                onChange: ee
            })) : null, V ? null : c.a.createElement(Ln, {
                gap: "8px",
                style: {
                    padding: "0 16px"
                }
            }, Boolean(H) && c.a.createElement(ca, {
                align: "center"
            }, c.a.createElement(us, null, "Price"), c.a.createElement(Wu, {
                price: null === H || void 0 === H ? void 0 : H.executionPrice,
                showInverted: ze,
                setShowInverted: Ke
            })), 50 !== P && c.a.createElement(ca, {
                align: "center"
            }, c.a.createElement(us, null, "Slippage Tolerance"), c.a.createElement(u.X, {
                bold: !0,
                color: "primary"
            }, P / 100, "%")))), c.a.createElement(u.f, {
                mt: "1rem"
            }, Qe ? c.a.createElement(u.g, {
                width: "100%",
                disabled: !0,
                mb: "4px"
            }, "Unsupported Asset") : I ? V ? c.a.createElement(u.g, {
                width: "100%",
                disabled: Boolean(W),
                onClick: q
            }, null !== W && void 0 !== W ? W : X === $u.WRAP ? "Wrap" : X === $u.UNWRAP ? "Unwrap" : null) : Ee && ge ? c.a.createElement(An, {
                style: {
                    textAlign: "center"
                }
            }, c.a.createElement(u.X, {
                color: "textSubtle",
                mb: "4px"
            }, "Insufficient liquidity for this trade."), Me && c.a.createElement(u.X, {
                color: "textSubtle",
                mb: "4px"
            }, "Try enabling multi-hop trades.")) : Xe ? c.a.createElement(ca, null, c.a.createElement(u.g, {
                variant: Ce === gc.APPROVED ? "success" : "primary",
                onClick: Te,
                disabled: Ce !== gc.NOT_APPROVED || Ie,
                width: "48%"
            }, Ce === gc.PENDING ? c.a.createElement(sa, {
                gap: "6px",
                justify: "center"
            }, "Approving ", c.a.createElement(Jt, {
                stroke: "white"
            })) : Ie && Ce === gc.APPROVED ? "Approved" : "Approve " + (null === (h = z[pl.INPUT]) || void 0 === h ? void 0 : h.symbol)), c.a.createElement(u.g, {
                variant: te && _e > 2 ? "danger" : "primary",
                onClick: function() {
                    N ? Ye() : fe({
                        tradeToConfirm: H,
                        attemptingTxn: !1,
                        swapErrorMessage: void 0,
                        showConfirm: !0,
                        txHash: void 0
                    })
                },
                width: "48%",
                id: "swap-button",
                disabled: !te || Ce !== gc.APPROVED || _e > 3 && !N
            }, _e > 3 && !N ? "Price Impact High" : "Swap".concat(_e > 2 ? " Anyway" : ""))) : c.a.createElement(u.g, {
                variant: te && _e > 2 && !Be ? "danger" : "primary",
                onClick: function() {
                    N ? Ye() : fe({
                        tradeToConfirm: H,
                        attemptingTxn: !1,
                        swapErrorMessage: void 0,
                        showConfirm: !0,
                        txHash: void 0
                    })
                },
                id: "swap-button",
                width: "100%",
                disabled: !te || _e > 3 && !N || !!Be
            }, K || (_e > 3 && !N ? "Price Impact Too High" : "Swap".concat(_e > 2 ? " Anyway" : ""))) : c.a.createElement(wc, null), Xe && c.a.createElement(Mn, {
                style: {
                    marginTop: "1rem"
                }
            }, c.a.createElement(rs, {
                steps: [Ce === gc.APPROVED]
            })), N && de ? c.a.createElement(Pu, {
                error: de
            }) : null))), Qe ? c.a.createElement(Bc, {
                currencies: [z.INPUT, z.OUTPUT]
            }) : c.a.createElement(qu, {
                trade: H
            }))
        }
        function ds(e) {
            var t = e.location;
            return c.a.createElement(Le.a, {
                to: Object(jt.a)(Object(jt.a)({}, t), {}, {
                    pathname: "/swap"
                })
            })
        }
        function ms(e) {
            var t = e.location.search
              , n = e.match.params.outputCurrency;
            return c.a.createElement(Le.a, {
                to: Object(jt.a)(Object(jt.a)({}, e.location), {}, {
                    pathname: "/swap",
                    search: t && t.length > 1 ? "".concat(t, "&outputCurrency=").concat(n) : "?outputCurrency=".concat(n)
                })
            })
        }
        function ps() {
            return bt(),
            c.a.createElement(l.Suspense, {
                fallback: null
            }, c.a.createElement(Le.b, {
                component: vn
            }), c.a.createElement(Mt, null, c.a.createElement(nn, null, c.a.createElement(Le.d, null, c.a.createElement(Le.b, {
                exact: !0,
                strict: !0,
                path: "/swap",
                component: ss
            }), c.a.createElement(Le.b, {
                exact: !0,
                strict: !0,
                path: "/swap/:outputCurrency",
                component: ms
            }), c.a.createElement(Le.b, {
                exact: !0,
                strict: !0,
                path: "/send",
                component: ds
            }), c.a.createElement(Le.b, {
                exact: !0,
                strict: !0,
                path: "/find",
                component: Jc
            }), c.a.createElement(Le.b, {
                exact: !0,
                strict: !0,
                path: "/pool",
                component: qc
            }), c.a.createElement(Le.b, {
                exact: !0,
                strict: !0,
                path: "/create",
                component: Fc
            }), c.a.createElement(Le.b, {
                exact: !0,
                path: "/add",
                component: Yc
            }), c.a.createElement(Le.b, {
                exact: !0,
                path: "/add/:currencyIdA",
                component: zc
            }), c.a.createElement(Le.b, {
                exact: !0,
                path: "/add/:currencyIdA/:currencyIdB",
                component: Kc
            }), c.a.createElement(Le.b, {
                exact: !0,
                path: "/create",
                component: Yc
            }), c.a.createElement(Le.b, {
                exact: !0,
                path: "/create/:currencyIdA",
                component: zc
            }), c.a.createElement(Le.b, {
                exact: !0,
                path: "/create/:currencyIdA/:currencyIdB",
                component: Kc
            }), c.a.createElement(Le.b, {
                exact: !0,
                strict: !0,
                path: "/remove/:tokens",
                component: iu
            }), c.a.createElement(Le.b, {
                exact: !0,
                strict: !0,
                path: "/remove/:currencyIdA/:currencyIdB",
                component: ru
            }), c.a.createElement(Le.b, {
                component: ds
            })))))
        }
        var fs = n(163)
          , bs = Object(De.b)("application/updateBlockNumber")
          , ys = Object(De.c)({
            blockNumber: {}
        }, (function(e) {
            return e.addCase(bs, (function(e, t) {
                var n = t.payload
                  , a = n.chainId
                  , r = n.blockNumber;
                "number" !== typeof e.blockNumber[a] ? e.blockNumber[a] = r : e.blockNumber[a] = Math.max(r, e.blockNumber[a])
            }
            ))
        }
        ))
          , hs = Object(De.b)("global/updateVersion")
          , vs = function() {
            return (new Date).getTime()
        };
        function gs(e, t) {
            return "".concat(e, ";").concat(t)
        }
        var Es, ws = {
            userDarkMode: null,
            matchesDarkMode: !1,
            userExpertMode: !1,
            userSingleHopOnly: !1,
            userSlippageTolerance: 50,
            userDeadline: 1200,
            tokens: {},
            pairs: {},
            timestamp: vs(),
            URLWarningVisible: !0,
            audioPlay: !0
        }, ks = Object(De.c)(ws, (function(e) {
            return e.addCase(hs, (function(e) {
                "number" !== typeof e.userSlippageTolerance && (e.userSlippageTolerance = 50),
                "number" !== typeof e.userDeadline && (e.userDeadline = 1200),
                e.lastUpdateVersionTimestamp = vs()
            }
            )).addCase(on, (function(e, t) {
                e.userDarkMode = t.payload.userDarkMode,
                e.timestamp = vs()
            }
            )).addCase(rn, (function(e, t) {
                e.matchesDarkMode = t.payload.matchesDarkMode,
                e.timestamp = vs()
            }
            )).addCase(ln, (function(e, t) {
                e.userExpertMode = t.payload.userExpertMode,
                e.timestamp = vs()
            }
            )).addCase(un, (function(e, t) {
                e.userSlippageTolerance = t.payload.userSlippageTolerance,
                e.timestamp = vs()
            }
            )).addCase(sn, (function(e, t) {
                e.userDeadline = t.payload.userDeadline,
                e.timestamp = vs()
            }
            )).addCase(cn, (function(e, t) {
                e.userSingleHopOnly = t.payload.userSingleHopOnly
            }
            )).addCase(dn, (function(e, t) {
                var n = t.payload.serializedToken;
                e.tokens || (e.tokens = {}),
                e.tokens[n.chainId] = e.tokens[n.chainId] || {},
                e.tokens[n.chainId][n.address] = n,
                e.timestamp = vs()
            }
            )).addCase(mn, (function(e, t) {
                var n = t.payload
                  , a = n.address
                  , r = n.chainId;
                e.tokens || (e.tokens = {}),
                e.tokens[r] = e.tokens[r] || {},
                delete e.tokens[r][a],
                e.timestamp = vs()
            }
            )).addCase(pn, (function(e, t) {
                var n = t.payload.serializedPair;
                if (n.token0.chainId === n.token1.chainId && n.token0.address !== n.token1.address) {
                    var a = n.token0.chainId;
                    e.pairs[a] = e.pairs[a] || {},
                    e.pairs[a][gs(n.token0.address, n.token1.address)] = n
                }
                e.timestamp = vs()
            }
            )).addCase(fn, (function(e, t) {
                var n = t.payload
                  , a = n.chainId
                  , r = n.tokenAAddress
                  , o = n.tokenBAddress;
                e.pairs[a] && (delete e.pairs[a][gs(r, o)],
                delete e.pairs[a][gs(o, r)]),
                e.timestamp = vs()
            }
            )).addCase(bn, (function(e) {
                e.URLWarningVisible = !e.URLWarningVisible
            }
            )).addCase(yn, (function(e) {
                e.audioPlay = !1
            }
            )).addCase(hn, (function(e) {
                e.audioPlay = !0
            }
            ))
        }
        )), Cs = function() {
            return (new Date).getTime()
        }, Os = Object(De.c)({}, (function(e) {
            return e.addCase(Kl, (function(e, t) {
                var n, a, r = t.payload, o = r.chainId, i = r.from, l = r.hash, c = r.approval, u = r.summary, s = r.claim;
                if (null === (n = e[o]) || void 0 === n ? void 0 : n[l])
                    throw Error("Attempted to add existing transaction.");
                var d = null !== (a = e[o]) && void 0 !== a ? a : {};
                d[l] = {
                    hash: l,
                    approval: c,
                    summary: u,
                    claim: s,
                    from: i,
                    addedTime: Cs()
                },
                e[o] = d
            }
            )).addCase(_l, (function(e, t) {
                var n = t.payload.chainId;
                e[n] && (e[n] = {})
            }
            )).addCase(ql, (function(e, t) {
                var n, a = t.payload, r = a.chainId, o = a.hash, i = a.blockNumber, l = null === (n = e[r]) || void 0 === n ? void 0 : n[o];
                l && (l.lastCheckedBlockNumber ? l.lastCheckedBlockNumber = Math.max(i, l.lastCheckedBlockNumber) : l.lastCheckedBlockNumber = i)
            }
            )).addCase(Xl, (function(e, t) {
                var n, a = t.payload, r = a.hash, o = a.chainId, i = a.receipt, l = null === (n = e[o]) || void 0 === n ? void 0 : n[r];
                l && (l.receipt = i,
                l.confirmedTime = Cs())
            }
            ))
        }
        )), Ts = (Es = {
            independentField: pl.INPUT,
            typedValue: ""
        },
        Object(E.a)(Es, pl.INPUT, {
            currencyId: ""
        }),
        Object(E.a)(Es, pl.OUTPUT, {
            currencyId: ""
        }),
        Object(E.a)(Es, "recipient", null),
        Es), xs = Object(De.c)(Ts, (function(e) {
            return e.addCase(vl, (function(e, t) {
                var n, a = t.payload, r = a.typedValue, o = a.recipient, i = a.field, l = a.inputCurrencyId, c = a.outputCurrencyId;
                return n = {},
                Object(E.a)(n, pl.INPUT, {
                    currencyId: l
                }),
                Object(E.a)(n, pl.OUTPUT, {
                    currencyId: c
                }),
                Object(E.a)(n, "independentField", i),
                Object(E.a)(n, "typedValue", r),
                Object(E.a)(n, "recipient", o),
                n
            }
            )).addCase(bl, (function(e, t) {
                var n, a = t.payload, r = a.currencyId, o = a.field, i = o === pl.INPUT ? pl.OUTPUT : pl.INPUT;
                return r === e[i].currencyId ? Object(jt.a)(Object(jt.a)({}, e), {}, (n = {
                    independentField: e.independentField === pl.INPUT ? pl.OUTPUT : pl.INPUT
                },
                Object(E.a)(n, o, {
                    currencyId: r
                }),
                Object(E.a)(n, i, {
                    currencyId: e[o].currencyId
                }),
                n)) : Object(jt.a)(Object(jt.a)({}, e), {}, Object(E.a)({}, o, {
                    currencyId: r
                }))
            }
            )).addCase(yl, (function(e) {
                var t;
                return Object(jt.a)(Object(jt.a)({}, e), {}, (t = {
                    independentField: e.independentField === pl.INPUT ? pl.OUTPUT : pl.INPUT
                },
                Object(E.a)(t, pl.INPUT, {
                    currencyId: e[pl.OUTPUT].currencyId
                }),
                Object(E.a)(t, pl.OUTPUT, {
                    currencyId: e[pl.INPUT].currencyId
                }),
                t))
            }
            )).addCase(hl, (function(e, t) {
                var n = t.payload
                  , a = n.field
                  , r = n.typedValue;
                return Object(jt.a)(Object(jt.a)({}, e), {}, {
                    independentField: a,
                    typedValue: r
                })
            }
            )).addCase(gl, (function(e, t) {
                var n = t.payload.recipient;
                e.recipient = n
            }
            ))
        }
        )), js = {
            independentField: Ec.CURRENCY_A,
            typedValue: "",
            otherTypedValue: ""
        }, Is = Object(De.c)(js, (function(e) {
            return e.addCase(Tc, (function() {
                return js
            }
            )).addCase(Oc, (function(e, t) {
                var n = t.payload
                  , a = n.field
                  , r = n.typedValue;
                return n.noLiquidity ? a === e.independentField ? Object(jt.a)(Object(jt.a)({}, e), {}, {
                    independentField: a,
                    typedValue: r
                }) : Object(jt.a)(Object(jt.a)({}, e), {}, {
                    independentField: a,
                    typedValue: r,
                    otherTypedValue: e.typedValue
                }) : Object(jt.a)(Object(jt.a)({}, e), {}, {
                    independentField: a,
                    typedValue: r,
                    otherTypedValue: ""
                })
            }
            ))
        }
        )), As = n(75), Ns = {
            error: null,
            current: null,
            loadingRequestId: null,
            pendingUpdate: null
        }, Ss = {
            lastInitializedDefaultListOfLists: Wa,
            byUrl: Object(jt.a)({}, Wa.concat.apply(Wa, Object(O.a)(qa)).reduce((function(e, t) {
                return e[t] = Ns,
                e
            }
            ), {})),
            activeListUrls: Va
        }, Ps = Object(De.c)(Ss, (function(e) {
            return e.addCase($o.pending, (function(e, t) {
                var n = t.payload
                  , a = n.requestId
                  , r = n.url;
                e.byUrl[r] = Object(jt.a)(Object(jt.a)({
                    current: null,
                    pendingUpdate: null
                }, e.byUrl[r]), {}, {
                    loadingRequestId: a,
                    error: null
                })
            }
            )).addCase($o.fulfilled, (function(e, t) {
                var n, a, r = t.payload, o = r.requestId, i = r.tokenList, l = r.url, c = null === (n = e.byUrl[l]) || void 0 === n ? void 0 : n.current, u = null === (a = e.byUrl[l]) || void 0 === a ? void 0 : a.loadingRequestId;
                if (c) {
                    if (Object(As.b)(c.version, i.version) === As.a.NONE)
                        return;
                    null !== u && u !== o || (e.byUrl[l] = Object(jt.a)(Object(jt.a)({}, e.byUrl[l]), {}, {
                        loadingRequestId: null,
                        error: null,
                        current: c,
                        pendingUpdate: i
                    }))
                } else {
                    var s;
                    if (Va.includes(l))
                        null === (s = e.activeListUrls) || void 0 === s || s.push(l);
                    e.byUrl[l] = Object(jt.a)(Object(jt.a)({}, e.byUrl[l]), {}, {
                        loadingRequestId: null,
                        error: null,
                        current: i,
                        pendingUpdate: null
                    })
                }
            }
            )).addCase($o.rejected, (function(e, t) {
                var n, a = t.payload, r = a.url, o = a.requestId, i = a.errorMessage;
                (null === (n = e.byUrl[r]) || void 0 === n ? void 0 : n.loadingRequestId) === o && (e.byUrl[r] = Object(jt.a)(Object(jt.a)({}, e.byUrl[r]), {}, {
                    loadingRequestId: null,
                    error: i,
                    current: null,
                    pendingUpdate: null
                }))
            }
            )).addCase(ei, (function(e, t) {
                var n = t.payload;
                e.byUrl[n] || (e.byUrl[n] = Ns)
            }
            )).addCase(ti, (function(e, t) {
                var n = t.payload;
                e.byUrl[n] && delete e.byUrl[n],
                e.activeListUrls && e.activeListUrls.includes(n) && (e.activeListUrls = e.activeListUrls.filter((function(e) {
                    return e !== n
                }
                )))
            }
            )).addCase(ni, (function(e, t) {
                var n = t.payload;
                e.byUrl[n] || (e.byUrl[n] = Ns),
                e.activeListUrls && !e.activeListUrls.includes(n) && e.activeListUrls.push(n),
                e.activeListUrls || (e.activeListUrls = [n])
            }
            )).addCase(ai, (function(e, t) {
                var n = t.payload;
                e.activeListUrls && e.activeListUrls.includes(n) && (e.activeListUrls = e.activeListUrls.filter((function(e) {
                    return e !== n
                }
                )))
            }
            )).addCase(ri, (function(e, t) {
                var n, a = t.payload;
                if (!(null === (n = e.byUrl[a]) || void 0 === n ? void 0 : n.pendingUpdate))
                    throw new Error("accept list update called without pending update");
                e.byUrl[a] = Object(jt.a)(Object(jt.a)({}, e.byUrl[a]), {}, {
                    pendingUpdate: null,
                    current: e.byUrl[a].pendingUpdate
                })
            }
            )).addCase(hs, (function(e) {
                if (e.lastInitializedDefaultListOfLists) {
                    if (e.lastInitializedDefaultListOfLists) {
                        var t = e.lastInitializedDefaultListOfLists.reduce((function(e, t) {
                            return e.add(t)
                        }
                        ), new Set)
                          , n = Wa.reduce((function(e, t) {
                            return e.add(t)
                        }
                        ), new Set);
                        Wa.forEach((function(n) {
                            t.has(n) || (e.byUrl[n] = Ns)
                        }
                        )),
                        e.lastInitializedDefaultListOfLists.forEach((function(t) {
                            n.has(t) || delete e.byUrl[t]
                        }
                        ))
                    }
                } else
                    e.byUrl = Ss.byUrl,
                    e.activeListUrls = Ss.activeListUrls;
                e.lastInitializedDefaultListOfLists = Wa,
                e.activeListUrls || (e.activeListUrls = Va,
                Va.map((function(t) {
                    return e.byUrl[t] || (e.byUrl[t] = Ns),
                    !0
                }
                )))
            }
            ))
        }
        )), Rs = {
            independentField: Zc.LIQUIDITY_PERCENT,
            typedValue: "0"
        }, Bs = Object(De.c)(Rs, (function(e) {
            return e.addCase(eu, (function(e, t) {
                var n = t.payload
                  , a = n.field
                  , r = n.typedValue;
                return Object(jt.a)(Object(jt.a)({}, e), {}, {
                    independentField: a,
                    typedValue: r
                })
            }
            ))
        }
        )), Us = Object(De.c)({
            callResults: {}
        }, (function(e) {
            return e.addCase(qe, (function(e, t) {
                var n, a = t.payload, r = a.calls, o = a.chainId, i = a.options, l = (i = void 0 === i ? {} : i).blocksPerFetch, c = void 0 === l ? 1 : l, u = e.callListeners ? e.callListeners : e.callListeners = {};
                u[o] = null !== (n = u[o]) && void 0 !== n ? n : {},
                r.forEach((function(e) {
                    var t, n, a = _e(e);
                    u[o][a] = null !== (t = u[o][a]) && void 0 !== t ? t : {},
                    u[o][a][c] = (null !== (n = u[o][a][c]) && void 0 !== n ? n : 0) + 1
                }
                ))
            }
            )).addCase(We, (function(e, t) {
                var n = t.payload
                  , a = n.chainId
                  , r = n.calls
                  , o = n.options
                  , i = (o = void 0 === o ? {} : o).blocksPerFetch
                  , l = void 0 === i ? 1 : i
                  , c = e.callListeners ? e.callListeners : e.callListeners = {};
                c[a] && r.forEach((function(e) {
                    var t = _e(e);
                    c[a][t] && c[a][t][l] && (1 === c[a][t][l] ? delete c[a][t][l] : c[a][t][l]--)
                }
                ))
            }
            )).addCase(Ve, (function(e, t) {
                var n, a = t.payload, r = a.chainId, o = a.fetchingBlockNumber, i = a.calls;
                e.callResults[r] = null !== (n = e.callResults[r]) && void 0 !== n ? n : {},
                i.forEach((function(t) {
                    var n = _e(t)
                      , a = e.callResults[r][n];
                    if (a) {
                        var i;
                        if ((null !== (i = a.fetchingBlockNumber) && void 0 !== i ? i : 0) >= o)
                            return;
                        e.callResults[r][n].fetchingBlockNumber = o
                    } else
                        e.callResults[r][n] = {
                            fetchingBlockNumber: o
                        }
                }
                ))
            }
            )).addCase(He, (function(e, t) {
                var n, a = t.payload, r = a.fetchingBlockNumber, o = a.chainId, i = a.calls;
                e.callResults[o] = null !== (n = e.callResults[o]) && void 0 !== n ? n : {},
                i.forEach((function(t) {
                    var n = _e(t)
                      , a = e.callResults[o][n];
                    a && a.fetchingBlockNumber === r && (delete a.fetchingBlockNumber,
                    a.data = null,
                    a.blockNumber = r)
                }
                ))
            }
            )).addCase(Ge, (function(e, t) {
                var n, a = t.payload, r = a.chainId, o = a.results, i = a.blockNumber;
                e.callResults[r] = null !== (n = e.callResults[r]) && void 0 !== n ? n : {},
                Object.keys(o).forEach((function(t) {
                    var n, a = e.callResults[r][t];
                    (null !== (n = null === a || void 0 === a ? void 0 : a.blockNumber) && void 0 !== n ? n : 0) > i || (e.callResults[r][t] = {
                        data: o[t],
                        blockNumber: i
                    })
                }
                ))
            }
            ))
        }
        )), Ls = ["user", "transactions", "lists"], Ms = Object(De.a)({
            reducer: {
                application: ys,
                user: ks,
                transactions: Os,
                swap: xs,
                mint: Is,
                burn: Bs,
                multicall: Us,
                lists: Ps
            },
            middleware: [].concat(Object(O.a)(Object(De.d)({
                thunk: !1
            })), [Object(fs.save)({
                states: Ls
            })]),
            preloadedState: Object(fs.load)({
                states: Ls
            })
        });
        Ms.dispatch(hs());
        var Ys = Ms;
        Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        var Fs = "visibilityState"in document;
        function Ds() {
            return !Fs || "hidden" !== document.visibilityState
        }
        function zs() {
            var e = Object(l.useState)(Ds())
              , t = Object(f.a)(e, 2)
              , n = t[0]
              , a = t[1]
              , r = Object(l.useCallback)((function() {
                a(Ds())
            }
            ), [a]);
            return Object(l.useEffect)((function() {
                if (Fs)
                    return document.addEventListener("visibilitychange", r),
                    function() {
                        document.removeEventListener("visibilitychange", r)
                    }
            }
            ), [r]),
            n
        }
        function Ks() {
            var e = Oe()
              , t = e.library
              , n = e.chainId
              , a = Object(Ie.c)()
              , r = zs()
              , o = Object(l.useState)({
                chainId: n,
                blockNumber: null
            })
              , i = Object(f.a)(o, 2)
              , c = i[0]
              , u = i[1]
              , s = Object(l.useCallback)((function(e) {
                u((function(t) {
                    return n === t.chainId ? "number" !== typeof t.blockNumber ? {
                        chainId: n,
                        blockNumber: e
                    } : {
                        chainId: n,
                        blockNumber: Math.max(e, t.blockNumber)
                    } : t
                }
                ))
            }
            ), [n, u]);
            Object(l.useEffect)((function() {
                if (t && n && r)
                    return u({
                        chainId: n,
                        blockNumber: null
                    }),
                    t.getBlockNumber().then(s).catch((function(e) {
                        return console.error("Failed to get block number for chainId: ".concat(n), e)
                    }
                    )),
                    t.on("block", s),
                    function() {
                        t.removeListener("block", s)
                    }
            }
            ), [a, n, t, s, r]);
            var d = Ho(c, 100);
            return Object(l.useEffect)((function() {
                d.chainId && d.blockNumber && r && a(bs({
                    chainId: d.chainId,
                    blockNumber: d.blockNumber
                }))
            }
            ), [r, a, d.blockNumber, d.chainId]),
            null
        }
        function _s() {
            var e = Oe().library
              , t = Object(Ie.c)()
              , n = zs()
              , a = nr()
              , r = or();
            Mr();
            var o = bi();
            return function(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                  , a = Object(l.useRef)();
                Object(l.useEffect)((function() {
                    a.current = e
                }
                ), [e]),
                Object(l.useEffect)((function() {
                    function e() {
                        var e = a.current;
                        e && e()
                    }
                    if (null !== t) {
                        n && e();
                        var r = setInterval(e, t);
                        return function() {
                            return clearInterval(r)
                        }
                    }
                }
                ), [t, n])
            }(Object(l.useCallback)((function() {
                n && Object.keys(a).forEach((function(e) {
                    return o(e).catch((function(e) {
                        return console.debug("interval list fetching error", e)
                    }
                    ))
                }
                ))
            }
            ), [o, n, a]), e ? 6e5 : null),
            Object(l.useEffect)((function() {
                Object.keys(a).forEach((function(e) {
                    var t = a[e];
                    t.current || t.loadingRequestId || t.error || o(e).catch((function(e) {
                        return console.debug("list added fetching error", e)
                    }
                    ))
                }
                ))
            }
            ), [t, o, e, a]),
            Object(l.useEffect)((function() {
                Object.keys(qa).forEach((function(e) {
                    var t = a[e];
                    t && (t.current || t.loadingRequestId || t.error) || o(e).catch((function(e) {
                        return console.debug("list added fetching error", e)
                    }
                    ))
                }
                ))
            }
            ), [t, o, e, a]),
            Object(l.useEffect)((function() {
                Object.keys(a).forEach((function(e) {
                    var n = a[e];
                    if (n.current && n.pendingUpdate)
                        switch (Object(As.b)(n.current.version, n.pendingUpdate.version)) {
                        case As.a.NONE:
                            throw new Error("unexpected no version bump");
                        case As.a.PATCH:
                        case As.a.MINOR:
                        case As.a.MAJOR:
                            t(ri(e))
                        }
                }
                ))
            }
            ), [t, a, r]),
            null
        }
        function Xs(e, t) {
            return n = e + Math.round(Math.random() * Math.max(0, t - e)),
            new Promise((function(e) {
                return setTimeout(e, n)
            }
            ));
            var n
        }
        var qs = function(e) {
            Object(R.a)(n, e);
            var t = Object(B.a)(n);
            function n() {
                return Object(P.a)(this, n),
                t.call(this, "Cancelled")
            }
            return n
        }(Object(U.a)(Error))
          , Ws = function(e) {
            Object(R.a)(n, e);
            var t = Object(B.a)(n);
            function n() {
                return Object(P.a)(this, n),
                t.apply(this, arguments)
            }
            return n
        }(Object(U.a)(Error));
        function Vs() {
            return (Vs = Object(p.a)(m.a.mark((function e(t, n, a) {
                var r, o, i, l;
                return m.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return console.debug("Fetching chunk", t, n, a),
                            e.prev = 1,
                            e.next = 5,
                            t.aggregate(n.map((function(e) {
                                return [e.address, e.callData]
                            }
                            )));
                        case 5:
                            i = e.sent,
                            l = Object(f.a)(i, 2),
                            r = l[0],
                            o = l[1],
                            e.next = 15;
                            break;
                        case 11:
                            throw e.prev = 11,
                            e.t0 = e.catch(1),
                            console.debug("Failed to fetch chunk inside retry", e.t0),
                            e.t0;
                        case 15:
                            if (!(r.toNumber() < a)) {
                                e.next = 18;
                                break
                            }
                            throw console.debug("Fetched results for old block number: ".concat(r.toString(), " vs. ").concat(a)),
                            new Ws("Fetched for old block number");
                        case 18:
                            return e.abrupt("return", {
                                results: o,
                                blockNumber: r.toNumber()
                            });
                        case 19:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[1, 11]])
            }
            )))).apply(this, arguments)
        }
        function Hs() {
            var e = Object(Ie.c)()
              , t = Object(Ie.d)((function(e) {
                return e.multicall
            }
            ))
              , n = Ho(t.callListeners, 100)
              , a = Fe()
              , r = Oe().chainId
              , o = Sr()
              , i = Object(l.useRef)()
              , c = Object(l.useMemo)((function() {
                return function(e, t) {
                    if (!e || !t)
                        return {};
                    var n = e[t];
                    return n ? Object.keys(n).reduce((function(e, t) {
                        var a = n[t];
                        return e[t] = Object.keys(a).filter((function(e) {
                            var t = parseInt(e);
                            return !(t <= 0) && a[t] > 0
                        }
                        )).reduce((function(e, t) {
                            return Math.min(e, parseInt(t))
                        }
                        ), 1 / 0),
                        e
                    }
                    ), {}) : {}
                }(n, r)
            }
            ), [n, r])
              , u = Object(l.useMemo)((function() {
                return function(e, t, n, a) {
                    return n && a ? e[n] ? Object.keys(t).filter((function(r) {
                        var o = t[r]
                          , i = e[n][r];
                        if (!i)
                            return !0;
                        var l = a - (o - 1);
                        return !(i.fetchingBlockNumber && i.fetchingBlockNumber >= l) && (!i.blockNumber || i.blockNumber < l)
                    }
                    )) : Object.keys(t) : []
                }(t.callResults, c, r, a)
            }
            ), [r, t.callResults, c, a])
              , s = Object(l.useMemo)((function() {
                return JSON.stringify(u.sort())
            }
            ), [u]);
            return Object(l.useEffect)((function() {
                var t;
                if (a && r && o) {
                    var n = JSON.parse(s);
                    if (0 !== n.length) {
                        var l, c, u = n.map((function(e) {
                            return Xe(e)
                        }
                        )), d = function(e, t) {
                            if (t < 1)
                                throw new Error("maxChunkSize must be gte 1");
                            if (e.length <= t)
                                return [e];
                            var n = Math.ceil(e.length / t)
                              , a = Math.ceil(e.length / n);
                            return Object(O.a)(Array(n).keys()).map((function(t) {
                                return e.slice(t * a, t * a + a)
                            }
                            ))
                        }(u, 500);
                        if ((null === (t = i.current) || void 0 === t ? void 0 : t.blockNumber) !== a)
                            null === (l = i.current) || void 0 === l || null === (c = l.cancellations) || void 0 === c || c.forEach((function(e) {
                                return e()
                            }
                            ));
                        e(Ve({
                            calls: u,
                            chainId: r,
                            fetchingBlockNumber: a
                        })),
                        i.current = {
                            blockNumber: a,
                            cancellations: d.map((function(t, l) {
                                var c = function(e, t) {
                                    var n, a = t.n, r = t.minWait, o = t.maxWait, i = !1;
                                    return {
                                        promise: new Promise(function() {
                                            var t = Object(p.a)(m.a.mark((function t(l, c) {
                                                var u;
                                                return m.a.wrap((function(t) {
                                                    for (; ; )
                                                        switch (t.prev = t.next) {
                                                        case 0:
                                                            n = c;
                                                        case 1:
                                                            return u = void 0,
                                                            t.prev = 3,
                                                            t.next = 6,
                                                            e();
                                                        case 6:
                                                            return u = t.sent,
                                                            i || (l(u),
                                                            i = !0),
                                                            t.abrupt("break", 24);
                                                        case 11:
                                                            if (t.prev = 11,
                                                            t.t0 = t.catch(3),
                                                            !i) {
                                                                t.next = 15;
                                                                break
                                                            }
                                                            return t.abrupt("break", 24);
                                                        case 15:
                                                            if (!(a <= 0) && t.t0 instanceof Ws) {
                                                                t.next = 19;
                                                                break
                                                            }
                                                            return c(t.t0),
                                                            i = !0,
                                                            t.abrupt("break", 24);
                                                        case 19:
                                                            a--;
                                                        case 20:
                                                            return t.next = 22,
                                                            Xs(r, o);
                                                        case 22:
                                                            t.next = 1;
                                                            break;
                                                        case 24:
                                                        case "end":
                                                            return t.stop()
                                                        }
                                                }
                                                ), t, null, [[3, 11]])
                                            }
                                            )));
                                            return function(e, n) {
                                                return t.apply(this, arguments)
                                            }
                                        }()),
                                        cancel: function() {
                                            i || (i = !0,
                                            n(new qs))
                                        }
                                    }
                                }((function() {
                                    return function(e, t, n) {
                                        return Vs.apply(this, arguments)
                                    }(o, t, a)
                                }
                                ), {
                                    n: 1 / 0,
                                    minWait: 2500,
                                    maxWait: 3500
                                })
                                  , u = c.cancel;
                                return c.promise.then((function(t) {
                                    var o = t.results
                                      , c = t.blockNumber;
                                    i.current = {
                                        cancellations: [],
                                        blockNumber: a
                                    };
                                    var u = d.slice(0, l).reduce((function(e, t) {
                                        return e + t.length
                                    }
                                    ), 0)
                                      , s = u + o.length;
                                    e(Ge({
                                        chainId: r,
                                        results: n.slice(u, s).reduce((function(e, t, n) {
                                            var a;
                                            return e[t] = null !== (a = o[n]) && void 0 !== a ? a : null,
                                            e
                                        }
                                        ), {}),
                                        blockNumber: c
                                    }))
                                }
                                )).catch((function(n) {
                                    n instanceof qs ? console.debug("Cancelled fetch for blockNumber", a) : (console.error("Failed to fetch multicall chunk", t, r, n),
                                    e(He({
                                        calls: t,
                                        chainId: r,
                                        fetchingBlockNumber: a
                                    })))
                                }
                                )),
                                u
                            }
                            ))
                        }
                    }
                }
            }
            ), [r, o, e, s, a]),
            null
        }
        function Gs() {
            var e, t = Oe(), n = t.chainId, a = t.library, r = Fe(), o = Object(Ie.c)(), i = Object(Ie.d)((function(e) {
                return e.transactions
            }
            )), s = n && null !== (e = i[n]) && void 0 !== e ? e : {}, d = I(), m = d.toastError, p = d.toastSuccess;
            return Object(l.useEffect)((function() {
                n && a && r && Object.keys(s).filter((function(e) {
                    return function(e, t) {
                        if (t.receipt)
                            return !1;
                        if (!t.lastCheckedBlockNumber)
                            return !0;
                        var n = e - t.lastCheckedBlockNumber;
                        if (n < 1)
                            return !1;
                        var a = ((new Date).getTime() - t.addedTime) / 1e3 / 60;
                        return a > 60 ? n > 9 : !(a > 5) || n > 2
                    }(r, s[e])
                }
                )).forEach((function(e) {
                    a.getTransactionReceipt(e).then((function(t) {
                        var a, i;
                        t ? (o(Xl({
                            chainId: n,
                            hash: e,
                            receipt: {
                                blockHash: t.blockHash,
                                blockNumber: t.blockNumber,
                                contractAddress: t.contractAddress,
                                from: t.from,
                                status: t.status,
                                to: t.to,
                                transactionHash: t.transactionHash,
                                transactionIndex: t.transactionIndex
                            }
                        })),
                        (1 === t.status ? p : m)("Transaction receipt", c.a.createElement(u.w, {
                            flexDirection: "column"
                        }, c.a.createElement(u.X, null, null !== (a = null === (i = s[e]) || void 0 === i ? void 0 : i.summary) && void 0 !== a ? a : "Hash: " + e.slice(0, 8) + "..." + e.slice(58, 65)), n && c.a.createElement(u.E, {
                            external: !0,
                            href: Ea(n, e, "transaction")
                        }, "View on BscScan")))) : o(ql({
                            chainId: n,
                            hash: e,
                            blockNumber: r
                        }))
                    }
                    )).catch((function(t) {
                        console.error("failed to check transaction hash: ".concat(e), t)
                    }
                    ))
                }
                ))
            }
            ), [n, a, s, r, o, p, m]),
            null
        }
        function Qs() {
            var e = Object(Ie.c)();
            return Object(l.useEffect)((function() {
                var t, n = function(t) {
                    e(rn({
                        matchesDarkMode: t.matches
                    }))
                }, a = null === (t = window) || void 0 === t ? void 0 : t.matchMedia("(prefers-color-scheme: dark)");
                return e(rn({
                    matchesDarkMode: a.matches
                })),
                (null === a || void 0 === a ? void 0 : a.addListener) ? null === a || void 0 === a || a.addListener(n) : (null === a || void 0 === a ? void 0 : a.addEventListener) && (null === a || void 0 === a || a.addEventListener("change", n)),
                function() {
                    (null === a || void 0 === a ? void 0 : a.removeListener) ? null === a || void 0 === a || a.removeListener(n) : (null === a || void 0 === a ? void 0 : a.removeEventListener) && (null === a || void 0 === a || a.removeEventListener("change", n))
                }
            }
            ), [e]),
            null
        }
        function Js(e) {
            var t = new A.a(e,"any");
            return t.pollingInterval = 15e3,
            t
        }
        var Zs = Object(s.c)("NETWORK");
        function $s() {
            return c.a.createElement(c.a.Fragment, null, c.a.createElement(_s, null), c.a.createElement(Qs, null), c.a.createElement(Ks, null), c.a.createElement(Gs, null), c.a.createElement(Hs, null))
        }
        function ed(e) {
            var t = e.children
              , n = Oe().account;
            return Object(l.useMemo)((function() {
                return Boolean(n && -1 !== Ce.indexOf(n))
            }
            ), [n]) ? c.a.createElement("div", null, "Blocked address") : c.a.createElement(c.a.Fragment, null, t)
        }
        window.ethereum && (window.ethereum.autoRefreshOnNetworkChange = !1),
        je.a.render(c.a.createElement(l.StrictMode, null, c.a.createElement(s.b, {
            getLibrary: Js
        }, c.a.createElement(Zs, {
            getLibrary: Js
        }, c.a.createElement(Ut, null, c.a.createElement(ed, null, c.a.createElement(Ie.a, {
            store: Ys
        }, c.a.createElement(Ae.a, null, c.a.createElement(Ot, null, c.a.createElement(j, null, c.a.createElement(u.P, null, c.a.createElement($s, null), c.a.createElement(ps, null))))))))))), document.getElementById("root")),
        "serviceWorker"in navigator && navigator.serviceWorker.ready.then((function(e) {
            e.unregister()
        }
        )).catch((function(e) {
            console.error(e.message)
        }
        ))
    }
}, [[262, 1, 2]]]);
