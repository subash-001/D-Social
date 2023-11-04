import { React, Component } from "react";
import Feed from "../../components/feed/Feed";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import SocialNetwork from "../../abis/SocialNetwork.json";
import Web3 from "web3";

// const Home = () => {
//   return (
//     <div className="home">
//       <Navbar />
//       <div className="homeContainer">
//         <Sidebar />
//         <Feed />
//         <Rightbar />
//       </div>
//     </div>
//   );
// };

// export default Home;

class Home extends Component {
  async componentWillMount() {
    
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  async loadBlockchainData() {

    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    // Network ID
    const networkId = await web3.eth.net.getId()
    console.log("networkId",networkId)
    const networkData = SocialNetwork.networks[networkId]
     if (networkData) {
      const socialNetwork =new  web3.eth.Contract(SocialNetwork.abi,networkData.address);
      this.setState({ socialNetwork })
      const postCount = await socialNetwork.methods.postCount().call();
      this.setState({ postCount })
      // Load Posts
      for (var i = 1; i <= postCount; i++) {
        console.log("count",postCount);//16
        console.log("value of i",i);//16

        const post = await socialNetwork.methods.posts(i).call();
        //const post1 = await socialNetwork.methods.posts(1).call();

        console.log(post);
        this.setState({
          posts: [...this.state.posts, post]
        })
        console.log("lenghth of state",this.state.posts.length);
       }
       console.log("lenghth of state",this.state.posts.length);
       const post1 = await socialNetwork.methods.posts(1).call();
      console.log("lenghth of state",this.state.posts.length);
      // Sort posts. Show highest tipped posts first
      this.setState({
        posts: this.state.posts.sort((a, b) => b.tipAmount - a.tipAmount),
      });
      this.setState({ loading: false });
    } 
    else {
      window.alert("SocialNetwork contract not deployed to detected network.");
    }
  }

  createPost(content) {
    // window.location.reload();
    // this.setState({ loading: true })
    this.state.socialNetwork.methods.createPost(content).send({ from: this.state.account })
      .once("receipt", (receipt) => {
        // this.setState({ loading: true })
        console.log("ok");
        window.location.reload();
      });
  }

  

  tipPost(id, tipAmount) {
    // this.setState({ loading: true })
    this.state.socialNetwork.methods.tipPost(id).send({ from: this.state.account, value: tipAmount })
      .once("receipt", (receipt) => {
        // this.setState({ loading: false })
      });
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      socialNetwork: null,
      postCount: 0,
      posts: [],
      loading: false,
    };

    this.createPost = this.createPost.bind(this);
    this.tipPost = this.tipPost.bind(this);
  }

  render() {
    return (
      <div className="home">
        <Navbar account={this.state.account} />
        <div className="homeContainer">
        {/* <Sidebar /> */}
        <Sidebar />
        <Feed
          posts={this.state.posts}
           createPost={this.createPost}
          tipPost={this.tipPost}
        />
        {/* <Rightbar /> */}
        <Rightbar />
        </div>
        {/* <Main
              posts={this.state.posts}
              createPost={this.createPost}
              tipPost={this.tipPost}
            /> */}
      </div>
    );
  }
}

export default Home;