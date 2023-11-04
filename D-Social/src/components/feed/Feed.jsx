import React, { Component } from "react";
import { Posts } from "../../data";
import Post from "../post/Post";
import Share from "../share/Share";
import Stories from "../stories/Stories";
import Sidebar from "../../components/sidebar/Sidebar";
import "./feed.scss";
import { Web3Storage } from "web3.storage/dist/bundle.esm.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';


// const Feed = () => {
//   return (
//     <div className="feed">
//       <div className="feedWrapper">
//         {/* <Stories /> */}
//         <Share />
//         {Posts.map((p) => (
//           <Post key={p.id} post={p} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Feed;
/* eslint-disable jsx-a11y/alt-text */
//import Identicon from "identicon.js";

//C:\Users\shara\Downloads\social-network\social-network-28e13af\node_modules\web3.storage\dist\bundle.esm.min.js

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      content: "",
    };
  }


  render() {
    function containsimgURL(text) {
      const urlRegex = /(https?:\/\/[^\s]+\.jpg)/g;
      return urlRegex.test(text);
    }
    function containsvidURL(text) {
      const urlRegex = /(https?:\/\/[^\s]+\.mp4)/g;
      return urlRegex.test(text);
    }

    return (
      <div className="feed">
        <div>
          <h1>D-MEDIA</h1>
          <main
            role="main"
            className="col-lg-12 ml-auto mr-auto"
            style={{ maxWidth: "500px" }}
            
          >
            <div className="content mr-auto ml-auto">
              <div>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    //const content = this.postContent.value + this.state.url;
                    console.log("img url is ", this.state.url);
                    const re = this.postContent.value;
                    const texturl =
                      this.postContent.value + "http" + this.state.url;
                    console.log("total text is ", texturl);
                    this.setState({ content: `${texturl}` });
                    console.log("total content", this.state.content);
                    console.log("text only", re);
                    //this.props.createPost(imageurl);
                    this.props.createPost(texturl);
                  }}
                >
                  <div className="form-group mr-sm-2">
                    <input
                      id="postContent"
                      type="text"
                      ref={(input) => {
                        this.postContent = input;
                      }}
                      className="form-control"
                      placeholder="What's on your mind?"
                    />
                  </div>
                  
                  <input
                    title="Select a file"
                    type="file"
                    id="filepicker"
                    name="fileList"
                    multiple
                  />
                  <button
                    type="button"
                    id="ss"
                    onClick={() => {
                      // window.location.reload();
                      const filesz = document.getElementById("filepicker");
                      const file = filesz.value;
                      const a = file.split("\\").pop();
                      console.log(a);
                      const token =
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDYzNTY5QUQ0NkMwODZCQ2IzMEEwNDA3YkIyZDBjZTAxNjRlYTNEQjkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODEzNzUyMDE4NDAsIm5hbWUiOiJkLXNvY2lhbCJ9.ya5oKoapnufT6igTJmURUG9wATu0hL2nd-eYTkoVdgA";
                      const client = new Web3Storage({ token });
                      console.log(client);
                      const files = filesz.files;
                      client.put(files, {
                        onRootCidReady: (localCid) => {
                          const url = `https://dweb.link/ipfs/${localCid}/${a}`;
                          const encodedUrl = encodeURI(url);
                          console.log("url is " + url);
                          const img = document.createElement("img");
                          img.src = { url };
                          img.alt = "hi";
                          this.setState({
                            url: encodedUrl,
                          });
                        },
                      });
                    }}
                  >
                    PREVIEW
                  </button>
                  <br />
                  <br />

                  {containsimgURL(this.state.url) && (
                          <img
                            src={
                              this.state.url.match(/(https?:\/\/[^\s]+\.jpg)/g)[0]
                            }
                            alt="no img"
                          />
                        )}

                        {containsvidURL(this.state.url) && (
                          <video width="320" height="240" controls>
                            <source
                              src={
                                this.state.url.match(
                                  /(https?:\/\/[^\s]+\.mp4)/g
                                )[0]
                              }
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        )}
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <button type="submit" className="btn btn-primary btn-block">
                    POST NOW
                  </button>
                </form>
              </div>
              {/* <button onClick={() => {
                    window.location.reload();
                  }}
                >REFRESH</button> */}

              {/* <p>&nbsp;</p> */}
              {this.props.posts.map((post, key) => {
                
                return (
                  // eslint-disable-next-line react/jsx-no-comment-textnodes
                  <div className="card mb-4" key={key}>
                    <div className="card-header">
                      
                      <small className="text-muted">{post.author}</small>
                    </div>
                    <ul id="postList" className="list-group list-group-flush">
                      <li className="list-group-item">
                        
                        <p>
                          {post.content.substring(
                            0,
                            post.content.indexOf("http")
                          )}
                        </p>

                        {containsimgURL(post.content) && (
                          <img
                            src={
                              post.content.match(/(https?:\/\/[^\s]+\.jpg)/g)[0]
                            }
                            alt="no img"
                          />
                        )}

                        {containsvidURL(post.content) && (
                          <video width="320" height="240" controls>
                            <source
                              src={
                                post.content.match(
                                  /(https?:\/\/[^\s]+\.mp4)/g
                                )[0]
                              }
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        )}
                      </li>
                      <li key={key} className="list-group-item py-2">
                        <small className="float-left mt-1 text-muted">
                          TIPS:{" "}
                          {window.web3.utils.fromWei(
                            post.tipAmount.toString(),
                            "Ether"
                          )}{" "}
                          ETH
                        </small>
                        <button
                          className="btn btn-link btn-sm float-right pt-0"
                          name={post.id}
                          onClick={(event) => {
                            let tipAmount = window.web3.utils.toWei(
                              "0.1",
                              "Ether"
                            );
                            console.log(event.target.name, tipAmount);
                            this.props.tipPost(event.target.name, tipAmount);
                          }}
                        >
                          TIP 0.1 ETH
                        </button>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    );
  }
}
export default Feed;




